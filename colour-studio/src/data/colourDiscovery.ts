import type { ImageName } from './images'

/**
 * Data for the colour discovery tool: rooms, moods and palettes.
 *
 * The hex values are screen approximations for inspiration only. They are not
 * matched to a paint brand or to a physical paint shade.
 */

export type RoomId = 'living' | 'bedroom' | 'kitchen' | 'dining' | 'exterior'
export type MoodId = 'warm' | 'fresh' | 'modern' | 'bold'

export interface Room {
  id: RoomId
  label: string
  image: ImageName
  alt: string
}

export interface Mood {
  id: MoodId
  label: string
  description: string
  image: ImageName
  alt: string
  preview: string[]
}

export interface Swatch {
  name: string
  hex: string
}

export interface Palette {
  id: string
  name: string
  description: string
  moods: MoodId[]
  colours: Swatch[]
}

export const rooms: Room[] = [
  {
    id: 'living',
    label: 'Living Room',
    image: 'room-living',
    alt: 'Bright living room with a grey sofa and warm beige walls',
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    image: 'room-bedroom',
    alt: 'Bedroom with sage bedding, plants and pale walls',
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    image: 'room-kitchen',
    alt: 'Kitchen with charcoal cabinets, white tiles and open shelves',
  },
  {
    id: 'dining',
    label: 'Dining Room',
    image: 'room-dining',
    alt: 'Dining room with green velvet chairs and soft grey walls',
  },
  {
    id: 'exterior',
    label: 'Exterior',
    image: 'room-exterior',
    alt: 'White house with a front porch, surrounded by autumn trees',
  },
]

export const moods: Mood[] = [
  {
    id: 'warm',
    label: 'Warm and Cozy',
    description: 'Soft creams, honey and earthy browns for rooms that feel calm and welcoming.',
    image: 'mood-warm',
    alt: 'Warm corner with an orange armchair, a mustard sideboard and plants',
    preview: ['#F1E8D8', '#D6A85C', '#C27A5E', '#7A5E4A'],
  },
  {
    id: 'fresh',
    label: 'Fresh and Natural',
    description: 'Sage, olive and light greens that bring the outside in.',
    image: 'mood-fresh',
    alt: 'Living room with olive green walls, rattan lamps and plants',
    preview: ['#F4F0E6', '#C5CFA6', '#A7B69B', '#6F7552'],
  },
  {
    id: 'modern',
    label: 'Modern and Minimal',
    description: 'Quiet whites, stone and soft grey with clean contrast.',
    image: 'mood-modern',
    alt: 'Minimal room with a white wall, a black sofa and a white chest of drawers',
    preview: ['#F5F3EE', '#D9D6CF', '#A8A49C', '#4A4A47'],
  },
  {
    id: 'bold',
    label: 'Bold and Contemporary',
    description: 'Deep greens, navy and clay for a strong feature wall or a dramatic room.',
    image: 'mood-bold',
    alt: 'Living room with a deep teal feature wall and a tan leather sofa',
    preview: ['#3F5545', '#2E3B4E', '#C27A5E', '#EFE7D6'],
  },
]

