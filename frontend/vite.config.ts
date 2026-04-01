import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { pathToFileURL } from 'url';

interface AppConfig {
  entry: Record<string, string>;
  outDir: string;
}

// Custom Sass importer that strips the webpack-style `~` prefix
// and resolves the import from node_modules.
const tildeImporter = {
  findFileUrl(url: string) {
    if (url.startsWith('~')) {
      const resolved = resolve(
        import.meta.dirname,
        'node_modules',
        url.substring(1),
      );
      return pathToFileURL(resolved);
    }
    return null;
  },
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const libs: Record<string, AppConfig> = {
    card_carousel: {
      entry: {
        cardCarouselStudent: resolve(
          import.meta.dirname,
          'src/card-carousel/student-ui/main.tsx',
        ),
        cardCarouselStudio: resolve(
          import.meta.dirname,
          'src/card-carousel/studio-ui/main.tsx',
        ),
      },
      outDir: resolve(__dirname, '../src/exemplar_blocks/card_carousel/public'),
    },
    keypoint_block: {
      entry: {
        keypointBlockStudent: resolve(
          import.meta.dirname,
          'src/keypoint-block/student-ui/index.tsx',
        ),
        keypointBlockStudio: resolve(
          import.meta.dirname,
          'src/keypoint-block/studio-ui/index.tsx',
        ),
      },
      outDir: resolve(
        __dirname,
        '../src/exemplar_blocks/keypoint_block/public',
      ),
    },
  };

  const xblock = process.env.XBLOCK;
  if (!xblock || !(xblock in libs)) {
    console.error(`Invalid XBLOCK environment variable: ${xblock}`);
    console.error('Set it to the XBlock you wish to build. Available options:\n');
    for (const key in libs) {
      console.error(`  ${key}`);
    }
    console.error('\nFor example: export XBLOCK=card_carousel');
    process.exit(1);
  }

  return {
    define: {
      global: 'globalThis',
      // Don't force NODE_ENV in test mode so vitest can set it to 'test'
      ...(mode !== 'test' && {
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    },
    root: 'src',
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [resolve(import.meta.dirname, 'node_modules')],
          importers: [tildeImporter],
          silenceDeprecations: ['import', 'global-builtin'],
        },
      },
      lightningcss: {
        errorRecovery: true, // Otherwise lightningcss fails with var() usage in media queries.
      },
    },
    build: {
      cssMinify: 'lightningcss',
      lib: {
        entry: libs[xblock].entry,
        formats: ['es'],
      },
      outDir: libs[xblock].outDir,
      emptyOutDir: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./test/setup.ts'],
    },
  };
});
