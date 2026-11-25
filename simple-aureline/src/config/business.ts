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
  /**
   * The areas that the business works in, for the search engine data. The page text in each language is serviceAreas in src/i18n.
   * "link" is an optional Wikipedia page. It tells search engines which place has this name.
   */
  serviceLocations: { name: string; link?: string }[]
  /**
   * The town of the business, for the search engine data.
   * The business visits customers and has no shop, so the street address is not shown.
   */
  address: {
    locality: string
    region: string
    /** Two-letter country code, for example "IN". */
    country: string
  }
  social: {
    instagram: string
    facebook: string
    pinterest: string
  }
}

export const business: BusinessConfig = {
  name: 'Maruti Paint House',
  shortName: 'Maruti',
  // The description and the name in other languages are in src/i18n.
  description:
    'Home and apartment painting with honest colour advice, careful preparation and clean, beautiful finishes.',
  // One number for calls and for WhatsApp.
  phone: '+91 87805 74095',
  whatsapp: '+91 87805 74095',
  email: '',
  serviceLocations: [{ name: 'Ahmedabad', link: 'https://en.wikipedia.org/wiki/Ahmedabad' }],
  address: {
    locality: 'Ahmedabad',
    region: 'Gujarat',
    country: 'IN',
  },
  social: {
    instagram: '',
    facebook: '',
    pinterest: '',
  },
}

