#!/usr/bin/env python3
"""Build a normalized shadcn/ui theme from Momcozy light/dark CSS exports."""

from __future__ import annotations

import argparse
import os
import re
from pathlib import Path
from urllib.parse import quote


SKILL_DIR = Path(__file__).resolve().parents[1]
DEFAULT_LIGHT = SKILL_DIR / "assets" / "momcozy-light.raw.css"
DEFAULT_DARK = SKILL_DIR / "assets" / "momcozy-dark.raw.css"
DEFAULT_OUTPUT = SKILL_DIR / "assets" / "momcozy-shadcn-theme.css"
FONT_REGULAR = SKILL_DIR / "assets" / "fonts" / "exposure" / "205TF-Exposure-[-10].otf"
FONT_ITALIC = SKILL_DIR / "assets" / "fonts" / "exposure" / "205TF-Exposure-[-10]Italic.otf"
AEONIK_FONTS = [
    ("AeonikSoftPro-Light.otf", 300),
    ("AeonikSoftPro-Regular.otf", 400),
    ("AeonikSoftPro-Medium.otf", 500),
    ("AeonikSoftPro-SemiBold.otf", 600),
]
AEONIK_DIR = SKILL_DIR / "assets" / "fonts" / "aeonik-soft-pro"

VAR_DECL_RE = re.compile(r"(--[A-Za-z0-9_,.-]+)\s*:\s*([^;]+);")
VAR_REF_RE = re.compile(r"var\((--[A-Za-z0-9_,.-]+)(?:\s*,[^)]*)?\)")

SPACING_SCALES = [
    "0",
    "px",
    "0-5",
    "1",
    "2",
    "2-5",
    "3",
    "3-5",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "24",
    "48",
    "72",
    "96",
]

STATUS_BASES = {
    "info": "#582443",
    "warning": "#F38245",
    "caution": "#F38245",
    "danger": "#D20307",
    "success": "#009E3D",
    "discovery": "#8568C2",
}

TYPOGRAPHY_ROLES = [
    ("heading-xl", "--Typography-Heading-XL"),
    ("heading-l", "--Typography-heading-L"),
    ("heading-m", "--Typography-heading-M"),
    ("heading-s", "--Typography-heading-S"),
    ("title-xl-medium", "--Typography-titleXL-medium"),
    ("title-l-medium", "--Typography-titleL-medium"),
    ("title-m-medium", "--Typography-titleM-medium"),
    ("title-m-regular", "--Typography-titleM-regular"),
    ("body-l-regular", "--Typography-bodyL-regular"),
    ("body-m-medium", "--Typography-bodyM-medium"),
    ("body-m-regular", "--Typography-bodyM-regular"),
    ("body-s-medium", "--Typography-bodyS-medium"),
    ("body-s-regular", "--Typography-bodyS-regular"),
    ("caption-m-medium", "--Typography-captionM-medium"),
    ("caption-m-regular", "--Typography-captionM-regular"),
]

WEIGHT_MAP = {
    "Light": "300",
    "Regular": "400",
    "Medium": "500",
    "SemiBold": "600",
    "Bold": "600",
}

SHADCN_MAP = {
    "background": "--Colors-Backgrouds-Primary",
    "foreground": "--Colors-Text-color-text-primary",
    "card": "--Colors-Backgrouds-Secondary",
    "card-foreground": "--Colors-Text-color-text-primary",
    "popover": "--Colors-Backgrouds-Secondary",
    "popover-foreground": "--Colors-Text-color-text-primary",
    "primary": "--Colors-Grays-900",
    "primary-foreground": "--Colors-Grays-0",
    "secondary": "--Colors-Grays-100",
    "secondary-foreground": "--Colors-Grays-900",
    "muted": "--Colors-Grays-100",
    "muted-foreground": "--Colors-Text-color-text-secondary",
    "accent": "--Colors-Grays-150",
    "accent-foreground": "--Colors-Grays-900",
    "destructive": "--Status-Danger-75",
    "destructive-foreground": "--Colors-Grays-White",
    "border": "--Colors-Border-Primary",
    "input": "--Colors-Border-Primary",
    "ring": "--Colors-Grays-900",
}


