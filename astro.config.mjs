import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import daisyui from 'daisyui'
import cloudflare from '@astrojs/cloudflare';
import CodeTitle from "remark-code-title"
import astroLayouts from "astro-layouts"
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/reading-time.mjs';
// https://astro.build/config


const layoutOptions = {
  "pages/blog/**/*": "@layouts/BlogLayout.astro",
}

export default defineConfig({
  site: 'https://aaronchris.pages.dev/',
  output: 'server',
  adapter: vercel(),
    markdown: {
      extendDefaultPlugins: true,
      remarkPlugins: [[astroLayouts, layoutOptions],remarkReadingTime],
       shikiConfig:{
        theme: "vitesse-dark"
       },
    },
      integrations: [sitemap(),mdx(),react(),tailwind({
        config: { path: './tailwind.config.cjs' },
        plugins: [daisyui],
      })],
});
