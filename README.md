## FeatherBlaze's Blog

[Preview](https://blog.fblaze62.top/)

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
