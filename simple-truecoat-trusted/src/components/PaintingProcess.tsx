import { processSteps } from '../data/content'

export function PaintingProcess() {
  return (
    <section aria-labelledby="process-title" className="bg-field py-16 lg:py-20">
      <div className="wrap">
        <h2 id="process-title" className="section-title">
          How It Works
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ title, text }, index) => (
            <li key={title} className="flex gap-4 lg:flex-col lg:gap-3">
              <span
                aria-hidden
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-green font-display font-bold text-white"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold">
                  <span className="sr-only">Step {index + 1}: </span>
                  {title}
                </h3>
                <p className="mt-1 leading-relaxed text-ink/80">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
