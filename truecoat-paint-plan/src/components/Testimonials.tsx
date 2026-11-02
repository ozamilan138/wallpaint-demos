import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'

const tilt = ['sm:rotate-[-1.5deg]', 'sm:rotate-[1deg] sm:translate-y-6', 'sm:rotate-[-0.6deg]']
// A torn paper edge at the top and the bottom of each slip.
const torn =
  'polygon(0 6px, 4% 0, 8% 6px, 12% 0, 16% 6px, 20% 0, 24% 6px, 28% 0, 32% 6px, 36% 0, 40% 6px, 44% 0, 48% 6px, 52% 0, 56% 6px, 60% 0, 64% 6px, 68% 0, 72% 6px, 76% 0, 80% 6px, 84% 0, 88% 6px, 92% 0, 96% 6px, 100% 0, 100% calc(100% - 6px), 96% 100%, 92% calc(100% - 6px), 88% 100%, 84% calc(100% - 6px), 80% 100%, 76% calc(100% - 6px), 72% 100%, 68% calc(100% - 6px), 64% 100%, 60% calc(100% - 6px), 56% 100%, 52% calc(100% - 6px), 48% 100%, 44% calc(100% - 6px), 40% 100%, 36% calc(100% - 6px), 32% 100%, 28% calc(100% - 6px), 24% 100%, 20% calc(100% - 6px), 16% 100%, 12% calc(100% - 6px), 8% 100%, 4% calc(100% - 6px), 0 100%)'

/** Testimonials. The demo shows labelled placeholders only. Replace them with real reviews. */
export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-beige py-20 sm:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 id="testimonials-title" className="h-section" data-reveal>
            What Customers Say.
          </h2>
          <p className="lede lg:justify-self-end" data-reveal style={{ ['--d' as string]: 1 }}>
            This space is for real reviews from TrueCoat customers. The cards below are placeholders until then.
          </p>
        </div>
        <ul className="mt-12 grid max-w-2xl gap-6 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <li key={t.id} data-reveal style={{ ['--d' as string]: i }}>
              <figure className={`flex h-full flex-col bg-paper px-6 pb-9 pt-10 ${tilt[i % tilt.length]}`} style={{ clipPath: torn }}>
                {t.placeholder && (
                  <p className="self-start rounded-full bg-terracotta/20 px-3 py-1 font-ui text-sm font-semibold text-terracotta-deep">
                    Placeholder, not a real review
                  </p>
                )}
                <Quote aria-hidden="true" className="mt-5 size-8 text-sage" />
                <blockquote className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-ink">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-heading text-lg font-bold">{t.name}</span>
                  <span className="block text-base text-muted">{t.detail}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
