import type { SiteImage } from '../data/images'
import { srcFor, srcSetFor } from '../data/images'

interface ResponsiveImageProps {
  image: SiteImage
  sizes: string
  className?: string
  /** Set to true for the image on the first screen only. */
  priority?: boolean
}

/** An image with WebP files at several widths. The browser picks the best width. */
export function ResponsiveImage({ image, sizes, className, priority = false }: ResponsiveImageProps) {
  const width = image.widths[image.widths.length - 1]
  return (
    <img
      src={srcFor(image, image.widths[Math.min(1, image.widths.length - 1)])}
      srcSet={srcSetFor(image)}
      sizes={sizes}
      alt={image.alt}
      width={width}
      height={Math.round(width / image.ratio)}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      className={className}
    />
  )
}
