import { cloneElement, isValidElement, useEffect, useRef, useState, type CSSProperties, type ReactElement, type ReactNode } from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts"
import { zhCN } from "date-fns/locale"
import { toast } from "sonner"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import skillMarkdown from "../../skills/momcozy-shadcn-design-system/SKILL.md?raw"
import colorMarkdown from "../../skills/momcozy-shadcn-design-system/references/color-system.md?raw"
import componentRulesMarkdown from "../../skills/momcozy-shadcn-design-system/references/component-rules.md?raw"
import demoPatternsMarkdown from "../../skills/momcozy-shadcn-design-system/references/demo-patterns.md?raw"
import foundationMarkdown from "../../skills/momcozy-shadcn-design-system/references/foundation-tokens.md?raw"
import iconMarkdown from "../../skills/momcozy-shadcn-design-system/references/icon-system.md?raw"
import integrationMarkdown from "../../skills/momcozy-shadcn-design-system/references/shadcn-integration.md?raw"
import tokenMarkdown from "../../skills/momcozy-shadcn-design-system/references/token-mapping.md?raw"
import typographyMarkdown from "../../skills/momcozy-shadcn-design-system/references/typography.md?raw"
import componentLibraryMarkdown from "../../docs/component-library.md?raw"
import aiPlanIconReviewMarkdown from "../../docs/icon-reviews/05-ai-lactation-plan.md?raw"
import partnerModeIconReviewMarkdown from "../../docs/icon-reviews/06-partner-mode.md?raw"
import projectReadmeMarkdown from "../../README.md?raw"
import startHereMarkdown from "../../START-HERE.md?raw"
import darkModeRecommendationMarkdown from "../../app-3-status-dark-mode-recommendation.md?raw"
import colorTokenReviewMarkdown from "../../color-token-update-review-2026-07-27.md?raw"
import rootDesignQaMarkdown from "../../design-qa.md?raw"
import demoReadmeMarkdown from "../../public/demos/README.md?raw"
import iconCatalogMarkdown from "../../public/demos/icon-catalog.md?raw"
import statusColorMarkdown from "../../status-color-extract.md?raw"
import playgroundReadmeMarkdown from "../README.md?raw"
import playgroundQaMarkdown from "../design-qa.md?raw"
import { ComponentDocPage } from "@/components/component-doc-page"
import { componentDocs, componentDocsBySlug, componentTitle, componentToc } from "@/docs/component-docs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Attachment, AttachmentAction, AttachmentActions, AttachmentContent, AttachmentDescription, AttachmentGroup, AttachmentMedia, AttachmentTitle } from "@/components/ui/attachment"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Icon as MomcozyIcon } from "../../src/components/ui/icon"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DirectionProvider } from "@/components/ui/direction"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader } from "@/components/ui/message"
import { MessageScroller, MessageScrollerButton, MessageScrollerContent, MessageScrollerProvider, MessageScrollerViewport } from "@/components/ui/message-scroller"
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from "@/components/ui/native-select"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Slider } from "@/components/ui/slider"
import { Toaster } from "@/components/ui/sonner"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import momcozyRoundLogo from "@/assets/momcozy-round-logo.png"
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowRight01Icon, CheckmarkCircle01Icon, File01Icon, Notification02Icon, Mail01Icon, MoreHorizontalCircle01Icon, AttachmentIcon, SearchIcon, Delete02Icon, CloudUploadIcon, UserIcon, Calendar03Icon, Settings02Icon, SparklesIcon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

const chartData = [
  { day: "Mon", sessions: 42 },
  { day: "Tue", sessions: 68 },
  { day: "Wed", sessions: 52 },
  { day: "Thu", sessions: 81 },
  { day: "Fri", sessions: 64 },
  { day: "Sat", sessions: 92 },
]

const chartDataZh = [
  { day: "周一", sessions: 42 },
  { day: "周二", sessions: 68 },
  { day: "周三", sessions: 52 },
  { day: "周四", sessions: 81 },
  { day: "周五", sessions: 64 },
  { day: "周六", sessions: 92 },
]

const chartConfig = {
  sessions: { label: "Sessions", color: "var(--chart-1)" },
} satisfies ChartConfig

const catalogue = {
  en: [
    ["forms", "Forms", "Inputs, choices, field composition and date selection"],
    ["navigation", "Navigation", "Wayfinding, grouping and application structure"],
    ["overlays", "Overlays", "Menus, dialogs, drawers, sheets and contextual layers"],
    ["data", "Data", "Tables, progress, charts, scroll and resize patterns"],
    ["messaging", "Messaging", "Chat bubbles, messages, attachments and markers"],
  ],
  zh: [
    ["forms", "表单", "输入、选项、字段组合与日期选择"],
    ["navigation", "导航", "路径引导、内容分组与应用结构"],
    ["overlays", "浮层", "菜单、对话框、抽屉、侧边弹层与上下文层"],
    ["data", "数据", "表格、进度、图表、滚动与尺寸调整模式"],
    ["messaging", "消息", "聊天气泡、消息、附件与标记"],
  ],
}

const catalogueTargets = {
  forms: "input",
  navigation: "tabs",
  overlays: "dialog",
  data: "table",
  messaging: "message",
} as const

// Kept only as an opt-in development reference. The public catalogue uses the
// compact card index and dedicated component pages instead of one long gallery.
const legacyGalleryEnabled = new URLSearchParams(window.location.search).get("legacy-gallery") === "1"

