import { ColourPaletteSelector } from './ColourPaletteSelector'
import { MoodSelector } from './MoodSelector'
import { RoomSelector } from './RoomSelector'
import { SelectedPaletteSummary } from './SelectedPaletteSummary'

/** The signature feature: three simple steps and a plan card that the visitor can send on WhatsApp. */
export function ColourPlanner() {
  return (
    <section id="explore-colours" aria-labelledby="planner-title" className="py-20 sm:py-28 lg:py-32">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end lg:gap-12">
          <h2 id="planner-title" className="h-section max-w-[16ch]" data-reveal>
            Start Planning Your Perfect Space.
          </h2>
          <p className="lede" data-reveal style={{ ['--d' as string]: 1 }}>
            Pick a room, a style and a colour palette. Choose in any order and skip what you are not sure about. Your plan
            fills in as you go.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div className="flex min-w-0 flex-col gap-14 sm:gap-16">
            <RoomSelector />
            <MoodSelector />
            <ColourPaletteSelector />
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SelectedPaletteSummary />
          </div>
        </div>
      </div>
    </section>
  )
}
