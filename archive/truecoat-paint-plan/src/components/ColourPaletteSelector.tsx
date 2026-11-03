import { useState } from 'react'
import { ArrowDown, Check, Info } from 'lucide-react'
import { palettes, roleLabels } from '../data/planner'
import type { Palette } from '../data/types'
import { needsChip, textOn } from '../lib/colour'
import { usePlan } from '../lib/plan'
import { StepHeader } from './StepHeader'

/** The number of palettes to show before the visitor chooses a style. */
const DEFAULT_COUNT = 6

/** Step 3: the visitor selects a colour palette. The cards are native radio buttons. */
export function ColourPaletteSelector() {
  const { style, palette, setPalette } = usePlan()
  const [showAll, setShowAll] = useState(false)

  // Without a style, show the six main palettes first. With a style, show the palettes for it.
  const shortList = style ? palettes.filter((p) => p.styles.includes(style.id)) : palettes.slice(0, DEFAULT_COUNT)
  // Keep the selected palette in view, also if the short list does not contain it.
  const visible = showAll
    ? palettes
    : palette && !shortList.some((p) => p.id === palette.id)
      ? [...shortList, palette]
      : shortList

  return (
    <fieldset className="min-w-0">
      <legend className="sr-only">Step 3: Explore colour combinations</legend>
      <StepHeader step={3} id="step-palette" title="Explore Colour Combinations" selected={palette?.name ?? null} />
      <p className="mt-3 max-w-[40rem] text-base text-muted">
        {showAll
          ? `All ${palettes.length} palettes.`
          : style
            ? `These ${shortList.length} palettes suit the ${style.name} style.`
            : `Six popular palettes. Choose a style above to see the best matches.`}
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {visible.map((p) => (
          <PaletteCard key={p.id} palette={p} checked={palette?.id === p.id} onSelect={() => setPalette(p.id)} />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="button" className="btn btn-soft" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
          {showAll ? (style ? `Show Only ${style.name} Palettes` : 'Show Fewer Palettes') : `Show All ${palettes.length} Palettes`}
        </button>
        {palette && (
          <a href="#your-plan" className="btn btn-dark lg:hidden">
            See Your Plan
            <ArrowDown aria-hidden="true" className="size-5" />
          </a>
        )}
        <p className="flex max-w-[34rem] gap-2 text-base leading-normal text-muted">
          <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-sage-deep" />
          Screen colours are approximate. Light changes how a colour looks, so test a real paint sample on your wall
          before you decide.
        </p>
      </div>
    </fieldset>
  )
}

function PaletteCard({ palette, checked, onSelect }: { palette: Palette; checked: boolean; onSelect: () => void }) {
  return (
    <label
      className={`flex cursor-pointer flex-col rounded-card bg-paper p-4 transition-shadow has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-sage-deep sm:p-5 ${
        checked ? 'choice-on' : 'choice-off'
      }`}
    >
      <input
        type="radio"
        name="planner-palette"
        value={palette.id}
        checked={checked}
        onChange={onSelect}
        aria-label={`${palette.name}: ${palette.colours.map((c) => c.name).join(', ')}`}
        aria-describedby={`palette-desc-${palette.id}`}
        className="sr-only"
      />
      <span className="flex items-start justify-between gap-3">
        <span className="font-heading text-[1.375rem] font-extrabold leading-tight">{palette.name}</span>
      </span>
      <span id={`palette-desc-${palette.id}`} className="mt-1.5 text-base leading-normal text-ink">
        {palette.description}
      </span>
      {/* The paint strip: one row for each colour, like a paint chip card. */}
      <span className="mt-4 flex flex-col overflow-hidden rounded-[4px]">
        {palette.colours.map((c) => {
          const chip = needsChip(c.hex)
          const ink = chip ? '#29342E' : textOn(c.hex)
          // On mid-tone swatches the text sits on a light chip, so it keeps a 4.5:1 contrast.
          const chipClass = chip ? 'rounded-[4px] bg-paper px-1.5' : ''
          return (
            <span
              key={c.hex + c.name}
              className="flex min-h-12 items-center justify-between gap-3 px-3 py-2"
              style={{ background: c.hex, color: ink }}
            >
              <span className={`min-w-0 py-0.5 ${chipClass}`}>
                <span className="block font-ui text-[1rem] font-bold leading-tight">{c.name}</span>
                <span className="block font-ui text-sm font-medium leading-tight">{roleLabels[c.role]}</span>
              </span>
              <span className={`shrink-0 py-0.5 font-ui text-sm font-semibold tabular-nums ${chipClass}`}>{c.hex}</span>
            </span>
          )
        })}
      </span>
      <span
        aria-hidden="true"
        className={`mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 font-ui text-base font-semibold ${
          checked ? 'bg-sage-deep text-paper' : 'bg-sage-soft text-ink'
        }`}
      >
        {checked ? (
          <>
            <Check className="size-5" /> Selected
          </>
        ) : (
          'Select Palette'
        )}
      </span>
    </label>
  )
}
