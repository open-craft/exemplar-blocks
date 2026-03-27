import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

interface AppConfig {
  entry: Record<string, string>,
  outDir: string
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const libs: Record<string, AppConfig> = {
    'card_carousel': {
      entry: {
        'cardCarouselStudent': resolve(import.meta.dirname, "src/card-carousel/student-ui/main.tsx"),
        'cardCarouselStudio': resolve(import.meta.dirname, "src/card-carousel/studio-ui/main.tsx")
      },
      outDir: resolve(__dirname, '../src/exemplar_blocks/card_carousel/public')
    }
  }
  const xblock = process.env.XBLOCK || 'card_carousel';

  return {
    define: {
      global: 'globalThis',
      // Don't force NODE_ENV in test mode so vitest can set it to 'test'
      ...(mode !== 'test' && { 'process.env.NODE_ENV': JSON.stringify('production') }),
    },
    root: 'src',
    plugins: [react()],
    css: {
      lightningcss: {
        errorRecovery: true, // Otherwise lightningcss fails with var() usage in media queries.
      },
    },
    build: {
      cssMinify: 'lightningcss',
      lib: {
        entry: libs[xblock].entry,
        formats: ["es"],
      },
      outDir: libs[xblock].outDir,
      emptyOutDir: true
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./test/setup.ts'],
    },
  }
});
