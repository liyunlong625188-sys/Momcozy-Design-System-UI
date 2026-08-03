# Status Color Extract

Source: `/Users/lute/.codex/attachments/20d45ca7-a79f-4dbc-a07b-983d6d559cbe/pasted-text.txt`

Notes:
- The pasted HTML does not include base hex definitions for `orange-*`, `yellow-*`, `red-*`, or `green-*`; it only includes token references.
- The current Momcozy theme does include confirmed hex values for `--status-warning-*`, `--status-caution-*`, `--status-danger-*`, and `--status-success-*`.
- `Warning` maps to `orange-*` tokens in the pasted source.
- Yellow maps to `Caution` tokens in the pasted source.
- `color-text-success` has `red-400` as its dark value in the pasted source; preserved below as-is.

## Summary / 摘要

| Group | Color / 颜色 | Confirmed Momcozy hex | 中文解释 | English explanation |
| --- | --- | --- | --- | --- |
| `Warning` | Orange / 警告橙 | Base `#F38245`; 25 `#F3824540`; 50 `#F3824580`; 75 `#F38245BF` | 警告或风险提示，用于提醒用户当前状态需要关注，但通常还可以继续操作。 | Warning or alert state for issues that need attention but usually do not block the flow. |
| `Yellow / Caution` | Yellow / 注意黄 | Pasted source only gives `yellow-*` refs; Momcozy `Caution` status uses Base `#F38245`; 25 `#F3824540`; 50 `#F3824580`; 75 `#F38245BF` | 注意、谨慎或中低强度提醒，用于提示用户再看一眼、确认信息或留意变化。 | Caution state for lower-to-medium emphasis notices, review prompts, or information that needs extra care. |
| `Danger` | Red / 危险红 | Base `#D20307`; 25 `#D2030740`; 50 `#D2030780`; 75 `#D20307BF` | 危险、错误、失败或破坏性操作提示，用于需要强提醒、阻断或谨慎确认的场景。 | Danger, error, failure, or destructive state for high-risk actions and blocking feedback. |
| `Success` | Green / 成功绿 | Base `#009E3D`; 25 `#009E3D40`; 50 `#009E3D80`; 75 `#009E3DBF` | 成功、完成、健康或可用状态，用于正向反馈、任务完成和系统运行正常。 | Success, completed, healthy, or available state for positive confirmation and normal operation. |

## Variant Glossary / 变体说明

| Pattern | 中文解释 | English explanation |
| --- | --- | --- |
| `color-text-*` | 状态文字或图标颜色。 | Text or icon color for the state. |
| `color-background-*-soft` | 轻量状态背景，适合提示条、标签底色、弱强调区域。 | Low-emphasis state background for hints, tags, or subtle surfaces. |
| `color-background-*-soft-hover` | 轻量背景的悬停态。 | Hover state for the low-emphasis background. |
| `color-background-*-soft-active` | 轻量背景的按下或激活态。 | Active or pressed state for the low-emphasis background. |
| `color-background-*-soft-alpha` | 带透明度的轻量状态背景。 | Transparent low-emphasis state background. |
| `color-background-*-surface` | 状态容器底色，适合 Alert、Callout、Toast 面。 | State surface background for alerts, callouts, and toast-like containers. |
| `color-border-*-surface` | 状态容器边框色。 | Border color for state surfaces. |
| `color-text-*-surface` | 状态容器内的文字或图标色。 | Text or icon color inside state surfaces. |
| `color-background-*-solid` | 高强调实色背景，适合主状态按钮或强反馈。 | High-emphasis solid background for state buttons or strong feedback. |
| `color-background-*-solid-hover` | 高强调实色背景的悬停态。 | Hover state for the solid background. |
| `color-background-*-solid-active` | 高强调实色背景的按下或激活态。 | Active or pressed state for the solid background. |
| `color-text-*-solid` | 实色背景上的文字或图标色。 | Text or icon color on the solid background. |
| `color-background-*-outline-hover` | 描边按钮或描边控件的悬停背景。 | Hover background for outline buttons or controls. |
| `color-border-*-outline` | 描边按钮或描边控件的边框色。 | Border color for outline buttons or controls. |
| `color-text-*-outline` | 描边按钮或描边控件的文字或图标色。 | Text or icon color for outline buttons or controls. |
| `color-background-*-ghost-hover` | Ghost 按钮或透明控件的悬停背景。 | Hover background for ghost buttons or transparent controls. |
| `color-background-*-ghost-active` | Ghost 按钮或透明控件的按下态背景。 | Active background for ghost buttons or transparent controls. |
| `color-text-*-ghost` | Ghost 按钮或透明控件的文字或图标色。 | Text or icon color for ghost buttons or transparent controls. |
| `color-ring-*` | 焦点环或键盘 focus ring 颜色。 | Focus ring color, usually for keyboard focus or validation emphasis. |

