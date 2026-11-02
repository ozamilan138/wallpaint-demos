// A simple drawing of the selected room, painted with the selected palette.
// It is an illustration for inspiration. It does not show the real paint colour on a real wall.

import type { Palette, RoomId } from '../data/types'
import { luminance } from '../lib/colour'

interface Paint {
  main: string
  feature: string
  trim: string
  accent: string
  ceiling: string
}

const UNPAINTED: Paint = { main: '#ECEAE4', feature: '#DEDBD3', trim: '#FFFFFF', accent: '#C9C3B8', ceiling: '#F6F5F1' }

function paintFrom(palette: Palette | null): Paint {
  if (!palette) return UNPAINTED
  const pick = (role: string) => palette.colours.find((c) => c.role === role)?.hex
  const lightest = [...palette.colours].sort((a, b) => luminance(b.hex) - luminance(a.hex))[0].hex
  return {
    main: pick('main') ?? UNPAINTED.main,
    feature: pick('feature') ?? UNPAINTED.feature,
    trim: pick('trim') ?? UNPAINTED.trim,
    accent: pick('accent') ?? UNPAINTED.accent,
    ceiling: lightest,
  }
}

const FLOOR = '#B48D69'
const FLOOR_DARK = '#9C7656'
const WOOD = '#8A6A4F'
const FABRIC = '#B9AE9F'
const LEAF = '#5F7356'

export function RoomPreview({ room, palette, label }: { room: RoomId | null; palette: Palette | null; label: string }) {
  const p = paintFrom(palette)
  const f = (fill: string) => ({ style: { fill }, 'data-fill': '' })

  if (room === 'exterior') {
    return (
      <svg viewBox="0 0 400 260" role="img" aria-label={label} className="room-preview block h-auto w-full">
        <rect width="400" height="260" fill="#E3ECF0" />
        <circle cx="340" cy="52" r="22" fill="#F6E7C8" />
        <rect y="214" width="400" height="46" fill="#A8B89A" />
        <rect x="90" y="96" width="220" height="120" {...f(p.main)} />
        <rect x="90" y="196" width="220" height="20" {...f(p.feature)} />
        <polygon points="70,102 200,34 330,102" fill="#4A4F4D" />
        <rect x="66" y="98" width="268" height="8" {...f(p.trim)} />
        <rect x="178" y="148" width="44" height="68" {...f(p.accent)} />
        <rect x="174" y="144" width="52" height="6" {...f(p.trim)} />
        <circle cx="214" cy="184" r="2.5" fill="#29342E" />
        {[112, 244].map((x) => (
          <g key={x}>
            <rect x={x} y="120" width="44" height="40" {...f(p.trim)} />
            <rect x={x + 5} y="125" width="34" height="30" fill="#BFD0DA" />
            <rect x={x + 20} y="125" width="4" height="30" {...f(p.trim)} />
          </g>
        ))}
        <rect x="168" y="216" width="64" height="8" fill="#CFC8BC" />
        <circle cx="62" cy="196" r="22" fill={LEAF} />
        <circle cx="342" cy="200" r="18" fill={LEAF} />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 400 260" role="img" aria-label={label} className="room-preview block h-auto w-full">
      {/* Walls, ceiling and floor */}
      <polygon points="0,0 400,0 320,40 80,40" {...f(p.ceiling)} />
      <polygon points="0,0 80,40 80,190 0,260" {...f(p.main)} />
      <polygon points="400,0 320,40 320,190 400,260" {...f(p.main)} />
      <rect x="80" y="40" width="240" height="150" {...f(p.feature)} />
      <polygon points="0,260 80,190 320,190 400,260" fill={FLOOR} />
      <polygon points="80,190 320,190 330,198 70,198" fill={FLOOR_DARK} opacity="0.35" />
      {/* Trim: skirting boards and the window frame */}
      <rect x="80" y="183" width="240" height="7" {...f(p.trim)} />
      <polygon points="0,251 80,184 80,190 0,260" {...f(p.trim)} />
      <polygon points="400,251 320,184 320,190 400,260" {...f(p.trim)} />
      <polygon points="18,74 60,92 60,152 18,174" {...f(p.trim)} />
      <polygon points="24,82 54,95 54,148 24,164" fill="#DCE8EE" />
      {room === 'bedroom' && <Bedroom p={p} f={f} />}
      {room === 'kitchen' && <Kitchen p={p} f={f} />}
      {room === 'dining' && <Dining p={p} f={f} />}
      {(room === 'living' || room === null) && <Living p={p} f={f} />}
    </svg>
  )
}

type FillFn = (fill: string) => { style: { fill: string }; 'data-fill': string }

function Frame({ p, f, x = 170, y = 68, w = 60, h = 42 }: { p: Paint; f: FillFn; x?: number; y?: number; w?: number; h?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} {...f(p.trim)} />
      <rect x={x + 5} y={y + 5} width={w - 10} height={h - 10} {...f(p.accent)} />
    </g>
  )
}

