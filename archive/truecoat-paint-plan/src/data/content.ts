// The text and the lists for the website sections.
// The services, finishes, projects and testimonials are demo content.
// The owner must confirm or replace each item before launch.

import type { Finish, InspirationImage, Project, Service, Testimonial } from './types'

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#explore-colours', label: 'Explore Colours' },
  { href: '#services', label: 'Services' },
  { href: '#our-work', label: 'Our Work' },
  { href: '#contact', label: 'Contact' },
]

export const heroLabels = ['Residential Painting', 'Helpful Colour Guidance', 'Clear Estimates']

export const inspiration: InspirationImage[] = [
  { room: 'living', image: 'insp-living-1', alt: 'A sunny living room with a grey sofa, shelves and many plants', caption: 'Soft white walls that let the plants stand out' },
  { room: 'living', image: 'insp-living-2', alt: 'A warm living room corner with framed prints and a tan leather sofa', caption: 'Warm white with a leather sofa and art' },
  { room: 'living', image: 'insp-living-3', alt: 'A grey-blue living room with painted built-in shelves around a fireplace', caption: 'Painted shelves in a calm grey-blue' },
  { room: 'bedroom', image: 'insp-bedroom-1', alt: 'A bedroom with grey walls, a white bed and blue cushions', caption: 'Cool grey walls for a restful bedroom' },
  { room: 'bedroom', image: 'insp-bedroom-2', alt: 'A bedroom with a grey plaster-effect wall and rust bedding', caption: 'Plaster-effect grey with rust tones' },
  { room: 'bedroom', image: 'insp-bedroom-3', alt: 'A sage green bedroom with plants, prints and an orange cushion', caption: 'Sage walls with warm accents' },
  { room: 'kitchen', image: 'insp-kitchen-1', alt: 'A white kitchen with glass-front cabinets and a range cooker', caption: 'Bright white for a busy family kitchen' },
  { room: 'kitchen', image: 'insp-kitchen-2', alt: 'Close view of grey kitchen cabinets above a sink with fresh herbs', caption: 'Soft grey painted cabinets' },
  { room: 'kitchen', image: 'insp-kitchen-3', alt: 'An open kitchen with a white island, wood stools and black pendant lamps', caption: 'White walls with warm wood' },
  { room: 'dining', image: 'insp-dining-1', alt: 'A dining room with white walls, green velvet chairs and a round mirror', caption: 'White walls with green chairs' },
  { room: 'dining', image: 'insp-dining-2', alt: 'A dining area with blue patterned walls and mustard chairs', caption: 'A bold blue pattern behind the table' },
  { room: 'dining', image: 'insp-dining-3', alt: 'An open dining and living area with a wood feature wall', caption: 'Warm neutrals in an open-plan space' },
  { room: 'exterior', image: 'insp-exterior-1', alt: 'A large white house with a wraparound porch and green lawn', caption: 'Classic white with dark grey roof' },
  { room: 'exterior', image: 'insp-exterior-2', alt: 'A house with wood siding and lit windows at dusk', caption: 'Natural wood tones outside' },
  { room: 'exterior', image: 'insp-exterior-3', alt: 'A tall apartment building with balconies beside a pool', caption: 'Apartment building in light neutrals' },
]

export const services: Service[] = [
  {
    id: 'interior',
    name: 'Interior Painting',
    description: 'Walls and ceilings in living rooms, bedrooms, kitchens and hallways.',
    image: 'svc-interior',
    alt: 'A bright living room with light grey walls and white trim',
    strip: '#DCE7DB',
  },
  {
    id: 'exterior',
    name: 'Exterior Painting',
    description: 'Outside walls, porches and trim, with the surface prepared before painting.',
    image: 'svc-exterior',
    alt: 'A white wooden house with a red roof and flower boxes',
    strip: '#E9DCC7',
  },
  {
    id: 'apartment',
    name: 'Apartment Painting',
    description: 'One room or the full apartment, planned around your daily routine.',
    image: 'svc-apartment',
    alt: 'A bright apartment with a small kitchen, a red armchair and large windows',
    strip: '#A9BDC9',
  },
  {
    id: 'repainting',
    name: 'Repainting',
    description: 'Give tired or marked walls a clean, fresh coat in the same or a new colour.',
    image: 'svc-repainting',
    alt: 'A paint roller putting light blue paint on a white wall',
    strip: '#F3EBDD',
  },
  {
    id: 'texture',
    name: 'Texture Painting',
    description: 'Textured finishes that add depth to a wall and hide small surface marks.',
    image: 'svc-texture',
    alt: 'A hand with a trowel putting a textured coat on a wall',
    strip: '#E8C7B9',
  },
  {
    id: 'feature',
    name: 'Feature Walls',
    description: 'One wall in a stronger colour to give a room a clear focus.',
    image: 'svc-feature',
    alt: 'A living room with a deep teal feature wall and framed photos',
    strip: '#C9D8C8',
  },
]

