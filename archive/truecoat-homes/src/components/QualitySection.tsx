import { qualitySteps } from '../data/content'
import { messages } from '../utils/contact'
import { ContactButton } from './ContactButton'
import { Picture } from './Picture'

/**
 * "Beautiful Spaces Are Built Through Careful Work". The heading holds at the left on desktop
 * while the rows pass, and each row has a photograph of a different size at the right margin.
 */
export function QualitySection() {
  return (
    <section aria-labelledby="quality-title" className="bg-sand-soft py-24 md:py-36">
      <div className="shell">
        <h2
          id="quality-title"
          className="max-w-[22ch] text-[clamp(32px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.03em]"
          data-reveal
        >
          Beautiful Spaces Are Built Through Careful Work.
        </h2>
      </div>
      <div className="shell mt-10 grid gap-14 md:mt-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[110px]">
            <p className="max-w-[36ch] text-[18px]" data-reveal style={{ ['--i' as string]: 1 }}>
              These are the standards we work to on every project. The owner confirms the exact steps for each type of job.
            </p>
            <div className="mt-7" data-reveal style={{ ['--i' as string]: 2 }}>
              <ContactButton kind="whatsapp" message={messages.service('Wall preparation and painting')} className="btn btn-dark">
                Ask How We Prepare Walls
              </ContactButton>
            </div>
          </div>
        </div>

        <ol className="grid gap-16 md:gap-20 lg:col-span-8 lg:gap-24">
          {qualitySteps.map((step, i) => (
            <li key={step.title} className="grid gap-6 md:grid-cols-8 md:gap-8">
              <div className="md:col-span-5 lg:col-span-4 lg:col-start-1" data-reveal>
                <h3 className="text-[clamp(24px,2.4vw,34px)] leading-tight font-extrabold tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-3 max-w-[40ch] text-[17px]">{step.text}</p>
              </div>
              <div
                className={`md:col-span-3 lg:col-span-4 lg:col-start-5 ${i % 2 ? 'w-[70%] justify-self-end md:w-full' : 'w-[85%] md:w-full'}`}
                data-reveal
                style={{ ['--i' as string]: 1 }}
              >
                <div className={`relative overflow-hidden md:ml-auto md:max-w-full ${step.size}`}>
                  <Picture photo={step.photo} sizes="(min-width: 1024px) 320px, 80vw" className="h-full w-full object-cover" />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
