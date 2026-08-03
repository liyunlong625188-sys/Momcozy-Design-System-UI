# Component Library 与 Demo Library 分层

## 入口

- `momcozy-ui-playground/?component=<slug>`：70 个可复用组件的独立文档页，包含 Preview/Code、Installation、Usage、Composition、Examples、Accessibility 与 API Reference。
- `/demos`：完整产品场景、流程和交互 Demo。

## 文件职责

| 内容 | 存放位置 | 说明 |
| --- | --- | --- |
| 可复用设计规则 | `skills/momcozy-shadcn-design-system/references/*.md` | 面向所有项目，不记录本工程的临时页面清单。 |
| 项目组件代码 | `src/components/` | React 组件及其展示页面。 |
| 项目组件目录 | `docs/component-library.md` | 记录本工程有哪些组件入口。 |
| 产品 Demo | `public/demos/NN-name/` | 可独立打开的产品场景，使用连续两位编号。 |

## 当前组件入口

| 组件 | 路由 | 源码 |
| --- | --- | --- |
| Toolbar Top | `/toolbar-top` | `src/components/toolbar-top-showcase.tsx` |
| Toolbar Top Sheet | `/toolbar-top-sheet` | `src/components/toolbar-top-sheet-showcase.tsx` |
| Liquid Glass Button | `/liquid-glass-buttons` | `src/components/liquid-glass-buttons-showcase.tsx` |
| Title | `/title` | `src/components/title-showcase.tsx` |
| Tab Bar | `/tab-bar` | `src/components/tab-bar-showcase.tsx` |

组件展示不进入 Demo 编号；Demo 只用于完整产品场景。

## 文档呈现约定

- 页面信息架构参考 shadcn/ui 组件文档，统一使用三栏结构和动态 “On This Page”。
- 视觉语言只使用 Momcozy 3.0 design tokens、Exposure、Aeonik Soft Pro 与 Hugeicons。
- 64 个 shadcn 组件和 5 个 Momcozy 专属组件共用同一份文档模板；专属组件排在 Components 顶部。
- `Skill & Markdown` 与完整产品 `Demos` 保留为独立信息分组，不混入组件 API。
