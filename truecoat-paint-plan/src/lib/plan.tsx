// The shared state of the colour planner.
// The planner, the project form and the mobile action bar all read the same selections.

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { palettes, rooms, styles } from '../data/planner'
import type { RoomId, StyleId } from '../data/types'
import type { PlanSelection } from './whatsapp'

interface PlanState extends PlanSelection {
  setRoom: (id: RoomId) => void
  setStyle: (id: StyleId) => void
  setPalette: (id: string) => void
  reset: () => void
  count: number
}

const PlanContext = createContext<PlanState | null>(null)

export function PlanProvider({ children }: { children: ReactNode }) {
  const [roomId, setRoom] = useState<RoomId | null>(null)
  const [styleId, setStyle] = useState<StyleId | null>(null)
  const [paletteId, setPalette] = useState<string | null>(null)

  const value = useMemo<PlanState>(() => {
    const room = rooms.find((r) => r.id === roomId) ?? null
    const style = styles.find((s) => s.id === styleId) ?? null
    const palette = palettes.find((p) => p.id === paletteId) ?? null
    return {
      room,
      style,
      palette,
      count: [room, style, palette].filter(Boolean).length,
      setRoom,
      setStyle,
      setPalette,
      reset: () => {
        setRoom(null)
        setStyle(null)
        setPalette(null)
      },
    }
  }, [roomId, styleId, paletteId])

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>
}

export function usePlan(): PlanState {
  const ctx = useContext(PlanContext)
  if (!ctx) throw new Error('usePlan must be inside PlanProvider')
  return ctx
}
