/** The arch path from brand/logos/concept-a-arch/symbol.svg. The viewBox is cut to the shape. */
const ARCH_PATH = 'M32 224V128A96 96 0 0 1 224 128V224H184V112A18 18 0 0 0 148 112V224H108V112A18 18 0 0 0 72 112V224Z'

interface ArchMarkProps {
  className?: string
}

/** The Maruti Paint House arch symbol. It takes the colour of the text (currentColor). */
export function ArchMark({ className = '' }: ArchMarkProps) {
  return (
    <svg viewBox="32 32 192 192" aria-hidden focusable="false" className={className}>
      <path fill="currentColor" d={ARCH_PATH} />
    </svg>
  )
}

interface WordmarkProps {
  tone?: 'dark' | 'light'
  size?: 'md' | 'lg'
}

/** The horizontal logo: the arch symbol, "Maruti" and "PAINT HOUSE". */
export function Wordmark({ tone = 'dark', size = 'md' }: WordmarkProps) {
  const main = tone === 'dark' ? 'text-ink' : 'text-paper'
  const sub = tone === 'dark' ? 'text-muted' : 'text-mist'
  const mark = tone === 'dark' ? 'text-bronze' : 'text-sand'
  const lg = size === 'lg'
  return (
    <span lang="en" className={`flex items-center leading-none ${lg ? 'gap-4' : 'gap-3'}`}>
      <ArchMark className={`shrink-0 ${mark} ${lg ? 'h-12 w-12' : 'h-9 w-9'}`} />
      <span className="flex flex-col">
        <span className={`font-serif font-semibold leading-[0.85] tracking-[-0.01em] ${main} ${lg ? 'text-[38px]' : 'text-[29px]'}`}>
          Maruti
        </span>
        <span className={`font-medium uppercase tracking-[0.3em] ${sub} ${lg ? 'mt-2 text-[12px]' : 'mt-1.5 text-[10px]'}`}>
          Paint House
        </span>
      </span>
    </span>
  )
}
