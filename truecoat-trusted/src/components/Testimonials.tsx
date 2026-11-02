import { testimonials } from '../data/testimonials'

export function Testimonials() {
  const hasPlaceholders = testimonials.some((item) => item.isPlaceholder)
  return (
    <section aria-labelledby="reviews-title" className="py-20 lg:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="reviews-title" data-reveal className="text-[1.75rem] leading-tight font-extrabold sm:text-4xl lg:col-span-6 lg:text-[2.75rem]">
            What Customers Appreciate.
          </h2>
          {hasPlaceholders && (
            <p data-reveal className="max-w-xl text-lg text-muted lg:col-span-6">
              Real customer reviews will appear here. The cards below are placeholders. They are not reviews from
              real customers.
            </p>
          )}
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <li
              key={item.id}
              data-reveal
              style={{ '--reveal-i': index } as React.CSSProperties}
              className={`flex flex-col rounded-3xl p-7 ${
                item.isPlaceholder ? 'border-2 border-dashed border-ink/20 bg-white/60' : 'bg-white'
              }`}
            >
              {item.isPlaceholder && (
                <span className="self-start rounded-full bg-amber-soft px-3 py-1 text-sm font-medium">
                  Placeholder, not a real review
                </span>
              )}
              <blockquote className={`mt-5 flex-1 text-lg leading-relaxed ${item.isPlaceholder ? 'text-muted' : ''}`}>
                <p>{item.quote}</p>
              </blockquote>
              <p className="mt-6 font-semibold">
                {item.name}
                <span className="mt-0.5 block text-sm font-normal text-muted">{item.detail}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
