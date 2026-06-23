import { useRef, useState, useEffect } from 'react'

/**
 * LazyVideo — only mounts the <video> element when it's near the viewport.
 * Solves iOS preload issues and prevents loading all videos at once on mobile.
 */
export default function LazyVideo({ src, className, preload = 'metadata', rootMargin = '300px', ...rest }) {
  const ref = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(rootMargin === '0px')

  useEffect(() => {
    if (rootMargin === '0px') return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          obs.disconnect()
        }
      },
      { rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} className={className ? `${className}-placeholder` : ''} style={{ width: '100%', height: '100%', background: 'var(--color-black)' }}>
      {shouldLoad && (
        <video
          className={className}
          src={src}
          preload={preload}
          muted
          loop
          playsInline
          autoPlay
          {...rest}
        />
      )}
    </div>
  )
}
