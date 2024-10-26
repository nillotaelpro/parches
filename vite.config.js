import { defineConfig } from 'vite';
import { resolve } from 'path'

process.env.BROWSER = "opera GX"

export default defineConfig({
  root: './', // define la raíz del proyecto si no está en la carpeta `src`
  publicDir: 'public', // carpeta pública con archivos estáticos
  build: {
    outDir: 'dist', // define la carpeta de salida para los archivos de producción
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
    port: 3000, // puerto para el servidor de desarrollo
    open: true,
  },
});