export const palettes: Palette[] = [
  {
    id: 'warm-neutrals',
    name: 'Warm Neutrals',
    description: 'Gentle, layered neutrals that suit almost any room and age well.',
    moods: ['warm', 'modern'],
    colours: [
      { name: 'Cream', hex: '#F1E8D8' },
      { name: 'Sand', hex: '#D8C3A0' },
      { name: 'Warm Taupe', hex: '#A89481' },
      { name: 'Soft Brown', hex: '#7A5E4A' },
    ],
  },
  {
    id: 'fresh-natural',
    name: 'Fresh and Natural',
    description: 'Restful greens with a warm white, for bedrooms and living spaces.',
    moods: ['fresh', 'warm'],
    colours: [
      { name: 'Sage', hex: '#A7B69B' },
      { name: 'Olive', hex: '#6F7552' },
      { name: 'Warm White', hex: '#F4F0E6' },
      { name: 'Muted Green', hex: '#8C9A84' },
    ],
  },
  {
    id: 'modern-contrast',
    name: 'Modern Contrast',
    description: 'Charcoal and ivory with a soft blue, for crisp and confident rooms.',
    moods: ['modern', 'bold'],
    colours: [
      { name: 'Charcoal', hex: '#3A3D3F' },
      { name: 'Soft Grey', hex: '#C9C8C3' },
      { name: 'Ivory', hex: '#F3EFE4' },
      { name: 'Muted Blue', hex: '#8EA3B5' },
    ],
  },
  {
    id: 'earthy-elegance',
    name: 'Earthy Elegance',
    description: 'Terracotta and clay with deep brown, warm and full of character.',
    moods: ['warm', 'bold'],
    colours: [
      { name: 'Terracotta', hex: '#C27A5E' },
      { name: 'Clay', hex: '#B08A6E' },
      { name: 'Beige', hex: '#DCCAB0' },
      { name: 'Deep Brown', hex: '#5A4033' },
    ],
  },
  {
    id: 'honey-glow',
    name: 'Honey Glow',
    description: 'Butter and honey tones that make north-facing rooms feel sunnier.',
    moods: ['warm'],
    colours: [
      { name: 'Butter', hex: '#F0DFB4' },
      { name: 'Honey', hex: '#D6A85C' },
      { name: 'Linen', hex: '#EDE4D3' },
      { name: 'Walnut', hex: '#6B4F3A' },
    ],
  },
  {
    id: 'coastal-calm',
    name: 'Coastal Calm',
    description: 'Misty blue-greens and shell white for a light, airy feeling.',
    moods: ['fresh'],
    colours: [
      { name: 'Sea Mist', hex: '#C9D8D3' },
      { name: 'Pale Blue', hex: '#B5C7D3' },
      { name: 'Shell', hex: '#F3EEE6' },
      { name: 'Driftwood', hex: '#9C8F7E' },
    ],
  },
  {
    id: 'garden-morning',
    name: 'Garden Morning',
    description: 'Fern, pistachio and oat, a soft green palette with a natural feel.',
    moods: ['fresh'],
    colours: [
      { name: 'Fern', hex: '#7F9772' },
      { name: 'Pistachio', hex: '#C5CFA6' },
      { name: 'Oat', hex: '#E6DCC6' },
      { name: 'Moss', hex: '#545E45' },
    ],
  },
  {
    id: 'gallery-white',
    name: 'Gallery White',
    description: 'Chalk white and stone greys that let furniture and art stand out.',
    moods: ['modern'],
    colours: [
      { name: 'Chalk', hex: '#F5F3EE' },
      { name: 'Pebble', hex: '#D9D6CF' },
      { name: 'Stone', hex: '#A8A49C' },
      { name: 'Graphite', hex: '#4A4A47' },
    ],
  },
  {
    id: 'soft-concrete',
    name: 'Soft Concrete',
    description: 'Cool fog and slate with an ink-blue accent for a calm, urban look.',
    moods: ['modern'],
    colours: [
      { name: 'Fog', hex: '#D7D6D1' },
      { name: 'Slate', hex: '#7E8487' },
      { name: 'Paper', hex: '#EEECE6' },
      { name: 'Ink Blue', hex: '#3E4E5E' },
    ],
  },
  {
    id: 'deep-forest',
    name: 'Deep Forest',
    description: 'A rich forest green with brass and cream, for a statement room.',
    moods: ['bold'],
    colours: [
      { name: 'Forest', hex: '#3F5545' },
      { name: 'Brass', hex: '#B8955A' },
      { name: 'Cream', hex: '#EFE7D6' },
      { name: 'Charcoal', hex: '#2F3230' },
    ],
  },
  {
    id: 'midnight-clay',
    name: 'Midnight Clay',
    description: 'Navy and terracotta together, balanced by sand and ivory.',
    moods: ['bold'],
    colours: [
      { name: 'Navy', hex: '#2E3B4E' },
      { name: 'Terracotta', hex: '#C27A5E' },
      { name: 'Sand', hex: '#D8C3A0' },
      { name: 'Ivory', hex: '#F3EFE4' },
    ],
  },
]

export function palettesForMood(mood: MoodId | null): Palette[] {
  if (!mood) return []
  return palettes.filter((p) => p.moods.includes(mood))
}

export const findRoom = (id: RoomId | null) => rooms.find((r) => r.id === id) ?? null
export const findMood = (id: MoodId | null) => moods.find((m) => m.id === id) ?? null
export const findPalette = (id: string | null) => palettes.find((p) => p.id === id) ?? null
