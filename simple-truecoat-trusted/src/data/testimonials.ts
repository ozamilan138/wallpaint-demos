/**
 * Testimonial data.
 *
 * IMPORTANT: These items are placeholders. They are not real reviews.
 * Replace them with real customer feedback. Get permission from each customer
 * before you show the name. Set `isPlaceholder` to false for a real review.
 */

export interface Testimonial {
  id: string
  quote: string
  name: string
  detail: string
  isPlaceholder: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    quote:
      'Put a real customer review here. For example, what the customer said about the estimate, the preparation or the cleanup.',
    name: 'Customer name',
    detail: 'Location and type of work',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    quote:
      'Put a second real review here. Short reviews of two or three sentences are the easiest to read on a phone.',
    name: 'Customer name',
    detail: 'Location and type of work',
    isPlaceholder: true,
  },
]
