import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // default port is 5173, 
  // to change the port uncomment below
  // server: {
  //   port: 3000,
  // },
})
