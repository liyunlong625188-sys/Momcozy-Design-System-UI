# App 3.0 Color Token 更新确认稿

> 对比日期：2026-07-27  
> Figma：`App 3.0 - 全量设计` / `App 3.0 Design`  
> 本地基线：`skills/momcozy-shadcn-design-system/assets/momcozy-light.raw.css` 与 `momcozy-dark.raw.css`  
> 当前仅做只读对比，尚未修改本地 token。

## 1. 当前规模

Figma 当前 `Colors` 分组共 **124** 个变量：

- `COLOR`：117
- `FLOAT`：6
- `STRING`：1

截图中的 `Colors 124` 与 API 当前结果一致。整个集合当前为 371 个变量，截图显示 369，说明截图后集合中另外增加了 2 个非颜色变量；这不影响本次 Color 对比。

## 2. 已有颜色数值更新

Light Mode 的四条产品线 `700` 均未变化；Dark Mode 的 `700` 主色发生了 4 项变化。

| 编号 | Token | 本地 Dark | Figma 当前 Dark | 影响 |
| --- | --- | --- | --- | --- |
| A1 | `Colors/Brands/Mom/700` | `#E5A3AB` | `#DA5876` | Mom 主填充与 Secondary Label |
| A2 | `Colors/Brands/Care/700` | `#BEA9F5` | `#9871D5` | Care Default Fill 与 Secondary Label |
| A3 | `Colors/Brands/Parenting/700` | `#DCAF6A` | `#CD7032` | Parenting Default Fill 与 Secondary Label |
| A4 | `Colors/Brands/Family/700` | `#84C9A6` | `#329A7A` | Family Default Fill 与 Secondary Label |

以下已有基础色未变化：

- `Colors/Grays/0-1000` 的 10 个灰阶
- 四条产品线除 `700 Dark` 外的其余色阶
- `Backgrouds`、`Border`、`Text` 的语义关系
- `Fills`、`Labels` 的主要配对关系

## 3. 新增 Black / White 透明色阶

原本只有：

- `Colors/Grays/Black`
- `Colors/Grays/White`

Figma 当前改为独立分组：

- `Colors/Black/1-12` + `Colors/Black/Black`
- `Colors/White/1-12` + `Colors/White/White`

Light / Dark 两个模式取值相同。

| 层级 | Alpha | Black | White |
| --- | --- | --- | --- |
| 1 | 5% | `#0000000D` | `#FFFFFF0D` |
| 2 | 10% | `#0000001A` | `#FFFFFF1A` |
| 3 | 15% | `#00000026` | `#FFFFFF26` |
| 4 | 20% | `#00000033` | `#FFFFFF33` |
| 5 | 30% | `#0000004D` | `#FFFFFF4D` |
| 6 | 40% | `#00000066` | `#FFFFFF66` |
| 7 | 50% | `#00000080` | `#FFFFFF80` |
| 8 | 60% | `#00000099` | `#FFFFFF99` |
| 9 | 70% | `#000000B2` | `#FFFFFFB2` |
| 10 | 80% | `#000000CC` | `#FFFFFFCC` |
| 11 | 90% | `#000000E5` | `#FFFFFFE5` |
| 12 | 95% | `#000000F2` | `#FFFFFFF2` |
| Black / White | 100% | `#000000FF` | `#FFFFFFFF` |

## 4. 新增 Semantic Status 体系

旧版本地结构：

- `Status/Info/25-75`
- `Status/Warning/25-75`
- `Status/Caution/25-75`
- `Status/Danger/25-75`
- `Status/Success/25-75`
- `Status/Discovery/25-75`

Figma 当前新增结构：

- `Colors/Semantic/Warning/{bg, disabled, line, normal, pressed}`
- `Colors/Semantic/Danger/{bg, disabled, line, normal, pressed}`
- `Colors/Semantic/Success/{bg, disabled, line, normal, pressed}`

### Warning

