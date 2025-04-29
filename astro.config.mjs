// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@styles': new URL('./src/styles', import.meta.url).pathname,
        '@assets': new URL('./src/assets', import.meta.url).pathname,
      },
    },
  }
});