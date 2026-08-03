export type ComponentCategory =
  | "Foundations"
  | "Forms"
  | "Navigation"
  | "Overlays"
  | "Data"
  | "Messaging"
  | "Momcozy Components"

export type ComponentLocale = "en" | "zh"

export type ComponentDoc = {
  slug: string
  title: string
  description: string
  category: ComponentCategory
  source: string
  exports: string[]
  examples: string[]
  customPath?: string
}

type ComponentSeed = Omit<ComponentDoc, "source" | "examples"> & {
  examples?: string[]
}

const defaultExamples: Record<ComponentCategory, string[]> = {
  Foundations: ["Basic", "Variants", "Sizes"],
  Forms: ["Basic", "States", "Validation"],
  Navigation: ["Basic", "Responsive", "States"],
  Overlays: ["Basic", "Small", "Destructive"],
  Data: ["Basic", "Responsive", "Empty State"],
  Messaging: ["Basic", "With Action", "States"],
  "Momcozy Components": ["Responsive Variants", "Interaction States", "Token Mapping"],
}

const seeds: ComponentSeed[] = [
  { slug: "accordion", title: "Accordion", description: "A vertically stacked set of interactive headings that reveal content.", category: "Navigation", exports: ["Accordion", "AccordionItem", "AccordionTrigger", "AccordionContent"], examples: ["Basic", "Multiple", "Disabled"] },
  { slug: "alert", title: "Alert", description: "Displays a callout for user attention and contextual feedback.", category: "Messaging", exports: ["Alert", "AlertTitle", "AlertDescription", "AlertAction"], examples: ["Basic", "Destructive", "With Action"] },
  { slug: "alert-dialog", title: "Alert Dialog", description: "A modal dialog that interrupts the user with important content and expects a response.", category: "Overlays", exports: ["AlertDialog", "AlertDialogTrigger", "AlertDialogContent", "AlertDialogHeader", "AlertDialogTitle", "AlertDialogDescription", "AlertDialogFooter", "AlertDialogCancel", "AlertDialogAction"], examples: ["Basic", "Small", "Media", "Small with Media", "Destructive"] },
  { slug: "aspect-ratio", title: "Aspect Ratio", description: "Displays content within a desired ratio.", category: "Foundations", exports: ["AspectRatio"], examples: ["Image", "Video", "Responsive"] },
  { slug: "attachment", title: "Attachment", description: "Displays uploaded files, progress, metadata, and file actions.", category: "Messaging", exports: ["Attachment", "AttachmentMedia", "AttachmentContent", "AttachmentTitle", "AttachmentDescription", "AttachmentActions"] },
  { slug: "avatar", title: "Avatar", description: "An image element with a fallback for representing a person or profile.", category: "Foundations", exports: ["Avatar", "AvatarImage", "AvatarFallback", "AvatarBadge", "AvatarGroup"], examples: ["Basic", "Fallback", "Badge", "Group"] },
  { slug: "badge", title: "Badge", description: "Displays a compact status, label, or category.", category: "Foundations", exports: ["Badge"], examples: ["Variants", "With Icon", "As Link"] },
  { slug: "breadcrumb", title: "Breadcrumb", description: "Displays the path to the current resource using linked hierarchy.", category: "Navigation", exports: ["Breadcrumb", "BreadcrumbList", "BreadcrumbItem", "BreadcrumbLink", "BreadcrumbPage"] },
  { slug: "bubble", title: "Bubble", description: "A composable message bubble for assistant and conversation experiences.", category: "Messaging", exports: ["Bubble", "BubbleContent", "BubbleGroup", "BubbleReactions"], examples: ["Incoming", "Outgoing", "Reactions"] },
  { slug: "button", title: "Button", description: "Displays a button or a component that looks like a button.", category: "Foundations", exports: ["Button", "buttonVariants"], examples: ["Primary", "Secondary", "Outline", "Ghost", "Destructive", "Sizes", "Icon", "Loading"] },
  { slug: "button-group", title: "Button Group", description: "Groups related buttons and actions into a connected control.", category: "Foundations", exports: ["ButtonGroup", "ButtonGroupText", "ButtonGroupSeparator"] },
  { slug: "calendar", title: "Calendar", description: "A date field component that allows users to enter and edit dates.", category: "Forms", exports: ["Calendar", "CalendarDayButton"], examples: ["Basic", "Range", "Month and Year", "Disabled Dates"] },
  { slug: "card", title: "Card", description: "Displays content with a header, body, action, and footer.", category: "Foundations", exports: ["Card", "CardHeader", "CardTitle", "CardDescription", "CardAction", "CardContent", "CardFooter"] },
  { slug: "carousel", title: "Carousel", description: "A carousel with motion and swipe gestures built using Embla.", category: "Data", exports: ["Carousel", "CarouselContent", "CarouselItem", "CarouselPrevious", "CarouselNext"] },
  { slug: "chart", title: "Chart", description: "Composable chart primitives powered by Recharts and semantic chart tokens.", category: "Data", exports: ["ChartContainer", "ChartTooltip", "ChartLegend"] },
  { slug: "checkbox", title: "Checkbox", description: "A control that lets the user toggle between checked and unchecked.", category: "Forms", exports: ["Checkbox"] },
  { slug: "collapsible", title: "Collapsible", description: "An interactive component which expands and collapses a panel.", category: "Navigation", exports: ["Collapsible", "CollapsibleTrigger", "CollapsibleContent"] },
  { slug: "combobox", title: "Combobox", description: "Autocomplete input with a list of suggested values.", category: "Forms", exports: ["Combobox", "ComboboxInput", "ComboboxContent", "ComboboxList", "ComboboxItem"] },
  { slug: "command", title: "Command", description: "Fast, composable command menu for search and keyboard actions.", category: "Navigation", exports: ["Command", "CommandInput", "CommandList", "CommandGroup", "CommandItem"] },
  { slug: "context-menu", title: "Context Menu", description: "Displays a menu of actions when a user right-clicks or long-presses.", category: "Overlays", exports: ["ContextMenu", "ContextMenuTrigger", "ContextMenuContent", "ContextMenuItem"] },
  { slug: "data-table", title: "Data Table", description: "Powerful table composition with sorting, filtering, pagination, and selection.", category: "Data", exports: ["Table", "TableHeader", "TableBody", "TableRow", "TableHead", "TableCell"] },
  { slug: "date-picker", title: "Date Picker", description: "A date selection pattern composed from Calendar and Popover.", category: "Forms", exports: ["Calendar", "Popover", "PopoverTrigger", "PopoverContent"] },
  { slug: "dialog", title: "Dialog", description: "A window overlaid on the primary content that requires user interaction.", category: "Overlays", exports: ["Dialog", "DialogTrigger", "DialogContent", "DialogHeader", "DialogTitle", "DialogDescription", "DialogFooter"] },
  { slug: "direction", title: "Direction", description: "Provides left-to-right and right-to-left direction to composed components.", category: "Navigation", exports: ["DirectionProvider"] },
  { slug: "drawer", title: "Drawer", description: "A task surface that slides from the edge of the screen.", category: "Overlays", exports: ["Drawer", "DrawerTrigger", "DrawerContent", "DrawerHeader", "DrawerTitle", "DrawerDescription", "DrawerFooter"] },
  { slug: "dropdown-menu", title: "Dropdown Menu", description: "Displays a menu of actions triggered by a button.", category: "Overlays", exports: ["DropdownMenu", "DropdownMenuTrigger", "DropdownMenuContent", "DropdownMenuItem"] },
  { slug: "empty", title: "Empty", description: "An actionable empty state for lists, results, and collections.", category: "Messaging", exports: ["Empty", "EmptyHeader", "EmptyMedia", "EmptyTitle", "EmptyDescription", "EmptyContent"] },
  { slug: "field", title: "Field", description: "Composes labels, controls, descriptions, and validation messages.", category: "Forms", exports: ["Field", "FieldLabel", "FieldDescription", "FieldError", "FieldGroup"] },
  { slug: "hover-card", title: "Hover Card", description: "Displays contextual content when hovering or focusing a trigger.", category: "Overlays", exports: ["HoverCard", "HoverCardTrigger", "HoverCardContent"] },
  { slug: "input", title: "Input", description: "Displays a form input field or a component that looks like an input field.", category: "Forms", exports: ["Input"] },
  { slug: "input-group", title: "Input Group", description: "Adds inline icons, text, and actions to an input.", category: "Forms", exports: ["InputGroup", "InputGroupInput", "InputGroupAddon", "InputGroupButton"] },
  { slug: "input-otp", title: "Input OTP", description: "Accessible one-time password input with segmented slots.", category: "Forms", exports: ["InputOTP", "InputOTPGroup", "InputOTPSlot", "InputOTPSeparator"] },
  { slug: "item", title: "Item", description: "A flexible list row with media, content, metadata, and actions.", category: "Foundations", exports: ["Item", "ItemMedia", "ItemContent", "ItemTitle", "ItemDescription", "ItemActions"] },
  { slug: "kbd", title: "Kbd", description: "Displays an inline keyboard key or shortcut group.", category: "Foundations", exports: ["Kbd", "KbdGroup"] },
  { slug: "label", title: "Label", description: "Renders an accessible label associated with a form control.", category: "Forms", exports: ["Label"] },
  { slug: "marker", title: "Marker", description: "Marks system events and separators in a conversation stream.", category: "Messaging", exports: ["Marker", "MarkerIcon", "MarkerContent"] },
  { slug: "menubar", title: "Menubar", description: "A desktop-style menu bar that provides persistent command access.", category: "Navigation", exports: ["Menubar", "MenubarMenu", "MenubarTrigger", "MenubarContent", "MenubarItem"] },
  { slug: "message", title: "Message", description: "Composes avatar, content, metadata, and message bubbles.", category: "Messaging", exports: ["Message", "MessageAvatar", "MessageContent", "MessageHeader", "MessageFooter"] },
  { slug: "message-scroller", title: "Message Scroller", description: "An auto-scroll-aware viewport for long conversation streams.", category: "Messaging", exports: ["MessageScrollerProvider", "MessageScroller", "MessageScrollerViewport", "MessageScrollerContent", "MessageScrollerButton"] },
  { slug: "native-select", title: "Native Select", description: "A styled native select for simple, performant option lists.", category: "Forms", exports: ["NativeSelect", "NativeSelectOption", "NativeSelectOptGroup"] },
  { slug: "navigation-menu", title: "Navigation Menu", description: "A collection of links for navigating websites and applications.", category: "Navigation", exports: ["NavigationMenu", "NavigationMenuList", "NavigationMenuItem", "NavigationMenuTrigger", "NavigationMenuContent", "NavigationMenuLink"] },
  { slug: "pagination", title: "Pagination", description: "Page navigation with previous, next, page, and overflow controls.", category: "Navigation", exports: ["Pagination", "PaginationContent", "PaginationItem", "PaginationLink", "PaginationPrevious", "PaginationNext"] },
  { slug: "popover", title: "Popover", description: "Displays rich content in a portal triggered by a button.", category: "Overlays", exports: ["Popover", "PopoverTrigger", "PopoverContent", "PopoverHeader", "PopoverTitle", "PopoverDescription"] },
  { slug: "progress", title: "Progress", description: "Displays an indicator showing the completion progress of a task.", category: "Data", exports: ["Progress"] },
  { slug: "radio-group", title: "Radio Group", description: "A set of checkable buttons where only one can be checked at a time.", category: "Forms", exports: ["RadioGroup", "RadioGroupItem"] },
  { slug: "resizable", title: "Resizable", description: "Accessible resizable panel groups and handles.", category: "Data", exports: ["ResizablePanelGroup", "ResizablePanel", "ResizableHandle"] },
  { slug: "scroll-area", title: "Scroll Area", description: "Augments native scroll behavior with styled, consistent scrollbars.", category: "Data", exports: ["ScrollArea", "ScrollBar"] },
  { slug: "select", title: "Select", description: "Displays a list of options for the user to pick from.", category: "Forms", exports: ["Select", "SelectTrigger", "SelectValue", "SelectContent", "SelectItem"] },
  { slug: "separator", title: "Separator", description: "Visually or semantically separates content.", category: "Foundations", exports: ["Separator"] },
  { slug: "sheet", title: "Sheet", description: "Extends Dialog with content that slides from an edge of the screen.", category: "Overlays", exports: ["Sheet", "SheetTrigger", "SheetContent", "SheetHeader", "SheetTitle", "SheetDescription", "SheetFooter"] },
  { slug: "sidebar", title: "Sidebar", description: "A composable, responsive sidebar for application navigation.", category: "Navigation", exports: ["SidebarProvider", "Sidebar", "SidebarHeader", "SidebarContent", "SidebarGroup", "SidebarMenu"] },
  { slug: "skeleton", title: "Skeleton", description: "Displays a placeholder while content is loading.", category: "Messaging", exports: ["Skeleton"] },
  { slug: "slider", title: "Slider", description: "An input where the user selects a value from within a range.", category: "Forms", exports: ["Slider"] },
  { slug: "sonner", title: "Sonner", description: "An opinionated toast component for brief feedback.", category: "Messaging", exports: ["Toaster", "toast"] },
  { slug: "spinner", title: "Spinner", description: "A compact indeterminate loading indicator.", category: "Messaging", exports: ["Spinner"] },
  { slug: "switch", title: "Switch", description: "A control that toggles between checked and unchecked states.", category: "Forms", exports: ["Switch"] },
  { slug: "table", title: "Table", description: "A responsive table component for structured data.", category: "Data", exports: ["Table", "TableHeader", "TableBody", "TableRow", "TableHead", "TableCell"] },
  { slug: "tabs", title: "Tabs", description: "A set of layered sections that display one panel at a time.", category: "Navigation", exports: ["Tabs", "TabsList", "TabsTrigger", "TabsContent"] },
  { slug: "textarea", title: "Textarea", description: "Displays a multiline text input.", category: "Forms", exports: ["Textarea"] },
  { slug: "toast", title: "Toast", description: "A succinct message that appears temporarily to confirm an action.", category: "Messaging", exports: ["Toaster", "toast"] },
  { slug: "toggle", title: "Toggle", description: "A two-state button that can be either on or off.", category: "Foundations", exports: ["Toggle", "toggleVariants"] },
  { slug: "toggle-group", title: "Toggle Group", description: "A set of two-state buttons that can be toggled on or off.", category: "Foundations", exports: ["ToggleGroup", "ToggleGroupItem"] },
  { slug: "tooltip", title: "Tooltip", description: "A popup that displays information related to an element on focus or hover.", category: "Overlays", exports: ["Tooltip", "TooltipTrigger", "TooltipContent"] },
  { slug: "typography", title: "Typography", description: "Momcozy Exposure headings and Aeonik body styles for product interfaces.", category: "Foundations", exports: ["Typography styles"], examples: ["Headings", "Body", "Lists", "Inline Code"] },
  { slug: "toolbar-top", title: "Toolbar Top", description: "Momcozy iOS top-toolbar patterns with responsive title and action variants.", category: "Momcozy Components", exports: ["ToolbarTop"], customPath: "/toolbar-top" },
  { slug: "toolbar-top-sheet", title: "Toolbar Top Sheet", description: "A sheet-aware top toolbar with liquid-glass actions and drag context.", category: "Momcozy Components", exports: ["ToolbarTopSheet"], customPath: "/toolbar-top-sheet" },
  { slug: "liquid-glass-buttons", title: "Liquid Glass Buttons", description: "Token-driven iOS liquid-glass action buttons for light and dark surfaces.", category: "Momcozy Components", exports: ["LiquidGlassButton", "LiquidGlassButtonGroup"], customPath: "/liquid-glass-buttons", examples: ["Single Button", "Button Group", "Light Surface", "Dark Surface"] },
  { slug: "title", title: "Title", description: "Momcozy navigation titles with one-line, two-line, avatar, and device states.", category: "Momcozy Components", exports: ["Title", "TitleLeading", "TitleTrailing"], customPath: "/title" },
  { slug: "tab-bar", title: "Tab Bar", description: "Momcozy bottom navigation assembled from semantic tab-bar buttons.", category: "Momcozy Components", exports: ["TabBar", "TabBarButton"], customPath: "/tab-bar" },
]

