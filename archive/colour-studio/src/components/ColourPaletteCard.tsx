import { Check } from 'lucide-react'
import type { Palette } from '../data/colourDiscovery'
import { readableTextOn } from '../lib/colour'

interface Props {
  palette: Palette
  checked: boolean
  onSelect: () => void
}

/** One palette in step 3. It is a radio option inside the palette group. */
export function ColourPaletteCard({ palette, checked, onSelect }: Props) {
  return (
    <label
      className={`flex cursor-pointer flex-col rounded-3xl bg-white p-3 transition-shadow duration-200 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-terracotta-deep ${
        checked ? 'ring-[3px] ring-ink' : 'ring-1 ring-ink/10 hover:ring-ink/30'
      }`}
    >
      <input type="radio" name="palette" value={palette.id} checked={checked} onChange={onSelect} className="sr-only" />
      <span className="grid grid-cols-2 overflow-hidden rounded-2xl sm:grid-cols-4">
        {palette.colours.map((c) => {
          const text = readableTextOn(c.hex)
          return (
            <span
              key={c.hex}
              className="flex min-h-24 flex-col justify-end p-3 sm:min-h-36"
              style={{ backgroundColor: c.hex, color: text }}
            >
              <span className="text-sm leading-tight font-semibold">{c.name}</span>
              <span className="mt-0.5 text-[13px] leading-tight opacity-85">{c.hex}</span>
            </span>
          )
        })}
      </span>
      <span className="flex flex-1 flex-col gap-1.5 px-2 pt-4 pb-2">
        <span className="font-display text-xl font-bold tracking-tight">{palette.name}</span>
        <span className="text-[15px] leading-snug text-muted">{palette.description}</span>
      </span>
      <span
        aria-hidden
        className={`mx-2 mt-2 mb-1 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full px-5 text-[15px] font-semibold transition-colors duration-200 ${
          checked ? 'bg-ink text-cream' : 'bg-paper text-ink'
        }`}
      >
        {checked && <Check className="size-4" strokeWidth={3} />}
        {checked ? 'Selected' : 'Select Palette'}
      </span>
    </label>
  )
}
