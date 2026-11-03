import { Check } from 'lucide-react'
import { heroPoints, heroSwatches } from '../data/content'
import { delay } from '../lib/reveal'
import { Picture } from './Picture'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="grid lg:min-h-[min(calc(100svh-5rem),52rem)] lg:grid-cols-[1.1fr_1fr]">
        <div className="container-page flex flex-col justify-center pb-10 pt-8 sm:pt-12 lg:mx-0 lg:ml-auto lg:max-w-[44rem] lg:py-16 lg:pr-16">
          <h1
            id="hero-title"
            data-reveal
            className="text-[2.35rem] font-extrabold leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-[2.75rem] xl:text-[3.5rem]"
          >
            <span className="sm:block sm:[text-wrap:balance]">Professional Painting.</span> <span className="sm:block sm:[text-wrap:balance]">Beautiful Spaces.</span>{' '}
            <span className="sm:block sm:[text-wrap:balance]">Options That Fit Your Home.</span>
          </h1>
          <p data-reveal style={delay(1)} className="lead mt-6 max-w-xl text-ink/80">
            From refreshing a single room to painting an entire home, we help you explore the right painting solutions
            for your space and requirements.
          </p>
          <div
            data-reveal
            style={delay(2)}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#estimate" className="btn btn-primary px-7">
              Get a Free Estimate
            </a>
            <a href="#work" className="btn btn-secondary px-7">
              Explore Our Work
            </a>
          </div>
          <ul
            data-reveal
            style={delay(3)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6"
            aria-label="Our service approach"
          >
            {heroPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5 font-medium">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-green text-white">
                  <Check aria-hidden size={14} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative px-5 pb-6 md:px-8 lg:p-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto lg:rounded-none lg:rounded-bl-[2.5rem]">
            <Picture
              name="hero-living"
              alt="A bright living room with sage green walls, a round mirror, a wooden sideboard and large plants"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="hero-drift h-full w-full object-cover object-[50%_45%]"
            />
          </div>
          <div
            role="group"
            aria-label="Example colour swatches"
            className="absolute bottom-9 left-9 flex gap-2 md:bottom-10 md:left-12 lg:bottom-10 lg:left-0 lg:-translate-x-1/2 lg:flex-col"
          >
            {heroSwatches.map((s) => (
              <div key={s.hex} className="w-[6.25rem] overflow-hidden rounded-lg bg-white p-1.5 lg:w-28">
                <div className="h-8 rounded-md sm:h-10 lg:h-12" style={{ background: s.hex }} />
                <p className="px-1 pb-0.5 pt-1.5 whitespace-nowrap text-[0.8125rem] font-semibold leading-tight text-ink">
                  {s.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
