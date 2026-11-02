import { ClipboardList, MessagesSquare, CalendarCheck, Ruler } from 'lucide-react'
import { processSteps } from '../data/content'

const icons = [MessagesSquare, Ruler, ClipboardList, CalendarCheck]

/** "How We Work": a horizontal timeline on desktop and a vertical timeline on phones. */
export function ProcessTimeline() {
  return (
    <section id="process" aria-labelledby="process-title" className="on-dark bg-dark py-24 text-paper md:py-36">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="process-title"
            className="text-[clamp(32px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.03em] md:col-span-6"
            data-reveal
          >
            How We Work
          </h2>
          <p className="max-w-[46ch] text-[18px] text-on-dark-muted md:col-span-6 md:justify-self-end" data-reveal style={{ ['--i' as string]: 1 }}>
            Four clear steps from the first message to the first coat of paint.
          </p>
        </div>

        <div className="relative mt-14 md:mt-20">
          {/* The connecting line: vertical on phones, horizontal on desktop. */}
          <span aria-hidden="true" className="absolute top-7 bottom-7 left-7 w-0.5 bg-white/20 md:top-7 md:right-[calc((100%-96px)/4-28px)] md:bottom-auto md:left-7 md:h-0.5 md:w-auto" />
          <ol className="relative grid gap-0 md:grid-cols-4 md:gap-8">
          {processSteps.map((step, i) => {
            const Icon = icons[i]
            return (
              <li key={step.title} className="relative grid grid-cols-[56px_1fr] gap-x-5 pb-12 last:pb-0 md:block md:pb-0" data-reveal style={{ ['--i' as string]: i }}>
                <span className="relative z-10 grid size-14 place-items-center rounded-full bg-sand font-display text-[20px] font-extrabold text-ink">
                  {String(i + 1).padStart(2, '0') /* taste-skill-ignore: the brief asks for 01 to 04 */}
                </span>
                <div className="pt-2 md:pt-8">
                  <Icon className="size-6 text-sand" aria-hidden="true" />
                  <h3 className="mt-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">{step.title}</h3>
                  <p className="mt-2 max-w-[34ch] text-[16px] text-on-dark-muted">{step.text}</p>
                </div>
              </li>
            )
          })}
        </ol>
        </div>
      </div>
    </section>
  )
}
