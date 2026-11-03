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
  'work-living-2': { widths: std, ratio: 2000 / 1333 },
  'work-bedroom-1': { widths: std, ratio: 1 },
  'work-exterior-1': { widths: std, ratio: 2000 / 1186 },
  'work-feature-1': { widths: std, ratio: 2000 / 1500 },
} satisfies Record<string, ImageInfo>

export type ImageName = keyof typeof images

export function imageSrc(name: ImageName, width: number): string {
  return `${import.meta.env.BASE_URL}images/${name}-${width}.webp`
}

export function imageSrcSet(name: ImageName): string {
  return images[name].widths.map((w) => `${imageSrc(name, w)} ${w}w`).join(', ')
}
