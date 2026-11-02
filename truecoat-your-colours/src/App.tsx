import { ContactCTA } from './components/ContactCTA'
import { ContactProvider } from './components/ContactProvider'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InspirationGallery } from './components/InspirationGallery'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { PaintFinishes } from './components/PaintFinishes'
import { ProcessSteps } from './components/ProcessSteps'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ColourPlanner } from './components/planner/ColourPlanner'
import { PlannerProvider } from './lib/planner'

export default function App() {
  return (
    <PlannerProvider>
      <ContactProvider>
        <Navbar />
        <main id="main">
          <Hero />
          <ColourPlanner />
          <InspirationGallery />
          <Services />
          <PaintFinishes />
          <ProcessSteps />
          <WhyChooseUs />
          <Testimonials />
          <FAQ />
          <ContactCTA />
        </main>
        <Footer />
        <MobileActionBar />
      </ContactProvider>
    </PlannerProvider>
  )
}
