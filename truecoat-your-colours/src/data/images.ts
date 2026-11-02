/**
 * The image files in public/images.
 *
 * Each image has two WebP widths. The ratio is the width divided by the height
 * of the photo. The <Img> component uses the ratio to reserve space.
 *
 * All photos are demo images from Unsplash. They do not show work by TrueCoat
 * Painting Co. Replace them with real project photos before launch. See CREDITS.md.
 */
export interface ImageAsset {
  widths: [number, number]
  ratio: number
}

const card: [number, number] = [480, 800]
const wide: [number, number] = [640, 1200]

export const images = {
  'hero-living': { widths: [800, 1600], ratio: 1 },
  'room-living': { widths: card, ratio: 1 },
  'room-bedroom': { widths: card, ratio: 1 },
  'room-kitchen': { widths: card, ratio: 0.75 },
  'room-dining': { widths: card, ratio: 1.78 },
  'room-exterior': { widths: card, ratio: 1.5 },
  'room-other': { widths: card, ratio: 0.56 },
  'mood-warm': { widths: card, ratio: 1.78 },
  'mood-fresh': { widths: card, ratio: 1.33 },
  'mood-minimal': { widths: card, ratio: 1.5 },
  'mood-vibrant': { widths: card, ratio: 1.78 },
  'gal-living-1': { widths: wide, ratio: 1.37 },
  'gal-living-2': { widths: wide, ratio: 1.9 },
  'gal-living-3': { widths: wide, ratio: 1.78 },
  'gal-bedroom-1': { widths: wide, ratio: 1.5 },
  'gal-bedroom-2': { widths: wide, ratio: 1 },
  'gal-bedroom-3': { widths: wide, ratio: 0.8 },
  'gal-kitchen-1': { widths: wide, ratio: 1.5 },
  'gal-kitchen-2': { widths: wide, ratio: 1.5 },
  'gal-kitchen-3': { widths: wide, ratio: 0.67 },
  'gal-feature-1': { widths: wide, ratio: 1.5 },
  'gal-feature-2': { widths: wide, ratio: 1.57 },
  'gal-feature-3': { widths: wide, ratio: 1.5 },
  'gal-exterior-1': { widths: wide, ratio: 1.5 },
  'gal-exterior-2': { widths: wide, ratio: 1.69 },
  'gal-exterior-3': { widths: wide, ratio: 1.5 },
  'svc-interior': { widths: card, ratio: 1.78 },
  'svc-exterior': { widths: card, ratio: 1.5 },
  'svc-apartment': { widths: card, ratio: 1.5 },
  'svc-repaint': { widths: card, ratio: 1.43 },
  'svc-texture': { widths: card, ratio: 0.67 },
  'svc-feature': { widths: card, ratio: 1 },
  'fin-matte': { widths: card, ratio: 1.56 },
  'fin-satin': { widths: card, ratio: 1.5 },
  'fin-semigloss': { widths: card, ratio: 0.75 },
  'fin-texture': { widths: card, ratio: 1.09 },
  'why-prep': { widths: wide, ratio: 0.67 },
  'step-tray': { widths: wide, ratio: 1.5 },
  'cta-living': { widths: [960, 1800], ratio: 1.33 },
} satisfies Record<string, ImageAsset>

export type ImageName = keyof typeof images
