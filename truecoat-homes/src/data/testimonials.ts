export type Testimonial = {
  quote: string
  /** The customer's name. Use a real name only with the customer's permission. */
  name: string
  projectType: string
  /** true for sample text that shows the layout. Set to false only for real, verified reviews. */
  placeholder: boolean
}

/**
 * Sample placeholders. These are not real customer reviews.
 * Replace them with genuine feedback, and set placeholder to false for each real review.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'This is sample text. A real review will go here: what the customer asked for, how the work went and how the room looks now.',
    name: 'Customer name',
    projectType: 'Apartment painting',
    placeholder: true,
  },
  {
    quote: 'Sample text. A short real review about communication and the estimate will go here.',
    name: 'Customer name',
    projectType: 'Single room',
    placeholder: true,
  },
  {
    quote: 'Sample text. A short real review about the finish and the cleanup will go here.',
    name: 'Customer name',
    projectType: 'Exterior painting',
    placeholder: true,
  },
]
