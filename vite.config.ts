import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  publicDir: 'public',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ThetaThemeDefault',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    cssCodeSplit: false,
    copyPublicDir: true, // Copy public assets to dist
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'next',
        'lucide-react',
        '@theme/ui',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'tw-animate-css',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});