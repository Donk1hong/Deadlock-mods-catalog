import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.deadlockmods.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
