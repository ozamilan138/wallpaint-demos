import { Info } from 'lucide-react'
import { messages } from '../config/business'
import { photos } from '../data/content'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import { ContactAction } from './ContactAction'
import { WhatsAppIcon } from './WhatsAppIcon'

export function Transformation() {
  return (
    <section id="transformation" aria-labelledby="transformation-title" className="bg-dark py-24 text-white md:py-32 lg:py-40">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="transformation-title"
            data-reveal
            className="text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] font-extrabold tracking-[-0.055em] md:col-span-7"
          >
            See the Difference.
          </h2>
          <p data-reveal style={{ ['--d' as string]: 1 }} className="max-w-md text-[17px] leading-relaxed text-white/85 md:col-span-5 md:justify-self-end">
            The same room, the same light, the same furniture. Only the wall colour changes. Drag the
            handle to compare.
          </p>
        </div>

        <div data-reveal style={{ ['--d' as string]: 2 }} className="mt-12 md:mt-16">
          <BeforeAfterSlider
            before={photos.before}
            after={photos.after}
            label="Living room before and after: drag or use the arrow keys to compare"
          />
        </div>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <p className="flex max-w-2xl gap-3 text-[14px] leading-relaxed text-muted-light">
            <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              Simulated demo comparison. The “before” view is a digitally altered copy of a sample
              Unsplash photograph, not a completed Aureline project. Replace both images with verified
              project photographs before launch.
            </span>
          </p>
          <ContactAction kind="whatsapp" message={messages.transformation} className="btn btn-accent shrink-0">
            <WhatsAppIcon className="size-5" />
            Plan a change like this
          </ContactAction>
        </div>
      </div>
    </section>
  )
}
