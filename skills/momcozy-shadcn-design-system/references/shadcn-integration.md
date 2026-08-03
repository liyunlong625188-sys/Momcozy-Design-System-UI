# shadcn/ui 集成策略

## 核心判断

shadcn/ui 是组件代码分发和生成体系，不是传统“安装一个组件库然后直接 import”的模式。它更适合作为 Momcozy UI 的组件壳子：把 Button、Input、Dialog、Tabs、Card 等组件代码放进目标项目，再用 Momcozy token 替换主题变量和组件状态。

这个 skill 本身不要安装 shadcn/ui，也不要把 `node_modules`、`components/ui` 或某个框架项目塞进 skill 目录。skill 负责保存 token、字体、映射规则、生成脚本和使用策略。

## 谁需要安装

按使用场景判断：

| 场景 | 是否需要安装 shadcn/ui | 做法 |
| --- | --- | --- |
| 只读取 token、生成主题 CSS、写设计规范 | 不需要 | 使用本 skill 的 references、assets 和转换脚本 |
| 目标项目已经有 shadcn/ui | 不需要重新初始化 | 检查 `components.json`、`components/ui`、Tailwind/global CSS，再接入 Momcozy theme |
| 目标项目还没有 shadcn/ui，但要实现 React UI | 需要 | 在目标项目中运行官方初始化流程 |
| 要做可预览的 Momcozy 组件样板 | 需要 | 在仓库中新建 `playground` 或 `examples` 项目，并初始化 shadcn/ui |
| 要让其他团队安装 Momcozy 组件 | 建议需要 | 做 Momcozy shadcn registry 或 starter，让使用方在自己的项目中拉取组件代码 |

## 官方安装入口

根据目标项目选择路径：

- 新项目：优先使用 shadcn/create 或 CLI 生成框架项目。
- 已有项目：按官方对应框架的 Existing Project 指南接入。
- CLI 初始化新项目示例：`pnpm dlx shadcn@latest init -t [framework]`。
- 支持模板包括 Next.js、Vite、TanStack Start、React Router、Astro；Laravel 需要先创建 Laravel 项目再运行 shadcn 初始化。

不要在 skill 目录运行初始化命令。初始化命令只应该在目标应用目录或 demo/playground 目录运行。

## Momcozy 接入顺序

在目标项目内：

1. 确认框架、包管理器、Tailwind 版本和是否已有 `components.json`。
2. 如果没有 shadcn/ui，按官方当前文档初始化。
3. 把 `assets/momcozy-shadcn-theme.css` 的内容接入项目的全局 CSS。
4. 确保 shadcn 语义变量读取 Momcozy 映射：`--background`、`--foreground`、`--primary`、`--border`、`--ring`、`--radius`、`--font-sans` 等。
5. 使用 `references/color-system.md` 中的 Fills/Labels 规则扩展产品线按钮或组件变体。
6. 只把目标项目实际需要的 shadcn 组件加入 `components/ui`。

## 当前全量 Playground

仓库根目录的 `momcozy-ui-playground/` 是完整组件验收环境。它与 skill 分层维护：skill 保存规则和 token；playground 保存可运行源码、依赖和 HTML 总览。

- `momcozy-ui-playground/src/components/ui/`：由官方 CLI `add --all` 生成的当前组件源码。
- `momcozy-ui-playground/src/index.css`：引用根工程 `src/styles/momcozy-theme.css`，再补齐 chart/sidebar 语义映射。
- `momcozy-ui-playground/src/App.tsx`：全部组件的可见或可交互总览。
- `pnpm components:dev`：在仓库根目录启动组件总览。
- `pnpm components:build`：生成 `momcozy-ui-playground/dist/index.html`。

全量 playground 用于设计验收、升级审计和能力盘点；业务目标项目仍应按需加入组件，避免把未使用的依赖和代码带进产品包。

## 给别人复用

如果“别人用我这个”指的是别人用 Codex 生成设计或代码：他们只需要安装这个 skill，并把 token 资产随 skill 带走；不需要在 skill 里安装 shadcn/ui。

如果“别人用我这个”指的是别人要在自己的前端项目中使用 Momcozy 组件：他们的项目仍需要 shadcn/ui 初始化环境，或者使用你提供的 Momcozy starter / registry。更推荐的工程化形态是：

- `momcozy-shadcn-design-system` skill：给 Codex 用，保存规则、token、字体和生成脚本。
- `momcozy-ui-playground`：给设计/开发预览组件，安装 shadcn/ui。
- `momcozy-shadcn-registry`：给其他项目分发 Momcozy 组件、hooks、CSS、规则文件。

## 不要做的事

- 不要把 shadcn/ui 安装到 `.codex/skills/...` 目录。
- 不要把生成后的 `components/ui` 当作 skill 资源长期维护，除非它是极小的示例模板。
- 不要在没有目标框架的情况下假设安装 Next.js、Vite 或其他框架。
- 不要把 Momcozy token 直接硬编码进每个组件；优先通过 CSS variables 和 Tailwind theme 传递。
