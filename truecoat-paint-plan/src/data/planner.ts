// The data for the colour planner: rooms, styles and palettes.
// The UI components do not contain this data. Edit it here.
//
// The hex values are screen colours for inspiration only.
// They are not the codes of a paint brand.

import type { Palette, PlannerStyle, Room } from './types'

export const rooms: Room[] = [
  {
    id: 'living',
    name: 'Living Room',
    plural: 'Living Rooms',
    image: 'room-living',
    alt: 'A bright living room with a beige sofa and two green armchairs',
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    plural: 'Bedrooms',
    image: 'room-bedroom',
    alt: 'A cosy bedroom with warm lamps, plants and patterned cushions',
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    plural: 'Kitchens',
    image: 'room-kitchen',
    alt: 'A kitchen with dark grey cabinets, white tiles and open shelves',
  },
  {
    id: 'dining',
    name: 'Dining Room',
    plural: 'Dining Rooms',
    image: 'room-dining',
    alt: 'A dining table near large bay windows in warm afternoon light',
  },
  {
    id: 'exterior',
    name: 'Exterior',
    plural: 'Exterior Walls',
    image: 'room-exterior',
    alt: 'A white house with a front porch and autumn trees',
  },
]

export const styles: PlannerStyle[] = [
  {
    id: 'warm',
    name: 'Warm & Cozy',
    description: 'Soft creams, sand and earthy browns for a relaxed, welcoming feel.',
    preview: ['#EFE6D6', '#D8C3A5', '#A4573D'],
  },
  {
    id: 'fresh',
    name: 'Fresh & Natural',
    description: 'Calm greens and soft blues that bring a little of the outdoors inside.',
    preview: ['#DCE7DB', '#8FA98F', '#A9BDC9'],
  },
  {
    id: 'minimal',
    name: 'Simple & Minimal',
    description: 'Clean whites and quiet greys that keep a room light and uncluttered.',
    preview: ['#F6F5F1', '#D9DBD8', '#8E928E'],
  },
  {
    id: 'bold',
    name: 'Bold & Modern',
    description: 'Deep, confident shades for a feature wall or a room with character.',
    preview: ['#2F3E52', '#A65A3A', '#F1E8D8'],
  },
]

