import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const base =
  process.env.NODE_ENV === 'production'
    ? '/delphym.github.io/'
    : '/~delphym/REACT/delphym.github.io/'

export default defineConfig({
  base,
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/.htaccess',
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
    outDir: 'dist', // Output directory
    emptyOutDir: true, // Clean the output directory before building
  },
  publicDir: 'public', // Include public assets like .htaccess to enable React SPA on Apache server
})
