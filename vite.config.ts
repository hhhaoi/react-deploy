import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/react-deploy/", // this would be just '/' if it were on a domain
  plugins: [react()],
})
