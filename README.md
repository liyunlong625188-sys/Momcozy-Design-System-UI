# Momcozy Design Token Demo

这个工程是一个基于 Vite + React + shadcn/ui 组件结构的 Momcozy 移动端 demo。页面参考来自 Figma 的首页、设备、社区和我的四个 App 页面，视觉层接入 `momcozy-shadcn-design-system` skill 里的 Momcozy 3.0 light/dark token、Exposure[-10] 品牌字体和 Aeonik Soft Pro UI 字体。

## 运行

```bash
pnpm install
pnpm demo
```

完整 shadcn/ui 组件总览是独立的 Vite playground，避免覆盖主 Demo 中已经定制的组件：

```bash
pnpm components:dev
pnpm components:build
```

开发预览为 `http://127.0.0.1:5180/`；生产 HTML 输出到 `momcozy-ui-playground/dist/index.html`。

## GitHub Pages 部署

组件文档站通过 `.github/workflows/deploy-pages.yml` 自动部署到：

`https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/`

工作流会在 `main` 分支更新后安装 `momcozy-ui-playground` 的依赖、以 `/Momcozy-Design-System-UI/` 为基础路径构建，并发布 `momcozy-ui-playground/dist`。首次推送后，需要在 GitHub 仓库的 **Settings → Pages** 中把 Source 设为 **GitHub Actions**。

本地预览地址：

```text
Demo 目录：http://127.0.0.1:5177/demos
组件目录：http://127.0.0.1:5177/components
App 壳：http://127.0.0.1:5177/
Demo 01：http://127.0.0.1:5177/guide
Demo 02：http://127.0.0.1:5177/group-pumping
Demo 03：http://127.0.0.1:5177/voice-log
Demo 04：http://127.0.0.1:5177/cozy-ai

Demo 05：http://127.0.0.1:5177/ai-lactation-plan

Demo 06：http://127.0.0.1:5177/partner-mode
```

其中 `/` 是 React + shadcn/ui 的 App 壳；`/demos` 只列产品 Demo，`/components` 只列可复用组件展示。组件规范与项目目录的分层说明见 `docs/component-library.md`。

| 编号 | Demo | 预览路由 | 静态源码 |
| --- | --- | --- | --- |
| 01 | User Guide | `/guide` | `public/demos/01-user-guide/` |
| 02 | Group Pumping Community | `/group-pumping` | `public/demos/02-group-pumping/` |
| 03 | Voice Log | `/voice-log` | `public/demos/03-voice-log/` |
| 04 | Cozy AI | `/cozy-ai` | `public/demos/04-cozy-ai/` |
| 05 | AI Lactation Plan | `/ai-lactation-plan` | `public/demos/05-ai-lactation-plan/` |
| 06 | Partner Mode | `/partner-mode` | `public/demos/06-partner-mode/` |

更新 `src/styles/momcozy-theme.css` 后，运行下面命令同步给静态 User Guide iframe：

```bash
pnpm sync:guide-theme
```

## 结构

- `src/styles/momcozy-theme.css`：Momcozy token 与 shadcn 语义变量。
- `src/components/ui/`：轻量 shadcn/ui 风格组件壳，当前包含 Button、Card、Badge。
- `momcozy-ui-playground/`：官方 shadcn/ui 全量源码与组件总览；直接引用主工程 token 源，包含 Light / Dark 主题。
- `src/App.tsx`：首页、设备页、社区页、我的页，以及四个独立 Demo 的预览入口。
- `src/App.css`：页面布局、组件状态和 Figma 画布适配，颜色/文字/圆角/间距尽量使用 token。
- `public/fonts/`：Exposure[-10] 与 Aeonik Soft Pro 字体资源。
- `public/figma/`：从 Figma 下载或裁切的页面资产。
- `public/figma/references/`：Figma 原图参考截图和本地 demo 截图。
- `public/demos/01-user-guide/`：User Guide 静态 Demo，已将基础颜色、字体、圆角、间距、按钮和阴影映射到 Momcozy token。
- `public/demos/02-group-pumping/`：社区、群组列表和详情页 Demo，使用主题桥接同步 Light/Dark Mode。
- `public/demos/03-voice-log/`：Voice Log 完整交互 Demo。代码生成的弹层、文字、按钮、边框、状态与控制面板使用 Momcozy semantic tokens；UI 型 PNG 切片随主题适配，照片与设备外框保持原始影像。
- `public/demos/04-cozy-ai/`：从 CozyAI Next.js 工程提取的无密钥交互演示，保留首次同意、对话、快捷问题、计划卡、历史抽屉和五栏导航。
- `public/demos/05-ai-lactation-plan/`：Cozy AI 吸乳计划 Skill 的独立交互交付稿。
- `public/demos/06-partner-mode/`：Partner Mode 邀请人与共享照护流程交付稿。
- `public/demos/README.md`：六个 Demo 的编号、入口、职责和共享资源说明。
- `scripts/sync-user-guide-theme.mjs`：把主 token 文件同步到静态 User Guide，避免 iframe 内主题副本漂移。

## 验证

已执行：

```bash
pnpm lint
pnpm build
```

另外用本地浏览器检查 `/guide`、`/group-pumping`、`/voice-log`、`/cozy-ai`、`/ai-lactation-plan` 与 `/partner-mode`，确认六个示例的路由、资源和核心交互正常。
