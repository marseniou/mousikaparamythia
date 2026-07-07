import fs from 'fs'
import path from 'path'
import { tales } from '../tales-data'

export default defineEventHandler(() => {
  const talesDir = path.join(process.cwd(), 'public/tales')
  const files = fs.readdirSync(talesDir)
  const mp3Files = files.filter(file => file.endsWith('.mp3'))

  return mp3Files.map(file => {
    const id = file.replace('.mp3', '')
    return {
      id,
      title: tales[id] || id.replace(/-/g, ' ')
    }
  })
})