import type { MoodId } from './moods'

/**
 * Colour palettes for the palette explorer.
 *
 * These colours are for inspiration only. The hex values show the colour on a
 * screen. They are not codes of a paint brand.
 */
export interface Swatch {
  name: string
  hex: string
}

export interface Palette {
  id: string
  name: string
  description: string
  swatches: Swatch[]
  /** The moods that this palette suits. The explorer shows these palettes first. */
  moods: MoodId[]
}

export const palettes: Palette[] = [
  {
    id: 'warm-neutrals',
    name: 'Warm Neutrals',
    description: 'Soft creams and sandy browns that make a room feel calm and lived in.',
    swatches: [
      { name: 'Linen Cream', hex: '#EFE6D8' },
      { name: 'Warm Sand', hex: '#D8C3A5' },
      { name: 'Soft Taupe', hex: '#A89582' },
      { name: 'Walnut Brown', hex: '#6E5847' },
    ],
    moods: ['warm', 'minimal'],
  },
  {
    id: 'soft-sage',
    name: 'Soft Sage',
    description: 'Quiet greens with a warm white. A good fit for bedrooms and living rooms.',
    swatches: [
      { name: 'Pale Sage', hex: '#DDE5D6' },
      { name: 'Sage Leaf', hex: '#A9B99C' },
      { name: 'Garden Green', hex: '#7D9474' },
      { name: 'Warm White', hex: '#F5F2EA' },
    ],
    moods: ['fresh', 'warm'],
  },
  {
    id: 'modern-grey',
    name: 'Modern Grey',
    description: 'Clean greys from light to deep, for a simple and modern look.',
    swatches: [
      { name: 'Cloud Grey', hex: '#E4E5E2' },
      { name: 'Pebble', hex: '#B9BCB8' },
      { name: 'Slate', hex: '#6F7672' },
      { name: 'Charcoal', hex: '#3A3F3D' },
    ],
    moods: ['minimal', 'vibrant'],
  },
  {
    id: 'earthy-terracotta',
    name: 'Earthy Terracotta',
    description: 'Clay and sun-baked tones that add warmth to a feature wall or a dining room.',
    swatches: [
      { name: 'Clay Pink', hex: '#E8C4B2' },
      { name: 'Terracotta', hex: '#C9856D' },
      { name: 'Burnt Sienna', hex: '#9E5A41' },
      { name: 'Sandstone', hex: '#E3D3BC' },
    ],
    moods: ['warm', 'vibrant'],
  },
  {
    id: 'calm-blues',
    name: 'Calm Blues',
    description: 'Misty, soft blues that feel fresh and restful in bedrooms and bathrooms.',
    swatches: [
      { name: 'Mist Blue', hex: '#DCE4E9' },
      { name: 'Powder Blue', hex: '#A8BAC5' },
      { name: 'Harbour Blue', hex: '#5F7A8C' },
      { name: 'Soft White', hex: '#F4F5F2' },
    ],
    moods: ['fresh', 'minimal'],
  },
  {
    id: 'fresh-whites-beige',
    name: 'Fresh Whites and Beige',
    description: 'Bright whites with gentle beige. A light, open look for small spaces.',
    swatches: [
      { name: 'Chalk White', hex: '#F7F5EF' },
      { name: 'Ivory', hex: '#EFE8DA' },
      { name: 'Oat Beige', hex: '#E6D6BD' },
      { name: 'Driftwood', hex: '#B9A88F' },
    ],
    moods: ['minimal', 'fresh'],
  },
  {
    id: 'forest-ochre',
    name: 'Forest and Ochre',
    description: 'Deep green with a golden ochre accent, for a rich and confident room.',
    swatches: [
      { name: 'Forest', hex: '#2F4A3A' },
      { name: 'Moss', hex: '#567661' },
      { name: 'Ochre', hex: '#C99A4B' },
      { name: 'Cream', hex: '#F1EBDD' },
    ],
    moods: ['vibrant', 'warm'],
  },
  {
    id: 'teal-coral',
    name: 'Teal and Coral',
    description: 'A deep teal with a soft coral. Bold, but easy to live with.',
    swatches: [
      { name: 'Deep Teal', hex: '#2D5E61' },
      { name: 'Sea Glass', hex: '#9CC2BC' },
      { name: 'Coral Clay', hex: '#D98468' },
      { name: 'Soft Cream', hex: '#F4EEE3' },
    ],
    moods: ['vibrant', 'fresh'],
  },
]

export function findPalette(id: string | null) {
  return palettes.find((p) => p.id === id) ?? null
}
