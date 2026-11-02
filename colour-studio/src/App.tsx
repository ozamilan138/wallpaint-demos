import { useMemo, useState } from 'react'
import { findMood, findPalette, findRoom } from './data/colourDiscovery'
import { colourEnquiry } from './lib/messages'
import { emptySelection, type Selection } from './lib/selection'
import { ColourDiscovery } from './components/ColourDiscovery'
import { ContactCTA } from './components/ContactCTA'
import { ContactProvider } from './components/ContactProvider'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InspirationGallery } from './components/InspirationGallery'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { PaintFinishes } from './components/PaintFinishes'
import { Portfolio } from './components/Portfolio'
import { ProcessSteps } from './components/ProcessSteps'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyChooseUs } from './components/WhyChooseUs'

export default function App() {
  const [selection, setSelection] = useState<Selection>(emptySelection)

  // The final CTA and the mobile bar send the colour choices too, if there are any.
  const message = useMemo(
    () =>
      colourEnquiry({
        room: findRoom(selection.room),
        mood: findMood(selection.mood),
        palette: findPalette(selection.palette),
      }),
    [selection],
  )

  return (
    <ContactProvider>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-ink px-5 py-3 text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ColourDiscovery selection={selection} onChange={setSelection} />
        <InspirationGallery />
        <Services />
        <PaintFinishes />
        <Portfolio />
        <ProcessSteps />
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA message={message} />
      </main>
      <Footer />
      <MobileActionBar message={message} />
    </ContactProvider>
  )
}
