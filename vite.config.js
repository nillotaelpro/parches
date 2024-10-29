import { defineConfig } from 'vite';
import { resolve } from 'path'
export default defineConfig({
  root: './', 
  publicDir: 'public', 
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        manada: resolve(__dirname, 'manada.html'),
        tropa: resolve(__dirname, 'tropa.html'),
        comunidadyClan: resolve(__dirname, 'comunidadyclan.html'),
      }
    }
  },
  server: {
    port: 3000, 
  },
});
