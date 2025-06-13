import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname,'index.html'),
        aboutMe: resolve(__dirname, 'about-me.html'),
        contactMe: resolve(__dirname,'contact-me.html'),
        projects: resolve(__dirname,'projects.html')
      },
    },
  },
})
