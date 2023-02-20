import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  // default port is 5173, 
  // to change the port change server port as below
  //   server: {
  //     host: '0.0.0.0',
  //     port: 3000,
  //   },
})
