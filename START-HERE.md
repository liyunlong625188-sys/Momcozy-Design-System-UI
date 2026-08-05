# 从 Skill 开始

`skills/momcozy-shadcn-design-system/` 是本仓库的主交付物。它包含 Momcozy 3.0 Light/Dark tokens、字体、shadcn/ui 映射、组件规则、Hugeicons 图标规范、场景模式和审计脚本。

组件文档、Playground 和产品 Demo 用于验证 Skill 的规则是否被准确执行，不是仓库的主产品。

## 安装与调用

推荐安装当前发布包：

```text
releases/momcozy-design-system-kit-1.1.0/
└── momcozy-shadcn-design-system-1.1.0.skill
```

在 Codex 中附加 `.skill` 文件并说：`请安装这个 Skill。`

安装完成后使用：

```text
$momcozy-shadcn-design-system
```

也可以把 `skills/momcozy-shadcn-design-system/` 完整复制到：

```text
~/.codex/skills/momcozy-shadcn-design-system/
```

## 推荐阅读顺序

1. `skills/momcozy-shadcn-design-system/SKILL.md`
2. `skills/momcozy-shadcn-design-system/references/token-mapping.md`
3. `skills/momcozy-shadcn-design-system/references/color-system.md` 与 `skills/momcozy-shadcn-design-system/references/foundation-tokens.md`
4. `skills/momcozy-shadcn-design-system/references/component-rules.md`
5. `skills/momcozy-shadcn-design-system/references/shadcn-integration.md`
6. `skills/momcozy-shadcn-design-system/references/icon-system.md` 与 `skills/momcozy-shadcn-design-system/references/demo-patterns.md`

## 文档与验收环境

```bash
pnpm install
pnpm components:dev
```

访问 `http://127.0.0.1:5180/` 查看 Skill 文档、组件目录、产品 Demo 与审查记录。

## 产品 Demo

六个产品场景位于 `public/demos/01-` 至 `public/demos/06-`。它们是 Skill 的可运行验收样例；完整目录见 `public/demos/README.md`。
