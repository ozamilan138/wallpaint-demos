import { useEffect, useState } from 'react'
import { ArrowDown, Pause, Play } from 'lucide-react'
import { messages } from '../config/business'
import { photos } from '../data/content'
import { usePrefersReducedMotion } from '../lib/useReveal'
import { ContactAction } from './ContactAction'
import { Picture } from './Picture'
import { WhatsAppIcon } from './WhatsAppIcon'

const HOLD_MS = 6000

export function Hero() {
  const slides = photos.heroSlides
  const [active, setActive] = useState(0)
  const reduced = usePrefersReducedMotion()
  const [paused, setPaused] = useState(false)

  // Slow crossfade between painted rooms. It stops when the visitor presses Pause,
  // when the tab is hidden, and when the user prefers reduced motion.
  useEffect(() => {
    if (reduced || paused) return
    let timer: number | undefined
    const start = () => {
      timer = window.setInterval(() => setActive((i) => (i + 1) % slides.length), HOLD_MS)
    }
    const onVisibility = () => {
      window.clearInterval(timer)
      if (document.visibilityState === 'visible') start()
    }
    start()
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduced, paused, slides.length])

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] overflow-hidden bg-dark text-white">
      <div className="absolute inset-0 -z-10">
        {slides.map((photo, i) => (
          <div
            key={photo.src}
            className="absolute inset-0 transition-opacity duration-[1600ms] ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active}
          >
            <Picture
              photo={photo}
              sizes="100vw"
              priority={i === 0}
              className="h-full w-full object-cover object-[50%_45%]"
              style={
                i === active && !reduced && !paused
                  ? { animation: `hero-drift ${HOLD_MS + 1600}ms linear both` }
                  : undefined
              }
            />
          </div>
        ))}
        {/* Neutral scrims for text contrast: one under the navigation, one under the headline. */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-dark/60 to-transparent" /* taste-skill-ignore: neutral scrim over photo */ />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/45 to-dark/5 md:bg-gradient-to-tr md:from-dark/85 md:via-dark/35 md:to-transparent" /* taste-skill-ignore: neutral scrim over photo */ />
      </div>

      <div className="container-page flex w-full flex-col justify-end pt-32 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[min(100%,58rem)]">
          <h1
            id="hero-title"
            data-reveal
            className="text-[clamp(2.15rem,7.4vw,5.4rem)] leading-[1.02] font-extrabold tracking-[-0.045em]"
          >
            Every Wall Has the Potential to Become Something Beautiful.
          </h1>
          <p
            data-reveal
            style={{ ['--d' as string]: 1 }}
            className="mt-6 max-w-xl text-[clamp(1.05rem,1.6vw,1.3rem)] leading-relaxed text-white/90"
          >
            Premium residential painting that transforms the spaces you call home.
          </p>
          <div data-reveal style={{ ['--d' as string]: 2 }} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#transformation" className="btn btn-light">
              View Our Transformations
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <ContactAction kind="whatsapp" message={messages.estimate} className="btn btn-accent">
              <WhatsAppIcon className="size-5" />
              Get a Free Estimate
            </ContactAction>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between gap-6 text-[13px] text-white/75 md:mt-16">
          <div className="flex items-center gap-3">
            {!reduced && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                className="grid size-11 cursor-pointer place-items-center rounded-full text-white ring-1 ring-white/40 ring-inset hover:bg-white/10"
                aria-label={paused ? 'Play the photo slideshow' : 'Pause the photo slideshow'}
              >
                {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
              </button>
            )}
            <span className="flex gap-1.5" aria-hidden="true">
              {slides.map((s, i) => (
                <span
                  key={s.src}
                  className={`h-[3px] w-6 rounded-full transition-colors duration-700 ${i === active ? 'bg-accent' : 'bg-white/35'}`}
                />
              ))}
            </span>
            <span>Demo photography</span>
          </div>
          <a
            href="#transformation"
            className="group hidden items-center gap-3 text-[14px] font-medium text-white/90 hover:text-white sm:flex"
          >
            Scroll to see the difference
            <span className="relative block h-10 w-px overflow-hidden bg-white/25" aria-hidden="true" /* taste-skill-ignore: animated scroll cue, not a divider */>
              <span className="absolute inset-0 bg-white motion-safe:animate-[scroll-cue_2.2s_ease-in-out_infinite]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
