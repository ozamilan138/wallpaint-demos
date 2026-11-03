import { Check } from 'lucide-react'
import { values } from '../data/content'
import { Img } from './Img'

/** The value and trust section: the proposed values, printed on a card. */
export function WhyChooseUs() {
  return (
    <section id="values" aria-labelledby="values-title" className="overflow-hidden bg-sage-deeper py-20 text-paper sm:py-28">
      <div className="wrap">
        <h2 id="values-title" className="h-section max-w-[36ch] text-paper" data-reveal>
          Good Painting. Clear Communication. No Unnecessary Complexity.
        </h2>
      </div>
      <div className="wrap mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-16">
        <div className="flex flex-col gap-8">
          <p className="max-w-[30rem] text-lg leading-relaxed text-sage-soft" data-reveal style={{ ['--d' as string]: 1 }}>
            We want painting your home to feel simple. These are the values that guide how we work, from the first message
            to the final clean-up.
          </p>
          <Img
            name="values-brick-wall"
            alt="A white painted brick wall with framed leaf prints and a vase of dried grass"
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="hidden aspect-[4/3] w-full rounded-card lg:block"
          />
        </div>
        {/* The printed card. It turns a little, like a sheet that lies on a table. */}
        <div className="relative" data-reveal style={{ ['--d' as string]: 2 }}>
          <div className="rounded-card bg-paper p-6 text-ink sm:rotate-[-1.2deg] sm:p-10">
            <div className="paint-strip -mx-6 -mt-6 mb-8 h-3 sm:-mx-10 sm:-mt-10" aria-hidden="true">
              <span className="bg-sage" />
              <span className="bg-sage-soft" />
              <span className="bg-beige" />
              <span className="bg-terracotta" />
              <span className="bg-blue" />
            </div>
            <ul className="grid gap-6">
              {values.map((v) => (
                <li key={v.title} className="flex gap-4">
                  <span aria-hidden="true" className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-sage-soft text-sage-deep">
                    <Check className="size-5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="text-[1.25rem] font-extrabold leading-snug">{v.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-ink">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[34rem] text-sm text-muted">Proposed values for this demo. The owner will confirm them.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
