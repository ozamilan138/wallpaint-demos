import { Check } from 'lucide-react'
import { SelectedBadge } from './SelectedBadge'
import type { Palette } from '../../data/palettes'
import { readableTextOn } from '../../lib/colour'

interface Props {
  palette: Palette
  selected: boolean
  /** For example "Suits Warm & Comfortable". */
  note?: string
  onSelect: () => void
}

export function ColourPaletteCard({ palette, selected, note, onSelect }: Props) {
  const titleId = `palette-${palette.id}`
  return (
    <article
      aria-labelledby={titleId}
      className={`relative flex h-full flex-col rounded-2xl bg-white p-4 ring-[3px] transition-[box-shadow] duration-200 sm:p-5 ${selected ? 'ring-green' : 'ring-transparent'}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h4 id={titleId} className="text-[1.25rem] leading-tight font-extrabold tracking-[-0.01em]">
          {palette.name}
        </h4>
        {selected && <SelectedBadge />}
      </div>
      {note && <p className="font-ui mt-1 text-[14px] font-semibold text-green-deep">{note}</p>}
      <p className="mt-2 text-[16px] leading-snug text-ink/80">{palette.description}</p>

      <ul className="mt-4 grid grid-cols-4 gap-1.5 sm:gap-2" aria-label={`Colours in ${palette.name}`}>
        {palette.swatches.map((s) => {
          const text = readableTextOn(s.hex)
          return (
            <li
              key={s.hex}
              className="flex min-h-[6rem] flex-col justify-end rounded-lg p-2 ring-1 ring-ink/10 ring-inset sm:min-h-[6.5rem]"
              style={{ background: s.hex, color: text }}
            >
              <span className="font-ui text-[13px] leading-tight font-bold sm:text-[14px]">{s.name}</span>
              <span className="font-ui mt-0.5 text-[13px] font-medium">{s.hex}</span>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        aria-describedby={titleId}
        className={`btn mt-4 w-full ${selected ? 'btn-primary' : 'btn-secondary'}`}
      >
        {selected && <Check className="size-5" aria-hidden />}
        {selected ? 'Palette Selected' : 'Select Palette'}
      </button>
    </article>
  )
}
