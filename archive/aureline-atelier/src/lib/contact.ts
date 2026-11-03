import { business } from '../config/business'

/** Removes every character that is not a digit. WhatsApp links need digits only. */
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
  return `Hello ${business.name}, I am interested in ${service.toLowerCase()} for my home. Could you please share more information?`
}

export function paletteMessage(paletteName: string, swatches: string[]): string {
  return `Hello ${business.name}, I like the “${paletteName}” colour palette (${swatches.join(', ')}). I would like to discuss colour ideas for my home.`
}

export const estimateMessage = `Hello ${business.name}, I would like to request a free painting estimate for my home. Could you please let me know what details you need?`
