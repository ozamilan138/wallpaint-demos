/**
 * Image data. Each photo has WebP files at a few widths in public/images.
 * All photos are demo images from Unsplash. See CREDITS.md.
 */

export interface SiteImage {
  /** The file name without the width and the extension, for example "hero-living". */
  name: string
  widths: number[]
  alt: string
  /** The width divided by the height of the source photo. */
  ratio: number
}

export function srcFor(image: SiteImage, width?: number): string {
  const w = width ?? image.widths[image.widths.length - 1]
  return `${import.meta.env.BASE_URL}images/${image.name}-${w}.webp`
}

export function srcSetFor(image: SiteImage): string {
  return image.widths.map((w) => `${srcFor(image, w)} ${w}w`).join(', ')
}

const img = (name: string, widths: number[], alt: string, ratio: number): SiteImage => ({
  name,
  widths,
  alt,
  ratio,
})

export const images = {
  hero: img(
    'hero-living',
    [640, 1024, 1600],
    'A bright living room with a sage green feature wall, a tan leather sofa and plants',
    1.5,
  ),
}
