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
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Colours', href: '#colours' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export interface Service {
  title: string
  description: string
}

export const services: Service[] = [
  {
    title: 'Interior Wall Painting',
    description: 'Walls and ceilings, prepared and painted in a finish that suits the room.',
  },
  {
    title: 'Exterior Painting',
    description: 'Walls, trims, railings and doors, with paint chosen for the surface and the weather.',
  },
  {
    title: 'Texture Painting',
    description: 'Soft plaster-effect and limewash-style finishes that give a wall depth.',
  },
  {
    title: 'Repainting and Renovation',
    description: 'A careful refresh for lived-in rooms, from filling and sanding to the last coat.',
  },
  {
    title: 'Feature Wall Painting',
    description: 'One wall in a deeper shade, to give a room a point of focus.',
  },
  {
    title: 'Apartment Painting',
    description: 'Tidy work, planned around building rules and your daily routine.',
  },
]

export interface Project {
  title: string
  room: string
  image: ImageAsset
  alt: string
  objectPosition?: string
}

/** Demo projects. The photographs are royalty-free sample images, not work by this business. */
export const projects: Project[] = [
  {
    title: 'Sage walls, warm oak',
    room: 'Living room',
    image: images.projLiving,
    alt: 'A living room with muted sage walls, a round mirror, an oak sideboard and many plants',
    objectPosition: '50% 75%',
  },
  {
    title: 'A quiet green wall',
    room: 'Bedroom',
    image: images.projBedroom,
    alt: 'A bedroom with a soft green wall, botanical prints and white bedding',
  },
  {
    title: 'A classic white facade',
    room: 'Exterior',
    image: images.projExterior,
    alt: 'A large white house with a wraparound porch and a green lawn',
    objectPosition: '50% 45%',
  },
  {
    title: 'Deep teal feature wall',
    room: 'Living room',
    image: images.projFeature,
    alt: 'A living room with a deep teal wall, framed photographs and a tan leather sofa',
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
  swatches: Swatch[]
}

/** Screen colours are illustrative only. Check physical paint samples before a final choice. */
export const palettes: Palette[] = [
  {
    id: 'warm-neutrals',
    name: 'Warm Neutrals',
    mood: 'Soft and warm, easy to live with.',
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
    mood: 'Clay and olive tones with depth.',
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
    mood: 'Gentle greens and chalky whites.',
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
    mood: 'Gallery white with deep ink blue.',
    swatches: [
      { name: 'Pebble Grey', hex: '#C9C4BB' },
      { name: 'Ink Blue', hex: '#2F3A45' },
      { name: 'Gallery White', hex: '#F5F3EF' },
      { name: 'Charcoal', hex: '#34322E' },
    ],
  },
]

/** Proposed service principles. Confirm them with the business owner. */
export const principles: string[] = [
  'Attention to preparation and detail',
  'Thoughtful colour guidance',
  'Clean and careful finishing',
  'Clear communication',
  'Professional project coordination',
]

export interface ProcessStep {
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  { title: 'Share Your Requirements', description: 'Tell us the rooms and the timing. Photos help.' },
  { title: 'Discuss Colours and Finishes', description: 'Talk through shades and test samples in your light.' },
  { title: 'Receive Your Estimate', description: 'A clear estimate of the work and what it includes.' },
  { title: 'Transform Your Space', description: 'Careful preparation, an even finish, a tidy home.' },
]

export interface Testimonial {
  quote: string
  name: string
  context: string
  /** Keep true until a real client gives permission to publish their words. */
  isPlaceholder: boolean
}

/**
 * Testimonials. Replace the placeholders with real, permitted client feedback before launch.
 * When at least one item has isPlaceholder set to false, the site shows only the real items.
 */
export const testimonials: Testimonial[] = [
  {
    quote: 'Sample testimonial. A client describes how the colour advice changed the feel of their living room.',
    name: 'Client name',
    context: 'Living room repaint',
    isPlaceholder: true,
  },
  {
    quote: 'Sample testimonial. A client comments on the tidy work and the clear communication.',
    name: 'Client name',
    context: 'Apartment painting',
    isPlaceholder: true,
  },
]
