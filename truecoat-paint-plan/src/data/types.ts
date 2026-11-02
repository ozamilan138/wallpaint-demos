import type { ImageName } from './images'

export type RoomId = 'living' | 'bedroom' | 'kitchen' | 'dining' | 'exterior'
export type StyleId = 'warm' | 'fresh' | 'minimal' | 'bold'

export interface Room {
  id: RoomId
  name: string
  /** The plural name that the inspiration gallery uses. */
  plural: string
  image: ImageName
  alt: string
}

export interface PlannerStyle {
  id: StyleId
  name: string
  description: string
  /** Three colours that give a quick preview of the style. */
  preview: [string, string, string]
}

/** The part of the room that a colour suits. The room preview uses this value. */
export type ColourRole = 'main' | 'feature' | 'trim' | 'accent'

export interface PaletteColour {
  name: string
  hex: string
  role: ColourRole
}

export interface Palette {
  id: string
  name: string
  description: string
  /** The styles that this palette suits. The first style is the main style. */
  styles: StyleId[]
  colours: PaletteColour[]
}

export interface Service {
  id: string
  name: string
  description: string
  image: ImageName
  alt: string
  /** The background colour of the label strip under the photo. */
  strip: string
}

export interface Finish {
  id: string
  name: string
  looks: string
  description: string
  usedFor: string
  image: ImageName
  alt: string
}

export interface InspirationImage {
  room: RoomId
  image: ImageName
  alt: string
  caption: string
}

export interface Project {
  id: string
  title: string
  room: string
  style: string
  description: string
  image: ImageName
  alt: string
  /** True for demo photos. Set to false only for real TrueCoat projects. */
  demo: boolean
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  detail: string
  /** True for sample text. Set to false only for real reviews that you have permission to show. */
  placeholder: boolean
}
