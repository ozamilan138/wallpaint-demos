import { MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/config'
import { navLinks } from '../data/content'
import { emailUrl, generalMessage } from '../lib/whatsapp'
import { CallAction, WhatsAppAction } from './contact/ContactActions'
import { Wordmark } from './Wordmark'

const year = new Date().getFullYear()

export function Footer() {
  const email = emailUrl()
  return (
    <footer className="on-night bg-night pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-14 text-on-night lg:pb-10 lg:pt-16">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark onNight />
            <p className="mt-4 max-w-sm text-on-night-muted">{business.description}</p>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-on-night-muted">
              {business.social.map((s) =>
                s.url ? (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
                    {s.label}
                  </a>
                ) : (
                  <span key={s.label}>{s.label} (link to be added)</span>
                ),
              )}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-base font-bold text-white">Explore</h2>
            <ul className="mt-3 grid gap-0.5">
              {[...navLinks, { href: '#faq', label: 'FAQ' }].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex min-h-10 items-center text-on-night-muted hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-base font-bold text-white">Contact</h2>
            <ul className="mt-3 grid gap-3">
              <li>
                <span className="block text-sm text-on-night-muted">Phone and WhatsApp</span>
                {business.phone || business.whatsapp || 'To be added'}
              </li>
              <li>
                <span className="block text-sm text-on-night-muted">Email</span>
                {email ? (
                  <a href={email} className="underline underline-offset-4 hover:text-white">
                    {business.email}
                  </a>
                ) : (
                  'To be added'
                )}
              </li>
              <li>
                <span className="block text-sm text-on-night-muted">Service locations</span>
                {business.serviceLocations.length ? business.serviceLocations.join(', ') : 'To be confirmed'}
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <WhatsAppAction message={generalMessage} className="btn btn-oat min-h-11 px-5 py-2">
                <MessageCircle aria-hidden size={18} /> WhatsApp
              </WhatsAppAction>
              <CallAction className="btn min-h-11 bg-night-2 px-5 py-2 text-white hover:bg-[#3a4a42]">
                <Phone aria-hidden size={18} /> Call Now
              </CallAction>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-night-2 pt-6 text-sm text-on-night-muted md:flex-row md:justify-between">
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
