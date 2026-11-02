import { Phone } from 'lucide-react'
import { business, messages } from '../config/business'
import { photoCredits, services } from '../data/content'
import { isConfigured } from '../lib/contact'
import { ContactAction } from './ContactAction'
import { navLinks } from './Navbar'
import { WhatsAppIcon } from './WhatsAppIcon'

const socialLabels = { instagram: 'Instagram', facebook: 'Facebook', pinterest: 'Pinterest' } as const

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-dark text-white" aria-labelledby="footer-title">
      <div className="container-page pt-14 pb-10 md:pt-28">
        <h2 id="footer-title" className="sr-only">
          {business.name}
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="max-w-sm text-[17px] leading-relaxed text-white/85">{business.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ContactAction kind="whatsapp" message={messages.general} className="btn btn-accent">
                <WhatsAppIcon className="size-5" />
                WhatsApp
              </ContactAction>
              <ContactAction kind="phone" className="btn btn-ghost-light">
                <Phone className="size-5" aria-hidden="true" />
                Call Now
              </ContactAction>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-[15px] font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-flex min-h-9 items-center text-[15px] text-muted-light hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h3 className="text-[15px] font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-1">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="inline-flex min-h-9 items-center text-[15px] text-muted-light hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[15px] font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-[15px] text-muted-light">
              <li>Phone: {isConfigured('phone') ? business.phone : 'to be added'}</li>
              <li>WhatsApp: {isConfigured('whatsapp') ? business.whatsapp : 'to be added'}</li>
              <li>
                Email:{' '}
                {isConfigured('email') ? (
                  <a className="hover:text-white" href={`mailto:${business.email}`}>
                    {business.email}
                  </a>
                ) : (
                  'to be added'
                )}
              </li>
              <li>Areas: {business.serviceAreas.length ? business.serviceAreas.join(', ') : 'to be confirmed'}</li>
            </ul>
            <h3 className="mt-8 text-[15px] font-semibold text-white">Social</h3>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
              {(Object.keys(socialLabels) as Array<keyof typeof socialLabels>).map((key) =>
                business.social[key] ? (
                  <li key={key}>
                    <a href={business.social[key]} target="_blank" rel="noopener noreferrer" className="text-muted-light hover:text-white">
                      {socialLabels[key]}
                    </a>
                  </li>
                ) : (
                  <li key={key} className="text-muted-light/70" title="Link not added yet">
                    {socialLabels[key]} <span className="text-[13px]">(link to be added)</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* The wordmark at full width, sized to fit on one line. */}
        <svg viewBox="0 0 1000 190" className="mt-20 block w-full md:mt-28" role="img" aria-label="Aureline">
          <text
            x="500"
            y="160"
            textAnchor="middle"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            className="fill-white font-display"
            style={{ fontSize: 218, fontWeight: 800, letterSpacing: '-0.05em' }}
          >
            Aureline
          </text>
        </svg>

        <div className="mt-8 flex flex-col gap-4 text-[13px] text-muted-light md:flex-row md:items-start md:justify-between">
          <p>
            © {year} {business.name}. Demo website: all photographs are sample imagery, not completed projects.
          </p>
          <details className="max-w-xl break-words">
            <summary className="cursor-pointer hover:text-white">Photo credits</summary>
            <p className="mt-3 leading-relaxed">
              All photographs are from{' '}
              <a className="underline hover:text-white" href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
                Unsplash
              </a>{' '}
              under the{' '}
              <a className="underline hover:text-white" href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">
                Unsplash License
              </a>
              . The “before” comparison image is a digitally altered copy. Source IDs:{' '}
              {photoCredits.map(([, id]) => id.replace('photo-', '')).join(', ')}.
            </p>
          </details>
        </div>
      </div>
    </footer>
  )
}
