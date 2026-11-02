import { ContactProvider } from './components/contact/ContactProvider'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { FeaturedProjects } from './components/FeaturedProjects'
import { ColourInspiration } from './components/ColourInspiration'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { MobileActionBar } from './components/MobileActionBar'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <ContactProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-night focus:px-4 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <FeaturedProjects />
        <ColourInspiration />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      {/* This spacer keeps the footer clear of the fixed contact bar on small screens. */}
      <div aria-hidden className="h-[calc(68px+env(safe-area-inset-bottom))] bg-paper lg:hidden" />
      <MobileActionBar />
    </ContactProvider>
  )
}
