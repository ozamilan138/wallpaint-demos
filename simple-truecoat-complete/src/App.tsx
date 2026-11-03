import { ContactProvider } from './components/contact/ContactProvider'
import { ContactCTA } from './components/ContactCTA'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowWeWork } from './components/HowWeWork'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { PaintingOptions } from './components/PaintingOptions'
import { ProjectGallery } from './components/ProjectGallery'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'

export default function App() {
  return (
    <ContactProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <PaintingOptions />
        <ProjectGallery />
        <HowWeWork />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </ContactProvider>
  )
}
