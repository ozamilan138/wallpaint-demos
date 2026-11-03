import { business } from '../config/business'

export type ContactKind = 'whatsapp' | 'phone' | 'email'

const digits = (value: string) => value.replace(/[^\d]/g, '')

/** A number is usable when it has enough digits to be a real international number. */
export const isConfigured = (kind: ContactKind): boolean => {
  if (kind === 'email') return /.+@.+\..+/.test(business.email)
  const value = kind === 'whatsapp' ? business.whatsapp : business.phone
  return digits(value).length >= 8
}

export const whatsappHref = (message: string): string | null =>
  isConfigured('whatsapp')
    ? `https://wa.me/${digits(business.whatsapp)}?text=${encodeURIComponent(message)}`
    : null

export const phoneHref = (): string | null =>
  isConfigured('phone') ? `tel:+${digits(business.phone)}` : null

export const emailHref = (subject: string): string | null =>
  isConfigured('email')
    ? `mailto:${business.email}?subject=${encodeURIComponent(subject)}`
    : null
