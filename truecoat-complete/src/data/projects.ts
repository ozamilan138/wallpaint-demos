import type { ImageName } from './images'

/**
 * Portfolio data.
 *
 * demoProjects holds royalty-free sample photographs. They are NOT TrueCoat projects.
 * When the owner supplies real photographs, add them to clientProjects with isDemo: false
 * and remove the demo items. The gallery shows clientProjects first.
 */
export const projectCategories = [
  'Living Rooms',
  'Bedrooms',
  'Apartment Interiors',
  'Exterior Projects',
  'Feature Walls',
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  image: ImageName
  alt: string
  isDemo: boolean
}

export const clientProjects: Project[] = []

export const demoProjects: Project[] = [
  {
    id: 'living-blue-grey',
    title: 'Soft blue-grey living room',
    category: 'Living Rooms',
    description: 'A calm blue-grey on the main wall with crisp white ceilings and trims.',
    image: 'work-living-1',
    alt: 'A living room with a soft blue-grey wall, a round mirror, a rattan cabinet and plants',
    isDemo: true,
  },
  {
    id: 'bedroom-sage',
    title: 'Light sage bedroom',
    category: 'Bedrooms',
    description: 'A gentle sage green that keeps a small bedroom light and restful.',
    image: 'work-bedroom-1',
    alt: 'A bedroom with pale sage walls, framed botanical prints and a woven pendant light',
    isDemo: true,
  },
  {
    id: 'apartment-warm-white',
    title: 'Warm white apartment',
    category: 'Apartment Interiors',
    description: 'One warm white through the open living and dining space.',
    image: 'work-apartment-1',
    alt: 'An apartment with warm white walls, a dining table, a red armchair and large windows',
    isDemo: true,
  },
  {
    id: 'feature-green-study',
    title: 'Deep green home study',
    category: 'Feature Walls',
    description: 'Full green walls turn a spare room into a focused place to work.',
    image: 'work-feature-1',
    alt: 'A home office with deep green walls, a desk, framed prints and a white curtain',
    isDemo: true,
  },
  {
    id: 'exterior-white-house',
    title: 'White timber house',
    category: 'Exterior Projects',
    description: 'Clean white walls and window frames that suit a classic family home.',
    image: 'work-exterior-1',
    alt: 'A white timber house with a red roof, white window frames and a front garden',
    isDemo: true,
  },
  {
    id: 'living-open-plan',
    title: 'Open-plan living with a sage accent',
    category: 'Living Rooms',
    description: 'Light walls with one sage panel to mark the lounge area.',
    image: 'work-living-2',
    alt: 'An open-plan living room with light walls, a sage green accent wall and a brown sofa',
    isDemo: true,
  },
  {
    id: 'bedroom-charcoal',
    title: 'Charcoal bedroom wall',
    category: 'Bedrooms',
    description: 'A dark wall behind the bed for a cosy, hotel-like feel.',
    image: 'work-bedroom-2',
    alt: 'A bedroom with a charcoal wall behind an upholstered bed and a gold ceiling light',
    isDemo: true,
  },
  {
    id: 'apartment-fresh',
    title: 'Freshly painted, ready to move in',
    category: 'Apartment Interiors',
    description: 'Clean white walls and ceilings for a new tenant or a sale.',
    image: 'work-apartment-2',
    alt: 'An empty apartment room with fresh white walls, a wood floor and a balcony door',
    isDemo: true,
  },
  {
    id: 'feature-dark-bedroom',
    title: 'Dark feature wall bedroom',
    category: 'Feature Walls',
    description: 'A dark textured wall that makes the bed the centre of the room.',
    image: 'work-feature-2',
    alt: 'A bedroom with a dark textured feature wall, a large window and a bench',
    isDemo: true,
  },
  {
    id: 'exterior-porch',
    title: 'Family home with a wide porch',
    category: 'Exterior Projects',
    description: 'Light grey walls and white railings for a fresh look from the street.',
    image: 'work-exterior-2',
    alt: 'A large light grey house with a white wraparound porch and a green lawn',
    isDemo: true,
  },
]

export const allProjects: Project[] = [...clientProjects, ...demoProjects]
