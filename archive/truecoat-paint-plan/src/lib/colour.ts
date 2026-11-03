// Colour helpers for swatch labels.

function channel(value: number): number {
  const v = value / 255
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
}

/** Returns the relative luminance of a hex colour (WCAG formula). */
export function luminance(hex: string): number {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
}

export function contrast(a: string, b: string): number {
  const la = luminance(a)
  const lb = luminance(b)
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05)
}

const DARK_TEXT = '#29342E'
const LIGHT_TEXT = '#FFFFFF'

/** Returns the text colour (dark or light) that has the higher contrast on the swatch. */
export function textOn(hex: string): string {
  return contrast(hex, DARK_TEXT) >= contrast(hex, LIGHT_TEXT) ? DARK_TEXT : LIGHT_TEXT
}

/** True if the best text colour on the swatch is still below WCAG AA (4.5:1). The label then needs a chip. */
export function needsChip(hex: string): boolean {
  return Math.max(contrast(hex, DARK_TEXT), contrast(hex, LIGHT_TEXT)) < 4.5
}
