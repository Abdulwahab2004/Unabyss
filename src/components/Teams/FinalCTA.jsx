import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SpotlightContainer from '../SpotLightContainer'


/* =========================================================
   SECTION CONFIG
   Change these values to adjust the section globally.
   ========================================================= */

const CTA_CONFIG = {
  // Main section dimensions
  width: '1290px',
  minHeight: '372px',

  // Outer spacing
  paddingX: '56px',
  paddingY: '64px',

  // Border
  borderColor: 'rgba(255, 194, 0, 0.95)',
  borderRadius: '30px',

  // Main colors
  background: '#201f1e',

  // Content
  titleMaxWidth: '560px',
  descriptionMaxWidth: '590px',

  // CTA pill
  pillBackground: '#151515',
  buttonBackground: '#ffffff',
}


/* =========================================================
   CONTENT
   ========================================================= */

const CTA_CONTENT = {
  title: (
    <>
      Get your team out of the re-
      <br className="hidden sm:block" />
      briefing business
    </>
  ),

  description: (
    <>
      Start with your own context and see what your next AI
      <br className="hidden lg:block" />
      conversation already knows. When it's obvious, put the rest
      <br className="hidden lg:block" />
      of the team on it - setup is a source and a minute per
      <br className="hidden lg:block" />
      person.
    </>
  ),

  label: 'A minute per person',

  button: 'Test it out with a 7-day trial',
}


/* =========================================================
   SCROLL REVEAL HOOK
   ========================================================= */

function useScrollReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    // Respect users who have disabled motion.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setVisible(true)
        observer.unobserve(element)
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return {
    ref,
    visible,
  }
}


/* =========================================================
   CTA BUTTON
   ========================================================= */

function CTAButton() {
  return (
    <a
      href="/register"
      className="
        group
        inline-flex
        min-h-[52px]
        items-center
        justify-center
        gap-3
        rounded-full
        bg-white
        px-7
        text-[15px]
        font-semibold
        tracking-[-0.01em]
        text-black
        transition-all
        duration-200
        ease-out
        hover:scale-[1.015]
        hover:bg-white/95
        active:scale-[0.985]
        whitespace-nowrap
      "
    >
      <span>
        {CTA_CONTENT.button}
      </span>

      <ArrowUpRight
        size={17}
        strokeWidth={1.8}
        className="
          transition-transform
          duration-200
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      />
    </a>
  )
}


/* =========================================================
   MAIN SECTION
   ========================================================= */

export default function TeamCTA() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="
        w-full
        bg-[#0f0f0f]
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:py-28
      "
    >
      <div
        className={`
          relative
          mx-auto
          flex
          w-full
          items-center
          overflow-hidden
          transition-all
          duration-1000
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            visible
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-10 scale-[0.985] opacity-0'
          }
        `}
        style={{
          maxWidth: CTA_CONFIG.width,
          minHeight: CTA_CONFIG.minHeight,
          paddingLeft: CTA_CONFIG.paddingX,
          paddingRight: CTA_CONFIG.paddingX,
          paddingTop: CTA_CONFIG.paddingY,
          paddingBottom: CTA_CONFIG.paddingY,

          backgroundColor: CTA_CONFIG.background,
          border: `1px solid ${CTA_CONFIG.borderColor}`,
          borderRadius: CTA_CONFIG.borderRadius,
        }}
      >

        {/* =================================================
            SUBTLE BACKGROUND GLOW
            ================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-180px]
            right-[-100px]
            h-[380px]
            w-[520px]
            rounded-full
            bg-[#d9a500]/[0.045]
            blur-[100px]
          "
        />


        {/* =================================================
            CONTENT
            ================================================= */}

        <SpotlightContainer
          className="
            relative
            z-10
            grid
            w-full
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[1fr_auto]
            lg:gap-14
          "
        >

          {/* LEFT SIDE */}

          <div className="min-w-0">

            <h2
              className="
                max-w-[560px]
                text-[32px]
                font-semibold
                leading-[1.15]
                tracking-[-0.035em]
                text-white
                sm:text-[36px]
                lg:text-[38px]
              "
              style={{
                maxWidth: CTA_CONFIG.titleMaxWidth,
              }}
            >
              {CTA_CONTENT.title}
            </h2>


            <p
              className="
                mt-6
                max-w-[590px]
                text-[17px]
                font-normal
                leading-[1.65]
                tracking-[-0.01em]
                text-white/55
                sm:text-[18px]
              "
              style={{
                maxWidth: CTA_CONFIG.descriptionMaxWidth,
              }}
            >
              {CTA_CONTENT.description}
            </p>

          </div>


          {/* RIGHT SIDE CTA */}

          <div
            className="
              relative
              z-20
              flex
              shrink-0
              items-center
              rounded-full
              bg-[#151515]
              p-2
              shadow-[0_10px_40px_rgba(0,0,0,0.18)]
            "
          >

            <span
              className="
                px-5
                text-[15px]
                font-semibold
                tracking-[-0.01em]
                text-[#e1bb68]
                whitespace-nowrap
              "
            >
              {CTA_CONTENT.label}
            </span>


            <CTAButton />

          </div>

        </SpotlightContainer>
      </div>
    </section>
  )
}