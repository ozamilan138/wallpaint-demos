import { testimonials } from '../data/content'

/**
 * Testimonials: one lead quotation and two smaller ones.
 * All three are labelled sample placeholders. Replace them in src/data/content.ts
 * with real reviews, used with the customers' permission.
 */
export function Testimonials() {
  const { lead, others } = testimonials
  return (
    <section aria-labelledby="testimonials-title" className="bg-dark py-24 text-white md:py-32 lg:py-40">
      <div className="container-page">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="testimonials-title" data-reveal className="text-[clamp(1.6rem,2.4vw,2rem)] font-bold tracking-[-0.03em]">
            What Customers Say
          </h2>
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-[13px] font-medium text-white/85">
            Sample placeholders, not real reviews
          </span>
        </div>

        <figure data-reveal className="mt-14 max-w-4xl md:mt-20">
          <blockquote className="text-[clamp(1.45rem,3.4vw,2.25rem)] leading-[1.18] font-semibold tracking-[-0.03em] text-white">
            <p>“{lead.quote}”</p>
          </blockquote>
          <figcaption className="mt-6 text-[16px] text-muted-light">
            <span className="font-semibold text-white">{lead.name}</span> <span aria-hidden="true">/</span> {lead.detail}
          </figcaption>
        </figure>

        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12">
          {others.map((t, i) => (
            <figure
              key={i}
              data-reveal
              style={{ ['--d' as string]: i }}
              className={i === 0 ? 'md:col-span-4' : 'pl-[25%] md:col-span-4 md:col-start-9 md:pl-0'}
            >
              <blockquote className="text-[17px] leading-relaxed text-white/90">
                <p>“{t.quote}”</p>
              </blockquote>
              <figcaption className="mt-4 text-[15px] text-muted-light">
                <span className="font-semibold text-white">{t.name}</span>
                <br />
                {t.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
