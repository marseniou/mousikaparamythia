<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-4">Παιχνίδι Μνήμης</h1>
    <p class="text-lg text-center text-gray-600 dark:text-gray-400 mb-4">
      Βρείτε τις ίδιες κάρτες για να κερδίσετε!
    </p>
    <p class="text-2xl text-center text-gray-800 dark:text-gray-200 mb-8">
      Κλικ: {{ gameComponent?.clickCount }}
    </p>
    <MemoryGame ref="gameComponent" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MemoryGame from '~/components/MemoryGame.vue'

const gameComponent = ref(null)
</script>
