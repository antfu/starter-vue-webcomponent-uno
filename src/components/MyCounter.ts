import { defineCustomElement } from 'vue'
import css from '../.generated/css'
import Component from './MyCounter.vue'

export const MyCounter = defineCustomElement(
  Component,
  {
    shadowRoot: true,
    styles: [css],
  },
)

customElements.define('my-counter', MyCounter)
