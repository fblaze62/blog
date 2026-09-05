<div align="center">

# FeatherBlaze's Blog

[Preview](https://blog.fblaze62.top/) | [Preview (Cloudflare Pages)](https://fbblog.pages.dev/) | [Preview (Vercel)](https://fbblog.vercel.app/) | [Preview (Netlify)](https://fbsblog.netlify.app/) | [Preview (GitHub Pages) (No CSS)](https://fblaze62.github.io/blog)

![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen) ![pnpm >= 11](https://img.shields.io/badge/pnpm-%3E%3D9-blue) ![Astro](https://img.shields.io/badge/Astro-7.2.0-orange) ![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-blue)

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/fbblog) [![Netlify Status](https://api.netlify.com/api/v1/badges/45156370-6239-42b1-9d48-c34b137878c4/deploy-status)](https://app.netlify.com/projects/fbsblog/deploys) [![Deploy to GitHub Pages](https://github.com/fblaze62/blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/fblaze62/blog/actions/workflows/deploy.yml)

</div>

1. Clone the repository

   ```bash
   git clone https://github.com/fblaze62/blog.git
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Start the development server

   ```bash
   pnpm dev
   ```

4. Build for production

   ```bash
   pnpm build
   ```

5. Deploy

   > From [Firefly theme documentation](https://docs-firefly.cuteleaf.cn/en/guide/deploy.html).
   - Vercel<br>
     Application Preset: `Astro`<br>
     Build Command: `pnpm build`<br>
     Output Directory: `dist`<br>
     Install Command: `pnpm install`<br>
     Settings > General > Node.js Version: `22.x`
   - Netlify<br>
     Application preset: `Astro`<br>
     Build command: `pnpm build`<br>
     Output directory: `dist`<br>
     Install command: `pnpm install`<br>
     Environment variables > `NODE_VERSION`: `22`
   - GitHub Pages<br>
     Settings > Pages > Source: GitHub Actions<br>
     /config/siteConfig.ts > SiteConfig.site_url: `"https://<username>.github.io"`<br>
     /astro.config.mjs > defineConfig.base: `"/<repo-name>/"` (No editing needed for `base`, if the GitHub Pages set a custom domain or the repo is named `<username>.github.io`)
   - Cloudflare Workers / Pages<br>
     Build command: `pnpm run build`<br>
     Deploy command (Workers): `npx wrangler deploy`<br>
     Build output directory (Pages): `dist`
   - EdgeOne Pages<br>
     Preset framework: `Astro`<br>
     Build output directory: `dist`<br>
     Build command: `pnpm build`<br>
     Install command: `pnpm install`<br>
     Environment variables > `NODE_VERSION`: `22`
   - Alibaba Cloud ESA<br>
     Framework preset: `Astro`<br>
     Build command: `pnpm build`<br>
     Output directory: `dist`<br>
     Environment variables > `NODE_VERSION`: `22`

6. Configuration

   Refer to the [Astro documentation](https://docs.astro.build/getting-started/) and [Firefly theme documentation](https://docs-firefly.cuteleaf.cn/).
