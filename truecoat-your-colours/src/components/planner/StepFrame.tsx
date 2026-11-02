import { useEffect, useRef, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { STEPS, prefersReducedMotion, usePlanner } from '../../lib/planner'

interface StepFrameProps {
  title: string
  intro: ReactNode
  children: ReactNode
  /** Replaces the default Continue button. */
  footerExtra?: ReactNode
  hideContinue?: boolean
}

/**
 * The frame of one planner step: a heading, the content, and Back and
 * Continue buttons. After the user moves to a step, focus goes to its heading.
 */
export function StepFrame({ title, intro, children, footerExtra, hideContinue }: StepFrameProps) {
  const { step, moved, goTo } = usePlanner()
  const headingRef = useRef<HTMLHeadingElement>(null)
  const index = STEPS.findIndex((s) => s.id === step)
  const prev = STEPS[index - 1]
  const next = STEPS[index + 1]

  useEffect(() => {
    if (!moved) return
    const h = headingRef.current
    if (!h) return
    h.focus({ preventScroll: true })
    const top = h.getBoundingClientRect().top
    if (top < 80 || top > window.innerHeight * 0.6) {
      const y = window.scrollY + top - 170
      window.scrollTo({ top: y, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    }
  }, [step, moved])

  return (
    <div key={step} className="step-enter">
      <h3 ref={headingRef} tabIndex={-1} className="text-[1.75rem] leading-[1.1] font-extrabold tracking-[-0.02em] outline-none sm:text-[2.1rem]">
        {title}
      </h3>
      <div className="mt-3 max-w-[40rem] text-[17px] text-ink/85">{intro}</div>
      <div className="mt-7">{children}</div>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {prev && (
          <button type="button" className="btn btn-secondary" onClick={() => goTo(prev.id)}>
            <ArrowLeft className="size-5" aria-hidden />
            Back
          </button>
        )}
        {next && !hideContinue && (
          <button type="button" className="btn btn-primary" onClick={() => goTo(next.id)}>
            {next.id === 'summary' ? 'See My Summary' : `Continue to ${next.label}`}
            <ArrowRight className="size-5" aria-hidden />
          </button>
        )}
        {footerExtra}
      </div>
    </div>
  )
}
