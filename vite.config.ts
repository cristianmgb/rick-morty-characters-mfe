import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'characters',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: [
        'react',
        'react-dom',
        '@mui/material',
        '@emotion/react',
        '@emotion/styled',
        'rick-morty-components-lib',
        '@tanstack/react-query',
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
  },
  preview: {
    port: 5001,
    strictPort: true,
  },
});
