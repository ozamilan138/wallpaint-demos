import { budgetFactors } from '../data/content'
import { messages } from '../utils/contact'
import { ContactButton } from './ContactButton'

/** "Professional Solutions for Different Budgets". Topics to discuss, never prices. */
export function FlexibleOptions() {
  return (
    <section aria-labelledby="budget-title" className="py-24 md:py-36">
      <div className="shell">
        <h2
          id="budget-title"
          className="max-w-[20ch] text-[clamp(32px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.03em]"
          data-reveal
        >
          Professional Solutions for Different Budgets.
        </h2>
      </div>
      <div className="shell mt-10 grid gap-12 md:mt-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="max-w-[42ch] text-[18px]" data-reveal style={{ ['--i' as string]: 1 }}>
            Every home and every project is different. There is no single price list, because the right solution depends on
            your space. Tell us about these points, and we help you find an option that suits your requirements.
          </p>
          <div className="mt-8" data-reveal style={{ ['--i' as string]: 2 }}>
            <ContactButton kind="whatsapp" message={messages.budget} className="btn btn-accent">
              Let’s Discuss Your Project
            </ContactButton>
          </div>
        </div>

        <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:col-span-6 md:pt-3 lg:col-span-6 lg:col-start-7">
          {budgetFactors.map((f, i) => (
            <div key={f.title} data-reveal style={{ ['--i' as string]: i % 2 }}>
              <dt className="flex items-baseline gap-3 font-display text-[22px] font-bold tracking-[-0.015em]">
                <span aria-hidden="true" className="inline-block size-3 shrink-0 rounded-full bg-sand" />
                {f.title}
              </dt>
              <dd className="mt-2 pl-6 text-[16px]">{f.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
