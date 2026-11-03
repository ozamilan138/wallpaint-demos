import { business } from '../config/business'
import { navItems } from '../data/content'

const socialLinks = [
  { label: 'Instagram', href: business.social.instagram },
  { label: 'Facebook', href: business.social.facebook },
  { label: 'Pinterest', href: business.social.pinterest },
]

// The year is read once when the page loads.
const year = new Date().getFullYear()

const listLink = 'inline-flex min-h-[40px] items-center text-[15px] text-muted transition-colors hover:text-ink'

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="page-x mx-auto max-w-page pb-8 pt-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-[2fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-serif text-[26px] font-semibold leading-none">{business.name}</p>
            <p className="mt-3 max-w-[26rem] text-[15px] leading-[1.6] text-muted">{business.description}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-sans text-[15px] font-semibold tracking-normal">Pages</h2>
            <ul className="mt-2 grid">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={listLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-[15px] font-semibold tracking-normal">Follow</h2>
            <ul className="mt-2 grid">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={listLink}>
                      {link.label}
                    </a>
                  ) : (
                    <span className="inline-flex min-h-[40px] items-center text-[15px] text-muted">
                      {link.label}
                      <span className="sr-only"> (link to be added)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-[13px] text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {business.name}
          </p>
          <p>Demo website. Sample photographs from Unsplash.</p>
        </div>
      </div>
    </footer>
  )
}
