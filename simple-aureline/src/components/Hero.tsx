import { MessageCircle } from 'lucide-react'
import { images } from '../data/images'
import { ResponsiveImage } from './ResponsiveImage'
import { WhatsAppAction } from './contact/ContactActions'
import { estimateMessage } from '../lib/contact'
import { DemoTag } from './DemoTag'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="page-x mx-auto max-w-page pb-16 pt-8 sm:pb-24 sm:pt-12 lg:pt-16">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden bg-linen sm:aspect-[16/10] lg:order-2 lg:aspect-[5/4]">
          <ResponsiveImage
            image={images.heroLiving}
            alt="A sunlit living room with warm off-white walls, round rattan mirrors and a cream sofa"
            sizes="(min-width: 1024px) 46vw, 100vw"
            priority
            objectPosition="55% 50%"
          />
          <DemoTag className="left-3 top-3" />
        </div>

        <div className="lg:order-1">
          <h1 id="hero-title" className="text-[clamp(2.5rem,1.6rem+3.4vw,4.25rem)] leading-[1.02]">
            Give Your Walls a New Perspective.
          </h1>
          <p className="mt-5 max-w-[30rem] text-[18px] leading-[1.6]">
            Thoughtfully chosen colours. Beautiful finishes. Painting that brings your home to life.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppAction message={estimateMessage} className="btn btn-dark w-full sm:w-auto">
              <MessageCircle aria-hidden size={18} />
              Request a Free Estimate
            </WhatsAppAction>
            <a href="#work" className="btn btn-outline w-full sm:w-auto">
              Explore Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
