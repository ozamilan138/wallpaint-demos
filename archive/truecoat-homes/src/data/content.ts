import { photos, type Photo } from './photos'

/** "One Home, Many Possibilities". These are project scopes, not fixed-price packages. */
export const projectTypes: { id: string; name: string; suits: string; examples: string[]; photo: Photo; tone: string }[] = [
  {
    id: 'single-room',
    name: 'Single-Room Painting',
    suits: 'For one room that needs a new colour or a fresh coat.',
    examples: ['A bedroom for a new arrival', 'A living room that looks tired', 'One feature wall'],
    photo: photos.typeSingleRoom,
    tone: 'bg-mist',
  },
  {
    id: 'apartment',
    name: 'Complete Apartment Painting',
    suits: 'For every room in an apartment, planned as one project.',
    examples: ['Before you move in', 'Before you rent out or sell', 'A full refresh after years of use'],
    photo: photos.typeApartment,
    tone: 'bg-sand-soft',
  },
  {
    id: 'residential',
    name: 'Full Residential Painting',
    suits: 'For a whole house, inside, outside or both.',
    examples: ['A complete colour change', 'Exterior walls and trim', 'A renovation that needs painting'],
    photo: photos.typeResidential,
    tone: 'bg-paper',
  },
]

/** "Beautiful Spaces Are Built Through Careful Work". Proposed standards, to confirm with the owner. */
export const qualitySteps: { title: string; text: string; photo: Photo; size: string }[] = [
  {
    title: 'Surface Preparation',
    text: 'We protect floors and furniture, then clean, fill and sand the walls. Good preparation helps the paint go on evenly and look right.',
    photo: photos.qPreparation,
    size: 'md:max-lg:w-full lg:w-[240px] aspect-[4/5]',
  },
  {
    title: 'Colour and Material Selection',
    text: 'We help you compare colours and choose a paint and finish that suit each room and how you use it.',
    photo: photos.qColour,
    size: 'md:max-lg:w-full lg:w-[300px] aspect-[3/2]',
  },
  {
    title: 'Application and Finishing',
    text: 'We apply each coat with care and check edges, corners and trim, so the lines stay clean.',
    photo: photos.qApplication,
    size: 'md:max-lg:w-full lg:w-[200px] aspect-square',
  },
  {
    title: 'Cleanup and Handover',
    text: 'We remove covers and tape, clean up, and walk through the finished space with you.',
    photo: photos.qHandover,
    size: 'md:max-lg:w-full lg:w-[280px] aspect-[4/3]',
  },
]

/** "How We Work". */
export const processSteps: { title: string; text: string }[] = [
  { title: 'Discuss Your Project', text: 'Send a WhatsApp message or call. Tell us about your home and what you want to change.' },
  { title: 'Understand Your Requirements', text: 'We talk about rooms, wall condition, colours and finishes, and visit if the project needs it.' },
  { title: 'Get a Clear Estimate', text: 'You receive an estimate that shows the agreed scope of work.' },
  { title: 'Plan the Painting Work', text: 'We agree on dates and on how to prepare the rooms, then the work starts.' },
]

/** "Professional Solutions for Different Budgets". Topics, not prices. */
export const budgetFactors: { title: string; text: string }[] = [
  { title: 'Number of Rooms', text: 'One room, a few rooms or the complete home.' },
  { title: 'Wall Condition', text: 'Cracks, damp marks or old paint can change the preparation that is necessary.' },
  { title: 'Preferred Colour Choices', text: 'A repaint in the same colour or a full change of colour.' },
  { title: 'Type of Paint and Finish', text: 'Different paints and finishes suit different rooms and budgets.' },
  { title: 'Painting Scope', text: 'Walls only, or also ceilings, doors, trim and exterior surfaces.' },
  { title: 'Budget Expectations', text: 'Tell us your range, and we discuss what is possible within it.' },
]

/** "Choose a Team That Understands Your Home". Proposed values, to confirm with the owner. */
export const trustValues: { title: string; text: string }[] = [
  { title: 'Quality-Conscious Work', text: 'Careful preparation and a clean finish on every project, small or large.' },
  { title: 'Clear Communication', text: 'You know what happens, when it happens and what the estimate includes.' },
  { title: 'Flexible Requirements', text: 'One wall or a whole house. We plan the work around your needs.' },
  { title: 'Attention to Detail', text: 'Edges, corners, trim and cleanup get the same care as the walls.' },
  { title: 'Professional Approach', text: 'We arrive when agreed, protect your home and respect your space.' },
]

/**
 * Verifiable business facts. Leave a value as null until the owner confirms it.
 * A null value shows "To be confirmed" on the page. Never add an invented number.
 */
export const trustFacts: { label: string; value: string | null }[] = [
  { label: 'Years in business', value: null },
  { label: 'Areas served', value: null },
  { label: 'Business registration or licence', value: null },
  { label: 'Insurance', value: null },
  { label: 'Workmanship guarantee', value: null },
]
