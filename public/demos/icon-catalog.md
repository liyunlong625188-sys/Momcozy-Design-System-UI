# Momcozy 图标目录与准入评审

> 此文件由图标语义注册表生成，请勿手动编辑。正式规范以注册表为唯一数据源。

## 准入规则

- 已批准目录可以直接复用。
- 新 Demo 中识别到的图标只进入待决策队列，不会自动加入规范。
- 决策只有四种：`复用现有`、`新增规范`、`保留局部`、`排除`。
- 只有用户明确选择 `新增规范` 后，才允许修改语义注册表并重新生成运行时。

## 已批准语义目录

| 语义名 | Hugeicons export | 当前使用位置 | 状态 |
| --- | --- | --- | --- |
| `activity` | `Activity01Icon` | React × 2 | 已批准 |
| `add` | `Add01Icon` | React × 1 | 已批准 |
| `ai` | `AiMagicIcon` | 04-cozy-ai × 3、React × 1 | 已批准 |
| `arrowDown` | `ArrowDown01Icon` | 04-cozy-ai × 1、React × 1 | 已批准 |
| `arrowLeft` | `ArrowLeft01Icon` | 01-user-guide × 2、React × 1 | 已批准 |
| `arrowRight` | `ArrowRight01Icon` | 01-user-guide × 1、React × 7、index.html × 4 | 已批准 |
| `arrowUp` | `ArrowUp01Icon` | 暂未使用 | 已批准 |
| `attachment` | `Attachment01Icon` | 04-cozy-ai × 1 | 已批准 |
| `baby` | `Baby01Icon` | React × 2 | 已批准 |
| `book` | `BookOpen01Icon` | React × 2 | 已批准 |
| `calendar` | `Calendar03Icon` | React × 1 | 已批准 |
| `camera` | `Camera01Icon` | React × 1 | 已批准 |
| `chart` | `ChartBarLineIcon` | React × 1 | 已批准 |
| `check` | `CheckmarkCircle01Icon` | 04-cozy-ai × 2 | 已批准 |
| `close` | `Cancel01Icon` | 04-cozy-ai × 1 | 已批准 |
| `community` | `Orbit01Icon` | 04-cozy-ai × 1、React × 1 | 已批准 |
| `edit` | `Edit02Icon` | 04-cozy-ai × 1 | 已批准 |
| `featured` | `Fire03Icon` | React × 1 | 已批准 |
| `favorite` | `HeartIcon` | 04-cozy-ai × 1、React × 1 | 已批准 |
| `help` | `HelpCircleIcon` | 01-user-guide × 1、React × 1 | 已批准 |
| `history` | `HistoryIcon` | 04-cozy-ai × 1 | 已批准 |
| `home` | `Home01Icon` | 04-cozy-ai × 1、React × 2 | 已批准 |
| `info` | `InformationCircleIcon` | 04-cozy-ai × 1 | 已批准 |
| `jump` | `ArrowUpRight01Icon` | 04-cozy-ai × 1 | 已批准 |
| `medicine` | `Medicine01Icon` | React × 1 | 已批准 |
| `message` | `BubbleChatIcon` | React × 2 | 已批准 |
| `notification` | `BellIcon` | React × 2 | 已批准 |
| `package` | `PackageIcon` | 04-cozy-ai × 1、React × 1 | 已批准 |
| `profile` | `UserIcon` | 04-cozy-ai × 1、React × 1 | 已批准 |
| `profileCircle` | `UserCircleIcon` | React × 1 | 已批准 |
| `pump` | `MilkBottleIcon` | React × 1 | 已批准 |
| `search` | `Search01Icon` | React × 1 | 已批准 |
| `send` | `SentIcon` | 04-cozy-ai × 1 | 已批准 |
| `settings` | `Settings02Icon` | React × 1 | 已批准 |
| `share` | `Share01Icon` | React × 1 | 已批准 |
| `shield` | `Shield01Icon` | React × 1 | 已批准 |
| `shoppingBag` | `ShoppingBag01Icon` | React × 1 | 已批准 |
| `sparkles` | `SparklesIcon` | 04-cozy-ai × 2 | 已批准 |
| `star` | `StarIcon` | React × 1 | 已批准 |
| `tag` | `HashtagIcon` | React × 1 | 已批准 |
| `themeMoon` | `Moon02Icon` | 01-user-guide × 1、02-group-pumping × 1、03-voice-log × 1、04-cozy-ai × 1 | 已批准 |
| `themeSun` | `Sun03Icon` | 01-user-guide × 1、02-group-pumping × 1、03-voice-log × 1、04-cozy-ai × 1 | 已批准 |
| `thermometer` | `ThermometerIcon` | React × 1 | 已批准 |
| `wifi` | `Wifi01Icon` | React × 1 | 已批准 |
| `wind` | `FastWindIcon` | React × 1 | 已批准 |

## 新 Demo 待决策队列

本次未指定新 Demo。收到新 Demo 后运行 `pnpm icons:review -- <demo-path>` 生成候选。

## 决策填写方式

- `复用现有：semantic-name`：替换为已批准语义，不改规范。
- `新增规范：new-semantic / HugeiconsExport`：经确认后加入注册表。
- `保留局部`：业务专属视觉，不进入跨 Demo 规范。
- `排除`：品牌、产品图片、人物、插画、状态栏或设计证据。
