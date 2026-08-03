# App 3.0 Status Dark Mode Recommendation

Source Figma: `App 3.0 全量设计`

File key: `YkvQEbxECb2ZpceQTGbjZs`

Node: `0:1`

## Finding

Figma already has `Light Mode` and `Dark Mode` in collection `App 3.0 Design`, but these semantic status variables currently use identical values in both modes:

| Token | Current light | Current dark |
| --- | --- | --- |
| `Colors/Semantic/Warning/line` | `#F7AF88` | `#F7AF88` |
| `Colors/Semantic/Warning/bg` | `#FEF0E9` | `#FEF0E9` |
| `Colors/Semantic/Warning/normal` | `#F38245` | `#F38245` |
| `Colors/Semantic/Warning/disabled` | `#FBD3BE` | `#FBD3BE` |
| `Colors/Semantic/Warning/pressed` | `#993600` | `#993600` |
| `Colors/Semantic/Danger/disabled` | `#FBC8CB` | `#FBC8CB` |
| `Colors/Semantic/Danger/line` | `#F7AAAF` | `#F7AAAF` |
| `Colors/Semantic/Danger/normal` | `#D20307` | `#D20307` |
| `Colors/Semantic/Danger/bg` | `#FDECED` | `#FDECED` |
| `Colors/Semantic/Danger/pressed` | `#9D2A32` | `#9D2A32` |
| `Colors/Semantic/Success/disabled` | `#AFE3BA` | `#AFE3BA` |
| `Colors/Semantic/Success/bg` | `#D9F0E2` | `#D9F0E2` |
| `Colors/Semantic/Success/line` | `#86D39D` | `#86D39D` |
| `Colors/Semantic/Success/normal` | `#009E3D` | `#009E3D` |
| `Colors/Semantic/Success/pressed` | `#066A29` | `#066A29` |

Dark mode base from the same Figma collection:

| Semantic | Dark value |
| --- | --- |
| `Colors/Backgrouds/Primary` | `#000000` |
| `Colors/Backgrouds/Secondary` | `#1C1C1E` |
| `Colors/Text/color text primary` | `#F7F3F6` |
| `Colors/Text/color text secondary` | `#938E93` |
| `Colors/Border/Primary` | `#3C3A3C` |
| `Colors/Border/Secondary` | `#1E1C1E` |

## Recommended Dark Values

The goal is to avoid pasting light-mode pastel surfaces into dark UI. Dark backgrounds should be muted tinted surfaces; text/icon status colors should be lifted brighter for contrast.

| Token | Recommended dark | 中文说明 | English note |
| --- | --- | --- | --- |
| `Colors/Semantic/Warning/bg` | `#433631` | 深色警告底色，适合 Alert/Toast/Tag 的容器背景。 | Dark warning surface for alert, toast, or tag backgrounds. |
| `Colors/Semantic/Warning/line` | `#F38245` | 警告边框或分割线，保留品牌警告橙但不使用浅底色。 | Warning border or divider; keeps the base orange accent. |
| `Colors/Semantic/Warning/normal` | `#F7AF88` | 深色模式下的警告文字、图标、强调色。 | Warning text, icon, or accent color in dark mode. |
| `Colors/Semantic/Warning/disabled` | `#5E483E` | 禁用态警告色，降低饱和和亮度。 | Muted disabled warning state. |
| `Colors/Semantic/Warning/pressed` | `#FBD3BE` | 按下态强调色，在暗底上提供更清楚反馈。 | Pressed emphasis color with stronger visibility on dark surfaces. |
| `Colors/Semantic/Danger/bg` | `#433638` | 深色危险/错误底色，避免使用浅粉背景。 | Dark danger/error surface; avoids light pink surfaces in dark UI. |
| `Colors/Semantic/Danger/line` | `#D20307` | 危险边框或分割线。 | Danger border or divider. |
| `Colors/Semantic/Danger/normal` | `#F7AAAF` | 深色模式下的错误文字、图标、强提醒色。 | Error text, icon, or strong danger accent in dark mode. |
| `Colors/Semantic/Danger/disabled` | `#5E474A` | 禁用态危险色，保留红色倾向但减少刺激。 | Muted disabled danger state. |
| `Colors/Semantic/Danger/pressed` | `#FBC8CB` | 按下态危险强调色。 | Pressed danger emphasis color. |
| `Colors/Semantic/Success/bg` | `#2F3D35` | 深色成功底色，适合状态容器。 | Dark success surface for status containers. |
| `Colors/Semantic/Success/line` | `#009E3D` | 成功边框或分割线。 | Success border or divider. |
| `Colors/Semantic/Success/normal` | `#86D39D` | 深色模式下的成功文字、图标、健康状态色。 | Success text, icon, or healthy-state accent in dark mode. |
| `Colors/Semantic/Success/disabled` | `#3C5344` | 禁用态成功色。 | Muted disabled success state. |
| `Colors/Semantic/Success/pressed` | `#AFE3BA` | 按下态成功强调色。 | Pressed success emphasis color. |

## Rule

| Variant | Dark-mode rule |
| --- | --- |
| `bg` | Use a dark tinted surface, not the light pastel value. These recommendations are mixed against `#1C1C1E`. |
| `line` | Use the original light `normal` base color as the dark border/accent line. |
| `normal` | Use the original light `line` color as the dark text/icon/accent value. |
| `disabled` | Use a muted blend of the dark `normal` value against `#1C1C1E`. |
| `pressed` | Use the original light `disabled` tint as a brighter pressed feedback value. |

## Contrast Check

The original light `pressed` values are too dark if they are used as text/icon colors on dark surfaces:

| Token value | Contrast on `#1C1C1E` |
| --- | --- |
| Warning pressed `#993600` | `2.34:1` |
| Danger normal `#D20307` | `3.04:1` |
| Danger pressed `#9D2A32` | `2.28:1` |
| Success pressed `#066A29` | `2.51:1` |

So in dark mode, use the lighter status values for readable text/icon states.
