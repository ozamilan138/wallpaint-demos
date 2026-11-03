import { createContext, useCallback, useContext, useMemo, useReducer, type ReactNode } from 'react'

/**
 * The state of the colour planner. All selections are optional.
 * The state stays in memory only. Nothing goes to a server.
 */
export interface PlannerState {
  room: string | null
  mood: string | null
  palette: string | null
  property: string | null
  scope: string | null
  style: string | null
  budget: string | null
  location: string
  notes: string
}

export type ChoiceKey = 'room' | 'mood' | 'palette' | 'property' | 'scope' | 'style' | 'budget'

export const STEPS = [
  { id: 'room', label: 'Room' },
  { id: 'mood', label: 'Mood' },
  { id: 'palette', label: 'Palette' },
  { id: 'project', label: 'Project' },
  { id: 'summary', label: 'Summary' },
] as const

export type StepId = (typeof STEPS)[number]['id']

export const emptyPlanner: PlannerState = {
  room: null,
  mood: null,
  palette: null,
  property: null,
  scope: null,
  style: null,
  budget: null,
  location: '',
  notes: '',
}

type Action =
  | { type: 'choose'; key: ChoiceKey; value: string | null }
  | { type: 'text'; key: 'location' | 'notes'; value: string }
  | { type: 'reset' }

function reducer(state: PlannerState, action: Action): PlannerState {
  switch (action.type) {
    case 'choose':
      return { ...state, [action.key]: action.value }
    case 'text':
      return { ...state, [action.key]: action.value }
    case 'reset':
      return emptyPlanner
  }
}

interface PlannerContextValue {
  state: PlannerState
  step: StepId
  /** Set to true after the user moves between steps, so that focus moves only after a user action. */
  moved: boolean
  choose: (key: ChoiceKey, value: string | null) => void
  setText: (key: 'location' | 'notes', value: string) => void
  goTo: (step: StepId, options?: { scroll?: boolean }) => void
  reset: () => void
  count: number
}

const PlannerContext = createContext<PlannerContextValue | null>(null)

interface StepState {
  step: StepId
  moved: boolean
}

export function PlannerProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, emptyPlanner)
  const [stepState, setStepState] = useReducer(
    (_: StepState, next: StepState) => next,
    { step: 'room', moved: false },
  )

  const choose = useCallback((key: ChoiceKey, value: string | null) => dispatch({ type: 'choose', key, value }), [])
  const setText = useCallback(
    (key: 'location' | 'notes', value: string) => dispatch({ type: 'text', key, value }),
    [],
  )

  const goTo = useCallback((step: StepId, options?: { scroll?: boolean }) => {
    setStepState({ step, moved: true })
    if (options?.scroll) {
      document.getElementById('explore')?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    }
  }, [])

  const reset = useCallback(() => {
    dispatch({ type: 'reset' })
    setStepState({ step: 'room', moved: true })
  }, [])

  const count = useMemo(() => {
    const keys: (keyof PlannerState)[] = ['room', 'mood', 'palette', 'property', 'scope', 'style', 'budget', 'location']
    return keys.filter((k) => {
      const v = state[k]
      return typeof v === 'string' ? v.trim().length > 0 : v !== null
    }).length
  }, [state])

  const value = useMemo(
    () => ({ state, step: stepState.step, moved: stepState.moved, choose, setText, goTo, reset, count }),
    [state, stepState, choose, setText, goTo, reset, count],
  )

  return <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>
}

export function usePlanner() {
  const ctx = useContext(PlannerContext)
  if (!ctx) throw new Error('usePlanner must be inside PlannerProvider')
  return ctx
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
