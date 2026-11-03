import { testimonials } from '../data/content'

/**
 * Testimonials. The current items are placeholders, not real reviews.
 * Replace the items in src/data/content.ts with genuine feedback, and get permission to show each name.
 * The section is hidden when the list is empty.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <section aria-labelledby="testimonials-title" className="section-sm bg-ground-2">
      <div className="container-page">
        <h2 id="testimonials-title" className="h2">
          What Customers Say.
        </h2>
        <p className="mt-3 text-muted">
          <strong className="font-semibold text-ink">Placeholder content.</strong> These cards show where real customer
          reviews will go. They are not reviews from real customers.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border-2 border-dashed border-[#cfd6cd] bg-white p-6">
              <span className="rounded-full bg-ground-2 px-3 py-1 text-sm font-semibold">Placeholder</span>
              <blockquote className="mt-4 text-lg leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-4">
                <span className="block font-semibold">{t.name}</span>
                <span className="text-muted">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
