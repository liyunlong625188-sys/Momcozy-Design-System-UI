#!/usr/bin/env python3
"""Audit shared semantic icon usage across Momcozy static demos."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from collections import defaultdict
from pathlib import Path


RUNTIME_NAME = "momcozy-icons.js"
ICON_ELEMENT_RE = re.compile(r"<momcozy-icon\b[^>]*\bname=[\"']([^\"']+)[\"']", re.I)
INLINE_SVG_RE = re.compile(r"<svg\b[^>]*>.*?</svg>", re.I | re.S)
LEGACY_ICON_RE = re.compile(
    r"<(?:span|div|button)\b[^>]*class=[\"'][^\"']*icon[^\"']*[\"'][^>]*>"
    r"\s*([☀☾×›‹✦✓♡])\s*</(?:span|div|button)>",
    re.I,
)
REGISTRY_RE = re.compile(r"const MOMCOZY_ICONS = (\{.*?\});", re.S)


def demo_name(path: Path, root: Path) -> str:
    relative = path.relative_to(root)
    return relative.parts[0] if relative.parts else "."


def normalize_svg(source: str) -> str:
    return re.sub(r"\s+", " ", source).strip()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("demos_root", type=Path)
    args = parser.parse_args()
    root = args.demos_root.resolve()
    runtime = root / "_shared" / RUNTIME_NAME
    issues: list[str] = []

    if not runtime.is_file():
        issues.append(f"missing shared runtime: {runtime}")
        registered: set[str] = set()
    else:
        match = REGISTRY_RE.search(runtime.read_text(encoding="utf-8"))
        if not match:
            issues.append(f"cannot read semantic registry from: {runtime}")
            registered = set()
        else:
            registered = set(json.loads(match.group(1)))

    entries = sorted(root.glob("[0-9][0-9]-*/index.html"))
    if not entries:
        issues.append(f"no numbered demo entries found under: {root}")
    for entry in entries:
        if RUNTIME_NAME not in entry.read_text(encoding="utf-8"):
            issues.append(f"demo entry does not load {RUNTIME_NAME}: {entry}")

    html_and_js = sorted((*root.rglob("*.html"), *root.rglob("*.js")))
    icon_usage: dict[str, list[Path]] = defaultdict(list)
    svg_usage: dict[str, list[Path]] = defaultdict(list)
    glyph_usage: dict[str, list[Path]] = defaultdict(list)

    for path in html_and_js:
        if path == runtime:
            continue
        source = path.read_text(encoding="utf-8")
        for name in ICON_ELEMENT_RE.findall(source):
            icon_usage[name].append(path)
            if registered and name not in registered:
                issues.append(f"unknown semantic icon '{name}': {path}")
        for svg in INLINE_SVG_RE.findall(source):
            normalized = normalize_svg(svg)
            digest = hashlib.sha256(normalized.encode()).hexdigest()
            svg_usage[digest].append(path)
        for glyph in LEGACY_ICON_RE.findall(source):
            glyph_usage[glyph].append(path)

    for paths in svg_usage.values():
        demos = {demo_name(path, root) for path in paths}
        if len(demos) > 1:
            locations = ", ".join(str(path.relative_to(root)) for path in sorted(set(paths)))
            issues.append(f"cross-demo duplicate inline SVG: {locations}")

    for glyph, paths in glyph_usage.items():
        demos = {demo_name(path, root) for path in paths}
        if len(demos) > 1:
            locations = ", ".join(str(path.relative_to(root)) for path in sorted(set(paths)))
            issues.append(f"cross-demo legacy icon glyph '{glyph}': {locations}")

    print(f"Registered semantic icons: {len(registered)}")
    print(f"Used semantic icons: {len(icon_usage)}")
    for name in sorted(icon_usage):
        count = len(icon_usage[name])
        print(f"  {name}: {count}")

    if issues:
        print("\nIcon audit failed:", file=sys.stderr)
        for issue in issues:
            print(f"- {issue}", file=sys.stderr)
        return 1

    print("\nIcon audit passed: shared semantics are consistent across demos.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
