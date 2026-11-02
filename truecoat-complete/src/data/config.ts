/**
 * Business configuration.
 *
 * This file is the one place for the contact details of the business.
 * Do not put invented details here. Keep a field empty until the owner confirms it.
 * When phone or whatsapp is empty, the site shows a demo notice and does not open a broken link.
 */
export interface SocialLink {
  label: string
  /** Full URL of the profile. Keep it empty until the owner gives the real link. */
  url: string
}

export interface BusinessConfig {
  name: string
  shortName: string
  description: string
  /** Phone number in international format, for example "+44 20 1234 5678". */
  phone: string
  /** WhatsApp number in international format. The link uses the digits only. */
  whatsapp: string
  email: string
  serviceLocations: string[]
  social: SocialLink[]
}

export const business: BusinessConfig = {
  name: 'TrueCoat Painting Co.',
  shortName: 'TrueCoat',
  description:
    'Residential and apartment painting for homes of every size. Clear communication, suitable options and careful attention to each project.',
  phone: '',
  whatsapp: '',
  email: '',
  serviceLocations: [],
  social: [
    { label: 'Instagram', url: '' },
    { label: 'Facebook', url: '' },
    { label: 'Google Business Profile', url: '' },
  ],
}
