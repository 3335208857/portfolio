import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * SplitText — Scroll-triggered character/word reveal animation.
 * Splits text into pieces and animates each with staggered delay.
 */
export default function SplitText({
  text = '',
  type = 'word',             // 'char' | 'word'
  delay = 60,                // stagger delay between pieces (ms)
  duration = 0.6,
  from = { opacity: 0, y: 40, rotateX: 0 },
  to = { opacity: 1, y: 0, rotateX: 0 },
  threshold = 0.2,
  className = '',
  tag: Tag = 'div',
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  // Split into pieces
  const pieces =
    type === 'char'
      ? text.split('').filter(Boolean)
      : text.split(' ').filter(Boolean)

  const staggerMs = delay / 1000

  return (
    <Tag ref={ref} className={`split-text ${className}`} style={{ display: 'inline-flex', flexWrap: 'wrap', gap: type === 'word' ? '0.3em' : '0', overflow: 'hidden', verticalAlign: 'top' }}>
      {pieces.map((piece, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', whiteSpace: type === 'word' ? 'pre' : 'pre', willChange: 'transform, opacity' }}
          initial={from}
          animate={inView ? to : from}
          transition={{
            duration,
            delay: i * staggerMs,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {piece}
        </motion.span>
      ))}
    </Tag>
  )
}
