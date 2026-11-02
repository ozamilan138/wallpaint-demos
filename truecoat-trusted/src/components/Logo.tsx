interface LogoProps {
  tone?: 'dark' | 'light'
}

/** The TrueCoat wordmark with a small paint roller mark. */
export function Logo({ tone = 'dark' }: LogoProps) {
  const text = tone === 'dark' ? 'text-ink' : 'text-white'
  const sub = tone === 'dark' ? 'text-muted' : 'text-white/75'
  return (
    <span className="flex items-center gap-2.5" translate="no">
      <svg aria-hidden viewBox="0 0 32 32" className="h-9 w-9 shrink-0">
        <rect width="32" height="32" rx="9" fill="#527B61" />
        <rect x="7" y="8" width="16" height="7.5" rx="2" fill="#FAFAF7" />
        <path d="M23 11.75h2.25v5H16.5v3" fill="none" stroke="#FAFAF7" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="14.9" y="19" width="3.2" height="7" rx="1.6" fill="#D8A45D" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-tight ${text}`}>TrueCoat</span>
        <span className={`mt-1 text-sm font-medium ${sub}`}>Painting Co.</span>
      </span>
    </span>
  )
}
