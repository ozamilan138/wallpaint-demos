import type { ImageAsset } from './images'
import { images } from './images'

/*
 * Site content. Change the text here, not in the components.
 * The services, projects and testimonials are demo content.
 * Confirm the real service list with the business owner before launch.
 */

export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'Our Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Colour Inspiration', href: '#colours' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export interface Service {
  title: string
  description: string
  image: ImageAsset
  alt: string
  objectPosition?: string
}

export const services: Service[] = [
  {
    title: 'Interior Wall Painting',
    description:
      'Walls and ceilings prepared, protected and painted in a finish chosen for how each room is used.',
    image: images.svcInterior,
    alt: 'A calm living room with pale sage walls, a grey sofa and framed prints',
    objectPosition: '50% 60%',
  },
  {
    title: 'Exterior Painting',
    description:
      'Facades, trims, railings and doors painted with coatings selected for the surface and the weather it faces.',
    image: images.svcExterior,
    alt: 'A white weatherboard house with a front porch, framed by autumn trees',
  },
  {
    title: 'Texture Painting',
    description:
      'Limewash-style, plaster-effect and soft textured finishes that give a wall depth and a quiet movement of light.',
    image: images.svcTexture,
    alt: 'A bedroom wall with a soft grey plaster-effect finish behind a timber bed with rust linen',
  },
  {
    title: 'Repainting and Renovation',
    description:
      'A considered refresh for lived-in rooms, from filling and sanding to the final, even coat.',
    image: images.svcRepaint,
    alt: 'A paint roller spreading pale blue paint across a white wall',
  },
  {
    title: 'Feature Wall Painting',
    description:
      'One wall in a deeper or bolder shade, to give a room a point of focus for art, shelves or a bed.',
    image: images.svcFeature,
    alt: 'A living room with a deep blue feature wall, a tan leather sofa and brass details',
  },
  {
    title: 'Apartment Painting',
    description:
      'Tidy, well-organised painting for apartments, planned around building rules and your daily routine.',
    image: images.svcApartment,
    alt: 'An empty, freshly painted white apartment room with a glass door to a balcony',
  },
]

export interface Project {
  title: string
  category: string
  room: string
  description: string
  image: ImageAsset
  alt: string
  objectPosition?: string
}

/** Demo projects. The photographs are royalty-free sample images, not work by this business. */
export const projects: Project[] = [
  {
    title: 'Sage walls, warm oak',
    category: 'Interior painting',
    room: 'Living room',
    description: 'Muted sage walls with timber and brass, for a calm and layered living space.',
    image: images.projLiving,
    alt: 'A living room with muted sage walls, a round mirror, an oak sideboard and many plants',
    objectPosition: '50% 75%',
  },
  {
    title: 'A quiet green retreat',
    category: 'Feature wall',
    room: 'Bedroom',
    description: 'A soft green wall behind the bed, balanced by white linen and natural textures.',
    image: images.projBedroom,
    alt: 'A bedroom with a soft green wall, botanical prints and white bedding',
  },
  {
    title: 'A classic white facade',
    category: 'Exterior painting',
    room: 'Family home',
    description: 'Crisp white weatherboard, dark roof lines and a clean porch trim.',
    image: images.projExterior,
    alt: 'A large white house with a wraparound porch and a green lawn',
    objectPosition: '50% 45%',
  },
  {
    title: 'Deep teal statement',
    category: 'Feature wall',
    room: 'Living room',
    description: 'One deep teal wall frames a gallery of prints above warm leather.',
    image: images.projFeature,
    alt: 'A living room with a deep teal wall, framed photographs and a tan leather sofa',
  },
  {
    title: 'Light-filled dining room',
    category: 'Interior painting',
    room: 'Dining room',
    description: 'Soft white walls let the green chairs and natural light do the work.',
    image: images.projDining,
    alt: 'A bright dining room with soft white walls, green velvet chairs and a round mirror',
  },
  {
    title: 'A grey-green welcome',
    category: 'Repainting',
    room: 'Entrance hall',
    description: 'A muted grey-green hallway with a rattan cabinet and a round mirror.',
    image: images.projHallway,
    alt: 'An entrance hall with grey-green walls, a timber ceiling and a herringbone floor',
    objectPosition: '50% 62%',
  },
]

export interface Swatch {
  name: string
  hex: string
}

