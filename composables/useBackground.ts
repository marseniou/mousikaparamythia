// composables/useBackground.ts
import { useState } from '#app'
import { palettes } from '~/server/palettes'

export const useBackground = () => {
  // Select a random palette only once per session and store it in the state
  const selectedPalette = useState('selectedPalette', () => {
    return palettes[Math.floor(Math.random() * palettes.length)]
  })

  return {
    selectedPalette,
  }
}
