import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import daisyui from 'daisyui'
import CodeTitle from "remark-code-title"
import astroLayouts from "astro-layouts"
import { remarkReadingTime } from './src/utils/reading-time.mjs';
// https://astro.build/config


const layoutOptions = {
  "pages/blog/**/*": "@layouts/BlogLayout.astro",
}

export default defineConfig({


    markdown: {
      extendDefaultPlugins: true,
      remarkPlugins: [[astroLayouts, layoutOptions],remarkReadingTime],
       shikiConfig:{
        theme: "dark-plus"
       },
    },
      integrations: [mdx(),react(), tailwind({
        config: { path: './tailwind.config.cjs' },
        plugins: [daisyui],
      })],
});
