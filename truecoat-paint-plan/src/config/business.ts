// The business details for the whole website.
// Change the values in this file only. All components read them from here.
//
// IMPORTANT: Do not put an example number here. If a value is empty, the
// website shows a demo notice and does not make a broken link.

export interface BusinessConfig {
  name: string
  shortName: string
  /** The phone number for calls, in international format. Example: '+44 20 7946 0000'. */
  phone: string
  /** The WhatsApp number in international format. Use digits only, without '+'. Example: '447946000000'. */
  whatsapp: string
  email: string
  /** The towns or areas that the business serves. Leave the list empty if the areas are not confirmed. */
  serviceLocations: string[]
  social: {
    facebook: string
    instagram: string
    youtube: string
  }
  /**
   * The budget choices in the project form. Use broad ranges in the local currency.
   * These labels are demo values. Replace them with real ranges, for example 'Under 25,000'.
   */
  budgetRanges: string[]
}

export const business: BusinessConfig = {
  name: 'TrueCoat Painting Co.',
  shortName: 'TrueCoat',
  phone: '',
  whatsapp: '',
  email: '',
  serviceLocations: [],
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
  },
  budgetRanges: [
    'Smaller budget',
    'Medium budget',
    'Larger budget',
    'I am not sure yet',
  ],
}
