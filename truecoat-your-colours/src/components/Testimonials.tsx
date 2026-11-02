import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'
import { useReveal } from '../lib/useReveal'

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>()
  const [first, ...rest] = testimonials

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section-gap">
      <div className="container-page">
        <div ref={ref} className="reveal max-w-[44rem]">
          <h2 id="reviews-title" className="h2">
            What Customers Say
          </h2>
          <p className="lead">
            This space is for real reviews. The cards below are sample placeholders. They will be replaced with genuine
            feedback after customers give permission.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <figure className="flex flex-col rounded-3xl bg-sage-soft p-7 sm:p-10 lg:col-span-7">
            <PlaceholderTag />
            <Quote className="mt-6 size-10 text-green" aria-hidden />
            <blockquote className="font-display mt-4 text-[1.4rem] leading-snug font-bold tracking-[-0.01em] sm:text-[1.65rem]">
              {first.quote}
            </blockquote>
            <figcaption className="mt-auto pt-8 text-[16px]">
              <span className="block font-semibold">{first.name}</span>
              <span className="text-muted">{first.detail}</span>
            </figcaption>
          </figure>
          <div className="grid gap-5 lg:col-span-5">
            {rest.map((t, i) => (
              <figure key={i} className="flex flex-col rounded-3xl bg-white p-6 sm:p-7">
                <PlaceholderTag />
                <blockquote className="mt-4 text-[17px] leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-5 text-[15px]">
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

function PlaceholderTag() {
  return (
    <span className="font-ui inline-flex self-start rounded-full bg-beige px-3 py-1 text-[14px] font-semibold text-ink">
      Sample placeholder, not a real review
    </span>
  )
}
