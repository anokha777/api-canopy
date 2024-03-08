import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './env',
  envPrefix: 'REACT_APP_', //same name as we give in env 
  server: {
    port: 3000,
    strictPort: true, //if port 3000 not available do not run
    open: true, //open the browser
    host: true,
  },

  preview:{
    port: 80, //production will always be on port 80
    strictPort: true,
    open: true,
  },

  build:{
    port: 80,
    strictPort: true,
  }
});