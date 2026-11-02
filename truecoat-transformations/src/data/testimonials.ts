/**
 * Customer reviews.
 *
 * All the entries below are placeholders for the demo. They are not real reviews.
 * Replace them with real reviews only after the customer gives permission.
 * Then set isPlaceholder to false.
 */
export type Testimonial = {
  id: string
  /** The customer's name, as the customer agrees to show it. */
  name: string
  review: string
  /** Optional, for example "Bedroom repaint". */
  projectType?: string
  isPlaceholder: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    name: 'Customer name',
    review:
      'A real customer review goes here: what the customer liked about the estimate, the updates and the finished room.',
    projectType: 'Living room repaint',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    name: 'Customer name',
    review: 'A short review from a second customer goes here.',
    projectType: 'Apartment painting',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    name: 'Customer name',
    review: 'A short review from a third customer goes here.',
    projectType: 'Exterior painting',
    isPlaceholder: true,
  },
]
