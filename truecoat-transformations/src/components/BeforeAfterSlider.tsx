import { useCallback, useEffect, useRef, type KeyboardEvent, type PointerEvent } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Photo } from '../data/photos'
import { usePrefersReducedMotion } from '../hooks/useReveal'
import { Picture } from './Picture'

type Props = {
  before: Photo
  after: Photo
  /** The start position, in percent from the left edge. */
  initial?: number
  label?: string
}

const clamp = (v: number) => Math.min(100, Math.max(0, v))

/**
 * A before-and-after comparison. The "before" photo is on top and is clipped to the
 * left of the divider. The divider is the fresh coat line.
 *
 * Controls: drag with a mouse or a finger, click or tap a point on the photo, or
 * focus the handle and use the arrow keys, Page Up, Page Down, Home and End.
 *
 * The position goes into a CSS variable, not into React state, so a drag does not
 * re-render the component on each frame.
 */
export function BeforeAfterSlider({ before, after, initial = 50, label = 'Before and after comparison' }: Props) {
  const root = useRef<HTMLDivElement>(null)
  const handle = useRef<HTMLDivElement>(null)
  const pos = useRef(initial)
  const dragging = useRef(false)
  const frame = useRef(0)
  const reduced = usePrefersReducedMotion()

  const apply = useCallback((value: number) => {
    pos.current = clamp(value)
    const v = Math.round(pos.current)
    root.current?.style.setProperty('--pos', `${pos.current}%`)
    if (handle.current) {
      handle.current.setAttribute('aria-valuenow', String(v))
      handle.current.setAttribute('aria-valuetext', `${v}% of the before photo shows`)
    }
  }, [])

  const fromClientX = useCallback(
    (clientX: number) => {
      const rect = root.current?.getBoundingClientRect()
      if (!rect || rect.width === 0) return
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => apply(((clientX - rect.left) / rect.width) * 100))
    },
    [apply],
  )

  useEffect(() => apply(initial), [apply, initial])

  // A small hint movement when the slider first comes into view, so visitors see that it moves.
  useEffect(() => {
    const el = root.current
    if (!el || reduced || !('IntersectionObserver' in window)) return
    let cancelled = false
    let timer = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const keys = [initial, initial + 16, initial - 12, initial]
        const duration = 1900
        timer = window.setTimeout(() => {
          const start = performance.now()
          const step = (now: number) => {
            if (cancelled || dragging.current) return
            const t = Math.min(1, (now - start) / duration)
            const seg = Math.min(keys.length - 2, Math.floor(t * (keys.length - 1)))
            const local = t * (keys.length - 1) - seg
            const ease = 0.5 - Math.cos(local * Math.PI) / 2
            apply(keys[seg] + (keys[seg + 1] - keys[seg]) * ease)
            if (t < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }, 350)
      },
      { threshold: 0.55 },
    )
    io.observe(el)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
      io.disconnect()
    }
  }, [apply, initial, reduced])

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    root.current?.setAttribute('data-dragging', '')
    fromClientX(e.clientX)
    handle.current?.focus({ preventScroll: true })
  }
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) fromClientX(e.clientX)
  }
  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = false
    root.current?.removeAttribute('data-dragging')
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const steps: Record<string, number> = { ArrowLeft: -2, ArrowDown: -2, ArrowRight: 2, ArrowUp: 2, PageDown: -10, PageUp: 10 }
    if (e.key in steps) apply(pos.current + steps[e.key] * (e.shiftKey ? 5 : 1))
    else if (e.key === 'Home') apply(0)
    else if (e.key === 'End') apply(100)
    else return
    e.preventDefault()
  }

  return (
    <div
      ref={root}
      className="group relative aspect-square w-full cursor-ew-resize overflow-hidden bg-dark-2 select-none lg:aspect-[5/4]"
      style={{ ['--pos' as string]: `${initial}%`, touchAction: 'pan-y' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      data-testid="ba-slider"
    >
      <Picture
        photo={after}
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0" style={{ clipPath: 'inset(0 calc(100% - var(--pos)) 0 0)' }}>
        <Picture photo={before} sizes="(min-width: 1024px) 60vw, 100vw" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      </div>

      <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-dark/85 px-4 py-1.5 font-ui text-[15px] font-semibold text-white sm:bottom-5 sm:left-5">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 bottom-4 rounded-full bg-green px-4 py-1.5 font-ui text-[15px] font-semibold text-white sm:right-5 sm:bottom-5">
        After
      </span>

      {/* The coat line and the handle. This full-width layer moves with transform only:
          translateX(100%) of the layer is the full width of the slider. */}
      <div className="pointer-events-none absolute inset-0 will-change-transform" style={{ transform: 'translate3d(var(--pos), 0, 0)' }}>
        <div className="absolute inset-y-0 left-0 w-1 -translate-x-1/2 bg-warm" aria-hidden="true" />
        <div
          ref={handle}
          role="slider"
          tabIndex={0}
          aria-label={label}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={initial}
          aria-valuetext={`${initial}% of the before photo shows`}
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute top-1/2 left-0 grid size-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-[3px] border-white bg-warm text-dark transition-[scale] duration-150 group-data-[dragging]:scale-110 focus-visible:outline-white"
        >
          <span className="flex items-center" aria-hidden="true">
            <ChevronLeft className="-mr-1 size-5" strokeWidth={2.5} />
            <ChevronRight className="-ml-1 size-5" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </div>
  )
}
