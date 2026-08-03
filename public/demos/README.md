# Momcozy Demo 目录

此目录只存放六个可独立运行、可继续扩展的产品 Demo。React App 负责预览导航、主题控制和 iframe 承载，不计入 Demo 编号；Toolbar Top 等组件展示位于 `/components`，也不占用 Demo 编号。

| 编号 | 名称 | 产品场景 | React 预览路由 | 静态入口 |
| --- | --- | --- | --- | --- |
| 01 | User Guide | 新版本功能说明与帮助内容 | `/guide` | `01-user-guide/index.html` |
| 02 | Group Pumping Community | 母婴社区、群组与话题互动 | `/group-pumping` | `02-group-pumping/index.html` |
| 03 | Voice Log | 语音记录、权限、AI 结构化与保存 | `/voice-log` | `03-voice-log/index.html` |
| 04 | Cozy AI | 隐私同意、AI 对话、快捷问题、计划与历史 | `/cozy-ai` | `04-cozy-ai/index.html` |
| 05 | AI Lactation Plan | Cozy AI 吸乳计划 Skill、引导设置与计划复核 | `/ai-lactation-plan` | `05-ai-lactation-plan/index.html` |
| 06 | Partner Mode | 邀请伴侣、共享照护与权限管理 | `/partner-mode` | `06-partner-mode/index.html` |

## 共享约定

- 既有 token 化 Demo 统一使用 `01-user-guide/momcozy-theme.css` 中的 Momcozy Light/Dark tokens；05、06 暂时保留交付稿内嵌主题与资源。
- React 预览壳通过 `postMessage` 把主题同步给静态 Demo。
- 静态 Demo 独立打开时保留自己的主题入口；被 React iframe 嵌入时隐藏内部入口。
- 嵌入预览统一由 `_shared/mobile-demo-preview.css` 提供展示模板：01、02 使用 `document` 自然长页面模式；03–06 使用 `phone` 固定手机视口模式。
- 两种模式共用 402px 手机内容宽度和 `Backgrouds / Primary` 舞台背景；`phone` 模式的验收视口固定为 402 × 874px。Demo 内部只负责产品内容，不重复定义文档网页的外层展示规格。
- 新增 Demo 时继续使用两位编号，例如 `05-device-onboarding/`，不要把新示例散落在 `public/` 根目录。
- Cozy AI 目录版使用本地确定性回复，不会调用外部 AI 或写入 Redis；用于无 API Key 的交互演示。
