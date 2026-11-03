import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { testimonials } from '../data/content'
import { images } from '../data/images'
import { ResponsiveImage } from './ResponsiveImage'
import { DemoTag } from './DemoTag'

/**
 * Testimonials. The data comes from src/data/content.ts.
 * While isPlaceholder is true, the quote shows a visible "Placeholder" label.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const item = testimonials[index]
  const count = testimonials.length
  const go = (step: number) => setIndex((i) => (i + step + count) % count)

  return (
    <section aria-labelledby="testimonials-title" className="bg-linen">
      <div className="page-x mx-auto max-w-page py-24 sm:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="relative w-[78%] md:w-[56%] lg:col-span-4 lg:col-start-2 lg:w-full">
            <div className="aspect-[3/4] overflow-hidden bg-paper">
              <ResponsiveImage
                image={images.testimonialRoom}
                alt="A living room with sage green walls, woven pendant lights and a grey sofa"
                sizes="(min-width: 1024px) 32vw, 78vw"
                objectPosition="40% 50%"
              />
            </div>
            <DemoTag className="left-3 top-3" />
          </div>

          <div className="flex flex-col lg:col-span-6 lg:col-start-7 lg:pt-24">
            <h2 id="testimonials-title" data-reveal className="text-[clamp(2.4rem,1.5rem+3vw,4.25rem)] leading-[1.02]">
              Kind Words
            </h2>

            <figure
              data-reveal
              style={{ ['--reveal-delay' as string]: '80ms' }}
              className="mt-10"
              aria-live="polite"
              aria-roledescription="testimonial"
            >
              <blockquote key={index} className="hero-rise">
                <p className="font-serif text-[clamp(1.5rem,1.2rem+1.2vw,2.25rem)] font-medium leading-[1.25]">
                  “{item.quote}”
                </p>
              </blockquote>
              <figcaption className="mt-6 text-[16px]">
                <span className="font-medium">{item.name}</span>
                <span className="text-muted">, {item.context}</span>
                {item.isPlaceholder && (
                  <span className="mt-3 block w-fit bg-paper px-3 py-1 text-[13px] font-medium text-bronze-deep">
                    Placeholder testimonial, {index + 1} of {count}
                  </span>
                )}
              </figcaption>
            </figure>

            <div className="mt-10 flex items-center gap-2">
              <button type="button" onClick={() => go(-1)} className="btn btn-outline h-12 w-12 px-0" aria-label="Previous testimonial">
                <ArrowLeft aria-hidden size={18} />
              </button>
              <button type="button" onClick={() => go(1)} className="btn btn-outline h-12 w-12 px-0" aria-label="Next testimonial">
                <ArrowRight aria-hidden size={18} />
              </button>
            </div>

            <p className="mt-10 max-w-[34rem] text-[14px] leading-[1.55] text-muted">
              These are placeholders for the layout. Real client testimonials, with their permission, will replace
              them before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
