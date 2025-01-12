import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/dist/", //para servidor local usa "/dist"
  plugins: [react()],
})