import { journeySteps } from '../data/content'
import { delay } from '../lib/reveal'

/** A vertical timeline on small screens and a horizontal timeline on large screens. */
export function ProcessTimeline() {
  return (
    <section id="process" aria-labelledby="process-title" className="section bg-ground-2">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="process-title" className="h2 lg:col-span-6" data-reveal>
            Getting Started Is Simple.
          </h2>
          <p className="lead text-ink/80 lg:col-span-6" data-reveal style={delay(1)}>
            Four steps from your first message to the first coat of paint. You decide at each step.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          {/* The connecting line. Vertical on small screens, horizontal on large screens. */}
          <span aria-hidden className="absolute bottom-6 left-[1.4rem] top-6 w-[3px] rounded bg-oat/60 lg:hidden" />
          <span aria-hidden className="absolute left-6 right-[calc(25%-0.5rem)] top-[1.4rem] hidden h-[3px] rounded bg-oat/60 lg:block" />
          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
          {journeySteps.map((step, i) => (
            <li key={step.title} data-reveal style={delay(i)} className="relative flex gap-5 lg:flex-col lg:gap-6">
              <span className="relative z-10 inline-flex size-[2.85rem] shrink-0 items-center justify-center rounded-full bg-green font-display text-base font-bold text-white box-content border-[6px] border-ground-2">
                {String(i + 1).padStart(2, '0') /* The brief numbers the steps. taste-skill-ignore */}
              </span>
              <div className="pt-1.5 lg:pt-0">
                <h3 className="text-xl font-bold leading-snug lg:max-w-[14ch]">{step.title}</h3>
                <p className="mt-2 text-ink/80">{step.text}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-col gap-3 sm:flex-row" data-reveal>
          <a href="#estimate" className="btn btn-primary">
            Start With Step One
          </a>
        </div>
      </div>
    </section>
  )
}
