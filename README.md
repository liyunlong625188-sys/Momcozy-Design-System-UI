# Momcozy 3.0 Design System Skill

> 从设计规范，到可交付资产。

`momcozy-shadcn-design-system` 是一套面向 AI Agent 的 Momcozy 设计系统执行包。它把团队正在使用的 Light/Dark Token、字体、组件规则、Hugeicons 图标规范、产品场景模式和审查流程交给 Agent，让一句需求能够继续转化为符合 Momcozy 规范的设计、代码、Demo 与验收结果。

它不是 npm 包，也不是 React 组件库；它是一套“规则 + 资产 + 脚本 + 执行流程”，负责告诉 Agent 在真实项目里应该如何判断、实现和验证。

**[打开 Momcozy UI 在线文档](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/)** · [查看 Skill 源码](skills/momcozy-shadcn-design-system/) · [下载发布版 Skill](releases/momcozy-design-system-kit-1.1.0/momcozy-shadcn-design-system-1.1.0.skill)

## 这个 Skill 可以帮你做什么

- **产品与 UX 设计**：把需求或已有界面整理成 Token 驱动的 Momcozy 设计方案。
- **前端实现**：使用 Momcozy semantic tokens、shadcn/ui 与统一 Hugeicons 实现 React 界面。
- **产品 Demo**：生成智能母婴硬件、设备管理、护理指导、家庭健康与社区互动场景。
- **设计系统治理**：审查 Token、Light/Dark Mode、组件状态、字体和图标使用是否符合规范。
- **交付与验收**：产出可继续编辑的代码、主题 CSS、组件方案、Demo、审查记录和 QA 结果。

## 安装与第一次调用

### 在 Agent 对话里粘贴一句话

```text
请从 https://github.com/liyunlong625188-sys/Momcozy-Design-System-UI/tree/main/skills/momcozy-shadcn-design-system 安装这个 Skill。
```

当前安装与调用流程已针对 ChatGPT/Codex 验证。其他支持 Agent Skills 标准的智能体可以复用包内规则，但安装方式与兼容性需要单独验证。

安装完成后，可以这样开始：

```text
使用 $momcozy-shadcn-design-system，基于 Momcozy 3.0 tokens
设计并实现一个智能吸奶器设备详情页，支持 Light/Dark Mode。
```

### 使用流程

1. Agent 判断任务属于设计、组件实现、Demo 生成还是治理审查。
2. 读取对应的 Token、颜色、字体、组件、图标或工程规则。
3. 检查目标项目现有技术栈和组件基础。
4. 使用 Momcozy semantic tokens 与共享组件完成设计或实现。
5. 运行对应的 Token、图标或视觉 QA 检查。
6. 交付可继续使用的设计、代码、Demo 和审查结果。

### 包结构与作用

| 目录 | 作用 |
| --- | --- |
| [`SKILL.md`](skills/momcozy-shadcn-design-system/SKILL.md) | Skill 的总入口、使用模型、执行流程与边界 |
| [`references/`](skills/momcozy-shadcn-design-system/references/) | Token、颜色、字体、组件、图标、工程接入与 Demo 规则 |
| [`assets/`](skills/momcozy-shadcn-design-system/assets/) | Light/Dark Token、主题 CSS 与品牌字体资产 |
| [`scripts/`](skills/momcozy-shadcn-design-system/scripts/) | Token 转换、Token 审计、图标目录生成与图标审计脚本 |
| [`agents/`](skills/momcozy-shadcn-design-system/agents/) | Skill 展示信息和默认提示词 |

## 设计规则

- [Token 映射](skills/momcozy-shadcn-design-system/references/token-mapping.md)：把 Figma/Momcozy Token 映射到稳定的 shadcn/ui 语义层。
- [色彩系统](skills/momcozy-shadcn-design-system/references/color-system.md)：定义 Grays、产品线色、Fills、Labels 与状态颜色。
- [基础 Token](skills/momcozy-shadcn-design-system/references/foundation-tokens.md)：统一间距、圆角、阴影、透明度与状态规则。
- [字体规范](skills/momcozy-shadcn-design-system/references/typography.md)：说明 Exposure[-10] 与 Aeonik Soft Pro 的使用方式和边界。
- [组件规则](skills/momcozy-shadcn-design-system/references/component-rules.md)：定义组件映射、状态、交互和复用要求。
- [图标系统](skills/momcozy-shadcn-design-system/references/icon-system.md)：以 Hugeicons 语义注册表作为统一图标来源。

## 工程接入

- [shadcn/ui 集成](skills/momcozy-shadcn-design-system/references/shadcn-integration.md)：说明目标项目、Playground、Starter 与 Registry 的接入策略。
- [Component Library 分层](docs/component-library.md)：区分产品 Demo、可复用组件和审查文档。
- [Playground 运行说明](momcozy-ui-playground/README.md)：运行组件文档、Light/Dark 与中英文预览环境。
- [仓库工程说明](START-HERE.md)：了解代码目录、推荐阅读顺序与验证入口。

