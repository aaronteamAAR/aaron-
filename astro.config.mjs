import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import daisyui from 'daisyui'
import { remarkReadingTime } from './src/utils/reading-time.mjs';
// https://astro.build/config


export default defineConfig({


    markdown: {
      extendDefaultPlugins: true,
      remarkPlugins: [remarkReadingTime],
       shikiConfig:{
        theme: "vitesse-dark"
       }
    },
      integrations: [mdx(), tailwind({
        config: { path: './tailwind.config.cjs' },
        plugins: [daisyui],
      })],
});
