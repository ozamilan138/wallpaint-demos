/**
 * Page content. All photographs are sample demo imagery from Unsplash.
 * They do not show work by Aureline Painting Co. Replace them with verified
 * project photographs before launch (put the files in public/images).
 */

export type Photo = {
  /** The file name in public/images without the width suffix, for example "living-warm". */
  src: string
  alt: string
  /** The largest width that exists for this photo. */
  maxWidth: 1600 | 2000 | 2400
  width: number
  height: number
}

export type ProjectCategory = 'Living Rooms' | 'Bedrooms' | 'Exterior' | 'Feature Walls' | 'Apartments'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  room: string
  description: string
  photo: Photo
}

const p = (src: string, alt: string, width: number, height: number, maxWidth: Photo['maxWidth'] = 1600): Photo => ({
  src,
  alt,
  width,
  height,
  maxWidth,
})

export const photos = {
  heroSlides: [
    p('bedroom-dark', 'Bedroom with a deep charcoal wall, soft white bedding and warm bedside lamps', 2400, 1523, 2400),
    p('teal-after', 'Living room with a deep teal wall behind a tan leather sofa and framed prints', 2400, 1350, 2400),
    p('bedroom-charcoal', 'Bedroom with a charcoal feature wall, a tufted white bed and brass pendant light', 2400, 2400, 2400),
  ],
  before: p('teal-before', 'The same living room with a faded beige wall before the colour change', 2400, 1350, 2400),
  after: p('teal-after', 'The same living room after the wall is painted a deep teal', 2400, 1350, 2400),
  cta: p('cta-wall', 'A pale blue armchair and a brass floor lamp in front of a clean, freshly painted wall', 2400, 1537, 2400),
}

export const projectCategories: Array<'All Projects' | ProjectCategory> = [
  'All Projects',
  'Living Rooms',
  'Bedrooms',
  'Exterior',
  'Feature Walls',
  'Apartments',
]

export const projects: Project[] = [
  {
    id: 'teal-living',
    title: 'Deep teal gallery wall',
    category: 'Feature Walls',
    room: 'Living room',
    description: 'One saturated wall gives the framed prints and leather sofa a strong backdrop.',
    photo: p('teal-after', 'Living room with a deep teal wall behind a tan leather sofa', 2400, 1350, 2400),
  },
  {
    id: 'warm-living',
    title: 'Warm white family room',
    category: 'Living Rooms',
    room: 'Living room',
    description: 'Soft white walls keep a sunny room calm and let the timber and leather show.',
    photo: p('living-warm', 'Bright living room with white walls, a leather sofa and a photo grid', 1600, 1200),
  },
  {
    id: 'dark-bedroom',
    title: 'Charcoal bedroom retreat',
    category: 'Bedrooms',
    room: 'Main bedroom',
    description: 'A dark headboard wall makes the bedroom feel quiet and enclosed in the evening.',
    photo: p('bedroom-dark', 'Bedroom with a dark charcoal wall and white bedding', 2400, 1523, 2400),
  },
  {
    id: 'white-exterior',
    title: 'Clapboard house in classic white',
    category: 'Exterior',
    room: 'House exterior',
    description: 'Crisp white siding and trim with grey roof tones for a fresh street view.',
    photo: p('exterior-white', 'White two-storey clapboard house with a wide porch and green lawn', 1600, 1067),
  },
  {
    id: 'bright-apartment',
    title: 'Light-filled city apartment',
    category: 'Apartments',
    room: 'Open-plan apartment',
    description: 'Neutral walls through every room make a compact apartment feel open.',
    photo: p('apartment-bright', 'Bright apartment with white walls, a red armchair and large windows', 1600, 1067),
  },
  {
    id: 'green-study',
    title: 'Forest green home study',
    category: 'Feature Walls',
    room: 'Home office',
    description: 'Deep green on two walls turns a work corner into a focused, calm space.',
    photo: p('feature-study', 'Home study with deep green walls, a white desk area and sheer curtains', 2000, 1500, 2000),
  },
  {
    id: 'loft-living',
    title: 'Soft stone loft lounge',
    category: 'Living Rooms',
    room: 'Lounge',
    description: 'A warm stone shade under a high window band for a relaxed, layered look.',
    photo: p('living-loft', 'Wide living room with warm stone walls, a grey sofa and a long window band', 1600, 844),
  },
  {
    id: 'sage-bedroom',
    title: 'Sage guest bedroom',
    category: 'Bedrooms',
    room: 'Guest bedroom',
    description: 'A muted sage that stays soft in daylight and warm under lamplight.',
    photo: p('bedroom-sage', 'Bedroom with pale sage walls, plants and orange cushions', 1600, 1600),
  },
  {
    id: 'dusk-exterior',
    title: 'Timber and stone family home',
    category: 'Exterior',
    room: 'House exterior',
    description: 'Dark roof trim and warm timber tones that glow at dusk.',
    photo: p('exterior-dusk', 'Timber family house at dusk with warm lit windows', 1600, 1067),
  },
  {
    id: 'herringbone-apartment',
    title: 'Herringbone floor apartment',
    category: 'Apartments',
    room: 'Living area',
    description: 'Clean white walls let a blue sofa and a parquet floor take the attention.',
    photo: p('apartment-herringbone', 'Apartment living area with white walls, a blue sofa and herringbone floor', 1600, 1068),
  },
  {
    id: 'orange-bedroom',
    title: 'Gallery white bedroom',
    category: 'Bedrooms',
    room: 'Main bedroom',
    description: 'A clean white canvas for bold art and burnt orange accents.',
    photo: p('bedroom-orange', 'Bedroom with white walls, bold red art and orange benches', 1600, 1083),
  },
  {
    id: 'green-accent',
    title: 'Sage accent in an open plan',
    category: 'Feature Walls',
    room: 'Open-plan living',
    description: 'A single sage column marks the living zone in a large white room.',
    photo: p('feature-green', 'Open-plan room with a sage green accent wall behind a leather sofa', 1600, 1067),
  },
  {
    id: 'cottage-exterior',
    title: 'White cottage with dark roof',
    category: 'Exterior',
    room: 'Cottage exterior',
    description: 'Bright white walls and porch rails framed by autumn trees.',
    photo: p('exterior-cottage', 'White cottage with a dark roof and a front porch among trees', 1600, 1067),
  },
  {
    id: 'loft-apartment',
    title: 'Industrial loft apartment',
    category: 'Apartments',
    room: 'Loft',
    description: 'Pale grey walls soften exposed beams and a busy open kitchen.',
    photo: p('apartment-loft', 'Loft apartment with pale walls, exposed ceiling and grey sofas', 1600, 1067),
  },
]

