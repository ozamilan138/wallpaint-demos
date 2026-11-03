import { CalendarCheck, ClipboardList, MessageCircle, Palette } from 'lucide-react'
import { Img } from './Img'
import { processSteps } from '../data/content'
import { useReveal } from '../lib/useReveal'

const icons = [Palette, MessageCircle, ClipboardList, CalendarCheck]

export function ProcessSteps() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="process" aria-labelledby="process-title" className="section-gap bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="relative lg:col-span-5">
          <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-photo)] bg-white sm:aspect-[16/10] lg:aspect-[4/5]">
            <Img
              name="step-tray"
              alt="A paint tray with white paint and a roller on a wooden step"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          <div ref={ref} className="reveal">
            <h2 id="process-title" className="h2">
              From Inspiration to a Fresh Home
            </h2>
            <p className="lead">4 simple steps, from your first idea to painted walls.</p>
          </div>
          <ol className="mt-10 grid gap-4">
            {processSteps.map((s, i) => {
              const Icon = icons[i]
              return (
                <li key={s.title} className="grid grid-cols-[auto_1fr] gap-x-5 rounded-2xl bg-white p-5 sm:p-6">
                  <span className="font-display row-span-2 text-[2.4rem] leading-none font-extrabold tracking-[-0.04em] text-green sm:text-[3rem]">
                    {String(i + 1).padStart(2, '0') /* taste-skill-ignore: the brief asks for steps 01 to 04. */}
                    <span className="sr-only">.</span>
                  </span>
                  <h3 className="flex items-center gap-2.5 text-[1.2rem] font-extrabold tracking-[-0.01em] sm:text-[1.3rem]">
                    <Icon className="size-5 shrink-0 text-terracotta-deep" aria-hidden />
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[16px] leading-relaxed text-ink/85">{s.text}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
