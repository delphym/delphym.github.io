import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import 'dotenv/config'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  console.log('isDev:', isDev)

  const base = isDev
    ? '/~delphym/REACT/delphym.github.io/' // Dev base
    : '/delphym.github.io/' // Prod base (GitHub pages)
  console.log('base:', base)

  return {
    /*
    # .env.development
    # VITE_BASE_URL=/~delphym/REACT/delphym.github.io/

    # .env.production
    ## For production AKA GitHub pages
    # VITE_BASE_URL=/delphym.github.io/
    // base: process.env.VITE_BASE_URL || '/', // Base URL if .env files are used
 */
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
  }
})
