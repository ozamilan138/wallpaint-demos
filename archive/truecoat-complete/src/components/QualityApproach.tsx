import { ClipboardList, Home, PaintRoller, Palette } from 'lucide-react'
import { approachSteps } from '../data/content'
import { delay } from '../lib/reveal'
import { Picture } from './Picture'

const icons = [Home, Palette, ClipboardList, PaintRoller]

export function QualityApproach() {
  return (
    <section aria-labelledby="quality-title" className="section bg-ground-2">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28" data-reveal>
            <Picture
              name="quality-texture"
              alt="A hand smoothing filler onto a white wall to prepare the surface before painting"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-[4/3] w-full rounded-2xl object-cover object-[50%_40%] lg:aspect-[4/5]"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 id="quality-title" className="h2 lg:max-w-[20ch]" data-reveal>
            Professional Results Start With the Right Process.
          </h2>
          <p className="lead mt-6 max-w-2xl text-ink/80" data-reveal style={delay(1)}>
            Good painting is mostly what happens around the brush: looking closely, agreeing the plan and finishing
            with care.
          </p>
          <ol className="mt-12 flex flex-col">
            {approachSteps.map((step, i) => {
              const Icon = icons[i]
              return (
                <li
                  key={step.title}
                  data-reveal
                  style={delay(i % 2)}
                  className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-5 border-t-2 border-[#d9dfd7] py-7 last:pb-0 sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.3fr)] sm:gap-x-8 lg:grid-cols-[3rem_minmax(0,1fr)] lg:gap-x-5 xl:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.3fr)] xl:gap-x-8"
                >
                  <Icon aria-hidden size={32} className="row-span-2 mt-0.5 text-green sm:row-span-1 lg:row-span-2 xl:row-span-1" strokeWidth={1.6} />
                  <h3 className="text-xl font-bold leading-snug sm:text-2xl">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-ink/80 sm:mt-0.5 lg:mt-2 xl:mt-0.5">{step.text}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