Skill 本身不安装 shadcn/ui，也不维护 `node_modules`。只有目标前端项目确实需要实现组件时，才在该项目中初始化或接入 shadcn/ui。

## 场景验证

- [Demo 生成模式](skills/momcozy-shadcn-design-system/references/demo-patterns.md)：智能母婴硬件、设备管理、护理指导、家庭健康与社区场景的生成规则。
- [Demo 运行说明](public/demos/README.md)：产品 Demo 的目录、运行方式和主题同步说明。
- [Momcozy UI 在线验证环境](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/)：集中查看 Skill 说明、规则、组件与 Demo。

## 产品 Demo

| # | 场景 | 在线预览 | 源码 |
| --- | --- | --- | --- |
| 01 | 用户指南 | [打开](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/demos/01-user-guide/index.html) | [`public/demos/01-user-guide/`](public/demos/01-user-guide/) |
| 02 | 吸乳互助社区 | [打开](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/demos/02-group-pumping/index.html) | [`public/demos/02-group-pumping/`](public/demos/02-group-pumping/) |
| 03 | 语音记录 | [打开](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/demos/03-voice-log/index.html) | [`public/demos/03-voice-log/`](public/demos/03-voice-log/) |
| 04 | Cozy AI | [打开](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/demos/04-cozy-ai/index.html) | [`public/demos/04-cozy-ai/`](public/demos/04-cozy-ai/) |
| 05 | AI 吸乳计划 | [打开](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/demos/05-ai-lactation-plan/index.html) | [`public/demos/05-ai-lactation-plan/`](public/demos/05-ai-lactation-plan/) |
| 06 | 伴侣模式 | [打开](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/demos/06-partner-mode/index.html) | [`public/demos/06-partner-mode/`](public/demos/06-partner-mode/) |

## 治理与验收

- **Token 与深色模式审查**：[状态色提取](status-color-extract.md) · [深色模式建议](app-3-status-dark-mode-recommendation.md) · [颜色 Token 审查](color-token-update-review-2026-07-27.md)
- **图标审查**：[AI 吸乳计划](docs/icon-reviews/05-ai-lactation-plan.md) · [伴侣模式](docs/icon-reviews/06-partner-mode.md) · [已批准图标目录](public/demos/icon-catalog.md)
- **主工程与 Playground QA**：[主工程设计验收](design-qa.md) · [Playground 设计验收](momcozy-ui-playground/design-qa.md)

新图标必须先进入审查清单；只有确认后，才能加入正式语义注册表。构建通过也不等于视觉验收通过，重要页面仍需进行 Light/Dark 与响应式视觉 QA。

## 组件列表

### Momcozy 定制组件（5）

[Toolbar Top](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/?component=toolbar-top) · [Toolbar Top Sheet](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/?component=toolbar-top-sheet) · [Liquid Glass Buttons](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/?component=liquid-glass-buttons) · [Title](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/?component=title) · [Tab Bar](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/?component=tab-bar)

### shadcn/ui 组件（64）

- **基础**：Aspect Ratio、Avatar、Badge、Button、Button Group、Card、Item、Kbd、Separator、Toggle、Toggle Group、Typography
- **表单**：Calendar、Checkbox、Combobox、Date Picker、Field、Input、Input Group、Input OTP、Label、Native Select、Radio Group、Select、Slider、Switch、Textarea
- **导航**：Accordion、Breadcrumb、Collapsible、Command、Direction、Menubar、Navigation Menu、Pagination、Sidebar、Tabs
- **浮层**：Alert Dialog、Context Menu、Dialog、Drawer、Dropdown Menu、Hover Card、Popover、Sheet、Tooltip
- **消息**：Alert、Attachment、Bubble、Empty、Marker、Message、Message Scroller、Skeleton、Sonner、Spinner、Toast
- **数据**：Carousel、Chart、Data Table、Progress、Resizable、Scroll Area、Table

在 [Momcozy UI 组件目录](https://liyunlong625188-sys.github.io/Momcozy-Design-System-UI/#component-gallery) 中可以查看组件预览、安装方式、用法、代码与 API。

## 兼容性与使用边界

- Skill 保存规则、资产与执行流程，不替代组件库、Figma Library 或业务代码仓库。
- 原始 Momcozy variables 与 shadcn/ui 语义变量必须保持分层，不能在组件中散落硬编码值。
- 新 Token、字体、组件或图标进入正式规范前，需要经过对应审查与验收。
- Exposure[-10] 与 Aeonik Soft Pro 默认仅用于 Momcozy 内部产品、设计和研发协作，请遵守现有字体授权范围。
