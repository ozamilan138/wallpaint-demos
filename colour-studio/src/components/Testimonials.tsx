import { testimonials } from '../data/content'
import { Reveal, SectionHeading } from './Section'

/**
 * Testimonials. The items in src/data/content.ts are placeholders.
 * Replace them only with genuine reviews that customers allow you to show.
 */
export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-20 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionHeading id="testimonials-title" title="What Our Customers Say.">
          Genuine reviews will appear here when customers share them. The cards below are placeholders, not real reviews.
        </SectionHeading>

        <Reveal as="ul" className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {testimonials.map((t, i) => (
            <li key={i} className={`flex flex-col rounded-3xl bg-white p-6 sm:p-8 ${i === 1 ? 'md:mt-10' : ''}`}>
              <span className="self-start rounded-full bg-paper px-3 py-1 text-[13px] font-semibold">Placeholder, not a real review</span>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-muted">{t.quote}</blockquote>
              <p className="mt-6 text-base font-semibold">{t.name}</p>
              <p className="text-[15px] text-muted">{t.detail}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
