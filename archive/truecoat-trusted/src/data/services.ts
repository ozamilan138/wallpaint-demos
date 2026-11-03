import type { SiteImage } from './images'

/**
 * Demo service list. Confirm each service with the business owner before launch.
 * To remove a service, delete its object. To add one, copy an object and change the values.
 */

export interface Service {
  id: string
  title: string
  description: string
  image: SiteImage
}

export const services: Service[] = [
  {
    id: 'interior',
    title: 'Interior Wall Painting',
    description:
      'Fresh colour for living rooms, bedrooms, kitchens and hallways. We protect your furniture and floors before we start.',
    image: {
      name: 'svc-interior',
      widths: [480, 800],
      alt: 'A living room with soft grey-green walls, a grey sofa and woven pendant lamps',
      ratio: 1,
    },
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    description:
      'Paint for outside walls, trims and boundary walls, with surface cleaning and repair before the first coat.',
    image: {
      name: 'svc-exterior',
      widths: [480, 800],
      alt: 'Two painters on ladders paint the outside wall of a house',
      ratio: 1.5,
    },
  },
  {
    id: 'apartment',
    title: 'Apartment Painting',
    description:
      'One room or the full apartment. We plan the work around your building rules and your daily routine.',
    image: {
      name: 'svc-apartment',
      widths: [480, 800],
      alt: 'An empty apartment room with freshly painted white walls and a large window',
      ratio: 1.5,
    },
  },
  {
    id: 'repainting',
    title: 'Repainting',
    description:
      'Faded, stained or marked walls made new again. We fill small cracks and prepare the surface first.',
    image: {
      name: 'svc-repaint',
      widths: [480, 800],
      alt: 'A paint roller puts a fresh coat of blue paint on a white wall',
      ratio: 1.43,
    },
  },
  {
    id: 'texture',
    title: 'Texture Painting',
    description:
      'Textured finishes that add depth to a wall. We show you sample patterns before you decide.',
    image: {
      name: 'svc-texture',
      widths: [480, 800],
      alt: 'A bedroom wall with a soft grey textured finish behind a wooden bed',
      ratio: 1.09,
    },
  },
  {
    id: 'feature',
    title: 'Decorative Feature Walls',
    description:
      'One wall in a strong colour to make a room feel new, without the cost of painting every wall.',
    image: {
      name: 'svc-feature',
      widths: [480, 800],
      alt: 'A home office with a deep green feature wall, a desk and white curtains',
      ratio: 1.33,
    },
  },
]
