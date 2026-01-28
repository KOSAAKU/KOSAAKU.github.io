import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Si votre repo s'appelle "portfolio", mettez base: '/portfolio/'
  // Si c'est "username.github.io", laissez base: '/'
  base: '/portfolio/', 
})