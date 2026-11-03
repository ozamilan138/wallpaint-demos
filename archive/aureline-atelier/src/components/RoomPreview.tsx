import type { Palette } from '../data/content'

interface RoomPreviewProps {
  palette: Palette
}

/**
 * A flat drawing of a living room wall. The wall, the feature wall, the trim and the accents
 * take the four colours of the selected palette. Floor and furniture stay neutral.
 */
export function RoomPreview({ palette }: RoomPreviewProps) {
  const [wall, feature, trim, detail] = palette.swatches.map((s) => s.hex)

  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-labelledby="room-preview-title"
      className="block h-auto w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <title id="room-preview-title">
        {`A drawing of a living room in the ${palette.name} palette: walls in ${palette.swatches[0].name}, a feature wall in ${palette.swatches[1].name}, trim in ${palette.swatches[2].name} and accents in ${palette.swatches[3].name}.`}
      </title>

      {/* Ceiling and cornice */}
      <rect className="room-fill" x="0" y="0" width="800" height="46" fill={trim} />
      <rect x="0" y="46" width="800" height="5" fill="#000" opacity="0.06" />

      {/* Main wall and feature wall */}
      <rect className="room-fill" x="0" y="51" width="800" height="425" fill={wall} />
      <rect className="room-fill" x="452" y="51" width="348" height="425" fill={feature} />
      <rect x="452" y="51" width="6" height="425" fill="#000" opacity="0.05" />

      {/* Window with soft daylight */}
      <rect className="room-fill" x="70" y="104" width="214" height="268" fill={trim} />
      <rect x="84" y="118" width="186" height="240" fill="#E9ECE6" />
      <rect x="84" y="118" width="186" height="240" fill="#F7F4EC" opacity="0.55" />
      <rect className="room-fill" x="173" y="118" width="8" height="240" fill={trim} />
      <rect className="room-fill" x="84" y="232" width="186" height="8" fill={trim} />
      <rect className="room-fill" x="58" y="372" width="238" height="12" fill={trim} />
      <path d="M84 358 L170 118 L190 118 L104 358 Z" fill="#FFFFFF" opacity="0.35" />

      {/* Daylight on the floor */}
      <path d="M96 490 L282 490 L330 600 L40 600 Z" fill="#FFFFFF" opacity="0.14" />

      {/* Framed art on the feature wall */}
      <rect className="room-fill" x="548" y="128" width="156" height="118" fill={detail} />
      <rect x="558" y="138" width="136" height="98" fill="#F4F1EA" />
      <circle className="room-fill" cx="606" cy="190" r="26" fill={feature} opacity="0.85" />
      <rect className="room-fill" x="628" y="172" width="44" height="44" fill={wall} />

      {/* Skirting board */}
      <rect className="room-fill" x="0" y="462" width="800" height="22" fill={trim} />
      <rect x="0" y="484" width="800" height="4" fill="#000" opacity="0.08" />

      {/* Oak floor */}
      <rect x="0" y="488" width="800" height="112" fill="#C8AC88" />
      <g stroke="#B2946F" strokeWidth="2" opacity="0.6">
        <line x1="0" y1="520" x2="800" y2="520" />
        <line x1="0" y1="558" x2="800" y2="558" />
        <line x1="140" y1="488" x2="140" y2="520" />
        <line x1="420" y1="488" x2="420" y2="520" />
        <line x1="680" y1="488" x2="680" y2="520" />
        <line x1="260" y1="520" x2="260" y2="558" />
        <line x1="560" y1="520" x2="560" y2="558" />
        <line x1="90" y1="558" x2="90" y2="600" />
        <line x1="380" y1="558" x2="380" y2="600" />
        <line x1="720" y1="558" x2="720" y2="600" />
      </g>

      {/* Floor lamp */}
      <rect className="room-fill" x="392" y="236" width="4" height="250" fill={detail} />
      <path d="M362 236 L426 236 L414 188 L374 188 Z" fill="#EFE7D8" />
      <rect className="room-fill" x="372" y="482" width="44" height="6" rx="3" fill={detail} />

      {/* Sofa */}
      <ellipse cx="636" cy="512" rx="190" ry="10" fill="#000" opacity="0.1" />
      <rect x="470" y="352" width="332" height="78" rx="14" fill="#E6DED1" />
      <rect x="456" y="402" width="356" height="86" rx="12" fill="#DDD3C3" />
      <rect x="440" y="380" width="40" height="108" rx="12" fill="#E6DED1" />
      <rect x="784" y="380" width="40" height="108" rx="12" fill="#E6DED1" />
      <rect className="room-fill" x="512" y="368" width="74" height="54" rx="10" fill={feature} opacity="0.9" />
      <rect className="room-fill" x="690" y="372" width="66" height="50" rx="10" fill={detail} />
      <rect className="room-fill" x="470" y="488" width="8" height="16" fill={detail} />
      <rect className="room-fill" x="788" y="488" width="8" height="16" fill={detail} />

      {/* Plant in a pot */}
      <path className="room-fill" d="M300 488 L344 488 L350 432 L294 432 Z" fill={detail} />
      <g fill="#7E8C6C">
        <ellipse cx="322" cy="396" rx="12" ry="40" transform="rotate(-24 322 396)" />
        <ellipse cx="322" cy="392" rx="12" ry="44" transform="rotate(18 322 392)" />
        <ellipse cx="322" cy="404" rx="10" ry="34" transform="rotate(-62 322 404)" />
        <ellipse cx="322" cy="404" rx="10" ry="34" transform="rotate(58 322 404)" />
      </g>
    </svg>
  )
}
