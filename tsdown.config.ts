import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rolldown'
import './scripts/build-css'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  fixedExtension: true,
  plugins: [
    Vue(),
  ],
})
