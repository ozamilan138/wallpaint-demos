import { ContactCTA } from './components/ContactCTA'
import { ContactProvider } from './components/ContactProvider'
import { FAQ } from './components/FAQ'
import { FlexibleOptions } from './components/FlexibleOptions'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { ProcessTimeline } from './components/ProcessTimeline'
import { ProjectEnquiryForm } from './components/ProjectEnquiryForm'
import { ProjectGallery } from './components/ProjectGallery'
import { ProjectTypes } from './components/ProjectTypes'
import { QualitySection } from './components/QualitySection'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Transformation } from './components/Transformation'
import { TrustSection } from './components/TrustSection'
import { useReveal } from './hooks/useReveal'

// Hide the entrance elements only when the script runs, so content never stays hidden.
document.documentElement.classList.add('reveal-ready')

export default function App() {
  useReveal()
  return (
    <ContactProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <Transformation />
        <ProjectGallery />
        <ProjectTypes />
        <Services />
        <QualitySection />
        <ProcessTimeline />
        <FlexibleOptions />
        <TrustSection />
        <Testimonials />
        <FAQ />
        <ProjectEnquiryForm />
        <ContactCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </ContactProvider>
  )
}
