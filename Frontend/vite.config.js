import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react(), 
  ],
  proxy: {
    '/api': 'http://localhost:5100',  // Proxy to backend
  },
})
