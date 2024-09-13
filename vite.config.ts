import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
        "/links": {
            target: "http://localhost:8000", // temp backend
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/links/, '/links'),
        },
        "/link": {
            target: "http://localhost:8000", // temp backend
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/link/, '/link'),
        }
    }
  },
  plugins: [react()],
})
