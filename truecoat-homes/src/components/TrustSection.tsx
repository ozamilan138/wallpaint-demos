import { ImagePlus } from 'lucide-react'
import { trustFacts, trustValues } from '../data/content'
import { photos } from '../data/photos'
import { Picture } from './Picture'

/**
 * "Choose a Team That Understands Your Home". The values are proposed. The facts
 * and the photo slots stay marked "To be confirmed" until the owner gives real details.
 */
export function TrustSection() {
  return (
    <section id="about" aria-labelledby="trust-title" className="bg-mist py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="trust-title"
            className="text-[clamp(32px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.03em] md:col-span-7"
            data-reveal
          >
            Choose a Team That Understands Your Home.
          </h2>
          <p className="max-w-[46ch] text-[18px] md:col-span-5 md:justify-self-end" data-reveal style={{ ['--i' as string]: 1 }}>
            The values below describe how TrueCoat plans to work. The business details at the right stay marked until the owner confirms them.
          </p>
        </div>

        <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-12 md:gap-8">
          <ul className="grid gap-9 md:col-span-6">
            {trustValues.map((v, i) => (
              <li key={v.title} data-reveal style={{ ['--i' as string]: i % 3 }}>
                <h3 className="text-[22px] leading-tight font-bold tracking-[-0.015em]">{v.title}</h3>
                <p className="mt-1.5 max-w-[46ch] text-[17px]">{v.text}</p>
              </li>
            ))}
          </ul>

          <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
            <div className="grid grid-cols-2 gap-4">
              <figure className="relative col-span-2 aspect-[16/9] overflow-hidden">
                <Picture photo={photos.trustDining} sizes="(min-width: 768px) 45vw, 100vw" className="h-full w-full object-cover" />
                <span className="demo-tag top-3 left-3">Demo image</span>
              </figure>
              <figure className="relative aspect-square overflow-hidden">
                <Picture photo={photos.trustLiving} sizes="(min-width: 768px) 22vw, 50vw" className="h-full w-full object-cover" />
                <span className="demo-tag top-3 left-3">Demo image</span>
              </figure>
              <div className="flex aspect-square flex-col items-start justify-end gap-2 bg-paper p-4 text-muted sm:p-5">
                <ImagePlus className="size-6 text-accent-deep" aria-hidden="true" />
                <p className="text-[15px] leading-snug">Space for a real TrueCoat project photo.</p>
              </div>
            </div>

            <div className="mt-8 bg-paper p-6 sm:p-7">
              <h3 className="font-display text-[20px] font-bold tracking-[-0.01em]">About the Business</h3>
              <dl className="mt-4 grid gap-3">
                {trustFacts.map((f) => (
                  <div key={f.label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <dt className="text-[16px]">{f.label}</dt>
                    <dd className={`text-[15px] ${f.value ? 'font-semibold text-ink' : 'text-muted'}`}>{f.value ?? 'To be confirmed'}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[14px] text-muted">
                We show only facts that the business can prove. The owner adds them in src/data/content.ts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