export const palettes: Palette[] = [
  {
    id: 'warm-neutral',
    name: 'Warm Neutral',
    description: 'Gentle and easy to live with. Works in most rooms and with wood floors.',
    styles: ['warm', 'minimal'],
    colours: [
      { name: 'Linen Cream', hex: '#EFE6D6', role: 'main' },
      { name: 'Sand', hex: '#D8C3A5', role: 'feature' },
      { name: 'Warm Taupe', hex: '#A89482', role: 'accent' },
      { name: 'Soft White', hex: '#FAF7F0', role: 'trim' },
    ],
  },
  {
    id: 'soft-sage',
    name: 'Soft Sage',
    description: 'A calm green with warm white. Popular for bedrooms and living rooms.',
    styles: ['fresh'],
    colours: [
      { name: 'Pale Sage', hex: '#DCE7DB', role: 'main' },
      { name: 'Sage Leaf', hex: '#8FA98F', role: 'feature' },
      { name: 'Warm White', hex: '#F6F3EA', role: 'trim' },
      { name: 'Olive Shade', hex: '#6B7A55', role: 'accent' },
    ],
  },
  {
    id: 'modern-grey',
    name: 'Modern Grey',
    description: 'Cool, tidy greys with a charcoal accent for a clean, modern look.',
    styles: ['minimal', 'bold'],
    colours: [
      { name: 'Cloud Grey', hex: '#D9DBD8', role: 'main' },
      { name: 'Charcoal', hex: '#4A4F4D', role: 'feature' },
      { name: 'Chalk White', hex: '#F4F4F1', role: 'trim' },
      { name: 'Stone Grey', hex: '#A3A7A3', role: 'accent' },
    ],
  },
  {
    id: 'earthy-terracotta',
    name: 'Earthy Terracotta',
    description: 'Warm clay tones that make a room feel sunny, even on grey days.',
    styles: ['warm', 'bold'],
    colours: [
      { name: 'Sandstone', hex: '#E2C9A8', role: 'main' },
      { name: 'Terracotta', hex: '#C78269', role: 'feature' },
      { name: 'Cream', hex: '#F5EEE2', role: 'trim' },
      { name: 'Deep Umber', hex: '#5C4033', role: 'accent' },
    ],
  },
  {
    id: 'calm-blue',
    name: 'Calm Blue',
    description: 'Soft, airy blues for a restful bedroom or a bright bathroom.',
    styles: ['fresh', 'minimal'],
    colours: [
      { name: 'Mist Blue', hex: '#DDE6EB', role: 'main' },
      { name: 'Soft Blue', hex: '#A9BDC9', role: 'feature' },
      { name: 'Cotton White', hex: '#F7F7F4', role: 'trim' },
      { name: 'Denim Grey', hex: '#5E7486', role: 'accent' },
    ],
  },
  {
    id: 'cream-beige',
    name: 'Cream & Beige',
    description: 'Light and warm. A safe choice for rentals, hallways and open spaces.',
    styles: ['warm', 'minimal'],
    colours: [
      { name: 'Cream', hex: '#F3EBDD', role: 'main' },
      { name: 'Warm Beige', hex: '#E9DCC7', role: 'feature' },
      { name: 'Biscuit', hex: '#CDB596', role: 'accent' },
      { name: 'Ivory', hex: '#FBF8F1', role: 'trim' },
    ],
  },
  {
    id: 'forest-calm',
    name: 'Forest Calm',
    description: 'Moss and fern greens with birch white for a grounded, natural room.',
    styles: ['fresh', 'bold'],
    colours: [
      { name: 'Birch', hex: '#EEE9DF', role: 'main' },
      { name: 'Moss', hex: '#5F7356', role: 'feature' },
      { name: 'Fern', hex: '#A8B89A', role: 'accent' },
      { name: 'Paper White', hex: '#F8F6F0', role: 'trim' },
    ],
  },
  {
    id: 'night-navy',
    name: 'Night Navy',
    description: 'A deep navy feature wall with soft whites. Strong but still calm.',
    styles: ['bold'],
    colours: [
      { name: 'Off White', hex: '#F2EFE8', role: 'main' },
      { name: 'Deep Navy', hex: '#2F3E52', role: 'feature' },
      { name: 'Slate Blue', hex: '#6C7F93', role: 'accent' },
      { name: 'Bright White', hex: '#FAFAF8', role: 'trim' },
    ],
  },
  {
    id: 'olive-rust',
    name: 'Olive & Rust',
    description: 'Olive and rust with cream. A rich, modern mix for living spaces.',
    styles: ['bold', 'warm'],
    colours: [
      { name: 'Cream', hex: '#F1E8D8', role: 'main' },
      { name: 'Olive Green', hex: '#66703F', role: 'feature' },
      { name: 'Rust', hex: '#A65A3A', role: 'accent' },
      { name: 'Soft White', hex: '#FAF7F0', role: 'trim' },
    ],
  },
  {
    id: 'clean-white',
    name: 'Clean White',
    description: 'Crisp whites and pale greys. Makes small rooms look bigger and brighter.',
    styles: ['minimal'],
    colours: [
      { name: 'Pure White', hex: '#F8F8F5', role: 'main' },
      { name: 'Pale Grey', hex: '#E4E4E0', role: 'feature' },
      { name: 'Warm Grey', hex: '#B8B3AA', role: 'accent' },
      { name: 'Graphite', hex: '#57585A', role: 'trim' },
    ],
  },
]

/** The text that explains each colour role to the customer. */
export const roleLabels: Record<'main' | 'feature' | 'trim' | 'accent', string> = {
  main: 'Main walls',
  feature: 'Feature wall',
  trim: 'Trim and ceiling',
  accent: 'Accent',
}
