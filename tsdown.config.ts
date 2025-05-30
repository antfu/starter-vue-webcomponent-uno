import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rolldown'
import { buildCSS } from './scripts/build-css'

await buildCSS()

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  fixedExtension: true,
  plugins: [
    Vue(),
  ],
})
