# starter-vue-uno-webcomponents

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Starter for creating agnostic WebComponents using Vue and UnoCSS

## Motivations

Sometimes when you want to build some embed UI for websites/apps you might not have control with.

For example, injected UI in web browser extensions, or dev tool UI etc. In those cases, styling can be a headache, because the CSS selectors are applying to the whole page and inferrance might occur.

We have nice tools like Vue's Scoped CSS, or native Nested CSS, but they only prevent the styles from leaking out, but can't prevent users styles from sneaking in. Some workarounds like rasing the specificity by using more selectors, or applying `!important` to every rules. However, those workarounds make it a lot harder to work with but still no guarantee to always work.

Shadow DOM is the only solution for the true style isolation, while the bare API is not very friendly work with.

We as developers, surely we want to use the stack that works the best to us. In my case, it's Vue for logic and UnoCSS for style. Unlike plain JavaScript you can directly bundle into a library, using Vue SFC and UnoCSS to build an agnostic library can be a bit tricky to set up.

That's why I created this starter, to help you quickly build an agnostic library using the tools with the best developer experience.

## Target Scenarios

- Embed/Injected UI
- A single or a few root components
- Could be shipped as a module entry or a library

### Non-targets

- Full-page UI
- SSR
- UI libraries

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © [Anthony Fu](https://github.com/antfu)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/starter-vue-uno-webcomponents?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/starter-vue-uno-webcomponents
[npm-downloads-src]: https://img.shields.io/npm/dm/starter-vue-uno-webcomponents?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/starter-vue-uno-webcomponents
[bundle-src]: https://img.shields.io/bundlephobia/minzip/starter-vue-uno-webcomponents?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=starter-vue-uno-webcomponents
[license-src]: https://img.shields.io/github/license/antfu/starter-vue-uno-webcomponents.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/starter-vue-uno-webcomponents/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/starter-vue-uno-webcomponents
