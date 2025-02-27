import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: '0.0.0.0', // Permite acesso externo
    port: 3000,
  },
  preview: {
    host: '0.0.0.0', // Garante que o servidor de pré-visualização também aceite conexões externas
    port: 3000,
    allowedHosts: ['localhost', 'fitness-app-az2k.onrender.com']
  },
});