const componentZh: Record<string, readonly [title: string, description: string]> = {
  "toolbar-top": ["顶部工具栏", "Momcozy iOS 顶部工具栏模式，包含响应式标题与操作区变体。"],
  "toolbar-top-sheet": ["弹层顶部工具栏", "适用于弹层场景的顶部工具栏，包含液态玻璃操作按钮与拖拽上下文。"],
  "liquid-glass-buttons": ["液态玻璃按钮", "由 token 驱动的 iOS 液态玻璃操作按钮，适配浅色与深色表面。"],
  title: ["标题", "Momcozy 导航标题，支持单行、双行、头像和设备状态。"],
  "tab-bar": ["底部标签栏", "使用语义化标签按钮组成的 Momcozy 底部导航。"],
  accordion: ["折叠面板", "一组垂直排列的交互标题，展开后显示对应内容。"],
  alert: ["提示", "用于吸引用户注意并提供情境反馈。"],
  "alert-dialog": ["警示对话框", "用重要信息中断当前操作，并要求用户作出明确选择。"],
  "aspect-ratio": ["宽高比", "按指定比例展示内容。"],
  attachment: ["附件", "展示上传文件、进度、元信息和文件操作。"],
  avatar: ["头像", "使用图片或后备内容表示人物与个人资料。"],
  badge: ["徽标", "展示紧凑的状态、标签或分类信息。"],
  breadcrumb: ["面包屑", "使用可点击的层级路径表示当前位置。"],
  bubble: ["气泡", "用于助手和对话场景的可组合消息气泡。"],
  button: ["按钮", "展示按钮或具有按钮外观的组件。"],
  "button-group": ["按钮组", "将相关按钮和操作组合成连续控件。"],
  calendar: ["日历", "用于输入、查看和选择日期。"],
  card: ["卡片", "使用标题、内容、操作和页脚组织信息。"],
  carousel: ["轮播", "基于 Embla 实现，支持动效与滑动手势。"],
  chart: ["图表", "由 Recharts 和语义化图表 token 驱动的可组合图表。"],
  checkbox: ["复选框", "在选中和未选中状态之间切换。"],
  collapsible: ["折叠区域", "展开或收起一块内容区域。"],
  combobox: ["组合框", "带建议列表的自动补全输入框。"],
  command: ["命令面板", "用于搜索和键盘操作的快速可组合命令菜单。"],
  "context-menu": ["右键菜单", "在右键点击或长按时显示操作菜单。"],
  "data-table": ["数据表格", "支持排序、筛选、分页和选择的数据表格组合。"],
  "date-picker": ["日期选择器", "由日历和弹出框组合而成的日期选择模式。"],
  dialog: ["对话框", "覆盖在主要内容上，需要用户处理后才能继续。"],
  direction: ["文字方向", "为组合组件提供从左到右或从右到左的阅读方向。"],
  drawer: ["抽屉", "从屏幕边缘滑出的任务操作区域。"],
  "dropdown-menu": ["下拉菜单", "由按钮触发并显示一组操作。"],
  empty: ["空状态", "用于列表、搜索结果和集合为空时提供说明与下一步操作。"],
  field: ["表单字段", "组合标签、控件、说明和验证信息。"],
  "hover-card": ["悬浮卡片", "悬停或聚焦触发元素时显示相关内容。"],
  input: ["输入框", "展示输入字段或具有输入框外观的组件。"],
  "input-group": ["输入框组", "为输入框添加行内图标、文字和操作。"],
  "input-otp": ["验证码输入框", "带分段输入格的无障碍一次性验证码输入组件。"],
  item: ["列表项", "可组合媒体、内容、元信息和操作的列表行。"],
  kbd: ["键盘按键", "展示行内键盘按键或快捷键组合。"],
  label: ["标签", "渲染与表单控件关联的无障碍标签。"],
  marker: ["标记", "标记对话流中的系统事件和分隔位置。"],
  menubar: ["菜单栏", "提供持续可见命令入口的桌面式菜单栏。"],
  message: ["消息", "组合头像、内容、元信息和消息气泡。"],
  "message-scroller": ["消息滚动区", "支持自动滚动感知的长对话视口。"],
  "native-select": ["原生选择器", "适用于简单高效选项列表的样式化原生选择器。"],
  "navigation-menu": ["导航菜单", "用于网站和应用导航的链接集合。"],
  pagination: ["分页", "包含上一页、下一页、页码和省略项的分页导航。"],
  popover: ["弹出框", "由按钮触发，在浮层中展示丰富内容。"],
  progress: ["进度条", "展示任务完成进度。"],
  "radio-group": ["单选组", "一组只能选择其中一项的控件。"],
  resizable: ["可调整大小区域", "支持无障碍操作的可调整大小面板和手柄。"],
  "scroll-area": ["滚动区域", "在原生滚动行为上提供统一样式的滚动条。"],
  select: ["选择器", "展示可供用户选择的选项列表。"],
  separator: ["分割线", "在视觉或语义上分隔内容。"],
  sheet: ["侧边弹层", "从屏幕边缘滑出的对话框扩展形式。"],
  sidebar: ["侧边栏", "用于应用导航的可组合响应式侧边栏。"],
  skeleton: ["骨架屏", "内容加载时展示占位结构。"],
  slider: ["滑块", "让用户在指定范围内选择数值。"],
  sonner: ["消息通知", "用于短时反馈的轻量通知组件。"],
  spinner: ["加载指示器", "展示紧凑的不确定进度状态。"],
  switch: ["开关", "在开启和关闭状态之间切换。"],
  table: ["表格", "用于展示结构化数据的响应式表格。"],
  tabs: ["标签页", "在同一位置切换显示不同内容面板。"],
  textarea: ["多行输入框", "展示可输入多行文字的字段。"],
  toast: ["轻提示", "短暂出现，用于确认操作结果或提供反馈。"],
  toggle: ["切换按钮", "可在开启和关闭状态之间切换的双态按钮。"],
  "toggle-group": ["切换按钮组", "由多个可切换双态按钮组成的控件组。"],
  tooltip: ["工具提示", "在聚焦或悬停时显示与元素相关的补充信息。"],
  typography: ["排版", "使用 Momcozy Exposure 标题字体和 Aeonik 正文字体的产品排版样式。"],
}

