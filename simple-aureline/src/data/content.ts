import type { ImageAsset } from './images'
import { images } from './images'
import type { Strings } from '../i18n/en'

/*
 * The parts of the content that do not change with the language: links, images and colour codes.
 * The text for each item is in src/i18n/en.ts, hi.ts and gu.ts, in the same order as the lists here.
 */

export interface NavItem {
  key: keyof Pick<Strings['nav'], 'services' | 'work' | 'colours' | 'about' | 'contact'>
  href: string
}

export const navItems: NavItem[] = [
  { key: 'services', href: '#services' },
  { key: 'work', href: '#work' },
  { key: 'colours', href: '#colours' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
]

export interface ProjectMedia {
  image: ImageAsset
  objectPosition?: string
}

/** Demo projects. The photographs are royalty-free sample images, not work by this business. */
export const projectMedia: ProjectMedia[] = [
  { image: images.projLiving, objectPosition: '50% 75%' },
  { image: images.projBedroom },
  { image: images.projExterior, objectPosition: '50% 45%' },
  { image: images.projFeature },
]

export interface PaletteColours {
  id: string
  /** Four colours, in the same order as the swatch names in the text files. */
  hex: string[]
}

/** Screen colours are illustrative only. Check physical paint samples before a final choice. */
export const paletteColours: PaletteColours[] = [
  { id: 'warm-neutrals', hex: ['#DDD1BF', '#B3A08A', '#F1ECE3', '#6E5A47'] },
  { id: 'modern-earthy', hex: ['#D4BFA0', '#B07A5E', '#EEE7DA', '#6F6D4E'] },
  { id: 'soft-natural', hex: ['#C3C8B4', '#8E9A83', '#F2EFE7', '#9A8D7A'] },
  { id: 'contemporary-contrast', hex: ['#C9C4BB', '#2F3A45', '#F5F3EF', '#34322E'] },
]

export interface Testimonial {
  quote: string
  name: string
  context: string
  /** Keep true until a real client gives permission to publish their words. */
  isPlaceholder: boolean
}

/**
 * Testimonials. Replace the placeholders with real, permitted client feedback before launch.
 * When at least one item has isPlaceholder set to false, the site shows only the real items.
 */
export const testimonials: Testimonial[] = [
  {
    quote: 'Sample testimonial. A client describes how the colour advice changed the feel of their living room.',
    name: 'Client name',
    context: 'Living room repaint',
    isPlaceholder: true,
  },
  {
    quote: 'Sample testimonial. A client comments on the tidy work and the clear communication.',
    name: 'Client name',
    context: 'Apartment painting',
    isPlaceholder: true,
  },
]
