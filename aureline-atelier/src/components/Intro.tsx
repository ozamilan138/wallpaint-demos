import { ArrowRight } from 'lucide-react'
import { images } from '../data/images'
import { ResponsiveImage } from './ResponsiveImage'

export function Intro() {
  return (
    <section id="about" aria-labelledby="intro-title" className="page-x mx-auto max-w-page py-24 sm:py-32 lg:py-44">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h2
            id="intro-title"
            data-reveal
            className="text-[clamp(2.15rem,1.4rem+2.9vw,4.25rem)] leading-[1.04]"
          >
            More Than Just a Fresh Coat of Paint.
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-10 lg:mt-12 lg:max-w-[46rem]">
            <p data-reveal style={{ ['--reveal-delay' as string]: '80ms' }} className="text-[19px] leading-[1.6]">
              A beautifully painted home changes how a space feels. The right colour can make a room warmer, calmer
              or brighter, long before any furniture moves.
            </p>
            <p data-reveal style={{ ['--reveal-delay' as string]: '160ms' }} className="text-[17px] leading-[1.65] text-ink">
              From the first colour conversation to the last careful line, every detail contributes to the final
              result: the preparation you never see, and the finish you notice every day.
            </p>
          </div>
          <a
            href="#process"
            data-reveal
            style={{ ['--reveal-delay' as string]: '220ms' }}
            className="text-link mt-8"
          >
            <span>See how we work</span>
            <ArrowRight aria-hidden size={16} />
          </a>
        </div>

        <figure
          data-reveal
          style={{ ['--reveal-delay' as string]: '120ms' }}
          className="relative w-[72%] justify-self-end sm:w-[52%] lg:col-span-4 lg:col-start-9 lg:mt-24 lg:w-full"
        >
          <div className="img-zoom aspect-[4/5] overflow-hidden bg-linen">
            <ResponsiveImage
              image={images.introBrick}
              alt="A white painted brick wall with botanical prints above an emerald green cabinet"
              sizes="(min-width: 1024px) 30vw, 60vw"
              objectPosition="50% 40%"
            />
          </div>
          <figcaption className="mt-3 text-[14px] text-muted">
            Painted brick and a lacquered green cabinet. Sample image.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
