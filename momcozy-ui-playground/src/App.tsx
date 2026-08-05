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
  { id: "skill", label: { en: "Skill Instructions", zh: "Skill 指令" }, description: { en: "AI Agent usage model and workflow", zh: "AI Agent 使用模型与工作流" }, content: skillMarkdown },
  { id: "start-here", label: { en: "Start Here", zh: "快速开始" }, description: { en: "Project entry point and recommended reading order", zh: "设计系统工程入口与使用顺序" }, content: startHereMarkdown },
  { id: "component-library", label: { en: "Component Library Layers", zh: "Component Library 分层" }, description: { en: "Architecture layers and component boundaries", zh: "工程分层与组件边界" }, content: componentLibraryMarkdown },
  { id: "token-mapping", label: { en: "Token Mapping", zh: "Token 映射" }, description: { en: "Figma tokens mapped to the shadcn semantic layer", zh: "Figma Token 到 shadcn 语义层" }, content: tokenMarkdown },
  { id: "color-system", label: { en: "Color System", zh: "色彩系统" }, description: { en: "Grays, product-line colors, and status colors", zh: "Grays、产品线色与状态色" }, content: colorMarkdown },
  { id: "foundation-tokens", label: { en: "Foundation Tokens", zh: "基础 Token" }, description: { en: "Spacing, radii, shadows, and states", zh: "间距、圆角、阴影与状态" }, content: foundationMarkdown },
  { id: "typography", label: { en: "Typography", zh: "字体规范" }, description: { en: "Exposure and Aeonik Soft Pro usage", zh: "Exposure 与 Aeonik Soft Pro 使用规范" }, content: typographyMarkdown },
  { id: "component-rules", label: { en: "Component Rules", zh: "组件规则" }, description: { en: "Component implementation and interaction rules", zh: "组件实现与交互规则" }, content: componentRulesMarkdown },
  { id: "icon-system", label: { en: "Icon System", zh: "图标系统" }, description: { en: "Hugeicons rules, approved catalog, and pending decisions", zh: "Hugeicons 规则、已批准目录与待决策项" }, content: `${iconMarkdown}\n\n---\n\n${iconCatalogMarkdown}` },
  { id: "demo-patterns", label: { en: "Demo Generation Patterns", zh: "Demo 生成模式" }, description: { en: "Patterns for IoT, content, and community demos", zh: "IoT、内容与社区 Demo 模式" }, content: demoPatternsMarkdown },
  { id: "shadcn-integration", label: { en: "shadcn/ui Integration", zh: "shadcn/ui 集成" }, description: { en: "Playground, starter, and registry strategy", zh: "Playground、Starter 与 Registry 策略" }, content: integrationMarkdown },
  { id: "status-color", label: { en: "Status Color Extraction", zh: "状态色提取" }, description: { en: "Status-color extraction and semantic mapping", zh: "状态色变量提取与语义映射" }, content: statusColorMarkdown },
  { id: "dark-mode", label: { en: "Dark Mode Recommendations", zh: "深色模式建议" }, description: { en: "App 3.0 dark-mode audit and recommendations", zh: "App 3.0 深色模式评估与建议" }, content: darkModeRecommendationMarkdown },
  { id: "color-token-review", label: { en: "Color Token Review", zh: "颜色 Token 审查" }, description: { en: "Color-token update review", zh: "颜色 Token 更新审查记录" }, content: colorTokenReviewMarkdown },
  { id: "demo-readme", label: { en: "Demo Run Guide", zh: "Demo 运行说明" }, description: { en: "Demo directory and run instructions", zh: "Demo 目录与运行说明" }, content: demoReadmeMarkdown },
  { id: "ai-plan-icons", label: { en: "AI Plan Icon Review", zh: "AI 计划图标审查" }, description: { en: "AI Lactation Plan icon review", zh: "AI Lactation Plan 图标审查" }, content: aiPlanIconReviewMarkdown },
  { id: "partner-mode-icons", label: { en: "Partner Mode Icon Review", zh: "伴侣模式图标审查" }, description: { en: "Partner Mode icon review", zh: "Partner Mode 图标审查" }, content: partnerModeIconReviewMarkdown },
  { id: "root-design-qa", label: { en: "Root Design QA", zh: "主工程设计验收" }, description: { en: "Main project visual QA record", zh: "主工程视觉验收记录" }, content: rootDesignQaMarkdown },
  { id: "playground-readme", label: { en: "Playground Run Guide", zh: "Playground 运行说明" }, description: { en: "Component documentation site run instructions", zh: "组件文档站运行说明" }, content: playgroundReadmeMarkdown },
  { id: "playground-qa", label: { en: "Playground Design QA", zh: "Playground 设计验收" }, description: { en: "Component documentation site visual QA record", zh: "组件文档站视觉验收记录" }, content: playgroundQaMarkdown },
  { id: "project-readme", label: { en: "Repository Engineering Guide", zh: "仓库工程说明" }, description: { en: "Repository runtime and directory guide", zh: "仓库运行与目录说明" }, content: projectReadmeMarkdown },
]

const markdownEntriesById = new Map(markdownEntries.map((entry) => [entry.id, entry]))

