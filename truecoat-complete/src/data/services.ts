import type { ImageName } from './images'

/**
 * Demo service categories.
 * The owner must confirm the real list. Remove a service that the business does not provide.
 */
export interface Service {
  id: string
  title: string
  description: string
  image: ImageName
  alt: string
}

export const services: Service[] = [
  {
    id: 'interior',
    title: 'Interior Wall Painting',
    description:
      'Fresh, even colour for living rooms, bedrooms, hallways and kitchens, with furniture and floors protected while we work.',
    image: 'svc-interior',
    alt: 'A bright living room with warm beige walls, a grey sofa and woven pendant lamps',
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    description:
      'Outside walls, trims, porches and gates prepared and painted so that your home looks cared for from the street.',
    image: 'svc-exterior',
    alt: 'A two-storey house with white painted siding and a front porch among autumn trees',
  },
  {
    id: 'apartment',
    title: 'Apartment Painting',
    description:
      'One room or the full flat. Work planned around shared spaces, building rules and the days you need your home back.',
    image: 'svc-apartment',
    alt: 'A sunny apartment living room with white walls, shelves and many plants',
  },
  {
    id: 'repaint',
    title: 'Repainting and Renovation',
    description:
      'Tired, marked or faded walls repaired where needed and repainted, before a move, after a renovation or simply for a change.',
    image: 'svc-repaint',
    alt: 'A paint roller putting a stripe of soft blue paint onto a white wall',
  },
  {
    id: 'texture',
    title: 'Texture Painting',
    description:
      'Textured and decorative wall finishes that add depth to a room. Ask us which finishes suit your walls.',
    image: 'svc-texture',
    alt: 'A bedroom with a warm grey textured wall behind a wooden bed with rust bedding',
  },
  {
    id: 'feature',
    title: 'Decorative Feature Walls',
    description:
      'One wall in a deeper or bolder colour to give a room a clear focal point, planned with you before we start.',
    image: 'svc-feature',
    alt: 'A living room with a deep teal feature wall behind a tan leather sofa',
  },
]
