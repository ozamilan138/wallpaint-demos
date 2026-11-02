import { useRef, type ReactNode } from 'react'
import { Info } from 'lucide-react'
import {
  findMood,
  findPalette,
  findRoom,
  palettesForMood,
  type MoodId,
  type RoomId,
} from '../data/colourDiscovery'
import { emptySelection, type Selection } from '../lib/selection'
import { ColourPaletteCard } from './ColourPaletteCard'
import { MoodSelector } from './MoodSelector'
import { RoomSelector } from './RoomSelector'
import { SectionHeading } from './Section'
import { SelectedPaletteSummary } from './SelectedPaletteSummary'


interface Props {
  selection: Selection
  onChange: (next: Selection) => void
}

/** Scrolls the next step into view on small screens, if it is below the fold. */
function bringIntoView(el: HTMLElement | null) {
  if (!el || window.innerWidth >= 1024) return
  const top = el.getBoundingClientRect().top
  if (top > window.innerHeight * 0.75) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  }
}

function Step({
  n,
  title,
  status,
  children,
  stepRef,
}: {
  n: number
  title: string
  status?: string
  children: ReactNode
  stepRef?: React.Ref<HTMLDivElement>
}) {
  const id = `step-${n}-title`
  return (
    <div ref={stepRef} role="group" aria-labelledby={id} className="scroll-mt-24">
      <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-cream" aria-hidden>
          {n}
        </span>
        <h3 id={id} className="text-xl font-bold tracking-tight sm:text-2xl">
          <span className="sr-only">Step {n}: </span>
          {title}
        </h3>
        {status && <span className="text-[15px] font-medium text-muted">{status}</span>}
      </div>
      {children}
    </div>
  )
}

export function ColourDiscovery({ selection, onChange }: Props) {
  const moodRef = useRef<HTMLDivElement>(null)
  const paletteRef = useRef<HTMLDivElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)

  const room = findRoom(selection.room)
  const mood = findMood(selection.mood)
  const palette = findPalette(selection.palette)
  const options = palettesForMood(selection.mood)

  const pickRoom = (id: RoomId) => {
    onChange({ ...selection, room: id })
    if (!selection.mood) requestAnimationFrame(() => bringIntoView(moodRef.current))
  }

  const pickMood = (id: MoodId) => {
    const stillValid = selection.palette && palettesForMood(id).some((p) => p.id === selection.palette)
    onChange({ ...selection, mood: id, palette: stillValid ? selection.palette : null })
    requestAnimationFrame(() => bringIntoView(paletteRef.current))
  }

  const pickPalette = (id: string) => {
    onChange({ ...selection, palette: id })
    requestAnimationFrame(() => bringIntoView(summaryRef.current))
  }

  return (
    <section id="explore" aria-labelledby="explore-title" className="bg-paper py-20 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionHeading id="explore-title" title="Let’s Find Your Perfect Colour.">
          Three simple choices. Pick a room, choose a mood, then compare palettes made for that mood.
        </SectionHeading>

        <div className="mt-12 flex flex-col gap-14 lg:mt-16">
          <Step n={1} title="Select your room" status={room ? `${room.label} selected` : undefined}>
            <RoomSelector value={selection.room} onChange={pickRoom} />
          </Step>

          <Step n={2} title="Select your mood" status={mood ? `${mood.label} selected` : undefined} stepRef={moodRef}>
            <MoodSelector value={selection.mood} onChange={pickMood} />
          </Step>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <Step
                n={3}
                title="Explore colour palettes"
                status={mood ? `${options.length} palettes for ${mood.label}` : undefined}
                stepRef={paletteRef}
              >
                {mood ? (
                  <fieldset>
                    <legend className="sr-only">Select a palette for {mood.label}</legend>
                    <div className="grid gap-4 md:grid-cols-2">
                      {options.map((p) => (
                        <ColourPaletteCard key={p.id} palette={p} checked={selection.palette === p.id} onSelect={() => pickPalette(p.id)} />
                      ))}
                    </div>
                  </fieldset>
                ) : (
                  <div className="flex min-h-40 flex-col items-start justify-center gap-4 rounded-3xl bg-cream p-6 sm:flex-row sm:items-center sm:p-8">
                    <span className="flex h-14 w-36 shrink-0 overflow-hidden rounded-xl" aria-hidden>
                      {['#F1E8D8', '#A7B69B', '#C27A5E', '#8EA3B5'].map((h) => (
                        <span key={h} className="flex-1" style={{ backgroundColor: h }} />
                      ))}
                    </span>
                    <p className="text-lg">Choose a mood above to see the palettes that match it.</p>
                  </div>
                )}
              </Step>

              <p className="mt-10 flex max-w-2xl gap-3 text-[15px] leading-relaxed text-muted">
                <Info className="mt-0.5 size-5 shrink-0" aria-hidden />
                <span>
                  This is a colour inspiration tool. It is not a paint matching system. Screen colours are illustrative and
                  change from screen to screen. Test physical paint samples in your room before you make a final decision.
                </span>
              </p>
            </div>

            <div ref={summaryRef} className="scroll-mt-24 lg:col-span-4 lg:pt-[3.75rem]">
              <div className="lg:sticky lg:top-24">
                <SelectedPaletteSummary room={room} mood={mood} palette={palette} onReset={() => onChange(emptySelection)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
