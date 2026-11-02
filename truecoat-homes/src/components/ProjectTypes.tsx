import { Check } from 'lucide-react'
import { projectTypes } from '../data/content'
import { photos } from '../data/photos'
import { messages } from '../utils/contact'
import { ContactButton } from './ContactButton'
import { Picture } from './Picture'

/** "One Home, Many Possibilities": three project scopes over one held photograph of a painted wall. */
export function ProjectTypes() {
  return (
    <section aria-labelledby="types-title" className="on-dark relative isolate overflow-hidden bg-dark py-24 text-white md:py-36">
      <div className="absolute inset-0 -z-10">
        <Picture photo={photos.typesWallBrick} sizes="100vw" className="h-full w-full object-cover brightness-[0.42]" />
      </div>
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="types-title"
            className="text-[clamp(32px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.03em] md:col-span-7"
            data-reveal
          >
            One Home, Many Possibilities.
          </h2>
          <p className="max-w-[46ch] text-[18px] text-white/90 md:col-span-5 md:justify-self-end" data-reveal style={{ ['--i' as string]: 1 }}>
            Every project starts with a conversation about its size. These are common project scopes, not fixed packages or
            prices. Your estimate follows the work you need.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {projectTypes.map((t, i) => (
            <li key={t.id} className="flex" data-reveal style={{ ['--i' as string]: i + 1 }}>
              <article className={`flex w-full flex-col text-ink md:max-lg:flex-row ${t.tone}`}>
                <div className="relative aspect-[4/3] overflow-hidden md:max-lg:aspect-auto md:max-lg:w-[42%] md:max-lg:shrink-0">
                  <Picture photo={t.photo} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 42vw, 100vw" className="h-full w-full object-cover" />
                  <span className="demo-tag top-3 left-3">Demo image</span>
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <h3 className="text-[clamp(24px,2.2vw,30px)] leading-tight font-extrabold tracking-[-0.02em]">{t.name}</h3>
                  <p className="mt-3 text-[17px]">{t.suits}</p>
                  <p className="mt-5 font-ui text-[15px] font-semibold text-muted">Often chosen for</p>
                  <ul className="mt-2 grid gap-2">
                    {t.examples.map((ex) => (
                      <li key={ex} className="flex gap-2.5 text-[16px]">
                        <Check className="mt-1 size-4 shrink-0 text-accent-deep" aria-hidden="true" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    <ContactButton kind="whatsapp" message={messages.projectType(t.name)} className="btn btn-dark w-full sm:w-auto">
                      Discuss This Project
                    </ContactButton>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
