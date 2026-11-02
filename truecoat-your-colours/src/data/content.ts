import type { ImageName } from './images'

/** Paint finishes. Show only the finishes that the business offers. */
export interface Finish {
  id: string
  name: string
  /** 1 is the lowest sheen and 4 is the highest. */
  sheen: 1 | 2 | 3 | 4
  sheenLabel: string
  description: string
  oftenFor: string
  image: ImageName
  imageAlt: string
}

export const finishes: Finish[] = [
  {
    id: 'matte',
    name: 'Matte',
    sheen: 1,
    sheenLabel: 'No shine',
    description: 'A flat, soft look with almost no shine. It makes colours look calm and even.',
    oftenFor: 'Living rooms, bedrooms and ceilings',
    image: 'fin-matte',
    imageAlt: 'A flat blue-grey wall with a light blue armchair and a floor lamp',
  },
  {
    id: 'satin',
    name: 'Satin',
    sheen: 2,
    sheenLabel: 'Soft shine',
    description: 'A gentle glow between matte and gloss. Many people choose it for rooms that get more use.',
    oftenFor: 'Hallways, family rooms and children’s rooms',
    image: 'fin-satin',
    imageAlt: 'An empty, freshly painted white room with a wooden floor and a glass door',
  },
  {
    id: 'semi-gloss',
    name: 'Semi-gloss',
    sheen: 3,
    sheenLabel: 'Clear shine',
    description: 'A brighter shine that catches the light and shows the shape of details.',
    oftenFor: 'Doors, window frames and trim',
    image: 'fin-semigloss',
    imageAlt: 'A white room with arched black windows, wooden beams and white trim',
  },
  {
    id: 'texture',
    name: 'Decorative Texture',
    sheen: 1,
    sheenLabel: 'Varies by texture',
    description: 'A raised or patterned surface that adds depth. The look depends on the technique.',
    oftenFor: 'Feature walls and entrance areas',
    image: 'fin-texture',
    imageAlt: 'A bedroom with a grey plaster-effect wall behind a wooden bed',
  },
]

/** The four steps of "How it works". */
export const processSteps = [
  {
    title: 'Explore Ideas',
    text: 'Look at rooms, moods and colour palettes. Save the ones you like in the planner.',
  },
  {
    title: 'Share Your Requirements',
    text: 'Send your choices on WhatsApp, or tell us about your space on a call.',
  },
  {
    title: 'Discuss Suitable Options and Estimate',
    text: 'Talk about colours, finishes and scope, and receive an estimate for the work.',
  },
  {
    title: 'Schedule Your Painting Project',
    text: 'Agree on a start date that suits you, and get your home painted.',
  },
]

/** Proposed service principles. The owner must confirm them. */
export const principles = [
  {
    title: 'Different project requirements',
    text: 'One wall, one room or a whole home. We start from what you need.',
  },
  {
    title: 'Thoughtful planning',
    text: 'We agree the scope, colours and finish before the work starts.',
  },
  {
    title: 'Quality-conscious workmanship',
    text: 'Careful preparation and tidy finishing at every stage.',
  },
  {
    title: 'Clear communication',
    text: 'You know what is planned, and you can ask questions at any time.',
  },
  {
    title: 'Flexible solutions',
    text: 'We talk through options that suit your space and your budget.',
  },
  {
    title: 'Simple enquiry process',
    text: 'Send your planner choices on WhatsApp in one tap.',
  },
]

/**
 * Placeholder testimonials. They are NOT real reviews.
 * Replace them only with real feedback that customers give permission to publish.
 */
export interface Testimonial {
  quote: string
  name: string
  detail: string
  placeholder: boolean
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'A real customer review goes here, in the words of the customer.',
    name: 'Customer name',
    detail: 'Type of project and area',
    placeholder: true,
  },
  {
    quote: 'A second real review goes here, for example about colour advice or communication.',
    name: 'Customer name',
    detail: 'Type of project and area',
    placeholder: true,
  },
  {
    quote: 'A third real review goes here, for example about an apartment or an exterior project.',
    name: 'Customer name',
    detail: 'Type of project and area',
    placeholder: true,
  },
]
