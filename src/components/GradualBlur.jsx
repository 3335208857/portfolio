import '../styles/gradual-blur.css'

/**
 * GradualBlur — Smooth dark fade gradient.
 * Place inside a `position: relative; overflow: hidden` container.
 */
export default function GradualBlur({
  position = 'bottom',
  height = '8rem',
}) {
  return (
    <div
      className={`gradual-blur gradual-blur--${position}`}
      style={{ height }}
    />
  )
}
