import { ColourPaletteExplorer } from './ColourPaletteExplorer'
import { MoodSelector } from './MoodSelector'
import { PlannerProgress } from './PlannerProgress'
import { ProjectPlanner } from './ProjectPlanner'
import { ProjectSummary } from './ProjectSummary'
import { RoomSelector } from './RoomSelector'
import { SelectedPaletteSummary } from './SelectedPaletteSummary'
import { usePlanner } from '../../lib/planner'

/**
 * The colour planner: room, mood, palette, project details and summary.
 * Every step is optional. The state lives in PlannerProvider, so that other
 * sections (hero chips, footer links, enquiry form) can use it too.
 */
export function ColourPlanner() {
  const { step, count, goTo } = usePlanner()

  return (
    <section id="explore" aria-labelledby="planner-title" className="section-gap bg-surface">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="planner-title" className="h2 lg:col-span-7">
            Plan Your Colours in a Few Easy Choices
          </h2>
          <p className="text-lg leading-relaxed text-ink/85 lg:col-span-5">
            Pick a room, a mood and a palette, then add a few project details. Every choice is optional, and you can change
            it at any time.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="min-w-0">
            <PlannerProgress />
            {step !== 'summary' && count > 0 && (
              <p className="font-ui mt-3 text-[15px] text-muted lg:hidden">
                {count} of 8 choices made.{' '}
                <button type="button" className="link min-h-11" onClick={() => goTo('summary')}>
                  See My Summary
                </button>
              </p>
            )}
            <div className="mt-8 rounded-3xl bg-ground p-4 sm:p-7 lg:p-8">
              {step === 'room' && <RoomSelector />}
              {step === 'mood' && <MoodSelector />}
              {step === 'palette' && <ColourPaletteExplorer />}
              {step === 'project' && <ProjectPlanner />}
              {step === 'summary' && <ProjectSummary />}
            </div>
          </div>

          <aside className="hidden lg:block" aria-label="Your choices so far">
            <div className="sticky top-24">
              <SelectedPaletteSummary />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
