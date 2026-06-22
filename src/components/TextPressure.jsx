import { useRef, useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import '../styles/text-pressure.css'

/**
 * TextPressure — dynamic text with animated stroke pressure effect.
 * Uses -webkit-text-stroke for crisp outline + framer-motion for breathing animation.
 */
export default function TextPressure({
  text = 'Hello!',
  flex = false,
  alpha = false,
  stroke = false,
  width: widthAxis = false,
  weight = false,
  italic = false,
  textColor = '#ffffff',
  strokeColor = '#666666',
  minFontSize = 36,
  className = '',
}) {
  const containerRef = useRef(null)
  const [fontSize, setFontSize] = useState(minFontSize)

  const calcFontSize = useCallback(() => {
    if (!flex || !containerRef.current) return
    const { clientWidth: cw, clientHeight: ch } = containerRef.current
    const len = text.length
    const fromWidth = cw / (len * 0.55)
    const fromHeight = ch * 0.65
    setFontSize(Math.max(minFontSize, Math.min(fromWidth, fromHeight)))
  }, [flex, minFontSize, text])

  useEffect(() => {
    calcFontSize()
    const obs = new ResizeObserver(calcFontSize)
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [calcFontSize])

  return (
    <div
      ref={containerRef}
      className={`text-pressure${flex ? ' text-pressure--flex' : ''}${stroke ? ' text-pressure--stroke' : ''}${alpha ? ' text-pressure--alpha' : ''}${weight ? ' text-pressure--bold' : ''}${italic ? ' text-pressure--italic' : ''} ${className}`}
      style={{
        '--tp-size': `${fontSize}px`,
        '--tp-color': textColor,
        '--tp-stroke': strokeColor,
      }}
    >
      <motion.span
        className="text-pressure-text"
        style={{
          fontSize: `var(--tp-size)`,
          color: textColor,
          WebkitTextStroke: stroke ? `1.5px ${strokeColor}` : 'none',
        }}
        animate={
          widthAxis
            ? { letterSpacing: ['-0.03em', '0.06em', '-0.03em'] }
            : { letterSpacing: ['-0.01em', '0.03em', '-0.01em'] }
        }
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {text}
      </motion.span>

      {alpha && (
        <motion.span
          className="text-pressure-ghost"
          style={{
            fontSize: `var(--tp-size)`,
            color: textColor,
          }}
          animate={{ opacity: [0.25, 0.6, 0.25] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.4,
          }}
          aria-hidden="true"
        >
          {text}
        </motion.span>
      )}
    </div>
  )
}
