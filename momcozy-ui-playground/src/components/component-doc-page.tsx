import { useState, type ReactNode } from "react"
import { toast } from "sonner"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Add01Icon,
  AlertCircleIcon,
  ArrowDown01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Calendar03Icon,
  CheckmarkCircle01Icon,
  Copy01Icon,
  Delete02Icon,
  MoreHorizontalCircle01Icon,
  SourceCodeIcon,
  UserIcon,
} from "@hugeicons/core-free-icons"

import type { ComponentDoc, ComponentLocale } from "@/docs/component-docs"
import { componentCode, componentComposition, componentDescription, componentExampleLabel, componentTitle } from "@/docs/component-docs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/components/ui/button-group"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { LiquidGlassButton, type LiquidGlassButtonVariant } from "../../../src/components/ui/liquid-glass-button"
import { TabBar } from "../../../src/components/ui/tab-bar"
import { Title, type TitleVariant } from "../../../src/components/ui/title"
import { ToolbarTop, type ToolbarTopVariant } from "../../../src/components/ui/toolbar-top"
import { ToolbarTopSheet, type ToolbarTopSheetVariant } from "../../../src/components/ui/toolbar-top-sheet"

type ComponentDocPageProps = {
  component: ComponentDoc
  locale: ComponentLocale
  previous?: ComponentDoc
  next?: ComponentDoc
  onNavigate: (slug: string) => void
}

const componentPageCopy = {
  en: {
    copy: "Copy",
    copied: "copied",
    preview: "preview",
    viewCode: "View Code",
    hideCode: "Hide Code",
    implementation: "Implementation",
    tokens: "Momcozy 3.0 tokens",
    copyPage: "Copy Page",
    pageCopied: "Page copied",
    previous: "Previous component",
    next: "Next component",
    installation: "Installation",
    installationMethod: "Installation method",
    command: "Command",
    manual: "Manual",
    manualInstruction: "Copy the component source into your project, then keep the semantic token imports unchanged.",
    usage: "Usage",
    composition: "Composition",
    compositionLead: "The component is composed from explicit primitives so structure, content, and styling remain independently reusable.",
    accessibility: "Accessibility",
    accessibilityItems: [
      <>Interactive states retain visible focus rings through <code>--ring</code> and semantic Momcozy contrast tokens.</>,
      <>Labels, descriptions, validation, and keyboard navigation are preserved by the underlying primitive contract.</>,
      <>Motion honors reduced-motion preferences; product meaning never depends on color alone.</>,
    ],
    apiReference: "API Reference",
    export: "Export",
    purpose: "Purpose",
    tokenContract: "Token contract",
    rootPurpose: "Root component or primary primitive.",
    childPurpose: "Composable subcomponent.",
    rootTokens: "Background, foreground, border, radius, focus",
    childTokens: "Inherits semantic component tokens",
  },
  zh: {
    copy: "复制",
    copied: "已复制",
    preview: "预览",
    viewCode: "查看代码",
    hideCode: "收起代码",
    implementation: "实现方式",
    tokens: "Momcozy 3.0 Token",
    copyPage: "复制页面",
    pageCopied: "页面内容已复制",
    previous: "上一个组件",
    next: "下一个组件",
    installation: "安装",
    installationMethod: "安装方式",
    command: "命令",
    manual: "手动",
    manualInstruction: "将组件源码复制到项目中，并保留原有的语义 Token 导入。",
    usage: "用法",
    composition: "组合方式",
    compositionLead: "组件由明确的原语组合而成，结构、内容和样式可以分别复用。",
    accessibility: "可访问性",
    accessibilityItems: [
      <>交互状态通过 <code>--ring</code> 和 Momcozy 语义对比 Token 保留清晰可见的焦点环。</>,
      <>底层原语契约保留标签、说明、验证状态和键盘导航。</>,
      <>动效遵循“减少动态效果”偏好；产品含义不会只依赖颜色表达。</>,
    ],
    apiReference: "API 参考",
    export: "导出项",
    purpose: "用途",
    tokenContract: "Token 契约",
    rootPurpose: "根组件或主要原语。",
    childPurpose: "可组合子组件。",
    rootTokens: "背景、前景、边框、圆角、焦点",
    childTokens: "继承语义组件 Token",
  },
}

