import type { ImageName } from './images'
import type { MoodId } from './colourDiscovery'

/**
 * Page content. Edit the text here. The components only show it.
 *
 * Services, finishes and principles are demo content. Confirm each item with
 * the business owner before launch.
 */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Explore Colours', href: '#explore' },
  { label: 'Our Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

/** The three looks that the hero shows. Each look links to a palette id. */
export interface HeroLook {
  id: string
  paletteId: string
  mood: MoodId
  image: ImageName
  alt: string
}

export const heroLooks: HeroLook[] = [
  {
    id: 'sage',
    paletteId: 'fresh-natural',
    mood: 'fresh',
    image: 'hero-sage-living',
    alt: 'Living room with a sage green wall, a round mirror, a wooden sideboard and plants',
  },
  {
    id: 'earthy',
    paletteId: 'earthy-elegance',
    mood: 'warm',
    image: 'hero-warm-living',
    alt: 'Living room with a tan leather sofa, a gallery wall and warm beige walls',
  },
  {
    id: 'neutral',
    paletteId: 'warm-neutrals',
    mood: 'modern',
    image: 'hero-neutral-living',
    alt: 'Cream living room with a boucle sofa, rattan mirrors and soft daylight',
  },
]

export type GalleryCategoryId = 'living' | 'bedroom' | 'kitchen' | 'feature' | 'exterior'

export interface GalleryImage {
  image: ImageName
  alt: string
  caption: string
}

export interface GalleryCategory {
  id: GalleryCategoryId
  label: string
  note: string
  items: [GalleryImage, GalleryImage, GalleryImage]
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'living',
    label: 'Living Rooms',
    note: 'Living rooms get light all day. Mid-tone neutrals and soft greens stay comfortable from morning to evening.',
    items: [
      {
        image: 'gal-living-1',
        alt: 'Light grey living room with a large sectional sofa and a wall of framed art',
        caption: 'Soft grey with natural textures',
      },
      {
        image: 'gal-living-2',
        alt: 'Open living room with a tan leather sofa and a teal accent wall',
        caption: 'Teal accent behind the sofa',
      },
      {
        image: 'gal-living-3',
        alt: 'Calm living room corner with a pale sofa, a throw and copper side tables',
        caption: 'Pale walls with warm metal accents',
      },
    ],
  },
  {
    id: 'bedroom',
    label: 'Bedrooms',
    note: 'Bedrooms suit quieter colours. Low-sheen finishes and muted shades help the room feel restful.',
    items: [
      {
        image: 'gal-bedroom-1',
        alt: 'Bedroom with a charcoal feature wall behind a pale upholstered bed',
        caption: 'Charcoal wall behind the bed',
      },
      {
        image: 'gal-bedroom-2',
        alt: 'Bedroom with a black bed, a yellow cushion and pale walls with line art',
        caption: 'Pale walls with a two-tone panel',
      },
      {
        image: 'gal-bedroom-3',
        alt: 'Bright white bedroom with grey bedding and a black accent chair',
        caption: 'Crisp white with grey details',
      },
    ],
  },
  {
    id: 'kitchen',
    label: 'Kitchens',
    note: 'Kitchens need colours that are easy to live with and finishes that are easy to wipe.',
    items: [
      {
        image: 'gal-kitchen-1',
        alt: 'White kitchen with hexagon tiles and copper details',
        caption: 'Classic white with warm metal',
      },
      {
        image: 'gal-kitchen-2',
        alt: 'Modern kitchen with a white island, wooden stools and black pendant lights',
        caption: 'White and oak with black accents',
      },
      {
        image: 'gal-kitchen-3',
        alt: 'Kitchen and dining area with white chairs and a wooden table',
        caption: 'Soft white with natural wood',
      },
    ],
  },
  {
    id: 'feature',
    label: 'Feature Walls',
    note: 'One strong wall can change a whole room. Deep greens and blues work well behind a sofa, bed or desk.',
    items: [
      {
        image: 'gal-feature-1',
        alt: 'Home office with a deep green wall, a desk and a white armchair',
        caption: 'Deep green study wall',
      },
      {
        image: 'gal-feature-2',
        alt: 'Peach coloured wall with floating wooden shelves and a framed print',
        caption: 'Peach wall with open shelves',
      },
      {
        image: 'gal-feature-3',
        alt: 'Blue-grey wall with a round mirror, a rattan sideboard and plants',
        caption: 'Blue-grey behind a sideboard',
      },
    ],
  },
  {
    id: 'exterior',
    label: 'Exterior Homes',
    note: 'Exterior colours must look right in daylight and next to the roof, stone and garden.',
    items: [
      {
        image: 'gal-exterior-1',
        alt: 'White house with grey shingles and a wide front porch on a green lawn',
        caption: 'White walls with grey trim',
      },
      {
        image: 'gal-exterior-2',
        alt: 'White wooden house with a red roof and a garden of flowers',
        caption: 'White timber with a red roof',
      },
      {
        image: 'gal-exterior-3',
        alt: 'Modern single-storey house with grey walls and warm red panels',
        caption: 'Grey with warm red panels',
      },
    ],
  },
]

