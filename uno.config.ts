import {
  defineConfig,
  presetIcons,
  presetWind4,
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
    presetWind4({
      dark: 'media',
      reset: true,
    }),
    presetIcons({
      warn: true,
    }),
  ],
})