export type Service = {
  title: string
  description: string
  photo: Photo
}

/** Demo service categories. Confirm the real list with the business owner. */
export const services: Service[] = [
  {
    title: 'Interior Painting',
    description: 'Walls, ceilings, doors and trim inside your home, in the colours and finishes you choose.',
    photo: p('interior-neutral', 'Living room with warm neutral walls and round wall mirrors', 1600, 900),
  },
  {
    title: 'Exterior Painting',
    description: 'Facades, trim, gates and outdoor walls, prepared and coated for the weather they face.',
    photo: p('exterior-modern', 'Modern house exterior with white render and timber cladding', 1600, 1342),
  },
  {
    title: 'Texture Painting',
    description: 'Textured and patterned wall finishes that add depth and character to a room.',
    photo: p('bedroom-charcoal', 'Charcoal textured wall behind a white upholstered bed', 2400, 2400, 2400),
  },
  {
    title: 'Decorative Feature Walls',
    description: 'One wall in a bold shade or pattern to give a room a clear focal point.',
    photo: p('teal-after', 'Deep teal feature wall in a living room', 2400, 1350, 2400),
  },
  {
    title: 'Apartment Painting',
    description: 'Complete apartment repaints planned around building rules and your daily routine.',
    photo: p('apartment-bright', 'Bright apartment interior with large windows', 1600, 1067),
  },
  {
    title: 'Repainting',
    description: 'Fresh coats for tired, marked or outdated walls, from one room to the whole home.',
    photo: p('roller-blue', 'A paint roller applies pale blue paint over a white wall', 1600, 1118),
  },
]

export type QualityStep = {
  title: string
  text: string
  photo: Photo
}

