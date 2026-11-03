import { MessageCircle, Phone, Mail } from 'lucide-react'
import { business } from '../config/business'
import { navItems, services } from '../data/content'
import { CallAction, WhatsAppAction } from './contact/ContactActions'
import { emailUrl } from '../lib/contact'

const socialLinks = [
  { label: 'Instagram', href: business.social.instagram },
  { label: 'Facebook', href: business.social.facebook },
  { label: 'Pinterest', href: business.social.pinterest },
]

// The year is read once when the page loads.
const year = new Date().getFullYear()

const listLink = 'inline-flex min-h-[40px] items-center gap-2 text-[15px] text-muted transition-colors hover:text-ink'

export function Footer() {
  const email = emailUrl()

  return (
    <footer className="bg-paper">
      <div className="page-x mx-auto max-w-page pb-10 pt-20 sm:pt-28">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="col-span-2 lg:col-span-4">
            <p className="font-serif text-[30px] font-semibold leading-none">{business.name}</p>
            <p className="mt-4 max-w-[30rem] text-[16px] leading-[1.6] text-ink">{business.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppAction className="btn btn-dark min-h-[44px] px-5">
                <MessageCircle aria-hidden size={17} />
                WhatsApp
              </WhatsAppAction>
              <CallAction className="btn btn-outline min-h-[44px] px-5">
                <Phone aria-hidden size={17} />
                Call
              </CallAction>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
            <h2 className="font-sans text-[15px] font-semibold tracking-normal">Navigation</h2>
            <ul className="mt-3 grid">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={listLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="font-sans text-[15px] font-semibold tracking-normal">Services</h2>
            <ul className="mt-3 grid">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className={listLink}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3 lg:col-start-10">
            <h2 className="font-sans text-[15px] font-semibold tracking-normal">Contact</h2>
            <ul className="mt-3 grid">
              <li>
                <WhatsAppAction className={listLink}>
                  <MessageCircle aria-hidden size={16} />
                  {business.whatsapp || 'WhatsApp'}
                </WhatsAppAction>
              </li>
              <li>
                <CallAction className={listLink}>
                  <Phone aria-hidden size={16} />
                  {business.phone || 'Phone'}
                </CallAction>
              </li>
              {email && (
                <li>
                  <a href={email} className={listLink}>
                    <Mail aria-hidden size={16} />
                    {business.email}
                  </a>
                </li>
              )}
              <li className="pt-2 text-[15px] leading-[1.55] text-muted">
                {business.serviceLocations.length > 0
                  ? `Serving ${business.serviceLocations.join(', ')}`
                  : 'Service areas will be listed here.'}
              </li>
            </ul>
            <h2 className="mt-8 font-sans text-[15px] font-semibold tracking-normal">Follow</h2>
            <ul className="mt-2 flex flex-wrap gap-x-5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={listLink}>
                      {link.label}
                    </a>
                  ) : (
                    <span className="inline-flex min-h-[40px] items-center text-[15px] text-muted" title="Link to be added">
                      {link.label}
                      <span className="sr-only"> (link to be added)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 select-none whitespace-nowrap text-center font-serif text-[27vw] font-semibold leading-[0.8] tracking-[-0.03em] text-[#E7E1D6] sm:mt-28 lg:text-[min(27vw,24.75rem)]"
        >
          Aureline
        </p>

        <div className="mt-8 flex flex-col gap-2 text-[13px] text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {business.name} All rights reserved.
          </p>
          <p>Sample photography from Unsplash, used under the Unsplash License. Demo website.</p>
        </div>
      </div>
    </footer>
  )
}
