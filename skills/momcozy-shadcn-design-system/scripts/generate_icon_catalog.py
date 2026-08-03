#!/usr/bin/env python3
"""Generate an approved icon catalog and an optional new-demo review queue."""

from __future__ import annotations

import argparse
import hashlib
import re
from collections import Counter, defaultdict
from dataclasses import dataclass
from pathlib import Path


REGISTRY_BLOCK_RE = re.compile(
    r"export\s+const\s+momcozyIcons\s*=\s*\{(.*?)\}\s*as\s+const", re.S
)
REGISTRY_ENTRY_RE = re.compile(
    r"^\s{2}([A-Za-z][\w]*):\s*([A-Za-z][\w]*),\s*$", re.M
)
STATIC_ICON_RE = re.compile(
    r"<momcozy-icon\b[^>]*\bname=[\"']([^\"']+)[\"']", re.I
)
REACT_ICON_RE = re.compile(
    r"(?:<Icon\b[^>]*\bname\s*=\s*|\bicon\s*:\s*)"
    r"[\"']([A-Za-z][\w]*)[\"']",
    re.S,
)
INLINE_SVG_RE = re.compile(r"<svg\b[^>]*>.*?</svg>", re.I | re.S)
IMAGE_RE = re.compile(r"<img\b([^>]*)>", re.I | re.S)
CSS_ICON_URL_RE = re.compile(
    r"url\([\"']?([^\"')]*icon[^\"')]*)[\"']?\)", re.I
)
LEGACY_GLYPH_RE = re.compile(
    r"<(?:span|div|button)\b([^>]*)>\s*([☀☾×›‹✦✓♡])\s*"
    r"</(?:span|div|button)>",
    re.I,
)
ICON_IMPORT_RE = re.compile(
    r"import\s*\{(.*?)\}\s*from\s*[\"']"
    r"([^\"']*(?:hugeicons|lucide)[^\"']*)[\"']",
    re.I | re.S,
)
ATTRIBUTE_RE = re.compile(r"([:\w-]+)\s*=\s*[\"']([^\"']*)[\"']", re.S)

SOURCE_SUFFIXES = {".html", ".js", ".jsx", ".ts", ".tsx", ".css"}
EXCLUSION_WORDS = {
    "avatar",
    "background",
    "banner",
    "brand",
    "character",
    "device frame",
    "empty state",
    "glow",
    "illustration",
    "logo",
    "photo",
    "product",
    "status bar",
}
SEMANTIC_ALIASES = {
    "add": "add",
    "ai": "ai",
    "attach": "attachment",
    "attachment": "attachment",
    "back": "arrowLeft",
    "bubble": "message",
    "calendar": "calendar",
    "camera": "camera",
    "check": "check",
    "close": "close",
    "collapse": "arrowDown",
    "community": "community",
    "delete": "close",
    "device": "package",
    "edit": "edit",
    "expand": "arrowDown",
    "favorite": "favorite",
    "help": "help",
    "history": "history",
    "home": "home",
    "info": "info",
    "message": "message",
    "next": "arrowRight",
    "notification": "notification",
    "profile": "profile",
    "setting": "settings",
    "search": "search",
    "send": "send",
    "settings": "settings",
    "share": "share",
    "star": "star",
    "user": "profile",
}


@dataclass(frozen=True)
class Candidate:
    candidate_id: str
    kind: str
    context: str
    source: str
    suggestion: str


def parse_registry(path: Path) -> dict[str, str]:
    source = path.read_text(encoding="utf-8")
    block = REGISTRY_BLOCK_RE.search(source)
    if not block:
        raise ValueError(f"Cannot find momcozyIcons registry in {path}")
    entries = dict(REGISTRY_ENTRY_RE.findall(block.group(1)))
    if not entries:
        raise ValueError(f"Icon registry is empty in {path}")
    return entries


def source_files(root: Path) -> list[Path]:
    if root.is_file():
        return [root] if root.suffix.lower() in SOURCE_SUFFIXES else []
    return sorted(
        path
        for path in root.rglob("*")
        if path.is_file()
        and path.suffix.lower() in SOURCE_SUFFIXES
        and "_shared" not in path.parts
    )


def line_number(source: str, offset: int) -> int:
    return source.count("\n", 0, offset) + 1


def parse_attributes(source: str) -> dict[str, str]:
    return {name.lower(): value for name, value in ATTRIBUTE_RE.findall(source)}


def trim(value: str, limit: int = 72) -> str:
    clean = re.sub(r"\s+", " ", value).strip()
    return clean if len(clean) <= limit else f"{clean[: limit - 1]}…"


