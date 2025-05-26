import { defineBuildConfig } from 'unbuild'
import Vue from 'unplugin-vue/rollup'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: 'node16',
  clean: true,
  hooks: {
    'rollup:options': function (ctx, options) {
      options.plugins.push(Vue())
    },
  },
})
