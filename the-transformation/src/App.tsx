import { ContactCTA } from './components/ContactCTA'
import { ContactProvider } from './components/ContactProvider'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { ProcessSteps } from './components/ProcessSteps'
import { ProjectGallery } from './components/ProjectGallery'
import { ProofSection } from './components/ProofSection'
import { QualitySection } from './components/QualitySection'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Transformation } from './components/Transformation'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()
  return (
    <ContactProvider>
      <div className="has-action-bar">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[90] focus:rounded-full focus:bg-dark focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Transformation />
          <ProjectGallery />
          <Services />
          <QualitySection />
          <ProofSection />
          <ProcessSteps />
          <Testimonials />
          <ContactCTA />
        </main>
        <Footer />
        <MobileActionBar />
      </div>
    </ContactProvider>
  )
}
