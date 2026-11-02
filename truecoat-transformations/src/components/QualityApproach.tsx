import { qualitySteps } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { Picture } from './Picture'

/** Four columns at uneven heights. On a phone they stack and alternate left and right. */
export function QualityApproach() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} id="quality" aria-labelledby="quality-title" className="py-24 sm:py-32 lg:py-40">
      <div className="frame">
        <div className="max-w-4xl">
          <h2 id="quality-title" className="reveal text-[clamp(2.2rem,5.2vw,4.25rem)] leading-[1.02] font-extrabold">
            A Good Painting Job Is All in the Details.
          </h2>
          <p className="reveal mt-6 max-w-[56ch] text-[18px] leading-relaxed" style={{ ['--d' as string]: '80ms' }}>
            Most of the result comes from the work that you do not see. This is how we plan to approach each job.
          </p>
        </div>

        <ol className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-x-8 lg:mt-20 lg:grid-cols-4 lg:gap-x-8">
          {qualitySteps.map((step, i) => (
            <li
              key={step.title}
              className={`reveal ${i % 2 === 1 ? 'ml-[12%] sm:ml-0 sm:mt-20' : 'mr-[12%] sm:mr-0'} ${i === 2 ? 'lg:mt-8' : ''} ${i === 3 ? 'lg:mt-32' : ''}`}
              style={{ ['--d' as string]: `${i * 90}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-mist">
                <Picture photo={step.photo} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 90vw" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 text-[22px] leading-snug font-bold">{step.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-soft-ink">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
