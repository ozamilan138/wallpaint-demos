import { processSteps } from '../data/content'
import { useReveal } from '../hooks/useReveal'

/** Four steps: a horizontal timeline on wide screens, a vertical timeline on a phone. */
export function ProcessTimeline() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} id="process" aria-labelledby="process-title" className="bg-mist py-24 sm:py-32 lg:py-36">
      <div className="frame">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="process-title" className="reveal text-[clamp(2.2rem,5.2vw,4.25rem)] leading-[1.02] font-extrabold md:col-span-7">
            Four Simple Steps.
          </h2>
          <p className="reveal text-[18px] leading-relaxed md:col-span-5 md:pb-2" style={{ ['--d' as string]: '80ms' }}>
            From your first message to the first coat of paint. You know what happens next at each step.
          </p>
        </div>

        <ol className="mt-14 grid gap-0 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => {
            const last = i === processSteps.length - 1
            return (
              <li key={step.title} className="reveal relative flex gap-5 pb-10 lg:block lg:pb-0" style={{ ['--d' as string]: `${i * 100}ms` }}>
                {/* The connecting bar: vertical on a phone, horizontal on a wide screen. */}
                {!last && (
                  <span
                    className="absolute top-14 bottom-0 left-[1.625rem] w-1 rounded-full bg-green-light lg:top-[1.625rem] lg:right-[-2rem] lg:bottom-auto lg:left-14 lg:h-1 lg:w-auto"
                    aria-hidden="true"
                  />
                )}
                <span className="relative grid size-14 shrink-0 place-items-center rounded-full bg-green font-display text-[20px] font-extrabold text-white tabular-nums">
                  {String(i + 1).padStart(2, '0') /* taste-skill-ignore: the brief asks for numbered steps 01 to 04 */}
                </span>
                <div className="pt-2 lg:pt-6">
                  <h3 className="text-[22px] leading-snug font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-[34ch] text-[16px] leading-relaxed text-soft-ink">{step.text}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
