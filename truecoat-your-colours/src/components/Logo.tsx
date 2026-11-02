/** The TrueCoat wordmark: three paint chips and the business name. */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" translate="no">
      <span className="flex h-8 items-stretch gap-[3px]" aria-hidden>
        <span className="w-[7px] rounded-[3px] bg-sage" />
        <span className="w-[7px] rounded-[3px] bg-green" />
        <span className="w-[7px] rounded-[3px] bg-terracotta" />
      </span>
      <span className={`font-display text-[1.15rem] leading-none font-extrabold tracking-[-0.02em] ${onDark ? 'text-white' : 'text-ink'}`}>
        TrueCoat
        <span className={`font-ui block pt-1 text-[13px] font-semibold tracking-normal ${onDark ? 'text-white/80' : 'text-muted'}`}>
          Painting Co.
        </span>
      </span>
    </span>
  )
}
