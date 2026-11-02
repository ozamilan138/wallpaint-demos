import type { ImageName } from './images'

/**
 * Photos for the inspiration gallery.
 *
 * There are two lists:
 * - clientProjects: real TrueCoat projects. Add them here when the owner
 *   supplies photos and permission. The gallery then shows these photos and
 *   hides the demo photos.
 * - demoInspiration: Unsplash photos for the demo. They do not show TrueCoat work.
 */
export interface GalleryItem {
  id: string
  /** An id from inspirationCategories. */
  category: string
  title: string
  description: string
  image: ImageName
  imageAlt: string
  source: 'demo' | 'client'
}

export const clientProjects: GalleryItem[] = []

export const demoInspiration: GalleryItem[] = [
  {
    id: 'living-1',
    category: 'living',
    title: 'Cream walls with soft texture',
    description: 'Warm whites and natural textiles keep a small living room light.',
    image: 'gal-living-1',
    imageAlt: 'A cream living room with a white sofa, rattan mirrors and a rug',
    source: 'demo',
  },
  {
    id: 'living-2',
    category: 'living',
    title: 'Beige walls and long windows',
    description: 'A sandy wall colour that picks up the warm wood and leather.',
    image: 'gal-living-2',
    imageAlt: 'A wide living room with beige walls, a long window and orange cushions',
    source: 'demo',
  },
  {
    id: 'living-3',
    category: 'living',
    title: 'Blush wall behind a gallery of prints',
    description: 'A pale pink-beige wall that warms a collection of framed art.',
    image: 'gal-living-3',
    imageAlt: 'A living room with a blush wall, framed prints and a tan leather sofa',
    source: 'demo',
  },
  {
    id: 'bedroom-1',
    category: 'bedroom',
    title: 'Light grey for a restful bedroom',
    description: 'A soft grey wall and white trim for a calm, bright room.',
    image: 'gal-bedroom-1',
    imageAlt: 'A bedroom with light grey walls, white bedding and a black armchair',
    source: 'demo',
  },
  {
    id: 'bedroom-2',
    category: 'bedroom',
    title: 'A deep charcoal wall',
    description: 'One dark wall behind the bed makes the room feel snug.',
    image: 'gal-bedroom-2',
    imageAlt: 'A bedroom with a charcoal wall, a grey upholstered bed and a gold light',
    source: 'demo',
  },
  {
    id: 'bedroom-3',
    category: 'bedroom',
    title: 'Warm white with dark accents',
    description: 'Clean walls let the bedding and art bring the colour.',
    image: 'gal-bedroom-3',
    imageAlt: 'A bedroom with white walls, patterned bedding and dark framed art',
    source: 'demo',
  },
  {
    id: 'kitchen-1',
    category: 'kitchen',
    title: 'Bright white kitchen',
    description: 'White walls and cabinets with warm copper details.',
    image: 'gal-kitchen-1',
    imageAlt: 'A white kitchen with hexagon tiles and copper handles',
    source: 'demo',
  },
  {
    id: 'kitchen-2',
    category: 'kitchen',
    title: 'White walls with natural wood',
    description: 'A simple white finish that suits an open-plan kitchen.',
    image: 'gal-kitchen-2',
    imageAlt: 'An open kitchen with white walls, a white island and wooden stools',
    source: 'demo',
  },
  {
    id: 'kitchen-3',
    category: 'kitchen',
    title: 'Soft grey and brass',
    description: 'Pale grey walls with a warm brass tap and glass pendants.',
    image: 'gal-kitchen-3',
    imageAlt: 'A kitchen corner with grey walls, glass pendant lights and wooden stools',
    source: 'demo',
  },
  {
    id: 'feature-1',
    category: 'feature',
    title: 'A teal feature wall',
    description: 'One coloured wall gives an open-plan space a focal point.',
    image: 'gal-feature-1',
    imageAlt: 'An open-plan living space with a teal feature wall and a tan sofa',
    source: 'demo',
  },
  {
    id: 'feature-2',
    category: 'feature',
    title: 'A dark textured wall',
    description: 'A deep, textured wall behind the bed with soft lamp light.',
    image: 'gal-feature-2',
    imageAlt: 'A bedroom with a dark textured feature wall and large windows',
    source: 'demo',
  },
  {
    id: 'feature-3',
    category: 'feature',
    title: 'Charcoal in an open loft',
    description: 'A dark accent wall that frames shelves and a reading corner.',
    image: 'gal-feature-3',
    imageAlt: 'A loft living room with a charcoal wall, shelves and a grey sofa',
    source: 'demo',
  },
  {
    id: 'exterior-1',
    category: 'exterior',
    title: 'Classic white and grey',
    description: 'White walls with a grey roof and a deep porch.',
    image: 'gal-exterior-1',
    imageAlt: 'A large white house with a grey roof and a wide front porch',
    source: 'demo',
  },
  {
    id: 'exterior-2',
    category: 'exterior',
    title: 'White walls with a bold roof',
    description: 'Bright white siding that makes a coloured roof stand out.',
    image: 'gal-exterior-2',
    imageAlt: 'A white house with a red roof, flower boxes and stone steps',
    source: 'demo',
  },
  {
    id: 'exterior-3',
    category: 'exterior',
    title: 'Warm wood and deep blue',
    description: 'Natural wood tones under a dark roof, lit at dusk.',
    image: 'gal-exterior-3',
    imageAlt: 'A house with wood siding and a dark roof at dusk with warm window light',
    source: 'demo',
  },
]

/** The gallery shows real projects when they exist. */
export const galleryItems: GalleryItem[] = clientProjects.length > 0 ? clientProjects : demoInspiration
