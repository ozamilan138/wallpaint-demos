import { processSteps } from '../data/content'

export function PaintingProcess() {
  return (
    <section aria-labelledby="process-title" className="bg-field py-20 lg:py-28">
      <div className="wrap">
        <h2 id="process-title" data-reveal className="max-w-[22ch] text-[1.75rem] leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
          Getting Your Home Painted Should Be Simple.
        </h2>

        {/* A vertical timeline on phones and a horizontal timeline on wide screens. */}
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-6 w-1 rounded-full bg-green/20 lg:top-6 lg:right-[calc(25%-3rem)] lg:bottom-auto lg:left-6 lg:h-1 lg:w-auto"
          />
          {processSteps.map(({ number, title, text, icon: Icon }, index) => (
            <li
              key={number}
              data-reveal
              style={{ '--reveal-i': index } as React.CSSProperties}
              className="relative grid grid-cols-[3rem_1fr] gap-x-5 lg:grid-cols-1 lg:gap-y-6"
            >
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-green text-white">
                <Icon aria-hidden size={22} />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-green-deep">
                  <span className="sr-only">Step </span>
                  {number}
                </p>
                <h3 className="mt-1 text-xl font-bold">{title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-ink/80">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
