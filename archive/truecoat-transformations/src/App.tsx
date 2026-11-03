import { ContactCTA } from './components/ContactCTA'
import { ContactProvider } from './components/ContactProvider'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { ProcessTimeline } from './components/ProcessTimeline'
import { ProjectGallery } from './components/ProjectGallery'
import { QualityApproach } from './components/QualityApproach'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Transformation } from './components/Transformation'
import { WhyChooseUs } from './components/WhyChooseUs'

export default function App() {
  return (
    <ContactProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <Transformation />
        <ProjectGallery />
        <Services />
        <QualityApproach />
        <WhyChooseUs />
        <ProcessTimeline />
        <Testimonials />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </ContactProvider>
  )
}
