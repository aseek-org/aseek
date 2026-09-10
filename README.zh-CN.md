# aseek

A·SEEK — **Always Seeking**，组织介绍官网。纯静态站点，无构建依赖。

[简体中文](README.zh-CN.md) | [English](README.md)

## 预览

直接用浏览器打开 `index.html`，或起一个本地服务：

```bash
python -m http.server 8080
# 打开 http://localhost:8080
```

## 目录结构

```
.
├── index.html              # 页面结构（导航 / Hero / 关于 / 理念 / 产品 / 加入 / 页脚）
├── assets
│   ├── css/style.css       # 深空探索主题样式（含响应式与动效降级）
│   └── js/main.js          # 多语言切换、星空与节点网络画布、滚动进场、复制邮箱
└── README.md
```

## 内容要点

- **关于**：无固定办公地点、成员遍布全球、**人类与 AI 同行**、异步远程协作
- **理念**：自由 / 探索 / 开放 / 共生
- **成员**：可能由血肉构成，也可能由代码构成——两者同样被接纳
- **产品**：
  - [Any Chat](https://anychat.aseek.org)
  - [IP Search](https://ip.aseek.org)
- **加入**：发送邮件至 `admin@aseek.org`
- **语言**：English / 中文 / Español / Français / Deutsch / Português /
  Русский / العربية / हिन्दी / বাংলা / اردو / 日本語
  （العربية 与 اردو 为 RTL，会自动切换 `dir="rtl"`）

## 维护说明

- 新增产品：复制 `index.html` 中 `.product` 卡片结构，替换图标、名称与链接即可。
- 修改文案：文案集中在 `assets/js/main.js` 顶部的 `I18N` 字典（12 个语言对象），
  页面元素通过 `data-i18n="键名"` 关联。
- **新增语言只需两处**（弹窗列表由 `LANGS` 自动生成，无需改 HTML）：
  1. `main.js` 的 `LANGS` 数组加一条 `{ code, name, en, html }`（RTL 语言再加 `rtl: true`）；
  2. `I18N` 里加同名对象。
- 语言默认按浏览器语言判定（未命中则英文），用户手动切换后写入 `localStorage`（键名 `aseek-lang`）。
- 改动 HTML 静态文案时，请同步 `I18N.en`，保持两者一致（可用脚本逐条比对校验）。
