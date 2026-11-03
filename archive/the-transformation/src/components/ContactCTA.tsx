import { Phone } from 'lucide-react'
import { messages } from '../config/business'
import { photos } from '../data/content'
import { ContactAction } from './ContactAction'
import { Picture } from './Picture'
import { WhatsAppIcon } from './WhatsAppIcon'

/**
 * The closing call to action. On large screens the text sits on the calm right half of
 * the photograph. On small screens the text moves below the photograph.
 */
export function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-dark">
      <div className="relative h-[62svh] min-h-[360px] overflow-hidden md:h-[90svh] md:min-h-[640px]">
        <Picture photo={photos.cta} sizes="100vw" className="h-full w-full object-cover object-[30%_60%] md:object-[50%_60%]" />
        <span className="demo-tag absolute top-24 left-5 sm:left-8 lg:left-12">Demo image</span>
      </div>

      <div className="container-page py-14 text-white md:absolute md:inset-0 md:flex md:items-end md:py-0 md:text-ink">
        <div className="md:ml-auto md:w-[46%] md:pb-[12svh] lg:w-[40%]">
          <h2
            id="contact-title"
            data-reveal
            className="text-[clamp(2.2rem,4.4vw,4rem)] leading-[1] font-extrabold tracking-[-0.045em]"
          >
            Ready to See Your Home Differently?
          </h2>
          <p data-reveal style={{ ['--d' as string]: 1 }} className="mt-5 max-w-md text-[17px] leading-relaxed text-white/85 md:text-ink">
            Share your painting requirements and let’s start planning your transformation.
          </p>
          <div data-reveal style={{ ['--d' as string]: 2 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ContactAction kind="whatsapp" message={messages.general} className="btn btn-accent">
              <WhatsAppIcon className="size-5" />
              WhatsApp Us
            </ContactAction>
            <ContactAction kind="phone" className="btn bg-white text-ink hover:bg-paper-2 md:bg-dark md:text-white md:hover:bg-dark-2">
              <Phone className="size-5" aria-hidden="true" />
              Call Now
            </ContactAction>
          </div>
        </div>
      </div>
    </section>
  )
}
