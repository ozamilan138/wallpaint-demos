import { projectMedia } from '../data/content'
import { useLanguage } from '../i18n/context'
import { ResponsiveImage } from './ResponsiveImage'
import { DemoTag } from './DemoTag'
import { SectionHeading } from './SectionHeading'

export function OurWork() {
  const { t } = useLanguage()
  return (
    <section id="work" aria-labelledby="work-title" className="page-x mx-auto max-w-page py-16 sm:py-24">
      <SectionHeading id="work-title" title={t.work.title}>
        {t.work.intro}
      </SectionHeading>

      <ul className="mt-10 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {projectMedia.map((media, index) => {
          const project = t.work.items[index]
          return (
            <li key={media.image.name}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                  <ResponsiveImage
                    image={media.image}
                    alt={project.alt}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 46vw, 100vw"
                    objectPosition={media.objectPosition}
                  />
                  <DemoTag label={t.sampleImage} className="left-3 top-3" />
                </div>
                <figcaption className="mt-3">
                  <span className="block font-serif text-[22px] font-semibold leading-tight">{project.title}</span>
                  <span className="mt-1 block text-[14px] text-muted">{project.room}</span>
                </figcaption>
              </figure>
            </li>
          )
        })}
      </ul>

      {/* Demo content marker. Remove this note when real client photographs replace the samples. */}
      <p role="note" className="mt-8 max-w-[44rem] text-[14px] leading-[1.55] text-muted">
        <strong className="font-semibold text-ink">{t.work.noteLabel}</strong> {t.work.note}
      </p>
    </section>
  )
}
