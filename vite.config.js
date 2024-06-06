import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Edusity/",
  resolve: {
    alias: {
      '@': '/src', // This line defines the '@' alias
    },
  },
});