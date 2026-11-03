import { RotateCcw } from 'lucide-react'
import type { Mood, Palette, Room } from '../data/colourDiscovery'
import { colourEnquiry } from '../lib/messages'
import { CallButton, PhoneIcon, WhatsAppButton, WhatsAppIcon } from './ContactButtons'

interface Props {
  room: Room | null
  mood: Mood | null
  palette: Palette | null
  onReset: () => void
}

function Row({ label, value }: { label: string; value: string | undefined }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
      <dt className="text-[15px] text-muted">{label}</dt>
      <dd className={`text-right text-base font-semibold ${value ? '' : 'text-muted-large'}`}>{value ?? 'Not chosen yet'}</dd>
    </div>
  )
}

/** The colour plan. It updates with each choice and builds the WhatsApp message. */
export function SelectedPaletteSummary({ room, mood, palette, onReset }: Props) {
  const message = colourEnquiry({ room, mood, palette })
  const anything = room || mood || palette

  return (
    <aside aria-labelledby="summary-title" className="rounded-3xl bg-ink p-5 text-cream sm:p-7">
      <h3 id="summary-title" className="font-display text-2xl font-bold tracking-tight text-cream">
        Your colour plan
      </h3>

      <div aria-live="polite">
        <div className="mt-5 flex h-20 overflow-hidden rounded-2xl bg-cream/10" aria-hidden>
          {palette ? (
            palette.colours.map((c) => <span key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} />)
          ) : (
            <span className="flex flex-1 items-center justify-center px-4 text-center text-[15px] text-cream/75">
              Your palette appears here
            </span>
          )}
        </div>

        <dl className="mt-4 [&_dd]:text-cream [&_dt]:text-cream/70">
          <Row label="Room" value={room?.label} />
          <Row label="Mood" value={mood?.label} />
          <Row label="Palette" value={palette?.name} />
        </dl>
        {palette && <p className="mt-1 text-[15px] text-cream/80">{palette.colours.map((c) => c.name).join(', ')}</p>}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <WhatsAppButton message={message} className="btn btn-light w-full">
          <WhatsAppIcon className="size-5 text-[#1F7A4D]" />
          {palette ? 'Discuss on WhatsApp' : 'Ask on WhatsApp'}
        </WhatsAppButton>
        <CallButton className="btn w-full bg-cream/10 text-cream hover:bg-cream/20">
          <PhoneIcon className="size-5" aria-hidden />
          Call Now
        </CallButton>
      </div>

      <details className="group mt-5 rounded-2xl bg-cream/8">
        <summary className="flex min-h-11 cursor-pointer items-center px-4 text-[15px] font-semibold text-cream/90">
          See the Message We Will Send
        </summary>
        <p className="px-4 pb-4 text-[15px] leading-relaxed whitespace-pre-line text-cream/85">{message}</p>
      </details>

      {anything && (
        <button
          type="button"
          onClick={onReset}
          className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-1 text-[15px] font-semibold text-cream/85 underline-offset-4 hover:underline"
        >
          <RotateCcw className="size-4" aria-hidden />
          Start Again
        </button>
      )}
    </aside>
  )
}