def normalize_name(name: str) -> str:
    body = name[2:] if name.startswith("--") else name
    body = body.replace(",", "-").replace(".", "-")
    body = re.sub(r"(^|-)-(?=\d)", r"\1neg-", body)
    body = re.sub(r"[^A-Za-z0-9-]+", "-", body)
    body = re.sub(r"-{2,}", "-", body).strip("-").lower()
    return f"--{body}"


def normalize_refs(value: str) -> str:
    def repl(match: re.Match[str]) -> str:
        return f"var({normalize_name(match.group(1))})"

    return VAR_REF_RE.sub(repl, value)


def parse_vars(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8")
    values = {
        normalize_name(name): normalize_refs(value.strip())
        for name, value in VAR_DECL_RE.findall(text)
    }
    add_common_aliases(values)
    return values


def add_common_aliases(values: dict[str, str]) -> None:
    for name, value in list(values.items()):
        match = re.fullmatch(r"--tokens-(neg-)?(\d+(?:-\d+)?)", name)
        if match:
            bare = f"--{'neg-' if match.group(1) else ''}{match.group(2)}"
            values.setdefault(bare, value)

    for percent in range(0, 101, 5):
        values.setdefault(f"--opacity-opacity-{percent}", f"{percent}%")
        values.setdefault(f"--alpha-{percent}", alpha_value(percent))

    for scale in SPACING_SCALES:
        height = f"--spacing-heights-h-{scale}"
        width = f"--spacing-widths-w-{scale}"
        if height in values:
            values.setdefault(f"--space-{scale}", f"var({height})")
        if height in values:
            values.setdefault(f"--size-h-{scale}", f"var({height})")
        if width in values:
            values.setdefault(f"--size-w-{scale}", f"var({width})")

    for status, color in STATUS_BASES.items():
        values.setdefault(f"--status-{status}-base", color)


def alpha_value(percent: int) -> str:
    if percent == 0:
        return "0"
    if percent == 100:
        return "1"
    return f"{percent / 100:.2f}".rstrip("0").rstrip(".")


def resolve_value(name: str, values: dict[str, str], seen: set[str] | None = None) -> str:
    seen = seen or set()
    normalized = normalize_name(name)
    if normalized in seen:
        return f"var({normalized})"
    seen.add(normalized)
    value = values.get(normalized)
    if value is None:
        return f"var({normalized})"

    def repl(match: re.Match[str]) -> str:
        ref = normalize_name(match.group(1))
        return resolve_value(ref, values, seen.copy())

    return VAR_REF_RE.sub(repl, value)


def css_url(path: Path, output: Path) -> str:
    rel = os.path.relpath(path, output.parent).replace(os.sep, "/")
    return quote(rel, safe="/.-_[]")


def font_faces(output: Path) -> str:
    faces = []
    if FONT_REGULAR.exists():
        faces.append(
            "@font-face {\n"
            "  font-family: \"Exposure[-10]\";\n"
            f"  src: url(\"{css_url(FONT_REGULAR, output)}\") format(\"opentype\");\n"
            "  font-style: normal;\n"
            "  font-weight: 400;\n"
            "  font-display: swap;\n"
            "}"
        )
    if FONT_ITALIC.exists():
        faces.append(
            "@font-face {\n"
            "  font-family: \"Exposure[-10]\";\n"
            f"  src: url(\"{css_url(FONT_ITALIC, output)}\") format(\"opentype\");\n"
            "  font-style: italic;\n"
            "  font-weight: 400;\n"
            "  font-display: swap;\n"
            "}"
        )

    for filename, weight in AEONIK_FONTS:
        font_path = AEONIK_DIR / filename
        if font_path.exists():
            faces.append(
                "@font-face {\n"
                "  font-family: \"Aeonik Soft Pro\";\n"
                f"  src: url(\"{css_url(font_path, output)}\") format(\"opentype\");\n"
                "  font-style: normal;\n"
                f"  font-weight: {weight};\n"
                "  font-display: swap;\n"
                "}"
            )
    return "\n\n".join(faces)


def typography_font_value(source_name: str, values: dict[str, str]) -> str:
    value = resolve_value(source_name, values).strip()
    if value == "Exposure[-10]":
        return "var(--font-brand)"
    if value == "Aeonik Soft Pro":
        return "var(--font-sans)"
    if " " in value or "[" in value or "]" in value:
        return f'"{value}"'
    return value


def typography_weight_value(source_name: str, values: dict[str, str]) -> str:
    value = resolve_value(source_name, values).strip()
    return WEIGHT_MAP.get(value, value)


def add_typography_tokens(lines: list[str], values: dict[str, str]) -> None:
    lines.append("")
    lines.append("  /* Typography semantic tokens */")
    for role, prefix in TYPOGRAPHY_ROLES:
        base = normalize_name(prefix)
        lines.append(f"  --type-{role}-font-family: {typography_font_value(base + '-font', values)};")
        lines.append(f"  --type-{role}-font-weight: {typography_weight_value(base + '-weight', values)};")
        lines.append(
            f"  --type-{role}-font-weight-emphasized: "
            f"{typography_weight_value(base + '-weight-emphasized', values)};"
        )
        lines.append(f"  --type-{role}-font-size: {resolve_value(base + '-size', values)};")
        lines.append(f"  --type-{role}-line-height: {resolve_value(base + '-height', values)};")
        lines.append(f"  --type-{role}-letter-spacing: {resolve_value(base + '-tracking', values)};")


def add_radius_tokens(lines: list[str], values: dict[str, str]) -> None:
    radius = "--Radius-md" if normalize_name("--Radius-md") in values else "--Tokens-8"
    lines.append(f"  --radius: {resolve_value(radius, values)};")

    fallback_tokens = [
        ("--radius-sm", "calc(var(--radius) - 4px)"),
        ("--radius-md", "calc(var(--radius) - 2px)"),
        ("--radius-lg", "var(--radius)"),
        ("--radius-xl", "calc(var(--radius) + 4px)"),
    ]
    for name, value in fallback_tokens:
        if normalize_name(name) not in values:
            lines.append(f"  {name}: {value};")


def block(selector: str, values: dict[str, str]) -> str:
    lines = [f"{selector} {{"]
    lines.append("  /* Momcozy normalized tokens */")
    for name in sorted(values):
        lines.append(f"  {name}: {values[name]};")

    lines.append("")
    lines.append("  /* shadcn/ui semantic tokens */")
    for shadcn_name, source_name in SHADCN_MAP.items():
        lines.append(f"  --{shadcn_name}: {resolve_value(source_name, values)};")

    lines.append("  --font-brand: \"Exposure[-10]\";")
    lines.append("  --font-sans: \"Aeonik Soft Pro\", ui-sans-serif, system-ui, sans-serif;")

    add_typography_tokens(lines, values)

    add_radius_tokens(lines, values)
    lines.append("}")
    return "\n".join(lines)


def unresolved(values: dict[str, str]) -> list[str]:
    defined = set(values)
    refs = set()
    for value in values.values():
        refs.update(normalize_name(match.group(1)) for match in VAR_REF_RE.finditer(value))
    return sorted(refs - defined)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--light", type=Path, default=DEFAULT_LIGHT)
    parser.add_argument("--dark", type=Path, default=DEFAULT_DARK)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    args = parser.parse_args()

    light = parse_vars(args.light)
    dark = parse_vars(args.dark)
    parts = ["/* Generated from Momcozy 3.0 Figma token exports. */"]
    faces = font_faces(args.output)
    if faces:
        parts.append(faces)
    parts.extend([block(":root", light), block(".dark", dark)])
    css = "\n\n".join(parts)
    args.output.write_text(css + "\n", encoding="utf-8")

    missing = sorted(set(unresolved(light)) | set(unresolved(dark)))
    print(f"Wrote {args.output}")
    if missing:
        print("Unresolved variable references:")
        for name in missing:
            print(f"  {name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
