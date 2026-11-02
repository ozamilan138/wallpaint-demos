import { processSteps } from '../data/content'
import { Reveal, SectionHeading } from './Section'

/** Each step is a paint chip. The colour gets deeper as the job moves forward. */
const chips = [
  { bg: '#E6DCC6', fg: '#292B27' },
  { bg: '#A7B69B', fg: '#292B27' },
  { bg: '#C98168', fg: '#292B27' },
  { bg: '#3E4A38', fg: '#F8F6F0' },
]

export function ProcessSteps() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-20 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionHeading id="process-title" title="How It Works.">
          Four simple stages, from the first idea to a finished room.
        </SectionHeading>

        <Reveal as="ol" className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step, i) => (
            <li key={step.title} className="flex flex-col overflow-hidden rounded-3xl bg-white">
              <div className="flex h-28 items-end p-5 sm:h-36" style={{ backgroundColor: chips[i].bg, color: chips[i].fg }}>
                <span className="font-display text-5xl leading-none font-extrabold tracking-tight" aria-hidden>
                  {i + 1}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold tracking-tight">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-ink/80">{step.text}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
