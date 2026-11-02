import type { Palette } from '../../data/palettes'

/** A row of paint chips for the selected palette, or empty chips when there is no palette. */
export function PaletteStrip({ palette, className = '', tall = false }: { palette: Palette | null; className?: string; tall?: boolean }) {
  return (
    <div className={`flex gap-1.5 ${className}`} aria-hidden>
      {palette
        ? palette.swatches.map((s) => (
            <span
              key={s.hex}
              className={`flex-1 rounded-lg ring-1 ring-ink/10 ring-inset transition-colors duration-500 ${tall ? 'h-20 sm:h-24' : 'h-12'}`}
              style={{ background: s.hex }}
            />
          ))
        : [0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`flex-1 rounded-lg bg-ink/[0.07] ${tall ? 'h-20 sm:h-24' : 'h-12'}`}
            />
          ))}
    </div>
  )
}
