<div align="center">

# FeatherBlaze's Blog

简体中文 | [English](https://github.com/fblaze62/blog/blob/main/README.md)

> 由 [Astro](https://astro.build/) & [Firefly 主题模板](https://github.com/CuteLeaf/Firefly) 驱动。托管于 Cloudflare Pages。

[预览](https://blog.fblaze62.top/) | [预览 (Cloudflare Pages)](https://fbblog.pages.dev/) | [预览 (Vercel)](https://fbblog.vercel.app/) | [预览 (Netlify)](https://fbsblog.netlify.app/) | [预览 (GitHub Pages) (无 CSS)](https://fblaze62.github.io/blog)

![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen) ![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue) ![Astro](https://img.shields.io/badge/Astro-7-orange) ![TypeScript](https://img.shields.io/badge/TypeScript-6-blue)

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/fbblog) [![Netlify Status](https://api.netlify.com/api/v1/badges/45156370-6239-42b1-9d48-c34b137878c4/deploy-status)](https://app.netlify.com/projects/fbsblog/deploys) [![Deploy to GitHub Pages](https://github.com/fblaze62/blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/fblaze62/blog/actions/workflows/deploy.yml)

</div>

## 环境要求

- [Node.js](https://nodejs.org/) 22.0 或更高版本
- [pnpm](https://pnpm.io/) 包管理器
- [Git](https://git-scm.com/)

## 安装

1. 克隆仓库

   ```bash
   git clone https://github.com/fblaze62/blog.git
   ```

2. 安装依赖

   ```bash
   pnpm install
   ```

3. 启动开发服务器

   ```bash
   pnpm dev
   ```

4. 构建生产版本

   ```bash
   pnpm build
   ```

## 配置

   请参考 [Firefly Docs](https://docs-firefly.cuteleaf.cn/zh/)。

## 部署

   > 来自 [Firefly Docs](https://docs-firefly.cuteleaf.cn/en/guide/deploy.html)。
   - Vercel<br>
     Application Preset：`Astro`<br>
     Build Command：`pnpm build`<br>
     Output Directory：`dist`<br>
     Install Command：`pnpm install`<br>
     Settings > General > Node.js Version：`22.x`
   - Netlify<br>
     Application preset：`Astro`<br>
     Build command：`pnpm build`<br>
     Output directory：`dist`<br>
     Install command：`pnpm install`<br>
     Environment variables > `NODE_VERSION`：`22`
   - GitHub Pages<br>
     Settings > Pages > Source：GitHub Actions<br>
     /config/siteConfig.ts > SiteConfig.site_url：`"https://<username>.github.io"`<br>
     /astro.config.mjs > defineConfig.base：`"/<repo-name>/"`（若使用自定义域名，或仓库名为`<username>.github.io`，`base`都无需设置）
   - Cloudflare Workers / Pages<br>
     构建命令：`pnpm run build`<br>
     部署命令（Workers）：`npx wrangler deploy`<br>
     构建输出目录（Pages）：`dist`
   - EdgeOne Pages<br>
     框架预设：`Astro`<br>
     输出目录：`dist`<br>
     构建命令：`pnpm build`<br>
     安装命令：`pnpm install`<br>
     环境变量 > `NODE_VERSION`：`22`
   - 阿里云 ESA<br>
     框架预设：`Astro`<br>
     构建命令：`pnpm build`<br>
     输出目录：`dist`<br>
     环境变量 > `NODE_VERSION`：`22`
