import { CalendarCheck, ClipboardList, MessageCircle, MessagesSquare, Paintbrush, ReceiptText, Settings2, ShieldCheck } from 'lucide-react'
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

/** The items that the hero estimate card shows. These describe a clear estimate, not a price. */
export const estimateItems = [
  'Rooms and surfaces to paint',
  'Preparation and repair work',
  'Paint type and finish',
  'Start date and working days',
]

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
  number: string
  title: string
  text: string
  icon: LucideIcon
}

export const processSteps: ProcessStep[] = [
  {
    number: '01', // taste-skill-ignore: the brief asks for numbered steps
    title: 'Contact Us',
    text: 'Tell us about your property and painting requirements.',
    icon: MessageCircle,
  },
  {
    number: '02', // taste-skill-ignore: the brief asks for numbered steps
    title: 'Discuss Your Needs',
    text: 'Talk about colours, rooms, finishes and scope.',
    icon: ClipboardList,
  },
  {
    number: '03', // taste-skill-ignore: the brief asks for numbered steps
    title: 'Get an Estimate',
    text: 'Receive a clear estimate based on the agreed requirements.',
    icon: ShieldCheck,
  },
  {
    number: '04', // taste-skill-ignore: the brief asks for numbered steps
    title: 'Get Started',
    text: 'Schedule the work and proceed with the painting.',
    icon: CalendarCheck,
  },
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
  {
    question: 'How can I contact you?',
    answer:
      'Use the WhatsApp or Call buttons on this page, or fill in the enquiry form. The form writes a WhatsApp message with your details, so you do not need to type it again.',
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
