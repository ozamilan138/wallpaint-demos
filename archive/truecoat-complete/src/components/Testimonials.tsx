import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'
import { delay } from '../lib/reveal'

/**
 * Testimonials. The current items are placeholders, not real reviews.
 * Replace the items in src/data/content.ts with genuine feedback, and get permission to show each name.
 */
export function Testimonials() {
  const [main, ...rest] = testimonials
  return (
    <section aria-labelledby="testimonials-title" className="section">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="testimonials-title" className="h2 lg:col-span-6" data-reveal>
            What Customers Say.
          </h2>
          <p className="text-muted lg:col-span-6" data-reveal style={delay(1)}>
            <strong className="font-semibold text-ink">Placeholder content.</strong> These cards show where real customer
            reviews will go. They are not reviews from real customers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <figure data-reveal className="flex flex-col justify-between rounded-2xl bg-green p-8 text-white sm:p-10 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between gap-4">
                <Quote aria-hidden size={40} className="text-white/70" />
                <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">Placeholder</span>
              </div>
              <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug sm:text-[1.75rem]">
                {main.quote}
              </blockquote>
            </div>
            <figcaption className="mt-8">
              <span className="block font-semibold">{main.name}</span>
              <span className="text-white/80">{main.detail}</span>
            </figcaption>
          </figure>

          <div className="grid gap-6 lg:col-span-5">
            {rest.map((t, i) => (
              <figure key={i} data-reveal style={delay(i + 1)} className="flex flex-col justify-between rounded-2xl bg-ground-2 p-7">
                <div>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold">Placeholder</span>
                  <blockquote className="mt-4 text-lg leading-relaxed">{t.quote}</blockquote>
                </div>
                <figcaption className="mt-6">
                  <span className="block font-semibold">{t.name}</span>
                  <span className="text-muted">{t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
