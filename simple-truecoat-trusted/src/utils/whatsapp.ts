import { business } from '../data/config'

/** Removes every character that is not a digit. WhatsApp links accept digits only. */
function digitsOnly(value: string): string {
  return value.replace(/\D/g, '')
}

export function isWhatsAppConfigured(): boolean {
  return digitsOnly(business.whatsapp).length >= 8
}

export function isPhoneConfigured(): boolean {
  return digitsOnly(business.phone).length >= 6
}

/** Returns the wa.me link, or null if the WhatsApp number is not configured. */
export function whatsAppUrl(message: string): string | null {
  if (!isWhatsAppConfigured()) return null
  return `https://wa.me/${digitsOnly(business.whatsapp)}?text=${encodeURIComponent(message)}`
}

/** Returns the tel: link, or null if the phone number is not configured. */
export function phoneUrl(): string | null {
  if (!isPhoneConfigured()) return null
  const plus = business.phone.trim().startsWith('+') ? '+' : ''
  return `tel:${plus}${digitsOnly(business.phone)}`
}

export function emailUrl(): string | null {
  return business.email ? `mailto:${business.email}` : null
}

export function serviceMessage(service: string): string {
  return `Hello ${business.name}, I am interested in ${service.toLowerCase()} for my home. Could you please share more information and help me with an estimate?`
}

export interface EnquiryDetails {
  name: string
  phone: string
  propertyType: string
  requirement: string
  location: string
  message: string
}

/** Builds one structured WhatsApp message from the enquiry form. An empty field shows "Not given". */
export function enquiryMessage(details: EnquiryDetails): string {
  const lines = [
    `Hello ${business.name}, I would like an estimate for painting work.`,
    '',
    `Name: ${details.name.trim() || 'Not given'}`,
    `Phone: ${details.phone.trim() || 'Not given'}`,
    `Property type: ${details.propertyType || 'Not given'}`,
    `Painting requirement: ${details.requirement || 'Not given'}`,
    `Location: ${details.location.trim() || 'Not given'}`,
  ]
  const note = details.message.trim()
  if (note) lines.push('', `Message: ${note}`)
  return lines.join('\n')
}
