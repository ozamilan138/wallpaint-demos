import { MapPin } from 'lucide-react'
import { business } from '../data/config'
import { images } from '../data/images'
import { ResponsiveImage } from './ResponsiveImage'

export function TrustIntro() {
  const areas = business.serviceLocations
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-20 lg:py-28">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="overflow-hidden rounded-[1.75rem] lg:col-span-6">
          <ResponsiveImage
            image={images.introPainter}
            sizes="(min-width: 1216px) 580px, (min-width: 1024px) 48vw, 100vw"
            className="aspect-[4/3] w-full object-cover object-[30%_40%]"
          />
        </div>
        <div className="lg:col-span-6">
          <h2 id="about-title" data-reveal className="text-[1.75rem] leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            Your Home Deserves the Right People for the Job.
          </h2>
          <p data-reveal style={{ '--reveal-i': 1 } as React.CSSProperties} className="mt-6 text-lg leading-relaxed">
            Painting your home is more than changing the colour of your walls. It is about making your space feel
            fresh, comfortable and welcoming. Our goal is to make the process straightforward, with clear
            communication and attention to the details that matter.
          </p>
          <p
            data-reveal
            style={{ '--reveal-i': 2 } as React.CSSProperties}
            className="mt-8 flex items-start gap-3 rounded-2xl bg-field px-5 py-4 text-muted-strong"
          >
            <MapPin aria-hidden size={22} className="mt-0.5 shrink-0 text-green-deep" />
            <span>
              <span className="font-medium text-ink">Areas we serve: </span>
              {areas.length > 0 ? areas.join(', ') : 'service areas will be listed here after the owner confirms them.'}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
