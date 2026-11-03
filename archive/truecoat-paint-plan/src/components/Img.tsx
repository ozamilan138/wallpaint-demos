import type { ImgHTMLAttributes } from 'react'
import { IMAGES, type ImageName } from '../data/images'

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> {
  name: ImageName
  alt: string
  sizes: string
  /** Set to true for the photo on the first screen. */
  priority?: boolean
}

/** A responsive photo from public/images, with a srcset and the correct size ratio. */
export function Img({ name, alt, sizes, priority = false, className = '', ...rest }: Props) {
  const info = IMAGES[name]
  const widths = info.widths
  const largest = widths[widths.length - 1]
  const srcSet = widths.map((w) => `${import.meta.env.BASE_URL}images/${name}-${w}.webp ${w}w`).join(', ')
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/${name}-${largest}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={info.w}
      height={info.h}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
      className={`bg-beige object-cover ${className}`}
      {...rest}
    />
  )
}
