import { useId } from 'react'
import { WhatsAppButton } from '../ContactButtons'
import { PaletteStrip } from './PaletteStrip'
import { findPalette } from '../../data/palettes'
import { usePlanner } from '../../lib/planner'
import { plannerMessage, summaryRows } from '../../lib/messages'

/**
 * The compact "job card". It shows the room, mood and palette, and the
 * WhatsApp button. It sits next to the steps on large screens.
 */
export function SelectedPaletteSummary({ className = '' }: { className?: string }) {
  const { state, step, count, goTo } = usePlanner()
  const titleId = useId()
  const palette = findPalette(state.palette)
  const rows = summaryRows(state)
  const main = rows.filter((r) => r.step === 'room' || r.step === 'mood' || r.step === 'palette')
  const extra = rows.filter((r) => r.step === 'project' && r.value)

  return (
    <section aria-labelledby={titleId} className={`rounded-3xl bg-white p-5 sm:p-6 ${className}`}>
      <h3 id={titleId} className="text-[1.25rem] font-extrabold tracking-[-0.01em]">
        My Painting Requirements
      </h3>
      <p className="font-ui mt-1 text-[14px] font-medium text-muted" aria-live="polite">
        {count === 0 ? 'No choices yet' : `${count} of 8 choices made`}
      </p>

      <PaletteStrip palette={palette} className="mt-4" />

      <dl className="mt-4 grid gap-2.5 text-[15px]">
        {[...main, ...extra].map((r) => (
          <div key={r.label} className="flex items-baseline justify-between gap-3">
            <dt className="text-muted">{r.label}</dt>
            <dd className={`text-right font-semibold ${r.value ? 'text-ink' : 'text-muted'}`}>{r.value ?? 'Not chosen'}</dd>
          </div>
        ))}
      </dl>

      <WhatsAppButton message={() => plannerMessage(state)} className="btn btn-primary mt-5 w-full">
        Discuss on WhatsApp
      </WhatsAppButton>
      {step !== 'summary' && (
        <button type="button" onClick={() => goTo('summary')} className="link mt-3 inline-flex min-h-11 items-center text-[15px]">
          See Full Summary
        </button>
      )}
    </section>
  )
}
