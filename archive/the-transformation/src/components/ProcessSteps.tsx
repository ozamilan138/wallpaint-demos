import { processSteps } from '../data/content'

export function ProcessSteps() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="process-title"
            data-reveal
            className="text-[clamp(2.6rem,6.5vw,5.75rem)] leading-[0.95] font-extrabold tracking-[-0.05em] md:col-span-6 lg:col-span-7"
          >
            How It Works
          </h2>
          <p data-reveal style={{ ['--d' as string]: 1 }} className="max-w-md text-[17px] leading-relaxed md:col-span-6 md:justify-self-end lg:col-span-5">
            Four simple steps from the first message to a finished room.
          </p>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} data-reveal style={{ ['--d' as string]: i }} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-display text-[clamp(4rem,7vw,6.5rem)] leading-none font-extrabold tracking-[-0.06em] text-accent-strong">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {i < processSteps.length - 1 && (
                  <span className="hidden h-[3px] flex-1 rounded-full bg-paper-2 lg:block" aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-6 text-[22px] leading-tight font-bold tracking-[-0.025em]">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[16px] leading-relaxed text-muted-ink">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