| Role | Light | Dark |
| --- | --- | --- |
| `bg` | `#FEF0E9` | `#FEF0E9` |
| `disabled` | `#FBD3BE` | `#FBD3BE` |
| `line` | `#F7AF88` | `#F7AF88` |
| `normal` | `#F38245` | `#F38245` |
| `pressed` | `#993600` | `#993600` |

### Danger

| Role | Light | Dark |
| --- | --- | --- |
| `bg` | `#FDECED` | `#2B1B1D` |
| `disabled` | `#FBC8CB` | `#60373C` |
| `line` | `#F7AAAF` | `#91434B` |
| `normal` | `#D20307` | `#FF4D59` |
| `pressed` | `#9D2A32` | `#D13D49` |

### Success

| Role | Light | Dark |
| --- | --- | --- |
| `bg` | `#D9F0E2` | `#D9F0E2` |
| `disabled` | `#AFE3BA` | `#AFE3BA` |
| `line` | `#86D39D` | `#86D39D` |
| `normal` | `#009E3D` | `#009E3D` |
| `pressed` | `#066A29` | `#066A29` |

`Danger` 已提供专门的 Dark 值；`Warning` 和 `Success` 的 Dark 仍与 Light 完全相同。若这些 token 用作暗色页面的大面积背景，视觉明度会与 `Danger` 的暗色策略不一致；`pressed` 在深色背景上的可读性也需要再次确认。

旧有 `Info`、`Caution`、`Discovery` 没有出现在新的 `Colors/Semantic` 体系中，不能直接删除。

## 5. 其他结构更新

### 新增 Colors Mode

- `Colors/Mode`
- Light Mode：`Light`
- Dark Mode：`Dark`

这是模式元数据，不是颜色值。CSS 主题已经由 `:root` / `.dark` 控制，是否导出为 CSS 变量可以单独决定。

### Family 新增 Pressed Opacity

Figma 当前新增：

- `Colors/Semantic/Labels/Family/Pressed Opacity`
- Light / Dark 均引用 `Opacity/opacity-20`

但当前没有对应的 `Colors/Semantic/Labels/Family/Pressed Color`。Family 的按下态仍不完整。

## 6. Figma 当前引用问题

以下是 Figma 当前状态，不建议原样写回工程：

1. 多个 Light Mode 语义变量仍引用旧命名 `Colors/Gays/*`，Dark Mode 才引用 `Colors/Grays/*`。
2. Mom、Care、Parenting 的 `Pressed Color` 仍引用 `Colors/Gays/Black`。
3. 已经新增 `Colors/Black/Black`，但 Pressed Color 尚未切换到这个新变量。
4. Family 只有 `Pressed Opacity`，没有 `Pressed Color`。

本地工程已经完成 `Gays -> Grays` 迁移，因此更新时应继续保持 `Grays`，不能把旧命名带回代码。

## 7. 待确认

- [x] **A（已确认并落地）**：采用四条产品线新的 Dark `700` 值（A1-A4）。
- [ ] **B**：新增完整的 `Black/White` 透明色阶，并保留旧 `Grays/Black`、`Grays/White` 兼容别名。
- [ ] **C**：新增 `Warning/Danger/Success` 五状态语义 token，旧 `Status/*/25-75` 暂时保留兼容。
- [ ] **D**：直接采用 Warning 和 Success 当前相同的 Light/Dark 值。
- [ ] **E**：Danger 采用当前专门的 Dark 值。
- [ ] **F**：新增 `Colors/Mode` 元数据。
- [ ] **G**：Family 新增 `Pressed Opacity`；是否同时补 `Pressed Color` 需要确认。
- [ ] **H**：工程内继续统一使用 `Grays`，并把 Pressed Color 映射到新的 `Colors/Black/Black`，不跟随 Figma 的旧 `Gays` 引用。

## 建议

建议优先确认：**A、B、C、E、H**。

建议暂缓：**D、G**。先补齐 Warning / Success 的暗色策略，以及 Family Pressed Color，再写入正式 token。

`F` 可以保留在源数据或文档层，不必进入 shadcn/ui 的运行时 CSS。
