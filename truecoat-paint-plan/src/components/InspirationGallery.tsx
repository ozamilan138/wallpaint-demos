import { useState } from 'react'
import { ArrowUp, Check } from 'lucide-react'
import { inspiration } from '../data/content'
import { rooms } from '../data/planner'
import type { RoomId } from '../data/types'
import { usePlan } from '../lib/plan'
import { Img } from './Img'

const stripColours = ['#DCE7DB', '#E9DCC7', '#A9BDC9']

/** Room inspiration: the visitor clicks a category to see photos of that room type. */
export function InspirationGallery() {
  const [active, setActive] = useState<RoomId>('living')
  const { setRoom } = usePlan()
  const activeRoom = rooms.find((r) => r.id === active)!
  const items = inspiration.filter((i) => i.room === active)

  const planThisRoom = () => {
    setRoom(active)
    document.getElementById('step-room')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="inspiration" aria-labelledby="inspiration-title" className="bg-beige/45 py-20 sm:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 id="inspiration-title" className="h-section" data-reveal>
            Need a Little Inspiration?
          </h2>
          <p className="lede lg:justify-self-end" data-reveal style={{ ['--d' as string]: 1 }}>
            Choose a type of room to see ideas for colours and finishes. All photos here are demo images for inspiration.
          </p>
        </div>

        <div role="group" aria-label="Room types" className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {rooms.map((r, i) => {
            const pressed = r.id === active
            const thumb = inspiration.find((x) => x.room === r.id)!
            return (
              <button
                key={r.id}
                type="button"
                aria-pressed={pressed}
                onClick={() => setActive(r.id)}
                className={`flex min-h-16 items-center gap-3 rounded-card p-2 pr-3 text-left font-ui text-[1rem] leading-tight transition-colors ${
                  pressed ? 'bg-ink font-bold text-paper' : 'bg-paper font-medium text-ink hover:bg-sage-soft'
                } ${i === rooms.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <Img name={thumb.image} alt="" sizes="48px" className="size-12 shrink-0 rounded-[4px]" />
                <span className="flex-1">{r.plural}</span>
                {pressed && <Check aria-hidden="true" className="size-5 shrink-0" />}
              </button>
            )
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {items.length} photos of {activeRoom.plural.toLowerCase()}.
        </p>

        <ul key={active} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map((item, i) => (
            <li
              key={item.image}
              data-reveal
              style={{ ['--d' as string]: i }}
              className={`flex flex-col overflow-hidden rounded-card ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="relative">
                <Img
                  name={item.image}
                  alt={item.alt}
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
                  className={`w-full ${i === 0 ? 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/5]' : 'aspect-[4/3] lg:aspect-[4/5]'}`}
                />
                <span className="demo-tag absolute left-3 top-3">Demo image</span>
              </div>
              <div className="flex min-h-[5.5rem] flex-col justify-center gap-1 px-4 py-3" style={{ background: stripColours[i % 3] }}>
                <span className="font-heading text-[1.0625rem] font-bold leading-snug">{item.caption}</span>
                <span className="font-ui text-sm font-medium text-ink/80">{activeRoom.plural}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button type="button" onClick={planThisRoom} className="btn btn-dark">
            <ArrowUp aria-hidden="true" className="size-5" />
            Plan Colours for {activeRoom.id === 'exterior' ? 'My Exterior' : `My ${activeRoom.name}`}
          </button>
        </div>
      </div>
    </section>
  )
}
