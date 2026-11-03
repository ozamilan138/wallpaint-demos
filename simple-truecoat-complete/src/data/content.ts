/**
 * Page content that is not services, options or projects.
 * The owner must confirm every statement before launch.
 */
export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#options', label: 'Options' },
  { href: '#work', label: 'Our Work' },
  { href: '#how', label: 'How We Work' },
  { href: '#contact', label: 'Contact' },
]

export const heroPoints = ['Residential Painting', 'Flexible Project Options', 'Professional Workmanship']

/** The four steps from the first message to the finished room. */
export const steps = [
  {
    title: 'Tell Us About Your Home',
    text: 'Send a message or call with the rooms, the location and what you have in mind.',
  },
  {
    title: 'Discuss Your Options',
    text: 'We look at the walls and talk about colours, finishes and your budget.',
  },
  {
    title: 'Get a Clear Estimate',
    text: 'You get an estimate for the agreed work before anything starts.',
  },
  {
    title: 'Painting and Finishing',
    text: 'We protect your furniture, paint with care, check the details and leave the room clean.',
  },
]

/** Reasons to choose the business. "pending" marks an item that the owner must confirm. */
export const reasons = [
  { title: 'A professional, organised approach', pending: false },
  { title: 'Options for one room or a full home', pending: false },
  { title: 'Clear communication from start to finish', pending: false },
  { title: 'Attention to edges, coats and details', pending: false },
  { title: 'Residential project experience', pending: true },
]

/**
 * Placeholder testimonials. They are NOT real reviews.
 * Replace them with genuine customer feedback, and get permission to show each name.
 * Remove all items to hide the section.
 */
export const testimonials = [
  {
    quote: 'Placeholder. A real customer review goes here, for example about a single-room refresh.',
    name: 'Customer name',
    detail: 'Project type and area',
  },
  {
    quote: 'Placeholder. A second real review goes here, for example about a full apartment.',
    name: 'Customer name',
    detail: 'Project type and area',
  },
]

export const faqs = [
  {
    q: 'What types of painting services do you offer?',
    a: 'We focus on homes and apartments: interior walls, exteriors, repainting, texture finishes and feature walls. If your project is not listed, send us a message and we will tell you if we can help.',
  },
  {
    q: 'Can I get an estimate for one room?',
    a: 'Yes. A single room is a normal project for us. Tell us the room, its approximate size and the condition of the walls.',
  },
  {
    q: 'Do you work on complete apartments and houses?',
    a: 'Yes. We can plan a complete apartment or house as one project. We first agree the rooms, the order of work and the timing with you.',
  },
  {
    q: 'Can I discuss colours before starting?',
    a: 'Yes. We can talk about colours and finishes before any work starts. Screen colours are only a guide, so we recommend real paint samples in the room.',
  },
  {
    q: 'How can I arrange a consultation?',
    a: 'Send us a message on WhatsApp, call us, or fill in the form on this page. We will reply to agree a suitable time.',
  },
]
