import type { ImgHTMLAttributes } from 'react'
import type { Photo } from '../data/content'

type Props = {
  photo: Photo
  sizes: string
  priority?: boolean
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'alt' | 'width' | 'height'>

/** Every photo has an 800 and a 1600 version. Photos with maxWidth 2400 also have a 2400 version. */
export const srcSetFor = (photo: Photo) =>
  [800, 1600, ...(photo.maxWidth === 2400 ? [2400] : [])]
    .map((w) => `${import.meta.env.BASE_URL}images/${photo.src}-${w}.webp ${w}w`)
    .join(', ')

// React 18 does not know the camelCase fetchPriority prop, so pass the plain attribute.
const highPriority = { fetchpriority: 'high' } as Record<string, string>

/** A responsive WebP image from public/images (name-800.webp, name-1600.webp, name-2400.webp). */
export function Picture({ photo, sizes, priority = false, ...rest }: Props) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/${photo.src}-1600.webp`}
      srcSet={srcSetFor(photo)}
      sizes={sizes}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? highPriority : {})}
      {...rest}
    />
  )
}