export const finishes: Finish[] = [
  {
    id: 'matte',
    name: 'Matte',
    looks: 'Flat, with no shine',
    description: 'A soft, flat look that helps to hide small marks on the wall.',
    usedFor: 'Often used for living room and bedroom walls, and ceilings.',
    image: 'fin-matte',
    alt: 'A pale blue armchair in front of a plain, flat-painted wall',
  },
  {
    id: 'satin',
    name: 'Satin',
    looks: 'A soft, gentle glow',
    description: 'A little shine, and usually easier to wipe clean than matte.',
    usedFor: 'Often used for hallways, family rooms and children’s rooms.',
    image: 'fin-satin',
    alt: 'A grey sofa against a warm beige wall with a soft sheen',
  },
  {
    id: 'semi-gloss',
    name: 'Semi-gloss',
    looks: 'Clearly shiny',
    description: 'A shiny surface that you can wipe more easily.',
    usedFor: 'Often used for doors, window frames, trim and kitchen cabinets.',
    image: 'fin-semigloss',
    alt: 'White kitchen cabinets with a smooth, shiny finish',
  },
  {
    id: 'texture',
    name: 'Decorative Texture',
    looks: 'Raised or patterned',
    description: 'A surface with a pattern or a plaster effect that you can see and feel.',
    usedFor: 'Often used for feature walls and some outside walls.',
    image: 'fin-texture',
    alt: 'A pink wall with a plaster-like texture beside a wooden shelf',
  },
]

export const projects: Project[] = [
  { id: 'p1', title: 'Navy living room wall', room: 'Living Room', style: 'Bold & Modern', description: 'A deep navy wall behind a tan sofa, with light trim.', image: 'work-navy-living', alt: 'A living room with a navy blue wall, tan sofa and round coffee table', demo: true },
  { id: 'p2', title: 'Teal feature in an open plan', room: 'Living Room', style: 'Fresh & Natural', description: 'A teal accent wall that marks the living area.', image: 'work-teal-open', alt: 'An open-plan living room with a teal wall and a brown leather sofa', demo: true },
  { id: 'p3', title: 'Soft grey entrance', room: 'Hallway', style: 'Simple & Minimal', description: 'Light grey walls that keep a small entrance bright.', image: 'work-grey-hall', alt: 'A grey hallway wall with a round mirror, a chair and a sideboard', demo: true },
  { id: 'p4', title: 'Dark and calm bedroom', room: 'Bedroom', style: 'Bold & Modern', description: 'A dark feature wall behind the bed for a cosy feel.', image: 'work-dark-bedroom', alt: 'A bedroom with a very dark wall behind a large bed and big windows', demo: true },
  { id: 'p5', title: 'Warm reading corner', room: 'Living Room', style: 'Warm & Cozy', description: 'Warm white walls with open shelves and orange tones.', image: 'work-warm-living', alt: 'A living room corner with shelves, an orange chair and many plants', demo: true },
  { id: 'p6', title: 'Green wall, bright sofa', room: 'Living Room', style: 'Fresh & Natural', description: 'A mint green wall that makes the sofa colour stand out.', image: 'work-green-sofa', alt: 'An orange sofa with a pink cushion in front of a mint green wall', demo: true },
  { id: 'p7', title: 'Clean white apartment lounge', room: 'Apartment', style: 'Simple & Minimal', description: 'White walls with a wood panel feature behind the sofa.', image: 'work-wood-corner', alt: 'A grey corner sofa in a white room with a wood panel wall', demo: true },
  { id: 'p8', title: 'Bright wall for art', room: 'Living Room', style: 'Simple & Minimal', description: 'A white wall that makes a clean background for prints.', image: 'work-gallery-wall', alt: 'A white wall with framed prints above a low white sideboard', demo: true },
]

export const processSteps = [
  { title: 'Explore Your Colours', text: 'Use the colour planner or tell us the look you like.' },
  { title: 'Share Your Requirements', text: 'Send us the rooms, the property type and your plan on WhatsApp.' },
  { title: 'Discuss Your Estimate', text: 'We talk about the work and give you a clear estimate.' },
  { title: 'Schedule Your Painting', text: 'Agree a date that suits you and get your home painted.' },
]

export const values = [
  { title: 'Reasonable solutions for different requirements', text: 'One room or a full home. We discuss options that suit your needs and budget.' },
  { title: 'Clear estimates', text: 'You see what the work includes before it starts.' },
  { title: 'Careful preparation and finishing', text: 'Good results start with surface preparation and end with a clean finish.' },
  { title: 'Helpful communication', text: 'You know what happens next, and you can ask questions at any time.' },
  { title: 'Dependable service', text: 'We aim to arrive when agreed and to keep you informed.' },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'Sample text: a customer can describe here how easy it was to choose colours and get an estimate.',
    name: 'Customer name',
    detail: 'Apartment, two bedrooms',
    placeholder: true,
  },
  {
    id: 't2',
    quote: 'Sample text: a customer can describe here the preparation, the clean work and the final result.',
    name: 'Customer name',
    detail: 'Independent house, exterior',
    placeholder: true,
  },
  {
    id: 't3',
    quote: 'Sample text: a customer can describe here how the team kept them informed during the work.',
    name: 'Customer name',
    detail: 'Living room and hallway',
    placeholder: true,
  },
]
