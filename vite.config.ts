import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
  rollupOptions: {
  input: {
  home: '/index.html',
  aboutMe: '/about-me.html',
  contactMe:'/contact-me.html',
  projects:'/projects.html'
  },
  },
  },
  });
