// Every photo has an 800 and a 1600 px WebP file in public/images.
// Photos with big: true also have a 2400 px file.
// All photos are demo images from Unsplash (Unsplash licence). See CREDITS.md.

export type Photo = {
  src: string
  alt: string
  width: number
  height: number
  big?: boolean
}

export const photos = {
  heroSageLiving: { src: 'hero-sage-living', alt: 'A living room with a sage green wall, a round mirror, a wooden sideboard and plants', width: 2400, height: 2400, big: true },
  sliderAfter: { src: 'slider-after', alt: 'A living room with deep blue walls, a tan leather sofa and a gold shelf unit', width: 2400, height: 2400, big: true },
  gLivingGreyGreen: { src: 'g-living-grey-green', alt: 'A bright living room with soft grey-green walls, a grey sofa and woven pendant lamps', width: 2400, height: 2400 },
  gLivingOpen: { src: 'g-living-open', alt: 'A long open living room with warm white walls and low wooden furniture', width: 2400, height: 1266 },
  gBedroomSage: { src: 'g-bedroom-sage', alt: 'A bedroom with pale sage walls, framed prints and many plants', width: 2400, height: 2400 },
  gBedroomBeige: { src: 'g-bedroom-beige', alt: 'A bedroom with a warm beige wall and rust-coloured bedding', width: 2400, height: 2197 },
  gBedroomCharcoal: { src: 'g-bedroom-charcoal', alt: 'A bedroom with a charcoal feature wall behind a pale bed', width: 2400, height: 1523 },
  gKitchenGrey: { src: 'g-kitchen-grey', alt: 'A kitchen with dark grey lower cabinets, white tiles and open wooden shelves', width: 2400, height: 3200 },
  gKitchenSage: { src: 'g-kitchen-sage', alt: 'Close view of a kitchen with soft grey cabinets and a brass tap', width: 2400, height: 3600 },
  gApartmentBright: { src: 'g-apartment-bright', alt: 'A small apartment living and dining area with white walls and red chairs', width: 2400, height: 1600 },
  gApartmentPlants: { src: 'g-apartment-plants', alt: 'An apartment living room with white walls, a grey sofa and plants', width: 2400, height: 1786 },
  gExteriorPorch: { src: 'g-exterior-porch', alt: 'A large white house with grey roofs and a wide front porch', width: 2400, height: 1600 },
  gExteriorCottage: { src: 'g-exterior-cottage', alt: 'A white cottage with a red roof, a garden and stone steps', width: 2400, height: 1424 },
  gExteriorEntrance: { src: 'g-exterior-entrance', alt: 'The entrance of a single-storey home with warm wood and grey panels', width: 2400, height: 1600 },
  gFeatureTeal: { src: 'g-feature-teal', alt: 'A living room with a deep teal feature wall and framed black and white prints', width: 2400, height: 1350 },
  gFeatureGreenStudy: { src: 'g-feature-green-study', alt: 'A home study with a dark green feature wall and a wooden desk', width: 2400, height: 1800 },
  gFeatureBlueGrey: { src: 'g-feature-blue-grey', alt: 'A hallway with a blue-grey wall, a round mirror and a cane sideboard', width: 2400, height: 4267 },
  typeSingleRoom: { src: 'type-single-room', alt: 'A single room corner with a white wall, a yellow armchair and framed art', width: 2400, height: 2118 },
  typeApartment: { src: 'type-apartment', alt: 'An apartment living room with white walls, a blue sofa and a wooden floor', width: 2400, height: 1602 },
  typeResidential: { src: 'type-residential', alt: 'A white two-storey house with a front porch among autumn trees', width: 2400, height: 1601 },
  typesWallBrick: { src: 'types-wall-brick', alt: 'A white painted brick wall with framed prints and dried grasses', width: 2400, height: 3595, big: true },
  svcInterior: { src: 'svc-interior', alt: 'A calm living room with warm white walls, round mirrors and a cream sofa', width: 2400, height: 1758 },
  svcExterior: { src: 'svc-exterior', alt: 'A wooden family house on a lawn in the evening light', width: 2400, height: 1600 },
  svcApartment: { src: 'svc-apartment', alt: 'An apartment living area with large windows and pale walls', width: 2400, height: 1600 },
  svcRepainting: { src: 'svc-repainting', alt: 'A plain room with fresh white walls, a black sofa and a white chest of drawers', width: 2400, height: 1602 },
  svcTexture: { src: 'svc-texture', alt: 'A hand that spreads a textured coat on a wall with a small trowel', width: 2400, height: 3600 },
  svcDecorative: { src: 'svc-decorative', alt: 'A peach coloured wall with floating wooden shelves and framed art', width: 2400, height: 1600 },
  qPreparation: { src: 'q-preparation', alt: 'A paint tray with a roller and white paint on a work surface', width: 2400, height: 1600 },
  qColour: { src: 'q-colour', alt: 'Paint rollers that roll stripes of green, red, orange and blue paint', width: 2400, height: 3200 },
  qApplication: { src: 'q-application', alt: 'A paint roller that applies blue paint on a white wall', width: 2400, height: 1676 },
  qHandover: { src: 'q-handover', alt: 'An empty, clean room with fresh white walls and a light wooden floor', width: 2400, height: 1600 },
  tRoom: { src: 't-room', alt: 'A bright room with a white wall, an orange armchair and a gold mirror', width: 2400, height: 4267 },
  trustDining: { src: 'trust-dining', alt: 'A dining room with white walls and green velvet chairs', width: 2400, height: 1350 },
  trustLiving: { src: 'trust-living', alt: 'A grey living room with white window shutters and a fireplace', width: 2400, height: 1350 },
  faqTall: { src: 'faq-tall', alt: 'A living room with light grey walls, a cream sectional sofa and wall decorations', width: 2400, height: 1350 },
  faqSquare: { src: 'faq-square', alt: 'A white sideboard below a wall of framed line drawings', width: 2400, height: 2400 },
  contactBright: { src: 'contact-bright', alt: 'A sunny living room with bay windows, a cream sofa and plants', width: 2400, height: 2400, big: true },
  ctaBlueChair: { src: 'cta-blue-chair', alt: 'A pale blue armchair and a yellow floor lamp in front of a soft blue-grey wall', width: 2400, height: 1537, big: true },
  sliderBefore: { src: 'slider-before', alt: 'The same living room before painting, with tired, patchy greige walls', width: 2400, height: 2400, big: true },
} satisfies Record<string, Photo>
