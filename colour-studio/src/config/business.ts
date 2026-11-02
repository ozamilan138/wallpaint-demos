/**
 * Business configuration.
 *
 * Edit this file to set the real contact details. All buttons and links on
 * the website read their values from here.
 *
 * Do not put invented details here. If a value is empty, the website shows a
 * demo notice and does not open a broken WhatsApp or phone link.
 */
export interface BusinessConfig {
  name: string
  /** A short line about the company. The footer shows it. */
  tagline: string
  /** The phone number as people read it, for example "+44 20 7946 0000". */
  phone: string
  /**
   * The WhatsApp number in international format: country code and number,
   * digits only, with no "+", spaces or dashes. Example format: "447700900000".
   */
  whatsapp: string
  email: string
  /** The towns or districts that the business serves. */
  serviceAreas: string[]
  social: {
    instagram: string
    facebook: string
    pinterest: string
  }
}

export const business: BusinessConfig = {
  name: 'Aureline Painting Co.',
  tagline:
    'Residential and apartment painting, with personal help to choose colours that suit your home.',
  phone: '',
  whatsapp: '',
  email: '',
  serviceAreas: [],
  social: {
    instagram: '',
    facebook: '',
    pinterest: '',
  },
}
