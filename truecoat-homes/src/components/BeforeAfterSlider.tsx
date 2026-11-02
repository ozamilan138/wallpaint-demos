import { useCallback, useEffect, useRef, type KeyboardEvent, type PointerEvent } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Photo } from '../data/photos'
import { usePrefersReducedMotion } from '../hooks/useReveal'
import { Picture } from './Picture'

type Props = {
  before: Photo
  after: Photo
  /** The start position in percent. 0 shows only "after", 100 shows only "before". */
  initial?: number
  label?: string
}

const clamp = (v: number) => Math.min(100, Math.max(0, v))

/**
 * A before-and-after comparison. The "before" image sits on top and is clipped to the left
 * of the handle. Drag with a mouse or a finger, click anywhere on the image, or focus the
 * handle and use the arrow keys, Page Up, Page Down, Home and End.
 *
 * For smooth movement, the position is written to a CSS variable on the element
 * and not to React state, so a drag does not re-render the component.
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
      handle.current.setAttribute('aria-valuetext', `${v}% before, ${100 - v}% after`)
    }
  }, [])

  const fromClientX = useCallback(
    (clientX: number) => {
      const rect = root.current?.getBoundingClientRect()
      if (!rect) return
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => apply(((clientX - rect.left) / rect.width) * 100))
    },
    [apply],
  )

  useEffect(() => {
    apply(initial)
  }, [apply, initial])

  // One small hint movement when the slider first enters the viewport.
  useEffect(() => {
    const el = root.current
    if (!el || reduced || !('IntersectionObserver' in window)) return
    let cancelled = false
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const keys = [initial, initial - 14, initial + 10, initial]
        const start = performance.now()
        const duration = 1800
        const step = (now: number) => {
          if (cancelled || dragging.current) return
          const t = Math.min(1, (now - start) / duration)
          const seg = Math.min(keys.length - 2, Math.floor(t * (keys.length - 1)))
          const local = t * (keys.length - 1) - seg
          const ease = 0.5 - Math.cos(local * Math.PI) / 2
          apply(keys[seg] + (keys[seg + 1] - keys[seg]) * ease)
          if (t < 1) requestAnimationFrame(step)
        }
        window.setTimeout(() => requestAnimationFrame(step), 400)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      cancelled = true
      io.disconnect()
    }
  }, [apply, initial, reduced])

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    root.current?.setAttribute('data-dragging', '')
    fromClientX(e.clientX)
    // Focus the handle for keyboard use, without a visible ring after a mouse or touch press.
    handle.current?.focus({ preventScroll: true, focusVisible: false } as FocusOptions)
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
    const steps: Record<string, number> = {
      ArrowLeft: -2,
      ArrowDown: -2,
      ArrowRight: 2,
      ArrowUp: 2,
      PageDown: -10,
      PageUp: 10,
    }
    if (e.key in steps) apply(pos.current + steps[e.key] * (e.shiftKey ? 5 : 1))
    else if (e.key === 'Home') apply(0)
    else if (e.key === 'End') apply(100)
    else return
    e.preventDefault()
  }

  return (
    <div
      ref={root}
      className="group relative aspect-[4/5] w-full cursor-ew-resize overflow-hidden bg-dark-2 select-none sm:aspect-[4/3] lg:aspect-[16/10]"
      style={{ ['--pos' as string]: `${initial}%`, touchAction: 'pan-y' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <Picture
        photo={after}
        sizes="(min-width: 1360px) 1264px, 100vw"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_50%]"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0" style={{ clipPath: 'inset(0 calc(100% - var(--pos)) 0 0)' }}>
        <Picture
          photo={before}
          sizes="(min-width: 1360px) 1264px, 100vw"
          className="absolute inset-0 h-full w-full object-cover object-[50%_50%]"
          draggable={false}
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-ink/85 px-3.5 py-1.5 font-ui text-[15px] font-semibold text-white sm:top-6 sm:left-6">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-accent px-3.5 py-1.5 font-ui text-[15px] font-semibold text-white sm:top-6 sm:right-6">
        After
      </span>

      {/* The divider line and the handle. A full-width layer moves with transform only;
          translateX(100%) of this layer is the full width of the slider. */}
      <div
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{ transform: 'translate3d(var(--pos), 0, 0)' }}
      >
        <div className="absolute inset-y-0 left-0 w-0.5 -translate-x-1/2 bg-white" aria-hidden="true" />
        <div
        ref={handle}
        role="slider"
        tabIndex={0}
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={initial}
        aria-valuetext={`${initial}% before, ${100 - initial}% after`}
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        className="pointer-events-auto absolute top-1/2 left-0 grid size-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-4 border-ink/25 bg-white bg-clip-padding text-ink transition-[scale] duration-150 group-data-[dragging]:scale-110 focus-visible:outline-offset-4"
        >
          <span className="flex items-center" aria-hidden="true">
            <ChevronLeft className="-mr-1 size-5" />
            <ChevronRight className="-ml-1 size-5" />
          </span>
        </div>
      </div>
    </div>
  )
}
