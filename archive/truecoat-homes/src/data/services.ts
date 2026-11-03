import { photos, type Photo } from './photos'

export type Service = {
  id: string
  name: string
  description: string
  photo: Photo
}

/**
 * Demo service list. Before launch, keep only the services that the business really offers.
 * Each service gets its own WhatsApp message with its name.
 */
export const services: Service[] = [
  {
    id: 'interior',
    name: 'Interior Painting',
    description:
      'Walls, ceilings, doors and trim inside your home. We discuss colours and finishes for each room before work starts.',
    photo: photos.svcInterior,
  },
  {
    id: 'exterior',
    name: 'Exterior Painting',
    description:
      'Outside walls, trim, gates and railings. We look at the condition of each surface and plan the preparation it needs.',
    photo: photos.svcExterior,
  },
  {
    id: 'apartment',
    name: 'Apartment Painting',
    description:
      'One room or the complete apartment. We plan the work around your home and the rules of your building.',
    photo: photos.svcApartment,
  },
  {
    id: 'repainting',
    name: 'Repainting',
    description:
      'A fresh coat for walls that look tired, marked or out of date, in the same colour or a new one.',
    photo: photos.svcRepainting,
  },
  {
    id: 'texture',
    name: 'Texture Painting',
    description: 'Textured finishes that add depth to a wall. We show you sample finishes before you choose.',
    photo: photos.svcTexture,
  },
  {
    id: 'decorative',
    name: 'Decorative Wall Painting',
    description:
      'Feature walls, colour blocks and simple patterns that give one part of a room its own character.',
    photo: photos.svcDecorative,
  },
]
