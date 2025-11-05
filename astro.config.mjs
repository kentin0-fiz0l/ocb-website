// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kentin0-fiz0l.github.io',
  base: '/ocb-website',
  vite: {
    plugins: [tailwindcss()]
  }
});