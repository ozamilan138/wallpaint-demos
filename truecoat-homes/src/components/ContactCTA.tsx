import { photos } from '../data/photos'
import { ContactButton } from './ContactButton'
import { Picture } from './Picture'

/** The last photograph: the chair stays on the left, the words sit on the calm wall at the right. */
export function ContactCTA() {
  return (
    <section aria-labelledby="cta-title" className="on-dark relative isolate bg-dark text-white md:min-h-[86svh]">
      <div className="relative aspect-[4/3] overflow-hidden md:absolute md:inset-0 md:-z-10 md:aspect-auto">
        <Picture photo={photos.ctaBlueChair} sizes="100vw" className="h-full w-full object-cover object-[25%_50%]" />
        <span className="demo-tag top-3 left-3 md:top-6 md:left-6">Demo image</span>
      </div>
      <div className="shell grid py-14 md:min-h-[86svh] md:grid-cols-12 md:items-end md:py-20">
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="text-[clamp(32px,3.6vw,52px)] leading-[1.04] font-extrabold tracking-[-0.03em] md:text-ink" id="cta-title" data-reveal>
            Your Next Home Refresh Starts Here.
          </h2>
          <p className="mt-5 max-w-[40ch] text-[18px] text-white/90 md:text-ink" data-reveal style={{ ['--i' as string]: 1 }}>
            Share your requirements and let’s discuss a painting solution that suits your space.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal style={{ ['--i' as string]: 2 }}>
            <ContactButton kind="whatsapp" className="btn btn-accent">
              WhatsApp Us
            </ContactButton>
            <ContactButton kind="phone" className="btn bg-paper text-ink hover:bg-white md:bg-ink md:text-paper md:hover:bg-dark-2">
              Call Now
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  )
}
