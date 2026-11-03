import { useEffect, useRef, useState } from 'react'
import { Pencil, RotateCcw } from 'lucide-react'
import { WhatsAppButton } from '../ContactButtons'
import { ColourNotice } from './ColourNotice'
import { PaletteStrip } from './PaletteStrip'
import { StepFrame } from './StepFrame'
import { findPalette } from '../../data/palettes'
import { usePlanner } from '../../lib/planner'
import { plannerMessage, summaryRows } from '../../lib/messages'

export function ProjectSummary() {
  const { state, count, goTo, reset } = usePlanner()
  const [confirmReset, setConfirmReset] = useState(false)
  const keepRef = useRef<HTMLButtonElement>(null)
  const palette = findPalette(state.palette)
  const rows = summaryRows(state)
  const notes = state.notes.trim()

  useEffect(() => {
    if (confirmReset) keepRef.current?.focus()
  }, [confirmReset])

  return (
    <StepFrame
      title="Your Painting Plan"
      intro={
        count === 0
          ? 'You have not made any choices yet. That is fine: you can still send a message and ask for guidance, or go back and pick a room.'
          : 'Here is everything you chose. Change any line, or send it to us on WhatsApp.'
      }
      hideContinue
    >
      <article aria-labelledby="plan-card-title" className="overflow-hidden rounded-3xl bg-white">
        <div className="p-5 sm:p-7">
          <h4 id="plan-card-title" className="font-ui text-[15px] font-bold tracking-[0.02em] text-muted">
            My Painting Requirements
          </h4>
          <p className="font-display mt-1 text-[1.6rem] leading-tight font-extrabold tracking-[-0.02em] sm:text-[2rem]">
            {palette ? palette.name : 'Palette not chosen yet'}
          </p>
          <PaletteStrip palette={palette} tall className="mt-4" />
          {palette && (
            <p className="font-ui mt-2 text-[14px] text-muted">{palette.swatches.map((s) => `${s.name} ${s.hex}`).join(', ')}</p>
          )}
        </div>

        <dl className="bg-ground/60 px-5 py-2 sm:px-7">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-[1fr_auto] items-center gap-x-4 py-2.5 sm:grid-cols-[12rem_1fr_auto]">
              <dt className="text-[15px] text-muted">{r.label}</dt>
              <dd className={`col-start-1 row-start-2 text-[17px] font-semibold sm:col-start-2 sm:row-start-1 ${r.value ? 'text-ink' : 'text-muted'}`}>
                {r.value ?? 'Not chosen yet'}
              </dd>
              <dd className="col-start-2 row-span-2 row-start-1 sm:col-start-3 sm:row-span-1">
                <button
                  type="button"
                  onClick={() => goTo(r.step)}
                  className="link inline-flex min-h-11 items-center text-[15px]"
                  aria-label={`${r.value ? 'Change' : 'Add'} ${r.label.toLowerCase()}`}
                >
                  {r.value ? 'Change' : 'Add'}
                </button>
              </dd>
            </div>
          ))}
          {notes && (
            <div className="py-2.5">
              <dt className="text-[15px] text-muted">Additional requirements</dt>
              <dd className="mt-0.5 text-[16px] whitespace-pre-line">{notes}</dd>
            </div>
          )}
        </dl>

        <div className="flex flex-col gap-3 p-5 sm:flex-row sm:flex-wrap sm:p-7">
          <WhatsAppButton message={() => plannerMessage(state)} className="btn btn-primary min-h-14 px-7 text-[17px]">
            Discuss on WhatsApp
          </WhatsAppButton>
          <button type="button" className="btn btn-secondary" onClick={() => goTo('room')}>
            <Pencil className="size-5" aria-hidden />
            Edit Choices
          </button>
          {!confirmReset && (
            <button type="button" className="btn btn-secondary" onClick={() => setConfirmReset(true)}>
              <RotateCcw className="size-5" aria-hidden />
              Reset
            </button>
          )}
        </div>

        {confirmReset && (
          <div role="group" aria-labelledby="reset-q" className="mx-5 mb-5 rounded-2xl bg-beige-soft p-4 sm:mx-7 sm:mb-7">
            <p id="reset-q" className="font-semibold">
              Clear all your choices and start again?
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button type="button" className="btn btn-ink" onClick={reset}>
                Yes, Reset
              </button>
              <button ref={keepRef} type="button" className="btn btn-secondary" onClick={() => setConfirmReset(false)}>
                Keep My Choices
              </button>
            </div>
          </div>
        )}
      </article>

      <details className="group mt-5 rounded-2xl bg-white p-5">
        <summary className="font-ui flex min-h-11 items-center text-[16px] font-semibold marker:text-green">
          Preview the WhatsApp Message
        </summary>
        <pre className="mt-3 font-sans text-[15px] leading-relaxed whitespace-pre-wrap text-ink">{plannerMessage(state)}</pre>
      </details>

      <ColourNotice className="mt-5" />
    </StepFrame>
  )
}
