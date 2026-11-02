// WhatsApp and phone helpers.
// The functions return null when the config has no number. The buttons then
// show the demo notice and do not make a broken link.

import { business } from '../config/business'
import type { Palette, PlannerStyle, Room } from '../data/types'

const digits = (value: string) => value.replace(/\D/g, '')

export function whatsappConfigured(): boolean {
  return digits(business.whatsapp).length >= 7
}

export function phoneConfigured(): boolean {
  return digits(business.phone).length >= 7
}

/** Returns a wa.me link with the encoded message, or null if no WhatsApp number is set. */
export function whatsappUrl(message: string): string | null {
  if (!whatsappConfigured()) return null
  return `https://wa.me/${digits(business.whatsapp)}?text=${encodeURIComponent(message)}`
}

/** Returns a tel: link, or null if no phone number is set. */
export function telUrl(): string | null {
  if (!phoneConfigured()) return null
  const plus = business.phone.trim().startsWith('+') ? '+' : ''
  return `tel:${plus}${digits(business.phone)}`
}

export const defaultMessage = `Hello ${business.name}, I am planning to paint my home. I would like to discuss painting services and get an estimate.`

export function serviceMessage(service: string): string {
  return `Hello ${business.name}, I am interested in ${service}. I would like to discuss my requirements and get an estimate.`
}

export function finishMessage(finish: string): string {
  return `Hello ${business.name}, I would like to ask about a ${finish} finish for my walls. Could you tell me if it suits my rooms?`
}

export function projectMessage(title: string, room: string): string {
  return `Hello ${business.name}, I saw the "${title}" example (${room}) on your website. I would like something similar for my home.`
}

export interface PlanSelection {
  room: Room | null
  style: PlannerStyle | null
  palette: Palette | null
}

/** The lines of the plan that the visitor selected. Steps without a selection are left out. */
export function planLines({ room, style, palette }: PlanSelection): string[] {
  const lines: string[] = []
  if (room) lines.push(`Room: ${room.name}.`)
  if (style) lines.push(`Preferred style: ${style.name}.`)
  if (palette) {
    const names = palette.colours.map((c) => c.name).join(', ')
    lines.push(`Selected colour palette: ${palette.name} (${names}).`)
  }
  return lines
}

/** Makes the WhatsApp message from the colour planner. It works with any number of selections. */
export function plannerMessage(selection: PlanSelection): string {
  const lines = planLines(selection)
  const intro = `Hello ${business.name}, I am planning to paint my home.`
  if (lines.length === 0) {
    return `${intro}\n\nI have not chosen my colours yet and would like some colour guidance.\n\nI would like to discuss painting services and get an estimate.`
  }
  const missing: string[] = []
  if (!selection.room) missing.push('the room')
  if (!selection.style) missing.push('the style')
  if (!selection.palette) missing.push('the colours')
  const help = missing.length ? `\nI still need help to choose ${joinWords(missing)}.` : ''
  return `${intro}\n\n${lines.join('\n')}${help}\n\nI would like to discuss painting services and get an estimate.`
}

export interface EnquiryDetails {
  name: string
  phone: string
  propertyType: string
  requirement: string
  rooms: string
  budget: string
}

/** Makes the WhatsApp message from the project form. It adds the planner choices if there are any. */
export function enquiryMessage(details: EnquiryDetails, selection: PlanSelection): string {
  const lines = [
    `Name: ${details.name.trim()}`,
    `Phone: ${details.phone.trim()}`,
    `Property type: ${details.propertyType}`,
    `Painting requirement: ${details.requirement}`,
  ]
  if (details.rooms) lines.push(`Number of rooms: ${details.rooms}`)
  if (details.budget) lines.push(`Approximate budget: ${details.budget}`)
  const plan = planLines(selection).map((l) => l.replace(/\.$/, ''))
  const planBlock = plan.length ? `\n\nFrom the colour planner:\n${plan.join('\n')}` : ''
  return `Hello ${business.name}, I would like an estimate for painting work.\n\n${lines.join('\n')}${planBlock}\n\nPlease contact me to discuss the next steps.`
}

function joinWords(words: string[]): string {
  if (words.length <= 1) return words.join('')
  return `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}`
}
