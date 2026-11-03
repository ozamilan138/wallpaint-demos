import type { ImageName } from './images'

/**
 * Demo service list. The owner must confirm each service before launch.
 * Remove a service that the business does not offer.
 */
export interface Service {
  id: string
  name: string
  description: string
  image: ImageName
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'interior',
    name: 'Interior Wall Painting',
    description: 'Fresh colour for living rooms, bedrooms, kitchens and hallways, from one wall to the whole home.',
    image: 'svc-interior',
    imageAlt: 'A bright living room with light grey walls and a beige sofa',
  },
  {
    id: 'exterior',
    name: 'Exterior Painting',
    description: 'Paint for outside walls, front elevations and boundary walls, to refresh how your home looks from the street.',
    image: 'svc-exterior',
    imageAlt: 'The front of a modern house with grey walls and wood panels',
  },
  {
    id: 'apartment',
    name: 'Apartment Painting',
    description: 'Painting for flats and apartments, planned around the people who live there.',
    image: 'svc-apartment',
    imageAlt: 'An apartment with white walls, a dining table and a red armchair',
  },
  {
    id: 'repainting',
    name: 'Repainting',
    description: 'A new coat for walls that look tired, marked or faded, in the same colour or a new one.',
    image: 'svc-repaint',
    imageAlt: 'A paint roller putting light blue paint on a white wall',
  },
  {
    id: 'texture',
    name: 'Texture Painting',
    description: 'Textured finishes that add depth and pattern to a wall.',
    image: 'svc-texture',
    imageAlt: 'A white painted brick wall above a green cabinet',
  },
  {
    id: 'feature',
    name: 'Feature Walls',
    description: 'One wall in a stronger colour or finish, to give a room a focal point.',
    image: 'svc-feature',
    imageAlt: 'A living room with a navy blue feature wall and an orange sofa',
  },
]
