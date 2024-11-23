# ColabHub

一个基于 [XyHK-HUC/Colab](https://github.com/XyHK-HUC/Colab) 项目的订阅管理界面，采用 PornHub 风格的 UI 设计。

## 项目简介

这是一个简单的代理订阅管理界面，支持 Shadowsocks、Singbox 和 Clash 三种协议。项目使用 Cloudflare Workers 部署，提供了一个美观的用户界面来管理和分发订阅链接。

### 主要特点

- 🎨 PornHub 风格的用户界面
- 🚀 支持多种代理协议
- 📋 一键复制订阅链接
- 💾 本地保存使用教程
- ☁️ 基于 Cloudflare Workers 部署

## 部署说明

### 方法 1：直接部署

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 Workers & Pages
3. 创建新的 Worker
4. 复制 `worker.js` 的内容到编辑器中
5. 保存并部署

### 方法 2：通过 Wrangler 部署

1. 安装 Wrangler CLI： 