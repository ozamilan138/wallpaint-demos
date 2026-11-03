import { MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/config'
import { navLinks } from '../data/content'
import { services } from '../data/services'
import { emailUrl } from '../utils/whatsapp'
import { CallButton, WhatsAppButton } from './contact/ContactActions'
import { Logo } from './Logo'

const linkClass = 'inline-flex min-h-10 items-center text-white/80 transition-colors hover:text-white'

export function Footer() {
  const email = emailUrl()
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-white">
      <div className="wrap pt-16 pb-[calc(7.25rem+env(safe-area-inset-bottom))] md:pb-10 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm leading-relaxed text-white/80">
              Residential and apartment painting with careful workmanship, clear estimates and dependable
              communication.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton className="btn btn-amber">
                <MessageCircle aria-hidden size={19} />
                WhatsApp
              </WhatsAppButton>
              <CallButton className="btn bg-white/10 text-white hover:bg-white/20">
                <Phone aria-hidden size={19} />
                Call Now
              </CallButton>
            </div>
          </div>

          <nav aria-label="Services" className="col-span-1 lg:col-span-3">
            <h2 className="font-display text-lg font-bold">Services</h2>
            <ul className="mt-4">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className={linkClass}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer" className="col-span-1 lg:col-span-2">
            <h2 className="font-display text-lg font-bold">Navigation</h2>
            <ul className="mt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#estimate" className={linkClass}>
                  Free Estimate
                </a>
              </li>
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-3">
            <h2 className="font-display text-lg font-bold">Contact</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Phone: {business.phone || 'not added yet'}</li>
              <li>WhatsApp: {business.whatsapp || 'not added yet'}</li>
              <li>
                Email:{' '}
                {email ? (
                  <a href={email} className="underline underline-offset-4 hover:text-white">
                    {business.email}
                  </a>
                ) : (
                  'not added yet'
                )}
              </li>
              <li>
                Areas: {business.serviceLocations.length > 0 ? business.serviceLocations.join(', ') : 'to be confirmed'}
              </li>
            </ul>
            <h2 className="mt-8 font-display text-lg font-bold">Follow Us</h2>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
              {business.social.map((item) =>
                item.url ? (
                  <li key={item.label}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label} className="inline-flex min-h-10 items-center text-white/60">
                    {item.label} (coming soon)
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          translate="no"
          className="mt-16 font-display text-[clamp(3.5rem,15vw,13rem)] leading-[0.85] font-extrabold tracking-[-0.04em] text-white/[0.07] select-none"
        >
          TrueCoat
        </p>

        <div className="mt-8 flex flex-col gap-3 text-sm text-white/65 md:flex-row md:justify-between">
          <p>
            © {year} {business.name} Demo website.
          </p>
          <p>Photos: Unsplash (demo images, Unsplash License). They are not TrueCoat projects.</p>
        </div>
      </div>
    </footer>
  )
}
