/**
 * Demo photographs. All files are in public/images in WebP format.
 * Source and licence for each file are in CREDITS.md.
 * IMPORTANT: These are royalty-free sample images. They are not projects by Aureline Painting Co.
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
  heroBedroom: asset('hero-bedroom', 2200, 1467, large),
  heroLounge: asset('hero-lounge', 2200, 1238, large),
  introBrick: asset('intro-brick', 2200, 3295),
  prepHand: asset('prep-hand', 2200, 3300),
  svcInterior: asset('svc-interior', 2200, 3300),
  svcExterior: asset('svc-exterior', 2200, 1468),
  svcTexture: asset('svc-texture', 2200, 2014),
  svcRepaint: asset('svc-repaint', 2200, 1537),
  svcFeature: asset('svc-feature', 2200, 2200),
  svcApartment: asset('svc-apartment', 2200, 1467),
  projLiving: asset('proj-living', 2200, 2200),
  projBedroom: asset('proj-bedroom', 2200, 2200),
  projExterior: asset('proj-exterior', 2200, 1467),
  projFeature: asset('proj-feature', 2200, 1238),
  projDining: asset('proj-dining', 2200, 1238),
  projHallway: asset('proj-hallway', 2200, 3911),
  testimonialRoom: asset('testimonial-room', 2200, 2200),
  ctaArches: asset('cta-arches', 2200, 2933, large),
} satisfies Record<string, ImageAsset>

export function srcSet(image: ImageAsset): string {
  return image.widths.map((w) => `${import.meta.env.BASE_URL}images/${image.name}-${w}.webp ${w}w`).join(', ')
}

export function src(image: ImageAsset, width = 1024): string {
  const best = image.widths.find((w) => w >= width) ?? image.widths[image.widths.length - 1]
  return `${import.meta.env.BASE_URL}images/${image.name}-${best}.webp`
}
