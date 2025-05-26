<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue?: number
}>()

const emit = defineEmits(['update:modelValue'])

const count = ref(props.modelValue ?? 0)

function increment() {
  count.value++
  emit('update:modelValue', count.value)
}

function decrement() {
  count.value--
  emit('update:modelValue', count.value)
}

function reset() {
  count.value = 0
  emit('update:modelValue', count.value)
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-4 border rounded shadow-md">
    <slot />
    <div class="text-xl font-bold">
      {{ count }}
    </div>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600" @click="increment">
        Increment
      </button>
      <button class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600" @click="decrement">
        Decrement
      </button>
      <button class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" @click="reset">
        Reset
      </button>
    </div>
  </div>
</template>
