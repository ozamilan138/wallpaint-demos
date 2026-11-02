const INK = '#292B27'
const WHITE = '#FFFFFF'

function channel(value: number) {
  const c = value / 255
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}

/** Relative luminance as WCAG 2 defines it. */
export function luminance(hex: string) {
  const n = parseInt(hex.replace('#', ''), 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
}

export function contrastRatio(a: string, b: string) {
  const la = luminance(a)
  const lb = luminance(b)
  const [hi, lo] = la > lb ? [la, lb] : [lb, la]
  return (hi + 0.05) / (lo + 0.05)
}

/** Returns the ink colour or white, whichever has more contrast on the swatch. */
export function readableTextOn(hex: string) {
  return contrastRatio(hex, INK) >= contrastRatio(hex, WHITE) ? INK : WHITE
}
