import { Check } from 'lucide-react'
import { STEPS, usePlanner, type StepId } from '../../lib/planner'

/** The paint chip strip at the top of the planner. Each chip is a step. */
export function PlannerProgress() {
  const { state, step, goTo } = usePlanner()

  const done: Record<StepId, boolean> = {
    room: state.room !== null,
    mood: state.mood !== null,
    palette: state.palette !== null,
    project: Boolean(state.property || state.scope || state.style || state.budget || state.location.trim()),
    summary: false,
  }
  const currentIndex = STEPS.findIndex((s) => s.id === step)

  return (
    <nav aria-label="Planner steps">
      <p className="font-ui text-[15px] font-semibold text-muted" aria-live="polite">
        Step {currentIndex + 1} of {STEPS.length}: {STEPS[currentIndex].label}
      </p>
      <ol className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-2">
        {STEPS.map((s, i) => {
          const current = s.id === step
          const complete = done[s.id]
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => goTo(s.id)}
                aria-current={current ? 'step' : undefined}
                aria-label={`${s.label}${complete ? ', chosen' : ''}${current ? ', current step' : ''}`}
                className="group block w-full text-left"
              >
                <span
                  className={`block h-2.5 rounded-full transition-colors duration-300 ${
                    current ? 'bg-green' : complete ? 'bg-sage' : i < currentIndex ? 'bg-ink/20' : 'bg-ink/10 group-hover:bg-ink/20'
                  }`}
                  aria-hidden
                />
                <span
                  className={`font-ui mt-2 flex min-h-8 items-center gap-1 text-[13px] font-semibold sm:text-[15px] ${current ? 'text-ink' : 'text-muted group-hover:text-ink'}`}
                >
                  {complete && <Check className="hidden size-4 shrink-0 text-green-deep sm:block" aria-hidden />}
                  <span className="truncate">{s.label}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
