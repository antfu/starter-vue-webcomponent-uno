import {
  defineConfig,
  presetIcons,
  presetWind3,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'color-base': 'color-neutral-800 dark:color-neutral-300',
      'bg-base': 'bg-white dark:bg-#111',
      'bg-secondary': 'bg-#eee dark:bg-#222',
      'border-base': 'border-#8882',
      'ring-base': 'ring-#8882',
    },
  ],
  presets: [
    // Currently we need to use Wind3, as Shadow DOM does not support @property declarations
    presetWind3({
      dark: 'media',
    }),
    presetIcons({
      warn: true,
    }),
  ],
  transformers: [
    // This enable using of `--uno` and `--at-apply` directives in custom CSS.
    transformerDirectives(),
  ],
})
