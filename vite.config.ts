import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenvPlugin from 'vite-plugin-dotenv';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dotenvPlugin(),],
})
