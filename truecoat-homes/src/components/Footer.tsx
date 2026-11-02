import { business } from '../data/config'
import { projectCategories } from '../data/projects'
import { services } from '../data/services'
import { displayValue, emailHref } from '../utils/contact'
import { ContactButton } from './ContactButton'
import { Logo } from './Navbar'

const notSet = <span className="text-on-dark-muted">Not added yet</span>

export function Footer() {
  const socials = business.social.filter((s) => s.url)
  const email = emailHref(`Painting enquiry for ${business.name}`)
  return (
    <footer className="on-dark pb-action-bar bg-dark text-paper">
      <div className="shell grid gap-12 pt-20 pb-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-[38ch] text-[16px] text-on-dark-muted">{business.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ContactButton kind="whatsapp" className="btn btn-accent">
              WhatsApp Us
            </ContactButton>
            <ContactButton kind="phone" className="btn btn-outline-light">
              Call Now
            </ContactButton>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-ui text-[16px] font-semibold">Services</h2>
          <ul className="mt-4 grid gap-1">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#services" className="inline-flex min-h-9 items-center text-[15px] text-on-dark-muted hover:text-paper">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-ui text-[16px] font-semibold">Projects</h2>
          <ul className="mt-4 grid gap-1">
            {projectCategories.map((c) => (
              <li key={c}>
                <a href="#projects" className="inline-flex min-h-9 items-center text-[15px] text-on-dark-muted hover:text-paper">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h2 className="font-ui text-[16px] font-semibold">Contact</h2>
          <dl className="mt-4 grid gap-3 text-[15px]">
            <div>
              <dt className="text-on-dark-muted">Phone</dt>
              <dd>{displayValue('phone') ?? notSet}</dd>
            </div>
            <div>
              <dt className="text-on-dark-muted">WhatsApp</dt>
              <dd>{displayValue('whatsapp') ?? notSet}</dd>
            </div>
            <div>
              <dt className="text-on-dark-muted">Email</dt>
              <dd>
                {email ? (
                  <a href={email} className="underline underline-offset-2 hover:text-sand">
                    {business.email}
                  </a>
                ) : (
                  notSet
                )}
              </dd>
            </div>
            <div>
              <dt className="text-on-dark-muted">Service locations</dt>
              <dd>{business.serviceLocations.length ? business.serviceLocations.join(', ') : <span className="text-on-dark-muted">To be confirmed</span>}</dd>
            </div>
            <div>
              <dt className="text-on-dark-muted">Social media</dt>
              <dd>
                {socials.length ? (
                  <ul className="flex flex-wrap gap-x-4">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-sand">
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-on-dark-muted">Instagram, Facebook and Google profiles to be added</span>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="shell overflow-hidden pt-6" aria-hidden="true" translate="no">
        <svg viewBox="0 0 1000 196" className="w-full text-paper" role="presentation">
          <text x="0" y="170" textLength="1000" lengthAdjust="spacing" fill="currentColor" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="236">
            TrueCoat
          </text>
        </svg>
      </div>

      <div className="shell flex flex-col gap-2 pt-6 pb-8 text-[13px] text-on-dark-muted md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {business.name} Demo website.</p>
        <p>
          Photographs: demo images from Unsplash, used under the Unsplash licence. They are not TrueCoat projects. Details in
          CREDITS.md.
        </p>
      </div>
    </footer>
  )
}
