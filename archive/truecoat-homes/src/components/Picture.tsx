import type { ImgHTMLAttributes } from 'react'
import type { Photo } from '../data/photos'

type Props = {
  photo: Photo
  sizes: string
  priority?: boolean
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'alt' | 'width' | 'height'>

const srcSetFor = (photo: Photo) =>
  [800, 1600, ...(photo.big ? [2400] : [])].map((w) => `${import.meta.env.BASE_URL}images/${photo.src}-${w}.webp ${w}w`).join(', ')

// React 18 does not know the camelCase fetchPriority prop, so pass the plain attribute.
const highPriority = { fetchpriority: 'high' } as Record<string, string>

/** A responsive WebP image from public/images. Images below the first screen load lazily. */
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
