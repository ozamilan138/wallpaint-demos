/**
 * Business configuration.
 *
 * This is the one place for the contact details of the business.
 * Do not put invented numbers here. Leave a field empty until the owner confirms it.
 * When phone or whatsapp is empty, the site shows a demo notice and does not open a broken link.
 */
export interface BusinessConfig {
  name: string
  shortName: string
  description: string
  /** Phone number in international format, for example "+44 20 1234 5678". */
  phone: string
  /** WhatsApp number in international format. Spaces and "+" are removed for the link. */
  whatsapp: string
  email: string
  serviceLocations: string[]
  social: {
    instagram: string
    facebook: string
    pinterest: string
  }
}

export const business: BusinessConfig = {
  name: 'Maruti Paint House',
  shortName: 'Maruti',
  description:
    'Home and apartment painting with honest colour advice, careful preparation and clean, beautiful finishes.',
  // One number for calls and for WhatsApp.
  phone: '+91 87805 74095',
  whatsapp: '+91 87805 74095',
  email: '',
  serviceLocations: [],
  social: {
    instagram: '',
    facebook: '',
    pinterest: '',
  },
}

export const defaultWhatsAppMessage = `Hello ${business.name}, I would like to discuss painting services for my home. Could you please share more information?`
