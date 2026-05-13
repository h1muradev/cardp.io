import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { writeFileSync, rmSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

function simpleLaravelHotFile() {
  return {
    name: 'simple-laravel-hot-file',
    configureServer(server) {
      const address = server.config.server.host || '127.0.0.1';
      const port = server.config.server.port || 5173;
      writeFileSync(resolve(__dirname, 'public/hot'), `http://${address}:${port}`);
      server.httpServer?.once('close', () => rmSync(resolve(__dirname, 'public/hot'), { force: true }));
    },
  };
}

// Vite compila CSS/JS puros para o Laravel; não há React, Next.js ou Inertia.
export default defineConfig({
  plugins: [simpleLaravelHotFile(), tailwindcss()],
  publicDir: false,
  build: {
    manifest: 'manifest.json',
    outDir: 'public/build',
    rollupOptions: {
      input: [
        resolve(__dirname, 'resources/css/app.css'),
        resolve(__dirname, 'resources/js/app.js'),
      ],
    },
  },
});
