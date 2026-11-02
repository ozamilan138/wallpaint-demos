import { Check } from 'lucide-react'
import { rooms } from '../data/planner'
import { usePlan } from '../lib/plan'
import { Img } from './Img'
import { StepHeader } from './StepHeader'

/** Step 1: the visitor selects a room. The cards are native radio buttons. */
export function RoomSelector() {
  const { room, setRoom } = usePlan()
  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">Step 1: Select your room</legend>
      <StepHeader step={1} id="step-room" title="Select Your Room" selected={room?.name ?? null} />
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-5">
        {rooms.map((r, i) => {
          const checked = room?.id === r.id
          return (
            <label
              key={r.id}
              className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-card bg-paper transition-shadow has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-sage-deep ${
                checked ? 'choice-on' : 'choice-off'
              } ${i === rooms.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <input
                type="radio"
                name="planner-room"
                value={r.id}
                checked={checked}
                onChange={() => setRoom(r.id)}
                className="sr-only"
              />
              <span className="relative block overflow-hidden">
                <Img
                  name={r.image}
                  alt=""
                  sizes="(min-width: 1280px) 160px, (min-width: 640px) 30vw, 50vw"
                  className={`aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.04] xl:aspect-square ${i === rooms.length - 1 ? 'aspect-[16/7] sm:aspect-[4/3]' : ''}`}
                />
                {checked && (
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-sage-deep py-1 pl-2 pr-3 font-ui text-sm font-semibold text-paper">
                    <Check aria-hidden="true" className="size-4" />
                    Selected
                  </span>
                )}
              </span>
              <span className={`flex min-h-12 items-center px-3 py-2 font-ui text-[1rem] leading-tight ${checked ? 'font-bold' : 'font-medium'}`}>
                {r.name}
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
