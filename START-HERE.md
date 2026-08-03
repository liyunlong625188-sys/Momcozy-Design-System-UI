# 从这里开始

这个工程包含一个 React 预览壳和四个编号 Demo：

```text
public/demos/
├── 01-user-guide/
├── 02-group-pumping/
├── 03-voice-log/
└── 04-cozy-ai/
```

## 启动

在当前目录打开终端，运行：

```bash
pnpm install
pnpm demo
```

浏览器会自动打开 `http://127.0.0.1:5177/demos`，在目录页中查看四个 Demo 的状态并进入预览。

不要直接双击工程根目录的 `index.html`。它是 Vite 入口，需要通过开发服务器加载。
