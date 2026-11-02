import { ColourNotice } from './ColourNotice'
import { ColourPaletteCard } from './ColourPaletteCard'
import { SelectedPaletteSummary } from './SelectedPaletteSummary'
import { StepFrame } from './StepFrame'
import { findMood } from '../../data/moods'
import { palettes } from '../../data/palettes'
import { usePlanner } from '../../lib/planner'

export function ColourPaletteExplorer() {
  const { state, choose } = usePlanner()
  const mood = findMood(state.mood)

  const suggested = mood ? palettes.filter((p) => p.moods.includes(mood.id)) : []
  const others = mood ? palettes.filter((p) => !p.moods.includes(mood.id)) : palettes

  const card = (id: string, note?: string) => {
    const p = palettes.find((x) => x.id === id)!
    const selected = state.palette === p.id
    return (
      <li key={p.id}>
        <ColourPaletteCard palette={p} selected={selected} note={note} onSelect={() => choose('palette', selected ? null : p.id)} />
      </li>
    )
  }

  return (
    <StepFrame
      title="Find a Colour Combination You Love"
      intro={
        mood
          ? `We put the palettes that suit ${mood.name} first. You can choose any palette.`
          : 'Choose the palette that you like most. Pick a mood first if you want suggestions.'
      }
    >
      <ColourNotice className="mb-6" />

      {suggested.length > 0 && (
        <>
          <h4 className="font-ui text-[17px] font-bold">Suggested for {mood!.name}</h4>
          <ul className="mt-3 grid gap-4 sm:grid-cols-2">{suggested.map((p) => card(p.id, `Suits ${mood!.name}`))}</ul>
          <h4 className="font-ui mt-8 text-[17px] font-bold">More Combinations</h4>
        </>
      )}
      <ul className={`grid gap-4 sm:grid-cols-2 ${suggested.length > 0 ? 'mt-3' : ''}`}>{others.map((p) => card(p.id))}</ul>

      {/* On small screens the side card is not visible, so the summary shows here. */}
      {state.palette && <SelectedPaletteSummary className="mt-8 lg:hidden" />}
    </StepFrame>
  )
}
