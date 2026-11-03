import { business } from '../data/config'

/** Removes every character that is not a digit. WhatsApp links need digits only. */
export function digitsOnly(value: string): string {
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
  return business.email.trim() ? `mailto:${business.email.trim()}` : null
}

export const generalMessage = `Hello ${business.name}, I am looking for professional painting services for my home. I would like to discuss my requirements and get an estimate.`

export function serviceMessage(service: string): string {
  return `Hello ${business.name}, I am interested in ${service.toLowerCase()} for my home. I would like to discuss my requirements and get an estimate.`
}

export function optionMessage(option: string): string {
  return `Hello ${business.name}, I am interested in the “${option}” option. I would like to discuss my requirements and get an estimate.`
}

export interface EnquiryDetails {
  fullName: string
  phone: string
  propertyType: string
  requirement: string
  location: string
  details: string
}

/** Builds the structured WhatsApp message from the enquiry form. An empty optional field is left out. */
export function enquiryMessage(d: EnquiryDetails): string {
  const lines = [
    `Hello ${business.name}, I would like to request a painting estimate.`,
    '',
    `Name: ${d.fullName.trim()}`,
    `Phone: ${d.phone.trim()}`,
    `Property type: ${d.propertyType}`,
    `Painting requirement: ${d.requirement}`,
    `Location: ${d.location.trim()}`,
  ]
  if (d.details.trim()) lines.push(`Additional details: ${d.details.trim()}`)
  lines.push('', 'Thank you.')
  return lines.join('\n')
}
