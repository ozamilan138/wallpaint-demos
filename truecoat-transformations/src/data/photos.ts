/**
 * The photo registry. Each photo exists in public/images as WebP files at the
 * listed widths: /images/<name>-<width>.webp.
 *
 * All photos here are sample photos from Unsplash (Unsplash licence). They are
 * not TrueCoat projects. Replace them with real project photos before launch.
 * CREDITS.md lists the source of each photo.
 */
export type Photo = {
  name: string
  /** The width and the height of the largest file. The browser uses them to reserve space. */
  w: number
  h: number
  widths: number[]
  alt: string
  /** The Unsplash photo ID, for the credits. */
  source: string
}

const p = (name: string, w: number, h: number, widths: number[], alt: string, source: string): Photo => ({
  name,
  w,
  h,
  widths,
  alt,
  source,
})

const std = [800, 1400]

export const photos = {
  heroFresh: p('hero-green-study', 2400, 1800, [800, 1600, 2400], 'A home study with deep green walls, white curtains and a wooden desk', '1600494603989-9650cf6ddd3d'),
  heroTired: p('hero-green-study-tired', 2400, 1800, [800, 1600, 2400], '', '1600494603989-9650cf6ddd3d'),
  sliderAfter: p('slider-blue-shelves', 2000, 2000, [800, 1400, 2000], 'The living room after: built-in shelves and the fireplace wall in a fresh blue-grey', '1615874694520-474822394e73'),
  sliderBefore: p('slider-blue-shelves-before', 2000, 2000, [800, 1400, 2000], 'The same living room before: faded, patchy greige paint on the shelves and walls', '1615874694520-474822394e73'),

  livingSage: p('living-sage', 1400, 2489, std, 'A living room with soft beige walls, a round mirror and an orange armchair', '1618220179428-22790b461013'),
  livingCream: p('living-cream', 1400, 1025, std, 'A bright living room with warm white walls and round rattan mirrors', '1631679706909-1844bbd07221'),
  livingGallery: p('living-gallery', 1400, 1050, std, 'A white living room wall with framed black and white prints', '1600210491369-e753d80a41f3'),
  bedroomSage: p('bedroom-sage', 1400, 1400, std, 'A bedroom with pale green walls, plants and framed prints', '1615874959474-d609969a20ed'),
  bedroomGallery: p('bedroom-gallery', 1400, 788, std, 'A light bedroom with a gallery wall above the bed', '1616486029423-aaa4789e8c9a'),
  bedroomWarm: p('bedroom-warm', 1400, 933, std, 'A calm bedroom with warm white walls and a low wooden bed', '1617325247661-675ab4b64ae2'),
  featureCharcoal: p('feature-charcoal', 1400, 889, std, 'A bedroom with a dark charcoal feature wall behind the bed', '1617104678098-de229db51175'),
  featureSageWall: p('feature-sage-wall', 1400, 2100, std, 'A sitting area with a sage green wall and simple framed prints', '1583847268964-b28dc8f51f92'),
  apartmentShelves: p('feature-pink-shelves', 1400, 788, std, 'An apartment corner with open shelving, plants and an orange chair', '1615875605825-5eb9bb5d52ac'),
  apartmentPlants: p('apartment-plants', 1400, 1042, std, 'A small apartment living room with white walls, plants and books', '1502672260266-1c1ef2d93688'),
  apartmentBright: p('apartment-bright', 1400, 933, std, 'A bright open-plan apartment with large windows and neutral walls', '1560448204-e02f11c3d0e2'),
  apartmentLoft: p('apartment-loft', 1400, 933, std, 'A loft apartment with white walls, a brick column and a dining table', '1536376072261-38c75010e6c9'),
  exteriorPorch: p('exterior-porch', 1400, 933, std, 'A front porch with blue-grey siding and a black front door', '1560184897-ae75f418493e'),
  exteriorCraftsman: p('exterior-craftsman', 1400, 933, std, 'A grey single-storey house with white trim and a front porch', '1599427303058-f04cbcf4756f'),
  exteriorStucco: p('exterior-stucco', 1400, 934, std, 'A house with sage green rendered walls at dusk', '1494526585095-c41746248156'),

  serviceInterior: p('service-interior', 1400, 1400, std, 'A living room with soft green-grey walls and woven pendant lights', '1615529182904-14819c35db37'),
  serviceExterior: p('service-exterior', 1400, 830, std, 'A white house with a red roof and freshly painted trim', '1576941089067-2de3c901e126'),
  serviceApartment: p('service-apartment', 1400, 933, std, 'An apartment living room with an open kitchen and light walls', '1560185127-6ed189bf02f4'),
  serviceRepainting: p('service-repainting', 1400, 978, std, 'A paint roller putting a blue coat over a white wall', '1562259949-e8e7689d7828'),
  serviceTexture: p('service-texture', 1400, 933, std, 'A living room with a textured, concrete-effect wall finish', '1541123603104-512919d6a96c'),
  serviceFeature: p('service-feature', 1400, 933, std, 'An open living space with one deep teal accent wall', '1554995207-c18c203602cb'),

  qualityPrep: p('quality-prep', 1400, 933, std, 'Two people with paint brushes stand on newspaper that protects the floor', '1595814433015-e6f5ce69614e'),
  qualityMaterials: p('quality-materials', 1400, 1867, std, 'Four rollers with green, red, orange and blue paint', '1525909002-1b05e0c869d8'),
  qualityPainting: p('quality-painting', 1400, 933, std, 'Two painters on ladders paint the outside of a lilac house', '1574359411659-15573a27fd0c'),
  qualityFinish: p('quality-finish', 1400, 933, std, 'An empty, freshly painted room with a clean floor and white walls', '1630699144867-37acec97df5a'),

  reviewLiving: p('review-living', 1400, 1400, std, 'A bright living room with an orange sofa and a white wall', '1616047006789-b7af5afb8c20'),
  contactTray: p('contact-tray', 1400, 933, std, 'A paint tray and a roller on a table, ready for work', '1599619585752-c3edb42a414c'),
} satisfies Record<string, Photo>
