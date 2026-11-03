/** The TrueCoat wordmark: three paint-chip bars and the business name. */
export function Wordmark({ onNight = false }: { onNight?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span aria-hidden className="flex h-7 items-stretch gap-[3px]">
        <span className="w-[7px] rounded-[2px] bg-green" />
        <span className="w-[7px] rounded-[2px] bg-oat" />
        <span className={`w-[7px] rounded-[2px] ${onNight ? 'bg-on-night' : 'bg-ink'}`} />
      </span>
      <span translate="no" className="font-display text-[1.05rem] leading-none tracking-[-0.01em]">
        <span className="font-extrabold">TrueCoat</span>{' '}
        <span className={`font-semibold ${onNight ? 'text-on-night-muted' : 'text-muted'}`}>Painting Co.</span>
      </span>
    </span>
  )
}
