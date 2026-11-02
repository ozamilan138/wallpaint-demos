import { useEffect, useState } from 'react'
import { ArrowDownRight, MessageCircle } from 'lucide-react'
import { images } from '../data/images'
import { ResponsiveImage } from './ResponsiveImage'
import { WhatsAppAction } from './contact/ContactActions'
import { estimateMessage } from '../lib/contact'
import { DemoTag } from './DemoTag'

const frames = [
  {
    image: images.heroLiving,
    label: 'Living room in warm oat',
    alt: 'A sunlit living room with warm off-white walls, round rattan mirrors and a cream sofa',
    position: '55% 50%',
  },
  {
    image: images.heroBedroom,
    label: 'Bedroom in soft linen white',
    alt: 'A calm bedroom with soft linen-white walls, a low timber bed and pale cushions',
    position: '45% 50%',
  },
  {
    image: images.heroLounge,
    label: 'Lounge in creamy neutrals',
    alt: 'A bright lounge with creamy walls, woven wall plates, a patterned rug and timber chairs',
    position: '60% 50%',
  },
]

const HOLD_MS = 6000

// A neutral scrim keeps the caption readable on the photograph.
const captionScrim = 'bg-gradient-to-t from-black/45 to-transparent' // taste-skill-ignore

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  // The photographs change slowly, like light in a room. No change under reduced motion or in a hidden tab.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || paused) return
    let timer = window.setInterval(() => setCurrent((i) => (i + 1) % frames.length), HOLD_MS)
    const onVisibility = () => {
      window.clearInterval(timer)
      if (!document.hidden) timer = window.setInterval(() => setCurrent((i) => (i + 1) % frames.length), HOLD_MS)
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      window.clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [paused])

  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <div className="flex flex-col lg:grid lg:min-h-[calc(100svh-72px)] lg:grid-cols-12">
        <div className="page-x order-2 flex flex-col justify-center pb-14 pt-7 sm:pb-20 sm:pt-12 lg:order-1 lg:col-span-5 lg:py-20 xl:col-span-6 lg:pl-[max(3rem,calc((100vw-88rem)/2+3rem))] lg:pr-10 xl:pr-14">
          <h1
            id="hero-title"
            className="hero-rise text-[clamp(2.75rem,1.4rem+4.4vw,5.25rem)] leading-[0.98] tracking-[-0.025em]"
          >
            Give Your Walls a New Perspective.
          </h1>
          <p
            className="hero-rise mt-4 max-w-[32rem] text-[18px] leading-[1.6] text-ink sm:text-[19px] lg:mt-8"
            style={{ ['--rise-delay' as string]: '120ms' }}
          >
            Thoughtfully chosen colours. Beautiful finishes. Painting that brings your home to life.
          </p>
          <div
            className="hero-rise mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-10"
            style={{ ['--rise-delay' as string]: '220ms' }}
          >
            <WhatsAppAction message={estimateMessage} className="btn btn-dark w-full sm:w-auto">
              <MessageCircle aria-hidden size={18} />
              Request a Free Estimate
            </WhatsAppAction>
            <a href="#work" className="btn btn-outline w-full sm:w-auto">
              Explore Our Work
              <ArrowDownRight aria-hidden size={18} />
            </a>
          </div>
          <p
            className="hero-rise mt-8 text-[15px] text-muted lg:mt-12"
            style={{ ['--rise-delay' as string]: '320ms' }}
          >
            Residential and apartment painting, inside and out.
          </p>
        </div>

        <div className="relative order-1 h-[max(260px,min(44svh,520px))] overflow-hidden bg-linen sm:h-[56svh] lg:order-2 lg:col-span-7 lg:h-auto xl:col-span-6">
          <div className="hero-settle absolute inset-0">
            {frames.map((frame, index) => (
              <div
                key={frame.image.name}
                className="hero-frame absolute inset-0"
                style={{ opacity: index === current ? 1 : 0 }}
                aria-hidden={index !== current}
              >
                <ResponsiveImage
                  image={frame.image}
                  alt={frame.alt}
                  sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 58vw, 100vw"
                  priority={index === 0}
                  objectPosition={frame.position}
                />
              </div>
            ))}
          </div>
          <DemoTag label="Sample photography" className="left-4 top-4 sm:left-6 sm:top-6" />

          <div className={`absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 ${captionScrim} px-4 pb-4 pt-16 sm:px-6 sm:pb-6`}>
            <p className="text-[14px] font-medium text-white">
              {frames[current].label}
            </p>
            <div className="flex items-center" role="group" aria-label="Choose a photograph">
              {frames.map((frame, index) => (
                <button
                  key={frame.image.name}
                  type="button"
                  onClick={() => {
                    setCurrent(index)
                    setPaused(true)
                  }}
                  aria-label={`Show photograph ${index + 1} of ${frames.length}: ${frame.label}`}
                  aria-pressed={index === current}
                  className="group grid h-11 w-11 place-items-center"
                >
                  <span
                    className={`block h-[3px] w-7 transition-colors duration-300 ${
                      index === current ? 'bg-white' : 'bg-white/45 group-hover:bg-white/80'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
