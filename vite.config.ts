import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './' // permite rodar no GitHub Pages em qualquer subcaminho ou localmente
});
