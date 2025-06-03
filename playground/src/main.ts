/* eslint-disable no-console */
import { reactive, ref, watchEffect } from 'vue'
import { MyCounter } from '../../src'

import './override-style.css'

const count = ref(0)
const deltas = reactive({
  increment: 1,
  decrement: -1,
})

watchEffect(() => {
  console.log('count', count.value)
})

watchEffect(() => {
  console.log('deltas', { ...deltas })
})

const props = reactive({
  count,
  deltas,
})

const app = document.querySelector('#app')
const custom = new MyCounter(props)
custom.addEventListener('update:count', (event: any) => {
  console.log('update:count', event)
  count.value = event.detail[0]
})
app!.appendChild(custom)
