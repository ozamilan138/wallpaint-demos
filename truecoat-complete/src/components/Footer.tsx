import { MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/config'
import { navLinks } from '../data/content'
import { services } from '../data/services'
import { emailUrl, generalMessage } from '../lib/whatsapp'
import { CallAction, WhatsAppAction } from './contact/ContactActions'
import { Wordmark } from './Wordmark'

export function Footer() {
  const email = emailUrl()
  const year = new Date().getFullYear()
  return (
    <footer className="on-night bg-night pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-16 text-on-night lg:pb-10 lg:pt-24">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark onNight />
            <p className="mt-5 max-w-sm text-on-night-muted">{business.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppAction message={generalMessage} className="btn btn-oat min-h-11 px-5 py-2">
                <MessageCircle aria-hidden size={18} /> WhatsApp
              </WhatsAppAction>
              <CallAction className="btn min-h-11 bg-night-2 px-5 py-2 text-white hover:bg-[#3a4a42]">
                <Phone aria-hidden size={18} /> Call Now
              </CallAction>
            </div>
          </div>

          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="font-display text-base font-bold text-white">Services</h2>
            <ul className="mt-4 grid gap-1">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="inline-flex min-h-10 items-center text-on-night-muted hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="font-display text-base font-bold text-white">Explore</h2>
            <ul className="mt-4 grid gap-1">
              {[...navLinks, { href: '#faq', label: 'FAQ' }].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex min-h-10 items-center text-on-night-muted hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-display text-base font-bold text-white">Contact</h2>
            <ul className="mt-4 grid gap-3 text-on-night-muted">
              <li>
                <span className="block text-sm text-on-night-muted/80">Phone and WhatsApp</span>
                <span className="text-on-night">{business.phone || business.whatsapp || 'To be added'}</span>
              </li>
              <li>
                <span className="block text-sm text-on-night-muted/80">Email</span>
                {email ? (
                  <a href={email} className="text-on-night underline underline-offset-4 hover:text-white">
                    {business.email}
                  </a>
                ) : (
                  <span className="text-on-night">To be added</span>
                )}
              </li>
              <li>
                <span className="block text-sm text-on-night-muted/80">Service locations</span>
                <span className="text-on-night">
                  {business.serviceLocations.length ? business.serviceLocations.join(', ') : 'To be confirmed'}
                </span>
              </li>
              <li>
                <span className="block text-sm text-on-night-muted/80">Social media</span>
                <span className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  {business.social.map((s) =>
                    s.url ? (
                      <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="text-on-night underline underline-offset-4 hover:text-white">
                        {s.label}
                      </a>
                    ) : (
                      <span key={s.label} className="text-on-night">
                        {s.label} <span className="text-on-night-muted">(link to be added)</span>
                      </span>
                    ),
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          translate="no"
          className="mt-16 select-none font-display whitespace-nowrap text-[clamp(1.9rem,7.4vw,7.1rem)] font-extrabold leading-[0.9] tracking-[-0.045em] text-night-2"
        >
          TrueCoat Painting Co.
        </p>

        <div className="mt-8 flex flex-col gap-2 text-sm text-on-night-muted md:flex-row md:justify-between">
          <p>
            © {year} {business.name} Demo website.
          </p>
          <p>
            Photographs: sample images from{' '}
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
              Unsplash
            </a>
            , not TrueCoat projects.
          </p>
        </div>
      </div>
    </footer>
  )
}
