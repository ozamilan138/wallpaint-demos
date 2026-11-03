import { ArrowDown } from 'lucide-react'
import { photos } from '../data/photos'
import { Picture } from './Picture'

export function Hero() {
  return (
    <section id="top" className="on-photo relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-dark text-white">
      <div className="shutter absolute inset-0 -z-10 overflow-hidden">
        <Picture
          photo={photos.heroSageLiving}
          sizes="100vw"
          priority
          className="h-full w-full object-cover object-[50%_60%]"
        />
      </div>
      {/* A neutral scrim behind the text only: dark at the foot, clear above the room. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(20,26,23,0.82)_0%,rgba(20,26,23,0.55)_38%,rgba(20,26,23,0)_68%),linear-gradient(to_bottom,rgba(20,26,23,0.45)_0%,rgba(20,26,23,0)_18%)]" /* taste-skill-ignore: neutral scrim over a photo */
      />
      <div className="shell pt-28 pb-[calc(96px+env(safe-area-inset-bottom))] md:pb-16">
        <div className="max-w-[1200px]">
          <p className="font-ui text-[16px] font-medium text-white/90" data-reveal>
            From a single room to complete residential painting.
          </p>
          <h1
            className="mt-4 text-[clamp(38px,5.3vw,78px)] leading-[1.02] font-extrabold tracking-[-0.035em]"
            data-reveal
            style={{ ['--i' as string]: 1 }}
          >
            See the Difference a Beautifully Painted Home Can&nbsp;Make.
          </h1>
          <p
            className="mt-6 max-w-[600px] text-[18px] leading-[1.55] text-white/90 md:text-[19px]"
            data-reveal
            style={{ ['--i' as string]: 2 }}
          >
            Professional painting solutions for every space, with thoughtful planning, quality workmanship and options for
            different project requirements.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal style={{ ['--i' as string]: 3 }}>
            <a href="#projects" className="btn btn-light">
              Explore Our Projects
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-accent">
              Get an Estimate
            </a>
          </div>
        </div>
      </div>
      <span className="demo-tag top-[80px] right-4 md:top-auto md:right-6 md:bottom-6">Demo image</span>
    </section>
  )
}
