import { business } from '../config/business'
import { services } from '../data/content'
import { defaultMessage } from '../lib/whatsapp'
import { CallButton, WhatsAppButton } from './ContactButtons'
import { Logo } from './Logo'

const colourLinks = [
  { href: '#explore-colours', label: 'Colour planner' },
  { href: '#inspiration', label: 'Room inspiration' },
  { href: '#finishes', label: 'Paint finishes' },
  { href: '#our-work', label: 'See what’s possible' },
]

const social = [
  { label: 'Facebook', href: business.social.facebook },
  { label: 'Instagram', href: business.social.instagram },
  { label: 'YouTube', href: business.social.youtube },
]

const YEAR = new Date().getFullYear()

/** The footer: the back of the card, with a scalloped top edge. */
export function Footer() {
  return (
    <footer className="bg-ink pt-16 text-ink">
      <div className="wrap">
        <div className="relative bg-paper px-6 pb-8 pt-14 sm:px-10 lg:px-14">
          {/* The scalloped edge */}
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 -top-3 h-3 w-full text-paper"
            preserveAspectRatio="none"
            viewBox="0 0 120 10"
          >
            <path
              fill="currentColor"
              d="M0 10 Q5 0 10 10 Q15 0 20 10 Q25 0 30 10 Q35 0 40 10 Q45 0 50 10 Q55 0 60 10 Q65 0 70 10 Q75 0 80 10 Q85 0 90 10 Q95 0 100 10 Q105 0 110 10 Q115 0 120 10 Z"
            />
          </svg>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
            <div>
              <Logo />
              <p className="mt-4 max-w-[24rem] text-base leading-relaxed text-ink">
                Residential and apartment painting with helpful colour guidance, clear estimates and careful work.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <WhatsAppButton message={defaultMessage} className="btn btn-primary min-h-11 px-5" />
                <CallButton className="btn btn-soft min-h-11 px-5" />
              </div>
            </div>

            <nav aria-labelledby="footer-services">
              <h2 id="footer-services" className="font-ui text-base font-bold tracking-normal">
                Services
              </h2>
              <ul className="mt-3 grid gap-1">
                {services.map((s) => (
                  <li key={s.id}>
                    <a href="#services" className="inline-flex min-h-10 items-center text-base text-muted hover:text-ink hover:underline">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-colours">
              <h2 id="footer-colours" className="font-ui text-base font-bold tracking-normal">
                Colour discovery
              </h2>
              <ul className="mt-3 grid gap-1">
                {colourLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="inline-flex min-h-10 items-center text-base text-muted hover:text-ink hover:underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="font-ui text-base font-bold tracking-normal">Contact</h2>
              <ul className="mt-3 grid gap-2 text-base text-muted">
                <li>Phone: {business.phone || <span className="italic">to be added</span>}</li>
                <li>WhatsApp: {business.whatsapp ? `+${business.whatsapp}` : <span className="italic">to be added</span>}</li>
                <li>
                  Email:{' '}
                  {business.email ? (
                    <a href={`mailto:${business.email}`} className="underline">
                      {business.email}
                    </a>
                  ) : (
                    <span className="italic">to be added</span>
                  )}
                </li>
                <li>
                  Areas:{' '}
                  {business.serviceLocations.length ? business.serviceLocations.join(', ') : <span className="italic">to be confirmed</span>}
                </li>
              </ul>
              <h2 className="mt-6 font-ui text-base font-bold tracking-normal">Social</h2>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-base">
                {social.map((s) => (
                  <li key={s.label}>
                    {s.href ? (
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center underline">
                        {s.label}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-10 items-center text-muted" title="This link is not set up yet">
                        {s.label} <span className="sr-only">(not set up yet)</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-2 pt-6 text-sm text-muted sm:flex sm:justify-between">
            <p>
              © {YEAR} {business.name} Demo website.
            </p>
            <p>
              Demo photos from{' '}
              <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline">
                Unsplash
              </a>
              , used under the Unsplash License. They do not show TrueCoat projects.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