const galleryZh: Record<string, string> = {
  Forms: "表单",
  Field: "表单字段",
  "Label, description, input and error": "标签、说明、输入与错误状态",
  Email: "邮箱",
  "Used for device and care reminders.": "用于接收设备和护理提醒。",
  "Invite code": "邀请码",
  "Enter a valid 8-character code.": "请输入有效的 8 位邀请码。",
  "Input Group": "输入框组",
  "Input with leading and trailing controls": "带前后控件的输入框",
  Search: "搜索",
  "Components…": "搜索组件…",
  "Email address": "邮箱地址",
  Send: "发送",
  "Choice Controls": "选择控件",
  "Checkbox, radio, switch and slider": "复选框、单选框、开关与滑块",
  "Share anonymous analytics": "共享匿名使用数据",
  Gentle: "轻柔",
  Balanced: "均衡",
  "Auto mode": "自动模式",
  "Select & Native Select": "选择器与原生选择器",
  "Custom overlay and platform-native options": "自定义浮层与平台原生选项",
  "Product line": "产品线",
  Frequency: "频率",
  Daily: "每天",
  Weekly: "每周",
  Monthly: "每月",
  Combobox: "组合框",
  "Searchable single selection": "支持搜索的单选控件",
  "Choose a device": "选择设备",
  "No device found.": "未找到设备。",
  "Breast Pump": "吸奶器",
  "Bottle Warmer": "暖奶器",
  "Baby Monitor": "婴儿监护器",
  "Input OTP": "验证码输入框",
  "Segmented one-time code entry": "分段式一次性验证码输入",
  Textarea: "多行输入框",
  "Multiline text input": "多行文本输入",
  "Care notes": "护理记录",
  "Add a note for the next session…": "记录下次使用需要注意的内容…",
  "Calendar & Date Picker": "日历与日期选择器",
  "Calendar primitive composed with Popover": "由日历原语与弹出框组合而成",
  "Selected date": "已选日期",
  "Pick a date": "选择日期",
  "Date Picker is a composition pattern built from Calendar + Popover.": "日期选择器由日历和弹出框组合而成。",
  Navigation: "导航",
  "Breadcrumb & Pagination": "面包屑与分页",
  "Hierarchy and paged navigation": "层级路径与分页导航",
  Library: "组件库",
  Components: "组件",
  Gallery: "总览",
  Tabs: "标签页",
  "Related content switching": "关联内容切换",
  Preview: "预览",
  Code: "代码",
  Tokens: "Token",
  "Rendered component preview": "组件渲染预览",
  "Accordion & Collapsible": "折叠面板与折叠区域",
  "Disclosure at two levels": "两级内容展开模式",
  "Which tokens are mapped?": "映射了哪些 Token？",
  "Background, foreground, borders, interaction states, typography and radii.": "包含背景、前景、边框、交互状态、字体与圆角。",
  "Can I edit the source?": "可以编辑源码吗？",
  "Yes. Every component lives in this project.": "可以。每个组件的源码都保存在当前项目中。",
  "Advanced options": "高级选项",
  "Registry and product-line extensions can be added here.": "可以在这里添加注册表和产品线扩展。",
  "Toggle & Button Group": "切换按钮与按钮组",
  "Compact modes and connected actions": "紧凑模式与关联操作",
  Favorite: "收藏",
  Notifications: "通知",
  Save: "保存",
  "Navigation Menu": "导航菜单",
  "Primary web navigation": "网页主导航",
  Foundations: "基础组件",
  "Inputs and controls": "输入与控件",
  Overlays: "浮层",
  "Dialogs and menus": "对话框与菜单",
  Messaging: "消息",
  Menubar: "菜单栏",
  "Desktop-style command hierarchy": "桌面式命令层级",
  File: "文件",
  New: "新建",
  Open: "打开",
  Export: "导出",
  Edit: "编辑",
  Undo: "撤销",
  Redo: "重做",
  Sidebar: "侧边栏",
  "Contained demo of application navigation": "应用导航的独立示例",
  Workspace: "工作区",
  Devices: "设备",
  Settings: "设置",
  "Application content": "应用内容",
  "Dialog & Alert Dialog": "对话框与警示对话框",
  "General and destructive confirmation": "常规确认与危险操作确认",
  "Open dialog": "打开对话框",
  "Edit profile": "编辑资料",
  "Update the name shown across connected devices.": "更新所有已连接设备上显示的名称。",
  "Save changes": "保存更改",
  Disconnect: "断开连接",
  "Disconnect this device?": "断开这台设备？",
  "You can pair it again later.": "之后仍可重新配对。",
  Cancel: "取消",
  "Sheet & Drawer": "侧边弹层与抽屉",
  "Side and bottom task surfaces": "侧边与底部任务面板",
  "Open sheet": "打开侧边弹层",
  "Device settings": "设备设置",
  "Adjust preferences for this device.": "调整这台设备的偏好设置。",
  "Device name": "设备名称",
  "Nursery monitor": "婴儿房监护器",
  "Open drawer": "打开抽屉",
  "Quick action": "快捷操作",
  "Start a new care session.": "开始一次新的护理。",
  "Start session": "开始护理",
  "Popover & Hover Card": "弹出框与悬浮卡片",
  "Contextual information and actions": "上下文信息与操作",
  "Open popover": "打开弹出框",
  Reminder: "提醒",
  "Choose when to be notified.": "选择提醒时间。",
  "10 minutes before": "提前 10 分钟",
  "30 minutes before": "提前 30 分钟",
  "Token-driven product experiences.": "由 Token 驱动的产品体验。",
  "Tooltip & Sonner": "工具提示与轻提示",
  "Micro guidance and toast feedback": "轻量引导与即时反馈",
  "Show toast": "显示提示",
  "Dropdown Menu": "下拉菜单",
  "Button-anchored action menu": "依附按钮的操作菜单",
  Actions: "操作",
  Device: "设备",
  "Share access": "共享权限",
  Remove: "移除",
  "Context Menu": "右键菜单",
  "Right-click the surface": "在区域内点击右键",
  "Right-click here": "在这里点击右键",
  Duplicate: "创建副本",
  Delete: "删除",
  Command: "命令面板",
  "Searchable command surface": "支持搜索的命令面板",
  "Search commands…": "搜索命令…",
  "No results found.": "未找到结果。",
  Suggestions: "建议",
  Calendar: "日历",
  Profile: "个人资料",
  Preferences: "偏好设置",
  "Data & Layout": "数据与布局",
  "Table / Data Table": "表格与数据表格",
  "Data Table is Table plus sorting and filtering behavior": "数据表格在基础表格上增加排序与筛选能力",
  "Connected devices": "已连接设备",
  Status: "状态",
  Battery: "电量",
  Sessions: "护理次数",
  Connected: "已连接",
  Charging: "充电中",
  Offline: "离线",
  Chart: "图表",
  "Recharts wrapped with semantic chart tokens": "使用语义图表 Token 封装 Recharts",
  Progress: "进度条",
  "Determinate progress indicator": "可确定进度的状态指示",
  "Syncing tokens": "正在同步 Token",
  "Component coverage": "组件覆盖率",
  "Visual QA": "视觉验收",
  Carousel: "轮播",
  "Swipeable content collection": "支持滑动的内容集合",
  Resizable: "可调整大小区域",
  "User-adjustable panel layout": "用户可调整的面板布局",
  Content: "内容",
  "Scroll Area": "滚动区域",
  "Styled overflow container": "带样式的溢出内容容器",
  "Component update ": "组件更新 ",
  "Message & Bubble": "消息与气泡",
  "Aligned message rows, bubble variants and reactions": "消息行、气泡样式与表情回应",
  "Momcozy Assistant": "Momcozy 助手",
  "Your complete component gallery is ready.": "完整的组件总览已经准备好了。",
  "Just now": "刚刚",
  "Great — keep the neutral system as default.": "很好，继续以中性系统作为默认方案。",
  Read: "已读",
  "Message Scroller": "消息滚动区",
  "Autoscroll-aware conversation viewport": "支持自动滚动感知的会话视图",
  "Tokens loaded": "Token 已加载",
  "Components compiled": "组件已编译",
  "Dark mode validated": "深色模式已验证",
  "HTML gallery generated": "HTML 组件总览已生成",
  "Ready for visual QA": "可以开始视觉验收",
  Attachment: "附件",
  "Upload states, metadata and actions": "上传状态、元数据与操作",
  Ready: "已就绪",
  "1.8 MB · Ready": "1.8 MB · 已就绪",
  "Uploading · 68%": "上传中 · 68%",
  Marker: "标记",
  "Conversation separators and system events": "会话分隔与系统事件",
  Today: "今天",
  "2 attachments added": "已添加 2 个附件",
  "All messages are synced": "所有消息均已同步",
  "Momcozy UI Playground · generated from current theme tokens": "Momcozy UI Playground · 由当前主题 Token 生成",
}

const localizedGalleryProps = new Set(["name", "note", "title", "description", "placeholder", "aria-label", "heading", "label"])

function localizeGalleryNode(node: ReactNode, locale: Locale): ReactNode {
  if (locale !== "zh") return node
  if (typeof node === "string") {
    const trimmed = node.trim()
    const translated = galleryZh[node] ?? galleryZh[trimmed]
    return translated ? node.replace(trimmed, translated) : node
  }
  if (Array.isArray(node)) return node.map((child) => localizeGalleryNode(child, locale))
  if (!isValidElement(node)) return node

  const element = node as ReactElement<Record<string, unknown>>
  const props: Record<string, unknown> = { ...element.props }
  if (element.type === Demo && typeof props.name === "string") props.sourceName = props.name
  if (element.type === Section && typeof props.title === "string") props.eyebrow = galleryZh[props.title] ?? props.title
  localizedGalleryProps.forEach((key) => {
    if (typeof props[key] === "string") props[key] = galleryZh[props[key] as string] ?? props[key]
  })
  if ("children" in props) props.children = localizeGalleryNode(props.children as ReactNode, locale)
  return cloneElement(element, props)
}

