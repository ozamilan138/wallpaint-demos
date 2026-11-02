import { ImagePlus, MapPin } from 'lucide-react'
import { business } from '../config/business'
import { proofSlots } from '../data/content'

/**
 * Proof slots for real, verified facts. Nothing here is invented: each empty value shows
 * a "To be confirmed" state until the owner supplies it in src/data/content.ts or src/config/business.ts.
 */
export function ProofSection() {
  const areas = business.serviceAreas
  return (
    <section aria-labelledby="proof-title" className="bg-paper-2 py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <h2
          id="proof-title"
          data-reveal
          className="max-w-[14ch] text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.98] font-extrabold tracking-[-0.05em]"
        >
          Why Customers Choose Us
        </h2>
        <p data-reveal style={{ ['--d' as string]: 1 }} className="mt-6 max-w-xl text-[17px] leading-relaxed">
          Real photographs, real feedback and real facts make the strongest case. This section holds them
          once the owner confirms each one. Until then, the slots stay empty on purpose.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div
            data-reveal
            className="flex min-h-[320px] flex-col justify-between bg-dark p-7 text-white sm:p-10 lg:col-span-5 lg:min-h-full"
          >
            <ImagePlus className="size-9 text-accent" aria-hidden="true" />
            <div className="mt-16">
              <h3 className="text-[clamp(1.6rem,2.6vw,2.25rem)] leading-tight font-bold tracking-[-0.03em]">
                Real project photographs
              </h3>
              <p className="mt-3 max-w-sm text-[16px] leading-relaxed text-white/80">
                Six to twelve before-and-after photographs from completed Aureline homes go here, each
                with the room type and the area.
              </p>
            </div>
          </div>

          <dl className="grid gap-px overflow-hidden bg-[#dcd9d3] sm:grid-cols-2 lg:col-span-7">
            {proofSlots.map((slot, i) => (
              <div key={slot.label} data-reveal style={{ ['--d' as string]: i }} className="bg-paper p-7 sm:p-8">
                <dt className="font-display text-[clamp(1.4rem,2.2vw,1.75rem)] leading-tight font-bold tracking-[-0.03em]">{slot.label}</dt>
                <dd className="mt-3">
                  {slot.value ? (
                    <span className="block font-display text-[clamp(2rem,3.6vw,3rem)] leading-none font-extrabold tracking-[-0.04em] text-accent-deep">
                      {slot.value}
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-paper-2 px-3 py-1 text-[14px] font-semibold text-muted-ink">To be confirmed</span>
                  )}
                  <span className="mt-3 block text-[15px] leading-snug text-muted-ink">{slot.hint}</span>
                </dd>
              </div>
            ))}
            <div data-reveal className="bg-paper p-7 sm:col-span-2 sm:p-8">
              <dt className="flex items-center gap-2 font-display text-[clamp(1.4rem,2.2vw,1.75rem)] leading-tight font-bold tracking-[-0.03em]">
                <MapPin className="size-5 text-accent-deep" aria-hidden="true" />
                Service coverage
              </dt>
              <dd className="mt-3">
                {areas.length ? (
                  <span className="text-[17px] leading-relaxed">{areas.join(', ')}</span>
                ) : (
                  <>
                    <span className="inline-flex rounded-full bg-paper-2 px-3 py-1 text-[14px] font-semibold text-muted-ink">To be confirmed</span>
                    <span className="mt-3 block text-[15px] leading-snug text-muted-ink">
                      The towns and districts the business serves. Set them in serviceAreas in the business configuration.
                    </span>
                  </>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
