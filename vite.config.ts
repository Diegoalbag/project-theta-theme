import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(resolve(__dirname, "package.json"), "utf-8"));

export default defineConfig({
  define: {
    // Must be JSON.stringify'd — `define` does a raw text substitution.
    __THEME_NAME__: JSON.stringify(pkg.name),
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  publicDir: "public",
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ThetaThemeDefault",
      fileName: () => "theme.bundle.js",
      formats: ["iife"],
    },
    cssCodeSplit: false,
    copyPublicDir: true,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        format: "iife",
        inlineDynamicImports: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        entryFileNames: "theme.bundle.js",
        chunkFileNames: "theme.bundle.js",
        assetFileNames: "theme.bundle.[ext]",
      },
    },
  },
});