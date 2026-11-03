import { Building2, Home, Layers, PaintRoller, Palette, RefreshCw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Demo service list. Confirm each service with the business owner before launch.
 * To remove a service, delete its object. To add one, copy an object and change the values.
 */

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'interior',
    title: 'Interior Wall Painting',
    description: 'Living rooms, bedrooms, kitchens and hallways. We cover furniture and floors first.',
    icon: PaintRoller,
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    description: 'Outside walls, trims and boundary walls, cleaned and repaired before painting.',
    icon: Home,
  },
  {
    id: 'apartment',
    title: 'Apartment Painting',
    description: 'One room or the full apartment, planned around your building rules.',
    icon: Building2,
  },
  {
    id: 'repainting',
    title: 'Repainting',
    description: 'Faded or marked walls made fresh again. Small cracks are filled first.',
    icon: RefreshCw,
  },
  {
    id: 'texture',
    title: 'Texture Painting',
    description: 'Textured finishes that add depth. You see sample patterns before you decide.',
    icon: Layers,
  },
  {
    id: 'feature',
    title: 'Decorative Feature Walls',
    description: 'One wall in a strong colour to give a room a new look.',
    icon: Palette,
  },
]
