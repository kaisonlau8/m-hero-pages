# M-Hero Pages

静态报告归档站，用于发布猛士汽车服务运营相关 HTML 报告。

## 本地预览

```bash
npm run dev
```

打开：

```text
http://localhost:4173
```

## 构建

```bash
npm run build
```

构建产物输出到 `dist/`。

## 新增文章

把新的 HTML 报告放到：

```text
site/articles/<slug>/index.html
```

再在 `site/index.html` 增加一条文章卡片即可。

当前文章：

- `/articles/mengshi-q1-q2-customer-voice/`

## Cloudflare Pages

推荐配置：

- Project name: `m-hero-pages`
- Production branch: `main`
- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command: 留空
- Custom domain: `m-hero-pages.41box.com`

不要在 Cloudflare Pages 的 Deploy command 里填写：

```bash
npx wrangler deploy
```

这是 Workers 部署命令。当前项目是 Pages Git 集成，构建完成后 Cloudflare Pages 会自动发布 `dist/`。如果填了 `npx wrangler deploy`，会出现 `Missing entry-point to Worker script or to assets directory`。

### DNS 注意事项

这个仓库现在同时兼容两种发布方式，但同一个域名只能选一种入口，不要混用：

1. Cloudflare Pages
   - Cloudflare Pages 项目里添加 Custom domain：`m-hero-pages.41box.com`
   - DNS CNAME：
     - Name: `m-hero-pages`
     - Target: `m-hero-pages.pages.dev`
   - 必须先在 Pages 项目里绑定 Custom domain，再确认 CNAME。

2. GitHub Pages
   - GitHub Pages 发布源：`main` branch `/root`
   - DNS CNAME：
     - Name: `m-hero-pages`
     - Target: `kaisonlau8.github.io`
   - 不要指向 `m-hero-pages.pages.dev`。

当前仓库根目录也放了 `index.html` 和 `articles/`，所以 GitHub Pages 的 branch/root 发布方式可直接使用；`site/` + `dist/` 仍用于 Cloudflare Pages 构建。
