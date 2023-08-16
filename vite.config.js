import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'Portfolio_3d',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
     watch: {
      usePolling: true
     }
  }
})
