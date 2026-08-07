
import { useRef, useState, useCallback } from 'react'

export default function SpotlightContainer({
  children,
  className = '',
}) {
  const ref = useRef(null)
  const [hovering, setHovering] = useState(false)

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
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative ${className}`}
    >
      {/* Border shine */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          padding: '1px',
          background:
            'radial-gradient(120px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.9), rgba(255,255,255,0.2) 35%, transparent 70%)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
        aria-hidden="true"
      />

      {/* Interior spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background:
            'radial-gradient(180px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.14), transparent 70%)',
        }}
        aria-hidden="true"
      />

      {children}
    </div>
  )
}