const markdownNavigationGroups = [
  {
    id: "design-rules",
    label: { en: "Design Rules", zh: "设计规则" },
    entryIds: ["token-mapping", "color-system", "foundation-tokens", "typography", "component-rules", "icon-system"],
  },
  {
    id: "engineering-integration",
    label: { en: "Engineering Integration", zh: "工程接入" },
    entryIds: ["shadcn-integration", "component-library", "playground-readme", "project-readme"],
  },
] as const

const catalogNavigationEntries = [
  { id: "introduction", label: { en: "Skill Overview", zh: "Skill 介绍" } },
] as const

const governanceNavigationSections = [
  {
    id: "token-theme-reviews",
    label: { en: "Token & Dark Mode Reviews", zh: "Token 与深色模式审查" },
    entryIds: ["status-color", "dark-mode", "color-token-review"],
  },
  {
    id: "icon-reviews",
    label: { en: "Icon Reviews", zh: "图标审查" },
    entryIds: ["ai-plan-icons", "partner-mode-icons"],
  },
  {
    id: "quality-assurance",
    label: { en: "Main Project & Playground QA", zh: "主工程与 Playground QA" },
    entryIds: ["root-design-qa", "playground-qa"],
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

type SkillContentMapAction = {
  type: "catalog" | "markdown" | "demo"
  id: string
}

const skillContentMap = [
  {
    id: "getting-started",
    title: { en: "Start Using the Skill", zh: "开始使用 Skill" },
    items: [
      { label: { en: "Skill overview", zh: "Skill 介绍" }, action: { type: "catalog", id: "introduction" } },
      { label: { en: "Install the Skill", zh: "安装 Skill" }, action: { type: "catalog", id: "installation" } },
      { label: { en: "First invocation", zh: "第一次调用" }, action: { type: "catalog", id: "first-use" } },
      { label: { en: "Usage workflow", zh: "使用流程" }, action: { type: "catalog", id: "workflow" } },
      { label: { en: "Package structure and purpose", zh: "包结构与作用" }, action: { type: "catalog", id: "structure" } },
      { label: { en: "Compatibility and boundaries", zh: "兼容性与使用边界" }, action: { type: "catalog", id: "boundaries" } },
    ],
  },
  {
    id: "design-rules",
    title: { en: "Design Rules", zh: "设计规则" },
    items: [
      { label: { en: "Token mapping", zh: "Token 映射" }, action: { type: "markdown", id: "token-mapping" } },
      { label: { en: "Color system", zh: "色彩系统" }, action: { type: "markdown", id: "color-system" } },
      { label: { en: "Foundation tokens", zh: "基础 Token" }, action: { type: "markdown", id: "foundation-tokens" } },
      { label: { en: "Typography", zh: "字体规范" }, action: { type: "markdown", id: "typography" } },
      { label: { en: "Component rules", zh: "组件规则" }, action: { type: "markdown", id: "component-rules" } },
      { label: { en: "Icon system", zh: "图标系统" }, action: { type: "markdown", id: "icon-system" } },
    ],
  },
  {
    id: "engineering",
    title: { en: "Engineering Integration", zh: "工程接入" },
    items: [
      { label: { en: "shadcn/ui integration", zh: "shadcn/ui 集成" }, action: { type: "markdown", id: "shadcn-integration" } },
      { label: { en: "Component Library layers", zh: "Component Library 分层" }, action: { type: "markdown", id: "component-library" } },
      { label: { en: "Playground run guide", zh: "Playground 运行说明" }, action: { type: "markdown", id: "playground-readme" } },
      { label: { en: "Repository engineering guide", zh: "仓库工程说明" }, action: { type: "markdown", id: "project-readme" } },
    ],
  },
  {
    id: "scenarios",
    title: { en: "Scenario Validation", zh: "场景验证" },
    items: [
      { label: { en: "Demo generation patterns", zh: "Demo 生成模式" }, action: { type: "markdown", id: "demo-patterns" } },
      { label: { en: "Demo run guide", zh: "Demo 运行说明" }, action: { type: "markdown", id: "demo-readme" } },
      { label: { en: "6 product demos", zh: "6 个产品 Demo" }, action: { type: "demo", id: "user-guide" } },
    ],
  },
  {
    id: "governance",
    title: { en: "Governance and Acceptance", zh: "治理与验收" },
    items: [
      { label: { en: "Token and Dark Mode review", zh: "Token 与深色模式审查" }, action: { type: "markdown", id: "dark-mode" } },
      { label: { en: "Icon review", zh: "图标审查" }, action: { type: "markdown", id: "ai-plan-icons" } },
      { label: { en: "Main project and Playground QA", zh: "主工程与 Playground QA" }, action: { type: "markdown", id: "root-design-qa" } },
    ],
  },
  {
    id: "components",
    title: { en: "Component Directory", zh: "组件目录" },
    items: [
      { label: { en: "5 Momcozy components", zh: "Momcozy 定制组件 5" }, action: { type: "catalog", id: "component-gallery" } },
      { label: { en: "64 shadcn/ui components", zh: "shadcn/ui 组件 64" }, action: { type: "catalog", id: "component-gallery" } },
    ],
  },
] satisfies Array<{
  id: string
  title: Record<Locale, string>
  items: Array<{ label: Record<Locale, string>; action: SkillContentMapAction }>
}>

type LibraryView =
  | { type: "catalog"; target?: string }
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
    librarySubtitle: "Skill & component library",
    libraryNavigation: "Library navigation",
    closeNavigation: "Close navigation",
    openNavigation: "Open navigation",
    sections: "Sections",
    introduction: "Skill Overview",
    components: "Components",
    installation: "Installation",
    framework: "Framework",
    value: "Value",
    architecture: "Architecture",
    inventory: "What is included",
    skillAndMarkdown: "Skill & Markdown",
    demos: "Demos",
    componentGallery: "Component Gallery",
    componentCount: "69 components",
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
    tokenFirstLibrary: "Executable design-system Skill",
    sourceNote: "Rules, assets, scripts, demos, and components share one Momcozy source of truth.",
  },
  zh: {
    librarySubtitle: "设计系统 Skill 与组件库",
    libraryNavigation: "组件库导航",
    closeNavigation: "关闭导航",
    openNavigation: "打开导航",
    sections: "导航",
    introduction: "Skill 介绍",
    components: "组件",
    installation: "安装",
    framework: "技术框架",
    value: "核心价值",
    architecture: "系统架构",
    inventory: "包含内容",
    skillAndMarkdown: "Skill 与 Markdown",
    demos: "产品场景",
    componentGallery: "组件总览",
    componentCount: "69 个组件",
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
    tokenFirstLibrary: "可执行的设计系统 Skill",
    sourceNote: "规则、资产、脚本、Demo 与组件共享同一份 Momcozy 事实源。",
  },
} as const

