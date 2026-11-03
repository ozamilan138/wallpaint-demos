import { MessagesSquare, Paintbrush, ReceiptText, Settings2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/** Page text that is not in a separate data file. Edit the words here. */

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

/** The three short statements below the hero buttons. The owner must confirm each one. */
export const heroStatements = ['Residential Painting', 'Clear Estimates', 'Dependable Service']

export interface Benefit {
  title: string
  text: string
  icon: LucideIcon
}

export const benefits: Benefit[] = [
  {
    title: 'Clear Estimates',
    text: 'Understand the proposed work and costs before starting.',
    icon: ReceiptText,
  },
  {
    title: 'Careful Workmanship',
    text: 'Pay attention to preparation, application and finishing.',
    icon: Paintbrush,
  },
  {
    title: 'Reliable Communication',
    text: 'Know what is happening throughout the painting process.',
    icon: MessagesSquare,
  },
  {
    title: 'Solutions for Different Needs',
    text: 'Discuss suitable options based on rooms, requirements and budget.',
    icon: Settings2,
  },
]

export interface ProcessStep {
  title: string
  text: string
}

export const processSteps: ProcessStep[] = [
  { title: 'Contact Us', text: 'Tell us about your property and painting requirements.' },
  { title: 'Discuss Your Needs', text: 'Talk about colours, rooms, finishes and scope.' },
  { title: 'Get an Estimate', text: 'Receive a clear estimate based on the agreed requirements.' },
  { title: 'Get Started', text: 'Schedule the work and proceed with the painting.' },
]

export interface Faq {
  question: string
  answer: string
}

/** General answers. They do not state business policies. Change them to match the real business. */
export const faqs: Faq[] = [
  {
    question: 'Do you provide painting estimates?',
    answer:
      'Yes. Send us the details of your property and the work you need. We use these details, and a site visit if necessary, to prepare an estimate before any work starts.',
  },
  {
    question: 'Can I discuss colours before starting?',
    answer:
      'Yes. You can share your own colour ideas or ask for suggestions. We recommend that you test a sample on your wall first, because light changes how a colour looks.',
  },
  {
    question: 'Do you paint individual rooms?',
    answer:
      'You can ask about a single room, a single feature wall or the full home. Tell us which rooms you want to paint, and we will discuss the work with you.',
  },
  {
    question: 'Do you provide residential apartment painting?',
    answer:
      'Apartment painting is one of the services on this site. Tell us the number of rooms and any building rules, for example the permitted working hours.',
  },
  {
    question: 'How can I arrange a site visit?',
    answer:
      'Send a message on WhatsApp or call us. Give your location and the times that suit you, and we will agree a time for the visit.',
  },
]

export const propertyTypes = ['Apartment', 'Independent house', 'Villa or bungalow', 'Other']

export const requirementTypes = [
  'Interior painting',
  'Exterior painting',
  'Interior and exterior',
  'Repainting',
  'Texture painting',
  'Feature wall',
  'Not sure yet',
]
