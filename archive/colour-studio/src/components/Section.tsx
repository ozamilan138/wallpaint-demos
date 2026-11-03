import type { ReactNode } from 'react'
import { useReveal } from '../lib/hooks'

/** A block whose children rise into view one after another. */
export function Reveal({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'header' | 'ul' | 'ol' }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}

/** A section heading with an optional supporting sentence. */
export function SectionHeading({ id, title, children, className = '' }: { id: string; title: string; children?: ReactNode; className?: string }) {
  return (
    <Reveal as="header" className={`max-w-2xl ${className}`}>
      <h2 id={id} className="text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] sm:text-[2.6rem] lg:text-[3.25rem]">
        {title}
      </h2>
      {children && <p className="mt-4 text-lg text-muted sm:text-xl">{children}</p>}
    </Reveal>
  )
}
