import Vue from 'unplugin-vue/vite'
import { defineConfig } from 'vite'
import { buildCSS } from '../scripts/build-css'

export default defineConfig({
  plugins: [
    Vue(),
    {
      name: 'build-css',
      handleHotUpdate({ file }) {
        if (file.endsWith('.vue')) {
          buildCSS().catch(console.error)
        }
      },
    },
  ],
})
