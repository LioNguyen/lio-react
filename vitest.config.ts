import * as path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: __dirname,

    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',

    // Make all imports from Vitest global so that we don’t manually import(e.g. expect, describe, it) in each test file.
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src/') },
  },
})
