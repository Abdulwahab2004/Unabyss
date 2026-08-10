import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowUpRight, ChevronUp, ChevronDown, LogIn, Menu, X } from 'lucide-react'
import SpotlightContainer from './SpotLightContainer'
import Spotlight from './SpotLight'

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
  {label:"Log in" , href : '/login' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [useCasesOpen, setUseCasesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false)
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
      if (e.key === 'Escape') {
        setUseCasesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // close mobile menu on resize up to desktop breakpoint
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
        setMobileUseCasesOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      <nav className="w-full flex items-center justify-between px-5 sm:px-8 lg:px-35 py-5">
        {/* LOGO — far left */}
         <SpotlightContainer className="flex items-center gap-1 bg-transparent backdrop-blur border border-white/5 rounded-full pl-2">
        <a
          href="/"
          className="flex items-center gap-2.5 bg-badge rounded-full pl-3 pr-5 py-2 shrink-0"
        >
          <div className="grid grid-cols-3 gap-[3px]" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="w-[3px] h-[3px] rounded-full bg-white/70" />
            ))}
          </div>
          <span className="font-bold text-sm tracking-[0.4em] font-extralight text-white/80">UNABYSS</span>
        </a>
</SpotlightContainer>
        {/* RIGHT CLUSTER — nav pill + log in + try now, all grouped right (desktop only) */}

        <div className="hidden lg:flex items-center gap-6 shrink-0">
         <SpotlightContainer
  className="
    relative
    flex items-center 
   bg-transparent
   backdrop-blur-md
    border border-white/5
    rounded-full
    px-1 py-0.5
    mt-1
  "
>
  <div className="relative" ref={dropdownRef}>
    <button
      onClick={() => setUseCasesOpen((o) => !o)}
      aria-expanded={useCasesOpen}
      aria-haspopup="true"
      className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors px-4 py-2"
    >
      Use cases


      {useCasesOpen ? (
        <ChevronUp size={14} />
      ) : (
        <ChevronDown size={14} />
      )}
    </button>

  
 {useCasesOpen && (

   <div
   role="menu"
   className="
   absolute
   top-full
   left-0
   mt-3
   w-[500px]
   z-[100]
   rounded-[24px]
   border border-white/10
   bg-[#1d1d1d]/70 
   backdrop-blur-sm
   
   
   shadow-2xl
   overflow-hidden
   animate-fade-up
   "
   >
   

    <SpotlightContainer className="relative">
      {USE_CASES.map((item) => (
        <a
        key={item.href}
        href={item.href}
        role="menuitem"
        className="
        group
        flex
        items-center
        justify-between
        px-5
        py-2
        rounded-xl
        transition-colors
        hover:bg-white/[0.04]
        
        "
        >
          <span className="text-xs font-semibold text-white/60">
            {item.label}
          </span>

          <span className="text-xs font-light text-white/45">
            {item.desc}
          </span>
        </a>
      ))}
    </SpotlightContainer>
      
  </div>
      
)}
  </div>

  {NAV_LINKS.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className="text-xs text-white/60 hover:text-white transition-colors px-4 py-2"
    >
      {link.label}
    </a>
  ))}

 <LogIn size={24} className='text-white/70 pr-3' />
</SpotlightContainer>
         
           
            
         

          <a
            href="/register"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[0.7rem] font-semibold bg-white text-black pl-4 pr-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Try now
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* HAMBURGER — mobile / tablet only */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/5 bg-transparent backdrop-blur text-white/70 hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      {mobileOpen && (
        <div className="lg:hidden px-5 sm:px-8 pb-5 animate-fade-up">
          <div className="rounded-[24px] border border-white/10 bg-[#1d1d1d]/80 backdrop-blur-sm shadow-2xl overflow-hidden">
            <div className="flex flex-col py-2">
              <button
                onClick={() => setMobileUseCasesOpen((o) => !o)}
                aria-expanded={mobileUseCasesOpen}
                className="flex items-center justify-between text-xs text-white/60 hover:text-white transition-colors px-5 py-3"
              >
                Use cases
                {mobileUseCasesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {mobileUseCasesOpen && (
                <div className="flex flex-col">
                  {USE_CASES.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between px-5 py-2.5 pl-8 transition-colors hover:bg-white/[0.04]"
                    >
                      <span className="text-xs font-semibold text-white/60">{item.label}</span>
                      <span className="text-xs font-light text-white/45">{item.desc}</span>
                    </a>
                  ))}
                </div>
              )}

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/60 hover:text-white transition-colors px-5 py-3"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/register"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 text-[0.7rem] font-semibold bg-white text-black mx-5 my-3 py-2.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Try now
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}