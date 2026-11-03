/**
 * Business configuration.
 *
 * The owner must fill in these values before launch. Do not use invented
 * details. While a value is empty, the website shows a demo notice and does
 * not make a broken link.
 *
 * - phone: the number for calls, with the country code. Example format: "+91 98765 43210".
 * - whatsapp: the WhatsApp number, with the country code. Digits, spaces and "+" are permitted.
 * - email: the address for enquiries.
 */
export interface SocialLink {
  label: string
  url: string
}

export interface BusinessConfig {
  name: string
  shortName: string
  phone: string
  whatsapp: string
  email: string
  /** The towns, cities or areas that the business serves. */
  serviceLocations: string[]
  /** Leave url empty until the account exists. */
  social: SocialLink[]
}

export const config: BusinessConfig = {
  name: 'TrueCoat Painting Co.',
  shortName: 'TrueCoat',
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
