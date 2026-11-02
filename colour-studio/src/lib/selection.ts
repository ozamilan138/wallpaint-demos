import type { MoodId, RoomId } from '../data/colourDiscovery'

/** The choices in the colour discovery tool. */
export interface Selection {
  room: RoomId | null
  mood: MoodId | null
  palette: string | null
}

export const emptySelection: Selection = { room: null, mood: null, palette: null }
