import { images } from '../data/images'
import { principles } from '../data/content'
import { ResponsiveImage } from './ResponsiveImage'

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="page-x mx-auto max-w-page py-24 sm:py-32 lg:py-44">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <figure data-reveal className="relative lg:col-span-5">
          <div className="lg:sticky lg:top-[112px]">
          <div className="img-zoom aspect-[4/3] overflow-hidden bg-linen sm:aspect-[3/2] lg:aspect-[4/5]">
            <ResponsiveImage
              image={images.prepHand}
              alt="A hand pressing filler into a wall to prepare the surface before painting"
              sizes="(min-width: 1024px) 40vw, 100vw"
              objectPosition="35% 60%"
            />
          </div>
          <figcaption className="mt-3 text-[14px] text-muted">Filling and smoothing a wall before paint. Sample image.</figcaption>
          </div>
        </figure>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <h2 id="why-title" data-reveal className="text-[clamp(2.4rem,1.5rem+3vw,4.25rem)] leading-[1.02]">
            Why Choose Aureline
          </h2>
          <p
            data-reveal
            style={{ ['--reveal-delay' as string]: '80ms' }}
            className="mt-6 max-w-[34rem] text-[18px] leading-[1.6]"
          >
            The principles that guide every room we paint, whatever its size.
          </p>

          <dl className="mt-12 grid gap-10 sm:mt-16 sm:gap-12">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${index * 60}ms` }}
                className="grid gap-2 sm:grid-cols-[1fr_1.2fr] sm:gap-8"
              >
                <dt className="font-serif text-[26px] font-semibold leading-[1.15] sm:text-[28px]">{principle.title}</dt>
                <dd className="text-[17px] leading-[1.65] text-ink sm:pt-1">{principle.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
