import { Check } from 'lucide-react'
import type { Filter } from './ProjectGallery'

type Props = {
  options: Filter[]
  counts: Record<string, number>
  value: Filter
  onChange: (value: Filter) => void
}

/** Category buttons. The selected one shows a check mark and aria-pressed, not only a colour. */
export function ProjectFilters({ options, counts, value, onChange }: Props) {
  return (
    <div role="group" aria-label="Filter projects by space" className="mt-10 flex flex-wrap gap-2 md:mt-14">
      {options.map((option) => {
        const active = option === value
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option)}
            className={`inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full px-4 font-ui text-[15px] font-semibold transition-colors duration-150 ${
              active ? 'bg-ink text-paper' : 'bg-paper text-ink hover:bg-white'
            }`}
            style={{ touchAction: 'manipulation' }}
          >
            {active && <Check className="size-4" aria-hidden="true" />}
            {option}
            <span className={active ? 'text-paper/75' : 'text-muted'}>
              <span className="sr-only">, </span>
              {counts[option]}
              <span className="sr-only"> projects</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
