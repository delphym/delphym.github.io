import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
    outDir: 'dist', // Output directory
    emptyOutDir: true, // Clean the output directory before building
  },
  publicDir: 'public', //Include public assets like .htaccess to enable React SPA on Apache server
})
