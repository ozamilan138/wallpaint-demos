import { ContactProvider } from './components/contact/ContactProvider'
import { LanguageProvider } from './i18n/LanguageProvider'
import { useLanguage } from './i18n/context'
import type { Lang } from './i18n/context'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { OurWork } from './components/OurWork'
import { ColourInspiration } from './components/ColourInspiration'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingWhatsApp, MobileActionBar } from './components/MobileActionBar'

export default function App({ initialLang }: { initialLang: Lang }) {
  return (
    <LanguageProvider initialLang={initialLang}>
      <Page />
    </LanguageProvider>
  )
}

function Page() {
  const { t } = useLanguage()
  return (
    <ContactProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-night focus:px-4 focus:py-3 focus:text-paper"
      >
        {t.skip}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <OurWork />
        <ColourInspiration />
        <About />
        <Contact />
      </main>
      <Footer />
      {/* This spacer keeps the footer clear of the fixed contact bar on small screens. */}
      <div aria-hidden className="h-[calc(68px+env(safe-area-inset-bottom))] bg-paper lg:hidden" />
      <MobileActionBar />
      <FloatingWhatsApp />
    </ContactProvider>
  )
}
