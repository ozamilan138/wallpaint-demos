import { Check } from 'lucide-react'
import { heroPoints } from '../data/content'
import { Picture } from './Picture'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title">
      <div className="container-page grid items-center gap-8 pb-14 pt-6 sm:pt-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14 lg:pb-20 lg:pt-12">
        <div>
          <h1
            id="hero-title"
            className="text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[2.75rem] xl:text-[3.25rem]"
          >
            Professional Painting. Beautiful Spaces. Options That Fit Your Home.
          </h1>
          <p className="lead mt-5 max-w-xl text-ink/80">
            From refreshing a single room to painting an entire home, we help you find the right painting solution for
            your space.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#estimate" className="btn btn-primary px-7">
              Get a Free Estimate
            </a>
            <a href="#work" className="btn btn-secondary px-7">
              Explore Our Work
            </a>
          </div>
          <ul className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6" aria-label="Our service approach">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 font-medium">
                <Check aria-hidden size={18} strokeWidth={3} className="shrink-0 text-green" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <Picture
            name="hero-living"
            alt="A bright living room with sage green walls, a round mirror, a wooden sideboard and large plants"
            sizes="(min-width: 1024px) 45vw, 100vw"
            priority
            className="aspect-[4/3] w-full object-cover object-[50%_45%] lg:aspect-[5/5]"
          />
        </div>
      </div>
    </section>
  )
}
