# Momcozy Design System Kit 1.0.0

本套件用于让产品、设计和研发同事通过 Codex 快速生成符合 Momcozy 3.0 设计语言的智能母婴硬件 IoT、设备管理、护理指导、家庭健康和社区 Demo。

## 交付内容

- `momcozy-shadcn-design-system-1.0.0.skill`
  - 可安装到 Codex 的设计系统 Skill。
  - 包含 Light/Dark token、字体、shadcn/ui 映射、组件规范、Demo 规则、生成脚本和审计脚本。
- `momcozy-design-system-demo-1.0.0.zip`
  - 可编辑的 React + Vite Demo 工程。
  - 包含 Momcozy App、User Guide 和 Group Pumping Community 示例。
- `CHECKSUMS-SHA256.txt`
  - 用于确认文件在传输后未损坏。

## 安装 Skill

推荐方法：

1. 在 Codex 中附加 `momcozy-shadcn-design-system-1.0.0.skill`。
2. 对 Codex 说：`请安装这个 Skill。`
3. 安装后使用 `$momcozy-shadcn-design-system` 明确调用。

也可以把 `.skill` 当作 ZIP 解压，将内容放入：

```text
~/.codex/skills/momcozy-shadcn-design-system/
```

目录下必须直接存在 `SKILL.md`。

## 运行 Demo

解压 `momcozy-design-system-demo-1.0.0.zip`，进入工程目录后运行：

```bash
pnpm install
pnpm dev --host 127.0.0.1 --port 5177
```

然后访问：

- Momcozy App：`http://127.0.0.1:5177/`
- User Guide：`http://127.0.0.1:5177/guide`
- Group Pumping Community：`http://127.0.0.1:5177/group-pumping`

如果本机没有 pnpm，可以在 Codex 中打开 Demo 文件夹并说：

```text
请安装依赖并在 127.0.0.1:5177 运行这个 Demo。
```

## 推荐提示词

```text
使用 $momcozy-shadcn-design-system，基于 Momcozy 3.0 tokens
设计一个智能吸奶器设备详情 Demo，支持 Light/Dark Mode。
```

```text
使用 $momcozy-shadcn-design-system，把这个页面的颜色、文字、
间距、圆角和按钮状态替换为 Momcozy semantic tokens。
```

```text
使用 $momcozy-shadcn-design-system，生成一个母婴社区话题页面。
不要做成购物 App，优先使用 shadcn/ui 组件和现有语义 token。
```

## 使用边界

- Skill 是设计规则与工程映射，不要求把 shadcn/ui 安装到 Skill 目录。
- 只有具体前端项目需要组件时，才在该项目内初始化 shadcn/ui。
- `Fills` 是按钮或容器填充色；`Labels` 是填充容器上的文字与图标色。
- 普通正文使用 `Colors / Text`，页面表面使用 `Colors / Backgrouds`。
- 工程统一使用 `Grays`，不再使用旧拼写 `Gays`。
- Demo 中所有可主题化颜色应通过 semantic token 使用，不要直接写品牌色值。

## 当前颜色版本

本版本已经采用四条产品线新的 Dark Mode `700`：

- Mom：`#DA5876`
- Care：`#9871D5`
- Parenting：`#CD7032`
- Family：`#329A7A`

Black/White 透明色阶与新版 Warning/Danger/Success 状态色仍在产品确认流程中，尚未作为正式 token 写入本版本。

## 字体与内部使用

套件包含 Exposure[-10] 与 Aeonik Soft Pro 字体文件。请按照公司现有字体授权范围使用，默认仅用于 Momcozy 内部产品、设计和研发协作，不要擅自对外分发。

