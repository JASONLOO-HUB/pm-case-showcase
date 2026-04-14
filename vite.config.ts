import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages 项目站点在子路径（/repo/）下托管，需相对资源路径，否则 JS/CSS 会从域名根加载而 404
  base: './',
  plugins: [react()],
});
