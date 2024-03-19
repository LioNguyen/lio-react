import * as path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    root: __dirname,
    setupFiles: ['./vitest.setup.ts'],
    environment: 'jsdom',
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src/') },
  },
})
