import { MessageCircle, Phone } from 'lucide-react'
import { images } from '../data/images'
import { ResponsiveImage } from './ResponsiveImage'
import { DemoTag } from './DemoTag'
import { CallAction, WhatsAppAction } from './contact/ContactActions'
import { defaultWhatsAppMessage } from '../config/business'

export function FinalCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-night text-paper">
      <div className="grid lg:grid-cols-12">
        <div className="page-x flex flex-col justify-center py-24 sm:py-32 lg:col-span-7 lg:py-40 lg:pl-[max(3rem,calc((100vw-88rem)/2+3rem))] lg:pr-16">
          <h2 id="contact-title" data-reveal className="text-[clamp(2.4rem,1.4rem+3.2vw,4.5rem)] leading-[1.02]">
            Your Home Deserves a Beautiful Finish.
          </h2>
          <p
            data-reveal
            style={{ ['--reveal-delay' as string]: '80ms' }}
            className="mt-6 max-w-[30rem] text-[19px] leading-[1.6] text-mist"
          >
            Let’s discuss how we can bring your walls to life.
          </p>
          <div
            data-reveal
            style={{ ['--reveal-delay' as string]: '160ms' }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <WhatsAppAction message={defaultWhatsAppMessage} className="btn btn-light w-full sm:w-auto">
              <MessageCircle aria-hidden size={18} />
              Talk on WhatsApp
            </WhatsAppAction>
            <CallAction className="btn btn-outline-light w-full sm:w-auto">
              <Phone aria-hidden size={18} />
              Call Now
            </CallAction>
          </div>
        </div>
        <div className="relative h-[70svh] max-h-[640px] overflow-hidden lg:col-span-5 lg:h-auto lg:max-h-none">
          <ResponsiveImage
            image={images.ctaArches}
            alt="A bright living room with arched black windows, warm white walls and timber ceiling beams"
            sizes="(min-width: 1024px) 42vw, 100vw"
            objectPosition="50% 45%"
          />
          <DemoTag className="left-4 top-4 sm:left-6 sm:top-6" />
        </div>
      </div>
    </section>
  )
}
