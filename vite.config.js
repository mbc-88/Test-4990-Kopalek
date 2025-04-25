import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Test-4990-Kopalek",          // same as GitHub Pages sub-path
  plugins: [react()],
})
