import { business } from '../data/config'

/**
 * The TrueCoat wordmark. The small mark is one wall in two halves:
 * a tired coat on the left and a fresh coat on the right.
 */
export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 28 28" className="size-7 shrink-0" aria-hidden="true" focusable="false">
        <rect x="2" y="3" width="12" height="22" rx="2" fill={tone === 'dark' ? '#cfc8b8' : '#6b746d'} />
        <rect x="14" y="3" width="12" height="22" rx="2" fill="#477b59" />
        <rect x="12.5" y="1" width="3" height="26" rx="1.5" fill="#dfa96a" />
      </svg>
      <span translate="no" className={`font-display text-[19px] leading-none font-extrabold tracking-[-0.03em] ${tone === 'dark' ? 'text-ink' : 'text-white'}`}>
        {business.shortName}
        <span className={`ml-1.5 font-semibold ${tone === 'dark' ? 'text-soft-ink' : 'text-white/70'}`}>Painting Co.</span>
      </span>
    </span>
  )
}
