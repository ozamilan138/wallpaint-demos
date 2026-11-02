import { ContactProvider } from './components/contact/ContactProvider'
import { ContactCTA } from './components/ContactCTA'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Introduction } from './components/Introduction'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { PaintingOptions } from './components/PaintingOptions'
import { PlanProvider } from './components/PlanContext'
import { ProcessTimeline } from './components/ProcessTimeline'
import { ProjectGallery } from './components/ProjectGallery'
import { QualityApproach } from './components/QualityApproach'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyChooseUs } from './components/WhyChooseUs'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <ContactProvider>
      <PlanProvider>
        <Navbar />
        <main id="main">
          <Hero />
          <Introduction />
          <Services />
          <PaintingOptions />
          <ProjectGallery />
          <QualityApproach />
          <WhyChooseUs />
          <ProcessTimeline />
          <Testimonials />
          <FAQ />
          <ContactCTA />
        </main>
        <Footer />
        <MobileActionBar />
      </PlanProvider>
    </ContactProvider>
  )
}
