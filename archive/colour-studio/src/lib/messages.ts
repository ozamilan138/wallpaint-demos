import { business } from '../config/business'
import type { Mood, Palette, Room } from '../data/colourDiscovery'

/**
 * WhatsApp message templates. Each function returns plain text.
 * The contact helpers encode the text for the link.
 */

const greeting = `Hello ${business.name},`

export const generalEnquiry = () =>
  `${greeting} I would like an estimate for painting my home. Could you please share more information?`

export const expertEnquiry = () =>
  `${greeting} I would like to talk to a painting expert about colours for my home. Could you please help?`

export const serviceEnquiry = (service: string) =>
  `${greeting} I would like to know more about ${service.toLowerCase()} for my home. Could you please share more information?`

export const inspirationEnquiry = (category: string) =>
  `${greeting} I liked the ${category.toLowerCase()} inspiration on your website and would like to discuss a similar look for my home.`

export const finishEnquiry = (finish: string) =>
  `${greeting} I would like advice about a ${finish.toLowerCase()} finish for my home.`

export interface ColourSelection {
  room: Room | null
  mood: Mood | null
  palette: Palette | null
}

/** Builds the message from the choices in the colour discovery tool. */
export function colourEnquiry({ room, mood, palette }: ColourSelection) {
  if (!room && !mood && !palette) return generalEnquiry()

  const place = room ? `my ${room.label}` : 'my home'
  const intro = palette
    ? `${greeting} I'm exploring painting ideas for ${place}. I liked the ${palette.name} colour palette and would like to discuss painting options.`
    : `${greeting} I'm exploring painting ideas for ${place} and would like to discuss painting options.`

  const details = [
    room && `Room: ${room.label}`,
    mood && `Preferred style: ${mood.label}`,
    palette && `Preferred palette: ${palette.name} (${palette.colours.map((c) => c.name).join(', ')})`,
  ].filter(Boolean)

  return details.length ? `${intro}\n\n${details.join('\n')}` : intro
}
