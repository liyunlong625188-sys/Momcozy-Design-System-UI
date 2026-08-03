# 颜色系统

## 目录

- [覆盖范围](#覆盖范围)
- [Grays](#grays)
- [Brands](#brands)
- [Backgrouds](#backgrouds)
- [Border](#border)
- [Text](#text)
- [Semantic / Fills](#semantic--fills)
- [Semantic / Labels](#semantic--labels)
- [按钮配对规则](#按钮配对规则)
- [与 shadcn/ui 的关系](#与-shadcnui-的关系)
- [Status](#status)

## 覆盖范围

最新 Figma `App 3.0 Design` 集合显示 Colors 共 123 个 token。当前 skill 的 raw CSS 仍以此前 83 个 Colors token 的完整导出为基础；本次已同步截图能够确认的语义更新：`Semantic / Labels / {Mom, Care, Parenting, Family} / Primary` 统一引用 `Colors / Grays / 0`。

新版新增或拆分出的 `White`、`Black`、`Warning`、`Success`、`Danger` 共 40 个 token，截图只展示了分组数量，没有展示完整变量名和 light/dark 数值。在取得新版 Figma CSS 或 JSON 导出前，不推测这些值，也不把它们写入 raw token 源文件。

- `Fills`：填充的容器色，例如主按钮背景、二级按钮背景、禁用按钮背景、按下态背景、胶囊或状态容器底色。
- `Labels`：这些填充容器上的文字和图标色，例如按钮文字、按钮图标、胶囊文字、状态容器里的文字/图标。
- 普通正文不要用 `Labels`，继续使用 `Colors / Text`。页面或区域背景不要用 `Fills`，继续使用 `Colors / Backgrouds`。
- `Backgrouds` 是源 Figma token 的历史拼写，代码中保留这个名字以兼容导出。

## Grays

`Grays` 是主品牌基础中性色，用于全局背景、正文、标题、边框、分割线和默认 shadcn/ui 中性色表达。

兼容说明：当前 raw CSS 中 `White` 与 `Black` 仍沿用旧导出的 `Colors / Grays / White` 和 `Colors / Grays / Black`；新版 Figma 已将 `White`、`Black` 拆为独立分组，待完整导出后再迁移变量结构。

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `1000` | `--colors-grays-1000` | `#000000` | `#FFFFFF` | 基础中性色 |
| `900` | `--colors-grays-900` | `#240F1B` | `#F7F3F6` | 基础中性色 |
| `600` | `--colors-grays-600` | `#9F969B` | `#938E93` | 基础中性色 |
| `500` | `--colors-grays-500` | `#BDB7BA` | `#676267` | 基础中性色 |
| `300` | `--colors-grays-300` | `#D3CFD1` | `#4A484A` | 基础中性色 |
| `200` | `--colors-grays-200` | `#E4E2E3` | `#3C3A3C` | 基础中性色 |
| `150` | `--colors-grays-150` | `#E9E8E7` | `#2E2C2E` | 基础中性色 |
| `100` | `--colors-grays-100` | `#F0EEEF` | `#1E1C1E` | 基础中性色 |
| `50` | `--colors-grays-50` | `#F9F7F5` | `#000000` | 基础中性色 |
| `0` | `--colors-grays-0` | `#FFFFFF` | `#1C1C1E` | 基础中性色 |
| `White` | `--colors-grays-white` | `#FFFFFF` | `#FFFFFF` | 基础中性色 |
| `Black` | `--colors-grays-black` | `#000000` | `#000000` | 基础中性色 |

## Brands

`Brands` 是产品线色板，不是默认主品牌色。默认主题先使用 `Grays`；页面或组件明确属于某条产品线时，再使用对应产品线色。

### Mom

Mom 产品线：吸奶器、盆底肌修复仪、光疗仪、电疗坐垫、腰腹按摩椅、瑜伽球、胎心仪、孕激素检测仪、疤痕仪、红外光乳房贴、智能乳盾等。

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `50` | `--colors-brands-mom-50` | `#FFF7F8` | `#291316` | 产品线色阶 |
| `75` | `--colors-brands-mom-75` | `#FFF1F3` | `#33191D` | 产品线色阶 |
| `100` | `--colors-brands-mom-100` | `#FFDDE1` | `#3D1E23` | 产品线色阶 |
| `300` | `--colors-brands-mom-300` | `#FFC0CB` | `#804C54` | 产品线色阶 |
| `500` | `--colors-brands-mom-500` | `#EE9CA7` | `#C7828B` | 产品线色阶 |
| `700` | `--colors-brands-mom-700` | `#770523` | `#E5A3AB` | 产品线色阶 |
| `900` | `--colors-brands-mom-900` | `#3E0010` | `#F9C9CF` | 产品线色阶 |

### Care

Care 安抚看护：体重秤、BBM、白噪音、婴儿床、电动摇椅、智能袜、AI玩具等。

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `100` | `--colors-brands-care-100` | `#F4F2FF` | `#2C2145` | 产品线色阶 |
| `300` | `--colors-brands-care-300` | `#C8BDFF` | `#64518E` | 产品线色阶 |
| `400` | `--colors-brands-care-400` | `#A490DE` | `#816BB4` | 产品线色阶 |
| `500` | `--colors-brands-care-500` | `#8568C2` | `#A088D9` | 产品线色阶 |
| `700` | `--colors-brands-care-700` | `#552C95` | `#BEA9F5` | 产品线色阶 |
| `900` | `--colors-brands-care-900` | `#160038` | `#DBCFFF` | 产品线色阶 |

### Parenting

Parenting 养育：毛巾加热桶、调奶器、暖奶器、尿布台体重秤等。

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `50` | `--colors-brands-parenting-50` | `#FEFBF1` | `#261700` | 产品线色阶 |
| `100` | `--colors-brands-parenting-100` | `#FFF7BD` | `#392400` | 产品线色阶 |
| `200` | `--colors-brands-parenting-200` | `#FCEE9D` | `#533703` | 产品线色阶 |
| `300` | `--colors-brands-parenting-300` | `#F0CB58` | `#7A5615` | 产品线色阶 |
| `500` | `--colors-brands-parenting-500` | `#DDA448` | `#BF8E40` | 产品线色阶 |
| `700` | `--colors-brands-parenting-700` | `#7E451F` | `#DCAF6A` | 产品线色阶 |
| `900` | `--colors-brands-parenting-900` | `#401B0D` | `#F2D2A4` | 产品线色阶 |

### Family

Family 家庭（环境健康）：清洗机、加湿器、净化器、雾化器、母婴冰箱等。

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `100` | `--colors-brands-family-100` | `#F0F9F0` | `#0B3121` | 产品线色阶 |
| `300` | `--colors-brands-family-300` | `#B7E5BA` | `#2F6B50` | 产品线色阶 |
| `400` | `--colors-brands-family-400` | `#5CA87C` | `#448B6A` | 产品线色阶 |
| `500` | `--colors-brands-family-500` | `#288760` | `#5EAB86` | 产品线色阶 |
| `700` | `--colors-brands-family-700` | `#1A5140` | `#84C9A6` | 产品线色阶 |
| `900` | `--colors-brands-family-900` | `#002D1F` | `#B6E4CC` | 产品线色阶 |

## Backgrouds

页面与区域背景色。不要把 `Fills` 当作页面背景。

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `Primary` | `--colors-backgrouds-primary` | `#F9F7F5` | `#000000` | 页面主背景 |
| `Secondary` | `--colors-backgrouds-secondary` | `#FFFFFF` | `#1C1C1E` | 卡片、弹窗、局部面板背景 |

## Border

边框颜色与边框宽度。颜色用于分割线、输入框边框、卡片描边；宽度当前 primary 与 secondary 都是 `0.5px`。

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `Primary` | `--colors-border-primary` | `#E4E2E3` | `#3C3A3C` | 主要边框 |
| `Secondary` | `--colors-border-secondary` | `#F0EEEF` | `#1E1C1E` | 次级边框 |
| `Width / Primary` | `--colors-border-width-primary` | `0.5px` | `0.5px` | 主要边框宽度 |
| `Width / Secondary` | `--colors-border-width-secondary` | `0.5px` | `0.5px` | 次级边框宽度 |

## Text

普通内容文本色。按钮文字、胶囊文字、状态容器文字应使用 `Semantic / Labels`。

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `color text primary` | `--colors-text-color-text-primary` | `#240F1B` | `#F7F3F6` | 核心标题、正文主信息 |
| `color text secondary` | `--colors-text-color-text-secondary` | `#9F969B` | `#938E93` | 辅助正文、说明信息 |
| `color text tertiary` | `--colors-text-color-text-tertiary` | `#BDB7BA` | `#676267` | 弱提示、低强调标签 |
| `color text quaternary` | `--colors-text-color-text-quaternary` | `#E4E2E3` | `#3C3A3C` | 禁用文本或装饰性文本 |
| `color text inverse` | `--colors-text-color-text-inverse` | `#FFFFFF` | `#1C1C1E` | 反色文本 |

## Semantic / Fills

`Fills` 是填充容器色，最典型就是按钮背景。`Primary` 或 `Default` 是主按钮背景；`Secondary` 是二级按钮背景；`Disabled` 是禁用容器；`Pressed` 是按下态容器。

### Fills / Mom

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `Primary` | `--colors-semantic-fills-mom-primary` | `#770523` | `#E5A3AB` | 按钮/容器背景填充 |
| `Secondary` | `--colors-semantic-fills-mom-secondary` | `#FFFFFF` | `#1C1C1E` | 按钮/容器背景填充 |
| `Disabled` | `--colors-semantic-fills-mom-disabled` | `#E4E2E3` | `#3C3A3C` | 按钮/容器背景填充 |
| `Pressed` | `--colors-semantic-fills-mom-pressed` | `#3E0010` | `#F9C9CF` | 按钮/容器背景填充 |

### Fills / Care

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `Default` | `--colors-semantic-fills-care-default` | `#552C95` | `#BEA9F5` | 按钮/容器背景填充 |
| `Secondary` | `--colors-semantic-fills-care-secondary` | `#FFFFFF` | `#1C1C1E` | 按钮/容器背景填充 |
| `Disabled` | `--colors-semantic-fills-care-disabled` | `#E4E2E3` | `#3C3A3C` | 按钮/容器背景填充 |
| `Pressed` | `--colors-semantic-fills-care-pressed` | `#160038` | `#DBCFFF` | 按钮/容器背景填充 |

### Fills / Parenting

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `Default` | `--colors-semantic-fills-parenting-default` | `#7E451F` | `#DCAF6A` | 按钮/容器背景填充 |
| `Secondary` | `--colors-semantic-fills-parenting-secondary` | `#FFFFFF` | `#1C1C1E` | 按钮/容器背景填充 |
| `Disabled` | `--colors-semantic-fills-parenting-disabled` | `#E4E2E3` | `#3C3A3C` | 按钮/容器背景填充 |
| `Pressed` | `--colors-semantic-fills-parenting-pressed` | `#401B0D` | `#F2D2A4` | 按钮/容器背景填充 |

### Fills / Family

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `Default` | `--colors-semantic-fills-family-default` | `#1A5140` | `#84C9A6` | 按钮/容器背景填充 |
| `Secondary` | `--colors-semantic-fills-family-secondary` | `#FFFFFF` | `#1C1C1E` | 按钮/容器背景填充 |
| `Disabled` | `--colors-semantic-fills-family-disabled` | `#E4E2E3` | `#3C3A3C` | 按钮/容器背景填充 |
| `Pressed` | `--colors-semantic-fills-family-pressed` | `#002D1F` | `#B6E4CC` | 按钮/容器背景填充 |

## Semantic / Labels

`Labels` 是放在 `Fills` 容器上的文字和图标色。它不是普通正文色，不要用于页面长文案。

`Primary` 必须引用 `Colors / Grays / 0`，不要替换成固定白色 `Colors / Grays / White`。因此它在 light mode 为 `#FFFFFF`，在 dark mode 为 `#1C1C1E`，会随模式切换以匹配对应产品线主填充色。

### Labels / Mom

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `Primary` | `--colors-semantic-labels-mom-primary` | `#FFFFFF` | `#1C1C1E` | 按钮/容器上的文字和图标 |
| `Secondary` | `--colors-semantic-labels-mom-secondary` | `#770523` | `#E5A3AB` | 按钮/容器上的文字和图标 |
| `Disabled` | `--colors-semantic-labels-mom-disabled` | `#BDB7BA` | `#676267` | 按钮/容器上的文字和图标 |
| `Pressed Color` | `--colors-semantic-labels-mom-pressed-color` | `#000000` | `#000000` | 按下态文字/图标颜色 |
| `Pressed Opacity` | `--colors-semantic-labels-mom-pressed-opacity` | `20%` | `20%` | 按下态文字/图标透明度 |

### Labels / Care

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `Primary` | `--colors-semantic-labels-care-primary` | `#FFFFFF` | `#1C1C1E` | 按钮/容器上的文字和图标 |
| `Secondary` | `--colors-semantic-labels-care-secondary` | `#552C95` | `#BEA9F5` | 按钮/容器上的文字和图标 |
| `Disabled` | `--colors-semantic-labels-care-disabled` | `#BDB7BA` | `#676267` | 按钮/容器上的文字和图标 |
| `Pressed Color` | `--colors-semantic-labels-care-pressed-color` | `#000000` | `#000000` | 按下态文字/图标颜色 |
| `Pressed Opacity` | `--colors-semantic-labels-care-pressed-opacity` | `20%` | `20%` | 按下态文字/图标透明度 |

### Labels / Parenting

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `Primary` | `--colors-semantic-labels-parenting-primary` | `#FFFFFF` | `#1C1C1E` | 按钮/容器上的文字和图标 |
| `Secondary` | `--colors-semantic-labels-parenting-secondary` | `#7E451F` | `#DCAF6A` | 按钮/容器上的文字和图标 |
| `Disabled` | `--colors-semantic-labels-parenting-disabled` | `#BDB7BA` | `#676267` | 按钮/容器上的文字和图标 |
| `Pressed Color` | `--colors-semantic-labels-parenting-pressed-color` | `#000000` | `#000000` | 按下态文字/图标颜色 |
| `Pressed Opacity` | `--colors-semantic-labels-parenting-pressed-opacity` | `20%` | `20%` | 按下态文字/图标透明度 |

### Labels / Family

当前导出中 `Family` 的 Labels 只有 `Primary`、`Secondary`、`Disabled`，没有单独的 `Pressed Color` 和 `Pressed Opacity`。

| Name | CSS variable | light mode | dark mode | 用途 |
| --- | --- | --- | --- | --- |
| `Primary` | `--colors-semantic-labels-family-primary` | `#FFFFFF` | `#1C1C1E` | 按钮/容器上的文字和图标 |
| `Secondary` | `--colors-semantic-labels-family-secondary` | `#1A5140` | `#84C9A6` | 按钮/容器上的文字和图标 |
| `Disabled` | `--colors-semantic-labels-family-disabled` | `#BDB7BA` | `#676267` | 按钮/容器上的文字和图标 |

## 按钮配对规则

| 场景 | Fills 容器 | Labels 文字/图标 | 说明 |
| --- | --- | --- | --- |
| `Mom` 主按钮 | `--colors-semantic-fills-mom-primary` | `--colors-semantic-labels-mom-primary` | Mom 主按钮使用 `Primary` |
| `Care` 主按钮 | `--colors-semantic-fills-care-default` | `--colors-semantic-labels-care-primary` | Care 主按钮使用 `Default` + `Primary label` |
| `Parenting` 主按钮 | `--colors-semantic-fills-parenting-default` | `--colors-semantic-labels-parenting-primary` | Parenting 主按钮使用 `Default` + `Primary label` |
| `Family` 主按钮 | `--colors-semantic-fills-family-default` | `--colors-semantic-labels-family-primary` | Family 主按钮使用 `Default` + `Primary label` |
| 二级按钮 | `Fills / {产品线} / Secondary` | `Labels / {产品线} / Secondary` | `{产品线}` 替换为 Mom / Care / Parenting / Family |
| 禁用按钮 | `Fills / {产品线} / Disabled` | `Labels / {产品线} / Disabled` | 禁用容器和禁用文字要成对使用 |
| 按下态 | `Fills / {产品线} / Pressed` | `Labels / {产品线} / Pressed Color` + `Labels / {产品线} / Pressed Opacity` | 当前 Family 没有 pressed label token |

## 与 shadcn/ui 的关系

默认 shadcn/ui 主题使用 `Grays` 作为主品牌基础色。产品线按钮或状态组件需要显式选择对应产品线的 `Fills` 和 `Labels`。

```css
.button-mom-primary {
  background: var(--colors-semantic-fills-mom-primary);
  color: var(--colors-semantic-labels-mom-primary);
}

.button-care-secondary {
  background: var(--colors-semantic-fills-care-secondary);
  color: var(--colors-semantic-labels-care-secondary);
}
```

## Status

`Status` 属于反馈状态色，完整值见 `references/foundation-tokens.md`。shadcn/ui 的 `--destructive` 当前映射到 `Status / Danger / 75`。
