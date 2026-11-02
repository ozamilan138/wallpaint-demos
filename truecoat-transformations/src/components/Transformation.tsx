import { Info } from 'lucide-react'
import { photos } from '../data/photos'
import { useReveal } from '../hooks/useReveal'
import { messages } from '../utils/whatsapp'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import { ContactButton } from './ContactButton'

const changes = [
  { label: 'Before', text: 'Faded, patchy greige on the shelves and the walls.' },
  { label: 'After', text: 'One calm blue-grey on the shelves, the fireplace wall and the cabinets.' },
  { label: 'The same', text: 'The room, the furniture and the light. Only the paint is different.' },
]

/** The signature section: one room, before and after a fresh coat. */
export function Transformation() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} id="transformation" aria-labelledby="transformation-title" className="bg-dark py-20 text-white sm:py-28 lg:py-36">
      {/* Phone order: heading, slider, notes. Wide screens: heading and notes on the left, slider on the right. */}
      <div className="frame grid gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0">
        <div className="lg:col-span-5 xl:pr-8">
          <h2 id="transformation-title" className="reveal text-[clamp(2.1rem,7vw,3.6rem)] leading-[1.02] font-extrabold lg:text-[clamp(2.25rem,3.4vw,3.4rem)]">
            Same Space.
            <br />
            Fresh New Look.
          </h2>
          <p className="reveal mt-5 max-w-[38ch] text-[18px] leading-relaxed text-white/85" style={{ ['--d' as string]: '80ms' }}>
            Drag the handle to compare. A new colour changes how the whole room feels.
          </p>
        </div>

        <div className="reveal lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={{ ['--d' as string]: '120ms' }}>
          <BeforeAfterSlider before={photos.sliderBefore} after={photos.sliderAfter} label="Compare the room before and after painting" />
          <p className="mt-4 flex max-w-[70ch] items-start gap-2 text-[15px] leading-relaxed text-white/75">
            <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            Illustrative demo. The before photo is a digitally edited copy of the same sample photo. It is not a TrueCoat project.
          </p>
        </div>
        <div className="lg:col-span-5 lg:row-start-2 lg:flex lg:flex-col lg:justify-end xl:pr-8">
          <dl className="grid gap-5">
            {changes.map((c, i) => (
              <div key={c.label} className="reveal" style={{ ['--d' as string]: `${140 + i * 70}ms` }}>
                <dt className="font-ui text-[15px] font-semibold text-warm">{c.label}</dt>
                <dd className="mt-1 text-[16px] leading-relaxed text-white/85">{c.text}</dd>
              </div>
            ))}
          </dl>

          <div className="reveal mt-9" style={{ ['--d' as string]: '360ms' }}>
            <ContactButton kind="whatsapp" message={messages.transformation} className="btn btn-light w-full sm:w-auto">
              Plan a Fresh Look
            </ContactButton>
          </div>
        </div>

      </div>
    </section>
  )
}
