import { ClipboardList, RotateCcw } from 'lucide-react'
import { roleLabels } from '../data/planner'
import { usePlan } from '../lib/plan'
import { plannerMessage } from '../lib/whatsapp'
import { WhatsAppButton } from './ContactButtons'
import { RoomPreview } from './RoomPreview'

const NEUTRAL_STRIP = ['#ECEAE4', '#DEDBD3', '#F6F5F1', '#C9C3B8']

/** The plan card: a job sheet that fills in as the visitor makes choices. */
export function SelectedPaletteSummary() {
  const { room, style, palette, count, reset } = usePlan()
  const message = plannerMessage({ room, style, palette })
  const strip = palette ? palette.colours.map((c) => c.hex) : NEUTRAL_STRIP

  const previewLabel = palette
    ? `A drawing of a ${room?.name.toLowerCase() ?? 'room'} painted in the ${palette.name} palette`
    : `A drawing of a ${room?.name.toLowerCase() ?? 'room'} with unpainted walls`

  const status = [room?.name, style?.name, palette?.name].filter(Boolean).join(', ')

  return (
    <aside id="your-plan" aria-labelledby="plan-title" className="scroll-mt-24 overflow-hidden rounded-card bg-paper">
      <div className="flex h-4" aria-hidden="true">
        {strip.map((c, i) => (
          <span key={c + i} className="flex-1 transition-colors duration-700" style={{ background: c }} />
        ))}
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 id="plan-title" className="flex items-center gap-2 font-heading text-[1.375rem] font-extrabold">
            <ClipboardList aria-hidden="true" className="size-6 text-sage-deep" />
            Your Painting Plan
          </h3>
          <span className="rounded-full bg-sage-soft px-3 py-1 font-ui text-sm font-semibold text-ink">
            {count} of 3 chosen
          </span>
        </div>

        <div className="mt-4 overflow-hidden rounded-[4px] bg-ground">
          <RoomPreview room={room?.id ?? null} palette={palette} label={previewLabel} />
        </div>
        {!palette && (
          <p className="mt-2 text-sm text-muted">Choose a palette to paint this drawing.</p>
        )}

        <dl className="mt-5 grid gap-1 text-base">
          <Row term="Room" value={room?.name} />
          <Row term="Style" value={style?.name} />
          <div className="py-3">
            <dt className="font-ui text-sm font-semibold text-muted">Colour palette</dt>
            <dd className="mt-1">
              {palette ? (
                <>
                  <span className="font-heading text-lg font-bold">{palette.name}</span>
                  <ul className="mt-2 grid gap-1.5">
                    {palette.colours.map((c) => (
                      <li key={c.name + c.hex} className="flex items-center gap-2.5 text-base">
                        <span
                          aria-hidden="true"
                          className="size-6 shrink-0 rounded-[4px] swatch-edge"
                          style={{ background: c.hex }}
                        />
                        <span className="font-medium">{c.name}</span>
                        <span className="ml-auto text-sm text-muted">{roleLabels[c.role]}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <span className="text-muted">Not chosen yet</span>
              )}
            </dd>
          </div>
        </dl>

        <div className="mt-4 flex flex-col gap-3">
          <WhatsAppButton message={message} className="btn btn-primary w-full">
            {count === 0 ? 'Ask for Colour Help' : 'Send My Plan on WhatsApp'}
          </WhatsAppButton>
          <div className="grid grid-cols-2 gap-3">
            <a href="#estimate" className="btn btn-soft px-3">
              Add Details
            </a>
            <button type="button" className="btn btn-soft px-3 disabled:opacity-50" onClick={reset} disabled={count === 0}>
              <RotateCcw aria-hidden="true" className="size-5" />
              Reset
            </button>
          </div>
        </div>
        <p className="mt-4 max-w-[34rem] text-sm leading-normal text-muted">
          The drawing and the screen colours are approximate. Daylight and lamps change how paint looks, so test real
          samples on your wall first.
        </p>
        <p className="sr-only" aria-live="polite">
          {status ? `Your plan: ${status}.` : 'Your plan is empty.'}
        </p>
      </div>
    </aside>
  )
}

function Row({ term, value }: { term: string; value?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3">
      <dt className="font-ui text-sm font-semibold text-muted">{term}</dt>
      <dd className={value ? 'font-heading text-lg font-bold' : 'text-muted'}>{value ?? 'Not chosen yet'}</dd>
    </div>
  )
}
