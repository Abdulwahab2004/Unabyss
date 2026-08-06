import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowUpRight, ChevronUp, ChevronDown, LogIn } from 'lucide-react'

const USE_CASES = [
  { label: 'Founders', desc: 'AI that knows your company', href: '/unabyss-for-founders' },
  { label: 'Builders', desc: 'One context for every agent', href: '/unabyss-for-builders' },
  { label: 'Agencies', desc: 'Live context per client', href: '/unabyss-for-agencies' },
  { label: 'GTM', desc: 'Marketing, sales & ops', href: '/unabyss-for-gtm' },
]

const NAV_LINKS = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Teams', href: '/teams' },
  { label: 'Pricing', href: '/pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [useCasesOpen, setUseCasesOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 8)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUseCasesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') setUseCasesOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="w-full flex items-center justify-between px-8 py-5">
        {/* LOGO — far left */}
        <a
          href="/"
          className="flex items-center gap-2.5 bg-badge border border-white/10 rounded-full pl-3 pr-5 py-2 shrink-0"
        >
          <div className="grid grid-cols-3 gap-[3px]" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="w-[3px] h-[3px] rounded-full bg-white/70" />
            ))}
          </div>
          <span className="font-bold text-sm tracking-[0.15em]">UNABYSS</span>
        </a>

        {/* RIGHT CLUSTER — nav pill + log in + try now, all grouped right */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-1 bg-badge border border-white/10 rounded-full px-2 py-2">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setUseCasesOpen((o) => !o)}
                aria-expanded={useCasesOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors px-4 py-2"
              >
                Use cases
                {useCasesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {useCasesOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-0 mt-3 w-[420px] bg-badge border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-up"
                >
                  {USE_CASES.map((item, i) => (
                    <a
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className={`flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors ${
                        i !== USE_CASES.length - 1 ? 'border-b border-white/5' : ''
                      }`}
                    >
                      <span className="font-semibold text-white">{item.label}</span>
                      <span className="text-sm text-white/40">{item.desc}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors px-4 py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/login"
            className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
          >
            Log in
            <LogIn size={14} />
          </a>

          <a
            href="/register"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold bg-white text-black pl-4 pr-3.5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Try now
            <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  )
}