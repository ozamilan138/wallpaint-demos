interface WordmarkProps {
  tone?: 'dark' | 'light'
}

/** The text logo. Replace it with the final logo file when the brand has one. */
export function Wordmark({ tone = 'dark' }: WordmarkProps) {
  const main = tone === 'dark' ? 'text-ink' : 'text-paper'
  const sub = tone === 'dark' ? 'text-muted' : 'text-mist'
  return (
    <span className="flex items-baseline gap-2 leading-none">
      <span className={`font-serif text-[28px] font-semibold tracking-[-0.01em] ${main}`}>Aureline</span>
      <span className={`text-[13px] font-medium tracking-[0.02em] lg:max-xl:hidden ${sub}`}>Painting Co.</span>
    </span>
  )
}
