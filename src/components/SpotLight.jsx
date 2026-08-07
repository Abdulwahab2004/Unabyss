import { useRef, useState, useCallback } from 'react'

export default function Spotlight({
  children,
  className = '',
  size = 180,
  opacity = 0.12,
}) {
  const ref = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    el.style.setProperty('--spot-x', `${x}px`)
    el.style.setProperty('--spot-y', `${y}px`)
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative ${className}`}
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-200"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `
            radial-gradient(
              ${size}px circle at var(--spot-x, 50%) var(--spot-y, 50%),
              rgba(255,255,255,${opacity}),
              transparent 70%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}