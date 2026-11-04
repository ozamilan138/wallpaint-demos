import { Check } from 'lucide-react'
import { principles, processSteps, testimonials } from '../data/content'
import { SectionHeading } from './SectionHeading'

// The reviews block shows only real, permitted testimonials. Placeholders do not show on the live site.
const shownTestimonials = testimonials.filter((t) => !t.isPlaceholder).slice(0, 2)

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="page-x mx-auto max-w-page py-16 sm:py-24">
      <SectionHeading id="about-title" title="More Than Just a Fresh Coat of Paint.">
        A well-painted home changes how a space feels. From the right colour to a careful finish, every detail counts.
      </SectionHeading>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="text-[26px] leading-tight">How It Works</h3>
          <ol className="mt-5 grid gap-5">
            {processSteps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2.75rem_1fr] gap-x-3">
                <span aria-hidden className="font-serif text-[28px] font-semibold leading-none text-bronze-deep">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium">
                    <span className="sr-only">Step {index + 1}: </span>
                    {step.title}
                  </p>
                  <p className="mt-1 text-[16px] leading-[1.55] text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-[26px] leading-tight">Why Choose Us</h3>
          <ul className="mt-5 grid gap-3">
            {principles.map((principle) => (
              <li key={principle} className="flex items-start gap-3">
                <Check aria-hidden size={18} className="mt-1 shrink-0 text-bronze-deep" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {shownTestimonials.length > 0 && (
      <div className="mt-14 border-t border-ink/10 pt-10">
        <h3 className="text-[26px] leading-tight">What Clients Say</h3>
        <ul className="mt-5 grid gap-5 md:grid-cols-2">
          {shownTestimonials.map((t, index) => (
            <li key={index}>
              <figure className="h-full bg-linen p-5 sm:p-6">
                <blockquote className="text-[17px] leading-[1.6]">“{t.quote}”</blockquote>
                <figcaption className="mt-3 text-[15px]">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-muted">, {t.context}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      )}
    </section>
  )
}
