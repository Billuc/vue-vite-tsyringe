import { defineConfig } from 'vite';

import rollupTypescript from '@rollup/plugin-typescript';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    rollupTypescript(),
    // If you have more plugins to add, make sure they are after rollupTypescript
  ],
});
