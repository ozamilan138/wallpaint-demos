import { useEffect, useState } from 'react'
import { ArrowDown, Pause, Play } from 'lucide-react'
import { heroLooks } from '../data/content'
import { findPalette } from '../data/colourDiscovery'
import { readableTextOn } from '../lib/colour'
import { usePrefersReducedMotion } from '../lib/hooks'
import { expertEnquiry } from '../lib/messages'
import { WhatsAppButton, WhatsAppIcon } from './ContactButtons'
import { Img } from './Img'

const ROTATE_MS = 6000

export function Hero() {
  const reduced = usePrefersReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [stopped, setStopped] = useState(false)

  // The room photo changes slowly, like light that moves in a room.
  // It stops on hover, on focus, when the tab is hidden and with reduced motion.
  useEffect(() => {
    if (reduced || paused || stopped) return
    const id = window.setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % heroLooks.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [reduced, paused, stopped])

  const look = heroLooks[active]
  const palette = findPalette(look.paletteId)!

  return (
    <section id="home" aria-labelledby="hero-title" className="relative pt-6 pb-20 sm:pt-10 lg:pt-14 lg:pb-32">
      <div className="container-page grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:pr-6 xl:pr-10">
          <h1
            id="hero-title"
            className="text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.045em] sm:text-[3.6rem] lg:text-[3.3rem] xl:text-[4.25rem]"
          >
            Find the Colours That Feel Like Home.
          </h1>
          <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-ink/85 sm:text-xl">
            Explore inspiring colour combinations and discover the possibilities for your walls.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#explore" className="btn btn-primary">
              Explore Colour Ideas
              <ArrowDown className="size-4" aria-hidden />
            </a>
            <WhatsAppButton message={expertEnquiry()} className="btn btn-secondary">
              <WhatsAppIcon className="size-5 text-[#1F7A4D]" />
              Talk to a Painting Expert
            </WhatsAppButton>
          </div>

          <div className="mt-12 hidden lg:block">
            <LookPicker active={active} onPick={(i) => { setActive(i); setStopped(true) }} onFocusChange={setPaused} />
          </div>
        </div>

        <div
          className="relative lg:col-span-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-paper sm:aspect-[5/4] lg:aspect-[6/5]">
            {heroLooks.map((l, i) => (
              <Img
                key={l.id}
                name={l.image}
                alt={i === active ? l.alt : ''}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={i === 0}
                className="absolute inset-0 size-full object-cover transition-opacity duration-[1600ms] ease-in-out motion-reduce:transition-none"
                style={{ opacity: i === active ? 1 : 0 }}
              />
            ))}
            <span className="demo-tag absolute top-4 left-4">Inspiration image</span>
            {!reduced && (
              <button
                type="button"
                onClick={() => setStopped((v) => !v)}
                className="absolute top-3 right-3 inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-cream/95 text-ink transition-colors duration-200 hover:bg-white"
              >
                {stopped ? <Play className="size-4" aria-hidden /> : <Pause className="size-4" aria-hidden />}
                <span className="sr-only">{stopped ? 'Play the room slideshow' : 'Pause the room slideshow'}</span>
              </button>
            )}
          </div>

          {/* The paint chip: the colours of the room on screen. */}
          <figure
            className="absolute -bottom-8 right-4 w-[9.5rem] rounded-2xl bg-white p-2.5 overlay-chip sm:right-8 sm:w-48 lg:-bottom-10 lg:-left-8 lg:right-auto lg:w-52"
            aria-live="polite"
          >
            <div className="overflow-hidden rounded-xl">
              {palette.colours.map((c) => (
                <div
                  key={c.hex}
                  className="flex h-9 items-center justify-between px-3 text-[13px] font-medium transition-colors duration-700 sm:h-11"
                  style={{ backgroundColor: c.hex, color: readableTextOn(c.hex) }}
                >
                  <span>{c.name}</span>
                  <span className="hidden opacity-80 sm:inline">{c.hex}</span>
                </div>
              ))}
            </div>
            <figcaption className="px-1 pt-2.5 pb-0.5 text-[13px] leading-tight font-semibold">{palette.name}</figcaption>
          </figure>
        </div>

        <div className="mt-6 lg:hidden">
          <LookPicker active={active} onPick={(i) => { setActive(i); setStopped(true) }} onFocusChange={setPaused} />
        </div>
      </div>
    </section>
  )
}

function LookPicker({
  active,
  onPick,
  onFocusChange,
}: {
  active: number
  onPick: (i: number) => void
  onFocusChange: (focused: boolean) => void
}) {
  return (
    <div
      role="group"
      aria-label="Preview a colour look"
      className="grid grid-cols-3 gap-2 sm:gap-3"
      onFocus={() => onFocusChange(true)}
      onBlur={() => onFocusChange(false)}
    >
      {heroLooks.map((look, i) => {
        const p = findPalette(look.paletteId)!
        const selected = i === active
        return (
          <button
            key={look.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onPick(i)}
            className={`group cursor-pointer rounded-2xl p-2 text-left transition-colors duration-200 ${selected ? 'bg-white ring-2 ring-ink' : 'bg-paper/70 hover:bg-white'}`}
          >
            <span className="flex h-8 overflow-hidden rounded-lg sm:h-10" aria-hidden>
              {p.colours.map((c) => (
                <span key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} />
              ))}
            </span>
            <span className="mt-2 block px-0.5 text-[13px] leading-tight font-semibold sm:text-sm">{p.name}</span>
          </button>
        )
      })}
    </div>
  )
}
