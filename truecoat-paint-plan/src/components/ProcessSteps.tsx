import { CalendarCheck, ClipboardCheck, MessageSquareText, Palette } from 'lucide-react'
import { processSteps } from '../data/content'

const icons = [Palette, MessageSquareText, ClipboardCheck, CalendarCheck]
const colours = ['#DCE7DB', '#E9DCC7', '#A9BDC9', '#8FA98F']

/** The four steps of the working process. Horizontal on a wide screen, vertical on a phone. */
export function ProcessSteps() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-paper py-20 sm:py-28">
      <div className="wrap">
        <h2 id="process-title" className="h-section max-w-[18ch]" data-reveal>
          From Colour Ideas to a Fresh Home.
        </h2>
        <ol className="relative mt-12 grid gap-0 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((s, i) => {
            const Icon = icons[i]
            return (
              <li key={s.title} data-reveal style={{ ['--d' as string]: i }} className="relative flex gap-5 pb-10 lg:flex-col lg:pb-0">
                {/* The paint line that joins the steps */}
                <span
                  aria-hidden="true"
                  className={`absolute left-[1.6875rem] top-16 bottom-0 w-1.5 rounded-full lg:left-16 lg:right-[-1.5rem] lg:top-[1.6875rem] lg:bottom-auto lg:h-1.5 lg:w-auto ${i === processSteps.length - 1 ? 'hidden' : ''}`}
                  style={{ background: colours[i] }}
                />
                <span
                  aria-hidden="true"
                  className="relative z-10 grid size-[3.875rem] shrink-0 place-items-center rounded-full text-ink"
                  style={{ background: colours[i] }}
                >
                  <Icon className="size-7" />
                </span>
                <div className="pt-1 lg:pt-0">
                  <p className="font-heading text-[2rem] font-extrabold leading-none text-soft-ink" aria-hidden="true">
                    {String(i + 1).padStart(2, '0') /* taste-skill-ignore: the brief asks for 01 to 04 */}
                  </p>
                  <h3 className="mt-2 text-[1.375rem] font-extrabold leading-snug">
                    <span className="sr-only">Step {i + 1}: </span>
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[22rem] text-base leading-relaxed">{s.text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