export interface Service {
  title: string
  description: string
  image: ImageName
  alt: string
}

export const services: Service[] = [
  {
    title: 'Interior Painting',
    description:
      'Walls, ceilings, doors and trims in living rooms, bedrooms, kitchens and hallways, with careful preparation first.',
    image: 'svc-interior',
    alt: 'Sunny living room with white walls, a leather sofa and a gallery of frames',
  },
  {
    title: 'Exterior Painting',
    description: 'Painting for outside walls, fences and trims, with colours chosen to suit the house and the street.',
    image: 'svc-exterior',
    alt: 'Modern house exterior with white panels and warm wood cladding',
  },
  {
    title: 'Texture Painting',
    description: 'Textured finishes that add depth and pattern to a feature wall.',
    image: 'svc-texture',
    alt: 'Bedroom with a dark textured feature wall and large windows',
  },
  {
    title: 'Decorative Walls',
    description: 'Accent walls, colour blocks and two-tone walls that give a room a clear focal point.',
    image: 'svc-decorative',
    alt: 'Bedroom with a dark grey accent wall and white trim',
  },
  {
    title: 'Apartment Painting',
    description: 'Painting for apartments and flats, planned around your building and your daily routine.',
    image: 'svc-apartment',
    alt: 'Bright apartment living room with shelves, plants and a grey sofa',
  },
  {
    title: 'Repainting',
    description: 'A fresh coat for tired walls, or a new colour for a room you want to feel different.',
    image: 'svc-repaint',
    alt: 'Paint roller with blue paint on a white wall',
  },
]

export interface Finish {
  name: string
  sheen: number
  summary: string
  usedFor: string
  image: ImageName
  alt: string
  position: string
}

export const finishes: Finish[] = [
  {
    name: 'Matte',
    sheen: 1,
    summary: 'A flat, soft look with almost no shine. It can help hide small marks on the wall surface.',
    usedFor: 'Often chosen for living rooms, bedrooms and ceilings.',
    image: 'hero-sage-living',
    alt: 'Close view of a sage green matte wall with a round mirror',
    position: '30% 30%',
  },
  {
    name: 'Satin',
    sheen: 2,
    summary: 'A gentle, low shine. It is usually easier to wipe clean than matte.',
    usedFor: 'Often chosen for hallways, family rooms and children’s rooms.',
    image: 'fin-satin',
    alt: 'Blue-grey wall with a soft sheen behind a rattan sideboard',
    position: '50% 25%',
  },
  {
    name: 'Semi-gloss',
    sheen: 3,
    summary: 'A clear shine that reflects more light and shows the shape of the surface.',
    usedFor: 'Often chosen for doors, trims, cabinets and kitchen areas.',
    image: 'fin-semigloss',
    alt: 'Painted kitchen cabinets with a smooth, shiny finish',
    position: '50% 20%',
  },
  {
    name: 'Decorative texture',
    sheen: 0,
    summary: 'A finish with visible pattern or depth, made with special materials or techniques.',
    usedFor: 'Often chosen for one feature wall in a living room or bedroom.',
    image: 'svc-texture',
    alt: 'Dark textured feature wall behind a bed',
    position: '25% 30%',
  },
]

