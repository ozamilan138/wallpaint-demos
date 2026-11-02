import { useState } from 'react'
import { Check, MessageCircle } from 'lucide-react'
import { palettes } from '../data/content'
import { RoomPreview } from './RoomPreview'
import { WhatsAppAction } from './contact/ContactActions'
import { paletteMessage } from '../lib/contact'

const roles = ['Walls', 'Feature wall', 'Trim and ceiling', 'Accents']

export function ColourInspiration() {
  const [selectedId, setSelectedId] = useState(palettes[0].id)
  const palette = palettes.find((p) => p.id === selectedId) ?? palettes[0]
  const message = paletteMessage(
    palette.name,
    palette.swatches.map((s) => s.name),
  )

  return (
    <section id="colours" aria-labelledby="colours-title" className="bg-linen">
      <div className="page-x mx-auto max-w-page py-24 sm:py-32 lg:py-40">
        {/*
          On a phone the order is: heading, room preview, palette choices, call to action.
          On a desktop the heading and the choices are on the left, and the preview is on the right.
        */}
        <div className="grid gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] lg:gap-x-8 lg:gap-y-10">
          <div className="lg:col-span-5 lg:row-start-1">
            <h2 id="colours-title" data-reveal className="text-[clamp(2.4rem,1.5rem+3vw,4.25rem)] leading-[1.02]">
              Colour Inspiration
            </h2>
            <p
              data-reveal
              style={{ ['--reveal-delay' as string]: '80ms' }}
              className="mt-6 max-w-[30rem] text-[18px] leading-[1.6]"
            >
              Choose a palette to see it on the walls of the room. When one feels right, send it to us and we can talk
              it through.
            </p>
          </div>

          <fieldset
            data-reveal
            style={{ ['--reveal-delay' as string]: '140ms' }}
            className="lg:col-span-5 lg:row-start-2 lg:self-start"
          >
            <legend className="sr-only">Choose a colour palette</legend>
            <div className="grid gap-2 sm:gap-3">
              {palettes.map((p) => {
                const checked = p.id === selectedId
                return (
                  <label
                    key={p.id}
                    className={`group relative grid cursor-pointer grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 p-4 transition-colors duration-200 sm:grid-cols-[auto_1fr_auto] sm:gap-x-5 sm:p-5 ${
                      checked ? 'bg-paper' : 'bg-transparent hover:bg-paper/60'
                    } has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-bronze`}
                  >
                    <input
                      type="radio"
                      name="palette"
                      value={p.id}
                      checked={checked}
                      onChange={() => setSelectedId(p.id)}
                      className="sr-only"
                    />
                    <span aria-hidden className="flex shrink-0 pr-2">
                      {p.swatches.map((s) => (
                        <span
                          key={s.hex}
                          className="-mr-2 h-10 w-10 rounded-full border-2 border-paper sm:h-11 sm:w-11"
                          style={{ backgroundColor: s.hex }}
                        />
                      ))}
                    </span>
                    <span className="col-span-2 row-start-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                      <span className="block font-serif text-[24px] font-semibold leading-tight">{p.name}</span>
                      <span className="mt-0.5 block text-[15px] leading-snug text-muted">{p.mood}</span>
                    </span>
                    <span
                      aria-hidden
                      className={`col-start-2 row-start-1 grid h-7 w-7 shrink-0 place-items-center justify-self-end rounded-full transition-colors duration-200 sm:col-start-3 ${
                        checked ? 'bg-night text-paper' : 'border border-ink/25'
                      }`}
                    >
                      {checked && <Check size={15} strokeWidth={2.5} />}
                    </span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          <div className="row-start-2 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:pl-8">
            <div data-reveal className="overflow-hidden bg-paper">
              <RoomPreview palette={palette} />
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4" aria-label={`Colours in ${palette.name}`}>
              {palette.swatches.map((s, i) => (
                <li key={s.name} className="flex items-center gap-3 sm:block">
                  <span
                    aria-hidden
                    className="room-fill block h-12 w-12 shrink-0 sm:h-16 sm:w-full"
                    style={{ backgroundColor: s.hex, transition: 'background-color 600ms ease' }}
                  />
                  <span className="sm:mt-3 sm:block">
                    <span className="block text-[13px] text-muted">{roles[i]}</span>
                    <span className="block text-[16px] font-medium leading-snug">{s.name}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8 lg:col-span-7 lg:col-start-6 lg:row-start-3 lg:pl-8">
            <WhatsAppAction message={message} className="btn btn-dark w-full shrink-0 sm:w-auto">
              <MessageCircle aria-hidden size={18} />
              Discuss Your Colour Ideas
            </WhatsAppAction>
            <p className="text-[14px] leading-[1.55] text-muted">
              Screen colours are only a guide. Colours look different on each screen and in each room, so always check
              physical paint samples in your own light before you choose a final shade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
