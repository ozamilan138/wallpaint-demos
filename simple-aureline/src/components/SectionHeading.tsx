import type { ReactNode } from 'react'

interface SectionHeadingProps {
  id: string
  title: string
  children?: ReactNode
  tone?: 'dark' | 'light'
}

/** The heading and the short intro line at the top of each section. */
export function SectionHeading({ id, title, children, tone = 'dark' }: SectionHeadingProps) {
  return (
    <div className="max-w-[40rem]">
      <h2 id={id} className="text-[clamp(2.1rem,1.6rem+1.8vw,3.25rem)] leading-[1.05]">
        {title}
      </h2>
      {children && (
        <p className={`mt-3 text-[18px] leading-[1.6] ${tone === 'light' ? 'text-mist' : 'text-muted'}`}>{children}</p>
      )}
    </div>
  )
}
