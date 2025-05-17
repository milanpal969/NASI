import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 👇 import the Tailwind‑for‑Vite plugin:
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwind(),],
})
