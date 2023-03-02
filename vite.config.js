import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "near-api-js-vue",
  plugins: [vue()],
  build: {
    commonjsOptions: { include: [] },
  },
  optimizeDeps: {
    disabled: false,
  },
})