export interface PortfolioItem {
  image: ImageName
  alt: string
  title: string
  room: string
  category: string
}

/**
 * Portfolio items. These are demo images only.
 * Replace each item with a real Aureline project photo and real details.
 */
export const portfolio: PortfolioItem[] = [
  {
    image: 'port-1',
    alt: 'Open-plan living room with a white sofa and a warm wood panel wall',
    title: 'Open-plan calm',
    room: 'Living room',
    category: 'Interior painting',
  },
  {
    image: 'port-2',
    alt: 'Living room with arched black windows, beams and white walls',
    title: 'Bright white with dark frames',
    room: 'Living room',
    category: 'Repainting',
  },
  {
    image: 'port-3',
    alt: 'Bedroom with a beige upholstered headboard and dark art on the wall',
    title: 'Soft beige retreat',
    room: 'Bedroom',
    category: 'Interior painting',
  },
  {
    image: 'port-4',
    alt: 'Modern house with timber cladding and black walls',
    title: 'Timber and black',
    room: 'Exterior',
    category: 'Exterior painting',
  },
  {
    image: 'port-5',
    alt: 'Bedroom with a grey bed and tall black doors to a garden',
    title: 'Quiet grey bedroom',
    room: 'Bedroom',
    category: 'Apartment painting',
  },
  {
    image: 'port-6',
    alt: 'Bedroom with an orange abstract painting and blue accents',
    title: 'Warm art, calm walls',
    room: 'Bedroom',
    category: 'Feature wall',
  },
  {
    image: 'port-7',
    alt: 'Grey living room with white shutters and a fireplace',
    title: 'Light grey family room',
    room: 'Living room',
    category: 'Repainting',
  },
  {
    image: 'port-8',
    alt: 'Dining area with a bay window, pendant lights and cream walls',
    title: 'Cream dining corner',
    room: 'Dining room',
    category: 'Interior painting',
  },
]

export const processSteps = [
  {
    title: 'Explore your ideas',
    text: 'Use the colour tool or the inspiration gallery to find the look you like.',
  },
  {
    title: 'Share your requirements',
    text: 'Send us your rooms, photos and timing on WhatsApp or by phone.',
  },
  {
    title: 'Discuss colours and estimate',
    text: 'We talk through colours and finishes with you, then send a clear estimate.',
  },
  {
    title: 'Get your home painted',
    text: 'We prepare, paint and clean up, and keep you informed at each stage.',
  },
]

/** Proposed service principles. Confirm them with the business owner. */
export const principles = [
  {
    title: 'Personal colour guidance',
    text: 'Help to choose colours that suit your light, your furniture and the way you use each room.',
  },
  {
    title: 'Thoughtful planning',
    text: 'A clear plan for each room before work starts, so you know what will happen and when.',
  },
  {
    title: 'Attention to finishing',
    text: 'Care with edges, corners and trims, because the small details decide how a room looks.',
  },
  {
    title: 'Clear communication',
    text: 'Simple updates and honest answers, from the first message to the last coat.',
  },
  {
    title: 'Careful working practices',
    text: 'Furniture and floors protected, and the space cleaned up at the end of the job.',
  },
]

/**
 * Testimonial placeholders. These are NOT real reviews.
 * Replace them only with genuine reviews, and use real names only with the
 * customer's permission.
 */
export const testimonials = [
  {
    quote: 'A real customer review will go here. For example, how the colour advice helped them choose.',
    name: 'Customer name',
    detail: 'Room painted, area',
  },
  {
    quote: 'A second genuine review will go here. For example, a comment about the finish and the clean-up.',
    name: 'Customer name',
    detail: 'Room painted, area',
  },
  {
    quote: 'A third genuine review will go here. For example, a comment about communication and timing.',
    name: 'Customer name',
    detail: 'Room painted, area',
  },
]
