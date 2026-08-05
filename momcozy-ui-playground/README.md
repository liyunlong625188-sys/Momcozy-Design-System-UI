# Momcozy UI Playground

这是主 `momcozy-shadcn-design-system` Skill 的组件文档站与验收环境，不是仓库的主交付物。左侧目录统一收纳 Skill、工程 Markdown、组件级 Showcase、完整产品 Demo 和组件清单；中间切换文档、真实页面 iframe 与组件 Gallery；右侧显示页内导航。组件源码由官方 CLI 生成，底层使用 Radix primitives；页面使用 React 19、Tailwind CSS 4 和 Vite。

## 运行

从仓库根目录运行：

```bash
pnpm components:dev
pnpm components:build
```

也可以在本目录运行：

```bash
pnpm dev --host 127.0.0.1 --port 5180
pnpm build
```

生产输出位于 `dist/index.html`。

## 结构

- `src/components/ui/`：官方 shadcn/ui 全量可编辑源码。
- `src/App.tsx`：文档门户、Markdown 渲染、Demo iframe 与六组组件总览。
- `src/index.css`：Tailwind/shadcn 主题桥，直接引用 `../../src/styles/momcozy-theme.css`。
- `src/portal.css`：三栏文档结构、响应式侧栏和 Mom 产品线组件 recipe。
- `components.json`：Radix + Nova + Hugeicons 组件生成配置。
- `design-qa.md`：参考结构与浏览器实现的视觉验收记录。

## 维护边界

- 门户通过 `data-product-line="mom"` 明确声明 Mom 产品线；没有声明产品线的复用组件仍以 Grays 为默认主题。
- 不在组件文件内硬编码 Momcozy 色值，颜色、字体、圆角和状态均通过 CSS variables 传递。
- 这里负责全量能力盘点和视觉验收；产品项目仍按需复制组件。
- 更新官方组件前先执行 `pnpm dlx shadcn@latest add --all --dry-run`，确认差异后再写入并重新运行构建与视觉 QA。