def nearest_context(source: str, offset: int, fallback: str) -> str:
    window = source[max(0, offset - 600) : offset]
    tags = list(
        re.finditer(r"<(button|a|label|div|span)\b([^>]*)>", window, re.I | re.S)
    )
    for match in reversed(tags[-8:]):
        attrs = parse_attributes(match.group(2))
        for key in ("aria-label", "title", "data-tab", "id", "class"):
            if attrs.get(key):
                return trim(attrs[key])
    return trim(fallback)


def normalize_words(value: str) -> str:
    value = re.sub(r"Icon$", "", value, flags=re.I)
    value = re.sub(r"([a-z0-9])([A-Z])", r"\1 \2", value)
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def suggest(context: str, registered: set[str]) -> str:
    normalized = normalize_words(context)
    if any(word in normalized for word in EXCLUSION_WORDS):
        return "建议排除：品牌、图片、插画或状态栏证据"
    for keyword, semantic in SEMANTIC_ALIASES.items():
        if keyword in normalized and semantic in registered:
            return f"建议复用 `{semantic}`"
    for semantic in sorted(registered, key=len, reverse=True):
        if normalize_words(semantic) in normalized:
            return f"建议复用 `{semantic}`"
    return "请判断：新增规范 / 保留局部 / 排除"


def make_candidate_id(kind: str, source: str, signature: str) -> str:
    digest = hashlib.sha256(f"{kind}|{source}|{signature}".encode()).hexdigest()[:8]
    return f"ICO-{digest.upper()}"


def display_path(path: Path, demos_root: Path) -> str:
    try:
        return str(path.resolve().relative_to(demos_root.resolve()))
    except ValueError:
        return str(path)


def collect_usage(
    registry: dict[str, str], demos_root: Path, source_root: Path
) -> dict[str, Counter[str]]:
    usage: dict[str, Counter[str]] = defaultdict(Counter)
    for path in source_files(demos_root):
        source = path.read_text(encoding="utf-8")
        location = display_path(path, demos_root).split("/", 1)[0]
        for semantic in STATIC_ICON_RE.findall(source):
            if semantic in registry:
                usage[semantic][location] += 1
    for path in source_files(source_root):
        source = path.read_text(encoding="utf-8")
        for semantic in REACT_ICON_RE.findall(source):
            if semantic in registry:
                usage[semantic]["React"] += 1
    return usage


def collect_review(
    review_root: Path, registry: dict[str, str], demos_root: Path
) -> tuple[Counter[str], list[Candidate]]:
    registered = set(registry)
    reused: Counter[str] = Counter()
    candidates: dict[tuple[str, str], Candidate] = {}

    def add(
        kind: str,
        context: str,
        path: Path,
        line: int,
        signature: str,
    ) -> None:
        source_label = f"{display_path(path, demos_root)}:{line}"
        key = (kind, hashlib.sha256(signature.encode()).hexdigest())
        if key in candidates:
            return
        candidates[key] = Candidate(
            make_candidate_id(kind, source_label, signature),
            kind,
            trim(context),
            source_label,
            suggest(context, registered),
        )

    for path in source_files(review_root):
        source = path.read_text(encoding="utf-8")
        for pattern, kind in (
            (STATIC_ICON_RE, "未知语义名"),
            (REACT_ICON_RE, "未知 React 语义"),
        ):
            for match in pattern.finditer(source):
                semantic = match.group(1)
                if semantic in registered:
                    reused[semantic] += 1
                else:
                    add(
                        kind,
                        semantic,
                        path,
                        line_number(source, match.start()),
                        semantic,
                    )

        for match in ICON_IMPORT_RE.finditer(source):
            package = match.group(2)
            names = [part.strip().split(" as ")[0] for part in match.group(1).split(",")]
            for name in filter(None, names):
                add(
                    f"直接图标导入 `{package}`",
                    name,
                    path,
                    line_number(source, match.start()),
                    f"{package}:{name}",
                )

        for match in INLINE_SVG_RE.finditer(source):
            normalized = re.sub(r"\s+", " ", match.group(0)).strip()
            decorative = bool(
                re.search(
                    r"<(?:radialGradient|linearGradient|filter|mask|pattern)\b",
                    normalized,
                    re.I,
                )
            )
            context = (
                "background illustration SVG"
                if decorative
                else nearest_context(source, match.start(), "inline SVG")
            )
            add(
                "装饰性 SVG" if decorative else "内联 SVG",
                context,
                path,
                line_number(source, match.start()),
                normalized,
            )

        for match in IMAGE_RE.finditer(source):
            attrs = parse_attributes(match.group(1))
            asset = attrs.get("src", "")
            context = " ".join(
                filter(
                    None,
                    (
                        attrs.get("aria-label"),
                        attrs.get("alt"),
                        attrs.get("id"),
                        attrs.get("class"),
                        asset,
                    ),
                )
            )
            if "icon" in context.lower():
                add(
                    "图标图片资产",
                    context,
                    path,
                    line_number(source, match.start()),
                    asset or match.group(0),
                )

        for match in CSS_ICON_URL_RE.finditer(source):
            asset = match.group(1)
            add(
                "CSS 图标资产",
                asset,
                path,
                line_number(source, match.start()),
                asset,
            )

        for match in LEGACY_GLYPH_RE.finditer(source):
            attrs = parse_attributes(match.group(1))
            context = " ".join(
                filter(
                    None,
                    (
                        attrs.get("aria-label"),
                        attrs.get("title"),
                        attrs.get("class"),
                        match.group(2),
                    ),
                )
            )
            if "icon" in context.lower() or attrs.get("aria-label"):
                add(
                    "字符图标",
                    context,
                    path,
                    line_number(source, match.start()),
                    context,
                )

    ordered = sorted(
        candidates.values(), key=lambda item: (item.source, item.kind, item.candidate_id)
    )
    return reused, ordered


