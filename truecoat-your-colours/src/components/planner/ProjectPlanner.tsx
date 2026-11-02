import { useId, useState } from 'react'
import { Check } from 'lucide-react'
import { StepFrame } from './StepFrame'
import {
  LOCATION_MAX,
  NOTES_MAX,
  budgetPreferences,
  paintingStyles,
  projectScopes,
  propertyTypes,
  type Option,
} from '../../data/planner'
import { usePlanner, type ChoiceKey } from '../../lib/planner'

interface GroupProps {
  legend: string
  hint?: string
  name: ChoiceKey
  options: Option[]
  columns?: string
}

/** One question with native radio buttons, shown as large cards. */
function OptionGroup({ legend, hint, name, options, columns = 'sm:grid-cols-2' }: GroupProps) {
  const { state, choose } = usePlanner()
  const value = state[name]
  const hintId = useId()
  const legendId = useId()

  return (
    <div role="radiogroup" aria-labelledby={legendId} aria-describedby={hint ? hintId : undefined} className="min-w-0">
      <div className="flex min-h-11 flex-wrap items-center justify-between gap-x-4">
        <h4 id={legendId} className="text-[1.15rem] font-extrabold">
          {legend}
        </h4>
        {value && (
          <button
            type="button"
            onClick={() => choose(name, null)}
            className="link min-h-11 text-[15px]"
            aria-label={`Clear the answer for ${legend}`}
          >
            Clear
          </button>
        )}
      </div>
      {hint && (
        <p id={hintId} className="text-[15px] text-muted">
          {hint}
        </p>
      )}
      <div className={`mt-3 grid gap-2.5 ${columns}`}>
        {options.map((o) => {
          const checked = value === o.id
          return (
            <label
              key={o.id}
              className={`relative flex min-h-14 cursor-pointer items-center gap-3 rounded-xl bg-white px-4 py-3 ring-2 transition-[box-shadow,background-color] duration-150 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-terracotta-deep ${checked ? 'bg-sage-soft ring-green' : 'ring-ink/10 hover:ring-ink/25'}`}
            >
              <input
                type="radio"
                name={name}
                value={o.id}
                checked={checked}
                onChange={() => choose(name, o.id)}
                className="peer sr-only"
              />
              <span
                className={`flex size-6 shrink-0 items-center justify-center rounded-full border-2 ${checked ? 'border-green bg-green text-white' : 'border-ink/30 bg-white'}`}
                aria-hidden
              >
                {checked && <Check className="size-3.5" strokeWidth={3.5} />}
              </span>
              <span className="font-ui flex flex-col">
                <span className="text-[16px] leading-tight font-semibold">{o.label}</span>
                {o.hint && <span className="mt-0.5 text-[14px] text-muted">{o.hint}</span>}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export function ProjectPlanner() {
  const { state, setText } = usePlanner()
  const [locationError, setLocationError] = useState<string | null>(null)

  const checkLocation = (v: string) => {
    const t = v.trim()
    if (t.length > 0 && t.length < 2) setLocationError('Enter at least 2 letters, for example the name of your area.')
    else if (t.length > 0 && !/[a-zA-ZÀ-ɏऀ-ॿ]/.test(t)) setLocationError('Enter the name of your area or city, not only numbers.')
    else setLocationError(null)
  }

  return (
    <StepFrame
      title="Tell Us a Little About Your Painting Project"
      intro="Answer only what you want to. Every question is optional, and you can skip to the summary at any time."
    >
      <div className="grid gap-9">
        <OptionGroup legend="Property Type" name="property" options={propertyTypes} columns="sm:grid-cols-3" />
        <OptionGroup legend="Project Scope" name="scope" options={projectScopes} columns="sm:grid-cols-2 xl:grid-cols-3" />
        <OptionGroup legend="Preferred Painting Style" name="style" options={paintingStyles} />
        <OptionGroup
          legend="Approximate Budget"
          hint="This helps us suggest suitable options. It is not a price, and you do not need to share an amount."
          name="budget"
          options={budgetPreferences}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="planner-location" className="field-label">
              Location <span className="font-normal text-muted">(optional)</span>
            </label>
            <input
              id="planner-location"
              type="text"
              autoComplete="address-level2"
              maxLength={LOCATION_MAX}
              value={state.location}
              onChange={(e) => {
                setText('location', e.target.value)
                if (locationError) checkLocation(e.target.value)
              }}
              onBlur={(e) => checkLocation(e.target.value)}
              aria-invalid={locationError ? true : undefined}
              aria-describedby={locationError ? 'planner-location-error' : 'planner-location-hint'}
              className="field-input"
              placeholder="Your area or city…"
            />
            {locationError ? (
              <p id="planner-location-error" className="mt-2 text-[15px] font-medium text-terracotta-deep" role="alert">
                {locationError}
              </p>
            ) : (
              <p id="planner-location-hint" className="mt-2 text-[15px] text-muted">
                Your area helps us plan a visit.
              </p>
            )}
          </div>
          <div className="sm:row-span-2">
            <label htmlFor="planner-notes" className="field-label">
              Additional requirements <span className="font-normal text-muted">(optional)</span>
            </label>
            <textarea
              id="planner-notes"
              rows={4}
              maxLength={NOTES_MAX}
              value={state.notes}
              onChange={(e) => setText('notes', e.target.value)}
              aria-describedby="planner-notes-count"
              className="field-input resize-y"
              placeholder="For example: damp patches on one wall, or a date for the work…"
            />
            <p id="planner-notes-count" className="mt-2 text-[15px] text-muted">
              {state.notes.length} of {NOTES_MAX} characters
            </p>
          </div>
        </div>
      </div>
    </StepFrame>
  )
}
