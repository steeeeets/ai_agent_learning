import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import string from 'vite-plugin-string'

export default defineConfig({
  plugins: [
    react(),
    string({
      include: ['**/*.md']
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

