import { Img } from '../Img'
import { SelectedBadge } from './SelectedBadge'
import { StepFrame } from './StepFrame'
import { rooms } from '../../data/roomCategories'
import { usePlanner } from '../../lib/planner'

export function RoomSelector() {
  const { state, choose } = usePlanner()

  return (
    <StepFrame
      title="Where Would You Like to Start?"
      intro="Choose the space you are thinking about. You can change it later."
    >
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {rooms.map((room) => {
          const selected = state.room === room.id
          return (
            <li key={room.id}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => choose('room', selected ? null : room.id)}
                className={`group relative block w-full overflow-hidden rounded-2xl bg-white text-left ring-[3px] transition-[box-shadow] duration-200 ${selected ? 'ring-green' : 'ring-transparent hover:ring-ink/20'}`}
              >
                <span className="photo-zoom block aspect-[4/3] overflow-hidden bg-surface">
                  <Img name={room.image} alt="" sizes="(min-width: 768px) 260px, 45vw" className="size-full object-cover" />
                </span>
                <span className="font-ui flex min-h-14 items-center justify-between gap-2 px-3.5 py-2.5 text-[16px] font-bold sm:text-[17px]">
                  {room.name}
                </span>
                {selected && <SelectedBadge className="absolute top-2.5 left-2.5" />}
              </button>
            </li>
          )
        })}
      </ul>
    </StepFrame>
  )
}
