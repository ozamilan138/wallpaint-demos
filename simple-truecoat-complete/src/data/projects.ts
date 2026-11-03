import type { ImageName } from './images'

/**
 * Portfolio data.
 *
 * demoProjects holds royalty-free sample photographs. They are NOT TrueCoat projects.
 * When the owner supplies real photographs, add them to clientProjects with isDemo: false.
 * When clientProjects has items, the gallery shows only those items.
 */
export interface Project {
  id: string
  title: string
  category: string
  image: ImageName
  alt: string
  isDemo: boolean
}

export const clientProjects: Project[] = []

export const demoProjects: Project[] = [
  {
    id: 'living-open-plan',
    title: 'Light walls with a sage accent',
    category: 'Living room',
    image: 'work-living-2',
    alt: 'An open-plan living room with light walls, a sage green accent wall and a brown sofa',
    isDemo: true,
  },
  {
    id: 'bedroom-sage',
    title: 'Light sage bedroom',
    category: 'Bedroom',
    image: 'work-bedroom-1',
    alt: 'A bedroom with pale sage walls, framed botanical prints and a woven pendant light',
    isDemo: true,
  },
  {
    id: 'feature-green-study',
    title: 'Deep green home study',
    category: 'Feature wall',
    image: 'work-feature-1',
    alt: 'A home office with deep green walls, a desk, framed prints and a white curtain',
    isDemo: true,
  },
  {
    id: 'exterior-white-house',
    title: 'White timber house',
    category: 'Exterior',
    image: 'work-exterior-1',
    alt: 'A white timber house with a red roof, white window frames and a front garden',
    isDemo: true,
  },
]

export const projects: Project[] = clientProjects.length ? clientProjects : demoProjects
