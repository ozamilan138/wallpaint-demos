/**
 * The image files in public/images.
 *
 * Each image has two WebP widths. The ratio is width divided by height of the
 * original photo. The <Img> component uses it to reserve space.
 *
 * All photos are demo images from Unsplash. Replace them with real project
 * photos before launch. See CREDITS.md.
 */
export interface ImageAsset {
  widths: [number, number]
  ratio: number
}

const hero: [number, number] = [960, 1600]
const card: [number, number] = [480, 800]
const wide: [number, number] = [640, 1200]

export const images = {
  'hero-sage-living': { widths: hero, ratio: 1 },
  'hero-warm-living': { widths: hero, ratio: 1.78 },
  'hero-neutral-living': { widths: hero, ratio: 1.37 },
  'room-living': { widths: card, ratio: 1.9 },
  'room-bedroom': { widths: card, ratio: 1 },
  'room-kitchen': { widths: card, ratio: 0.75 },
  'room-dining': { widths: card, ratio: 1.78 },
  'room-exterior': { widths: card, ratio: 1.5 },
  'mood-warm': { widths: card, ratio: 0.56 },
  'mood-fresh': { widths: card, ratio: 1 },
  'mood-modern': { widths: card, ratio: 1.5 },
  'mood-bold': { widths: card, ratio: 1.78 },
  'gal-living-1': { widths: wide, ratio: 1.78 },
  'gal-living-2': { widths: wide, ratio: 1.5 },
  'gal-living-3': { widths: wide, ratio: 0.67 },
  'gal-bedroom-1': { widths: wide, ratio: 1 },
  'gal-bedroom-2': { widths: wide, ratio: 1.13 },
  'gal-bedroom-3': { widths: wide, ratio: 1.5 },
  'gal-kitchen-1': { widths: wide, ratio: 1.5 },
  'gal-kitchen-2': { widths: wide, ratio: 1.5 },
  'gal-kitchen-3': { widths: wide, ratio: 0.62 },
  'gal-feature-1': { widths: wide, ratio: 1.33 },
  'gal-feature-2': { widths: wide, ratio: 1.5 },
  'gal-feature-3': { widths: wide, ratio: 0.56 },
  'gal-exterior-1': { widths: wide, ratio: 1.5 },
  'gal-exterior-2': { widths: wide, ratio: 1.69 },
  'gal-exterior-3': { widths: wide, ratio: 1.5 },
  'svc-interior': { widths: card, ratio: 1.33 },
  'svc-exterior': { widths: card, ratio: 1.5 },
  'svc-texture': { widths: card, ratio: 1.57 },
  'svc-decorative': { widths: card, ratio: 1.5 },
  'svc-apartment': { widths: card, ratio: 1.34 },
  'svc-repaint': { widths: card, ratio: 1.43 },
  'fin-satin': { widths: card, ratio: 0.56 },
  'fin-semigloss': { widths: card, ratio: 0.67 },
  'port-1': { widths: wide, ratio: 1.47 },
  'port-2': { widths: wide, ratio: 0.75 },
  'port-3': { widths: wide, ratio: 0.8 },
  'port-4': { widths: wide, ratio: 1.5 },
  'port-5': { widths: wide, ratio: 1.5 },
  'port-6': { widths: wide, ratio: 1.48 },
  'port-7': { widths: wide, ratio: 1.78 },
  'port-8': { widths: wide, ratio: 1.5 },
  'cta-room': { widths: hero, ratio: 1.5 },
} satisfies Record<string, ImageAsset>

export type ImageName = keyof typeof images
