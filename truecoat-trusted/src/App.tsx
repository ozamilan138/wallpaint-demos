import { ContactProvider } from './components/contact/ContactProvider'
import { ContactCTA } from './components/ContactCTA'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { PaintingProcess } from './components/PaintingProcess'
import { ProjectGallery } from './components/ProjectGallery'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { TrustIntro } from './components/TrustIntro'
import { WhyChooseUs } from './components/WhyChooseUs'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <ContactProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustIntro />
        <Services />
        <WhyChooseUs />
        <ProjectGallery />
        <PaintingProcess />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </ContactProvider>
  )
}