function localized(locale: ComponentLocale, en: string, zh: string) {
  return locale === "zh" ? zh : en
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

function CodeBlock({ code, locale, label = "Code" }: { code: string; locale: ComponentLocale; label?: string }) {
  const labels = componentPageCopy[locale]
  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    toast.success(`${label} ${componentPageCopy[locale].copied}`)
  }

  return (
    <div className="component-code-block">
      <button type="button" className="component-copy-button" onClick={copyCode} aria-label={`${labels.copy} ${label}`}>
        <HugeiconsIcon icon={Copy01Icon} strokeWidth={1.7} />
        {labels.copy}
      </button>
      <pre><code>{code}</code></pre>
    </div>
  )
}

function PreviewCodePanel({ component, locale }: { component: ComponentDoc; locale: ComponentLocale }) {
  const [showCode, setShowCode] = useState(false)
  const copy = componentPageCopy[locale]

  return (
    <section className="component-hero-panel" aria-label={`${componentTitle(component, locale)} ${copy.preview}`}>
      <div className="component-preview-surface">
        <ComponentSample component={component} variant="Preview" locale={locale} />
      </div>
      <div className={`component-source-drawer ${showCode ? "is-open" : ""}`}>
        <CodeBlock code={componentCode(component)} locale={locale} label={`${component.title} code`} />
      </div>
      <button type="button" className="component-view-code" onClick={() => setShowCode((value) => !value)}>
        <HugeiconsIcon icon={SourceCodeIcon} strokeWidth={1.7} />
        {showCode ? copy.hideCode : copy.viewCode}
      </button>
    </section>
  )
}

