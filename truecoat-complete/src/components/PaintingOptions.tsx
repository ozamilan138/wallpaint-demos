import { Check, MessageCircle, RotateCcw } from 'lucide-react'
import { labelFor, paintingOptions, planExtras, planRooms, suggestOption } from '../data/options'
import { optionMessage } from '../lib/whatsapp'
import { delay } from '../lib/reveal'
import { WhatsAppAction } from './contact/ContactActions'
import { usePlan } from './PlanContext'
import { Picture } from './Picture'

/**
 * Flexible painting options.
 * The visitor marks areas on a simple floor plan. The plan suggests the option that matches,
 * and the marked areas go into the WhatsApp message and the enquiry form.
 * The options are not packages and show no prices.
 */
export function PaintingOptions() {
  const { selected } = usePlan()
  const suggested = suggestOption(selected)
  const labels = selected.map(labelFor)

  return (
    <section id="options" aria-labelledby="options-title" className="on-night section bg-night text-on-night">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="options-title" className="h2 text-white lg:col-span-7" data-reveal>
            Different Homes. Different Needs. The Right Approach.
          </h2>
          <p className="lead text-on-night-muted lg:col-span-5" data-reveal style={delay(1)}>
            These are not fixed packages and they have no set prices. They help you describe your project, and every
            estimate follows your actual rooms and requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <FloorPlan />
            </div>
          </div>

          <ol className="flex flex-col gap-6 lg:col-span-7" aria-label="Painting options">
            {paintingOptions.map((opt) => {
              const isMatch = suggested === opt.id
              return (
                <li
                  key={opt.id}
                  className={`grid overflow-hidden rounded-2xl transition-colors duration-300 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] ${
                    isMatch ? 'bg-ground text-ink' : 'bg-night-2'
                  }`}
                >
                  <div className="relative">
                    <Picture
                      name={opt.image}
                      alt={opt.alt}
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"
                      className="aspect-[16/10] h-full w-full object-cover sm:aspect-auto lg:aspect-[16/8] xl:aspect-auto"
                    />
                    <span className="absolute left-0 top-0 rounded-br-2xl bg-night px-4 py-3 font-display text-2xl font-extrabold leading-none text-oat">
                      {opt.number}
                    </span>
                  </div>
                  <div className="flex flex-col p-6 sm:p-7">
                    {isMatch && (
                      <p className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-green px-3 py-1 text-sm font-semibold text-white">
                        <Check aria-hidden size={16} strokeWidth={3} /> Matches the areas you marked
                      </p>
                    )}
                    <h3 className={`text-2xl font-bold leading-tight ${isMatch ? 'text-ink' : 'text-white'}`}>{opt.title}</h3>
                    <p className={`mt-2 ${isMatch ? 'text-muted' : 'text-on-night-muted'}`}>{opt.description}</p>
                    <p className={`mt-5 text-sm font-semibold ${isMatch ? 'text-ink' : 'text-white'}`}>
                      Often a good fit for:
                    </p>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {opt.needs.map((n) => (
                        <li key={n} className="flex gap-2.5">
                          <span
                            aria-hidden
                            className={`mt-[0.6rem] size-1.5 shrink-0 rounded-full ${isMatch ? 'bg-green' : 'bg-oat'}`}
                          />
                          <span className={isMatch ? 'text-ink/85' : 'text-on-night'}>{n}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <WhatsAppAction
                        message={optionMessage(opt.title, labels)}
                        className={`btn w-full sm:w-auto ${isMatch ? 'btn-primary' : 'btn-oat'}`}
                      >
                        <MessageCircle aria-hidden size={18} />
                        Discuss Your Requirements
                      </WhatsAppAction>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

function FloorPlan() {
  const { selected, toggle, clear } = usePlan()
  const suggested = suggestOption(selected)
  const suggestion = paintingOptions.find((o) => o.id === suggested)

  return (
    <div className="rounded-2xl bg-ground p-5 text-ink sm:p-7" data-reveal>
      <h3 className="text-xl font-bold leading-snug">Which areas would you like painted?</h3>
      <p className="mt-1.5 text-muted">Tap the rooms on this example home. Your choice goes into your message.</p>

      <div
        role="group"
        aria-label="Rooms of an example home"
        className="mt-5 grid aspect-[6/5] gap-[5px] rounded-xl bg-ink p-[5px] sm:aspect-[3/2] lg:aspect-[6/5]"
        style={{
          gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
          gridTemplateRows: 'repeat(5, minmax(0, 1fr))',
          gridTemplateAreas: `"bed1 bed1 hall kitchen kitchen kitchen" "bed1 bed1 hall dining dining dining" "bed2 bed2 hall living living living" "bed2 bed2 hall living living living" "bath bath hall living living living"`,
        }}
      >
        {planRooms.map((room) => {
          const on = selected.includes(room.id)
          return (
            <button
              key={room.id}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(room.id)}
              style={{ gridArea: room.area }}
              className={`relative flex min-h-11 flex-col items-start justify-end rounded-[6px] p-2 text-left text-[0.8125rem] font-semibold leading-tight transition-colors duration-200 sm:p-3 sm:text-sm ${
                on ? 'bg-green text-white' : 'bg-white text-ink hover:bg-ground-2'
              } ${room.area === 'hall' ? '[writing-mode:vertical-rl] rotate-180 items-center justify-center' : ''}`}
            >
              {on && (
                <span
                  aria-hidden
                  className={`absolute inline-flex size-5 items-center justify-center rounded-full bg-white text-green ${
                    room.area === 'hall' ? 'bottom-2 left-1/2 -translate-x-1/2 rotate-180' : 'right-2 top-2'
                  }`}
                >
                  <Check size={13} strokeWidth={3.5} />
                </span>
              )}
              {room.label}
            </button>
          )
        })}
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {planExtras.map((extra) => {
          const on = selected.includes(extra.id)
          return (
            <button
              key={extra.id}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(extra.id)}
              className={`flex min-h-12 items-center gap-2.5 rounded-xl px-4 py-2.5 text-left text-base font-semibold transition-colors duration-200 ${
                on ? 'bg-green text-white' : 'bg-ground-2 text-ink hover:bg-[#e2e7df]'
              }`}
            >
              <span
                aria-hidden
                className={`inline-flex size-5 shrink-0 items-center justify-center rounded-[5px] border-2 ${
                  on ? 'border-white bg-white text-green' : 'border-muted'
                }`}
              >
                {on && <Check size={13} strokeWidth={3.5} />}
              </span>
              {extra.label}
            </button>
          )
        })}
      </div>

      <div className="mt-5 rounded-xl bg-ground-2 p-4" aria-live="polite">
        {suggestion ? (
          <>
            <p className="text-sm text-muted">
              {selected.length} {selected.length === 1 ? 'area' : 'areas'} marked: {selected.map(labelFor).join(', ')}
            </p>
            <p className="mt-1 font-display text-lg font-bold leading-snug">
              Closest match: {suggestion.title}
            </p>
          </>
        ) : (
          <p className="text-muted">Mark one or more areas to see which approach is the closest match.</p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <a href="#estimate" className="text-link">
          Add These Areas to the Enquiry Form
        </a>
        {selected.length > 0 && (
          <button type="button" onClick={clear} className="text-link text-muted">
            <RotateCcw aria-hidden size={16} /> Clear
          </button>
        )}
      </div>
    </div>
  )
}
