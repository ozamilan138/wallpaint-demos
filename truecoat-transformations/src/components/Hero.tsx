import { ArrowDown, PaintRoller } from 'lucide-react'
import { photos } from '../data/photos'
import { Picture } from './Picture'

/**
 * The first screen. The headline steps across the page, and below it one wide
 * photograph gets a "fresh coat": a single pass from left to right turns the
 * tired version of the room into the fresh one.
 */
export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="pt-7 sm:pt-10 lg:pt-14">
      <div className="frame">
        <h1
          id="hero-title"
          className="text-[clamp(2rem,8.5vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.04em] md:text-[clamp(3.5rem,7.3vw,6rem)]"
        >
          <span className="mask-line">
            <span style={{ ['--d' as string]: '80ms' }}>See What a Little</span>
          </span>
          <span className="mask-line pl-[11vw] md:pl-[33.333%]">
            <span style={{ ['--d' as string]: '190ms' }}>Colour Can Do.</span>
          </span>
        </h1>

        <div className="mt-6 grid gap-6 md:mt-9 md:grid-cols-12 md:gap-8">
          <p
            className="hero-fade flex items-start gap-2.5 font-ui text-[16px] leading-snug font-semibold text-green-deep md:col-span-4 md:pt-1"
            style={{ ['--d' as string]: '420ms' }}
          >
            <PaintRoller className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            Residential and apartment painting services.
          </p>
          <div className="hero-fade md:col-span-8 lg:col-span-6" style={{ ['--d' as string]: '480ms' }}>
            <p className="max-w-[40ch] text-[18px] leading-relaxed text-ink sm:text-[20px]">
              Fresh walls, thoughtful colour choices and reliable painting services for the place you call home.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#projects" className="btn btn-green">
                Explore Our Work
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-outline">
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10 h-[clamp(280px,52vh,760px)] w-full overflow-hidden bg-mist md:mt-14 lg:h-[clamp(360px,62vh,820px)]">
        <Picture
          photo={photos.heroTired}
          alt=""
          aria-hidden="true"
          sizes="100vw"
          priority
          className="absolute inset-0 h-full w-full object-cover object-[50%_58%]"
        />
        <div className="coat-reveal absolute inset-0">
          <Picture photo={photos.heroFresh} sizes="100vw" priority className="h-full w-full object-cover object-[50%_58%]" />
        </div>
        <div className="coat-edge pointer-events-none absolute inset-0 opacity-0 motion-reduce:hidden" aria-hidden="true">
          <div className="absolute inset-y-0 left-0 w-2.5 -translate-x-full bg-warm" />
        </div>
        <span className="demo-tag">Sample photo</span>
      </div>
    </section>
  )
}
