import { useState } from 'react'
import { ToothMark } from './Logo'
import { cn } from '../lib/utils'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  loading?: 'lazy' | 'eager'
}

export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  loading = 'lazy',
}: SmartImageProps) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-mint via-sage/60 to-teal/20',
          className,
        )}
      >
        <ToothMark className="h-12 w-12 text-teal/40" />
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden bg-mint/50', className)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-700',
          loaded ? 'opacity-100' : 'opacity-0',
          imgClassName,
        )}
      />
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-mint/70 to-sage/40" />
      )}
    </div>
  )
}
