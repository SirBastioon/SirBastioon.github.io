import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/SirBastioon.github.io/portfolio_page', // z.B. '/my-portfolio/'
  plugins: [react()],
});
