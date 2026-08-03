# Token 映射

## 目录

- [来源](#来源)
- [字体映射](#字体映射)
- [命名规范化](#命名规范化)
- [分层](#分层)
- [shadcn/ui 映射](#shadcnui-映射)
- [Light 与 Dark](#light-与-dark)
- [源文件注意点](#源文件注意点)

## 来源

以 `../assets/` 中的原始 Figma CSS 导出作为源头：

- Light：`momcozy-light.raw.css`
- Dark：`momcozy-dark.raw.css`

当前源文件包含 font theme、typography、colors、opacity、spacing、radius、shadows、status，以及 primitive numeric tokens。

## 字体映射

| token | 用途 | 实现建议 |
| --- | --- | --- |
| `--Font-theme-Font-Brand` | 品牌标题字体 | 映射为 `--font-brand: "Exposure[-10]"` |
| `--Font-theme-Font-Plain` | 正文与产品 UI 字体 | 映射为 `--font-sans: "Aeonik Soft Pro", ui-sans-serif, system-ui, sans-serif` |
| `--Font-theme-Weight-Light` | UI 轻字重 | 映射为 `font-weight: 300` |
| `--Font-theme-Weight-Regular` | UI 常规字重 | 映射为 `font-weight: 400` |
| `--Font-theme-Weight-Medium` | UI 中等字重 | 映射为 `font-weight: 500` |
| `--Font-theme-Weight-Bold` | UI 强调字重 | 当前映射为 SemiBold，即 `font-weight: 600` |

`Exposure[-10]` 的 OTF 文件已放入 `assets/fonts/exposure/`。`Aeonik Soft Pro` 的 Light、Regular、Medium、SemiBold OTF 文件已放入 `assets/fonts/aeonik-soft-pro/`。在 CSS 中使用这两个字体名时都要加引号。

## 命名规范化

在把变量交付到应用中之前，先规范化生成后的变量名：

- 变量名统一小写。
- 把逗号替换成连字符：`--Tokens-0,5` 转成 `--tokens-0-5`。
- 保留原始 token 的概念，但对实现侧暴露更干净的变量名。
- 即使原始 Momcozy 变量名后续调整，也要保持 shadcn/ui 变量稳定。

不要在生产 CSS 中直接依赖 `var(--Tokens-0,5)` 这类带逗号的变量，因为 CSS 可能把逗号理解为变量 fallback 语法的一部分。

## 分层

使用三层 token：

1. Primitive tokens：数字值、色板、透明度、圆角、字体族。
2. Momcozy semantic tokens：背景、边框、文本、Fills（容器填充）和 Labels（容器上的文字/图标）。
3. shadcn/ui semantic tokens：`--background`、`--foreground`、`--primary`、`--border`、`--ring` 等。

生成 CSS 时尽量保留这三层。这样更容易调试，也让设计师后续更新 Figma 导出时，不需要重写组件代码。

颜色语义详见 `references/color-system.md`。关键规则：`Fills` 用于按钮、胶囊、状态容器等组件的填充面；`Labels` 用于这些填充面上的文字和图标。普通正文颜色继续使用 `Colors / Text`，页面背景继续使用 `Colors / Backgrouds`。

基础层规则详见 `references/foundation-tokens.md`。关键规则：opacity 使用 0-100 的透明度阶梯；spacing 的 Heights 与 Widths 共享同一套尺度；radius 保留 Figma 的原始命名和值；shadow 当前是阴影尺度值，不是完整 `box-shadow` 配方；status 使用固定色值叠加 25/50/75 透明度。

## shadcn/ui 映射

默认映射：

| shadcn 变量 | Momcozy 来源 |
| --- | --- |
| `--background` | `--Colors-Backgrouds-Primary` |
| `--foreground` | `--Colors-Text-color-text-primary` |
| `--card` | `--Colors-Backgrouds-Secondary` |
| `--card-foreground` | `--Colors-Text-color-text-primary` |
| `--popover` | `--Colors-Backgrouds-Secondary` |
| `--popover-foreground` | `--Colors-Text-color-text-primary` |
| `--primary` | `--Colors-Grays-900` |
| `--primary-foreground` | `--Colors-Grays-0` |
| `--secondary` | `--Colors-Grays-100` |
| `--secondary-foreground` | `--Colors-Grays-900` |
| `--muted` | `--Colors-Grays-100` |
| `--muted-foreground` | `--Colors-Text-color-text-secondary` |
| `--accent` | `--Colors-Grays-150` |
| `--accent-foreground` | `--Colors-Grays-900` |
| `--destructive` | `--Status-Danger-75` |
| `--destructive-foreground` | `--Colors-Grays-White` |
| `--border` | `--Colors-Border-Primary` |
| `--input` | `--Colors-Border-Primary` |
| `--ring` | `--Colors-Grays-900` |
| `--radius` | 如果存在则使用 `--Radius-md`，否则使用 `--Tokens-8`；不要覆盖 Figma 原始的 `--radius-sm/md/lg/xl` |

品牌变体：

- Grays：主品牌基础色系，用于全局背景、正文、标题、边框、分割线和默认中性色表达。
- Mom：产品品类色系，用于吸奶器、盆底肌修复仪、光疗仪、电疗坐垫、腰腹按摩椅、瑜伽球、胎心仪、孕激素检测仪、疤痕仪、红外光乳房贴、智能乳盾等产品。
- Care：安抚看护色系，用于体重秤、BBM、白噪音、婴儿床、电动摇椅、智能袜、AI玩具等产品。
- Parenting：养育色系，用于毛巾加热桶、调奶器、暖奶器、尿布台体重秤等产品。
- Family：家庭（环境健康）色系，用于清洗机、加湿器、净化器、雾化器、母婴冰箱等产品。

说明：Mom、Care、Parenting、Family 是产品线或场景色系，不作为默认主品牌色。默认 shadcn/ui 主题先使用 Grays；当页面或组件明确归属某条产品线时，再引入对应产品线色。

## Light 与 Dark

应用 CSS 中优先使用这种结构：

```css
:root {
  /* 规范化后的 light tokens */
  --background: var(--colors-backgrouds-primary);
}

.dark {
  /* 规范化后的 dark tokens */
  --background: var(--colors-backgrouds-primary);
}
```

当前 dark 导出不只改变颜色，也改变了部分 typography 和 primitive numeric tokens。只有在设计文件确认这是设计意图时，才把它视为有意差异。否则，建议 spacing、radius、typography 等基础 token 共用，只让语义颜色随模式切换。

## 源文件注意点

- 源 token 中 `Backgrouds` 是拼写错误。为了兼容旧导出可以保留，但不要再创建新的错误拼写公共别名。
- 原始导出可能引用 `--0`、`--5`、`--100`、`--9999`、`--Opacity-opacity-20` 这类 shorthand 变量。
- 随附转换脚本会为常见 shorthand 引用补充别名。如果后续出现新的 shorthand 引用，扩展脚本里的 alias 逻辑，或回到 Figma 导出中修正。
- `Exposure[-10]` 字体资产已放在 `assets/fonts/exposure/`；`Aeonik Soft Pro` UI 字体资产已放在 `assets/fonts/aeonik-soft-pro/`。
