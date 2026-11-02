import { photos, type Photo } from './photos'

export const projectCategories = [
  'Living Rooms',
  'Bedrooms',
  'Apartment Interiors',
  'Exterior Painting',
  'Feature Walls',
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description?: string
  photo: Photo
  /** True for sample photos. The gallery labels each sample photo on the page. */
  isDemo: boolean
}

/**
 * Real TrueCoat projects. Add finished jobs here, with photos that the owner took
 * or has permission to use. Put the photo files in public/images and add them to
 * src/data/photos.ts first.
 *
 * When this list has one or more projects, the gallery shows only these projects
 * and hides all the sample projects below.
 */
export const clientProjects: Project[] = []

/**
 * Sample projects for the demo. The photos are Unsplash photos, not TrueCoat work.
 * The titles and descriptions are sample text.
 */
export const demoProjects: Project[] = [
  {
    id: 'living-sage',
    title: 'Warm beige living room',
    category: 'Living Rooms',
    description: 'A soft beige on all four walls, with crisp white trim.',
    photo: photos.livingSage,
    isDemo: true,
  },
  {
    id: 'exterior-porch',
    title: 'Blue-grey front porch',
    category: 'Exterior Painting',
    description: 'Siding, porch boards and the front door, in three coordinated shades.',
    photo: photos.exteriorPorch,
    isDemo: true,
  },
  {
    id: 'bedroom-sage',
    title: 'Pale green bedroom',
    category: 'Bedrooms',
    description: 'A light, restful green that works with plants and wood.',
    photo: photos.bedroomSage,
    isDemo: true,
  },
  {
    id: 'feature-charcoal',
    title: 'Charcoal wall behind the bed',
    category: 'Feature Walls',
    description: 'One dark wall gives the room a strong focus.',
    photo: photos.featureCharcoal,
    isDemo: true,
  },
  {
    id: 'apartment-plants',
    title: 'Fresh white apartment',
    category: 'Apartment Interiors',
    description: 'A full repaint in a warm white, to make a small space feel larger.',
    photo: photos.apartmentPlants,
    isDemo: true,
  },
  {
    id: 'living-cream',
    title: 'Warm white family room',
    category: 'Living Rooms',
    description: 'A soft white with a hint of cream, for a bright and friendly room.',
    photo: photos.livingCream,
    isDemo: true,
  },
  {
    id: 'exterior-stucco',
    title: 'Sage green house front',
    category: 'Exterior Painting',
    description: 'Rendered walls in a muted green, with dark window frames.',
    photo: photos.exteriorStucco,
    isDemo: true,
  },
  {
    id: 'feature-sage-wall',
    title: 'Sage wall in a reading corner',
    category: 'Feature Walls',
    description: 'A single green wall marks out a quiet corner of the room.',
    photo: photos.featureSageWall,
    isDemo: true,
  },
  {
    id: 'bedroom-gallery',
    title: 'Light bedroom with a gallery wall',
    category: 'Bedrooms',
    description: 'Neutral walls that let the framed prints stand out.',
    photo: photos.bedroomGallery,
    isDemo: true,
  },
  {
    id: 'apartment-bright',
    title: 'Open-plan apartment refresh',
    category: 'Apartment Interiors',
    description: 'One neutral colour through the living and dining areas.',
    photo: photos.apartmentBright,
    isDemo: true,
  },
  {
    id: 'exterior-craftsman',
    title: 'Grey house with white trim',
    category: 'Exterior Painting',
    description: 'A classic grey with bright white trim and porch rails.',
    photo: photos.exteriorCraftsman,
    isDemo: true,
  },
  {
    id: 'living-gallery',
    title: 'Clean white living room',
    category: 'Living Rooms',
    description: 'A smooth matt white that suits black and white prints.',
    photo: photos.livingGallery,
    isDemo: true,
  },
  {
    id: 'apartment-shelves',
    title: 'Studio corner with open shelves',
    category: 'Apartment Interiors',
    description: 'Pale walls behind open shelves, so the colours of the room show.',
    photo: photos.apartmentShelves,
    isDemo: true,
  },
  {
    id: 'bedroom-warm',
    title: 'Warm white bedroom',
    category: 'Bedrooms',
    description: 'A soft, simple finish for a calm room.',
    photo: photos.bedroomWarm,
    isDemo: true,
  },
  {
    id: 'apartment-loft',
    title: 'Loft apartment repaint',
    category: 'Apartment Interiors',
    description: 'White walls around a brick column, in a large open room.',
    photo: photos.apartmentLoft,
    isDemo: true,
  },
]

/** The projects that the gallery shows: real projects when they exist, otherwise the samples. */
export const galleryProjects: Project[] = clientProjects.length > 0 ? clientProjects : demoProjects
