import { imageSrc, imageSrcSet, images, type ImageName } from '../data/images'

interface PictureProps {
  name: ImageName
  alt: string
  sizes: string
  className?: string
  /** Use true only for the first image on the screen. */
  priority?: boolean
}

/** A responsive WebP image with srcset. Images below the first screen load lazily. */
export function Picture({ name, alt, sizes, className, priority = false }: PictureProps) {
  const info = images[name]
  const fallback = info.widths.includes(1024) ? 1024 : info.widths[0]
  return (
    <img
      src={imageSrc(name, fallback)}
      srcSet={imageSrcSet(name)}
      sizes={sizes}
      alt={alt}
      width={1600}
      height={Math.round(1600 / info.ratio)}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
    />
  )
}

/** A small label that marks a sample photograph. */
export function DemoTag({ className = '' }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none inline-flex items-center rounded-full bg-white/92 px-2.5 py-1 text-[0.8125rem] font-semibold text-ink ${className}`}
    >
      Demo image
    </span>
  )
}
