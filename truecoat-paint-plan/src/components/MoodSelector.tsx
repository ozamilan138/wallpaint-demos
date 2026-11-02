import { Check } from 'lucide-react'
import { styles } from '../data/planner'
import { usePlan } from '../lib/plan'
import { StepHeader } from './StepHeader'

/** Step 2: the visitor selects a style (mood). The cards are native radio buttons. */
export function MoodSelector() {
  const { style, setStyle } = usePlan()
  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">Step 2: Choose your style</legend>
      <StepHeader step={2} id="step-style" title="Choose Your Style" selected={style?.name ?? null} />
      <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
        {styles.map((s) => {
          const checked = style?.id === s.id
          return (
            <label
              key={s.id}
              className={`flex cursor-pointer gap-4 rounded-card bg-paper p-3 pr-4 transition-shadow has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-sage-deep ${
                checked ? 'choice-on' : 'choice-off'
              }`}
            >
              <input
                type="radio"
                name="planner-style"
                value={s.id}
                checked={checked}
                onChange={() => setStyle(s.id)}
                aria-label={s.name}
                aria-describedby={`style-desc-${s.id}`}
                className="sr-only"
              />
              <span aria-hidden="true" className="flex w-16 shrink-0 flex-col overflow-hidden rounded-[4px] sm:w-[4.5rem]">
                {s.preview.map((c) => (
                  <span key={c} className="flex-1" style={{ background: c }} />
                ))}
              </span>
              <span className="flex min-w-0 flex-1 flex-col py-1">
                <span className="flex items-start justify-between gap-2">
                  <span className={`font-heading text-[1.25rem] leading-snug ${checked ? 'font-extrabold' : 'font-bold'}`}>
                    {s.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${checked ? 'bg-sage-deep text-paper' : 'bg-ground radio-dot'}`}
                  >
                    {checked && <Check className="size-4" />}
                  </span>
                </span>
                <span id={`style-desc-${s.id}`} className="mt-1 text-base leading-normal text-ink">
                  {s.description}
                </span>
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
