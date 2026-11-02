/**
 * Business configuration for TrueCoat Painting Co.
 *
 * IMPORTANT: All contact values are empty in this demo.
 * While a value is empty, the site shows a demo notice and does not make a broken link.
 * Write the real values here before launch.
 */

export interface BusinessConfig {
  name: string
  shortName: string
  tagline: string
  /** The phone number for calls. Use the international format, for example "+44 20 7946 0000". */
  phone: string
  /** The WhatsApp number. Use the international format with the country code. */
  whatsapp: string
  email: string
  /** The areas that the business serves. An empty list shows a placeholder text. */
  serviceLocations: string[]
  social: {
    label: 'Facebook' | 'Instagram' | 'YouTube' | 'Google'
    /** An empty value shows the link as "coming soon". */
    url: string
  }[]
}

export const business: BusinessConfig = {
  name: 'TrueCoat Painting Co.',
  shortName: 'TrueCoat',
  tagline: 'Residential and apartment painting',
  phone: '',
  whatsapp: '',
  email: '',
  serviceLocations: [],
  social: [
    { label: 'Facebook', url: '' },
    { label: 'Instagram', url: '' },
    { label: 'Google', url: '' },
  ],
}

export const defaultWhatsAppMessage =
  'Hello TrueCoat Painting Co., I am looking for painting services for my home. I would like to discuss my requirements and get an estimate.'
