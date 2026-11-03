import { CircleCheck } from 'lucide-react'
import { heroStatements } from '../data/content'
import { images } from '../data/images'
import { ResponsiveImage } from './ResponsiveImage'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="pt-6 pb-16 sm:pt-10 lg:pt-14 lg:pb-20">
      <div className="wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <h1 id="hero-title" className="text-[2.1rem] leading-[1.1] font-extrabold sm:text-5xl lg:text-[3.4rem]">
            Beautiful Walls. Reliable Work. Prices That Make Sense.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/85">
            Home painting with careful work, clear communication and estimates that fit your needs.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#estimate" className="btn btn-primary">
              Get a Free Estimate
            </a>
            <a href="#work" className="btn btn-secondary">
              View Our Work
            </a>
          </div>
          <ul aria-label="What we offer" className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {heroStatements.map((statement) => (
              <li key={statement} className="flex items-center gap-2 font-medium">
                <CircleCheck aria-hidden size={20} className="shrink-0 text-green-deep" />
                {statement}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-3xl bg-field">
          <ResponsiveImage
            image={images.hero}
            priority
            sizes="(min-width: 1216px) 580px, (min-width: 1024px) 48vw, 100vw"
            className="aspect-[4/3] w-full object-cover object-[45%_50%]"
          />
        </div>
      </div>
    </section>
  )
}
