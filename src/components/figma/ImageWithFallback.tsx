import { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ComponentPropsWithoutRef<'img'> {
  fallbackSrc?: string
}

export function ImageWithFallback({ src, alt, style, className, fallbackSrc = ERROR_IMG_SRC, ...rest }: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [errorCount, setErrorCount] = useState(0)

  const handleError = () => {
    setErrorCount((prev) => {
      if (prev >= 1) {
        return prev
      }
      setDidError(true)
      return prev + 1
    })
  }

  const imageSrc = didError ? fallbackSrc : src

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={didError ? undefined : handleError}
      data-original-url={src}
      data-error={didError}
    />
  )
}
