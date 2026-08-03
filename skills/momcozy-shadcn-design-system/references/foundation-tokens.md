# 基础 Tokens

## 目录

- [覆盖范围](#覆盖范围)
- [Opacity](#opacity)
- [Spacing](#spacing)
- [Radius](#radius)
- [Shadows](#shadows)
- [Status](#status)
- [CSS 示例](#css-示例)

## 覆盖范围

当前基础层已按 raw CSS 完整核对：Opacity 21 个，Spacing 48 个（Heights 24 + Widths 24），Radius 10 个，Shadows 12 个，Status 18 个。

这些 token 用于支撑尺寸、间距、圆角、透明度、阴影深度和反馈状态。组件实现时先使用语义 token；只有在语义 token 不足以表达布局或局部状态时，再回到这些基础 token。

## Opacity

Opacity token 以 0 到 100 表示透明度，light mode 与 dark mode 当前一致。源 CSS 里有 `--opacity--0-05` 这类历史命名；实现时优先使用生成后的 `--opacity-opacity-*` 或 `--alpha-*`。

| Name | 百分比变量 | alpha 变量 | 百分比值 | alpha 值 |
| --- | --- | --- | --- | --- |
| `opacity-0` | `--opacity-opacity-0` | `--alpha-0` | `0%` | `0` |
| `opacity-5` | `--opacity-opacity-5` | `--alpha-5` | `5%` | `0.05` |
| `opacity-10` | `--opacity-opacity-10` | `--alpha-10` | `10%` | `0.1` |
| `opacity-15` | `--opacity-opacity-15` | `--alpha-15` | `15%` | `0.15` |
| `opacity-20` | `--opacity-opacity-20` | `--alpha-20` | `20%` | `0.2` |
| `opacity-25` | `--opacity-opacity-25` | `--alpha-25` | `25%` | `0.25` |
| `opacity-30` | `--opacity-opacity-30` | `--alpha-30` | `30%` | `0.3` |
| `opacity-35` | `--opacity-opacity-35` | `--alpha-35` | `35%` | `0.35` |
| `opacity-40` | `--opacity-opacity-40` | `--alpha-40` | `40%` | `0.4` |
| `opacity-45` | `--opacity-opacity-45` | `--alpha-45` | `45%` | `0.45` |
| `opacity-50` | `--opacity-opacity-50` | `--alpha-50` | `50%` | `0.5` |
| `opacity-55` | `--opacity-opacity-55` | `--alpha-55` | `55%` | `0.55` |
| `opacity-60` | `--opacity-opacity-60` | `--alpha-60` | `60%` | `0.6` |
| `opacity-65` | `--opacity-opacity-65` | `--alpha-65` | `65%` | `0.65` |
| `opacity-70` | `--opacity-opacity-70` | `--alpha-70` | `70%` | `0.7` |
| `opacity-75` | `--opacity-opacity-75` | `--alpha-75` | `75%` | `0.75` |
| `opacity-80` | `--opacity-opacity-80` | `--alpha-80` | `80%` | `0.8` |
| `opacity-85` | `--opacity-opacity-85` | `--alpha-85` | `85%` | `0.85` |
| `opacity-90` | `--opacity-opacity-90` | `--alpha-90` | `90%` | `0.9` |
| `opacity-95` | `--opacity-opacity-95` | `--alpha-95` | `95%` | `0.95` |
| `opacity-100` | `--opacity-opacity-100` | `--alpha-100` | `100%` | `1` |

按下态文字透明度使用 `Colors / Semantic / Labels / {产品线} / Pressed Opacity`，当前对应 `opacity-20`。

## Spacing

Spacing 分为 Heights 与 Widths，两组共享同一套像素尺度。尺寸类属性用 h/w token；padding、gap、margin 这类方向无关间距可使用生成的 space 别名。

| Scale | Height variable | Width variable | Space alias | value |
| --- | --- | --- | --- | --- |
| `0` | `--spacing-heights-h-0` | `--spacing-widths-w-0` | `--space-0` | `0px` |
| `px` | `--spacing-heights-h-px` | `--spacing-widths-w-px` | `--space-px` | `1px` |
| `0.5` | `--spacing-heights-h-0-5` | `--spacing-widths-w-0-5` | `--space-0-5` | `2px` |
| `1` | `--spacing-heights-h-1` | `--spacing-widths-w-1` | `--space-1` | `4px` |
| `2` | `--spacing-heights-h-2` | `--spacing-widths-w-2` | `--space-2` | `8px` |
| `2.5` | `--spacing-heights-h-2-5` | `--spacing-widths-w-2-5` | `--space-2-5` | `10px` |
| `3` | `--spacing-heights-h-3` | `--spacing-widths-w-3` | `--space-3` | `12px` |
| `3.5` | `--spacing-heights-h-3-5` | `--spacing-widths-w-3-5` | `--space-3-5` | `14px` |
| `4` | `--spacing-heights-h-4` | `--spacing-widths-w-4` | `--space-4` | `16px` |
| `5` | `--spacing-heights-h-5` | `--spacing-widths-w-5` | `--space-5` | `20px` |
| `6` | `--spacing-heights-h-6` | `--spacing-widths-w-6` | `--space-6` | `24px` |
| `7` | `--spacing-heights-h-7` | `--spacing-widths-w-7` | `--space-7` | `28px` |
| `8` | `--spacing-heights-h-8` | `--spacing-widths-w-8` | `--space-8` | `32px` |
| `9` | `--spacing-heights-h-9` | `--spacing-widths-w-9` | `--space-9` | `36px` |
| `10` | `--spacing-heights-h-10` | `--spacing-widths-w-10` | `--space-10` | `40px` |
| `12` | `--spacing-heights-h-12` | `--spacing-widths-w-12` | `--space-12` | `48px` |
| `14` | `--spacing-heights-h-14` | `--spacing-widths-w-14` | `--space-14` | `56px` |
| `16` | `--spacing-heights-h-16` | `--spacing-widths-w-16` | `--space-16` | `64px` |
| `18` | `--spacing-heights-h-18` | `--spacing-widths-w-18` | `--space-18` | `72px` |
| `20` | `--spacing-heights-h-20` | `--spacing-widths-w-20` | `--space-20` | `80px` |
| `24` | `--spacing-heights-h-24` | `--spacing-widths-w-24` | `--space-24` | `96px` |
| `48` | `--spacing-heights-h-48` | `--spacing-widths-w-48` | `--space-48` | `192px` |
| `72` | `--spacing-heights-h-72` | `--spacing-widths-w-72` | `--space-72` | `288px` |
| `96` | `--spacing-heights-h-96` | `--spacing-widths-w-96` | `--space-96` | `384px` |

## Radius

Radius token 是组件圆角的统一来源。当前截图口径为 10 个 radius；源 CSS 还带有一个 lower-case `--radius-full`，它与 `Radius / full` 同义，作为兼容别名处理，不单独计入尺度。

| Token | CSS variable | value |
| --- | --- | --- |
| `none` | `--radius-none` | `0px` |
| `xs` | `--radius-xs` | `2px` |
| `sm` | `--radius-sm` | `4px` |
| `md` | `--radius-md` | `8px` |
| `lg` | `--radius-lg` | `10px` |
| `xl` | `--radius-xl` | `12px` |
| `2xl` | `--radius-2xl` | `16px` |
| `3xl` | `--radius-3xl` | `24px` |
| `4xl` | `--radius-4xl` | `32px` |
| `full` | `--radius-full` | `9999px` |

shadcn/ui 的 `--radius` 使用 `Radius / md` 作为基准。不要用计算值覆盖 Figma 的 `--radius-sm`、`--radius-md`、`--radius-lg` 等原始尺度。

## Shadows

当前 shadow token 是阴影尺度或深度值，不是完整的 CSS `box-shadow` 配方。使用它们时需要结合具体组件的颜色、偏移和透明度。

| Token | CSS variable | value |
| --- | --- | --- |
| `shadow hairline` | `--shadows-shadow-hairline` | `0px` |
| `shadow 100` | `--shadows-shadow-100` | `2px` |
| `shadow 100 strong` | `--shadows-shadow-100-strong` | `4px` |
| `shadow 100 stronger` | `--shadows-shadow-100-stronger` | `8px` |
| `shadow 200` | `--shadows-shadow-200` | `10px` |
| `shadow 200 strong` | `--shadows-shadow-200-strong` | `12px` |
| `shadow 200 stronger` | `--shadows-shadow-200-stronger` | `16px` |
| `shadow 300` | `--shadows-shadow-300` | `24px` |
| `shadow 300 strong` | `--shadows-shadow-300-strong` | `32px` |
| `shadow 400` | `--shadows-shadow-400` | `9999px` |
| `shadow 400 strong` | `--shadows-shadow-400-strong` | `9999px` |
| `shadow 400 stronger` | `--shadows-shadow-400-stronger` | `9999px` |

除非已有组件规范明确给出完整阴影，不要只用这些数值临时拼出夸张投影；设备卡、状态卡、内容卡、社区卡和表单优先使用细边框和轻阴影。

## Status

Status token 用固定色值叠加透明度表达反馈状态，light mode 与 dark mode 当前一致。

| Status | Level | CSS variable | base | value |
| --- | --- | --- | --- | --- |
| `Info` | `25` | `--status-info-25` | `#582443` | `#58244340` |
| `Info` | `50` | `--status-info-50` | `#582443` | `#58244380` |
| `Info` | `75` | `--status-info-75` | `#582443` | `#582443BF` |
| `Warning` | `25` | `--status-warning-25` | `#F38245` | `#F3824540` |
| `Warning` | `50` | `--status-warning-50` | `#F38245` | `#F3824580` |
| `Warning` | `75` | `--status-warning-75` | `#F38245` | `#F38245BF` |
| `Caution` | `25` | `--status-caution-25` | `#F38245` | `#F3824540` |
| `Caution` | `50` | `--status-caution-50` | `#F38245` | `#F3824580` |
| `Caution` | `75` | `--status-caution-75` | `#F38245` | `#F38245BF` |
| `Danger` | `25` | `--status-danger-25` | `#D20307` | `#D2030740` |
| `Danger` | `50` | `--status-danger-50` | `#D20307` | `#D2030780` |
| `Danger` | `75` | `--status-danger-75` | `#D20307` | `#D20307BF` |
| `Success` | `25` | `--status-success-25` | `#009E3D` | `#009E3D40` |
| `Success` | `50` | `--status-success-50` | `#009E3D` | `#009E3D80` |
| `Success` | `75` | `--status-success-75` | `#009E3D` | `#009E3DBF` |
| `Discovery` | `25` | `--status-discovery-25` | `#8568C2` | `#8568C240` |
| `Discovery` | `50` | `--status-discovery-50` | `#8568C2` | `#8568C280` |
| `Discovery` | `75` | `--status-discovery-75` | `#8568C2` | `#8568C2BF` |

使用建议：

- `25`：轻量背景或提示底色。
- `50`：中等强调的状态面。
- `75`：高强调状态、图标或破坏性语义。
- shadcn/ui 的 `--destructive` 当前映射到 `Status / Danger / 75`。

## CSS 示例

```css
.toolbar {
  gap: var(--space-3);
  min-height: var(--spacing-heights-h-10);
}

.pressed-label {
  color: var(--colors-semantic-labels-mom-pressed-color);
  opacity: var(--alpha-20);
}
```
