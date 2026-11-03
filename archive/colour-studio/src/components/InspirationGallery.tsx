import { useState } from 'react'
import { galleryCategories, type GalleryCategoryId } from '../data/content'
import { inspirationEnquiry } from '../lib/messages'
import { WhatsAppButton, WhatsAppIcon } from './ContactButtons'
import { Img } from './Img'
import { Reveal, SectionHeading } from './Section'

export function InspirationGallery() {
  const [active, setActive] = useState<GalleryCategoryId>('living')
  const category = galleryCategories.find((c) => c.id === active)!
  const [a, b, c] = category.items

  return (
    <section id="inspiration" aria-labelledby="inspiration-title" className="py-20 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionHeading id="inspiration-title" title="Explore Beautiful Spaces.">
          Browse rooms by type and save the ideas you like. Then tell us what caught your eye.
        </SectionHeading>

        <div role="group" aria-label="Browse by room type" className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-4">
          {galleryCategories.map((cat, i) => {
            const selected = cat.id === active
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={selected}
                aria-controls="inspiration-spread"
                onClick={() => setActive(cat.id)}
                className={`group flex cursor-pointer items-center gap-3 rounded-2xl p-2 text-left transition-colors duration-200 lg:flex-col lg:items-stretch lg:gap-0 lg:p-2.5 ${
                  selected ? 'bg-ink text-cream' : 'bg-paper text-ink hover:bg-beige/60'
                } ${i === galleryCategories.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <span className="photo-zoom block size-14 shrink-0 overflow-hidden rounded-xl lg:aspect-[4/5] lg:size-auto lg:w-full">
                  <Img name={cat.items[0].image} alt="" sizes="(min-width: 1024px) 18vw, 56px" className="size-full object-cover" />
                </span>
                <span className="text-base font-semibold lg:px-1.5 lg:pt-3 lg:pb-1.5 lg:text-lg">{cat.label}</span>
              </button>
            )
          })}
        </div>

        <div id="inspiration-spread" aria-live="polite" className="mt-8 lg:mt-12">
          <Reveal key={category.id} className="grid grid-cols-2 gap-3 lg:grid-cols-12 lg:gap-5">
            <figure className="col-span-2 lg:col-span-7 lg:row-span-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-photo)] lg:aspect-auto lg:h-full lg:min-h-[34rem]">
                <Img name={a.image} alt={a.alt} sizes="(min-width: 1024px) 56vw, 100vw" className="absolute inset-0 size-full object-cover" />
                <span className="demo-tag absolute top-3 left-3">Demo image</span>
              </div>
              <figcaption className="mt-2.5 text-[15px] text-muted">{a.caption}</figcaption>
            </figure>
            {[b, c].map((item) => (
              <figure key={item.image} className="lg:col-span-5">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-photo)] sm:aspect-[4/3] lg:aspect-[16/10]">
                  <Img name={item.image} alt={item.alt} sizes="(min-width: 1024px) 38vw, 50vw" className="absolute inset-0 size-full object-cover" />
                  <span className="demo-tag absolute top-3 left-3">Demo image</span>
                </div>
                <figcaption className="mt-2.5 text-[15px] text-muted">{item.caption}</figcaption>
              </figure>
            ))}
          </Reveal>

          <div className="mt-8 flex flex-col gap-5 rounded-3xl bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="max-w-2xl text-lg">
              <strong className="font-semibold">{category.label}. </strong>
              {category.note}
            </p>
            <WhatsAppButton message={inspirationEnquiry(category.label)} className="btn btn-primary shrink-0">
              <WhatsAppIcon />
              Ask About This Look
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  )
}
