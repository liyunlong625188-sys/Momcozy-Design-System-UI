# 字体规则

## 目录

- [覆盖范围](#覆盖范围)
- [字体资产](#字体资产)
- [字体角色](#字体角色)
- [Typography 样式表](#typography-样式表)
- [使用规则](#使用规则)
- [CSS 示例](#css-示例)
- [授权注意](#授权注意)

## 覆盖范围

当前排版源 token 覆盖 Font theme 6 个，以及 Typography 15 个样式角色 × 6 个属性 = 90 个声明。

## 字体资产

品牌字体文件放在 `assets/fonts/exposure/`：

- `205TF-Exposure-[-10].otf`：Exposure[-10] Regular。
- `205TF-Exposure-[-10]Italic.otf`：Exposure[-10] Italic。

UI 字体文件放在 `assets/fonts/aeonik-soft-pro/`：

- `AeonikSoftPro-Light.otf`：Aeonik Soft Pro Light，CSS weight 300。
- `AeonikSoftPro-Regular.otf`：Aeonik Soft Pro Regular，CSS weight 400。
- `AeonikSoftPro-Medium.otf`：Aeonik Soft Pro Medium，CSS weight 500。
- `AeonikSoftPro-SemiBold.otf`：Aeonik Soft Pro SemiBold，CSS weight 600。

Figma token 中的品牌字体名是 `Exposure[-10]`。在 CSS 中使用时要加引号：`"Exposure[-10]"`。

## 字体角色

- `--Font-theme-Font-Brand` / `--font-brand`：品牌标题字体，使用 `"Exposure[-10]"`。
- `--Font-theme-Font-Plain` / `--font-sans`：正文与产品 UI 字体，使用 `"Aeonik Soft Pro"`，并提供系统 sans-serif fallback。
- `--Font-theme-Weight-Light`：映射到 CSS `font-weight: 300`。
- `--Font-theme-Weight-Regular`：映射到 CSS `font-weight: 400`。
- `--Font-theme-Weight-Medium`：映射到 CSS `font-weight: 500`。
- `--Font-theme-Weight-Bold`：按当前 Figma token 映射到 SemiBold，即 CSS `font-weight: 600`。

## Typography 样式表

### Heading

| 样式 | 字体 | 默认字重 | 强调字重 | 字号 | 行高 | 字距 |
| --- | --- | --- | --- | --- | --- | --- |
| Heading XL | `"Exposure[-10]"` | Regular / 400 | Medium / 500 | 32px | 38px | 0px |
| Heading L | `"Exposure[-10]"` | Light / 300 | Medium / 500 | 24px | 29px | -2px |
| Heading M | `"Exposure[-10]"` | Regular / 400 | Medium / 500 | 20px | 26px | 0px |
| Heading S | `"Exposure[-10]"` | Regular / 400 | Medium / 500 | 20px | 26px | 0px |

### Title / Body / Caption

| 样式 | 字体 | 默认字重 | 强调字重 | 字号 | 行高 | 字距 |
| --- | --- | --- | --- | --- | --- | --- |
| Title XL Medium | `"Aeonik Soft Pro"` | Medium / 500 | SemiBold / 600 | 24px | 29px | 2px |
| Title L Medium | `"Aeonik Soft Pro"` | Medium / 500 | SemiBold / 600 | 18px | 22px | 2px |
| Title M Medium | `"Aeonik Soft Pro"` | Medium / 500 | SemiBold / 600 | 16px | 22px | 2px |
| Title M Regular | `"Aeonik Soft Pro"` | Regular / 400 | Medium / 500 | 16px | 22px | 2px |
| Body L Regular | `"Aeonik Soft Pro"` | Regular / 400 | Medium / 500 | 16px | 22px | 0px |
| Body M Medium | `"Aeonik Soft Pro"` | Medium / 500 | SemiBold / 600 | 14px | 18px | 2px |
| Body M Regular | `"Aeonik Soft Pro"` | Regular / 400 | Medium / 500 | 14px | 20px | 2px |
| Body S Medium | `"Aeonik Soft Pro"` | Medium / 500 | SemiBold / 600 | Light: 12px / Dark: 14px | Light: 18px / Dark: 20px | 2px |
| Body S Regular | `"Aeonik Soft Pro"` | Medium / 500 | SemiBold / 600 | 12px | 18px | 2px |
| Caption M Medium | `"Aeonik Soft Pro"` | Medium / 500 | SemiBold / 600 | 10px | 17px | 2px |
| Caption M Regular | `"Aeonik Soft Pro"` | Medium / 500 | SemiBold / 600 | 10px | 14px | 2px |

说明：当前 dark mode 导出中 `Body S Medium` 的字号和行高与 light mode 不同；如果这不是设计意图，后续应在 Figma token 中统一。

### 生成变量

转换脚本会在 theme 中输出更易用的语义变量：

```css
--type-heading-xl-font-family: var(--font-brand);
--type-heading-xl-font-weight: 400;
--type-heading-xl-font-weight-emphasized: 500;
--type-heading-xl-font-size: 32px;
--type-heading-xl-line-height: 38px;
--type-heading-xl-letter-spacing: 0px;
```

使用组件样式时，优先读取 `--type-*` 变量，而不是直接读取原始 `--Typography-*` 变量。

## 使用规则

- Heading XL/L/M/S 优先使用品牌字体 `"Exposure[-10]"`。
- Title、Body、Caption 优先使用 plain 字体 `"Aeonik Soft Pro"`。
- UI 字重只使用 Light / Regular / Medium / SemiBold；当前 `Bold` token 对应 SemiBold，不使用 700 Bold。
- 不要把品牌字体用于大段正文、表格密集信息或长表单说明。
- Italic 只用于明确的品牌表达或少量强调，不作为常规 UI 状态样式。

## CSS 示例

```css
@font-face {
  font-family: "Exposure[-10]";
  src: url("./fonts/exposure/205TF-Exposure-[-10].otf") format("opentype");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Exposure[-10]";
  src: url("./fonts/exposure/205TF-Exposure-[-10]Italic.otf") format("opentype");
  font-style: italic;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Aeonik Soft Pro";
  src: url("./fonts/aeonik-soft-pro/AeonikSoftPro-Regular.otf") format("opentype");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

:root {
  --font-brand: "Exposure[-10]";
  --font-sans: "Aeonik Soft Pro", ui-sans-serif, system-ui, sans-serif;
}
```

## 授权注意

当前 Exposure 字体包包含 Desktop、Online Advertising、Mobile App 授权信息；Aeonik Soft Pro 文件夹名称显示为 FF App。公开网站、Web App、移动 App 或可下载代码包中嵌入字体前，需要确认实际项目授权覆盖对应使用场景。不要把包含授权人、账号或购买凭证信息的授权文件放入公开项目。
