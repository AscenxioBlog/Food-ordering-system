import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'],

  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Adjust this according to your API
    },
  },
})
