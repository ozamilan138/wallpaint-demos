import { Info } from 'lucide-react'
import { photos, type Photo } from '../data/photos'
import { messages } from '../utils/contact'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import { ContactButton } from './ContactButton'

/**
 * The featured transformation. To use a real project, put two photos of the same room,
 * taken from the same place, in public/images and change these two values.
 */
const featured: { before: Photo; after: Photo; title: string; illustrative: boolean } = {
  before: photos.sliderBefore,
  after: photos.sliderAfter,
  title: 'Living room, from tired greige to deep blue',
  illustrative: true,
}

export function Transformation() {
  return (
    <section id="transformation" aria-labelledby="transformation-title" className="py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="transformation-title"
            className="text-[clamp(32px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.03em] md:col-span-7"
            data-reveal
          >
            From Everyday Walls to Fresh New Spaces.
          </h2>
          <p className="max-w-[46ch] text-[18px] md:col-span-5 md:justify-self-end" data-reveal style={{ ['--i' as string]: 1 }}>
            Drag the handle to compare the same room before and after a new wall colour. On a keyboard, focus the handle and
            use the arrow keys.
          </p>
        </div>

        <figure className="mt-10 md:mt-14" data-reveal style={{ ['--i' as string]: 2 }}>
          <BeforeAfterSlider before={featured.before} after={featured.after} initial={52} label={`Before and after: ${featured.title}`} />
          <figcaption className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-display text-[20px] font-bold tracking-[-0.01em]">{featured.title}</p>
              {featured.illustrative && (
                <p className="mt-2 flex max-w-[64ch] gap-2 text-[15px] text-muted">
                  <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  Illustrative demo. The “before” image is a digitally changed copy of the “after” photo, not a real TrueCoat
                  project. Real before-and-after photos will replace it.
                </p>
              )}
            </div>
            <ContactButton
              kind="whatsapp"
              message={messages.projectType('a room colour change like this one')}
              className="btn btn-dark shrink-0"
            >
              Ask About a Change Like This
            </ContactButton>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
