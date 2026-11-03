import { createContext, useContext, useState, type ReactNode } from 'react'

/**
 * The areas that the visitor marks on the floor plan.
 * The painting options section and the enquiry form both read this list.
 */
interface PlanContextValue {
  selected: string[]
  toggle: (id: string) => void
  clear: () => void
}

const PlanContext = createContext<PlanContextValue | null>(null)

export function PlanProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string[]>([])
  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  const clear = () => setSelected([])
  return <PlanContext.Provider value={{ selected, toggle, clear }}>{children}</PlanContext.Provider>
}

export function usePlan(): PlanContextValue {
  const ctx = useContext(PlanContext)
  if (!ctx) throw new Error('usePlan must be used inside PlanProvider')
  return ctx
}
