// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sipple.github.io',
  base: '/london_grove_commons/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