/** Proposed service standards. Confirm each one with the business owner. */
export const qualitySteps: QualityStep[] = [
  {
    title: 'Surface preparation',
    text: 'Cracks filled, rough patches sanded, surfaces cleaned and primed where needed. Most of a lasting finish is decided here.',
    photo: p('paint-tray', 'A paint tray and roller resting on a work stool', 1600, 1067),
  },
  {
    title: 'The right materials',
    text: 'Paint, primer and tools chosen for each surface and room: kitchens, bathrooms, exteriors and bedrooms each need different things.',
    photo: p('rollers-colour', 'Paint rollers with green, red, orange and blue paint on a white wall', 1600, 2133),
  },
  {
    title: 'Colour planning',
    text: 'Shades tested in your own light before you decide, so the colour on the wall matches the room you imagined.',
    photo: p('feature-study', 'Study with deep green walls in daylight', 2000, 1500, 2000),
  },
  {
    title: 'Careful application',
    text: 'Clean cut-in lines, even coats and proper drying time between them, with furniture and floors covered.',
    photo: p('roller-blue', 'Roller applying an even coat of pale blue paint', 1600, 1118),
  },
  {
    title: 'Finishing and clean-up',
    text: 'Edges checked, touch-ups done and the room cleaned, so you return to a finished space and not a work site.',
    photo: p('interior-neutral', 'A finished, clean living room with fresh neutral walls', 1600, 900),
  },
]

export const processSteps = [
  {
    title: 'Tell Us About Your Space',
    text: 'Send a message on WhatsApp with the rooms, a few photos and the look you want.',
  },
  {
    title: 'Discuss Your Requirements',
    text: 'Talk through colours, finishes, timing and any repairs that the walls need first.',
  },
  {
    title: 'Finalize Your Estimate',
    text: 'Receive a clear estimate for the agreed scope before any work starts.',
  },
  {
    title: 'Enjoy Your Transformed Home',
    text: 'The work is done, the rooms are cleaned, and the space is ready to live in.',
  },
]

/**
 * Proof slots. Each value is empty until the owner supplies a verified fact.
 * The page shows a "To be confirmed" state for empty values.
 */
export const proofSlots: Array<{ label: string; value: string; hint: string }> = [
  { label: 'Years in business', value: '', hint: 'The real number of years the business has operated.' },
  { label: 'Homes painted', value: '', hint: 'A verified count of completed residential projects.' },
  { label: 'Workmanship guarantee', value: '', hint: 'Only if a written guarantee is offered.' },
  { label: 'Customer feedback', value: '', hint: 'Verified reviews, used with the customer’s permission.' },
]

/** Sample placeholders only. Replace with real reviews after the customers give permission. */
export const testimonials = {
  lead: {
    quote: 'A sample quotation goes here: one or two lines about how the finished room feels.',
    name: 'Customer name',
    detail: 'Room type and area',
  },
  others: [
    {
      quote: 'A second sample review goes here. Use the customer’s own words and keep the length to three or four lines.',
      name: 'Customer name',
      detail: 'Apartment repaint',
    },
    {
      quote: 'A third sample review goes here, ideally about the preparation, the communication or the clean-up.',
      name: 'Customer name',
      detail: 'Exterior painting',
    },
  ],
}

/** Photo credits. All photographs come from Unsplash under the Unsplash License. */
export const photoCredits = [
  ['bedroom-dark', 'photo-1617104678098-de229db51175'],
  ['bedroom-charcoal', 'photo-1616594039964-ae9021a400a0'],
  ['teal-after', 'photo-1615873968403-89e068629265'],
  ['feature-study', 'photo-1600494603989-9650cf6ddd3d'],
  ['living-warm', 'photo-1600210492486-724fe5c67fb0'],
  ['living-loft', 'photo-1618221195710-dd6b41faaea6'],
  ['bedroom-sage', 'photo-1615874959474-d609969a20ed'],
  ['bedroom-orange', 'photo-1540518614846-7eded433c457'],
  ['exterior-white', 'photo-1570129477492-45c003edd2be'],
  ['exterior-dusk', 'photo-1568605114967-8130f3a36994'],
  ['exterior-cottage', 'photo-1572120360610-d971b9d7767c'],
  ['exterior-modern', 'photo-1600047509807-ba8f99d2cdde'],
  ['feature-green', 'photo-1554995207-c18c203602cb'],
  ['apartment-bright', 'photo-1522708323590-d24dbb6b0267'],
  ['apartment-herringbone', 'photo-1493809842364-78817add7ffb'],
  ['apartment-loft', 'photo-1592928302636-c83cf1e1c887'],
  ['interior-neutral', 'photo-1616486338812-3dadae4b4ace'],
  ['roller-blue', 'photo-1562259949-e8e7689d7828'],
  ['paint-tray', 'photo-1599619585752-c3edb42a414c'],
  ['rollers-colour', 'photo-1525909002-1b05e0c869d8'],
  ['cta-wall', 'photo-1634712282287-14ed57b9cc89'],
] as const
