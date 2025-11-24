import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'//forma de pedir que cargue la biblioteca de tailwindcss

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
