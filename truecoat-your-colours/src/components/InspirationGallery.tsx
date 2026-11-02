import { useState } from 'react'
import { ImageIcon } from 'lucide-react'
import { Img } from './Img'
import { WhatsAppButton } from './ContactButtons'
import { galleryItems } from '../data/projects'
import { inspirationCategories } from '../data/roomCategories'
import { inspirationMessage } from '../lib/messages'
import { useReveal } from '../lib/useReveal'

const coverImage: Record<string, string> = {}
for (const item of galleryItems) coverImage[item.category] ??= item.image

/** The filter is kept in the address (?space=kitchen), so that a link can open the same view. */
function initialCategory() {
  const fromUrl = new URLSearchParams(window.location.search).get('space')
  return inspirationCategories.some((c) => c.id === fromUrl) ? fromUrl! : inspirationCategories[0].id
}

export function InspirationGallery() {
  const [active, setActiveState] = useState(initialCategory)
  const setActive = (id: string) => {
    setActiveState(id)
    const url = new URL(window.location.href)
    url.searchParams.set('space', id)
    window.history.replaceState(null, '', url)
  }
  const items = galleryItems.filter((i) => i.category === active)
  const category = inspirationCategories.find((c) => c.id === active)!
  const ref = useReveal<HTMLDivElement>()
  const isDemo = items.some((i) => i.source === 'demo')

  return (
    <section id="inspiration" aria-labelledby="inspiration-title" className="section-gap">
      <div className="container-page">
        <div ref={ref} className="reveal grid gap-5 lg:grid-cols-12 lg:items-end">
          <h2 id="inspiration-title" className="h2 lg:col-span-6">
            Get Inspired by Beautiful Spaces
          </h2>
          <p className="text-lg leading-relaxed text-ink/85 lg:col-span-6">
            Choose a type of space to see colour ideas. These are sample inspiration photos for this demo. They are not
            TrueCoat projects. Real project photos will replace them.
          </p>
        </div>

        <div className="mt-10" role="group" aria-label="Filter inspiration by space">
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
            {inspirationCategories.map((c) => {
              const selected = c.id === active
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActive(c.id)}
                    className={`flex w-full items-center gap-3 rounded-2xl p-2 pr-4 text-left -outline-offset-2 transition-colors duration-200 ${selected ? 'bg-ink text-white outline-0' : 'bg-white text-ink outline-0 hover:outline-2 hover:outline-ink/20'}`}
                  >
                    <span className="size-12 shrink-0 overflow-hidden rounded-xl bg-surface">
                      <img
                        src={`${import.meta.env.BASE_URL}images/${coverImage[c.id]}-640.webp`}
                        alt=""
                        width={48}
                        height={48}
                        loading="lazy"
                        className="size-full object-cover"
                      />
                    </span>
                    <span className="font-ui text-[16px] leading-tight font-semibold">{c.name}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {items.length} {category.name.toLowerCase()} ideas
        </p>

        <ul key={active} className="step-enter mt-8 grid gap-5 md:grid-cols-12 md:grid-rows-2">
          {items.map((item, i) => (
            <li
              key={item.id}
              className={`group flex flex-col ${i === 0 ? 'md:col-span-7 md:row-span-2' : 'md:col-span-5'}`}
            >
              <figure className="flex h-full flex-col">
                <div
                  className={`photo-zoom relative overflow-hidden rounded-[var(--radius-photo)] bg-surface ${i === 0 ? 'aspect-[4/3] md:aspect-auto md:min-h-[30rem] md:flex-1' : 'aspect-[16/10]'}`}
                >
                  <Img
                    name={item.image}
                    alt={item.imageAlt}
                    sizes={i === 0 ? '(min-width: 768px) 58vw, 100vw' : '(min-width: 768px) 40vw, 100vw'}
                    className="absolute inset-0 size-full object-cover"
                  />
                  {isDemo && (
                    <span className="demo-tag absolute top-3 left-3">
                      <ImageIcon className="size-3.5" aria-hidden />
                      Demo image
                    </span>
                  )}
                </div>
                <figcaption className="mt-3 flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
                  <span>
                    <span className="font-display block text-[1.15rem] font-extrabold tracking-[-0.01em]">{item.title}</span>
                    <span className="block text-[16px] text-ink/80">{item.description}</span>
                  </span>
                  <WhatsAppButton
                    message={inspirationMessage(item.title, category.name)}
                    className="link inline-flex min-h-11 items-center gap-1.5 text-[15px]"
                    noIcon
                    aria-label={`Ask About This Look: ${item.title}`}
                  >
                    Ask About This Look
                  </WhatsAppButton>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
