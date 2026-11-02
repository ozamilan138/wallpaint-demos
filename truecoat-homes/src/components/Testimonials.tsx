import { photos } from '../data/photos'
import { testimonials } from '../data/testimonials'
import { Picture } from './Picture'

function PlaceholderBadge() {
  return (
    <p className="inline-flex rounded-full bg-sand-soft px-3 py-1 font-ui text-[14px] font-semibold text-ink">
      Sample placeholder, not a real review
    </p>
  )
}

/**
 * Testimonials: one large quotation offset beside a room photograph, and two short ones.
 * Every entry with placeholder: true shows a clear label.
 */
export function Testimonials() {
  const [main, ...rest] = testimonials
  return (
    <section aria-labelledby="reviews-title" className="py-24 md:py-36">
      <div className="shell">
        <h2
          id="reviews-title"
          className="text-[clamp(32px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.03em]"
          data-reveal
        >
          What Customers Say
        </h2>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
          <figure className="relative aspect-[4/5] w-[78%] overflow-hidden md:col-span-4 md:w-full md:aspect-[3/4]" data-reveal>
            <Picture photo={photos.tRoom} sizes="(min-width: 768px) 33vw, 78vw" className="h-full w-full object-cover" />
            <span className="demo-tag top-3 left-3">Demo image</span>
          </figure>

          <div className="md:col-span-7 md:col-start-6 md:pt-24">
            <figure data-reveal style={{ ['--i' as string]: 1 }}>
              <blockquote className=" max-w-[34ch] font-display text-[clamp(22px,2.1vw,30px)] leading-[1.25] font-semibold tracking-[-0.015em]">
                <p>“{main.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 text-[16px]">
                <span className="font-semibold">{main.name}</span>
                <span className="text-muted">, {main.projectType}</span>
                {main.placeholder && <div className="mt-3"><PlaceholderBadge /></div>}
              </figcaption>
            </figure>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {rest.map((t, i) => (
                <figure key={i} className="bg-mist p-6" data-reveal style={{ ['--i' as string]: i + 2 }}>
                  <blockquote className="text-[17px]">
                    <p>“{t.quote}”</p>
                  </blockquote>
                  <figcaption className="mt-4 text-[15px]">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-muted">, {t.projectType}</span>
                    {t.placeholder && <div className="mt-3"><PlaceholderBadge /></div>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