function AlertDialogSample({ variant, locale }: { variant: string; locale: ComponentLocale }) {
  const small = variant.toLowerCase().includes("small")
  const media = variant.toLowerCase().includes("media")
  const destructive = variant.toLowerCase().includes("destructive")

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={destructive ? "destructive" : "outline"}>{localized(locale, "Show Dialog", "打开对话框")}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size={small ? "sm" : "default"}>
        <AlertDialogHeader>
          {media ? <AlertDialogMedia><HugeiconsIcon icon={destructive ? Delete02Icon : AlertCircleIcon} strokeWidth={1.7} /></AlertDialogMedia> : null}
          <AlertDialogTitle>{destructive ? localized(locale, "Delete this routine?", "删除这项护理计划？") : localized(locale, "Are you absolutely sure?", "确认继续吗？")}</AlertDialogTitle>
          <AlertDialogDescription>
            {destructive ? localized(locale, "This action cannot be undone. The routine and its history will be removed.", "此操作无法撤销，护理计划及其历史记录都会被删除。") : localized(locale, "This action updates the connected Momcozy experience for everyone sharing this device.", "此操作会更新所有共享该设备用户的 Momcozy 体验。")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{localized(locale, "Cancel", "取消")}</AlertDialogCancel>
          <AlertDialogAction variant={destructive ? "destructive" : "default"}>{destructive ? localized(locale, "Delete", "删除") : localized(locale, "Continue", "继续")}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function FormSample({ component, locale }: { component: ComponentDoc; locale: ComponentLocale }) {
  if (component.slug === "checkbox") return <div className="flex items-center gap-3"><Checkbox id="sample-checkbox" defaultChecked /><Label htmlFor="sample-checkbox">{localized(locale, "Enable care reminders", "开启护理提醒")}</Label></div>
  if (component.slug === "switch") return <div className="flex items-center gap-3"><Switch id="sample-switch" defaultChecked /><Label htmlFor="sample-switch">{localized(locale, "Smart notifications", "智能通知")}</Label></div>
  if (component.slug === "slider") return <div className="w-full max-w-sm space-y-3"><div className="flex justify-between text-sm"><Label>{localized(locale, "Comfort level", "舒适度")}</Label><span className="text-muted-foreground">68%</span></div><Slider defaultValue={[68]} /></div>
  if (component.slug === "radio-group") return <RadioGroup defaultValue="balanced" className="w-full max-w-sm"><div className="flex items-center gap-3"><RadioGroupItem value="gentle" id="gentle" /><Label htmlFor="gentle">{localized(locale, "Gentle", "轻柔")}</Label></div><div className="flex items-center gap-3"><RadioGroupItem value="balanced" id="balanced" /><Label htmlFor="balanced">{localized(locale, "Balanced", "均衡")}</Label></div></RadioGroup>
  if (component.slug === "textarea") return <div className="w-full max-w-md space-y-2"><Label htmlFor="care-notes">{localized(locale, "Care notes", "护理记录")}</Label><Textarea id="care-notes" placeholder={localized(locale, "Add a note for the next session…", "记录下次使用需要注意的内容…")} /></div>
  if (["select", "native-select", "combobox"].includes(component.slug)) return <Select defaultValue="s12"><SelectTrigger className="w-full max-w-sm"><SelectValue placeholder={localized(locale, "Choose a device", "选择设备")} /></SelectTrigger><SelectContent><SelectItem value="s12">S12 Pro</SelectItem><SelectItem value="air">Air 1</SelectItem><SelectItem value="bm03">BM03 Monitor</SelectItem></SelectContent></Select>
  if (component.slug === "input-otp") return <div className="flex items-center gap-2"><Input className="w-14 text-center" maxLength={1} defaultValue="2" /><Input className="w-14 text-center" maxLength={1} /><Input className="w-14 text-center" maxLength={1} /><Separator orientation="vertical" className="h-8" /><Input className="w-14 text-center" maxLength={1} /><Input className="w-14 text-center" maxLength={1} /></div>
  return <div className="w-full max-w-md space-y-2"><Label htmlFor={`sample-${component.slug}`}>{componentTitle(component, locale)}</Label><Input id={`sample-${component.slug}`} placeholder={localized(locale, `Enter ${component.title.toLowerCase()}…`, `请输入${componentTitle(component, locale)}…`)} /><p className="text-xs text-muted-foreground">{localized(locale, "Uses Momcozy field, border, focus, and validation tokens.", "使用 Momcozy 字段、边框、焦点和验证 Token。")}</p></div>
}

function NavigationSample({ component, locale }: { component: ComponentDoc; locale: ComponentLocale }) {
  if (component.slug === "accordion" || component.slug === "collapsible") return <Accordion type="single" collapsible className="w-full max-w-md"><AccordionItem value="one"><AccordionTrigger>{localized(locale, "How are tokens applied?", "Token 如何应用？")}</AccordionTrigger><AccordionContent>{localized(locale, "Every state resolves through Momcozy semantic tokens.", "每个状态都由 Momcozy 语义 Token 解析。")}</AccordionContent></AccordionItem><AccordionItem value="two"><AccordionTrigger>{localized(locale, "Does dark mode work?", "是否支持深色模式？")}</AccordionTrigger><AccordionContent>{localized(locale, "The same component contract maps to the dark theme.", "同一套组件契约会映射到深色主题。")}</AccordionContent></AccordionItem></Accordion>
  if (component.slug === "tabs") return <Tabs defaultValue="preview" className="w-full max-w-md"><TabsList><TabsTrigger value="preview">{localized(locale, "Preview", "预览")}</TabsTrigger><TabsTrigger value="code">{localized(locale, "Code", "代码")}</TabsTrigger><TabsTrigger value="tokens">Token</TabsTrigger></TabsList><TabsContent value="preview" className="rounded-xl border p-5 text-sm">{localized(locale, "Rendered with Momcozy tokens.", "使用 Momcozy Token 渲染。")}</TabsContent><TabsContent value="code" className="rounded-xl border p-5 font-mono text-sm">&lt;Tabs /&gt;</TabsContent><TabsContent value="tokens" className="rounded-xl border p-5 text-sm">var(--primary)</TabsContent></Tabs>
  if (component.slug === "breadcrumb") return <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="#">{localized(locale, "Docs", "文档")}</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink href="#">{localized(locale, "Components", "组件")}</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>{componentTitle(component, locale)}</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
  if (component.slug === "pagination") return <Pagination aria-label={localized(locale, "pagination", "分页")}><PaginationContent><PaginationItem><PaginationPrevious href="#" text={localized(locale, "Previous", "上一页")} aria-label={localized(locale, "Go to previous page", "前往上一页")} /></PaginationItem><PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem><PaginationItem><PaginationEllipsis label={localized(locale, "More pages", "更多页面")} /></PaginationItem><PaginationItem><PaginationNext href="#" text={localized(locale, "Next", "下一页")} aria-label={localized(locale, "Go to next page", "前往下一页")} /></PaginationItem></PaginationContent></Pagination>
  return <div className="flex flex-wrap items-center gap-2"><Button variant="ghost">{localized(locale, "Overview", "总览")}</Button><Button variant="secondary">{localized(locale, "Components", "组件")}</Button><Button variant="ghost">Token</Button><Button variant="ghost">{localized(locale, "Guides", "指南")}</Button></div>
}

function DataSample({ component, locale }: { component: ComponentDoc; locale: ComponentLocale }) {
  if (component.slug === "progress") return <div className="w-full max-w-md space-y-3"><div className="flex justify-between text-sm"><span>{localized(locale, "Component coverage", "组件覆盖率")}</span><span className="text-muted-foreground">82%</span></div><Progress value={82} /></div>
  if (component.slug === "skeleton") return <div className="flex w-full max-w-md items-center gap-4"><Skeleton className="size-12 rounded-full" /><div className="flex-1 space-y-2"><Skeleton className="h-3 w-2/3" /><Skeleton className="h-3 w-full" /></div></div>
  if (component.slug === "spinner") return <div className="flex items-center gap-3 text-sm"><Spinner /><span>{localized(locale, "Loading Momcozy components…", "正在加载 Momcozy 组件…")}</span></div>
  return <Table className="w-full max-w-xl"><TableHeader><TableRow><TableHead>{localized(locale, "Device", "设备")}</TableHead><TableHead>{localized(locale, "Status", "状态")}</TableHead><TableHead className="text-right">{localized(locale, "Battery", "电量")}</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell className="font-medium">S12 Pro</TableCell><TableCell><Badge>{localized(locale, "Connected", "已连接")}</Badge></TableCell><TableCell className="text-right">84%</TableCell></TableRow><TableRow><TableCell className="font-medium">Air 1</TableCell><TableCell><Badge variant="secondary">{localized(locale, "Charging", "充电中")}</Badge></TableCell><TableCell className="text-right">62%</TableCell></TableRow></TableBody></Table>
}

function FoundationSample({ component, locale }: { component: ComponentDoc; locale: ComponentLocale }) {
  if (component.slug === "button") return <div className="flex flex-wrap items-center justify-center gap-2"><Button>{localized(locale, "Primary", "主要操作")}</Button><Button variant="secondary">{localized(locale, "Secondary", "次要操作")}</Button><Button variant="outline">{localized(locale, "Outline", "描边")}</Button><Button variant="ghost">{localized(locale, "Ghost", "幽灵")}</Button><Button variant="destructive">{localized(locale, "Delete", "删除")}</Button><Button size="icon"><HugeiconsIcon icon={Add01Icon} strokeWidth={1.8} /></Button></div>
  if (component.slug === "button-group") return <ButtonGroup><Button variant="outline">{localized(locale, "Save", "保存")}</Button><ButtonGroupSeparator /><ButtonGroupText>⌘S</ButtonGroupText></ButtonGroup>
  if (component.slug === "avatar") return <div className="flex items-center gap-6"><Avatar className="size-14"><AvatarFallback>MC</AvatarFallback><AvatarBadge className="bg-green-500" /></Avatar><AvatarGroup><Avatar><AvatarFallback>CL</AvatarFallback></Avatar><Avatar><AvatarFallback>BN</AvatarFallback></Avatar><AvatarGroupCount>+4</AvatarGroupCount></AvatarGroup></div>
  if (component.slug === "badge") return <div className="flex flex-wrap items-center gap-2"><Badge>{localized(locale, "Active", "启用")}</Badge><Badge variant="secondary">{localized(locale, "Draft", "草稿")}</Badge><Badge variant="outline">{localized(locale, "Beta", "测试版")}</Badge><Badge variant="destructive">{localized(locale, "Error", "错误")}</Badge></div>
  if (component.slug === "kbd") return <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
  if (component.slug === "toggle-group" || component.slug === "toggle") return <ToggleGroup type="single" defaultValue="day" variant="outline"><ToggleGroupItem value="day">D</ToggleGroupItem><ToggleGroupItem value="week">W</ToggleGroupItem><ToggleGroupItem value="month">M</ToggleGroupItem></ToggleGroup>
  if (component.slug === "typography") return <div className="space-y-4 text-left"><h2 className="font-heading text-4xl">{localized(locale, "Care, connected.", "照护，始终相连。")}</h2><p className="max-w-md text-muted-foreground">{localized(locale, "Exposure carries Momcozy editorial character. Aeonik keeps product content clear and calm.", "Exposure 呈现 Momcozy 的编辑气质；Aeonik 让产品内容保持清晰、平和。")}</p><p className="text-sm font-semibold">Momcozy UI · Typography Token</p></div>
  return <Card className="w-full max-w-md"><CardHeader><CardTitle>{componentTitle(component, locale)}</CardTitle><CardDescription>{localized(locale, "Rendered with the Momcozy 3.0 semantic theme.", "使用 Momcozy 3.0 语义主题渲染。")}</CardDescription><CardAction><Button variant="ghost" size="icon"><HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={1.7} /></Button></CardAction></CardHeader><CardContent><p className="text-sm text-muted-foreground">{localized(locale, "Warm, precise, and built from the shared component contract.", "温和、准确，并由统一的组件契约构建。")}</p></CardContent><CardFooter><Button className="w-full">{localized(locale, "Continue", "继续")}</Button></CardFooter></Card>
}

function MessagingSample({ component, locale }: { component: ComponentDoc; locale: ComponentLocale }) {
  if (component.slug === "alert") return <div className="w-full max-w-xl space-y-3"><Alert><HugeiconsIcon icon={CheckmarkCircle01Icon} strokeWidth={1.8} /><AlertTitle>{localized(locale, "Device is ready", "设备已就绪")}</AlertTitle><AlertDescription>{localized(locale, "Your Momcozy settings have been synced.", "Momcozy 设置已同步。")}</AlertDescription><AlertAction><Button size="xs" variant="ghost">{localized(locale, "View", "查看")}</Button></AlertAction></Alert><Alert variant="destructive"><HugeiconsIcon icon={AlertCircleIcon} strokeWidth={1.8} /><AlertTitle>{localized(locale, "Connection lost", "连接已断开")}</AlertTitle><AlertDescription>{localized(locale, "Check Bluetooth and try again.", "请检查蓝牙后重试。")}</AlertDescription></Alert></div>
  if (component.slug === "empty") return <div className="grid max-w-md place-items-center gap-3 text-center"><span className="grid size-12 place-items-center rounded-full bg-muted"><HugeiconsIcon icon={Calendar03Icon} strokeWidth={1.7} /></span><div><h3 className="font-heading text-xl">{localized(locale, "No routines yet", "还没有护理计划")}</h3><p className="mt-1 text-sm text-muted-foreground">{localized(locale, "Create a routine to see it here.", "创建后会显示在这里。")}</p></div><Button size="sm"><HugeiconsIcon icon={Add01Icon} strokeWidth={1.8} />{localized(locale, "Create routine", "创建计划")}</Button></div>
  return <div className="flex w-full max-w-lg items-start gap-3"><Avatar><AvatarFallback><HugeiconsIcon icon={UserIcon} strokeWidth={1.7} /></AvatarFallback></Avatar><div className="rounded-2xl rounded-tl-md bg-secondary px-4 py-3"><p className="text-sm">{localized(locale, `${component.title} is connected to the Momcozy token theme.`, `${componentTitle(component, locale)}已接入 Momcozy Token 主题。`)}</p><p className="mt-2 text-xs text-muted-foreground">{localized(locale, "Just now", "刚刚")}</p></div></div>
}

const toolbarTopVariants: readonly ToolbarTopVariant[] = ["home", "community", "segmented-control", "title-one-line-left", "title-two-line-left", "title-one-line", "title-two-line", "no-title", "device"]
const toolbarTopSheetVariants: readonly ToolbarTopSheetVariant[] = ["large-title", "large-title-two-line", "compact-default"]
const liquidGlassVariants: readonly LiquidGlassButtonVariant[] = ["icon", "icon-primary", "two-icons", "four-icons", "text", "text-primary", "icon-text"]
const titleVariants: readonly TitleVariant[] = ["mom-baby", "mom", "baby", "body-title", "large-title", "body-title-two-line"]

const variantZh: Record<string, string> = {
  home: "首页",
  community: "社区",
  "segmented-control": "分段控制",
  "title-one-line-left": "左对齐单行标题",
  "title-two-line-left": "左对齐双行标题",
  "title-one-line": "单行标题",
  "title-two-line": "双行标题",
  "no-title": "无标题",
  device: "设备",
  "large-title": "大标题",
  "large-title-two-line": "双行大标题",
  "compact-default": "默认紧凑型",
  icon: "图标",
  "icon-primary": "主要图标",
  "two-icons": "双图标",
  "four-icons": "四图标",
  text: "文字",
  "text-primary": "主要文字",
  "icon-text": "图标加文字",
  "mom-baby": "妈妈与宝宝",
  mom: "妈妈",
  baby: "宝宝",
  "body-title": "正文标题",
  "body-title-two-line": "双行正文标题",
}

function variantLabel(value: string, locale: ComponentLocale) {
  return locale === "zh" ? variantZh[value] ?? value : value.replaceAll("-", " ")
}

function PreviewLabel({ children }: { children: ReactNode }) {
  return <span className="component-momcozy-preview__label">{children}</span>
}

function MomcozyComponentSample({ component, variant, locale }: { component: ComponentDoc; variant: string; locale: ComponentLocale }) {
  if (component.slug === "toolbar-top") {
    const visibleVariants = variant === "Interaction States"
      ? toolbarTopVariants.slice(1, 3)
      : variant === "Token Mapping"
        ? toolbarTopVariants.slice(3, 6)
        : toolbarTopVariants
    return <div className="component-momcozy-preview component-momcozy-preview--stack">{visibleVariants.map((item) => <div className="component-momcozy-preview__row" key={item}><PreviewLabel>{variantLabel(item, locale)}</PreviewLabel><ToolbarTop variant={item} /></div>)}</div>
  }
  if (component.slug === "toolbar-top-sheet") {
    return <div className="component-momcozy-preview component-momcozy-preview--stack">{toolbarTopSheetVariants.map((item) => <div className="component-momcozy-preview__row" key={item}><PreviewLabel>{variantLabel(item, locale)}</PreviewLabel><ToolbarTopSheet variant={item} /></div>)}</div>
  }
  if (component.slug === "liquid-glass-buttons") {
    const visibleVariants = variant === "Single Button"
      ? liquidGlassVariants.filter((item) => !item.includes("icons"))
      : variant === "Button Group"
        ? liquidGlassVariants.filter((item) => item.includes("icons"))
        : liquidGlassVariants
    return <div className={`component-momcozy-preview component-momcozy-preview--buttons ${variant === "Dark Surface" ? "dark" : ""}`}>{visibleVariants.map((item) => <div className="component-momcozy-preview__button" key={item}><LiquidGlassButton variant={item} /><PreviewLabel>{variantLabel(item, locale)}</PreviewLabel></div>)}</div>
  }
  if (component.slug === "title") {
    return <div className="component-momcozy-preview component-momcozy-preview--stack">{titleVariants.map((item) => <div className="component-momcozy-preview__row" key={item}><PreviewLabel>{variantLabel(item, locale)}</PreviewLabel><Title variant={item} /></div>)}</div>
  }
  if (component.slug === "tab-bar") {
    return <div className="component-momcozy-preview component-momcozy-preview--tab-bar"><TabBar /></div>
  }
  return null
}

function ComponentSample({ component, variant, locale }: { component: ComponentDoc; variant: string; locale: ComponentLocale }) {
  if (component.customPath) return <MomcozyComponentSample component={component} variant={variant} locale={locale} />
  if (component.slug === "alert-dialog") return <AlertDialogSample variant={variant} locale={locale} />
  if (component.category === "Forms") return <FormSample component={component} locale={locale} />
  if (component.category === "Navigation") return <NavigationSample component={component} locale={locale} />
  if (component.category === "Data") return <DataSample component={component} locale={locale} />
  if (component.category === "Messaging") return <MessagingSample component={component} locale={locale} />
  if (component.category === "Overlays") return <AlertDialogSample variant={variant} locale={locale} />
  return <FoundationSample component={component} locale={locale} />
}

function DocSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="component-doc-section"><h2>{title}</h2>{children}</section>
}

export function ComponentDocPage({ component, locale, previous, next, onNavigate }: ComponentDocPageProps) {
  const [installMode, setInstallMode] = useState<"command" | "manual">("command")
  const [packageManager, setPackageManager] = useState("pnpm")
  const copy = componentPageCopy[locale]
  const command = component.customPath
    ? `cp src/components/ui/${component.slug === "liquid-glass-buttons" ? "liquid-glass-button" : component.slug}.tsx your-app/src/components/ui/`
    : packageManager === "pnpm"
      ? `pnpm dlx shadcn@latest add ${component.slug}`
      : packageManager === "npm"
        ? `npx shadcn@latest add ${component.slug}`
        : packageManager === "yarn"
          ? `yarn dlx shadcn@latest add ${component.slug}`
          : `bunx --bun shadcn@latest add ${component.slug}`
  const imports = `import {\n  ${component.exports.filter((name) => !name.includes(" ")).slice(0, 8).join(",\n  ")}\n} from "${component.source}"`

  const copyPage = async () => {
    await navigator.clipboard.writeText(`${component.title}\n\n${component.description}\n\n${componentCode(component)}`)
    toast.success(copy.pageCopied)
  }

  return (
    <article className="component-doc-page">
      <header className="component-doc-heading">
        <div className="component-doc-heading-main">
          <h1>{componentTitle(component, locale)}</h1>
          <p>{componentDescription(component, locale)}</p>
          <div className="component-runtime-tabs" role="tablist" aria-label={copy.implementation}>
            <button type="button" className="is-active" role="tab" aria-selected="true">{component.customPath ? "Momcozy React" : "Radix UI"}</button>
            <span>{copy.tokens}</span>
          </div>
        </div>
        <div className="component-heading-actions">
          <Button variant="secondary" size="sm" className="component-copy-page" onClick={copyPage}><HugeiconsIcon icon={Copy01Icon} strokeWidth={1.7} />{copy.copyPage}<HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={1.7} /></Button>
          <Button variant="ghost" size="icon-sm" aria-label={`${copy.previous}${previous ? `：${componentTitle(previous, locale)}` : ""}`} disabled={!previous} onClick={() => previous && onNavigate(previous.slug)}><HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={1.7} /></Button>
          <Button variant="ghost" size="icon-sm" aria-label={`${copy.next}${next ? `：${componentTitle(next, locale)}` : ""}`} disabled={!next} onClick={() => next && onNavigate(next.slug)}><HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={1.7} /></Button>
        </div>
      </header>

      <PreviewCodePanel component={component} locale={locale} />

      <DocSection id="installation" title={copy.installation}>
        <div className="component-subtabs" role="tablist" aria-label={copy.installationMethod}>
          <button type="button" role="tab" aria-selected={installMode === "command"} className={installMode === "command" ? "is-active" : ""} onClick={() => setInstallMode("command")}>{copy.command}</button>
          <button type="button" role="tab" aria-selected={installMode === "manual"} className={installMode === "manual" ? "is-active" : ""} onClick={() => setInstallMode("manual")}>{copy.manual}</button>
        </div>
        {installMode === "command" ? <div className="component-install-card"><div className="component-package-tabs">{["pnpm", "npm", "yarn", "bun"].map((manager) => <button key={manager} type="button" className={packageManager === manager ? "is-active" : ""} onClick={() => setPackageManager(manager)}>{manager}</button>)}</div><CodeBlock code={command} locale={locale} label="install command" /></div> : <CodeBlock code={`${copy.manualInstruction}\n\n${imports}`} locale={locale} label="manual installation" />}
      </DocSection>

      <DocSection id="usage" title={copy.usage}><CodeBlock code={imports} locale={locale} label={`${component.title} import`} /><CodeBlock code={componentCode(component)} locale={locale} label={`${component.title} usage`} /></DocSection>
      <DocSection id="composition" title={copy.composition}><p className="component-section-lead">{copy.compositionLead}</p><CodeBlock code={componentComposition(component)} locale={locale} label={`${component.title} composition`} /></DocSection>

      {component.examples.map((example) => (
        <DocSection key={example} id={`example-${slugify(example)}`} title={componentExampleLabel(example, locale)}>
          <div className="component-example-card">
            <div className="component-example-preview"><ComponentSample component={component} variant={example} locale={locale} /></div>
            <div className="component-example-caption"><span>{componentTitle(component, locale)}</span><code>{example}</code></div>
          </div>
        </DocSection>
      ))}

      <DocSection id="accessibility" title={copy.accessibility}>
        <ul className="component-guidance-list">
          {copy.accessibilityItems.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </DocSection>

      <DocSection id="api-reference" title={copy.apiReference}>
        <div className="component-api-table-wrap"><table className="component-api-table"><thead><tr><th>{copy.export}</th><th>{copy.purpose}</th><th>{copy.tokenContract}</th></tr></thead><tbody>{component.exports.map((name, index) => <tr key={name}><td><code>{name}</code></td><td>{index === 0 ? copy.rootPurpose : copy.childPurpose}</td><td>{index === 0 ? copy.rootTokens : copy.childTokens}</td></tr>)}</tbody></table></div>
      </DocSection>
    </article>
  )
}
