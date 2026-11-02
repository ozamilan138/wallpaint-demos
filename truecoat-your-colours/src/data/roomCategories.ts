import type { ImageName } from './images'

/** The rooms in step one of the colour planner. */
export interface Room {
  id: string
  name: string
  image: ImageName
  imageAlt: string
}

export const rooms: Room[] = [
  {
    id: 'living',
    name: 'Living Room',
    image: 'room-living',
    imageAlt: 'A living room with sage green walls, a round mirror and a wooden cabinet',
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    image: 'room-bedroom',
    imageAlt: 'A bedroom with pale green walls, green bedding and framed prints',
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    image: 'room-kitchen',
    imageAlt: 'A kitchen with dark green cabinets and white walls',
  },
  {
    id: 'dining',
    name: 'Dining Room',
    image: 'room-dining',
    imageAlt: 'A bright dining room with green velvet chairs and a round mirror',
  },
  {
    id: 'exterior',
    name: 'Exterior',
    image: 'room-exterior',
    imageAlt: 'A white house with a front porch among autumn trees',
  },
  {
    id: 'other',
    name: 'Other Spaces',
    image: 'room-other',
    imageAlt: 'A hallway with a grey wall, a round mirror and a wooden console',
  },
]

export function findRoom(id: string | null) {
  return rooms.find((r) => r.id === id) ?? null
}

/** The categories of the inspiration gallery. */
export interface InspirationCategory {
  id: string
  name: string
}

export const inspirationCategories: InspirationCategory[] = [
  { id: 'living', name: 'Living Rooms' },
  { id: 'bedroom', name: 'Bedrooms' },
  { id: 'kitchen', name: 'Kitchens' },
  { id: 'feature', name: 'Feature Walls' },
  { id: 'exterior', name: 'Exterior Homes' },
]
