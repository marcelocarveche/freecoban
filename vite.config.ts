import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Use /freecoban/ for GitHub Pages, or / for custom domain
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
