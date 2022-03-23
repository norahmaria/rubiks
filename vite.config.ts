import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr-default-export-option'

export default defineConfig({
  plugins: [react(), svgr({ svgr: { icon: true, expandProps: 'end' } })],
})
