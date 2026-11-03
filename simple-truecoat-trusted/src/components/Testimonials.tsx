import { testimonials } from '../data/testimonials'

/** A small block for up to two reviews. Placeholders show a clear label. */
export function Testimonials() {
  const items = testimonials.slice(0, 2)
  if (items.length === 0) return null
  return (
    <section aria-labelledby="reviews-title" className="py-16 lg:py-20">
      <div className="wrap">
        <h2 id="reviews-title" className="section-title">
          What Customers Say
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.id}
              className={`rounded-2xl p-6 ${item.isPlaceholder ? 'border-2 border-dashed border-ink/20' : 'bg-white'}`}
            >
              {item.isPlaceholder && (
                <span className="inline-block rounded-full bg-amber-soft px-3 py-1 text-sm font-medium">
                  Placeholder, not a real review
                </span>
              )}
              <blockquote className={`mt-4 leading-relaxed ${item.isPlaceholder ? 'text-muted' : 'text-lg'}`}>
                <p>{item.quote}</p>
              </blockquote>
              <p className="mt-4 font-semibold">
                {item.name}
                <span className="block text-sm font-normal text-muted">{item.detail}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