## Original Token Extract / 原始 Token 清单

### Warning

| Token | Light color / 浅色模式颜色 | Dark color / 深色模式颜色 |
| --- | --- | --- |
| `color-text-warning` | `orange-700` | `orange-500` |
| `color-background-warning-soft` | `orange-50` | `orange-50` |
| `color-background-warning-soft-hover` | `orange-75` | `orange-75` |
| `color-background-warning-soft-active` | `orange-75` | `orange-75` |
| `color-background-warning-soft-alpha` | `orange-a50` | `orange-a50` |
| `color-background-warning-soft-alpha-hover` | `orange-a75` | `orange-a75` |
| `color-background-warning-soft-alpha-active` | `orange-a75` | `orange-a75` |
| `color-text-warning-soft` | `orange-700` | `orange-400` |
| `color-background-warning-surface` | `orange-a25` | `orange-a50` |
| `color-border-warning-surface` | `orange-a25` | `orange-a50` |
| `color-text-warning-surface` | `orange-700` | `orange-400` |
| `color-background-warning-solid` | `orange-500` | `orange-500` |
| `color-background-warning-solid-hover` | `orange-600` | `orange-600` |
| `color-background-warning-solid-active` | `orange-600` | `orange-600` |
| `color-text-warning-solid` | `white` | `white` |
| `color-background-warning-outline-hover` | `orange-a25` | `orange-a25` |
| `color-background-warning-outline-active` | `orange-a25` | `orange-a25` |
| `color-border-warning-outline` | `orange-500` | `orange-500` |
| `color-border-warning-outline-hover` | `orange-500` | `orange-500` |
| `color-text-warning-outline` | `orange-500` | `orange-500` |
| `color-text-warning-outline-hover` | `orange-500` | `orange-500` |
| `color-background-warning-ghost-hover` | `orange-a50` | `orange-a50` |
| `color-background-warning-ghost-active` | `orange-a50` | `orange-a50` |
| `color-text-warning-ghost` | `orange-500` | `orange-500` |
| `color-text-warning-ghost-hover` | `orange-500` | `orange-500` |
| `color-ring-warning` | `color-ring` | `color-ring` |
| `color-ring-warning-soft` | `color-ring-warning` | `color-ring-warning` |
| `color-ring-warning-solid` | `color-ring-warning` | `color-ring-warning` |
| `color-ring-warning-outline` | `color-ring-warning` | `color-ring-warning` |
| `color-ring-warning-ghost` | `color-ring-warning` | `color-ring-warning` |

### Yellow / Caution

| Token | Light color / 浅色模式颜色 | Dark color / 深色模式颜色 |
| --- | --- | --- |
| `color-text-caution` | `yellow-700` | `yellow-500` |
| `color-background-caution-soft` | `yellow-50` | `yellow-50` |
| `color-background-caution-soft-hover` | `yellow-75` | `yellow-75` |
| `color-background-caution-soft-active` | `yellow-75` | `yellow-75` |
| `color-background-caution-soft-alpha` | `yellow-a50` | `yellow-a50` |
| `color-background-caution-soft-alpha-hover` | `yellow-a75` | `yellow-a75` |
| `color-background-caution-soft-alpha-active` | `yellow-a75` | `yellow-a75` |
| `color-text-caution-soft` | `yellow-800` | `yellow-400` |
| `color-background-caution-surface` | `yellow-a25` | `yellow-a50` |
| `color-border-caution-surface` | `yellow-a25` | `yellow-a50` |
| `color-text-caution-surface` | `yellow-800` | `yellow-400` |
| `color-background-caution-solid` | `yellow-600` | `yellow-600` |
| `color-background-caution-solid-hover` | `yellow-700` | `yellow-700` |
| `color-background-caution-solid-active` | `yellow-700` | `yellow-700` |
| `color-background-caution-outline-hover` | `yellow-a25` | `yellow-a25` |
| `color-background-caution-outline-active` | `yellow-a25` | `yellow-a25` |
| `color-border-caution-outline` | `yellow-700` | `yellow-700` |
| `color-border-caution-outline-hover` | `yellow-700` | `yellow-700` |
| `color-text-caution-outline` | `yellow-700` | `yellow-700` |
| `color-text-caution-outline-hover` | `yellow-700` | `yellow-700` |
| `color-background-caution-ghost-hover` | `yellow-a50` | `yellow-a50` |
| `color-background-caution-ghost-active` | `yellow-a50` | `yellow-a50` |
| `color-text-caution-ghost` | `yellow-700` | `yellow-700` |
| `color-text-caution-ghost-hover` | `yellow-700` | `yellow-700` |
| `color-ring-caution` | `color-ring` | `color-ring` |
| `color-ring-caution-soft` | `color-ring-caution` | `color-ring-caution` |
| `color-ring-caution-solid` | `color-ring-caution` | `color-ring-caution` |
| `color-ring-caution-outline` | `color-ring-caution` | `color-ring-caution` |
| `color-ring-caution-ghost` | `color-ring-caution` | `color-ring-caution` |