const exampleZh: Record<string, string> = {
  Basic: "基础",
  Variants: "变体",
  Sizes: "尺寸",
  States: "状态",
  Validation: "验证",
  Responsive: "响应式",
  "Empty State": "空状态",
  "With Action": "带操作",
  Multiple: "多项展开",
  Disabled: "禁用",
  Destructive: "危险操作",
  Small: "小尺寸",
  Media: "带媒体",
  "Small with Media": "小尺寸带媒体",
  Image: "图片",
  Video: "视频",
  Fallback: "后备内容",
  Badge: "徽标",
  Group: "分组",
  "With Icon": "带图标",
  "As Link": "作为链接",
  Primary: "主要",
  Secondary: "次要",
  Outline: "描边",
  Ghost: "幽灵",
  Icon: "图标",
  Loading: "加载中",
  Range: "范围",
  "Month and Year": "月份与年份",
  "Disabled Dates": "禁用日期",
  Incoming: "收到",
  Outgoing: "发出",
  Reactions: "互动",
  "Single Button": "单个按钮",
  "Button Group": "按钮组",
  "Light Surface": "浅色表面",
  "Dark Surface": "深色表面",
  "Responsive Variants": "响应式变体",
  "Interaction States": "交互状态",
  "Token Mapping": "Token 映射",
  Headings: "标题",
  Body: "正文",
  Lists: "列表",
  "Inline Code": "行内代码",
}

