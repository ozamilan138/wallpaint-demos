import { CircleCheck } from 'lucide-react'

interface Props {
  step: number
  title: string
  id: string
  /** The name of the selected item, or null. */
  selected: string | null
}

/** The heading of one planner step. It shows the step number and the current selection in words. */
export function StepHeader({ step, title, id, selected }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span
        aria-hidden="true"
        className={`grid size-11 shrink-0 place-items-center rounded-full font-heading text-lg font-extrabold ${selected ? 'bg-sage-deep text-paper' : 'bg-ink text-paper'}`}
      >
        {selected ? <CircleCheck className="size-6" /> : step}
      </span>
      <h3 id={id} className="font-heading text-[1.5rem] font-extrabold leading-tight sm:text-[1.75rem]">
        <span className="sr-only">Step {step}: </span>
        {title}
      </h3>
      <p className="w-full font-ui text-base font-medium text-muted sm:ml-auto sm:w-auto">
        {selected ? (
          <>
            <span className="sr-only">Selected: </span>
            <span className="text-ink">{selected}</span>
          </>
        ) : (
          'Not chosen yet'
        )}
      </p>
    </div>
  )
}