### Danger / Red

| Token | Light color / 浅色模式颜色 | Dark color / 深色模式颜色 |
| --- | --- | --- |
| `color-text-danger` | `red-700` | `red-500` |
| `color-background-danger-soft` | `red-50` | `red-50` |
| `color-background-danger-soft-hover` | `red-75` | `red-75` |
| `color-background-danger-soft-active` | `red-75` | `red-75` |
| `color-background-danger-soft-alpha` | `red-a50` | `red-a50` |
| `color-background-danger-soft-alpha-hover` | `red-a75` | `red-a75` |
| `color-background-danger-soft-alpha-active` | `red-a75` | `red-a75` |
| `color-text-danger-soft` | `red-600` | `red-400` |
| `color-background-danger-surface` | `red-a25` | `red-a50` |
| `color-border-danger-surface` | `red-a25` | `red-a50` |
| `color-text-danger-surface` | `red-600` | `red-400` |
| `color-background-danger-solid` | `red-500` | `red-500` |
| `color-background-danger-solid-hover` | `red-600` | `red-600` |
| `color-background-danger-solid-active` | `red-600` | `red-600` |
| `color-text-danger-solid` | `white` | `white` |
| `color-background-danger-outline-hover` | `red-a25` | `red-a25` |
| `color-background-danger-outline-active` | `red-a25` | `red-a25` |
| `color-border-danger-outline` | `red-500` | `red-500` |
| `color-border-danger-outline-hover` | `red-500` | `red-500` |
| `color-text-danger-outline` | `red-500` | `red-500` |
| `color-text-danger-outline-hover` | `red-500` | `red-500` |
| `color-background-danger-ghost-hover` | `red-a50` | `red-a50` |
| `color-background-danger-ghost-active` | `red-a50` | `red-a50` |
| `color-text-danger-ghost` | `red-500` | `red-500` |
| `color-text-danger-ghost-hover` | `red-500` | `red-500` |
| `color-ring-danger` | `red-200` | `red-200` |
| `color-ring-danger-soft` | `color-ring-danger` | `color-ring-danger` |
| `color-ring-danger-solid` | `color-ring-danger` | `color-ring-danger` |
| `color-ring-danger-outline` | `color-ring-danger` | `color-ring-danger` |
| `color-ring-danger-ghost` | `color-ring-danger` | `color-ring-danger` |

### Success / Green

| Token | Light color / 浅色模式颜色 | Dark color / 深色模式颜色 |
| --- | --- | --- |
| `color-text-success` | `green-700` | `red-400` |
| `color-background-success-soft` | `green-50` | `green-50` |
| `color-background-success-soft-hover` | `green-75` | `green-75` |
| `color-background-success-soft-active` | `green-75` | `green-75` |
| `color-background-success-soft-alpha` | `green-a50` | `green-a50` |
| `color-background-success-soft-alpha-hover` | `green-a75` | `green-a75` |
| `color-background-success-soft-alpha-active` | `green-a75` | `green-a75` |
| `color-text-success-soft` | `green-600` | `green-400` |
| `color-background-success-surface` | `green-a25` | `green-a50` |
| `color-border-success-surface` | `green-a25` | `green-a50` |
| `color-text-success-surface` | `green-600` | `green-400` |
| `color-background-success-solid` | `green-400` | `green-400` |
| `color-background-success-solid-hover` | `green-500` | `green-500` |
| `color-background-success-solid-active` | `green-500` | `green-500` |
| `color-text-success-solid` | `white` | `white` |
| `color-background-success-outline-hover` | `green-a25` | `green-a25` |
| `color-background-success-outline-active` | `green-a25` | `green-a25` |
| `color-border-success-outline` | `green-500` | `green-500` |
| `color-border-success-outline-hover` | `green-500` | `green-500` |
| `color-text-success-outline` | `green-500` | `green-500` |
| `color-text-success-outline-hover` | `green-500` | `green-500` |
| `color-background-success-ghost-hover` | `green-a50` | `green-a50` |
| `color-background-success-ghost-active` | `green-a50` | `green-a50` |
| `color-text-success-ghost` | `green-500` | `green-500` |
| `color-text-success-ghost-hover` | `green-500` | `green-500` |
| `color-ring-success` | `color-ring` | `color-ring` |
| `color-ring-success-soft` | `color-ring-info` | `color-ring-info` |
| `color-ring-success-solid` | `color-ring-info` | `color-ring-info` |
| `color-ring-success-outline` | `color-ring-info` | `color-ring-info` |
| `color-ring-success-ghost` | `color-ring-info` | `color-ring-info` |
