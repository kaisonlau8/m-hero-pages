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
- Custom domain: `m-hero-pages.41box.com`
