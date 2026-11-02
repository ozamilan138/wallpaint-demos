import { business, defaultWhatsAppMessage } from '../data/config'

export type ContactKind = 'whatsapp' | 'phone' | 'email'

const digits = (value: string) => value.replace(/\D/g, '')

/** A number is usable when it has enough digits to be a real international number. */
export const isConfigured = (kind: ContactKind): boolean => {
  if (kind === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(business.email)
  const value = kind === 'whatsapp' ? business.whatsapp : business.phone
  return digits(value).length >= 8
}

/** The wa.me link with an encoded message, or null when WhatsApp is not configured. */
export const whatsappHref = (message: string): string | null =>
  isConfigured('whatsapp') ? `https://wa.me/${digits(business.whatsapp)}?text=${encodeURIComponent(message)}` : null

export const phoneHref = (): string | null => (isConfigured('phone') ? `tel:+${digits(business.phone)}` : null)

export const emailHref = (subject: string): string | null =>
  isConfigured('email') ? `mailto:${business.email}?subject=${encodeURIComponent(subject)}` : null

/** The text to show for a contact value, or a clear note when it is empty. */
export const displayValue = (kind: ContactKind): string | null => {
  if (!isConfigured(kind)) return null
  return kind === 'email' ? business.email : kind === 'phone' ? business.phone : business.whatsapp
}

/** Messages for the different buttons. Each one names what the visitor looked at. */
export const messages = {
  general: defaultWhatsAppMessage,
  service: (service: string) =>
    `Hello ${business.name}, I explored your website and I am interested in ${service.toLowerCase()} for my home. Could you please help me with an estimate?`,
  project: (title: string, category: string) =>
    `Hello ${business.name}, I saw the “${title}” example (${category}) on your website. I would like something similar for my home. Could you please help me with an estimate?`,
  projectType: (type: string) =>
    `Hello ${business.name}, I am planning ${type.toLowerCase()} for my home. I would like to discuss the scope and get an estimate.`,
  budget: `Hello ${business.name}, I would like to discuss a painting project and the options that suit my budget. Could you please help me with an estimate?`,
}

export type Enquiry = {
  name: string
  phone: string
  propertyType: string
  projectType: string
  rooms: string
  location: string
  description: string
}

/** A structured WhatsApp message from the enquiry form. Empty optional fields are left out. */
export const enquiryMessage = (e: Enquiry): string => {
  const lines = [
    `Hello ${business.name}, I would like an estimate for a painting project.`,
    '',
    `Name: ${e.name.trim()}`,
    `Phone: ${e.phone.trim()}`,
    `Property type: ${e.propertyType}`,
    `Project type: ${e.projectType}`,
  ]
  if (e.rooms) lines.push(`Approximate number of rooms: ${e.rooms}`)
  lines.push(`Location: ${e.location.trim()}`)
  if (e.description.trim()) lines.push('', `Details: ${e.description.trim()}`)
  lines.push('', 'Thank you.')
  return lines.join('\n')
}
