import { ArrowUp } from 'lucide-react'
import { business } from '../data/config'
import { navLinks } from '../data/content'
import { projectCategories } from '../data/projects'
import { services } from '../data/services'
import { emailHref, messages } from '../utils/whatsapp'
import { ContactButton } from './ContactButton'
import { Logo } from './Logo'

const socialLabels: Record<keyof typeof business.social, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube',
}

export function Footer() {
  const mail = emailHref('Painting enquiry')
  const year = new Date().getFullYear()
  return (
    <footer className="overflow-hidden bg-dark pb-[calc(4.75rem+env(safe-area-inset-bottom))] text-white md:pb-0">
      <div className="frame pt-20 pb-10 sm:pt-28">
        <p
          className="font-display text-[clamp(4rem,21vw,21rem)] leading-[0.82] font-extrabold tracking-[-0.06em] text-white"
          aria-hidden="true"
          translate="no"
        >
          TrueCoat
        </p>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-4 max-w-[42ch] text-[16px] leading-relaxed text-white/80">{business.description}</p>
            <ul className="mt-7 grid gap-1">
              <li>
                <ContactButton kind="whatsapp" message={messages.general} icon={false} className="text-link text-[clamp(1.5rem,2.6vw,2rem)] font-bold text-green-light">
                  WhatsApp
                </ContactButton>
              </li>
              <li>
                <ContactButton kind="phone" icon={false} className="text-link text-[clamp(1.5rem,2.6vw,2rem)] font-bold text-green-light">
                  Call {business.phone || 'us'}
                </ContactButton>
              </li>
              <li className="text-[16px] text-white/80">
                {mail ? (
                  <a className="text-link text-white" href={mail}>
                    {business.email}
                  </a>
                ) : (
                  'Email: to be added'
                )}
              </li>
              <li className="mt-2 text-[16px] text-white/80">
                {business.serviceLocations.length > 0 ? `Service areas: ${business.serviceLocations.join(', ')}` : 'Service areas: to be confirmed'}
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:pt-1">
            <div>
              <h2 className="font-ui text-[16px] font-semibold text-warm">Services</h2>
              <ul className="mt-3 grid">
                {services.map((s) => (
                  <li key={s.id}>
                    <a href="#services" className="inline-flex min-h-10 items-center text-[16px] text-white/85 hover:text-white">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-ui text-[16px] font-semibold text-warm">Portfolio</h2>
              <ul className="mt-3 grid">
                <li>
                  <a href="#transformation" className="inline-flex min-h-10 items-center text-[16px] text-white/85 hover:text-white">
                    Before and after
                  </a>
                </li>
                {projectCategories.map((c) => (
                  <li key={c}>
                    <a href="#projects" className="inline-flex min-h-10 items-center text-[16px] text-white/85 hover:text-white">
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-ui text-[16px] font-semibold text-warm">Company</h2>
              <ul className="mt-3 grid">
                {navLinks
                  .filter((l) => l.href !== '#home' && l.href !== '#projects' && l.href !== '#services')
                  .map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="inline-flex min-h-10 items-center text-[16px] text-white/85 hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                <li>
                  <a href="#faq" className="inline-flex min-h-10 items-center text-[16px] text-white/85 hover:text-white">
                    Questions
                  </a>
                </li>
              </ul>
              <h2 className="mt-8 font-ui text-[16px] font-semibold text-warm">Follow</h2>
              <ul className="mt-3 grid">
                {(Object.keys(business.social) as (keyof typeof business.social)[]).map((k) => (
                  <li key={k}>
                    {business.social[k] ? (
                      <a href={business.social[k]} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center text-[16px] text-white/85 hover:text-white">
                        {socialLabels[k]}
                      </a>
                    ) : (
                      <span className="flex min-h-10 flex-col justify-center py-1 text-[16px] leading-tight text-white/70">
                        {socialLabels[k]}
                        <span className="text-[14px] text-white/60">Not set up yet</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 text-[14px] text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name} Demo website. Sample photos from{' '}
            <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
              Unsplash
            </a>
            , not TrueCoat projects.
          </p>
          <a href="#home" className="inline-flex min-h-11 items-center gap-1.5 font-ui font-semibold text-white hover:text-warm">
            <ArrowUp className="size-4" aria-hidden="true" />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  )
}
