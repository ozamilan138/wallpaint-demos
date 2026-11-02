import { photos, type Photo } from './photos'

export const projectCategories = [
  'Living Rooms',
  'Bedrooms',
  'Kitchens',
  'Apartment Interiors',
  'Exterior Painting',
  'Feature Walls',
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  photo: Photo
  /** 'demo' is sample imagery. 'client' is a real, verified TrueCoat project. */
  source: 'demo' | 'client'
}

/**
 * Real client projects. Add verified TrueCoat projects here, with the customer's permission.
 * When this list has items, the gallery shows them and hides the demo projects.
 */
export const clientProjects: Project[] = []

/** Sample projects that show the layout. These are stock photographs, not TrueCoat work. */
export const demoProjects: Project[] = [
  {
    id: 'sage-living',
    title: 'Soft Grey-Green Living Room',
    category: 'Living Rooms',
    description: 'A calm, muted green on all four walls, with white trim to keep the room bright.',
    photo: photos.gLivingGreyGreen,
    source: 'demo',
  },
  {
    id: 'teal-feature',
    title: 'Deep Teal Feature Wall',
    category: 'Feature Walls',
    description: 'One strong wall behind the sofa gives the room a clear focus.',
    photo: photos.gFeatureTeal,
    source: 'demo',
  },
  {
    id: 'grey-kitchen',
    title: 'Two-Tone Kitchen Refresh',
    category: 'Kitchens',
    description: 'Dark grey lower cabinets with light walls and tiles above.',
    photo: photos.gKitchenGrey,
    source: 'demo',
  },
  {
    id: 'sage-bedroom',
    title: 'Pale Sage Bedroom',
    category: 'Bedrooms',
    description: 'A quiet, natural colour that suits plants, wood and white bedding.',
    photo: photos.gBedroomSage,
    source: 'demo',
  },
  {
    id: 'porch-house',
    title: 'Full Exterior Repaint',
    category: 'Exterior Painting',
    description: 'White walls, trim and porch rails for a clean, fresh front.',
    photo: photos.gExteriorPorch,
    source: 'demo',
  },
  {
    id: 'bright-apartment',
    title: 'Bright One-Bedroom Apartment',
    category: 'Apartment Interiors',
    description: 'White walls through the living and dining area to make a small space feel open.',
    photo: photos.gApartmentBright,
    source: 'demo',
  },
  {
    id: 'charcoal-bedroom',
    title: 'Charcoal Wall behind the Bed',
    category: 'Bedrooms',
    description: 'A dark accent wall with soft, light walls on the other three sides.',
    photo: photos.gBedroomCharcoal,
    source: 'demo',
  },
  {
    id: 'green-study',
    title: 'Dark Green Home Study',
    category: 'Feature Walls',
    description: 'A deep green wall that frames the desk and the window light.',
    photo: photos.gFeatureGreenStudy,
    source: 'demo',
  },
  {
    id: 'open-living',
    title: 'Warm White Open Living Room',
    category: 'Living Rooms',
    description: 'One warm white across a long room for an even, connected look.',
    photo: photos.gLivingOpen,
    source: 'demo',
  },
  {
    id: 'cottage',
    title: 'Cottage Walls and Window Frames',
    category: 'Exterior Painting',
    description: 'Fresh white walls with crisp frames around each window.',
    photo: photos.gExteriorCottage,
    source: 'demo',
  },
  {
    id: 'plants-apartment',
    title: 'Apartment Living Room Repaint',
    category: 'Apartment Interiors',
    description: 'Clean white walls that let the furniture and plants stand out.',
    photo: photos.gApartmentPlants,
    source: 'demo',
  },
  {
    id: 'sage-kitchen',
    title: 'Soft Grey Kitchen Cabinets',
    category: 'Kitchens',
    description: 'A light grey finish on cabinet doors, with brass details.',
    photo: photos.gKitchenSage,
    source: 'demo',
  },
  {
    id: 'beige-bedroom',
    title: 'Warm Beige Bedroom Wall',
    category: 'Bedrooms',
    description: 'A warm, earthy wall colour that matches wood and rust tones.',
    photo: photos.gBedroomBeige,
    source: 'demo',
  },
  {
    id: 'blue-grey-hall',
    title: 'Blue-Grey Entrance Hall',
    category: 'Feature Walls',
    description: 'A soft blue-grey wall that greets visitors at the door.',
    photo: photos.gFeatureBlueGrey,
    source: 'demo',
  },
  {
    id: 'entrance',
    title: 'Front Entrance and Trim',
    category: 'Exterior Painting',
    description: 'Grey panels and trim painted to sit well with natural wood.',
    photo: photos.gExteriorEntrance,
    source: 'demo',
  },
]

/** The gallery shows real projects when there are any. Otherwise it shows the demo projects. */
export const galleryProjects: Project[] = clientProjects.length ? clientProjects : demoProjects
