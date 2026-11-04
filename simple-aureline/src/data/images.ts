/**
 * Demo photographs. All files are in public/images in WebP format.
 * Source and licence for each file are in CREDITS.md.
 * IMPORTANT: These are royalty-free sample images. They are not projects by Maruti Paint House
 * Replace them with verified client photographs before launch.
 */
export interface ImageAsset {
  /** File name without the width suffix, for example "hero-living". */
  name: string
  width: number
  height: number
  /** Widths that exist on disk for this image. */
  widths: number[]
}

const standard = [640, 1024, 1600]
const large = [640, 1024, 1600, 2000]

function asset(name: string, width: number, height: number, widths = standard): ImageAsset {
  return { name, width, height, widths }
}

export const images = {
  heroLiving: asset('hero-living', 2200, 1611, large),
  projLiving: asset('proj-living', 2200, 2200),
  projBedroom: asset('proj-bedroom', 2200, 2200),
  projExterior: asset('proj-exterior', 2200, 1467),
  projFeature: asset('proj-feature', 2200, 1238),
} satisfies Record<string, ImageAsset>

export function srcSet(image: ImageAsset): string {
  return image.widths.map((w) => `${import.meta.env.BASE_URL}images/${image.name}-${w}.webp ${w}w`).join(', ')
}

export function src(image: ImageAsset, width = 1024): string {
  const best = image.widths.find((w) => w >= width) ?? image.widths[image.widths.length - 1]
  return `${import.meta.env.BASE_URL}images/${image.name}-${best}.webp`
}
