import { Brush, Building2, Frame, House, PaintRoller, RotateCcw, type LucideIcon } from 'lucide-react'

/**
 * Demo service categories.
 * The owner must confirm the real list. Remove a service that the business does not provide.
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
    description: 'Living rooms, bedrooms, hallways and kitchens, with furniture and floors protected.',
    icon: PaintRoller,
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    description: 'Outside walls, trims and gates, prepared and painted to look cared for.',
    icon: House,
  },
  {
    id: 'apartment',
    title: 'Apartment Painting',
    description: 'One room or the full flat, planned around your building and your dates.',
    icon: Building2,
  },
  {
    id: 'repaint',
    title: 'Repainting and Renovation',
    description: 'Tired or marked walls repaired where needed and painted again.',
    icon: RotateCcw,
  },
  {
    id: 'texture',
    title: 'Texture Painting',
    description: 'Textured and decorative finishes that add depth to a room.',
    icon: Brush,
  },
  {
    id: 'feature',
    title: 'Decorative Feature Walls',
    description: 'One wall in a deeper colour to give a room a clear focal point.',
    icon: Frame,
  },
]
