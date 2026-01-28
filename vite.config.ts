import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Pour un repo nommé "KOSAAKU.github.io", le site est à la racine.
  base: '/', 
})