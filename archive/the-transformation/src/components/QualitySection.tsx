import { useEffect, useRef, useState } from 'react'
import { qualitySteps } from '../data/content'
import { Picture } from './Picture'

/**
 * The quality standards. On large screens the photograph is sticky and changes as each
 * standard scrolls to the middle of the screen. On small screens each standard has its own photograph.
 */
export function QualitySection() {
  const [active, setActive] = useState(0)
  const items = useRef<Array<HTMLLIElement | null>>([])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    items.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="about" aria-labelledby="quality-title" className="py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2
            id="quality-title"
            data-reveal
            className="text-[clamp(2.2rem,4.8vw,4.5rem)] leading-[1] font-extrabold tracking-[-0.045em] lg:col-span-9"
          >
            Beautiful Results Begin Before the First Brushstroke.
          </h2>
          <p data-reveal style={{ ['--d' as string]: 1 }} className="max-w-sm text-[17px] leading-relaxed lg:col-span-3 lg:justify-self-end">
            A finish that lasts depends on the work that you do not see. These are the standards we
            propose for every home.
          </p>
        </div>
      <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <div className="hidden lg:col-span-6 lg:block">
          <div className="sticky top-28 aspect-[5/4] overflow-hidden bg-paper-2">
            {qualitySteps.map((step, i) => (
              <Picture
                key={step.title}
                photo={step.photo}
                sizes="45vw"
                className="absolute inset-0 h-full w-full object-cover transition-[opacity,scale] duration-700"
                style={{ opacity: i === active ? 1 : 0, scale: i === active ? '1' : '1.04' }}
                aria-hidden={i !== active}
              />
            ))}
            <span className="demo-tag absolute top-4 left-4">Demo image</span>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pt-4">
          <ol className="flex flex-col gap-14 lg:gap-0">
            {qualitySteps.map((step, i) => (
              <li
                key={step.title}
                ref={(el) => {
                  items.current[i] = el
                }}
                data-index={i}
                className="lg:flex lg:min-h-[44vh] lg:flex-col lg:justify-center lg:first:justify-start"
              >
                <div className="mb-6 aspect-[16/10] overflow-hidden bg-paper-2 lg:hidden">
                  <Picture photo={step.photo} sizes="100vw" className="h-full w-full object-cover" />
                </div>
                <h3
                  className={`text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.05] font-bold tracking-[-0.035em] transition-colors duration-500 ${
                    i === active ? 'text-ink' : 'text-ink lg:text-muted-ink'
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-ink">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-[14px] leading-relaxed text-muted-ink lg:mt-0">
            Proposed service standards, to be confirmed with the business owner before launch.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}
