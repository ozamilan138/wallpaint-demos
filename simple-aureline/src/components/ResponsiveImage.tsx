import type { ImageAsset } from '../data/images'
import { src, srcSet } from '../data/images'

interface ResponsiveImageProps {
  image: ImageAsset
  alt: string
  sizes: string
  className?: string
  /** Set to true only for the first image on the screen. */
  priority?: boolean
  objectPosition?: string
}

export function ResponsiveImage({ image, alt, sizes, className = '', priority = false, objectPosition }: ResponsiveImageProps) {
  return (
    <img
      src={src(image)}
      srcSet={srcSet(image)}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={`h-full w-full object-cover ${className}`}
      style={objectPosition ? { objectPosition } : undefined}
    />
  )
}
