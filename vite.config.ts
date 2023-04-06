import { defineConfig } from 'vite';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [svgr(), reactRefresh()],
});
