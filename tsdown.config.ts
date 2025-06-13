import { defineConfig } from 'tsdown'
import Vue from 'unplugin-vue/rolldown'
import { buildCSS, GENERATED_CSS } from './scripts/build-css'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  fixedExtension: true,
  hooks: {
    'build:prepare': async ({ options }) => {
      await buildCSS()
      let { watch, ignoreWatch = [] } = options
      if (!watch)
        return
      typeof ignoreWatch === 'string' && (options.ignoreWatch = [ignoreWatch])
      Array.isArray(ignoreWatch) && ignoreWatch.push(GENERATED_CSS)
      ignoreWatch = Array.from(new Set(ignoreWatch))
    },
  },
  plugins: [
    Vue(),
  ],
})
