# Momcozy 图标系统

## 单一来源

- 功能图标统一从 [Hugeicons 图标库](https://hugeicons.com/icons) 选择。
- 默认只使用免费的 Stroke Rounded 图标：React 数据包为 `@hugeicons/core-free-icons`，渲染器为 `@hugeicons/react`。
- 不使用已弃用的 `hugeicons-react`，不从 Hugeicons 网站复制 Pro 图标源码；需要 Pro 图标时，先确认项目已持有对应许可与包。
- 页面不得直接依赖 CDN。静态 Demo 必须由本地依赖生成可离线运行的共享图标文件。

## 工程结构

同一工程只维护一个“产品语义名 -> Hugeicons export”的注册表：

- React：`src/lib/icons.ts` 保存语义注册表；组件只通过统一 `Icon` wrapper 使用语义名。
- 静态 Demo：由同一注册表生成 `public/demos/_shared/momcozy-icons.js`，页面使用 `<momcozy-icon name="...">`。
- 禁止页面直接 import `@hugeicons/core-free-icons`、其他图标库或自行粘贴通用 SVG path。
- 生成文件不得手改。修改注册表后重新运行生成脚本。

语义名描述产品行为，不描述图形外观。例如使用 `history`、`attachment`、`community`，不要使用 `roundArrow`、`littleStar`、`icon2`。

## 已批准目录与人工准入

语义注册表是正式规范的唯一数据源。运行 `scripts/generate_icon_catalog.py`，将注册表、当前使用位置和待决策候选生成为 Markdown；不要手工维护第二份映射表。

收到新 Demo 时遵循以下准入门：

1. 扫描 `<momcozy-icon>`、React `Icon`、直接图标库 import、内联 SVG、图标图片资产、CSS icon URL 和字符图标。
2. 已存在的语义标记为“可直接复用”。
3. 未知语义或新图形只写入“待决策队列”，附来源、上下文和复用建议。
4. 暂停修改正式注册表，等待用户选择：`复用现有`、`新增规范`、`保留局部` 或 `排除`。
5. 只有用户明确选择 `新增规范` 后，才在注册表中增加语义并重新生成静态运行时和目录。

已有语义能够表达新需求时必须复用，不能为同一功能增加第二个图标。业务专属视觉可保留在局部，但不能伪装成跨 Demo 规范。

## 视觉变量

- 默认描边 `1.7`，需要强调时可在组件级调到 `2`；同一控件组保持一致。
- 常用尺寸只取 `16`、`20`、`24`。Tabbar 使用 `24`，常规按钮使用 `20`，紧凑辅助信息使用 `16`。
- 颜色一律继承 `currentColor`，由 Momcozy semantic token 控制，不在 SVG 内写品牌色。
- active、disabled、hover 等状态由组件容器控制，不切换成另一套图标。
- 替换现有图标时保持容器尺寸、间距、点击区域和布局不变；图标收敛不能改变页面信息层级或交互效果。

## 不属于功能图标的资产

以下内容保留原资产，不强制换成 Hugeicons：

- Momcozy Logo、品牌角色、Cozy AI 角色。
- 产品照片、设备图、人物头像和社区内容图片。
- 业务插画、空状态插画、活动视觉。
- iOS 状态栏、设备外框以及作为设计证据保留的整屏截图。

不要把上述内容塞进功能图标注册表，也不要为了“统一”给照片或品牌角色套图标样式。

## 新增与迁移流程

1. 对新 Demo 运行 `pnpm icons:review -- <demo-path>`，把候选写入图标目录 Markdown。
2. 把待决策队列交给用户；用户确认前不修改正式注册表。
3. 对“复用现有”项替换为已有语义；对“排除”项保留原资产；对“保留局部”项限制在该业务组件内。
4. 只有“新增规范”项才到 Hugeicons 图标库搜索 Free / Stroke Rounded 图标，并映射到新的产品语义名。
5. React 页面只用统一 `Icon` wrapper；静态页面只用 `<momcozy-icon>`。
6. 运行 `pnpm icons:build`、`pnpm icons:catalog` 和 `pnpm icons:audit`。
7. 运行项目构建，并在 Light/Dark、standalone/embedded 两种状态下做视觉验证。

审计失败时，先修复重复语义、未知语义、缺少共享运行时或跨 Demo 重复的手写 SVG；不要把例外直接加入 allowlist 来绕过收敛。

## 可访问性

- 纯装饰图标使用 `aria-hidden="true"`。
- icon-only button 必须由按钮提供可读的 `aria-label`，不要让 SVG 自己承担按钮名称。
- 图标不能成为状态的唯一表达；错误、成功、录音、权限等状态需要文字或结构化标签配合。
