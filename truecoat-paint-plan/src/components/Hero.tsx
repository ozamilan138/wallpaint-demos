import { ArrowDown, CircleCheck } from 'lucide-react'
import { heroLabels } from '../data/content'
import { defaultMessage } from '../lib/whatsapp'
import { WhatsAppButton } from './ContactButtons'
import { Img } from './Img'

const strip = ['#456048', '#8FA98F', '#DCE7DB', '#E9DCC7', '#C78269', '#A9BDC9', '#F3EBDD']

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="bg-sage-soft pb-10 pt-3 sm:pb-14 lg:pb-16 lg:pt-6">
      <div className="wrap grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-4">
        {/* The photo comes first on a phone and sits on the right on a wide screen. */}
        <div className="relative lg:order-2">
          <Img
            name="hero-green-room"
            alt="A room with sage green painted walls, a wooden desk, plants and sunlight from a large window"
            sizes="(min-width: 1024px) 52vw, 100vw"
            priority
            className="h-[34svh] min-h-[14rem] w-full rounded-card sm:h-[46svh] sm:min-h-[17rem] object-[30%_50%] lg:h-full lg:min-h-[38rem]"
          />
        </div>

        {/* The printed card: the job sheet that the page is built from. */}
        <div className="relative z-10 mx-2 -mt-8 flex flex-col overflow-hidden rounded-card bg-paper sm:mx-6 lg:order-1 lg:mx-0 lg:mt-0">
          <div className="flex h-10 sm:h-14" aria-hidden="true">
            {strip.map((c) => (
              <span key={c} className="flex-1" style={{ background: c }} />
            ))}
          </div>
          <div className="flex flex-1 flex-col px-6 pb-8 pt-6 sm:px-10 sm:pb-10 sm:pt-10 xl:px-14 xl:pt-14">
            <h1
              id="hero-title"
              className="max-w-[17ch] text-[clamp(2.375rem,1.5rem+3.1vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.035em]"
            >
              Planning a Fresh Look for Your Home?
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-ink sm:text-[1.25rem]">
              Explore colours, discover painting ideas and find a reliable team to help bring your vision to life.
            </p>
            <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <a href="#explore-colours" className="btn btn-dark">
                Explore Colour Ideas
                <ArrowDown aria-hidden="true" className="size-5" />
              </a>
              <WhatsAppButton message={defaultMessage} className="btn btn-soft">
                Talk to Us
              </WhatsAppButton>
            </div>
            <ul className="mt-auto grid gap-x-6 gap-y-3 pt-10 font-ui text-base font-medium text-ink sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {heroLabels.map((label) => (
                <li key={label} className="flex items-center gap-2">
                  <CircleCheck aria-hidden="true" className="size-5 shrink-0 text-sage-deep" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
