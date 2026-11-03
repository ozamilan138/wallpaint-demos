import { config } from '../data/config'
import { findMood } from '../data/moods'
import { findPalette } from '../data/palettes'
import { budgetPreferences, findOption, paintingStyles, projectScopes, propertyTypes } from '../data/planner'
import { findRoom } from '../data/roomCategories'
import type { PlannerState, StepId } from './planner'

export interface SummaryRow {
  label: string
  value: string | null
  /** The planner step where the user can change this value. */
  step: StepId
  /** The label in the WhatsApp message. */
  messageLabel: string
}

/** The rows of the "My painting requirements" card, in the order of the brief. */
export function summaryRows(s: PlannerState): SummaryRow[] {
  const palette = findPalette(s.palette)
  return [
    { label: 'Property', messageLabel: 'Property Type', value: findOption(propertyTypes, s.property)?.label ?? null, step: 'project' },
    { label: 'Scope', messageLabel: 'Project Scope', value: findOption(projectScopes, s.scope)?.label ?? null, step: 'project' },
    { label: 'Room inspiration', messageLabel: 'Room', value: findRoom(s.room)?.name ?? null, step: 'room' },
    { label: 'Preferred mood', messageLabel: 'Preferred Mood', value: findMood(s.mood)?.name ?? null, step: 'mood' },
    { label: 'Selected palette', messageLabel: 'Selected Palette', value: palette?.name ?? null, step: 'palette' },
    { label: 'Painting style', messageLabel: 'Preferred Style', value: findOption(paintingStyles, s.style)?.label ?? null, step: 'project' },
    { label: 'Budget preference', messageLabel: 'Budget Preference', value: findOption(budgetPreferences, s.budget)?.label ?? null, step: 'project' },
    { label: 'Location', messageLabel: 'Location', value: s.location.trim() || null, step: 'project' },
  ]
}

function plannerLines(s: PlannerState) {
  const palette = findPalette(s.palette)
  const lines = summaryRows(s)
    .filter((r) => r.value)
    .map((r) => {
      if (r.step === 'palette' && palette) {
        return `${r.messageLabel}: ${palette.name} (${palette.swatches.map((w) => w.name).join(', ')}).`
      }
      return `${r.messageLabel}: ${r.value}.`
    })
  const notes = s.notes.trim()
  if (notes) lines.push(`Additional Requirements: ${notes}`)
  return lines
}

/** The WhatsApp message from the planner. It works with any set of choices, also with none. */
export function plannerMessage(s: PlannerState) {
  const lines = plannerLines(s)
  const intro =
    lines.length > 0
      ? 'I am interested in painting services for my home.'
      : 'I am interested in painting services for my home. I have not chosen my colours yet and would like some guidance.'
  return [
    `Hello ${config.name}`,
    '',
    intro,
    ...(lines.length > 0 ? ['', ...lines] : []),
    '',
    'I would like to discuss the available options and get an estimate.',
    '',
    'Thank you.',
  ].join('\n')
}

export function generalMessage() {
  return `Hello ${config.name}, I would like to discuss a painting project for my home and get an estimate.`
}

export function serviceMessage(service: string) {
  return `Hello ${config.name}, I am interested in ${service.toLowerCase()} for my home. Could you please share more information?`
}

export function inspirationMessage(title: string, category: string) {
  return `Hello ${config.name}, I saw the "${title}" idea in the ${category} inspiration on your website. I would like to discuss a similar look for my home.`
}

export interface EnquiryDetails {
  name: string
  phone: string
  location: string
  message: string
}

/** The message from the enquiry form. It adds the planner choices if there are any. */
export function enquiryMessage(d: EnquiryDetails, s: PlannerState) {
  const contact = [`Name: ${d.name.trim()}.`, `Phone: ${d.phone.trim()}.`]
  const location = d.location.trim() || s.location.trim()
  if (location) contact.push(`Location: ${location}.`)
  const planner = plannerLines({ ...s, location: '' })
  return [
    `Hello ${config.name}`,
    '',
    'I would like an estimate for painting my home.',
    '',
    ...contact,
    ...(planner.length > 0 ? ['', 'My planner choices:', ...planner] : []),
    ...(d.message.trim() ? ['', d.message.trim()] : []),
    '',
    'Please contact me to discuss the options.',
    '',
    'Thank you.',
  ].join('\n')
}
