import { business } from '../config/business'
import { navLinks, services } from '../data/content'
import { moods } from '../data/colourDiscovery'
import { phoneUrl } from '../lib/contact'
import { generalEnquiry } from '../lib/messages'
import { CallButton, PhoneIcon, WhatsAppButton, WhatsAppIcon } from './ContactButtons'

const socialNames: Record<keyof typeof business.social, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  pinterest: 'Pinterest',
}

function FooterHeading({ children }: { children: string }) {
  return <h2 className="font-display text-base font-bold text-cream">{children}</h2>
}

/** The year for the copyright line. */
const year = new Date().getFullYear()

const linkClass = 'inline-flex min-h-10 items-center text-[15px] text-cream/80 transition-colors duration-200 hover:text-cream'

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 text-cream sm:pt-24">
      <div className="container-page">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-3">
            <p className="font-display text-2xl font-extrabold tracking-tight">{business.name}</p>
            <p className="mt-3 max-w-sm text-base text-cream/80">{business.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton message={generalEnquiry()} className="btn btn-light min-h-11 px-5 text-[15px]">
                <WhatsAppIcon className="size-5 text-[#1F7A4D]" />
                WhatsApp
              </WhatsAppButton>
              <CallButton className="btn min-h-11 bg-cream/10 px-5 text-[15px] text-cream hover:bg-cream/20">
                <PhoneIcon className="size-4" aria-hidden />
                Call Now
              </CallButton>
            </div>
          </div>

          <nav aria-label="Footer: services" className="lg:col-span-2">
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-3">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className={linkClass}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer: colour inspiration" className="lg:col-span-2">
            <FooterHeading>Colour inspiration</FooterHeading>
            <ul className="mt-3">
              {moods.map((m) => (
                <li key={m.id}>
                  <a href="#explore" className={linkClass}>
                    {m.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#inspiration" className={linkClass}>
                  Room inspiration
                </a>
              </li>
              <li>
                <a href="#finishes" className={linkClass}>
                  Paint finishes
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-3 text-[15px] text-cream/80">
              <li className="flex min-h-10 items-center">
                {business.phone ? (
                  <a href={phoneUrl} className={linkClass}>
                    {business.phone}
                  </a>
                ) : (
                  'Phone: to be added'
                )}
              </li>
              <li className="flex min-h-10 items-center">
                {business.email ? (
                  <a href={`mailto:${business.email}`} className={linkClass}>
                    {business.email}
                  </a>
                ) : (
                  'Email: to be added'
                )}
              </li>
              <li className="flex min-h-10 items-center">
                {business.serviceAreas.length ? business.serviceAreas.join(', ') : 'Service areas: to be added'}
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Follow</FooterHeading>
            <ul className="mt-3">
              {(Object.keys(socialNames) as (keyof typeof socialNames)[]).map((key) => (
                <li key={key}>
                  {business.social[key] ? (
                    <a href={business.social[key]} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {socialNames[key]}
                    </a>
                  ) : (
                    <span className="inline-flex min-h-10 items-center text-[15px] text-cream/60">{socialNames[key]}: link to be added</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav aria-label="Footer: page" className="mt-16 rounded-2xl bg-cream/5 px-5 py-3">
          <ul className="flex flex-wrap gap-x-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p aria-hidden className="mt-10 font-display text-[17vw] leading-[0.8] font-extrabold tracking-[-0.06em] text-cream/10 lg:text-[13.5rem]">
          Aureline
        </p>

        <div className="mt-8 flex flex-col gap-2 text-[13px] text-cream/65 sm:flex-row sm:justify-between">
          <p>
            © {year} {business.name}. Demo website.
          </p>
          <p>Photos: Unsplash, used as demo inspiration images. Screen colours are illustrative.</p>
        </div>
      </div>
    </footer>
  )
}
