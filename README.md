# Momcozy Design System Skill

`momcozy-shadcn-design-system` 是本仓库的主交付物：一个可安装到 Codex 的 Momcozy 3.0 设计系统 Skill。它把 Light/Dark design tokens、品牌字体、shadcn/ui 语义映射、组件规则、Hugeicons 图标规范、产品 Demo 模式以及审计脚本组织成可执行的设计与前端工作流。

> **仓库定位**：Skill 是核心；组件文档、Playground 和六个产品 Demo 是用于预览、验收与回归检查的配套环境。

## 快速安装

### 安装发布版 Skill

当前发布包：[momcozy-shadcn-design-system-1.1.0.skill](releases/momcozy-design-system-kit-1.1.0/momcozy-shadcn-design-system-1.1.0.skill)

1. 下载并在 Codex 中附加 `.skill` 文件。
2. 对 Codex 说：`请安装这个 Skill。`
3. 安装完成后使用 `$momcozy-shadcn-design-system` 明确调用。

也可以把 `.skill` 文件作为 ZIP 解压到：

```text
~/.codex/skills/momcozy-shadcn-design-system/
```

该目录下必须直接存在 `SKILL.md`。

### 使用仓库中的最新源码

Skill 源码位于：

```text
skills/momcozy-shadcn-design-system/
├── SKILL.md
├── assets/
├── references/
└── scripts/
```

需要使用仓库工作版本时，将这个完整目录复制到 Codex 的 skills 目录；不要只复制 `SKILL.md`，否则 token、字体、参考规则和审计脚本会缺失。

## Skill 能做什么

- 使用 Momcozy 3.0 Light/Dark tokens 生成或改造界面。
- 把 Momcozy token 映射为稳定的 shadcn/ui 语义变量。
- 按组件规则实现 Button、Input、Dialog、Tabs、Card 等 React UI。
- 通过统一语义注册表使用 Hugeicons，避免页面内散落临时图标。
- 生成智能母婴硬件、设备管理、护理指导、家庭健康和社区互动场景。
- 审计 token 覆盖、主题映射、组件状态与图标使用情况。
- 为设计评审、前端实现、升级验收和跨产品复用提供同一套规则来源。

## 调用示例

```text
使用 $momcozy-shadcn-design-system，基于 Momcozy 3.0 tokens
设计一个智能吸奶器设备详情页，支持 Light/Dark Mode。
```

```text
使用 $momcozy-shadcn-design-system，把这个 React 页面中的颜色、文字、
间距、圆角和按钮状态替换为 Momcozy semantic tokens。
```

```text
使用 $momcozy-shadcn-design-system，检查这个新 Demo 的图标候选，
先生成审查清单，不要直接加入正式图标规范。
```

## 仓库分层

| 层级 | 位置 | 作用 |
| --- | --- | --- |
| 主 Skill | `skills/momcozy-shadcn-design-system/` | 保存 tokens、字体、映射规则、组件规则、生成脚本与审计脚本 |
| 可安装发布包 | `releases/` | 提供可直接安装到 Codex 的版本化 `.skill` 文件 |
| 组件文档与 Playground | `momcozy-ui-playground/` | 展示组件、安装方式、API、Light/Dark 状态和设计验收结果 |
| 产品 Demo | `public/demos/` | 验证完整产品场景、交互流程和主题同步 |
| 组件源码 | `src/components/` | 保存 Momcozy 定制组件和共享实现 |
| 审查文档 | `docs/` | 保存组件边界、设计验收和工程说明 |

Skill 与 Playground 分层维护：Skill 保存可迁移的设计决策和执行规则；Playground 消费同一份主题资源并提供可视化验收，不是 Skill 的替代品。

## 在线文档

GitHub Pages：<https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/>

文档站包含：

- Skill 指令与使用说明
- Token 映射、色彩、字体、组件与图标规则
- Momcozy 定制组件和 shadcn/ui 组件文档
- 六个产品 Demo
- Light/Dark 与中英文预览
- 设计审查和验收记录

## 本地运行文档与 Playground

```bash
pnpm install
pnpm components:dev
```

开发预览：<http://127.0.0.1:5180/>

生产构建：

```bash
pnpm components:build
```

生成文件输出到 `momcozy-ui-playground/dist/`。`main` 分支更新后，`.github/workflows/deploy-pages.yml` 会自动构建并发布 GitHub Pages。

## 产品 Demo

Demo 是 Skill 的场景验证资产，不是仓库的主交付物。

| 编号 | Demo | 静态源码 |
| --- | --- | --- |
| 01 | User Guide | `public/demos/01-user-guide/` |
| 02 | Group Pumping Community | `public/demos/02-group-pumping/` |
| 03 | Voice Log | `public/demos/03-voice-log/` |
| 04 | Cozy AI | `public/demos/04-cozy-ai/` |
| 05 | AI Lactation Plan | `public/demos/05-ai-lactation-plan/` |
| 06 | Partner Mode | `public/demos/06-partner-mode/` |

六个 Demo 通过共享桥接同步 Light/Dark 和中英文状态，完整说明见 [public/demos/README.md](public/demos/README.md)。

## 验证

```bash
pnpm lint
pnpm build
pnpm components:build
pnpm icons:audit
```

Token 与主题资源发生变化时，还应运行 Skill 中的审计脚本：

```bash
python3 skills/momcozy-shadcn-design-system/scripts/audit_tokens.py
```

## 使用边界

- Skill 保存设计规则和工程映射，不在 Skill 目录内安装 shadcn/ui 或维护 `node_modules`。
- 只有目标前端项目需要组件时，才在该项目中初始化或接入 shadcn/ui。
- 原始 Momcozy variables 与 shadcn 语义变量保持分层，不把 token 硬编码进每个组件。
- 新图标先进入审查清单，经过确认后才能加入正式语义注册表。
- Exposure[-10] 与 Aeonik Soft Pro 字体默认仅用于 Momcozy 内部产品、设计和研发协作，请遵守现有字体授权范围。
