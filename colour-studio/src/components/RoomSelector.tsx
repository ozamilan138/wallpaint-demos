import { Check } from 'lucide-react'
import { rooms, type RoomId } from '../data/colourDiscovery'
import { Img } from './Img'

interface Props {
  value: RoomId | null
  onChange: (id: RoomId) => void
}

/** Step 1. A radio group of rooms. Arrow keys move between the options. */
export function RoomSelector({ value, onChange }: Props) {
  return (
    <fieldset>
      <legend className="sr-only">Select your room</legend>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {rooms.map((room, i) => {
          const checked = value === room.id
          return (
            <label
              key={room.id}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white transition-shadow duration-200 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-terracotta-deep ${
                checked ? 'ring-[3px] ring-ink' : 'ring-1 ring-ink/10 hover:ring-ink/30'
              } ${i === rooms.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <input
                type="radio"
                name="room"
                value={room.id}
                checked={checked}
                onChange={() => onChange(room.id)}
                className="sr-only"
              />
              <span className={`photo-zoom block overflow-hidden lg:aspect-[4/5] ${i === rooms.length - 1 ? 'aspect-[2/1] sm:aspect-[4/3]' : 'aspect-[4/3]'}`}>
                <Img
                  name={room.image}
                  alt=""
                  sizes="(min-width: 1024px) 14vw, (min-width: 640px) 30vw, 46vw"
                  className="size-full object-cover"
                />
              </span>
              <span className="flex min-h-14 items-center justify-between gap-2 px-3.5 py-3 text-base font-semibold">
                {room.label}
                <span
                  aria-hidden
                  className={`inline-flex size-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                    checked ? 'bg-ink text-cream' : 'ring-1 ring-ink/25'
                  }`}
                >
                  {checked && <Check className="size-4" strokeWidth={3} />}
                </span>
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
