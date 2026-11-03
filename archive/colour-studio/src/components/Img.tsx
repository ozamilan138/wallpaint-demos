import { images, type ImageName } from '../data/images'

interface ImgProps {
  name: ImageName
  alt: string
  sizes: string
  className?: string
  /** Set to true only for the first image on screen. */
  priority?: boolean
  style?: React.CSSProperties
}

/** A responsive image with two WebP widths and reserved space. */
export function Img({ name, alt, sizes, className, priority = false, style }: ImgProps) {
  const { widths, ratio } = images[name]
  const [small, large] = widths
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/${name}-${large}.webp`}
      srcSet={`${import.meta.env.BASE_URL}images/${name}-${small}.webp ${small}w, ${import.meta.env.BASE_URL}images/${name}-${large}.webp ${large}w`}
      sizes={sizes}
      width={large}
      height={Math.round(large / ratio)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
      style={style}
    />
  )
}
