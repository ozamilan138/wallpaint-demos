import { processSteps } from '../data/content'

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="bg-night text-paper">
      <div className="page-x mx-auto max-w-page py-24 sm:py-32 lg:py-40">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="process-title" data-reveal className="text-[clamp(2.4rem,1.5rem+3vw,4.25rem)] leading-[1.02] lg:col-span-6">
            Our Process
          </h2>
          <p
            data-reveal
            style={{ ['--reveal-delay' as string]: '80ms' }}
            className="max-w-[32rem] text-[18px] leading-[1.6] text-mist lg:col-span-5 lg:col-start-8"
          >
            Four simple steps from your first message to a finished room.
          </p>
        </div>

        <ol className="mt-16 grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
              className="grid grid-cols-[4.25rem_1fr] items-start gap-x-4 sm:block"
            >
              <span aria-hidden className="block font-serif text-[56px] font-medium leading-[0.9] text-sand [font-variant-numeric:lining-nums] sm:text-[96px]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="sm:mt-6">
                <h3 className="text-[26px] leading-[1.12] sm:text-[30px]">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[30ch] text-[16px] leading-[1.6] text-mist">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
