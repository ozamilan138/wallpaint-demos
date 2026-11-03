import { business } from '../data/config'
import { navLinks } from '../data/content'
import { emailUrl } from '../utils/whatsapp'
import { Logo } from './Logo'

const linkClass = 'inline-flex min-h-10 items-center text-white/80 transition-colors hover:text-white'

export function Footer() {
  const email = emailUrl()
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-white">
      <div className="wrap pt-12 pb-[calc(6.5rem+env(safe-area-inset-bottom))] md:pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-4 max-w-sm leading-relaxed text-white/80">
              Home and apartment painting with careful work, clear estimates and good communication.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-lg font-bold">Links</h2>
            <ul className="mt-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg font-bold">Contact</h2>
            <ul className="mt-3 space-y-2 text-white/80">
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
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-5">
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

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/65 md:flex-row md:justify-between">
          <p>
            © {year} {business.name} Demo website.
          </p>
          <p>Photos: Unsplash (demo images). They are not TrueCoat projects.</p>
        </div>
      </div>
    </footer>
  )
}