export function componentTitle(component: ComponentDoc, locale: ComponentLocale) {
  return locale === "zh" ? componentZh[component.slug]?.[0] ?? component.title : component.title
}

export function componentDescription(component: ComponentDoc, locale: ComponentLocale) {
  return locale === "zh" ? componentZh[component.slug]?.[1] ?? component.description : component.description
}

export function componentExampleLabel(example: string, locale: ComponentLocale) {
  return locale === "zh" ? exampleZh[example] ?? example : example
}

const mappedComponents: ComponentDoc[] = seeds.map((component) => ({
  ...component,
  source: `@/components/ui/${component.slug === "data-table" ? "table" : component.slug === "date-picker" ? "calendar" : component.slug === "toast" ? "sonner" : component.slug === "liquid-glass-buttons" ? "liquid-glass-button" : component.slug}`,
  examples: component.examples ?? defaultExamples[component.category],
}))

export const componentDocs: ComponentDoc[] = [
  ...mappedComponents.filter((component) => component.customPath),
  ...mappedComponents.filter((component) => !component.customPath),
]

export const componentDocsBySlug = new Map(componentDocs.map((component) => [component.slug, component]))

export function componentCode(component: ComponentDoc) {
  const root = component.exports[0].replace(/\sstyles$/, "")
  const importNames = component.exports.filter((name) => !name.includes(" ")).slice(0, 6).join(",\n  ")
  return `import {\n  ${importNames}\n} from "${component.source}"\n\nexport function ${root}Demo() {\n  return (\n    <${root}>\n      ${component.title}\n    </${root}>\n  )\n}`
}

export function componentComposition(component: ComponentDoc) {
  return component.exports.map((name) => `<${name} />`).join("\n")
}

export function componentToc(component: ComponentDoc, locale: ComponentLocale = "en") {
  const copy = locale === "zh"
    ? {
        installation: "安装",
        usage: "用法",
        composition: "组合方式",
        accessibility: "可访问性",
        apiReference: "API 参考",
      }
    : {
        installation: "Installation",
        usage: "Usage",
        composition: "Composition",
        accessibility: "Accessibility",
        apiReference: "API Reference",
      }

  return [
    { id: "installation", label: copy.installation },
    { id: "usage", label: copy.usage },
    { id: "composition", label: copy.composition },
    ...component.examples.map((label) => ({
      id: `example-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      label: componentExampleLabel(label, locale),
    })),
    { id: "accessibility", label: copy.accessibility },
    { id: "api-reference", label: copy.apiReference },
  ]
}