def escape_table(value: str) -> str:
    return value.replace("|", "\\|").replace("\n", " ")


def render_catalog(
    registry: dict[str, str],
    usage: dict[str, Counter[str]],
    review_root: Path | None,
    reused: Counter[str],
    candidates: list[Candidate],
) -> str:
    lines = [
        "# Momcozy 图标目录与准入评审",
        "",
        "> 此文件由图标语义注册表生成，请勿手动编辑。正式规范以注册表为唯一数据源。",
        "",
        "## 准入规则",
        "",
        "- 已批准目录可以直接复用。",
        "- 新 Demo 中识别到的图标只进入待决策队列，不会自动加入规范。",
        "- 决策只有四种：`复用现有`、`新增规范`、`保留局部`、`排除`。",
        "- 只有用户明确选择 `新增规范` 后，才允许修改语义注册表并重新生成运行时。",
        "",
        "## 已批准语义目录",
        "",
        "| 语义名 | Hugeicons export | 当前使用位置 | 状态 |",
        "| --- | --- | --- | --- |",
    ]
    for semantic, export_name in registry.items():
        locations = usage.get(semantic, Counter())
        usage_text = "、".join(
            f"{name} × {count}" for name, count in sorted(locations.items())
        ) or "暂未使用"
        lines.append(
            f"| `{semantic}` | `{export_name}` | {escape_table(usage_text)} | 已批准 |"
        )

    lines.extend(["", "## 新 Demo 待决策队列", ""])
    if review_root is None:
        lines.extend(
            [
                "本次未指定新 Demo。收到新 Demo 后运行 `pnpm icons:review -- <demo-path>` 生成候选。",
                "",
            ]
        )
    else:
        lines.extend([f"评审对象：`{review_root}`", ""])
        if reused:
            reused_text = "、".join(
                f"`{name}` × {count}" for name, count in sorted(reused.items())
            )
            lines.extend([f"已识别并可直接复用：{reused_text}", ""])
        if candidates:
            lines.extend(
                [
                    "| ID | 识别类型 | 上下文 | 来源 | 建议 | 你的决策 |",
                    "| --- | --- | --- | --- | --- | --- |",
                ]
            )
            for item in candidates:
                lines.append(
                    f"| {item.candidate_id} | {escape_table(item.kind)} | "
                    f"`{escape_table(item.context)}` | `{escape_table(item.source)}` | "
                    f"{escape_table(item.suggestion)} | 待你决定 |"
                )
            lines.append("")
        else:
            lines.extend(["未发现需要新增或排除的候选图标。", ""])

    lines.extend(
        [
            "## 决策填写方式",
            "",
            "- `复用现有：semantic-name`：替换为已批准语义，不改规范。",
            "- `新增规范：new-semantic / HugeiconsExport`：经确认后加入注册表。",
            "- `保留局部`：业务专属视觉，不进入跨 Demo 规范。",
            "- `排除`：品牌、产品图片、人物、插画、状态栏或设计证据。",
            "",
        ]
    )
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--registry", type=Path, required=True)
    parser.add_argument("--demos-root", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--source-root", type=Path)
    parser.add_argument("--review-demo", type=Path)
    args = parser.parse_args()

    registry = parse_registry(args.registry)
    source_root = args.source_root or args.registry.resolve().parents[1]
    usage = collect_usage(registry, args.demos_root, source_root)
    reused: Counter[str] = Counter()
    candidates: list[Candidate] = []

    if args.review_demo:
        if not args.review_demo.exists():
            parser.error(f"review demo does not exist: {args.review_demo}")
        reused, candidates = collect_review(args.review_demo, registry, args.demos_root)

    output = render_catalog(registry, usage, args.review_demo, reused, candidates)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(output, encoding="utf-8")
    print(
        f"Generated {args.output} with {len(registry)} approved semantics "
        f"and {len(candidates)} review candidates."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

