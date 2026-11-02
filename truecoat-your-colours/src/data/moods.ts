import type { ImageName } from './images'

export type MoodId = 'warm' | 'fresh' | 'minimal' | 'vibrant'

export interface Mood {
  id: MoodId
  name: string
  description: string
  image: ImageName
  imageAlt: string
  /** Three example colours for the mood card. */
  swatches: string[]
}

export const moods: Mood[] = [
  {
    id: 'warm',
    name: 'Warm & Comfortable',
    description: 'Soft, earthy colours that make a space feel welcoming.',
    image: 'mood-warm',
    imageAlt: 'A living room with cream walls, a terracotta rug and warm wood furniture',
    swatches: ['#EFE6D8', '#C9856D', '#6E5847'],
  },
  {
    id: 'fresh',
    name: 'Fresh & Natural',
    description: 'Greens, soft blues and light whites that bring the outdoors in.',
    image: 'mood-fresh',
    imageAlt: 'A home office with deep green walls, plants and natural light',
    swatches: ['#DDE5D6', '#7D9474', '#A8BAC5'],
  },
  {
    id: 'minimal',
    name: 'Modern & Minimal',
    description: 'Clean whites and calm greys for a simple, uncluttered look.',
    image: 'mood-minimal',
    imageAlt: 'A bright minimal room with white walls, a black sofa and a floor lamp',
    swatches: ['#F7F5EF', '#B9BCB8', '#3A3F3D'],
  },
  {
    id: 'vibrant',
    name: 'Vibrant & Contemporary',
    description: 'Deeper colours and confident contrasts for a room with character.',
    image: 'mood-vibrant',
    imageAlt: 'A living room with a dark teal feature wall and a tan leather sofa',
    swatches: ['#2D5E61', '#D98468', '#C99A4B'],
  },
]

export function findMood(id: string | null) {
  return moods.find((m) => m.id === id) ?? null
}
