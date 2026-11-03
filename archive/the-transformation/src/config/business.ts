/**
 * Business configuration. Edit this file to set the real contact details.
 *
 * Do not put invented details here. When a value is empty, the site shows a
 * demo notice instead of a broken WhatsApp or phone link.
 *
 * phone:    the full international number, for example "+44 20 7946 0000".
 * whatsapp: the full international number, digits only or with spaces, for example "+44 7700 900000".
 */
export const business = {
  name: 'Aureline Painting Co.',
  shortName: 'Aureline',
  tagline: 'Premium residential painting',
  description:
    'Aureline Painting Co. paints homes and apartments: interiors, exteriors, texture finishes and feature walls.',

  phone: '',
  whatsapp: '',
  email: '',

  /** The towns or districts that the business serves. Leave empty until the owner confirms them. */
  serviceAreas: [] as string[],

  /** Full profile URLs. An empty value shows as a placeholder, not as a link. */
  social: {
    instagram: '',
    facebook: '',
    pinterest: '',
  },
} as const

export const messages = {
  general: `Hello ${business.name}, I visited your website and would like to enquire about residential painting services.`,
  estimate: `Hello ${business.name}, I would like a free estimate for painting my home. Could you please share the next steps?`,
  transformation: `Hello ${business.name}, I saw the before-and-after comparison on your website. I would like to discuss a similar change for my home.`,
  project: (category: string, title: string) =>
    `Hello ${business.name}, I saw the "${title}" example (${category}) on your website and would like to discuss a similar project for my home.`,
  service: (service: string) =>
    `Hello ${business.name}, I would like to enquire about ${service.toLowerCase()} for my home.`,
}
