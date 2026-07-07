// composables/useTheme.ts
import { useState } from '#app'
import { onMounted } from 'vue'
import { toZonedTime, format } from 'date-fns-tz'

export const useTheme = () => {
  const isNightMode = useState('isNightMode', () => false)

  const checkTime = () => {
    const now = new Date()
    const timeZone = 'Europe/Athens'
    const zonedTime = toZonedTime(now, timeZone)
    const hour = parseInt(format(zonedTime, 'H', { timeZone }))

    isNightMode.value = hour >= 20 || hour < 6
  }

  onMounted(() => {
    checkTime()
    // Check the time every 30 minutes
    setInterval(checkTime, 1800000)
  })

  const toggleTheme = () => {
    isNightMode.value = !isNightMode.value
  }

  return {
    isNightMode,
    toggleTheme,
  }
}