function LocalizedGallery({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <>{localizeGalleryNode(children, locale)}</>
}

const markdownEntries = [
  { id: "skill", label: { en: "Skill Instructions", zh: "Skill 指令" }, description: { en: "Codex usage model and workflow", zh: "Codex 使用模型与工作流" }, content: skillMarkdown },
  { id: "start-here", label: { en: "Start Here", zh: "快速开始" }, description: { en: "Project entry point and recommended reading order", zh: "设计系统工程入口与使用顺序" }, content: startHereMarkdown },
  { id: "component-library", label: { en: "Component Library", zh: "组件库说明" }, description: { en: "Architecture layers and component boundaries", zh: "工程分层与组件边界" }, content: componentLibraryMarkdown },
  { id: "token-mapping", label: { en: "Token Mapping", zh: "Token 映射" }, description: { en: "Figma tokens mapped to the shadcn semantic layer", zh: "Figma Token 到 shadcn 语义层" }, content: tokenMarkdown },
  { id: "color-system", label: { en: "Color System", zh: "色彩系统" }, description: { en: "Grays, product-line colors, and status colors", zh: "Grays、产品线色与状态色" }, content: colorMarkdown },
  { id: "foundation-tokens", label: { en: "Foundation Tokens", zh: "基础 Token" }, description: { en: "Spacing, radii, shadows, and states", zh: "间距、圆角、阴影与状态" }, content: foundationMarkdown },
  { id: "typography", label: { en: "Typography", zh: "字体规范" }, description: { en: "Exposure and Aeonik Soft Pro usage", zh: "Exposure 与 Aeonik Soft Pro 使用规范" }, content: typographyMarkdown },
  { id: "component-rules", label: { en: "Component Rules", zh: "组件规则" }, description: { en: "Component implementation and interaction rules", zh: "组件实现与交互规则" }, content: componentRulesMarkdown },
  { id: "icon-system", label: { en: "Icon System", zh: "图标系统" }, description: { en: "Hugeicons rules, approved catalog, and pending decisions", zh: "Hugeicons 规则、已批准目录与待决策项" }, content: `${iconMarkdown}\n\n---\n\n${iconCatalogMarkdown}` },
  { id: "demo-patterns", label: { en: "Demo Patterns", zh: "Demo 模式" }, description: { en: "Patterns for IoT, content, and community demos", zh: "IoT、内容与社区 Demo 模式" }, content: demoPatternsMarkdown },
  { id: "shadcn-integration", label: { en: "shadcn/ui Integration", zh: "shadcn/ui 集成" }, description: { en: "Playground, starter, and registry strategy", zh: "Playground、Starter 与 Registry 策略" }, content: integrationMarkdown },
  { id: "status-color", label: { en: "Status Color Extraction", zh: "状态色提取" }, description: { en: "Status-color extraction and semantic mapping", zh: "状态色变量提取与语义映射" }, content: statusColorMarkdown },
  { id: "dark-mode", label: { en: "Dark Mode Recommendations", zh: "深色模式建议" }, description: { en: "App 3.0 dark-mode audit and recommendations", zh: "App 3.0 深色模式评估与建议" }, content: darkModeRecommendationMarkdown },
  { id: "color-token-review", label: { en: "Color Token Review", zh: "颜色 Token 审查" }, description: { en: "Color-token update review", zh: "颜色 Token 更新审查记录" }, content: colorTokenReviewMarkdown },
  { id: "demo-readme", label: { en: "Demo README", zh: "Demo 说明" }, description: { en: "Demo directory and run instructions", zh: "Demo 目录与运行说明" }, content: demoReadmeMarkdown },
  { id: "ai-plan-icons", label: { en: "AI Plan Icon Review", zh: "AI 计划图标审查" }, description: { en: "AI Lactation Plan icon review", zh: "AI Lactation Plan 图标审查" }, content: aiPlanIconReviewMarkdown },
  { id: "partner-mode-icons", label: { en: "Partner Mode Icon Review", zh: "伴侣模式图标审查" }, description: { en: "Partner Mode icon review", zh: "Partner Mode 图标审查" }, content: partnerModeIconReviewMarkdown },
  { id: "root-design-qa", label: { en: "Root Design QA", zh: "主工程设计验收" }, description: { en: "Main project visual QA record", zh: "主工程视觉验收记录" }, content: rootDesignQaMarkdown },
  { id: "playground-readme", label: { en: "Playground README", zh: "Playground 说明" }, description: { en: "Component documentation site run instructions", zh: "组件文档站运行说明" }, content: playgroundReadmeMarkdown },
  { id: "playground-qa", label: { en: "Playground Design QA", zh: "Playground 设计验收" }, description: { en: "Component documentation site visual QA record", zh: "组件文档站视觉验收记录" }, content: playgroundQaMarkdown },
  { id: "project-readme", label: { en: "Project README", zh: "项目说明" }, description: { en: "Repository runtime and directory guide", zh: "仓库运行与目录说明" }, content: projectReadmeMarkdown },
]

const markdownEntriesById = new Map(markdownEntries.map((entry) => [entry.id, entry]))

const markdownNavigationGroups = [
  {
    id: "design-foundations",
    label: { en: "Design Foundations", zh: "设计基础" },
    entryIds: ["token-mapping", "color-system", "foundation-tokens", "typography", "component-rules", "icon-system"],
  },
  {
    id: "usage-and-engineering",
    label: { en: "Usage & Engineering", zh: "使用与工程" },
    entryIds: ["skill", "start-here", "component-library", "demo-patterns", "demo-readme", "playground-readme", "project-readme"],
  },
  {
    id: "reviews",
    label: { en: "Reviews", zh: "审查记录" },
    entryIds: ["status-color", "dark-mode", "color-token-review", "ai-plan-icons", "partner-mode-icons", "root-design-qa", "playground-qa"],
  },
] as const

const demoEntries = [
  { id: "user-guide", label: { en: "User Guide", zh: "用户指南" }, path: `${import.meta.env.BASE_URL}demos/01-user-guide/index.html` },
  { id: "group-pumping", label: { en: "Group Pumping", zh: "吸乳互助社区" }, path: `${import.meta.env.BASE_URL}demos/02-group-pumping/index.html` },
  { id: "voice-log", label: { en: "Voice Log", zh: "语音记录" }, path: `${import.meta.env.BASE_URL}demos/03-voice-log/index.html` },
  { id: "cozy-ai", label: { en: "Cozy AI", zh: "Cozy AI" }, path: `${import.meta.env.BASE_URL}demos/04-cozy-ai/index.html` },
  { id: "ai-plan", label: { en: "AI Lactation Plan", zh: "AI 吸乳计划" }, path: `${import.meta.env.BASE_URL}demos/05-ai-lactation-plan/index.html` },
  { id: "partner-mode", label: { en: "Partner Mode", zh: "伴侣模式" }, path: `${import.meta.env.BASE_URL}demos/06-partner-mode/index.html` },
]

type LibraryView =
  | { type: "catalog" }
  | { type: "markdown"; id: string }
  | { type: "component"; slug: string }
  | { type: "demo"; id: string }

type Locale = "en" | "zh"
type DemoTheme = "light" | "dark"

function postDemoSettings(target: Window | null, settings: { theme: DemoTheme; locale: Locale }, targetOrigin = window.location.origin) {
  if (!target) return
  target.postMessage({ type: "momcozy-demo-settings", ...settings }, targetOrigin)
}

const uiCopy = {
  en: {
    librarySubtitle: "Design system library",
    libraryNavigation: "Library navigation",
    closeNavigation: "Close navigation",
    openNavigation: "Open navigation",
    sections: "Sections",
    introduction: "Introduction",
    components: "Components",
    installation: "Installation",
    framework: "Framework",
    value: "Value",
    architecture: "Architecture",
    inventory: "What is included",
    skillAndMarkdown: "Skill & Markdown",
    demos: "Demos",
    componentGallery: "Component Gallery",
    componentCount: "70 components",
    switchLanguage: "切换为中文",
    toggleColorMode: "Toggle color mode",
    interactiveDemo: "Interactive Demo",
    demoLead: "A complete product scenario rendered with the current Momcozy tokens, theme, and component rules.",
    openPage: "Open page",
    onThisPage: "On This Page",
    contents: "Contents",
    markdownSource: "Markdown source",
    preview: "Preview",
    interactiveScenario: "Interactive scenario",
    tokenFirstLibrary: "Token-first UI library",
    sourceNote: "Skills, documents, demos, and component source share one theme source of truth.",
  },
  zh: {
    librarySubtitle: "设计系统组件库",
    libraryNavigation: "组件库导航",
    closeNavigation: "关闭导航",
    openNavigation: "打开导航",
    sections: "导航",
    introduction: "介绍",
    components: "组件",
    installation: "安装",
    framework: "技术框架",
    value: "核心价值",
    architecture: "系统架构",
    inventory: "包含内容",
    skillAndMarkdown: "Skill 与 Markdown",
    demos: "产品场景",
    componentGallery: "组件总览",
    componentCount: "70 个组件",
    switchLanguage: "Switch to English",
    toggleColorMode: "切换深浅色模式",
    interactiveDemo: "交互 Demo",
    demoLead: "使用当前 Momcozy token、主题和组件规则渲染的完整产品场景。",
    openPage: "打开页面",
    onThisPage: "本页内容",
    contents: "正文",
    markdownSource: "Markdown 源文件",
    preview: "预览",
    interactiveScenario: "交互场景",
    tokenFirstLibrary: "Token 优先的 UI 组件库",
    sourceNote: "Skill、文档、Demo 与组件源码使用同一份主题事实源。",
  },
} as const

const introductionCopy = {
  en: {
    eyebrow: "Momcozy 3.0 · Component documentation and acceptance environment",
    title: "From design rules to deliverable assets",
    lead: "Momcozy UI is a token-first component system for design review, frontend implementation, upgrade auditing, and cross-product reuse. It connects Figma variables, implementation rules, runnable components, and product demos in one inspectable workspace.",
    deliveryFlowLabel: "From design rules to delivery",
    deliveryFlow: ["Design rules", "Token / Skill", "Components", "Product validation", "Audit", "Release kit"],
    layersTitle: "Five connected layers",
    layers: [
      ["Design rules", "The Momcozy Skill contains Light/Dark tokens, fonts, shadcn/ui mappings, component rules, scenario patterns, and audit scripts. Grays remain the default neutral system; Mom, Care, Parenting, and Family are used only with explicit product-line ownership."],
      ["Frontend implementation", "The root React + Vite application provides the Momcozy App preview shell, Light/Dark switching, component entry points, and Demo hosting."],
      ["Component library", "The component library includes five Momcozy components: Toolbar Top, Toolbar Top Sheet, Liquid Glass Button, Title, and Tab Bar. The complete playground currently documents 69 component entries."],
      ["Product demos", "The Demo Library includes six complete scenarios: User Guide, Group Pumping Community, Voice Log, Cozy AI, AI Lactation Plan, and Partner Mode. These validate complete flows, interaction, and theme behavior—not component appearance alone."],
      ["Governance and delivery", "Hugeicons semantics, icon candidate review, token audits, and visual QA are managed together. Versioned releases provide an installable .skill, editable Demo ZIP, and checksum files."],
    ],
    problemsTitle: "Three problems this workspace solves",
    problems: [
      ["Executable tokens", "Figma tokens become usable CSS, shadcn/ui semantics, and React implementation rules instead of remaining design-file variables."],
      ["Consistent generation", "Codex and developers share one set of constraints, reducing drift in color, typography, radius, icons, and component usage."],
      ["Verified reuse", "Component pages test whether an asset is reusable; product Demos test whether it still works inside a complete flow; release kits make the result shareable."],
    ],
    frameworkTitle: "Built on an open, editable frontend stack",
    frameworkLead: "The implementation keeps component ownership inside the project while Momcozy tokens remain the visual source of truth.",
    frameworks: [
      ["React 19 + TypeScript", "Runtime composition, typed APIs, and maintainable component contracts."],
      ["shadcn/ui + Radix UI", "Editable component source and accessible interaction primitives instead of a closed dependency."],
      ["Tailwind CSS 4", "Semantic utilities, component states, responsive layouts, and theme integration."],
      ["Momcozy 3.0 tokens", "Light/Dark color roles, product-line semantics, typography, spacing, radius, and focus states."],
      ["Hugeicons", "One semantic icon language for controls, navigation, and product feedback."],
      ["Codex Skill + Markdown", "Machine-executable rules and human-reviewable design-system documentation."],
    ],
    valueTitle: "Why it matters",
    values: [
      ["One source of truth", "Figma tokens, semantic CSS, component previews, and usage documentation follow the same theme contract."],
      ["Design-to-code consistency", "Designers and developers can review the same states, variants, responsive behavior, and accessibility expectations."],
      ["Reusable without losing ownership", "Teams copy the component source they need and can adapt it without waiting for a vendor package release."],
      ["Safer upgrades", "The Playground makes token changes, shadcn updates, Light/Dark behavior, and regression risks visible before product adoption."],
    ],
    architectureTitle: "How the system connects",
    architectureLead: "Each layer has one responsibility, so token changes do not get hard-coded into every product component.",
    architectureSteps: ["Figma Variables", "Momcozy semantic theme", "shadcn/Radix primitives", "Component docs & registry", "Product apps & demos"],
    inventoryTitle: "What is already included",
    inventoryLead: "The current workspace covers component source, Momcozy-specific patterns, operating guidance, and complete product scenarios.",
    metricLabels: ["Documented components", "Momcozy components", "System documents", "Product demos"],
    galleryEyebrow: "Component Gallery",
    galleryTitle: "All components, in one place.",
    galleryLead: "The gallery below is the visual coverage map. Use the component list in the sidebar for focused installation, usage, examples, accessibility, and API documentation.",
  },
  zh: {
    eyebrow: "Momcozy 3.0 · 组件文档与验收环境",
    title: "从设计规范，到可交付资产",
    lead: "Momcozy UI 是一套将设计规范转化为可交付资产的工程化工作区。它统一承载 Design Tokens、Codex 规则包、前端组件、真实业务 Demo、审查文档与版本发布包，让设计决策能够被实现、验证并持续复用。",
    deliveryFlowLabel: "从设计规范到可交付资产",
    deliveryFlow: ["设计规范", "Token / Skill", "组件", "产品场景验证", "审计", "发布套件"],
    layersTitle: "主要包含 5 层",
    layers: [
      ["设计规则层", "Momcozy Skill 包含 Light/Dark Token、字体、shadcn/ui 映射、组件规则、场景模板和审计脚本。当前以 Grays 作为默认中性色，Mom、Care、Parenting、Family 按明确产品线使用。"],
      ["前端实现层", "根目录的 React + Vite 工程提供 Momcozy App 预览壳、Light/Dark 切换、组件入口和 Demo 承载。"],
      ["组件库层", "组件分层文档中有 5 个 Momcozy 专属组件，包括 Toolbar Top、Toolbar Top Sheet、Liquid Glass Button、Title 和 Tab Bar；完整的 momcozy-ui-playground 当前收录 69 个组件文档入口。"],
      ["产品 Demo 层", "Demo Library 目前有 6 个完整场景：User Guide、Group Pumping Community、Voice Log、Cozy AI、AI Lactation Plan 和 Partner Mode。这里验证的不只是组件外观，还包括完整流程、交互和主题适配。"],
      ["治理与交付层", "统一管理 Hugeicons 语义图标、候选图标评审、Token 审计和视觉 QA，并通过版本发布包提供可安装的 .skill、可编辑 Demo ZIP 和校验文件。"],
    ],
    problemsTitle: "这个项目真正解决 3 个问题",
    problems: [
      ["让 Token 可以执行", "让 Figma Token 不再只是设计稿里的变量，而是能进入 CSS、shadcn/ui 和 React 的可执行规范。"],
      ["让生成结果有统一约束", "让 Codex 或研发生成 Momcozy 页面时遵循同一套规则，减少颜色、字体、圆角、图标和组件使用上的漂移。"],
      ["让复用经过真实验证", "用组件页验证能否复用，用产品 Demo 验证放进真实流程后是否成立，最后再打包给团队继续使用。"],
    ],
    frameworkTitle: "基于开放、可编辑的前端技术栈",
    frameworkLead: "组件源码归项目所有，Momcozy token 始终作为视觉事实源，避免在每个页面里重复硬编码设计值。",
    frameworks: [
      ["React 19 + TypeScript", "负责运行时组合、类型化 API 与可维护的组件契约。"],
      ["shadcn/ui + Radix UI", "提供可编辑的组件源码与可访问性交互原语，而不是封闭依赖。"],
      ["Tailwind CSS 4", "承载语义工具类、组件状态、响应式布局和主题接入。"],
      ["Momcozy 3.0 tokens", "统一 Light/Dark、产品线语义、字体、间距、圆角和焦点状态。"],
      ["Hugeicons", "统一控件、导航和产品反馈中的语义图标语言。"],
      ["Codex Skill + Markdown", "让设计规则既能被 Codex 执行，也能被设计与开发人员审阅。"],
    ],
    valueTitle: "它带来的价值",
    values: [
      ["单一事实源", "Figma token、语义 CSS、组件预览和使用文档遵循同一份主题契约。"],
      ["提高设计还原一致性", "设计与开发可以检查同一套状态、变体、响应式行为和可访问性预期。"],
      ["可复用，也保留代码所有权", "业务团队按需复制组件源码并继续适配，不需要等待第三方组件包发版。"],
      ["降低升级风险", "在业务接入前集中暴露 token 更新、shadcn 升级、Light/Dark 和视觉回归问题。"],
    ],
    architectureTitle: "系统如何连接",
    architectureLead: "每一层只承担一种职责，让 token 变化通过语义层传递，而不是散落到所有产品组件中。",
    architectureSteps: ["Figma Variables", "Momcozy 语义主题", "shadcn/Radix 原语", "组件文档与 Registry", "产品应用与 Demo"],
    inventoryTitle: "目前已经包含什么",
    inventoryLead: "当前工作空间覆盖组件源码、Momcozy 专属模式、使用规范和完整产品场景。",
    metricLabels: ["已文档化组件", "Momcozy 专属组件", "系统文档", "产品 Demo"],
    galleryEyebrow: "组件总览",
    galleryTitle: "所有组件，一目了然。",
    galleryLead: "下方总览用于检查视觉覆盖；需要查看安装、用法、示例、可访问性与 API 时，请直接使用左侧组件目录。",
  },
} as const

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

function normalizeMarkdown(content: string) {
  return content.replace(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/, "```yaml\n$1\n```\n\n")
}

function Demo({ name, sourceName = name, note, children, wide = false }: { name: string; sourceName?: string; note?: string; children: ReactNode; wide?: boolean }) {
  return (
    <article id={`demo-${slugify(sourceName)}`} className={`scroll-mt-24 flex min-w-0 flex-col gap-5 rounded-2xl border bg-card p-5 text-card-foreground shadow-sm ${wide ? "lg:col-span-2" : ""}`}>
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-lg leading-tight">{name}</h3>
          {note && <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{note}</p>}
        </div>
        <Badge variant="outline" className="shrink-0 font-mono text-[10px]">ui/{sourceName.toLowerCase().replaceAll(" ", "-")}</Badge>
      </header>
      <div className="min-w-0 flex-1">{children}</div>
    </article>
  )
}

function Section({ id, eyebrow = id, title, description, children }: { id: string; eyebrow?: string; title: string; description: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8 border-t py-12 first:border-t-0">
      <div className="mb-7 max-w-2xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
        <h2 className="font-heading text-3xl leading-tight md:text-4xl">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <div className="gallery-grid grid gap-4">{children}</div>
    </section>
  )
}

function IntroductionOverview({ locale, onComponent }: { locale: Locale; onComponent: (slug: string) => void }) {
  const content = introductionCopy[locale]
  const metrics = [
    componentDocs.length,
    componentDocs.filter((component) => component.customPath).length,
    markdownEntries.length,
    demoEntries.length,
  ]

  return (
    <div className="intro-page">
      <section id="introduction" className="intro-hero">
        <Badge variant="secondary">{content.eyebrow}</Badge>
        <h1>{content.title}</h1>
        <p className="intro-hero-lead">{content.lead}</p>

        <div className="intro-delivery-flow" aria-label={content.deliveryFlowLabel}>
          <span>{content.deliveryFlowLabel}</span>
          <ol>
            {content.deliveryFlow.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>

        <div className="intro-overview-block">
          <div className="intro-overview-heading">
            <span>{uiCopy[locale].inventory}</span>
            <h2>{content.layersTitle}</h2>
          </div>
          <ol className="intro-layer-list">
            {content.layers.map(([title, description], index) => (
              <li key={title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="intro-overview-block">
          <div className="intro-overview-heading">
            <span>{uiCopy[locale].value}</span>
            <h2>{content.problemsTitle}</h2>
          </div>
          <div className="intro-problem-grid">
            {content.problems.map(([title, description], index) => (
              <article key={title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="framework" className="intro-section">
        <div className="intro-section-heading">
          <span>{uiCopy[locale].framework}</span>
          <h2>{content.frameworkTitle}</h2>
          <p>{content.frameworkLead}</p>
        </div>
        <div className="intro-framework-grid">
          {content.frameworks.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section id="value" className="intro-section">
        <div className="intro-section-heading">
          <span>{uiCopy[locale].value}</span>
          <h2>{content.valueTitle}</h2>
        </div>
        <div className="intro-value-grid">
          {content.values.map(([title, description], index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section id="architecture" className="intro-section">
        <div className="intro-section-heading">
          <span>{uiCopy[locale].architecture}</span>
          <h2>{content.architectureTitle}</h2>
          <p>{content.architectureLead}</p>
        </div>
        <div className="intro-architecture" aria-label={content.architectureTitle}>
          {content.architectureSteps.map((step, index) => <div key={step}><small>{String(index + 1).padStart(2, "0")}</small><strong>{step}</strong></div>)}
        </div>
      </section>

      <section id="inventory" className="intro-section">
        <div className="intro-section-heading">
          <span>{uiCopy[locale].inventory}</span>
          <h2>{content.inventoryTitle}</h2>
          <p>{content.inventoryLead}</p>
        </div>
        <div className="intro-metrics">
          {metrics.map((metric, index) => <div key={content.metricLabels[index]}><strong>{metric}</strong><span>{content.metricLabels[index]}</span></div>)}
        </div>
      </section>

      <section id="component-gallery" className="intro-gallery-heading">
        <div>
          <span>{content.galleryEyebrow}</span>
          <h2>{content.galleryTitle}</h2>
          <p>{content.galleryLead}</p>
        </div>
        <nav aria-label={content.galleryEyebrow}>
          {catalogue[locale].map(([id, title, description]) => (
            <button key={id} type="button" onClick={() => onComponent(catalogueTargets[id as keyof typeof catalogueTargets])}>
              <strong>{title}</strong>
              <small>{description}</small>
            </button>
          ))}
        </nav>
      </section>
    </div>
  )
}

type MarkdownEntry = (typeof markdownEntries)[number]
type DemoEntry = (typeof demoEntries)[number]

function PortalSidebar({
  view,
  locale,
  open,
  onClose,
  onCatalog,
  onMarkdown,
  onDemo,
  onComponent,
}: {
  view: LibraryView
  locale: Locale
  open: boolean
  onClose: () => void
  onCatalog: () => void
  onMarkdown: (id: string) => void
  onDemo: (id: string) => void
  onComponent: (slug: string) => void
}) {
  const copy = uiCopy[locale]
  const renderMarkdownGroup = (groupId: (typeof markdownNavigationGroups)[number]["id"]) => {
    const group = markdownNavigationGroups.find((item) => item.id === groupId)
    if (!group) return null

    return (
      <div key={group.id} className="docs-nav-group">
        <p>{group.label[locale]}</p>
        {group.entryIds.map((entryId) => {
          const entry = markdownEntriesById.get(entryId)
          return entry ? (
            <button key={entry.id} type="button" className={view.type === "markdown" && view.id === entry.id ? "is-active" : ""} onClick={() => onMarkdown(entry.id)}>
              {entry.label[locale]}
            </button>
          ) : null
        })}
      </div>
    )
  }

  return (
    <aside className={`docs-sidebar ${open ? "is-open" : ""}`} aria-label={copy.libraryNavigation}>
      <div className="docs-sidebar-heading">
        <button type="button" className="docs-brand" onClick={onCatalog}>
          <span className="docs-brand-mark"><img src={momcozyRoundLogo} alt="" aria-hidden="true" /></span>
          <span><strong>Momcozy UI</strong><small>{copy.librarySubtitle}</small></span>
        </button>
        <Button variant="ghost" size="icon" className="docs-sidebar-close" aria-label={copy.closeNavigation} onClick={onClose}>
          <HugeiconsIcon icon={Cancel01Icon} strokeWidth={1.7} />
        </Button>
      </div>

      <ScrollArea className="docs-sidebar-scroll">
        <nav className="docs-navigation">
          <div className="docs-nav-group">
            <p>{copy.sections}</p>
            <button type="button" className={view.type === "catalog" ? "is-active" : ""} onClick={onCatalog}>
              {copy.introduction}
            </button>
            <button type="button" className={view.type === "markdown" && view.id === "shadcn-integration" ? "is-active" : ""} onClick={() => onMarkdown("shadcn-integration")}>{copy.installation}</button>
          </div>

          {renderMarkdownGroup("design-foundations")}
          {renderMarkdownGroup("usage-and-engineering")}

          <div className="docs-nav-group">
            <p>{copy.demos}</p>
            {demoEntries.map((entry) => (
              <button key={entry.id} type="button" className={view.type === "demo" && view.id === entry.id ? "is-active" : ""} onClick={() => onDemo(entry.id)}>
                {entry.label[locale]}
              </button>
            ))}
          </div>

          {renderMarkdownGroup("reviews")}

          <div className="docs-nav-group docs-components-list">
            <p>{locale === "zh" ? "Momcozy 定制组件" : "Momcozy Components"}</p>
            {componentDocs.filter((component) => component.category === "Momcozy Components").map((component) => (
              <button key={component.slug} type="button" className={view.type === "component" && view.slug === component.slug ? "is-active" : ""} onClick={() => onComponent(component.slug)}>
                {componentTitle(component, locale)}
              </button>
            ))}
            <div className="docs-components-divider" aria-hidden="true">
              <span>{locale === "zh" ? "shadcn/ui 组件" : "shadcn/ui Components"}</span>
            </div>
            {componentDocs.filter((component) => component.category !== "Momcozy Components").map((component) => (
              <button key={component.slug} type="button" className={view.type === "component" && view.slug === component.slug ? "is-active" : ""} onClick={() => onComponent(component.slug)}>
                {componentTitle(component, locale)}
              </button>
            ))}
          </div>
        </nav>
      </ScrollArea>
    </aside>
  )
}

function MarkdownDocument({ entry, locale }: { entry: MarkdownEntry; locale: Locale }) {
  return (
    <article className="docs-document">
      <div className="docs-document-kicker">{uiCopy[locale].skillAndMarkdown}</div>
      <h1>{entry.label[locale]}</h1>
      <p className="docs-document-lead">{entry.description[locale]}</p>
      <div id="contents" className="markdown-document">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{normalizeMarkdown(entry.content)}</ReactMarkdown>
      </div>
    </article>
  )
}

function PreviewDocument({ entry, origin, locale, theme }: { entry: DemoEntry; origin: string; locale: Locale; theme: DemoTheme }) {
  const url = `${origin}${entry.path}`
  const copy = uiCopy[locale]
  const demoLayout = "phone"
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [frameHeight, setFrameHeight] = useState<number>()
  const expectedOrigin = new URL(origin, window.location.href).origin

  useEffect(() => {
    setFrameHeight(undefined)
    const updateFrameHeight = (event: MessageEvent) => {
      const frame = frameRef.current
      if (!frame || event.source !== frame.contentWindow || event.origin !== expectedOrigin) return
      const data = event.data as { type?: string; height?: number } | null
      const nextHeight = Math.ceil(Number(data?.height))
      if (data?.type !== "momcozy-demo-height" || !Number.isFinite(nextHeight) || nextHeight < 320 || nextHeight > 20000) return
      setFrameHeight(nextHeight)
    }

    window.addEventListener("message", updateFrameHeight)
    return () => window.removeEventListener("message", updateFrameHeight)
  }, [entry.id, expectedOrigin])

  return (
    <article className="docs-document docs-demo-document">
      <div className="docs-document-kicker">{copy.interactiveDemo}</div>
      <div className="docs-demo-title-row">
        <div>
          <h1>{entry.label[locale]}</h1>
          <p className="docs-document-lead">{copy.demoLead}</p>
        </div>
        <Button asChild variant="outline"><a href={url} target="_blank" rel="noreferrer">{copy.openPage} <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.7} /></a></Button>
      </div>
      <div id="preview" className="docs-demo-frame-wrap" data-demo-layout={demoLayout} data-demo-id={entry.id}>
        <div className="docs-demo-frame-bar"><span /><span /><span /><strong>{entry.path}</strong></div>
        <iframe
          ref={frameRef}
          className="docs-demo-frame"
          title={`${entry.label[locale]} ${copy.interactiveDemo}`}
          src={url}
          style={frameHeight ? { height: `${frameHeight}px` } : undefined}
          onLoad={(event) => {
            postDemoSettings(event.currentTarget.contentWindow, { theme, locale }, expectedOrigin)
            event.currentTarget.contentWindow?.postMessage({ type: "momcozy-demo-measure" }, expectedOrigin)
          }}
        />
      </div>
    </article>
  )
}

function RightRail({ view, locale, activeMarkdown, activeComponent, activeDemo, onCatalogTarget }: { view: LibraryView; locale: Locale; activeMarkdown?: MarkdownEntry; activeComponent?: (typeof componentDocs)[number]; activeDemo?: DemoEntry; onCatalogTarget: (target: string) => void }) {
  const copy = uiCopy[locale]
  const introductionToc = locale === "zh"
    ? [["介绍", "introduction"], ["技术框架", "framework"], ["核心价值", "value"], ["系统架构", "architecture"], ["包含内容", "inventory"], ["组件总览", "component-gallery"]]
    : [["Introduction", "introduction"], ["Framework", "framework"], ["Value", "value"], ["Architecture", "architecture"], ["What is included", "inventory"], ["Component Gallery", "component-gallery"]]

  return (
    <aside className="docs-right-rail" aria-label={copy.onThisPage}>
      <p>{copy.onThisPage}</p>
      {view.type === "catalog" ? (
        <nav>{introductionToc.map(([label, id]) => <button key={id} type="button" onClick={() => onCatalogTarget(id)}>{label}</button>)}</nav>
      ) : view.type === "markdown" && activeMarkdown ? (
        <nav><a href="#top">{activeMarkdown.label[locale]}</a><a href="#contents">{copy.contents}</a><span>{copy.markdownSource}</span></nav>
      ) : view.type === "component" && activeComponent ? (
        <nav>{componentToc(activeComponent, locale).map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav>
      ) : activeDemo ? (
        <nav><a href="#top">{activeDemo.label[locale]}</a><a href="#preview">{copy.preview}</a><span>{copy.interactiveScenario}</span></nav>
      ) : null}
      <div className="docs-right-note">
        <span>Momcozy 3.0</span>
        <strong>{copy.tokenFirstLibrary}</strong>
        <small>{copy.sourceNote}</small>
      </div>
    </aside>
  )
}

function App() {
  const [dark, setDark] = useState(false)
  const [locale, setLocale] = useState<Locale>(() => window.localStorage.getItem("momcozy-ui-locale") === "zh" ? "zh" : "en")
  const [date, setDate] = useState<Date | undefined>()
  const [view, setView] = useState<LibraryView>(() => {
    const component = new URLSearchParams(window.location.search).get("component")
    return component && componentDocsBySlug.has(component) ? { type: "component", slug: component } : { type: "catalog" }
  })
  const [navOpen, setNavOpen] = useState(false)

  const activeMarkdown = view.type === "markdown" ? markdownEntries.find((entry) => entry.id === view.id) : undefined
  const activeComponent = view.type === "component" ? componentDocsBySlug.get(view.slug) : undefined
  const activeDemo = view.type === "demo" ? demoEntries.find((entry) => entry.id === view.id) : undefined
  const demoOrigin = import.meta.env.VITE_DEMO_ORIGIN ?? window.location.origin
  const copy = uiCopy[locale]

  const showCatalogTarget = (target = "overview") => {
    setView({ type: "catalog" })
    window.history.pushState({}, "", window.location.pathname)
    setNavOpen(false)
    window.setTimeout(() => {
      if (target === "overview") {
        window.scrollTo({ top: 0, left: 0 })
        return
      }
      const id = target.match(/^(introduction|framework|value|architecture|inventory|component-gallery|foundations|forms|navigation|overlays|data|messaging)$/) ? target : `demo-${target}`
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 60)
  }

  const showMarkdown = (id: string) => {
    setView({ type: "markdown", id })
    window.history.pushState({}, "", window.location.pathname)
    setNavOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const showDemo = (id: string) => {
    setView({ type: "demo", id })
    window.history.pushState({}, "", window.location.pathname)
    setNavOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const showComponent = (slug: string) => {
    setView({ type: "component", slug })
    window.history.pushState({}, "", `${window.location.pathname}?component=${slug}`)
    setNavOpen(false)
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    const timer = window.setTimeout(() => window.scrollTo({ top: 0, left: 0 }), 200)
    const onPopState = () => {
      const component = new URLSearchParams(window.location.search).get("component")
      setView(component && componentDocsBySlug.has(component) ? { type: "component", slug: component } : { type: "catalog" })
    }
    window.addEventListener("popstate", onPopState)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("popstate", onPopState)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem("momcozy-ui-locale", locale)
  }, [locale])

  useEffect(() => {
    if (view.type !== "markdown" || activeMarkdown) return
    setView({ type: "catalog" })
    window.history.replaceState({}, "", window.location.pathname)
    window.scrollTo({ top: 0, left: 0 })
  }, [activeMarkdown, view.type])

  useEffect(() => {
    const frame = document.querySelector<HTMLIFrameElement>(".docs-demo-frame")
    postDemoSettings(frame?.contentWindow ?? null, { theme: dark ? "dark" : "light", locale }, new URL(demoOrigin, window.location.href).origin)
  }, [activeDemo?.id, dark, demoOrigin, locale])

  return (
    <DirectionProvider dir="ltr">
      <TooltipProvider>
        <div data-product-line="mom" className={`docs-app ${dark ? "dark" : ""}`}>
          <div className="docs-shell min-h-screen bg-background text-foreground transition-colors">
            <button type="button" aria-label={copy.closeNavigation} className={`docs-sidebar-backdrop ${navOpen ? "is-open" : ""}`} onClick={() => setNavOpen(false)} />
            <PortalSidebar
              view={view}
              locale={locale}
              open={navOpen}
              onClose={() => setNavOpen(false)}
              onCatalog={() => showCatalogTarget()}
              onMarkdown={showMarkdown}
              onDemo={showDemo}
              onComponent={showComponent}
            />

            <div className="docs-content-column">
              <header className="docs-topbar sticky top-0 z-40 bg-background/85 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 px-5 py-3 md:px-8">
                  <div className="flex min-w-0 items-center gap-3">
                    <Button variant="ghost" size="icon" className="docs-menu-button" aria-label={copy.openNavigation} onClick={() => setNavOpen(true)}>
                      <HugeiconsIcon icon={Menu01Icon} strokeWidth={1.7} />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="docs-topbar-control" aria-label={copy.toggleColorMode} aria-pressed={dark} onClick={() => setDark((value) => !value)}>
                      <MomcozyIcon name={dark ? "themeSun" : "themeMoon"} size={20} />
                    </Button>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="docs-topbar-control"
                          aria-label={copy.switchLanguage}
                          aria-pressed={locale === "zh"}
                          onClick={() => setLocale((value) => value === "en" ? "zh" : "en")}
                        >
                          <MomcozyIcon name="language" size={20} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{copy.switchLanguage}</TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </header>

              <main id="top" className="docs-main px-5 md:px-8">
                {view.type === "catalog" ? <>
              <IntroductionOverview locale={locale} onComponent={showComponent} />

              {legacyGalleryEnabled && <LocalizedGallery locale={locale}>
              <Section id="forms" title="Forms" description="字段、输入、选择、日期与验证状态均使用同一套语义 token。">
                <Demo name="Field" note="Label, description, input and error">
                  <FieldGroup><Field><FieldLabel htmlFor="email">Email</FieldLabel><Input id="email" type="email" placeholder="you@example.com" /><FieldDescription>Used for device and care reminders.</FieldDescription></Field><Field data-invalid="true"><FieldLabel htmlFor="code">Invite code</FieldLabel><Input id="code" aria-invalid="true" defaultValue="MOM-" /><FieldError>Enter a valid 8-character code.</FieldError></Field></FieldGroup>
                </Demo>
                <Demo name="Input Group" note="Input with leading and trailing controls">
                  <div className="space-y-3"><InputGroup><InputGroupAddon><HugeiconsIcon icon={SearchIcon} strokeWidth={2} /><InputGroupText>Search</InputGroupText></InputGroupAddon><InputGroupInput placeholder="Components…" /><InputGroupAddon align="inline-end"><Kbd>⌘K</Kbd></InputGroupAddon></InputGroup><InputGroup><InputGroupAddon><HugeiconsIcon icon={Mail01Icon} strokeWidth={2} /></InputGroupAddon><InputGroupInput placeholder="Email address" /><InputGroupAddon align="inline-end"><InputGroupButton>Send</InputGroupButton></InputGroupAddon></InputGroup></div>
                </Demo>
                <Demo name="Choice Controls" note="Checkbox, radio, switch and slider">
                  <div className="space-y-5"><div className="flex items-center gap-2"><Checkbox id="analytics" defaultChecked /><Label htmlFor="analytics">Share anonymous analytics</Label></div><RadioGroup defaultValue="balanced"><div className="flex items-center gap-2"><RadioGroupItem value="gentle" id="gentle" /><Label htmlFor="gentle">Gentle</Label></div><div className="flex items-center gap-2"><RadioGroupItem value="balanced" id="balanced" /><Label htmlFor="balanced">Balanced</Label></div></RadioGroup><div className="flex items-center gap-3"><Slider defaultValue={[64]} max={100} /><span className="text-sm tabular-nums">64%</span></div><div className="flex items-center justify-between"><Label htmlFor="auto">Auto mode</Label><Switch id="auto" defaultChecked /></div></div>
                </Demo>
                <Demo name="Select & Native Select" note="Custom overlay and platform-native options">
                  <div className="flex flex-col gap-3 sm:flex-row"><Select defaultValue="care"><SelectTrigger className="w-full"><SelectValue placeholder="Product line" /></SelectTrigger><SelectContent><SelectGroup><SelectLabel>Product line</SelectLabel><SelectItem value="neutral">Neutral</SelectItem><SelectItem value="care">Care</SelectItem><SelectItem value="family">Family</SelectItem></SelectGroup></SelectContent></Select><NativeSelect defaultValue="weekly" className="w-full"><NativeSelectOptGroup label="Frequency"><NativeSelectOption value="daily">Daily</NativeSelectOption><NativeSelectOption value="weekly">Weekly</NativeSelectOption><NativeSelectOption value="monthly">Monthly</NativeSelectOption></NativeSelectOptGroup></NativeSelect></div>
                </Demo>
                <Demo name="Combobox" note="Searchable single selection">
                  <Combobox><ComboboxInput placeholder="Choose a device" className="w-full" /><ComboboxContent><ComboboxEmpty>No device found.</ComboboxEmpty><ComboboxList><ComboboxItem value="pump">Breast Pump</ComboboxItem><ComboboxItem value="warmer">Bottle Warmer</ComboboxItem><ComboboxItem value="monitor">Baby Monitor</ComboboxItem></ComboboxList></ComboboxContent></Combobox>
                </Demo>
                <Demo name="Input OTP" note="Segmented one-time code entry">
                  <InputOTP maxLength={6}><InputOTPGroup><InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} /></InputOTPGroup><InputOTPSeparator /><InputOTPGroup><InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} /></InputOTPGroup></InputOTP>
                </Demo>
                <Demo name="Textarea" note="Multiline text input">
                  <div className="space-y-2"><Label htmlFor="notes">Care notes</Label><Textarea id="notes" placeholder="Add a note for the next session…" rows={5} /></div>
                </Demo>
                <Demo name="Calendar & Date Picker" note="Calendar primitive composed with Popover" wide>
                  <div className="grid gap-5 md:grid-cols-2"><Calendar mode="single" selected={date} onSelect={setDate} locale={locale === "zh" ? zhCN : undefined} className="mx-auto rounded-xl border" /><div className="flex flex-col justify-center gap-3"><Label>Selected date</Label><Popover><PopoverTrigger asChild><Button variant="outline" className="justify-start"><HugeiconsIcon icon={Calendar03Icon} strokeWidth={1.7} />{date ? date.toLocaleDateString(locale === "zh" ? "zh-CN" : undefined) : locale === "zh" ? "选择日期" : "Pick a date"}</Button></PopoverTrigger><PopoverContent className="w-auto p-0"><Calendar mode="single" selected={date} onSelect={setDate} locale={locale === "zh" ? zhCN : undefined} /></PopoverContent></Popover><p className="text-xs text-muted-foreground">Date Picker is a composition pattern built from Calendar + Popover.</p></div></div>
                </Demo>
              </Section>

              <Section id="navigation" title="Navigation" description="从局部切换到应用级侧边栏，覆盖常见信息架构。">
                <Demo name="Breadcrumb & Pagination" note="Hierarchy and paged navigation" wide>
                  <div className="space-y-8"><Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="#">Library</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Gallery</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb><Pagination aria-label={locale === "zh" ? "分页" : "pagination"}><PaginationContent><PaginationItem><PaginationPrevious href="#" text={locale === "zh" ? "上一页" : "Previous"} aria-label={locale === "zh" ? "前往上一页" : "Go to previous page"} /></PaginationItem><PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem><PaginationItem><PaginationEllipsis label={locale === "zh" ? "更多页面" : "More pages"} /></PaginationItem><PaginationItem><PaginationNext href="#" text={locale === "zh" ? "下一页" : "Next"} aria-label={locale === "zh" ? "前往下一页" : "Go to next page"} /></PaginationItem></PaginationContent></Pagination></div>
                </Demo>
                <Demo name="Tabs" note="Related content switching">
                  <Tabs defaultValue="preview"><TabsList><TabsTrigger value="preview">Preview</TabsTrigger><TabsTrigger value="code">Code</TabsTrigger><TabsTrigger value="tokens">Tokens</TabsTrigger></TabsList><TabsContent value="preview" className="rounded-xl border p-4 text-sm">Rendered component preview</TabsContent><TabsContent value="code" className="rounded-xl border p-4 font-mono text-sm">&lt;Button /&gt;</TabsContent><TabsContent value="tokens" className="rounded-xl border p-4 text-sm">var(--primary)</TabsContent></Tabs>
                </Demo>
                <Demo name="Accordion & Collapsible" note="Disclosure at two levels">
                  <Accordion type="single" collapsible><AccordionItem value="tokens"><AccordionTrigger>Which tokens are mapped?</AccordionTrigger><AccordionContent>Background, foreground, borders, interaction states, typography and radii.</AccordionContent></AccordionItem><AccordionItem value="source"><AccordionTrigger>Can I edit the source?</AccordionTrigger><AccordionContent>Yes. Every component lives in this project.</AccordionContent></AccordionItem></Accordion><Separator className="my-4" /><Collapsible><CollapsibleTrigger asChild><Button variant="outline" className="w-full justify-between">Advanced options <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} /></Button></CollapsibleTrigger><CollapsibleContent className="pt-3 text-sm text-muted-foreground">Registry and product-line extensions can be added here.</CollapsibleContent></Collapsible>
                </Demo>
                <Demo name="Toggle & Button Group" note="Compact modes and connected actions">
                  <div className="space-y-4"><ToggleGroup type="single" defaultValue="day" variant="outline"><ToggleGroupItem value="day">D</ToggleGroupItem><ToggleGroupItem value="week">W</ToggleGroupItem><ToggleGroupItem value="month">M</ToggleGroupItem></ToggleGroup><div className="flex gap-2"><Toggle variant="outline" aria-label="Favorite"><HugeiconsIcon icon={Notification02Icon} strokeWidth={1.7} />Favorite</Toggle><Toggle aria-label="Notifications"><HugeiconsIcon icon={Notification02Icon} strokeWidth={1.7} /></Toggle></div><ButtonGroup><Button variant="outline">Save</Button><ButtonGroupSeparator /><ButtonGroupText>⌘S</ButtonGroupText></ButtonGroup></div>
                </Demo>
                <Demo name="Navigation Menu" note="Primary web navigation" wide>
                  <NavigationMenu viewport={false}><NavigationMenuList><NavigationMenuItem><NavigationMenuLink href="#foundations">Foundations</NavigationMenuLink></NavigationMenuItem><NavigationMenuItem><NavigationMenuTrigger>Components</NavigationMenuTrigger><NavigationMenuContent><div className="grid w-72 gap-1 p-2"><NavigationMenuLink href="#forms"><div className="font-medium">Forms</div><div className="text-xs text-muted-foreground">Inputs and controls</div></NavigationMenuLink><NavigationMenuLink href="#overlays"><div className="font-medium">Overlays</div><div className="text-xs text-muted-foreground">Dialogs and menus</div></NavigationMenuLink></div></NavigationMenuContent></NavigationMenuItem><NavigationMenuItem><NavigationMenuLink href="#messaging">Messaging</NavigationMenuLink></NavigationMenuItem></NavigationMenuList></NavigationMenu>
                </Demo>
                <Demo name="Menubar" note="Desktop-style command hierarchy">
                  <Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem><MenubarItem>Open <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem><MenubarSeparator /><MenubarItem>Export</MenubarItem></MenubarContent></MenubarMenu><MenubarMenu><MenubarTrigger>Edit</MenubarTrigger><MenubarContent><MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem><MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem></MenubarContent></MenubarMenu></Menubar>
                </Demo>
                <Demo name="Sidebar" note="Contained demo of application navigation" wide>
                  <SidebarProvider className="min-h-64 overflow-hidden rounded-xl border" style={{ "--sidebar-width": "13rem" } as CSSProperties}>
                    <Sidebar collapsible="none" className="h-64"><SidebarHeader className="font-semibold">Momcozy UI</SidebarHeader><SidebarContent><SidebarGroup><SidebarGroupLabel>Workspace</SidebarGroupLabel><SidebarGroupContent><SidebarMenu><SidebarMenuItem><SidebarMenuButton isActive><HugeiconsIcon icon={SparklesIcon} strokeWidth={1.7} /><span>Components</span></SidebarMenuButton></SidebarMenuItem><SidebarMenuItem><SidebarMenuButton><HugeiconsIcon icon={Notification02Icon} strokeWidth={1.7} /><span>Devices</span></SidebarMenuButton></SidebarMenuItem><SidebarMenuItem><SidebarMenuButton><HugeiconsIcon icon={Settings02Icon} strokeWidth={1.7} /><span>Settings</span></SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarGroupContent></SidebarGroup></SidebarContent></Sidebar><SidebarInset className="min-h-64 p-4"><SidebarTrigger label={locale === "zh" ? "切换侧边栏" : "Toggle Sidebar"} /><div className="mt-8 rounded-xl border border-dashed p-6 text-sm text-muted-foreground">Application content</div></SidebarInset>
                  </SidebarProvider>
                </Demo>
              </Section>

              <Section id="overlays" title="Overlays" description="所有浮层均继承当前背景、边框、阴影、圆角和焦点 token。">
                <Demo name="Dialog & Alert Dialog" note="General and destructive confirmation">
                  <div className="flex flex-wrap gap-2"><Dialog><DialogTrigger asChild><Button variant="outline">Open dialog</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Edit profile</DialogTitle><DialogDescription>Update the name shown across connected devices.</DialogDescription></DialogHeader><Input defaultValue="Clare" /><DialogFooter><Button>Save changes</Button></DialogFooter></DialogContent></Dialog><AlertDialog><AlertDialogTrigger asChild><Button variant="destructive">Disconnect</Button></AlertDialogTrigger><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Disconnect this device?</AlertDialogTitle><AlertDialogDescription>You can pair it again later.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Disconnect</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog></div>
                </Demo>
                <Demo name="Sheet & Drawer" note="Side and bottom task surfaces">
                  <div className="flex flex-wrap gap-2"><Sheet><SheetTrigger asChild><Button variant="outline">Open sheet</Button></SheetTrigger><SheetContent><SheetHeader><SheetTitle>Device settings</SheetTitle><SheetDescription>Adjust preferences for this device.</SheetDescription></SheetHeader><div className="px-4"><Field><FieldLabel>Device name</FieldLabel><Input defaultValue="Nursery monitor" /></Field></div><SheetFooter><Button>Save</Button></SheetFooter></SheetContent></Sheet><Drawer><DrawerTrigger asChild><Button variant="outline">Open drawer</Button></DrawerTrigger><DrawerContent><div className="mx-auto w-full max-w-md"><DrawerHeader><DrawerTitle>Quick action</DrawerTitle><DrawerDescription>Start a new care session.</DrawerDescription></DrawerHeader><DrawerFooter><Button>Start session</Button><DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose></DrawerFooter></div></DrawerContent></Drawer></div>
                </Demo>
                <Demo name="Popover & Hover Card" note="Contextual information and actions">
                  <div className="flex flex-wrap items-center gap-3"><Popover><PopoverTrigger asChild><Button variant="outline">Open popover</Button></PopoverTrigger><PopoverContent><PopoverHeader><PopoverTitle>Reminder</PopoverTitle><PopoverDescription>Choose when to be notified.</PopoverDescription></PopoverHeader><Select defaultValue="10"><SelectTrigger className="w-full"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="10">10 minutes before</SelectItem><SelectItem value="30">30 minutes before</SelectItem></SelectContent></Select></PopoverContent></Popover><HoverCard><HoverCardTrigger asChild><Button variant="link">@momcozy</Button></HoverCardTrigger><HoverCardContent><div className="flex gap-3"><Avatar><AvatarFallback>MC</AvatarFallback></Avatar><div><div className="font-semibold">Momcozy Design</div><p className="mt-1 text-sm text-muted-foreground">Token-driven product experiences.</p></div></div></HoverCardContent></HoverCard></div>
                </Demo>
                <Demo name="Tooltip & Sonner" note="Micro guidance and toast feedback">
                  <div className="flex flex-wrap gap-2"><Tooltip><TooltipTrigger asChild><Button size="icon" variant="outline"><HugeiconsIcon icon={Settings02Icon} strokeWidth={1.7} /></Button></TooltipTrigger><TooltipContent>Device settings</TooltipContent></Tooltip><Button variant="outline" onClick={() => toast.success("Theme tokens are connected") }><HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={1.7} />Show toast</Button></div>
                </Demo>
                <Demo name="Dropdown Menu" note="Button-anchored action menu">
                  <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline">Actions <HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={1.7} /></Button></DropdownMenuTrigger><DropdownMenuContent align="start"><DropdownMenuLabel>Device</DropdownMenuLabel><DropdownMenuItem><HugeiconsIcon icon={Settings02Icon} strokeWidth={1.7} />Settings</DropdownMenuItem><DropdownMenuItem><HugeiconsIcon icon={UserIcon} strokeWidth={1.7} />Share access<DropdownMenuShortcut>⌘S</DropdownMenuShortcut></DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem variant="destructive"><HugeiconsIcon icon={Delete02Icon} strokeWidth={1.7} />Remove</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
                </Demo>
                <Demo name="Context Menu" note="Right-click the surface">
                  <ContextMenu><ContextMenuTrigger className="grid h-36 place-items-center rounded-xl border border-dashed text-sm text-muted-foreground">Right-click here</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Preview<ContextMenuShortcut>Space</ContextMenuShortcut></ContextMenuItem><ContextMenuItem>Duplicate<ContextMenuShortcut>⌘D</ContextMenuShortcut></ContextMenuItem><ContextMenuSeparator /><ContextMenuItem variant="destructive">Delete</ContextMenuItem></ContextMenuContent></ContextMenu>
                </Demo>
                <Demo name="Command" note="Searchable command surface" wide>
                  <Command className="rounded-xl border"><CommandInput placeholder="Search commands…" /><CommandList><CommandEmpty>No results found.</CommandEmpty><CommandGroup heading="Suggestions"><CommandItem><HugeiconsIcon icon={Calendar03Icon} strokeWidth={1.7} />Calendar<CommandShortcut>⌘C</CommandShortcut></CommandItem><CommandItem><HugeiconsIcon icon={SearchIcon} strokeWidth={1.7} />Search<CommandShortcut>⌘K</CommandShortcut></CommandItem></CommandGroup><CommandSeparator /><CommandGroup heading="Settings"><CommandItem><HugeiconsIcon icon={UserIcon} strokeWidth={1.7} />Profile</CommandItem><CommandItem><HugeiconsIcon icon={Settings02Icon} strokeWidth={1.7} />Preferences</CommandItem></CommandGroup></CommandList></Command>
                </Demo>
              </Section>

              <Section id="data" title="Data & Layout" description="数据表、图表、进度与复杂布局组件可直接组合。">
                <Demo name="Table / Data Table" note="Data Table is Table plus sorting and filtering behavior" wide>
                  <Table><TableCaption>Connected devices</TableCaption><TableHeader><TableRow><TableHead>Device</TableHead><TableHead>Status</TableHead><TableHead>Battery</TableHead><TableHead className="text-right">Sessions</TableHead></TableRow></TableHeader><TableBody>{[["S12 Pro", "Connected", "84%", "16"], ["Air 1", "Charging", "62%", "9"], ["BM03", "Offline", "—", "24"]].map((row) => <TableRow key={row[0]}>{row.map((cell, index) => <TableCell key={cell} className={index === 3 ? "text-right" : index === 0 ? "font-medium" : ""}>{index === 1 ? <Badge variant={cell === "Connected" ? "default" : "secondary"}>{cell}</Badge> : cell}</TableCell>)}</TableRow>)}</TableBody></Table>
                </Demo>
                <Demo name="Chart" note="Recharts wrapped with semantic chart tokens" wide>
                  <ChartContainer config={locale === "zh" ? { sessions: { ...chartConfig.sessions, label: "护理次数" } } : chartConfig} className="h-64 w-full"><AreaChart data={locale === "zh" ? chartDataZh : chartData} margin={{ left: 8, right: 8 }}><defs><linearGradient id="fillSessions" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--color-sessions)" stopOpacity={0.34} /><stop offset="95%" stopColor="var(--color-sessions)" stopOpacity={0.03} /></linearGradient></defs><CartesianGrid vertical={false} /><XAxis dataKey="day" tickLine={false} axisLine={false} /><ChartTooltip cursor={false} content={<ChartTooltipContent />} /><Area dataKey="sessions" type="natural" fill="url(#fillSessions)" stroke="var(--color-sessions)" strokeWidth={2} /></AreaChart></ChartContainer>
                </Demo>
                <Demo name="Progress" note="Determinate progress indicator">
                  <div className="space-y-6">{[["Syncing tokens", 82], ["Component coverage", 100], ["Visual QA", 64]].map(([label, value]) => <div key={label as string}><div className="mb-2 flex justify-between text-sm"><span>{label}</span><span className="text-muted-foreground">{value}%</span></div><Progress value={value as number} /></div>)}</div>
                </Demo>
                <Demo name="Carousel" note="Swipeable content collection">
                  <Carousel className="mx-auto w-[calc(100%-5rem)]"><CarouselContent>{[1, 2, 3].map((item) => <CarouselItem key={item}><div className="grid aspect-video place-items-center rounded-xl bg-muted font-heading text-4xl">{item}</div></CarouselItem>)}</CarouselContent><CarouselPrevious label={locale === "zh" ? "上一张" : "Previous slide"} /><CarouselNext label={locale === "zh" ? "下一张" : "Next slide"} /></Carousel>
                </Demo>
                <Demo name="Resizable" note="User-adjustable panel layout">
                  <ResizablePanelGroup orientation="horizontal" className="h-44 overflow-hidden rounded-xl border"><ResizablePanel defaultSize={42}><div className="grid h-full place-items-center text-sm">Navigation</div></ResizablePanel><ResizableHandle withHandle /><ResizablePanel><div className="grid h-full place-items-center bg-muted/40 text-sm">Content</div></ResizablePanel></ResizablePanelGroup>
                </Demo>
                <Demo name="Scroll Area" note="Styled overflow container">
                  <ScrollArea className="h-44 rounded-xl border p-4"><div className="space-y-3">{Array.from({ length: 12 }, (_, index) => <div key={index} className="flex items-center justify-between border-b pb-3 text-sm last:border-0"><span>Component update {index + 1}</span><Badge variant="outline">v1.{index}</Badge></div>)}</div></ScrollArea>
                </Demo>
              </Section>

              <Section id="messaging" title="Messaging" description="官方新增的聊天界面基础组件也已纳入同一套主题。">
                <Demo name="Message & Bubble" note="Aligned message rows, bubble variants and reactions" wide>
                  <MessageGroup className="rounded-xl border bg-muted/20 p-4"><Message><MessageAvatar><Avatar><AvatarFallback>MC</AvatarFallback></Avatar></MessageAvatar><MessageContent><MessageHeader>Momcozy Assistant</MessageHeader><BubbleGroup><Bubble variant="secondary"><BubbleContent>Your complete component gallery is ready.</BubbleContent><BubbleReactions>✨ 3</BubbleReactions></Bubble></BubbleGroup><MessageFooter>Just now</MessageFooter></MessageContent></Message><Message align="end"><MessageContent><BubbleGroup><Bubble align="end"><BubbleContent>Great — keep the neutral system as default.</BubbleContent></Bubble></BubbleGroup><MessageFooter>Read</MessageFooter></MessageContent></Message></MessageGroup>
                </Demo>
                <Demo name="Message Scroller" note="Autoscroll-aware conversation viewport" wide>
                  <MessageScrollerProvider><MessageScroller className="h-60 rounded-xl border"><MessageScrollerViewport><MessageScrollerContent className="p-4">{["Tokens loaded", "Components compiled", "Dark mode validated", "HTML gallery generated", "Ready for visual QA"].map((text, index) => <div key={text} className="shrink-0"><Bubble align={index % 2 ? "end" : "start"} variant={index % 2 ? "default" : "secondary"}><BubbleContent>{text}</BubbleContent></Bubble></div>)}</MessageScrollerContent></MessageScrollerViewport><MessageScrollerButton label={locale === "zh" ? "滚动到底部" : "Scroll to end"} /></MessageScroller></MessageScrollerProvider>
                </Demo>
                <Demo name="Attachment" note="Upload states, metadata and actions">
                  <AttachmentGroup><Attachment state="done"><AttachmentMedia><HugeiconsIcon icon={File01Icon} strokeWidth={2} /></AttachmentMedia><AttachmentContent><AttachmentTitle>component-audit.pdf</AttachmentTitle><AttachmentDescription>1.8 MB · Ready</AttachmentDescription></AttachmentContent><AttachmentActions><AttachmentAction size="icon-xs" aria-label="Remove"><HugeiconsIcon icon={Delete02Icon} strokeWidth={2} /></AttachmentAction></AttachmentActions></Attachment><Attachment state="uploading"><AttachmentMedia><HugeiconsIcon icon={CloudUploadIcon} strokeWidth={2} /></AttachmentMedia><AttachmentContent><AttachmentTitle>tokens.json</AttachmentTitle><AttachmentDescription>Uploading · 68%</AttachmentDescription></AttachmentContent></Attachment></AttachmentGroup>
                </Demo>
                <Demo name="Marker" note="Conversation separators and system events">
                  <div className="space-y-5"><Marker variant="separator"><MarkerContent>Today</MarkerContent></Marker><Marker variant="border"><MarkerIcon><HugeiconsIcon icon={AttachmentIcon} strokeWidth={2} /></MarkerIcon><MarkerContent>2 attachments added</MarkerContent></Marker><Marker><MarkerIcon><HugeiconsIcon icon={Tick02Icon} strokeWidth={2} /></MarkerIcon><MarkerContent>All messages are synced</MarkerContent></Marker></div>
                </Demo>
              </Section>

              <footer className="flex flex-col gap-3 border-t py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>Momcozy UI Playground · generated from current theme tokens</span><span>React 19 · shadcn/ui · Radix · Tailwind 4</span></footer>
              </LocalizedGallery>}
                </> : view.type === "markdown" && activeMarkdown ? (
                  <MarkdownDocument entry={activeMarkdown} locale={locale} />
                ) : view.type === "component" && activeComponent ? (
                  <ComponentDocPage
                    component={activeComponent}
                    locale={locale}
                    previous={componentDocs[componentDocs.findIndex((item) => item.slug === activeComponent.slug) - 1]}
                    next={componentDocs[componentDocs.findIndex((item) => item.slug === activeComponent.slug) + 1]}
                    onNavigate={showComponent}
                  />
                ) : view.type === "demo" && activeDemo ? (
                  <PreviewDocument entry={activeDemo} origin={demoOrigin} locale={locale} theme={dark ? "dark" : "light"} />
                ) : null}
              </main>
            </div>
            <RightRail view={view} locale={locale} activeMarkdown={activeMarkdown} activeComponent={activeComponent} activeDemo={activeDemo} onCatalogTarget={showCatalogTarget} />
            <Toaster position="top-right" />
          </div>
        </div>
      </TooltipProvider>
    </DirectionProvider>
  )
}

export default App