function Plant({ x }: { x: number }) {
  return (
    <g>
      <circle cx={x} cy="138" r="14" fill={LEAF} />
      <circle cx={x - 9} cy="150" r="11" fill={LEAF} />
      <circle cx={x + 9} cy="152" r="10" fill="#6E8464" />
      <rect x={x - 9} y="160" width="18" height="24" rx="2" fill="#D9CBB4" />
    </g>
  )
}

function Living({ p, f }: { p: Paint; f: FillFn }) {
  return (
    <g>
      <Frame p={p} f={f} />
      <rect x="128" y="128" width="144" height="34" rx="6" fill={FABRIC} />
      <rect x="120" y="150" width="160" height="30" rx="6" fill="#ADA192" />
      <rect x="116" y="140" width="16" height="40" rx="5" fill={FABRIC} />
      <rect x="268" y="140" width="16" height="40" rx="5" fill={FABRIC} />
      <rect x="142" y="136" width="30" height="22" rx="4" {...f(p.accent)} />
      <rect x="228" y="136" width="30" height="22" rx="4" {...f(p.accent)} />
      <rect x="128" y="180" width="6" height="8" fill={WOOD} />
      <rect x="266" y="180" width="6" height="8" fill={WOOD} />
      <Plant x={300} />
    </g>
  )
}

function Bedroom({ p, f }: { p: Paint; f: FillFn }) {
  return (
    <g>
      <Frame p={p} f={f} x={165} y={60} w={70} h={38} />
      <rect x="142" y="112" width="116" height="52" rx="6" fill="#9C8F80" />
      <rect x="132" y="150" width="136" height="34" rx="4" fill="#F7F5F0" />
      <rect x="132" y="164" width="136" height="20" rx="3" {...f(p.accent)} />
      <rect x="150" y="138" width="40" height="16" rx="5" fill="#FFFFFF" />
      <rect x="210" y="138" width="40" height="16" rx="5" fill="#FFFFFF" />
      {[104, 276].map((x) => (
        <g key={x}>
          <rect x={x} y="158" width="22" height="26" rx="2" fill={WOOD} />
          <rect x={x + 9} y="138" width="4" height="20" fill="#4A4F4D" />
          <polygon points={`${x + 3},140 ${x + 19},140 ${x + 15},126 ${x + 7},126`} fill="#F3E3C3" />
        </g>
      ))}
    </g>
  )
}

function Kitchen({ p, f }: { p: Paint; f: FillFn }) {
  return (
    <g>
      <rect x="96" y="52" width="208" height="42" rx="2" {...f(p.accent)} />
      {[148, 200, 252].map((x) => (
        <rect key={x} x={x} y="52" width="2" height="42" fill="#29342E" opacity="0.18" />
      ))}
      <rect x="96" y="94" width="208" height="42" fill="#F4F2EC" />
      <rect x="196" y="100" width="40" height="28" {...f(p.trim)} />
      <rect x="201" y="104" width="30" height="20" fill="#DCE8EE" />
      <rect x="86" y="134" width="228" height="8" fill="#E2DED6" />
      <rect x="90" y="142" width="220" height="44" {...f(p.accent)} />
      {[145, 200, 255].map((x) => (
        <rect key={x} x={x} y="142" width="2" height="44" fill="#29342E" opacity="0.18" />
      ))}
      {[118, 172, 228, 282].map((x) => (
        <rect key={x} x={x} y="150" width="12" height="3" rx="1.5" fill="#29342E" opacity="0.55" />
      ))}
      <circle cx="122" cy="124" r="8" fill={LEAF} />
      <rect x="116" y="126" width="12" height="10" rx="2" fill="#D9CBB4" />
    </g>
  )
}

function Dining({ p, f }: { p: Paint; f: FillFn }) {
  return (
    <g>
      <Frame p={p} f={f} x={150} y={58} w={100} h={40} />
      <rect x="199" y="40" width="2" height="54" fill="#4A4F4D" />
      <polygon points="186,108 214,108 208,94 192,94" {...f(p.accent)} />
      {[134, 248].map((x) => (
        <g key={x}>
          <rect x={x} y="124" width="18" height="34" rx="4" fill={FABRIC} />
          <rect x={x} y="156" width="18" height="6" fill={WOOD} />
          <rect x={x + 1} y="162" width="3" height="24" fill={WOOD} />
          <rect x={x + 14} y="162" width="3" height="24" fill={WOOD} />
        </g>
      ))}
      <rect x="150" y="146" width="100" height="8" rx="2" fill={WOOD} />
      <rect x="158" y="154" width="5" height="32" fill={WOOD} />
      <rect x="237" y="154" width="5" height="32" fill={WOOD} />
      <circle cx="200" cy="140" r="6" {...f(p.accent)} />
    </g>
  )
}
