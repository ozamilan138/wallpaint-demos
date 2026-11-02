import { ColourPlanner } from './components/ColourPlanner'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InspirationGallery } from './components/InspirationGallery'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { PaintFinishes } from './components/PaintFinishes'
import { ProcessSteps } from './components/ProcessSteps'
import { ProjectEnquiryForm } from './components/ProjectEnquiryForm'
import { ProjectGallery } from './components/ProjectGallery'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyChooseUs } from './components/WhyChooseUs'
import { NoticeProvider } from './lib/notice'
import { PlanProvider } from './lib/plan'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()
  return (
    <PlanProvider>
      <NoticeProvider>
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          <ColourPlanner />
          <InspirationGallery />
          <Services />
          <PaintFinishes />
          <ProjectGallery />
          <ProcessSteps />
          <WhyChooseUs />
          <Testimonials />
          <ProjectEnquiryForm />
          <ContactCTA />
        </main>
        <Footer />
        <MobileActionBar />
      </NoticeProvider>
    </PlanProvider>
  )
}
