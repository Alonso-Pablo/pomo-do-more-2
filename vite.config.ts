import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@ui', replacement: path.resolve(__dirname, 'src/components/ui') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@public', replacement: path.resolve(__dirname, 'src/public') },
      { find: '@redux', replacement: path.resolve(__dirname, 'src/redux') },
      { find: '@ts', replacement: path.resolve(__dirname, 'src/ts') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
})
