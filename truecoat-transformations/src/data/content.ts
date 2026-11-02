import { photos, type Photo } from './photos'

/** The main navigation. Each href is the id of a section on the page. */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export type QualityStep = { title: string; text: string; photo: Photo }

/** "Our quality approach". These are proposed working standards. The owner must confirm them. */
export const qualitySteps: QualityStep[] = [
  {
    title: 'Surface preparation',
    text: 'We cover floors and furniture. Then we clean the walls, fill cracks and holes, and sand rough areas.',
    photo: photos.qualityPrep,
  },
  {
    title: 'Appropriate materials',
    text: 'We choose a paint and a finish that suit the room: for example, an easy-clean finish for a kitchen or a hallway.',
    photo: photos.qualityMaterials,
  },
  {
    title: 'Careful painting',
    text: 'Straight edges at the ceiling and the trim, and the number of coats that the colour needs.',
    photo: photos.qualityPainting,
  },
  {
    title: 'Finishing and cleanup',
    text: 'We remove the covers and the tape, touch up small marks, and leave the room ready to use.',
    photo: photos.qualityFinish,
  },
]

export type Commitment = { title: string; text: string; icon: 'estimate' | 'message' | 'roller' | 'budget' }

/** Proposed service commitments. The owner must confirm them. */
export const commitments: Commitment[] = [
  {
    title: 'Straightforward estimates',
    text: 'You see what is included before the work starts.',
    icon: 'estimate',
  },
  {
    title: 'Dependable communication',
    text: 'We tell you when we arrive, what we do each day and when we finish.',
    icon: 'message',
  },
  {
    title: 'Careful work',
    text: 'Good preparation, neat edges and a clean room at the end.',
    icon: 'roller',
  },
  {
    title: 'Solutions for different budgets',
    text: 'We discuss options, so the work fits what you want to spend.',
    icon: 'budget',
  },
]

export type ProcessStep = { title: string; text: string }

export const processSteps: ProcessStep[] = [
  {
    title: 'Contact the team',
    text: 'Send a WhatsApp message or call. Tell us about your home and what you want to paint.',
  },
  {
    title: 'Discuss your requirements',
    text: 'We talk about the rooms, the colours, the finish and the condition of the walls.',
  },
  {
    title: 'Review the estimate',
    text: 'You get a clear estimate for the agreed work. Ask us about any part of it.',
  },
  {
    title: 'Schedule your painting work',
    text: 'We agree on a start date that suits you, and then we paint.',
  },
]
