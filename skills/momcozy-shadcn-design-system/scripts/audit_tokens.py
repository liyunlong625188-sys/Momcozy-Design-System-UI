#!/usr/bin/env python3
"""Audit Momcozy token coverage across raw exports, generated CSS, and docs."""

from __future__ import annotations

import argparse
import importlib.util
import re
import sys
from pathlib import Path


SKILL_DIR = Path(__file__).resolve().parents[1]
BUILD_SCRIPT = SKILL_DIR / "scripts" / "build_shadcn_theme.py"
DEFAULT_LIGHT = SKILL_DIR / "assets" / "momcozy-light.raw.css"
DEFAULT_DARK = SKILL_DIR / "assets" / "momcozy-dark.raw.css"
DEFAULT_THEME = SKILL_DIR / "assets" / "momcozy-shadcn-theme.css"
COLOR_DOC = SKILL_DIR / "references" / "color-system.md"
FOUNDATION_DOC = SKILL_DIR / "references" / "foundation-tokens.md"
TYPOGRAPHY_DOC = SKILL_DIR / "references" / "typography.md"


def load_builder():
    spec = importlib.util.spec_from_file_location("momcozy_theme_builder", BUILD_SCRIPT)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Cannot load {BUILD_SCRIPT}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def raw_declarations(path: Path, builder) -> list[str]:
    text = path.read_text(encoding="utf-8")
    return [builder.normalize_name(name) for name, _ in builder.VAR_DECL_RE.findall(text)]


def css_declarations(path: Path) -> set[str]:
    text = path.read_text(encoding="utf-8")
    return set(re.findall(r"(--[a-z0-9-]+)\s*:", text))


def css_unresolved_refs(path: Path) -> set[str]:
    text = path.read_text(encoding="utf-8")
    vars_ = set(re.findall(r"(--[a-z0-9-]+)\s*:", text))
    refs = set(re.findall(r"var\((--[a-z0-9-]+)\)", text))
    return refs - vars_


def doc_vars(path: Path, prefix: str) -> set[str]:
    text = path.read_text(encoding="utf-8")
    return set(re.findall(rf"`({re.escape(prefix)}[^`{{}}]+)`", text))


def doc_count(path: Path, pattern: str) -> int:
    text = path.read_text(encoding="utf-8")
    return len(set(re.findall(pattern, text)))


def typography_roles_from_raw(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8")
    roles: list[str] = []
    for role in re.findall(
        r"--Typography-([A-Za-z0-9-]+)-(?:Font|Weight|Weight-emphasized|Size|Height|Tracking)\s*:",
        text,
    ):
        if role not in roles:
            roles.append(role)
    return roles


def typography_rows_from_doc(path: Path) -> int:
    rows = 0
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith("| ") and not line.startswith("| ---") and "样式" not in line:
            rows += 1
    return rows


def check(label: str, passed: bool, details: str, failures: list[str]) -> None:
    status = "PASS" if passed else "FAIL"
    print(f"[{status}] {label}: {details}")
    if not passed:
        failures.append(label)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--light", type=Path, default=DEFAULT_LIGHT)
    parser.add_argument("--dark", type=Path, default=DEFAULT_DARK)
    parser.add_argument("--theme", type=Path, default=DEFAULT_THEME)
    args = parser.parse_args()

    builder = load_builder()
    failures: list[str] = []

    light_raw = raw_declarations(args.light, builder)
    dark_raw = raw_declarations(args.dark, builder)
    light_set = set(light_raw)
    dark_set = set(dark_raw)
    check(
        "raw variable names",
        light_set == dark_set,
        f"light {len(light_raw)}, dark {len(dark_raw)}, unique {len(light_set)}",
        failures,
    )

    generated = css_declarations(args.theme)
    missing_generated = light_set - generated
    check(
        "generated CSS includes raw tokens",
        not missing_generated,
        f"missing {len(missing_generated)}",
        failures,
    )

    unresolved = css_unresolved_refs(args.theme)
    check("generated CSS refs", not unresolved, f"unresolved {len(unresolved)}", failures)

    raw_colors = {name for name in light_set if name.startswith("--colors-")}
    documented_colors = doc_vars(COLOR_DOC, "--colors-")
    check(
        "color doc coverage",
        raw_colors == documented_colors,
        f"{len(documented_colors)}/{len(raw_colors)}",
        failures,
    )

    foundation_expectations = [
        ("opacity percent aliases", r"`--opacity-opacity-\d+`", 21),
        ("alpha aliases", r"`--alpha-\d+`", 21),
        ("height vars", r"`--spacing-heights-h-[^`]+`", 24),
        ("width vars", r"`--spacing-widths-w-[^`]+`", 24),
        ("space aliases", r"`--space-[^`]+`", 24),
        ("radius vars", r"`--radius-[^`]+`", 10),
        ("shadow vars", r"`--shadows-shadow-[^`]+`", 12),
        ("status vars", r"`--status-[a-z]+-\d+`", 18),
    ]
    for label, pattern, expected in foundation_expectations:
        actual = doc_count(FOUNDATION_DOC, pattern)
        check(label, actual == expected, f"{actual}/{expected}", failures)

    raw_typography_roles = typography_roles_from_raw(args.light)
    doc_typography_rows = typography_rows_from_doc(TYPOGRAPHY_DOC)
    check(
        "typography roles",
        doc_typography_rows == len(raw_typography_roles),
        f"{doc_typography_rows}/{len(raw_typography_roles)}",
        failures,
    )

    typography_text = TYPOGRAPHY_DOC.read_text(encoding="utf-8")
    font_theme_tokens = [
        "--Font-theme-Font-Brand",
        "--Font-theme-Font-Plain",
        "--Font-theme-Weight-Light",
        "--Font-theme-Weight-Regular",
        "--Font-theme-Weight-Medium",
        "--Font-theme-Weight-Bold",
    ]
    font_theme_count = sum(token in typography_text for token in font_theme_tokens)
    check("font theme tokens", font_theme_count == 6, f"{font_theme_count}/6", failures)

    if failures:
        print("\nAudit failed:")
        for failure in failures:
            print(f"  - {failure}")
        return 1

    print("\nAudit passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
