import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/breaking-code-portfolio',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "./src/styles/variables" as *;
        @use "./src/styles/mixins" as *;
        @use "./src/styles/helper" as *;
        `,
      }
    }
  }
})
