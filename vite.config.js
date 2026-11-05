// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Важно: имя репозитория с косой чертой в начале и конце
  base: '/Imperia_Hyperion/', 
})
