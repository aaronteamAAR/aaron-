import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import daisyui from 'daisyui'
// https://astro.build/config


export default defineConfig({
      integrations: [mdx(), tailwind({
        config: { path: './tailwind.config.cjs' },
        plugins: [daisyui],
      })],
});
