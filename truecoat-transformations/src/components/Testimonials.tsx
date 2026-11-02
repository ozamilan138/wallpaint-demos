import { photos } from '../data/photos'
import { testimonials } from '../data/testimonials'
import { useReveal } from '../hooks/useReveal'
import { Picture } from './Picture'

/**
 * Customer reviews. All current entries are labelled placeholders.
 * The first review shows large; the others show small below it.
 */
export function Testimonials() {
  const ref = useReveal<HTMLElement>()
  const [main, ...others] = testimonials
  if (!main) return null

  return (
    <section ref={ref} id="reviews" aria-labelledby="reviews-title" className="py-24 sm:py-32 lg:py-40">
      <div className="frame grid gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="reveal relative w-[78%] sm:w-[60%] lg:col-span-5 lg:w-auto">
          <div className="aspect-[4/5] overflow-hidden bg-mist">
            <Picture photo={photos.reviewLiving} sizes="(min-width: 1024px) 38vw, 78vw" className="h-full w-full object-cover" />
          </div>
          <span className="demo-tag">Sample photo</span>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-20">
          <h2 id="reviews-title" className="reveal text-[clamp(2.2rem,5.2vw,4.25rem)] leading-[1.02] font-extrabold">
            What Customers Say.
          </h2>

          <figure className="reveal mt-8" style={{ ['--d' as string]: '80ms' }}>
            <blockquote className="text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.3] font-medium tracking-[-0.01em] text-ink">
              <p>{main.review}</p>
            </blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[16px]">
              <span>
                <span className="font-semibold">{main.name}</span>
                {main.projectType && <span className="text-soft-ink">, {main.projectType}</span>}
              </span>
              {main.isPlaceholder && <Placeholder />}
            </figcaption>
          </figure>

          {others.length > 0 && (
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {others.map((t, i) => (
                <li key={t.id} className="reveal rounded-3xl bg-mist p-6" style={{ ['--d' as string]: `${140 + i * 70}ms` }}>
                  <figure>
                    <blockquote className="text-[18px] leading-relaxed">
                      <p>{t.review}</p>
                    </blockquote>
                    <figcaption className="mt-3 text-[15px]">
                      <span className="font-semibold">{t.name}</span>
                      {t.projectType && <span className="text-soft-ink">, {t.projectType}</span>}
                      {t.isPlaceholder && (
                        <span className="mt-3 block">
                          <Placeholder />
                        </span>
                      )}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

function Placeholder() {
  return (
    <span className="inline-flex rounded-full bg-warm px-3 py-1 font-ui text-[14px] font-semibold text-dark">Placeholder, not a real review</span>
  )
}
