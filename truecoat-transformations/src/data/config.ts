/**
 * Business configuration. This is the only file to edit for contact details.
 *
 * Leave a value empty ('') until the owner confirms it. While a value is empty,
 * the buttons that use it show a demo notice and do not open a broken link.
 *
 * Phone and WhatsApp numbers: use the full international format with the
 * country code, for example '+91 98765 43210'. Spaces and dashes are permitted.
 */
export const business = {
  name: 'TrueCoat Painting Co.',
  shortName: 'TrueCoat',
  description:
    'TrueCoat Painting Co. paints homes and apartments: interiors, exteriors, feature walls and texture finishes. Clear estimates, careful work and regular updates.',

  /** The number for phone calls (tel: link). */
  phone: '',
  /** The number that receives WhatsApp messages. */
  whatsapp: '',
  email: '',

  /** The towns, cities or areas that TrueCoat serves. Example: ['North Side', 'City Centre']. */
  serviceLocations: [] as string[],

  /** Full profile URLs. An empty value shows the network as "not set up". */
  social: {
    instagram: '',
    facebook: '',
    youtube: '',
  },
}

export type Business = typeof business
