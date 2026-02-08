import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This tells Vite/Sass exactly where "src" is
      "@": path.resolve(__dirname, "./src"),
      "src": path.resolve(__dirname, "./src"),
    },
  },
  base: process.env.VITE_BASE_URL || '/breaking-code-portfolio',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "src/styles/_variables" as *;
        @use "src/styles/_mixins" as *;
        @use "src/styles/helper" as *;
        `,
      }
    }
  }
})
