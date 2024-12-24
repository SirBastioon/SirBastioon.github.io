import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/SirBastioon/SirBastioon.github.io/tree/main/Portfolio_Page',
  plugins: [react()],
});
