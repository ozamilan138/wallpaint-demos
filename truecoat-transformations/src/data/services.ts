import { photos, type Photo } from './photos'

/**
 * Sample service list. Change it to the services that the owner confirms.
 * The first two services show large on the page. The others show as compact rows.
 */
export type Service = {
  id: string
  title: string
  description: string
  photo: Photo
}

export const services: Service[] = [
  {
    id: 'interior',
    title: 'Interior Painting',
    description:
      'Walls, ceilings, doors and trim in any room. We protect your floors and furniture, and we leave the room clean.',
    photo: photos.serviceInterior,
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    description:
      'Outside walls, gates, railings and trim. We prepare the surface first, so the new paint has a good base.',
    photo: photos.serviceExterior,
  },
  {
    id: 'apartment',
    title: 'Apartment Painting',
    description: 'One room or the full flat. We plan the work around you, your neighbours and the building rules.',
    photo: photos.serviceApartment,
  },
  {
    id: 'repainting',
    title: 'Repainting',
    description: 'Tired, marked or faded walls? A fresh coat makes the room feel new again.',
    photo: photos.serviceRepainting,
  },
  {
    id: 'texture',
    title: 'Texture Painting',
    description: 'Textured finishes that add depth to a wall. We show you sample finishes before we start.',
    photo: photos.serviceTexture,
  },
  {
    id: 'feature-wall',
    title: 'Feature Wall Painting',
    description: 'One wall in a strong colour, to give a room a focus. We help you choose where and which shade.',
    photo: photos.serviceFeature,
  },
]
