/**
 * Business configuration. Edit this file to connect the real contact details.
 *
 * Do not put invented details here. While a value is empty, the website shows a
 * friendly demo notice and does not open a broken WhatsApp, phone or email link.
 *
 * phone and whatsapp: write the full international number, for example '+44 7700 900000'.
 * The website removes spaces and symbols.
 */
export const business = {
  name: 'TrueCoat Painting Co.',
  shortName: 'TrueCoat',
  description:
    'Residential and apartment painting for every space, from a single room to a complete home, with clear estimates and options for different budgets.',
  phone: '',
  whatsapp: '',
  email: '',
  /** Towns, cities or districts that the business serves. Empty until the owner confirms them. */
  serviceLocations: [] as string[],
  /** Add the profile address for each network. An empty url hides the link. */
  social: [
    { label: 'Instagram', url: '' },
    { label: 'Facebook', url: '' },
    { label: 'Google Business Profile', url: '' },
  ],
}

/** The default WhatsApp message, from the brief. */
export const defaultWhatsAppMessage =
  'Hello TrueCoat Painting Co., I explored your website and would like to discuss a painting project for my home. Could you please help me with an estimate?'