const introductionCopy = {
  en: {
    eyebrow: "Momcozy 3.0 · Agent Skill",
    title: "From design rules to deliverable assets",
    lead: "momcozy-shadcn-design-system is a design-system execution package built on the open Agent Skills standard. It lets AI agents that support Skills load Momcozy tokens, components, icon rules, and verification workflows, then turn a request into reusable design, code, and review deliverables.",
    positioningNote: "The current installation and invocation flow is designed for ChatGPT/Codex. Other agents that support the Agent Skills standard can reuse the core package, but their installation method and compatibility must be validated separately.",
    installAction: "Install the Skill",
    workflowAction: "See how it works",
    mapEyebrow: "Content map",
    mapTitle: "What is inside this Skill",
    mapLead: "Six areas cover setup, design rules, engineering integration, components, scenario validation, and governance.",
    useCasesEyebrow: "Before you install",
    useCasesTitle: "What can you use it for?",
    useCasesLead: "Use the Skill when a task needs Momcozy-specific decisions, not merely a generic interface.",
    useCases: [
      ["Design and UX", "Turn a brief or existing screen into a token-based specification, review UI consistency, or explore a Momcozy product direction."],
      ["Frontend implementation", "Build or refactor React interfaces with Momcozy semantic tokens, shadcn/ui primitives, Light/Dark behavior, and shared Hugeicons."],
      ["Product demos", "Create complete IoT, device, care, family health, content, or community scenarios instead of isolated component samples."],
      ["Design-system governance", "Audit token coverage, theme mappings, component states, and icon candidates before changes enter the shared system."],
    ],
    workflowEyebrow: "User workflow",
    workflowTitle: "From your request to a verified result",
    workflowLead: "You describe the outcome. The Skill supplies the Momcozy context, decision rules, and checks that the AI agent should follow.",
    workflowSteps: [
      ["Give the AI agent the task", "Share a brief, screenshot, Figma link, codebase, or the component you want to create or review."],
      ["Load only the relevant rules", "The AI agent reads the Skill entrypoint, then loads the references needed for this task—such as color, typography, components, icons, or demos."],
      ["Inspect the current context", "Before editing, the AI agent checks the existing stack, theme, components, and visual baseline so the result fits the project."],
      ["Map decisions to the system", "Colors, typography, spacing, radius, states, components, and icons are mapped to Momcozy semantics instead of improvised values."],
      ["Create or update the deliverable", "The AI agent produces the requested design specification, code, theme CSS, component, demo, or review document."],
      ["Verify and report", "Relevant audits, builds, interactions, and visual checks run before the AI agent reports what changed, what passed, and what still needs a decision."],
    ],
    installationEyebrow: "Fastest installation",
    installationTitle: "One prompt in Codex",
    installationLead: "You do not need to clone the repository, unzip files, or install shadcn/ui first. Paste the prompt below into Codex; the built-in installer downloads the complete Skill directory for you.",
    installRequirement: "You only need Codex and access to the company GitHub repository.",
    installPromptLabel: "Copy this into Codex",
    installPrompt: "Please install the Skill from https://github.com/liyunlong625188-sys/Momcozy-Design-System-UI/tree/main/skills/momcozy-shadcn-design-system",
    copyInstall: "Copy install prompt",
    copied: "Copied",
    copyFailed: "Could not copy. Select the text and copy it manually.",
    installSteps: [
      ["Open Codex", "Start any task where you can send a message."],
      ["Paste the install prompt", "Codex installs the entire folder into your personal skills directory. Wait for the installation confirmation."],
      ["Use it on the next turn", "Explicitly mention $momcozy-shadcn-design-system when you want to guarantee that the Skill is used."],
    ],
    firstUseLabel: "Recommended first request",
    firstUsePrompt: "Use $momcozy-shadcn-design-system. First explain which Momcozy rules you will load, then create a smart breast-pump device detail page with Light and Dark modes.",
    copyFirstUse: "Copy first request",
    installVerify: "Installation is successful when Codex confirms the install and can use $momcozy-shadcn-design-system on the next turn. If it does not appear, start a new task or restart Codex once.",
    installAlternative: "If GitHub access is unavailable, attach the internally shared .skill file and say “Please install this Skill.” Manual folder copying is only a fallback.",
    structureEyebrow: "Inside the Skill",
    structureTitle: "Five parts, each with one job",
    structureLead: "The package uses progressive disclosure: the AI agent starts from the entrypoint and reads deeper references or runs scripts only when the task requires them.",
    structureItems: [
      ["SKILL.md", "The operating entrypoint. It defines when the Skill should be used, which references to load, the execution order, and the boundaries the AI agent must respect."],
      ["references/", "Human-readable rules for tokens, colors, typography, components, icons, shadcn/ui integration, and product-demo patterns."],
      ["assets/", "The source assets: Light/Dark token exports, generated semantic theme CSS, and Momcozy brand and UI fonts."],
      ["scripts/", "Repeatable theme generation and audit tools for token coverage, unresolved references, icon use, and candidate review."],
      ["agents/", "Display metadata and a default prompt that help a compatible host identify and present the Skill correctly."],
    ],
    outcomesEyebrow: "What you get",
    outcomesTitle: "Deliverables you can continue using",
    outcomesLead: "The exact output follows your request. A single task may return one or several of these deliverables.",
    outcomes: [
      ["A Momcozy-aligned design result", "Page structure, states, copy hierarchy, Light/Dark behavior, and product-line semantics grounded in the current system."],
      ["Editable implementation assets", "React components, page code, semantic CSS, token mappings, or a runnable product demo inside your project."],
      ["A review and decision record", "Token gaps, icon candidates, component exceptions, risks, and items that still require design-system approval."],
      ["Visible verification evidence", "Build, audit, interaction, or visual-QA results, with clear separation between what passed and what remains unverified."],
    ],
    valueTitle: "Why teams use it",
    values: [
      ["Less repeated explanation", "The team installs the design-system context once instead of restating colors, typography, components, and icon rules in every prompt."],
      ["More consistent output", "Designers, developers, and the AI agent work from the same semantic contract, reducing one-off values and implementation drift."],
      ["Decisions stay traceable", "Rules live in readable Markdown; transformations and audits live in scripts, so results can be inspected and repeated."],
      ["Safer evolution", "Token, icon, and component changes pass through explicit checks and review gates before they become shared conventions."],
    ],
    boundariesEyebrow: "Important boundaries",
    boundariesTitle: "What the Skill does not do automatically",
    boundariesLead: "These boundaries keep the package reliable and prevent a prompt from silently changing the shared design system.",
    boundaries: [
      "It does not replace the component library, Figma library, or product codebase; it guides the AI agent in how to work with them.",
      "It does not install shadcn/ui inside the Skill. shadcn/ui is initialized only in a target frontend project that actually needs components.",
      "It does not publish, deploy, or approve a design-system change without an explicit request and a verified action.",
      "New icon candidates are documented for review first; they do not enter the formal semantic registry until the owner approves them.",
    ],
    inventoryTitle: "What is already included",
    inventoryLead: "The current workspace gives the Skill a visible validation environment, not just a set of written rules.",
    metricLabels: ["Documented components", "Momcozy components", "System documents", "Product demos"],
    galleryEyebrow: "Component quick links",
    galleryTitle: "Every component, one click away.",
    galleryLead: "components are listed below in the same order as the left navigation. Select any component to open its installation, usage, examples, accessibility, and API documentation.",
    momcozyQuickGroup: "Momcozy components",
    shadcnQuickGroup: "shadcn/ui components",
  },
  zh: {
    eyebrow: "Momcozy 3.0 · Agent Skill",
    title: "从设计规范，到可交付资产",
    lead: "momcozy-shadcn-design-system 是一套基于开放 Agent Skills 标准的设计系统执行包。它让支持 Skills 的 AI Agent 读取 Momcozy Token、组件、图标与验证流程，并把需求转化为可继续使用的设计、代码和审查结果。",
    positioningNote: "当前安装与调用流程主要针对 ChatGPT/Codex；其他支持 Agent Skills 标准的智能体可以复用核心内容，但安装方式与兼容性需要单独验证。",
    installAction: "安装这个 Skill",
    workflowAction: "先看工作流程",
    mapEyebrow: "内容结构",
    mapTitle: "这个 Skill 里有什么",
    mapLead: "从安装、设计规则到工程接入和验收，6 个部分各自负责一类工作。",
    useCasesEyebrow: "安装前先了解",
    useCasesTitle: "这个 Skill 可以帮你做什么？",
    useCasesLead: "当任务需要 Momcozy 的具体设计判断，而不是一套通用界面时，就适合使用它。",
    useCases: [
      ["产品与 UX 设计", "把需求或已有界面整理成 Token 驱动的设计规格，检查 UI 一致性，或探索新的 Momcozy 产品方向。"],
      ["前端实现", "用 Momcozy semantic tokens、shadcn/ui 原语、Light/Dark Mode 和统一 Hugeicons 实现或重构 React 界面。"],
      ["完整产品 Demo", "生成智能母婴硬件、设备管理、护理、家庭健康、内容或社区等完整场景，而不是只展示孤立组件。"],
      ["设计系统治理", "在设计系统更新前审计 Token 覆盖、主题映射、组件状态和图标候选，明确哪些可以复用、哪些仍需决策。"],
    ],
    workflowEyebrow: "用户使用流程",
    workflowTitle: "从你的需求，到经过验证的结果",
    workflowLead: "你只需要说清楚想得到什么；Skill 会为 AI Agent 补齐 Momcozy 上下文、判断规则和必要检查。",
    workflowSteps: [
      ["把任务交给 AI Agent", "提供需求、截图、Figma 链接、代码仓库，或要新建 / 检查的页面与组件。"],
      ["只读取这次需要的规则", "AI Agent 先读 Skill 入口，再按任务加载颜色、字体、组件、图标或 Demo 等相关文档，不会一次塞入全部内容。"],
      ["检查当前项目", "AI Agent 动手前先确认技术栈、现有主题、组件和视觉基线，让结果适配当前工程，而不是另起一套。"],
      ["把判断映射到规范", "颜色、字体、间距、圆角、状态、组件和图标都映射到 Momcozy 语义，不临时编造设计值。"],
      ["生成或修改交付物", "AI Agent 根据任务产出设计规格、页面代码、主题 CSS、组件、产品 Demo 或审查文档。"],
      ["验证并说明结果", "AI Agent 完成相关审计、构建、交互和视觉检查，再说明改了什么、哪些已通过、哪些仍需要你决策。"],
    ],
    installationEyebrow: "最简单的安装方式",
    installationTitle: "在 Agent 对话里粘贴一句话",
    installationLead: "不用先克隆仓库、解压文件，也不用为了安装 Skill 提前配置 shadcn/ui。把下面这句话发给 Codex，它会自动下载并安装完整目录。",
    installRequirement: "你只需要准备好 Codex，并能访问公司的 GitHub 仓库。",
    installPromptLabel: "复制这句话，发送给 Codex",
    installPrompt: "请从 https://github.com/liyunlong625188-sys/Momcozy-Design-System-UI/tree/main/skills/momcozy-shadcn-design-system 安装这个 Skill。",
    copyInstall: "复制安装指令",
    copied: "已复制",
    copyFailed: "没有复制成功，请选中文字后手动复制。",
    installSteps: [
      ["打开 Codex", "新建或进入任意一个可以发送消息的任务。"],
      ["粘贴安装指令", "Codex 会把完整目录安装到你的个人 skills 目录；看到安装完成的回复后再继续。"],
      ["下一轮开始使用", "需要确保调用时，在需求中明确写出 $momcozy-shadcn-design-system。"],
    ],
    firstUseLabel: "推荐的第一次调用",
    firstUsePrompt: "使用 $momcozy-shadcn-design-system。先说明这次会读取哪些 Momcozy 规则，再设计一个支持 Light/Dark Mode 的智能吸奶器设备详情页。",
    copyFirstUse: "复制首次调用",
    installVerify: "Codex 明确回复安装完成，并且下一轮可以使用 $momcozy-shadcn-design-system，就代表安装成功。如果暂时没有显示，先新建一个任务；仍未出现时再重启一次 Codex。",
    installAlternative: "如果当前无法访问 GitHub，可以把公司内部分享的 .skill 文件附加到 Codex，并说“请安装这个 Skill”。手动复制完整目录只作为最后的备用方式。",
    structureEyebrow: "Skill 里面有什么",
    structureTitle: "5 个部分，各自只负责一件事",
    structureLead: "整个包采用按需读取：AI Agent 从入口开始，只在任务需要时继续读取具体规范或运行脚本，既保留完整规则，也避免无关上下文。",
    structureItems: [
      ["SKILL.md", "总入口与操作说明：定义什么时候启用、需要读取哪些资料、按什么顺序执行，以及必须遵守的边界。"],
      ["references/", "可供人和 AI Agent 阅读的规范：涵盖 Token、颜色、字体、组件、图标、shadcn/ui 接入与产品 Demo 模式。"],
      ["assets/", "设计系统源资产：包括 Light/Dark Token 导出、生成后的语义主题 CSS，以及 Momcozy 品牌字体与 UI 字体。"],
      ["scripts/", "可重复执行的生成与审计工具：负责主题转换、Token 覆盖、未解析引用、图标使用和候选图标清单。"],
      ["agents/", "Skill 的展示信息和默认提示词，帮助兼容的宿主正确识别、呈现和启动这个 Skill。"],
    ],
    outcomesEyebrow: "用完能得到什么",
    outcomesTitle: "可以继续使用的真实交付物",
    outcomesLead: "具体产出跟随你的需求；一次任务可能得到其中一种，也可能组合得到多种。",
    outcomes: [
      ["符合 Momcozy 的设计结果", "包含页面结构、状态、文案层级、Light/Dark Mode 和产品线语义，不只是“看起来差不多”。"],
      ["可继续编辑的实现资产", "包括 React 组件、页面代码、semantic CSS、Token 映射，或可以运行的完整产品 Demo。"],
      ["清楚的审查与决策记录", "列出 Token 缺口、图标候选、组件例外、风险，以及仍需要设计系统负责人确认的事项。"],
      ["看得见的验证证据", "提供构建、审计、交互或视觉 QA 结果，并明确区分哪些已通过、哪些尚未验证。"],
    ],
    valueTitle: "它给团队带来的好处",
    values: [
      ["少重复解释规范", "安装一次设计系统上下文，不必在每条提示词里反复说明颜色、字体、组件和图标规则。"],
      ["提高产出一致性", "设计、研发与 AI Agent 使用同一份语义契约，减少临时色值、组件误用和实现漂移。"],
      ["让判断可以追溯", "规则保存在可阅读的 Markdown 中，转换与审计保存在脚本中，结果可以检查，也可以重复执行。"],
      ["让规范演进更安全", "Token、图标和组件变更先经过明确的审计与决策门禁，再进入团队共享规范。"],
    ],
    boundariesEyebrow: "重要边界",
    boundariesTitle: "它不会自动替你做这些决定",
    boundariesLead: "这些边界能避免一条提示词悄悄改变整个设计系统，也是团队放心复用的前提。",
    boundaries: [
      "它不会替代组件库、Figma Library 或业务代码仓库；它负责指导 AI Agent 应该如何使用它们。",
      "它不会把 shadcn/ui 安装进 Skill；只有具体前端项目确实需要组件时，才在目标项目内初始化。",
      "它不会在没有明确请求和实际验证的情况下，宣称已经 Publish、部署或批准设计系统变更。",
      "新图标会先生成待决策清单；只有负责人确认后，才能进入正式语义注册表。",
    ],
    inventoryTitle: "目前已经包含什么",
    inventoryLead: "当前工作空间为 Skill 提供了可见、可运行的验收环境，不只是一组文字规范。",
    metricLabels: ["已文档化组件", "Momcozy 专属组件", "系统文档", "产品 Demo"],
    galleryEyebrow: "组件快速入口",
    galleryTitle: "所有组件，一键直达。",
    galleryLead: "个组件全部列在下方，顺序与左侧导航保持一致；点击任意组件即可进入对应的安装、用法、示例、可访问性与 API 文档。",
    momcozyQuickGroup: "Momcozy 定制组件",
    shadcnQuickGroup: "shadcn/ui 组件",
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

function IntroductionOverview({
  locale,
  onCatalogTarget,
  onMarkdown,
  onDemo,
  onComponent,
}: {
  locale: Locale
  onCatalogTarget: (target: string) => void
  onMarkdown: (id: string) => void
  onDemo: (id: string) => void
  onComponent: (slug: string) => void
}) {
  const content = introductionCopy[locale]
  const [copiedPrompt, setCopiedPrompt] = useState<"install" | "first-use" | null>(null)
  const metrics = [
    componentDocs.length,
    componentDocs.filter((component) => component.customPath).length,
    markdownEntries.length,
    demoEntries.length,
  ]
  const componentQuickGroups = [
    {
      id: "momcozy",
      label: content.momcozyQuickGroup,
      components: componentDocs.filter((component) => component.customPath),
    },
    {
      id: "shadcn",
      label: content.shadcnQuickGroup,
      components: componentDocs.filter((component) => !component.customPath),
    },
  ]

  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  const openContentMapItem = (action: SkillContentMapAction) => {
    if (action.type === "catalog") onCatalogTarget(action.id)
    if (action.type === "markdown") onMarkdown(action.id)
    if (action.type === "demo") onDemo(action.id)
  }
  const copyPrompt = async (kind: "install" | "first-use", text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedPrompt(kind)
      toast.success(content.copied)
      window.setTimeout(() => setCopiedPrompt(null), 1800)
    } catch {
      toast.error(content.copyFailed)
    }
  }

  return (
    <div className="intro-page">
      <section id="introduction" className="intro-hero">
        <Badge variant="secondary">{content.eyebrow}</Badge>
        <h1>{content.title}</h1>
        <p className="intro-hero-lead">{content.lead}</p>
        <p className="intro-positioning-note">{content.positioningNote}</p>
        <div className="intro-hero-actions">
          <Button type="button" size="lg" onClick={() => scrollToSection("installation")}>{content.installAction}</Button>
          <Button type="button" size="lg" variant="outline" onClick={() => scrollToSection("workflow")}>{content.workflowAction}</Button>
        </div>
      </section>

      <section id="content-map" className="intro-section intro-content-map-section">
        <div className="intro-section-heading">
          <span>{content.mapEyebrow}</span>
          <h2>{content.mapTitle}</h2>
          <p>{content.mapLead}</p>
        </div>
        <div className="intro-content-map-grid">
          {skillContentMap.map((group, index) => (
            <article key={group.id} className="intro-content-map-card">
              <header>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <h3>{group.title[locale]}</h3>
              </header>
              <ul>
                {group.items.map((item) => (
                  <li key={item.label.en}>
                    <button type="button" onClick={() => openContentMapItem(item.action)}>
                      <span>{item.label[locale]}</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="use-cases" className="intro-section">
        <div className="intro-section-heading">
          <span>{content.useCasesEyebrow}</span>
          <h2>{content.useCasesTitle}</h2>
          <p>{content.useCasesLead}</p>
        </div>
        <div className="intro-use-case-grid">
          {content.useCases.map(([title, description], index) => (
            <article key={title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="installation" className="intro-section intro-install-section">
        <div className="intro-section-heading">
          <span>{content.installationEyebrow}</span>
          <h2>{content.installationTitle}</h2>
          <p>{content.installationLead}</p>
        </div>
        <div className="intro-install-card">
          <p className="intro-install-requirement">{content.installRequirement}</p>
          <div className="intro-prompt-block">
            <span>{content.installPromptLabel}</span>
            <code>{content.installPrompt}</code>
            <Button type="button" variant="outline" onClick={() => void copyPrompt("install", content.installPrompt)}>
              {copiedPrompt === "install" ? content.copied : content.copyInstall}
            </Button>
          </div>
          <ol className="intro-install-steps">
            {content.installSteps.map(([title, description], index) => (
              <li key={title}>
                <b>{index + 1}</b>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
          <div id="first-use" className="intro-prompt-block intro-prompt-block-secondary">
            <span>{content.firstUseLabel}</span>
            <code>{content.firstUsePrompt}</code>
            <Button type="button" variant="outline" onClick={() => void copyPrompt("first-use", content.firstUsePrompt)}>
              {copiedPrompt === "first-use" ? content.copied : content.copyFirstUse}
            </Button>
          </div>
          <p className="intro-install-verify">{content.installVerify}</p>
          <aside className="intro-install-alternative">{content.installAlternative}</aside>
        </div>
      </section>

      <section id="workflow" className="intro-section">
        <div className="intro-section-heading">
          <span>{content.workflowEyebrow}</span>
          <h2>{content.workflowTitle}</h2>
          <p>{content.workflowLead}</p>
        </div>
        <ol className="intro-workflow-list">
          {content.workflowSteps.map(([title, description], index) => (
            <li key={title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <div><h3>{title}</h3><p>{description}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section id="structure" className="intro-section">
        <div className="intro-section-heading">
          <span>{content.structureEyebrow}</span>
          <h2>{content.structureTitle}</h2>
          <p>{content.structureLead}</p>
        </div>
        <ol className="intro-layer-list intro-structure-list">
          {content.structureItems.map(([title, description], index) => (
            <li key={title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <h3><code>{title}</code></h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="outcomes" className="intro-section">
        <div className="intro-section-heading">
          <span>{content.outcomesEyebrow}</span>
          <h2>{content.outcomesTitle}</h2>
          <p>{content.outcomesLead}</p>
        </div>
        <div className="intro-outcome-grid">
          {content.outcomes.map(([title, description], index) => (
            <article key={title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
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

      <section id="boundaries" className="intro-section">
        <div className="intro-section-heading">
          <span>{content.boundariesEyebrow}</span>
          <h2>{content.boundariesTitle}</h2>
          <p>{content.boundariesLead}</p>
        </div>
        <ul className="intro-boundary-list">
          {content.boundaries.map((boundary, index) => <li key={boundary}><b>{String(index + 1).padStart(2, "0")}</b><p>{boundary}</p></li>)}
        </ul>
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
          <p><strong>{componentDocs.length}</strong> {content.galleryLead}</p>
        </div>
        <div className="intro-component-index">
          {componentQuickGroups.map((group) => (
            <section key={group.id} className="intro-component-group" aria-labelledby={`component-group-${group.id}`}>
              <header className="intro-component-group-heading">
                <h3 id={`component-group-${group.id}`}>{group.label}</h3>
                <span>{group.components.length}</span>
              </header>
              <nav className="intro-component-links" aria-label={group.label}>
                {group.components.map((component) => (
                  <button key={component.slug} type="button" onClick={() => onComponent(component.slug)}>
                    <strong>{componentTitle(component, locale)}</strong>
                    <small>{component.slug}</small>
                  </button>
                ))}
              </nav>
            </section>
          ))}
        </div>
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
  onCatalog: (target?: string) => void
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
        <button type="button" className="docs-brand" onClick={() => onCatalog("introduction")}>
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
            <p>{locale === "zh" ? "开始使用 Skill" : "Start Using Skill"}</p>
            {catalogNavigationEntries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                className={view.type === "catalog" ? "is-active" : ""}
                onClick={() => onCatalog(entry.id)}
              >
                {entry.label[locale]}
              </button>
            ))}
          </div>

          {renderMarkdownGroup("design-rules")}
          {renderMarkdownGroup("engineering-integration")}

          <div className="docs-nav-group">
            <p>{locale === "zh" ? "场景验证" : "Scenario Validation"}</p>
            {["demo-patterns", "demo-readme"].map((entryId) => {
              const entry = markdownEntriesById.get(entryId)
              return entry ? (
                <button key={entry.id} type="button" className={view.type === "markdown" && view.id === entry.id ? "is-active" : ""} onClick={() => onMarkdown(entry.id)}>
                  {entry.label[locale]}
                </button>
              ) : null
            })}
            <div className="docs-nav-subgroup">
              <span>{locale === "zh" ? "产品 Demo" : "Product Demos"}</span>
              <b>{demoEntries.length}</b>
            </div>
            {demoEntries.map((entry) => (
              <button key={entry.id} type="button" className={view.type === "demo" && view.id === entry.id ? "is-active" : ""} onClick={() => onDemo(entry.id)}>
                {entry.label[locale]}
              </button>
            ))}
          </div>

          <div className="docs-nav-group">
            <p>{locale === "zh" ? "治理与验收" : "Governance & QA"}</p>
            {governanceNavigationSections.map((section) => (
              <div key={section.id} className="docs-nav-nested-section">
                <div className="docs-nav-subgroup"><span>{section.label[locale]}</span></div>
                {section.entryIds.map((entryId) => {
                  const entry = markdownEntriesById.get(entryId)
                  return entry ? (
                    <button key={entry.id} type="button" className={view.type === "markdown" && view.id === entry.id ? "is-active" : ""} onClick={() => onMarkdown(entry.id)}>
                      {entry.label[locale]}
                    </button>
                  ) : null
                })}
              </div>
            ))}
          </div>

          <div className="docs-nav-group">
            <p>{locale === "zh" ? "组件目录" : "Component Directory"}</p>
            <div className="docs-nav-subgroup">
              <span>{locale === "zh" ? "Momcozy 定制组件" : "Momcozy Components"}</span>
              <b>{componentDocs.filter((component) => component.category === "Momcozy Components").length}</b>
            </div>
            {componentDocs.filter((component) => component.category === "Momcozy Components").map((component) => (
              <button key={component.slug} type="button" className={view.type === "component" && view.slug === component.slug ? "is-active" : ""} onClick={() => onComponent(component.slug)}>
                {componentTitle(component, locale)}
              </button>
            ))}
            <div className="docs-nav-subgroup">
              <span>{locale === "zh" ? "shadcn/ui 组件" : "shadcn/ui Components"}</span>
              <b>{componentDocs.filter((component) => component.category !== "Momcozy Components").length}</b>
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
    ? [["Skill 介绍", "introduction"], ["内容结构", "content-map"], ["适用场景", "use-cases"], ["安装 Skill", "installation"], ["第一次调用", "first-use"], ["使用流程", "workflow"], ["包结构与作用", "structure"], ["最终产出", "outcomes"], ["团队收益", "value"], ["兼容性与使用边界", "boundaries"], ["包含内容", "inventory"], ["组件总览", "component-gallery"]]
    : [["Skill overview", "introduction"], ["Content map", "content-map"], ["Use cases", "use-cases"], ["Install Skill", "installation"], ["First use", "first-use"], ["Workflow", "workflow"], ["Package structure & purpose", "structure"], ["Outcomes", "outcomes"], ["Team value", "value"], ["Compatibility & boundaries", "boundaries"], ["What is included", "inventory"], ["Component Gallery", "component-gallery"]]

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
  const [locale, setLocale] = useState<Locale>(() => window.localStorage.getItem("momcozy-ui-locale") === "en" ? "en" : "zh")
  const [date, setDate] = useState<Date | undefined>()
  const [view, setView] = useState<LibraryView>(() => {
    const component = new URLSearchParams(window.location.search).get("component")
    return component && componentDocsBySlug.has(component) ? { type: "component", slug: component } : { type: "catalog", target: "introduction" }
  })
  const [navOpen, setNavOpen] = useState(false)

  const activeMarkdown = view.type === "markdown" ? markdownEntries.find((entry) => entry.id === view.id) : undefined
  const activeComponent = view.type === "component" ? componentDocsBySlug.get(view.slug) : undefined
  const activeDemo = view.type === "demo" ? demoEntries.find((entry) => entry.id === view.id) : undefined
  const demoOrigin = import.meta.env.VITE_DEMO_ORIGIN ?? window.location.origin
  const copy = uiCopy[locale]

  const showCatalogTarget = (target = "introduction") => {
    setView({ type: "catalog", target })
    window.history.pushState({}, "", window.location.pathname)
    setNavOpen(false)
    window.setTimeout(() => {
      if (target === "introduction") {
        window.scrollTo({ top: 0, left: 0 })
        return
      }
      const id = target.match(/^(introduction|content-map|use-cases|workflow|installation|first-use|structure|outcomes|value|boundaries|inventory|component-gallery|foundations|forms|navigation|overlays|data|messaging)$/) ? target : `demo-${target}`
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
      setView(component && componentDocsBySlug.has(component) ? { type: "component", slug: component } : { type: "catalog", target: "introduction" })
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
    setView({ type: "catalog", target: "introduction" })
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
              onCatalog={showCatalogTarget}
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
              <IntroductionOverview locale={locale} onCatalogTarget={showCatalogTarget} onMarkdown={showMarkdown} onDemo={showDemo} onComponent={showComponent} />

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
