import { Mail } from 'lucide-react'
import { CallButton, WhatsAppButton } from './ContactButtons'
import { Logo } from './Logo'
import { navLinks } from './Navbar'
import { config } from '../data/config'
import { palettes } from '../data/palettes'
import { services } from '../data/services'
import { hasEmail } from '../lib/contact'
import { generalMessage } from '../lib/messages'
import { usePlanner } from '../lib/planner'

const linkClass = 'inline-flex min-h-10 items-center text-white/90 hover:text-white hover:underline underline-offset-4'

export function Footer() {
  const { choose, goTo } = usePlanner()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink pt-20 pb-[calc(6rem+env(safe-area-inset-bottom))] text-white lg:pb-10">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo onDark />
            <p className="mt-5 max-w-[24rem] text-[16px] leading-relaxed text-white/90">
              Residential and apartment painting for different project sizes and budgets. Explore colours, plan your
              project and talk to us when you are ready.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton message={generalMessage()} className="btn btn-on-dark min-h-12">
                WhatsApp
              </WhatsAppButton>
              <CallButton className="btn btn-ghost-dark min-h-12" />
            </div>
          </div>

          <nav aria-labelledby="f-services" className="lg:col-span-2">
            <h2 id="f-services" className="font-ui text-[16px] font-bold text-white">
              Services
            </h2>
            <ul className="mt-3 text-[15px]">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className={linkClass}>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="f-colours" className="lg:col-span-2">
            <h2 id="f-colours" className="font-ui text-[16px] font-bold text-white">
              Colour inspiration
            </h2>
            <ul className="mt-3 text-[15px]">
              {palettes.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className={`${linkClass} gap-2 text-left`}
                    onClick={() => {
                      choose('palette', p.id)
                      goTo('palette', { scroll: true })
                    }}
                  >
                    <span className="flex h-3 w-6 overflow-hidden rounded-sm" aria-hidden>
                      {p.swatches.slice(0, 3).map((s) => (
                        <span key={s.hex} className="flex-1" style={{ background: s.hex }} />
                      ))}
                    </span>
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="font-ui text-[16px] font-bold text-white">Contact</h2>
            <dl className="mt-3 grid gap-3 text-[15px]">
              <div>
                <dt className="text-white/75">Phone and WhatsApp</dt>
                <dd>{config.phone || config.whatsapp || 'To be added by the owner'}</dd>
              </div>
              <div>
                <dt className="text-white/75">Email</dt>
                <dd>
                  {hasEmail ? (
                    <a href={`mailto:${config.email}`} className={`${linkClass} gap-2`}>
                      <Mail className="size-4" aria-hidden />
                      {config.email}
                    </a>
                  ) : (
                    'To be added by the owner'
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-white/75">Service areas</dt>
                <dd>{config.serviceLocations.length > 0 ? config.serviceLocations.join(', ') : 'To be confirmed by the owner'}</dd>
              </div>
              <div>
                <dt className="text-white/75">Social</dt>
                <dd>
                  <ul className="flex flex-wrap gap-x-4">
                    {config.social.map((s) => (
                      <li key={s.label}>
                        {s.url ? (
                          <a href={s.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            {s.label}
                          </a>
                        ) : (
                          <span className="inline-flex min-h-10 items-center text-white/75">{s.label} (coming soon)</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="font-display mt-16 text-[17vw] leading-[0.8] font-extrabold tracking-[-0.05em] text-white/10 select-none lg:text-[12.5rem]" aria-hidden>
          TrueCoat
        </p>

        <div className="mt-8 flex flex-col gap-4 pt-2 text-[14px] text-white/80 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {config.name} This is a demo website. The photos are sample images from{' '}
            <a href="https://unsplash.com/license" className="underline underline-offset-4 hover:text-white" target="_blank" rel="noopener noreferrer">
              Unsplash
            </a>{' '}
            and do not show TrueCoat projects.
          </p>
          <ul className="flex flex-wrap gap-x-5">
            {navLinks.slice(1).map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-10 items-center hover:text-white hover:underline underline-offset-4">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
