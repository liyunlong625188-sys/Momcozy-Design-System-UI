# 组件规则

## 通用原则

优先使用 shadcn/ui primitives：Button、Input、Textarea、Select、Checkbox、RadioGroup、Switch、Tabs、Dialog、Sheet、Popover、Card、Table、Badge、Alert、DropdownMenu、NavigationMenu、Tooltip 和 Form。

shadcn/ui 的安装与对外复用策略见 `references/shadcn-integration.md`。组件实现发生在目标应用、playground、starter 或 registry 中；不要把 `components/ui` 和 `node_modules` 安装进 skill 目录。

界面应保持克制、清晰，并以智能母婴硬件 IoT、护理指导、育儿内容、家庭环境健康和社区互动为中心。Momcozy 的界面应该温暖、精确，但不要过度装饰。品牌色用于行动和强调，不要把整页都铺成品牌色。

## 字体

把 Momcozy typography token 当作具名角色使用。字体资产与加载方式见 `references/typography.md`。

- Heading XL/L/M/S：用于页面标题和 section 标题，优先使用品牌字体 `"Exposure[-10]"`。
- Title XL/L/M：用于密集卡片、弹窗和控件分组，优先使用 plain 字体 `"Aeonik Soft Pro"`。
- Body L/M/S：用于可读性要求高的产品 UI 与表单，优先使用 plain 字体 `"Aeonik Soft Pro"`。
- Caption M：用于元信息、辅助说明、徽标和紧凑标签，优先使用 plain 字体 `"Aeonik Soft Pro"`。

不要用 viewport width 直接缩放字体。需要响应式时，使用明确的断点和字号层级。实现时优先使用 theme 中生成的 `--type-*` 语义变量。

## 颜色

颜色分层与 Fills/Labels 说明见 `references/color-system.md`。

内容文本使用语义文本 token：

- Primary text：核心信息。
- Secondary text：辅助说明和元信息。
- Tertiary text：低强调标签。
- Quaternary：仅用于禁用文本或装饰性文本。

按意图使用色板：

- Grays：主品牌基础色，用于全局背景、正文、标题、边框和默认中性色界面。
- Mom：产品品类色，用于吸奶器、盆底肌修复仪、光疗仪、电疗坐垫、腰腹按摩椅、瑜伽球、胎心仪、孕激素检测仪、疤痕仪、红外光乳房贴、智能乳盾等产品。
- Care：安抚看护色系，用于体重秤、BBM、白噪音、婴儿床、电动摇椅、智能袜、AI玩具等产品。
- Parenting：养育色系，用于毛巾加热桶、调奶器、暖奶器、尿布台体重秤等产品。
- Family：家庭（环境健康）色系，用于清洗机、加湿器、净化器、雾化器、母婴冰箱等产品。

## 布局

基础 spacing、radius、shadow token 见 `references/foundation-tokens.md`。

使用 spacing tokens，不要随意写孤立像素值。组件密度应适合 Momcozy 的设备管理、状态监测、内容阅读、护理服务、社区互动和表单任务，保持信息清晰、操作轻量。除非用户明确要求 landing page，否则避免嵌套卡片和过大的营销式构图。

圆角要统一使用 radius tokens。`--radius` 作为 shadcn/ui 的基准值，具体组件仍优先使用 Figma 原始尺度：`--radius-xs`、`--radius-sm`、`--radius-md`、`--radius-lg`、`--radius-xl`、`--radius-2xl`、`--radius-3xl`、`--radius-4xl`、`--radius-full`。

## 状态

把交互状态映射到 Momcozy semantic tokens。`Fills` 控制按钮或容器的背景填充，`Labels` 控制该容器上的文字和图标：

- 主按钮容器：使用对应产品线的 `Fills / Primary` 或 `Fills / Default`。
- 主按钮文字/图标：使用同一产品线的 `Labels / Primary`。
- 二级按钮容器：使用同一产品线的 `Fills / Secondary`。
- 二级按钮文字/图标：使用同一产品线的 `Labels / Secondary`。
- 禁用容器：使用同一产品线的 `Fills / Disabled`。
- 禁用文字/图标：使用同一产品线的 `Labels / Disabled`。
- 按下容器：使用同一产品线的 `Fills / Pressed`。
- 按下文字/图标：使用同一产品线的 `Labels / Pressed Color`，并结合 `Labels / Pressed Opacity`。

不要把 `Labels` 用作普通正文颜色；正文继续使用 `Colors / Text`。不要把 `Fills` 用作页面背景；页面背景继续使用 `Colors / Backgrouds`。不要在没检查 token 的情况下发明 hover 和 focus 颜色。如果缺少对应 token，可以用透明度推导轻微 hover 状态，并把 focus ring 映射到 `--ring`。

## 可访问性

每次 token 更新后检查文本和控件对比度。不要因为 light/dark 在 Figma 中成对出现，就默认它们一定满足可访问性要求。交互组件必须有可见 focus 状态、明确禁用状态和足够的点击区域。
