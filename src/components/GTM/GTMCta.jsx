import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SpotlightContainer from '../SpotLightContainer'


//    SECTION CONFIG


const CTA_CONFIG = {
  width: '1100px',
  minHeight: '372px',

  paddingX: '56px',
  paddingY: '64px',

  borderColor: 'rgba(255, 194, 0, 0.95)',
  borderRadius: '30px',

  background: '#201f1e',

  titleMaxWidth: '600px',
  descriptionMaxWidth: '590px',

  pillBackground: '#151515',
  buttonBackground: '#ffffff',
}


 //  CONTENT


const CTA_CONTENT = {
  title: (
    <>
  Context for every GTM move
      <br className="hidden sm:block" />
     
    </>
  ),

  description: (
    <>
     
Connect a source and every draft, reply, and prep already knows what's happening across the team. <br className="hidden lg:block" />

      
    </>
  ),

  label: 'Under a minute to set up',

  button: ' Connect your stack - free',
}


//    SCROLL REVEAL HOOK
   

function useScrollReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

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

// CTA Button

function CTAButton() {
  return (
    <a
      href="/register"
      className="
        group
        inline-flex
        min-h-[48px]
        w-full
        items-center
        justify-center
        gap-2.5
        rounded-full
        bg-white
        px-5
        text-[14px]
        font-semibold
        tracking-[-0.01em]
        text-black
        transition-all
        duration-200
        ease-out
        hover:scale-[1.015]
        hover:bg-white/95
        active:scale-[0.985]

        sm:min-h-[52px]
        sm:w-auto
        sm:px-7
        sm:text-[15px]
      "
    >
      <span>{CTA_CONTENT.button}</span>

      <ArrowUpRight
        size={17}
        strokeWidth={1.8}
        className="
          shrink-0
          transition-transform
          duration-200
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      />
    </a>
  )
}


//    MAIN SECTION
   


export default function TeamCTA() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="
        w-full
        overflow-hidden
        bg-[#0f0f0f]

        px-4
        py-16

        sm:px-6
        sm:py-20

        md:py-24

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

          rounded-[22px]

          sm:rounded-[26px]

          lg:rounded-[30px]
        `}
        style={{
          maxWidth: CTA_CONFIG.width,

         
          minHeight: undefined,

          backgroundColor: CTA_CONFIG.background,

          border: `1px solid ${CTA_CONFIG.borderColor}`,
        }}
      >
       
            {/* RESPONSIVE INNER PADDING */}
           
        <div
          className="
            relative
            z-10
            w-full

            px-5
            py-8

            sm:px-7
            sm:py-10

            md:px-10
            md:py-12

            lg:px-14
            lg:py-16
          "
        >
          
              {/* SUBTLE BACKGROUND GLOW */}
             

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-180px]
              right-[-100px]

              h-[280px]
              w-[380px]

              rounded-full
              bg-[#d9a500]/[0.045]
              blur-[100px]

              sm:h-[340px]
              sm:w-[460px]

              lg:h-[380px]
              lg:w-[520px]
            "
          />

          
              {/* CONTENT */}
              

          <SpotlightContainer
            className="
              relative
              z-10
              grid
              w-full
              grid-cols-1
              items-center

              gap-8

              md:gap-10

              lg:grid-cols-[minmax(0,1fr)_auto]
              lg:gap-12

              xl:gap-14
            "
          >
           
                {/* LEFT SIDE */}
              

            <div className="min-w-0">
              <h2
                className="
                  max-w-[560px]

                  text-[28px]
                  font-semibold
                  leading-[1.12]
                  tracking-[-0.035em]
                  text-white

                  sm:text-[28px]

                  md:text-[30px]

                  lg:text-[30px]
                "
                style={{
                  maxWidth: CTA_CONFIG.titleMaxWidth,
                }}
              >
                {CTA_CONTENT.title}
              </h2>

              <p
                className="
                  mt-5

                  max-w-[590px]

                  text-[15px]
                  font-normal
                  leading-[1.65]
                  tracking-[-0.01em]
                  text-white/55

                  sm:mt-6
                  sm:text-[16px]

                  md:text-[17px]

                  lg:text-[18px]
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
                w-full
                shrink-0

                flex-col

                rounded-[20px]
                bg-[#151515]
                p-2

                shadow-[0_10px_40px_rgba(0,0,0,0.18)]

                sm:flex-row
                sm:items-center
                sm:rounded-full
                sm:w-fit
              "
            >
              <span
                className="
                  px-3
                  py-2

                  text-center
                  text-[13px]
                  font-semibold
                  tracking-[-0.01em]
                  text-[#e1bb68]
                  whitespace-normal

                  sm:px-4
                  sm:text-[14px]
                  sm:whitespace-nowrap

                  md:px-5
                  md:text-[15px]
                "
              >
                {CTA_CONTENT.label}
              </span>

              <CTAButton />
            </div>
          </SpotlightContainer>
        </div>
      </div>
    </section>
  )
}