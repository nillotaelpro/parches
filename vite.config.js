import { defineConfig } from 'vite';
import { resolve } from 'path'
export default defineConfig({
  root: './', // define la raíz del proyecto si no está en la carpeta `src`
  publicDir: 'public', // carpeta pública con archivos estáticos
  build: {
    outDir: 'dist', // define la carpeta de salida para los archivos de producción
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        manada: resolve(__dirname, 'Manada.html'),
        tropa: resolve(__dirname, 'Tropa.html'),
        comunidadyClan: resolve(__dirname, 'ComunidadyClan.html'),
      }
    }
  },
  server: {
    port: 3000, // puerto para el servidor de desarrollo
  },
});
