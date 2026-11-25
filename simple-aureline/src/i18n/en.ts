/**
 * English text for the site. hi.ts and gu.ts have the same keys, in the same order.
 * The lists (services, projects, palettes, principles, steps) must have the same length in each language,
 * because src/data/content.ts matches them to the images and the colours by position.
 */
export const en = {
  langName: 'English',
  meta: {
    // Search words first, the brand name last. Keep the title below 60 characters and the description below 160.
    title: 'House Painter in Ahmedabad | Maruti Paint House',
    description: (phone: string) =>
      `House painter in Ahmedabad for interior, exterior, texture and apartment painting. Careful preparation, clean finishes. Free estimate: ${phone}`,
  },
  businessName: 'Maruti Paint House',
  description: 'Home and apartment painting with honest colour advice, careful preparation and clean, beautiful finishes.',
  /** The areas that the business works in. Keep them in step with serviceLocations in src/config/business.ts. */
  serviceAreas: ['Ahmedabad'],
  skip: 'Skip to content',
  language: 'Language',
  nav: {
    services: 'Services',
    work: 'Our Work',
    colours: 'Colours',
    about: 'About',
    contact: 'Contact',
    backToTop: (name: string) => `${name}, back to top`,
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  cta: {
    estimate: 'Get a Free Estimate',
    requestEstimate: 'Request a Free Estimate',
    callNow: 'Call Now',
    callOrWhatsApp: 'Call or WhatsApp',
    talkWhatsApp: 'Talk on WhatsApp',
    whatsApp: 'WhatsApp',
    whatsAppAria: 'Contact us on WhatsApp',
    callAria: 'Call us now',
    floatAria: 'Chat with us on WhatsApp',
    callNumber: (phone: string) => `Call ${phone}`,
  },
  sampleImage: 'Sample image',
  hero: {
    eyebrow: 'House Painting in Ahmedabad',
    title: 'Give Your Walls a New Perspective.',
    lead: 'Thoughtfully chosen colours. Beautiful finishes. Painting that brings your home to life.',
    explore: 'Explore Our Work',
    imageAlt: 'A sunlit living room with warm off-white walls, round rattan mirrors and a cream sofa',
  },
  services: {
    title: 'Our Services',
    intro: 'Painting for homes and apartments across Ahmedabad, inside and out.',
    ask: 'Ask about this',
    askAria: (service: string) => `Ask about ${service} on WhatsApp`,
    items: [
      { title: 'Interior Wall Painting', description: 'Walls and ceilings, prepared and painted in a finish that suits the room.' },
      { title: 'Exterior Painting', description: 'Walls, trims, railings and doors, with paint chosen for the surface and the weather.' },
      { title: 'Texture Painting', description: 'Soft plaster-effect and limewash-style finishes that give a wall depth.' },
      { title: 'Repainting and Renovation', description: 'A careful refresh for lived-in rooms, from putty and sanding to the last coat.' },
      { title: 'Feature Wall Painting', description: 'One wall in a deeper shade, to give a room a point of focus.' },
      { title: 'Apartment Painting', description: 'Tidy work, planned around society rules and your daily routine.' },
    ],
  },
  work: {
    title: 'Our Work',
    intro: 'Calm bedrooms, warm living rooms, feature walls and fresh exteriors.',
    noteLabel: 'Demo content:',
    note: 'these are royalty-free sample photographs, not completed projects by this business. Real client photographs will replace them soon.',
    items: [
      {
        title: 'Sage walls, warm oak',
        room: 'Living room',
        alt: 'A living room with muted sage walls, a round mirror, an oak sideboard and many plants',
      },
      { title: 'A quiet green wall', room: 'Bedroom', alt: 'A bedroom with a soft green wall, botanical prints and white bedding' },
      { title: 'A classic white facade', room: 'Exterior', alt: 'A large white house with a wraparound porch and a green lawn' },
      {
        title: 'Deep teal feature wall',
        room: 'Living room',
        alt: 'A living room with a deep teal wall, framed photographs and a tan leather sofa',
      },
    ],
  },
  colours: {
    title: 'Colour Ideas',
    intro: 'Four palettes to start the conversation. Send the one you like and we can talk it through.',
    discuss: 'Discuss Your Colour Ideas',
    discussAria: (palette: string) => `Discuss the ${palette} palette on WhatsApp`,
    coloursIn: (palette: string) => `Colours in ${palette}`,
    note: 'Screen colours are only a guide. Always check physical paint samples in your own light before you choose a final shade.',
    palettes: [
      { name: 'Warm Neutrals', mood: 'Soft and warm, easy to live with.', swatches: ['Oat', 'Warm Taupe', 'Linen White', 'Walnut'] },
      { name: 'Modern Earthy', mood: 'Clay and olive tones with depth.', swatches: ['Sandstone', 'Fired Clay', 'Bone', 'Olive Grove'] },
      { name: 'Soft & Natural', mood: 'Gentle greens and chalky whites.', swatches: ['Sage Mist', 'Eucalyptus', 'Chalk', 'Driftwood'] },
      {
        name: 'Contemporary Contrast',
        mood: 'Gallery white with deep ink blue.',
        swatches: ['Pebble Grey', 'Ink Blue', 'Gallery White', 'Charcoal'],
      },
    ],
  },
  about: {
    title: 'More Than Just a Fresh Coat of Paint.',
    intro: 'A well-painted home changes how a space feels. From the right colour to a careful finish, every detail counts.',
    howTitle: 'How It Works',
    step: (n: number) => `Step ${n}: `,
    whyTitle: 'Why Choose Us',
    reviewsTitle: 'What Clients Say',
    principles: [
      'Attention to preparation and detail',
      'Thoughtful colour guidance',
      'Clean and careful finishing',
      'Clear communication',
      'Professional project coordination',
    ],
    steps: [
      { title: 'Share Your Requirements', description: 'Tell us the rooms and the timing. Photos help.' },
      { title: 'Discuss Colours and Finishes', description: 'Talk through shades and test samples in your light.' },
      { title: 'Receive Your Estimate', description: 'A clear estimate of the work and what it includes.' },
      { title: 'Transform Your Space', description: 'Careful preparation, an even finish, a tidy home.' },
    ],
  },
  contact: {
    title: 'Your Home Deserves a Beautiful Finish.',
    intro: 'Tell us about your rooms on WhatsApp, or give us a call. We reply with a free estimate.',
    call: 'Call',
    email: 'Email',
    areas: 'Service areas',
  },
  footer: {
    pages: 'Pages',
    contact: 'Contact',
    follow: 'Follow',
    photos: 'Sample photographs from Unsplash.',
  },
  messages: {
    general: (name: string) =>
      `Hello ${name}, I would like to discuss painting services for my home. Could you please share more information?`,
    estimate: (name: string) =>
      `Hello ${name}, I would like to request a free painting estimate for my home. Could you please let me know what details you need?`,
    service: (name: string, service: string) =>
      `Hello ${name}, I am interested in ${service.toLowerCase()} for my home. Could you please share more information?`,
    palette: (name: string, palette: string, swatches: string[]) =>
      `Hello ${name}, I like the “${palette}” colour palette (${swatches.join(', ')}). I would like to discuss colour ideas for my home.`,
  },
}

export type Strings = typeof en
