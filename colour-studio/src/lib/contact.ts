import { business } from '../config/business'

/** Digits only, so that the wa.me link is valid. */
const whatsappDigits = business.whatsapp.replace(/\D/g, '')
/** Keep a leading "+" and the digits, so that the tel: link is valid. */
const phoneDial = business.phone.trim().replace(/(?!^\+)[^\d]/g, '')

export const hasWhatsApp = whatsappDigits.length >= 8
export const hasPhone = phoneDial.replace('+', '').length >= 6

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`
}

export const phoneUrl = `tel:${phoneDial}`
