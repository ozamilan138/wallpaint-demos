import type { ImageName } from './images'

/**
 * Flexible painting options.
 * These are ways to describe a project. They are not fixed packages and they have no prices.
 */
export type OptionId = 'essential' | 'complete' | 'personal'

export interface PaintingOption {
  id: OptionId
  number: string
  title: string
  description: string
  needs: string[]
  image: ImageName
  alt: string
}

export const paintingOptions: PaintingOption[] = [
  {
    id: 'essential',
    number: '01', // The brief numbers the options. taste-skill-ignore
    title: 'Essential Refresh',
    description:
      'For customers who want to refresh their existing walls and improve the look of their home without a big project.',
    needs: [
      'One or two rooms that look tired or marked',
      'A quick refresh before guests, a sale or a new tenant',
      'Keeping your current colours, or a small change',
    ],
    image: 'opt-essential',
    alt: 'A light blue painted wall with a blue armchair and a small side table',
  },
  {
    id: 'complete',
    number: '02', // taste-skill-ignore
    title: 'Complete Home Refresh',
    description:
      'For customers who plan to repaint several rooms or a larger part of the home, with the work planned as one project.',
    needs: [
      'Most rooms of an apartment or house',
      'Moving in, moving out or after a renovation',
      'One consistent colour plan across the home',
    ],
    image: 'opt-complete',
    alt: 'An open-plan home with white walls, a grey sofa, a wood accent wall and a kitchen behind',
  },
  {
    id: 'personal',
    number: '03', // taste-skill-ignore
    title: 'Personalised Painting Solution',
    description:
      'For customers who want specific colours, a feature wall, a texture or other special requirements.',
    needs: [
      'A feature wall or a bold colour',
      'Textured or decorative finishes',
      'A room plan with your own ideas and details',
    ],
    image: 'opt-personal',
    alt: 'A living room with a deep navy wall, a tan sofa and a gold shelf',
  },
]

/** The areas that a visitor can mark on the floor plan. */
export interface PlanArea {
  id: string
  label: string
  /** CSS grid area name in the floor plan. */
  area: string
}

export const planRooms: PlanArea[] = [
  { id: 'bedroom-1', label: 'Main bedroom', area: 'bed1' },
  { id: 'bedroom-2', label: 'Second bedroom', area: 'bed2' },
  { id: 'bathroom', label: 'Bathroom', area: 'bath' },
  { id: 'hallway', label: 'Hallway', area: 'hall' },
  { id: 'kitchen', label: 'Kitchen', area: 'kitchen' },
  { id: 'dining', label: 'Dining room', area: 'dining' },
  { id: 'living', label: 'Living room', area: 'living' },
]

export const planExtras = [
  { id: 'exterior', label: 'Exterior walls' },
  { id: 'feature', label: 'A feature wall or texture' },
] as const

/**
 * Suggests the option that matches the marked areas.
 * A feature wall or texture suggests the personalised option.
 * Three or more areas suggest the complete home refresh.
 */
export function suggestOption(selected: string[]): OptionId | null {
  if (selected.includes('feature')) return 'personal'
  if (selected.length === 0) return null
  if (selected.length >= 3) return 'complete'
  return 'essential'
}

export function labelFor(id: string): string {
  return (
    planRooms.find((r) => r.id === id)?.label ??
    planExtras.find((e) => e.id === id)?.label ??
    id
  )
}
