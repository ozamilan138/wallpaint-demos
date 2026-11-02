import { Img } from '../Img'
import { SelectedBadge } from './SelectedBadge'
import { StepFrame } from './StepFrame'
import { moods } from '../../data/moods'
import { findRoom } from '../../data/roomCategories'
import { usePlanner } from '../../lib/planner'

export function MoodSelector() {
  const { state, choose } = usePlanner()
  const room = findRoom(state.room)

  return (
    <StepFrame
      title="What Feeling Would You Like to Create?"
      intro={
        room
          ? `Pick the mood you want for your ${room.name.toLowerCase()}. We use it to suggest palettes.`
          : 'Pick the mood you want for your space. We use it to suggest palettes.'
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {moods.map((mood) => {
          const selected = state.mood === mood.id
          return (
            <li key={mood.id}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => choose('mood', selected ? null : mood.id)}
                className={`group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white text-left ring-[3px] transition-[box-shadow] duration-200 ${selected ? 'ring-green' : 'ring-transparent hover:ring-ink/20'}`}
              >
                <span className="photo-zoom block aspect-[16/9] overflow-hidden bg-surface">
                  <Img name={mood.image} alt="" sizes="(min-width: 640px) 380px, 90vw" className="size-full object-cover" />
                </span>
                <span className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                  <span className="font-display text-[1.2rem] font-extrabold tracking-[-0.01em]">{mood.name}</span>
                  <span className="text-[16px] leading-snug text-ink/80">{mood.description}</span>
                  <span className="mt-auto flex gap-1.5 pt-2" aria-hidden>
                    {mood.swatches.map((hex) => (
                      <span key={hex} className="h-7 flex-1 rounded-md ring-1 ring-ink/10 ring-inset" style={{ background: hex }} />
                    ))}
                  </span>
                </span>
                {selected && <SelectedBadge className="absolute top-3 left-3" />}
              </button>
            </li>
          )
        })}
      </ul>
    </StepFrame>
  )
}
