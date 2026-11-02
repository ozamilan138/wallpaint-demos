import type { ImgHTMLAttributes } from 'react'
import type { Photo } from '../data/photos'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> & {
  photo: Photo
  sizes: string
  /** Set to true for the first image on the screen. */
  priority?: boolean
}

export const photoSrc = (photo: Photo, width: number) => `${import.meta.env.BASE_URL}images/${photo.name}-${width}.webp`

/** A responsive WebP image with a srcset, a reserved size and lazy loading. */
export function Picture({ photo, sizes, priority = false, alt, ...rest }: Props) {
  const srcSet = photo.widths.map((w) => `${photoSrc(photo, w)} ${w}w`).join(', ')
  const fallback = photoSrc(photo, photo.widths[Math.min(1, photo.widths.length - 1)])
  return (
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      width={photo.w}
      height={photo.h}
      alt={alt ?? photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      {...(priority ? { fetchPriority: 'high' as const } : {})}
      {...rest}
    />
  )
}
