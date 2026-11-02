/**
 * Image catalogue.
 *
 * All photographs are royalty-free demo images from Unsplash (see CREDITS.md).
 * They do not show work by TrueCoat Painting Co. Replace them with real project photographs before launch.
 * Each image is in public/images as <name>-<width>.webp.
 */
export interface ImageInfo {
  /** Widths that exist in public/images. */
  widths: number[]
  /** Width and height ratio of the original photograph. */
  ratio: number
}

const std = [640, 1024, 1600]

export const images = {
  'hero-living': { widths: [640, 1024, 1600, 2000], ratio: 1 },
  'intro-tools': { widths: std, ratio: 2000 / 1333 },
  'quality-texture': { widths: std, ratio: 2000 / 3000 },
  'svc-interior': { widths: std, ratio: 1 },
  'svc-exterior': { widths: std, ratio: 2000 / 1334 },
  'svc-apartment': { widths: std, ratio: 2000 / 1488 },
  'svc-repaint': { widths: std, ratio: 2000 / 1397 },
  'svc-texture': { widths: std, ratio: 2000 / 1831 },
  'svc-feature': { widths: std, ratio: 2000 / 1125 },
  'opt-essential': { widths: std, ratio: 2000 / 1281 },
  'opt-complete': { widths: std, ratio: 2000 / 1360 },
  'opt-personal': { widths: std, ratio: 1 },
  'work-living-1': { widths: std, ratio: 2000 / 3556 },
  'work-living-2': { widths: std, ratio: 2000 / 1333 },
  'work-bedroom-1': { widths: std, ratio: 1 },
  'work-bedroom-2': { widths: std, ratio: 1 },
  'work-apartment-1': { widths: std, ratio: 2000 / 1334 },
  'work-apartment-2': { widths: std, ratio: 2000 / 1333 },
  'work-exterior-1': { widths: std, ratio: 2000 / 1186 },
  'work-exterior-2': { widths: std, ratio: 2000 / 1333 },
  'work-feature-1': { widths: std, ratio: 2000 / 1500 },
  'work-feature-2': { widths: std, ratio: 2000 / 1270 },
} satisfies Record<string, ImageInfo>

export type ImageName = keyof typeof images

export function imageSrc(name: ImageName, width: number): string {
  return `${import.meta.env.BASE_URL}images/${name}-${width}.webp`
}

export function imageSrcSet(name: ImageName): string {
  return images[name].widths.map((w) => `${imageSrc(name, w)} ${w}w`).join(', ')
}
