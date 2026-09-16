import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Setiap halaman di situs ini adalah entry HTML terpisah (multi-page app),
// bukan single-page-app dengan client-side router. Ini dipertahankan dari
// struktur lama karena setiap URL (about, galery, join, dst.) sudah dipakai
// di luar (TikTok, Instagram, WhatsApp), jadi jalur URL tidak berubah.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        galery: resolve(__dirname, 'galery.html'),
        constitution: resolve(__dirname, 'constitution.html'),
        join: resolve(__dirname, 'join.html'),
        selection: resolve(__dirname, 'selection.html'),
        proposal: resolve(__dirname, 'proposal.html'),
      },
    },
  },
});
