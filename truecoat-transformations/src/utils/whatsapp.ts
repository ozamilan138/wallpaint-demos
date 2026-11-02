import { business } from '../data/config'

export type ContactKind = 'whatsapp' | 'phone' | 'email'

const digits = (value: string) => value.replace(/\D/g, '')

/** A number is usable when it has enough digits to be an international number. */
export function isConfigured(kind: ContactKind): boolean {
  if (kind === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(business.email)
  const value = kind === 'whatsapp' ? business.whatsapp : business.phone
  return digits(value).length >= 8
}

/** The wa.me link with the encoded message, or null when WhatsApp is not configured. */
export function whatsappHref(message: string): string | null {
  return isConfigured('whatsapp') ? `https://wa.me/${digits(business.whatsapp)}?text=${encodeURIComponent(message)}` : null
}

/** The tel: link, or null when the phone number is not configured. */
export function phoneHref(): string | null {
  return isConfigured('phone') ? `tel:+${digits(business.phone)}` : null
}

export function emailHref(subject: string): string | null {
  return isConfigured('email') ? `mailto:${business.email}?subject=${encodeURIComponent(subject)}` : null
}

const hello = `Hello ${business.name},`

/** The prefilled messages. Each call to action uses the message that fits it. */
export const messages = {
  general: `${hello} I visited your website and would like to discuss residential painting services.`,
  estimate: `${hello} I visited your website and would like to get a free estimate for painting my home.`,
  transformation: `${hello} I saw the before-and-after example on your website. I would like to discuss a fresh new look for a room in my home.`,
  service: (service: string) => `${hello} I visited your website and would like to ask about ${service.toLowerCase()}.`,
  project: (category: string, title: string) =>
    `${hello} I saw the “${title}” example in ${category} on your website. I would like to discuss a similar ${category
      .toLowerCase()
      .replace(/s$/, '')} project for my home.`,
}

export type EnquiryDetails = {
  name: string
  mobile: string
  propertyType: string
  paintingType: string
  location: string
  message: string
}

/** A structured WhatsApp message from the enquiry form. Empty optional fields are left out. */
export function enquiryMessage(d: EnquiryDetails): string {
  const lines = [
    `${hello} I would like to discuss a painting project and get an estimate.`,
    '',
    `Name: ${d.name.trim()}`,
    `Mobile number: ${d.mobile.trim()}`,
    `Property type: ${d.propertyType}`,
    `Type of painting: ${d.paintingType}`,
  ]
  if (d.location.trim()) lines.push(`Location: ${d.location.trim()}`)
  if (d.message.trim()) lines.push('', `Message: ${d.message.trim()}`)
  return lines.join('\n')
}
