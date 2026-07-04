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
   - Vercel

     Application Preset: `Astro`

     Build Command: `pnpm build`

     Output Directory: `dist`

     Install Command: `pnpm install`
   - GitHub Pages

     Select *GitHub Actions* in the *Source* options.
   - CloudFlare Workers / Pages

     Build Command: `pnpm build`

     Output Directory: `dist`

6. Configuration

   Refer to the [Astro documentation](https://docs.astro.build/getting-started/) and [Firefly theme documentation](https://docs-firefly.cuteleaf.cn/).
