import { business } from '../config/business'
import { navItems } from '../data/content'
import { CallAction, WhatsAppAction } from './contact/ContactActions'
import { Wordmark } from './Wordmark'

// Only the social links that the business has show in the footer.
const socialLinks = [
  { label: 'Instagram', href: business.social.instagram },
  { label: 'Facebook', href: business.social.facebook },
  { label: 'Pinterest', href: business.social.pinterest },
].filter((link) => link.href)

// The year is read once when the page loads.
const year = new Date().getFullYear()

const listLink = 'inline-flex min-h-[40px] items-center text-[15px] text-muted transition-colors hover:text-ink'
const heading = 'font-sans text-[15px] font-semibold tracking-normal'

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="page-x mx-auto max-w-page pb-8 pt-14">
        <div className={`grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-[2fr_1fr_1fr] ${socialLinks.length > 0 ? 'lg:grid-cols-[2fr_1fr_1fr_1fr]' : ''}`}>
          <div className="col-span-2 sm:col-span-1">
            <Wordmark size="lg" />
            <p className="mt-5 max-w-[26rem] text-[15px] leading-[1.6] text-muted">{business.description}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className={heading}>Pages</h2>
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
            <h2 className={heading}>Contact</h2>
            <ul className="mt-2 grid">
              <li>
                <CallAction className={listLink}>{business.phone || 'Call'}</CallAction>
              </li>
              <li>
                <WhatsAppAction className={listLink}>WhatsApp</WhatsAppAction>
              </li>
              {business.email && (
                <li>
                  <a href={`mailto:${business.email}`} className={listLink}>
                    {business.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {socialLinks.length > 0 && (
            <div>
              <h2 className={heading}>Follow</h2>
              <ul className="mt-2 grid">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={listLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-[13px] text-muted sm:flex-row sm:justify-between lg:pr-20">
          <p>
            © {year} {business.name}
          </p>
          <p>Sample photographs from Unsplash.</p>
        </div>
      </div>
    </footer>
  )
}
