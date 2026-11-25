import { MessageCircle, Phone } from 'lucide-react'
import { business } from '../config/business'
import { images } from '../data/images'
import { ResponsiveImage } from './ResponsiveImage'
import { CallAction, WhatsAppAction } from './contact/ContactActions'
import { useLanguage } from '../i18n/context'
import { DemoTag } from './DemoTag'

export function Hero() {
  const { t } = useLanguage()
  return (
    <section id="top" aria-labelledby="hero-title" className="page-x mx-auto max-w-page pb-16 pt-8 sm:pb-24 sm:pt-12 lg:pt-16">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden bg-linen sm:aspect-[16/10] lg:order-2 lg:aspect-[5/4]">
          <ResponsiveImage
            image={images.heroLiving}
            alt={t.hero.imageAlt}
            sizes="(min-width: 1024px) 46vw, 100vw"
            priority
            objectPosition="55% 50%"
          />
          <DemoTag label={t.sampleImage} className="left-3 top-3" />
        </div>

        <div className="lg:order-1">
          {/* The main heading gives search engines the name, the service and the city. The slogan below it is larger. */}
          <h1 id="hero-title" className="mb-5 font-sans text-[13px] font-medium uppercase tracking-[0.22em] text-bronze-deep">
            {t.businessName} · {t.hero.eyebrow}
          </h1>
          <p className="hero-slogan text-[clamp(2.5rem,1.6rem+3.4vw,4.25rem)] leading-[1.02]">{t.hero.title}</p>
          <p className="mt-5 max-w-[30rem] text-[18px] leading-[1.6]">
            {t.hero.lead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppAction message={t.messages.estimate(t.businessName)} className="btn btn-dark w-full sm:w-auto">
              <MessageCircle aria-hidden size={18} />
              {t.cta.requestEstimate}
            </WhatsAppAction>
            <a href="#work" className="btn btn-outline w-full sm:w-auto">
              {t.hero.explore}
            </a>
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] text-muted">
            <Phone aria-hidden size={16} className="text-bronze-deep" />
            {t.cta.callOrWhatsApp}
            <CallAction className="font-medium text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink">
              {business.phone}
            </CallAction>
          </p>
        </div>
      </div>
    </section>
  )
}
