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
   - Vercel<br>
     Application Preset: `Astro`<br>
     Build Command: `pnpm build`<br>
     Output Directory: `dist`<br>
     Install Command: `pnpm install`
   - Netlify<br>
     Build command: `pnpm build`<br>
     Publish directory: `dist`
   - GitHub Pages<br>
     Set the _Source_ option to _GitHub Actions_.
   - Cloudflare Workers / Pages<br>
     Build Command: `pnpm run build`<br>
     Build Command (Workers): `npx wrangler deploy`<br>
     Output Directory: `dist`
   - EdgeOne Pages<br>
     Application Preset: `Astro`<br>
     Output Directory: `dist`<br>
     Build Command: `pnpm build`<br>
     Install Command: `pnpm install`

6. Configuration

   Refer to the [Astro documentation](https://docs.astro.build/getting-started/) and [Firefly theme documentation](https://docs-firefly.cuteleaf.cn/).
