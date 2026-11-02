import { ArrowDown, Check, CircleCheck } from 'lucide-react'
import { estimateItems, heroStatements } from '../data/content'
import { images } from '../data/images'
import { ResponsiveImage } from './ResponsiveImage'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="pt-8 pb-20 sm:pt-12 lg:pt-14 lg:pb-28">
      <div className="wrap">
        <h1
          id="hero-title"
          className="max-w-[22ch] text-[2.15rem] leading-[1.08] font-extrabold sm:text-5xl lg:max-w-none lg:text-[clamp(3.25rem,4.6vw,4.4rem)] lg:leading-[1.02]"
        >
          <span className="block">Beautiful Walls. Reliable Work.</span>
          <span className="block">Prices That Make Sense.</span>
        </h1>

        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 lg:pt-2">
            <p className="max-w-[36rem] text-lg leading-relaxed text-ink/85 sm:text-xl">
              Professional home painting services with careful workmanship, clear communication and
              estimates that fit your requirements.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#estimate" className="btn btn-primary text-base">
                Get a Free Estimate
              </a>
              <a href="#work" className="btn btn-secondary text-base">
                View Our Work
                <ArrowDown aria-hidden size={18} />
              </a>
            </div>

            <ul aria-label="What we offer" className="mt-7 flex flex-wrap gap-x-5 gap-y-2 lg:mt-10 lg:grid lg:gap-3 xl:max-w-md">
              {heroStatements.map((statement) => (
                <li key={statement} className="flex items-center gap-2 font-medium lg:gap-3 lg:rounded-2xl lg:bg-field lg:px-4 lg:py-3.5">
                  <CircleCheck aria-hidden size={20} className="shrink-0 text-green-deep" />
                  {statement}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-7">
            <div className="overflow-hidden rounded-[1.75rem] bg-field">
              <ResponsiveImage
                image={images.hero}
                priority
                sizes="(min-width: 1216px) 700px, (min-width: 1024px) 58vw, 100vw"
                className="hero-photo aspect-[4/3] h-full w-full object-cover object-[45%_50%] lg:aspect-[5/4]"
              />
            </div>

            {/* The estimate card. It is held to the photo with a strip of painter's tape. */}
            <div className="relative mx-4 -mt-16 rounded-2xl bg-white p-5 sm:absolute sm:bottom-6 sm:left-6 sm:mx-0 sm:mt-0 sm:w-[19rem] lg:-left-10">
              <span aria-hidden className="tape" />
              <p className="font-display text-lg font-bold">A clear estimate shows</p>
              <ul className="mt-3 space-y-2">
                {estimateItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base leading-snug">
                    <Check aria-hidden size={18} className="mt-0.5 shrink-0 text-green-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
