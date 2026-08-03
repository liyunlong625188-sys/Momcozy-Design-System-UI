---
name: momcozy-shadcn-design-system
description: 使用 Momcozy 3.0 light/dark design tokens、Hugeicons 语义图标系统，并结合 shadcn/ui 与 Tailwind 进行智能母婴硬件 IoT、设备管理、护理指导、育儿内容、家庭环境健康、社区互动、React 组件、仪表盘、表单、弹窗或 token 驱动 UI 的设计与实现。当用户提到 Momcozy design system、Momcozy 3.0 tokens、Hugeicons、图标库收敛、shadcn/ui、design token 工程化、light/dark token 映射、Figma variable CSS 导出、智能母婴硬件、IoT demo、社区页面，或要求 Codex 使用 Momcozy 品牌 token 搭建 UI 时触发此 skill。
---

# Momcozy shadcn/ui 设计系统

## 使用模型

以 Momcozy 的 token 导出作为设计源头，并在实现侧暴露一层稳定的 shadcn/ui 语义变量。不要为了使用这个 skill 而单独安装 shadcn/ui；只有在某个具体前端项目需要落地组件时，才在该项目中安装或初始化 shadcn/ui。

构建设计或 UI 时：

1. 在修改主题文件或翻译 token 前，先阅读 `references/token-mapping.md`。
2. 当任务涉及颜色、按钮状态、产品线色或 Fills/Labels 时，阅读 `references/color-system.md`。
3. 当任务涉及 opacity、spacing、radius、shadow 或 status 时，阅读 `references/foundation-tokens.md`。
4. 当任务涉及 shadcn/ui 安装、playground、starter、registry 或给他人复用时，阅读 `references/shadcn-integration.md`。
5. 当任务涉及快速生成产品 demo、页面参考、智能母婴硬件 IoT、设备状态、社区或内容指导时，阅读 `references/demo-patterns.md`。
6. 在设计或实现组件前，先阅读 `references/component-rules.md`。
7. 当任务涉及品牌字体、标题字体或字体加载时，阅读 `references/typography.md`。
8. 当任务涉及功能图标、Tabbar、icon-only button、图标库迁移、图标目录或 Demo 一致性时，阅读 `references/icon-system.md`；用 `scripts/generate_icon_catalog.py` 生成目录或新 Demo 待决策队列，并运行 `scripts/audit_icons.py`。
9. 当需要把原始 light/dark CSS 导出转换为 shadcn 兼容主题文件时，使用 `scripts/build_shadcn_theme.py`。
10. 当需要验证 token 覆盖、文档覆盖或生成 CSS 是否完整时，运行 `scripts/audit_tokens.py`。
11. 当用户提供新版 token 导出时，在 `assets/` 中保留原始 token 源文件。

## 工作流程

对于纯设计任务，按照参考文档中的 Momcozy 字体、颜色、间距、圆角和状态规则执行。即使输出的是 Figma 规格或视觉说明，也优先使用 shadcn/ui 的组件语义作为基础词汇。Momcozy demo 的默认定位是智能母婴硬件 IoT、内容指导、家庭环境健康和社区互动，不是购物 App。

对于已有应用中的代码任务：

1. 先检查应用技术栈和现有 shadcn/ui 配置，再修改文件。
2. 如果项目尚未安装 shadcn/ui，而用户明确需要实现页面或组件，只在该应用内按其包管理器和工程习惯安装；不要在 skill 目录安装 shadcn/ui。
3. 使用当前 light/dark 导出生成或更新主题 CSS。
4. 在新增自定义组件前，先把需求映射到 shadcn primitives。
5. 保持原始 Momcozy 变量与 shadcn 语义变量分层，不要混在一起。
6. 功能图标只通过统一语义注册表使用 Hugeicons，不在页面内直接导入图标包或粘贴通用 SVG path。
7. 收到新 Demo 时，先生成图标待决策 Markdown；在用户确认前，不得把候选图标写入正式语义注册表。

对于 token 更新：

1. 用新的 Figma 导出替换 `assets/momcozy-light.raw.css` 和 `assets/momcozy-dark.raw.css`。
2. 运行 `scripts/build_shadcn_theme.py`。
3. 运行 `scripts/audit_tokens.py`。
4. 检查脚本警告，确认是否存在未解析变量、覆盖缺口或异常值。
5. 只有当 token 的语义意图发生变化时，才更新映射文档；单纯数值变化不需要改文档。

## 资源

- `assets/momcozy-light.raw.css`：当前 light mode 的 Figma CSS 导出。
- `assets/momcozy-dark.raw.css`：当前 dark mode 的 Figma CSS 导出。
- `references/token-mapping.md`：Momcozy token 分类、命名规范化规则和 shadcn 语义映射。
- `references/component-rules.md`：基于 Momcozy 3.0 使用 shadcn/ui 的组件规则。
- `references/color-system.md`：颜色分层、Fills/Labels 语义和按钮状态配对规则。
- `references/foundation-tokens.md`：opacity、spacing、radius、shadow 和 status 的基础层规则。
- `references/shadcn-integration.md`：shadcn/ui 安装位置、playground/starter/registry 和对外复用策略。
- `references/demo-patterns.md`：智能母婴硬件 IoT、内容指导、家庭环境健康和社区 demo 生成模式。
- `references/typography.md`：品牌字体资源、CSS 加载方式和字体使用边界。
- `references/icon-system.md`：Hugeicons 单一来源、语义注册表、视觉变量、资产边界与迁移门禁。
- `assets/fonts/exposure/205TF-Exposure-[-10].otf`：Exposure[-10] Regular 品牌字体文件。
- `assets/fonts/exposure/205TF-Exposure-[-10]Italic.otf`：Exposure[-10] Italic 品牌字体文件。
- `assets/fonts/aeonik-soft-pro/`：Aeonik Soft Pro UI 字体文件，包含 Light、Regular、Medium、SemiBold。
- `scripts/build_shadcn_theme.py`：把原始 light/dark 导出转换为带有 `:root` 和 `.dark` 的规范化 CSS。
- `scripts/audit_tokens.py`：审计 raw token、生成 CSS 和参考文档覆盖关系。
- `scripts/audit_icons.py`：审计 Demo 是否加载共享图标运行时、是否存在未知语义或跨 Demo 重复图标源。
- `scripts/generate_icon_catalog.py`：从语义注册表生成已批准图标目录，并识别新 Demo 中需要用户决策的图标候选。
