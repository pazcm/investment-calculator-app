import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/investment-calculator-app/',
  plugins: [react()],
})
