import type { SiteImage } from './images'

/**
 * Project gallery data.
 *
 * IMPORTANT: The projects in `demoProjects` use stock photographs. They are NOT work by TrueCoat.
 * Before launch, add real project photos to `realProjects` with `isDemo: false`.
 * When `realProjects` has items, the gallery shows only the real projects.
 */

export type ProjectCategory = 'Living Rooms' | 'Bedrooms' | 'Exterior Walls' | 'Apartments' | 'Feature Walls'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  image: SiteImage
  /** True for stock photos. The gallery shows a "Demo image" label on these. */
  isDemo: boolean
}

export const demoProjects: Project[] = [
  {
    id: 'living-calm',
    title: 'A calm, light living room',
    category: 'Living Rooms',
    isDemo: true,
    image: {
      name: 'work-living',
      widths: [640, 1024, 1400],
      alt: 'A bright living room with white walls, a leather sofa, plants and a gallery wall',
      ratio: 1.33,
    },
  },
  {
    id: 'bedroom-sage',
    title: 'Soft sage for a restful bedroom',
    category: 'Bedrooms',
    isDemo: true,
    image: {
      name: 'work-bedroom',
      widths: [480, 800, 1200],
      alt: 'A bedroom with pale sage walls, green bedding, plants and framed prints',
      ratio: 1,
    },
  },
  {
    id: 'exterior-porch',
    title: 'Clean white walls for a family house',
    category: 'Exterior Walls',
    isDemo: true,
    image: {
      name: 'work-exterior',
      widths: [480, 800, 1200],
      alt: 'A white two-storey house with a porch, surrounded by autumn trees',
      ratio: 1.5,
    },
  },
  {
    id: 'apartment-bright',
    title: 'A bright refresh for a small apartment',
    category: 'Apartments',
    isDemo: true,
    image: {
      name: 'work-apartment',
      widths: [480, 800, 1200],
      alt: 'A small apartment living room with cream walls, a grey sofa, shelves and plants',
      ratio: 1.34,
    },
  },
]

/** Add verified TrueCoat projects here. */
export const realProjects: Project[] = []

export const projects: Project[] = realProjects.length > 0 ? realProjects : demoProjects