export interface Palette {
  id: string
  name: string
  mood: string
  /** The four colours in the order of the room preview: wall, feature, trim, detail. */
  swatches: [Swatch, Swatch, Swatch, Swatch]
}

/** Screen colours are illustrative only. Check physical paint samples before a final choice. */
export const palettes: Palette[] = [
  {
    id: 'warm-neutrals',
    name: 'Warm Neutrals',
    mood: 'Soft, warm and easy to live with in every room.',
    swatches: [
      { name: 'Oat', hex: '#DDD1BF' },
      { name: 'Warm Taupe', hex: '#B3A08A' },
      { name: 'Linen White', hex: '#F1ECE3' },
      { name: 'Walnut', hex: '#6E5A47' },
    ],
  },
  {
    id: 'modern-earthy',
    name: 'Modern Earthy',
    mood: 'Clay and olive tones that bring warmth and depth.',
    swatches: [
      { name: 'Sandstone', hex: '#D4BFA0' },
      { name: 'Fired Clay', hex: '#B07A5E' },
      { name: 'Bone', hex: '#EEE7DA' },
      { name: 'Olive Grove', hex: '#6F6D4E' },
    ],
  },
  {
    id: 'soft-natural',
    name: 'Soft & Natural',
    mood: 'Gentle greens and chalky whites for calm, airy rooms.',
    swatches: [
      { name: 'Sage Mist', hex: '#C3C8B4' },
      { name: 'Eucalyptus', hex: '#8E9A83' },
      { name: 'Chalk', hex: '#F2EFE7' },
      { name: 'Driftwood', hex: '#9A8D7A' },
    ],
  },
  {
    id: 'contemporary-contrast',
    name: 'Contemporary Contrast',
    mood: 'Gallery white and deep ink blue for crisp definition.',
    swatches: [
      { name: 'Pebble Grey', hex: '#C9C4BB' },
      { name: 'Ink Blue', hex: '#2F3A45' },
      { name: 'Gallery White', hex: '#F5F3EF' },
      { name: 'Charcoal', hex: '#34322E' },
    ],
  },
]

export interface Principle {
  title: string
  description: string
}

/** Proposed service principles. Confirm them with the business owner. */
export const principles: Principle[] = [
  {
    title: 'Attention to preparation and detail',
    description:
      'Surfaces are cleaned, filled and sanded before any paint goes on, because a fine finish depends on what lies beneath it.',
  },
  {
    title: 'Thoughtful colour guidance',
    description:
      'Help to compare shades in your own light, so the colour you choose is the colour you enjoy every day.',
  },
  {
    title: 'Clean and careful finishing',
    description: 'Crisp lines, even coats, and floors and furniture protected from the first day to the last.',
  },
  {
    title: 'Clear communication',
    description: 'You know what happens next, when it happens and who to speak to with a question.',
  },
  {
    title: 'Professional project coordination',
    description: 'Each stage planned in order and arranged around your home and your routine.',
  },
]

export interface ProcessStep {
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Share Your Requirements',
    description: 'Send a message with the rooms, surfaces and timing you have in mind. Photos help.',
  },
  {
    title: 'Discuss Colours and Finishes',
    description: 'Talk through shades, sheens and textures, and test samples in your own light.',
  },
  {
    title: 'Receive Your Estimate',
    description: 'Get a clear estimate that sets out the scope of the work and what is included.',
  },
  {
    title: 'Transform Your Space',
    description: 'Careful preparation, an even finish and a tidy home at the end of each day.',
  },
]

export interface Testimonial {
  quote: string
  name: string
  context: string
  /** Keep true until a real client gives permission to publish their words. */
  isPlaceholder: boolean
}

/** Placeholder testimonials. Replace them with real, permitted client feedback before launch. */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Sample testimonial. A client describes how the colour advice and the finish changed the feel of their living room.',
    name: 'Client name',
    context: 'Living room repaint',
    isPlaceholder: true,
  },
  {
    quote: 'Sample testimonial. A client comments on the preparation, the tidy work and the clear communication.',
    name: 'Client name',
    context: 'Apartment painting',
    isPlaceholder: true,
  },
  {
    quote: 'Sample testimonial. A client shares how the feature wall became their favourite part of the home.',
    name: 'Client name',
    context: 'Bedroom feature wall',
    isPlaceholder: true,
  },
]
