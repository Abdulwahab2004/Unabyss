import React, { useEffect, useRef, useState } from 'react'
import SpotlightContainer from '../SpotLightContainer'

const FEATURES = [
  {
    title: 'Unlimited agents.',
    desc: 'Connect as many AI tools as they use - Claude, ChatGPT, Cursor, and more.',
    icons: [
      {
        name: 'Unabyss',
        icon: 'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3e%3ccircle cx="12" cy="12" r="10" fill="%23D9A867"/%3e%3cpath d="M7 12h10M12 7v10" stroke="%230b0b0b" stroke-width="2"/%3e%3c/svg%3e',
      },
      {
        name: 'ChatGPT',
        icon: 'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 260"%3e%3cpath fill="%23fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Z"/%3e%3c/svg%3e',
      },
      {
        name: 'Cursor',
        icon: 'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3e%3cpath fill="%23fff" d="M5 3.5 20 12l-6.3 1.7L11.5 20 5 3.5Z"/%3e%3c/svg%3e',
      },
      {
        name: 'Gemini',
        icon: 'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3e%3cpath fill="%23fff" d="M12 2c1.5 5.5 4.5 8.5 10 10-5.5 1.5-8.5 4.5-10 10-1.5-5.5-4.5-8.5-10-10 5.5-1.5 8.5-4.5 10-10Z"/%3e%3c/svg%3e',
      },
    ],
  },
  {
    title: 'Unlimited connected accounts.',
    desc: 'Every source they work in, not a capped handful.',
    icons: [
      {
        name: 'Gmail',
        icon: 'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3e%3cpath fill="%234285F4" d="M6 40V12l18 14L42 12v28h-7V21L24 30 13 21v19H6Z"/%3e%3cpath fill="%23EA4335" d="M6 12l18 18 18-18-6-4-12 12L12 8l-6 4Z"/%3e%3c/svg%3e',
      },
      {
        name: 'Slack',
        icon: 'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3e%3cpath fill="%23E01E5A" d="M6 15a3 3 0 1 1-3-3h3v3Zm1.5 0A1.5 1.5 0 0 1 9 16.5v4a3 3 0 1 1-3-3v-2.5h1.5Z"/%3e%3cpath fill="%2336C5F0" d="M9 6a3 3 0 1 1-3 3V6a3 3 0 0 1 3-3h3v3H9Zm0 1.5A1.5 1.5 0 0 1 10.5 9h4a3 3 0 1 1-3-3H9v1.5Z"/%3e%3cpath fill="%232EB67D" d="M18 9a3 3 0 1 1 3 3h-3V9Zm-1.5 0A1.5 1.5 0 0 1 15 7.5v-4a3 3 0 1 1 3 3V9h-1.5Z"/%3e%3cpath fill="%23ECB22E" d="M15 18a3 3 0 1 1 3-3v3a3 3 0 1 1-3 3h-3v-3h3Zm0-1.5A1.5 1.5 0 0 1 13.5 15h-4a3 3 0 1 1 3 3H15v-1.5Z"/%3e%3c/svg%3e',
      },
      {
        name: 'Notion',
        icon: 'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3e%3cpath fill="%23fff" d="M5 3h13l2 2v16H5V3Zm3 4v10h2V10l5 7h2V7h-2v6l-5-6H8Z"/%3e%3c/svg%3e',
      },
      {
        name: 'Google Drive',
        icon: 'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3e%3cpath fill="%23FFC107" d="M16 6h16l10 18H26L16 6Z"/%3e%3cpath fill="%230F9D58" d="M6 24h20l-8 14H6l10-14Z"/%3e%3cpath fill="%234285F4" d="M26 24h16l-10 14H16l10-14Z"/%3e%3c/svg%3e',
      },
    ],
  },
  {
    title: 'Deep research queries.',
    desc: 'The heavier, reasoning-based questions, not just fast lookups.',
  },
  {
    title: 'Priority support',
    desc: 'and early access to new features.',
  },
  {
    title: 'Unified billing.',
    desc: 'One payment, one invoice.',
  },
]

function CheckIcon() {
  return (
    <span
      className="
        flex items-center justify-center
        w-6 h-6
        rounded-full
        shrink-0
        bg-[#8d6d32]/25
        text-[#d9a867]
        mt-0.5
      "
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 20 20"
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 10 3.2 3.2L15 6.8" />
      </svg>
    </span>
  )
}

function FeatureIcons({ icons }) {
  if (!icons?.length) return null

  return (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      {icons.map((item) => (
        <span
          key={item.name}
          className="
            flex items-center justify-center
            w-8 h-8
            rounded-full
            border border-white/10
            bg-[#292826]
            shrink-0
          "
          title={item.name}
          aria-label={item.name}
        >
          <img
            src={item.icon}
            alt=""
            width="16"
            height="16"
            loading="lazy"
            decoding="async"
            className="w-4 h-4 object-contain"
          />
        </span>
      ))}

      <span className="text-xs text-white/30 ml-0.5">
        and more
      </span>
    </div>
  )
}

function FeatureItem({ feature, index, visible }) {
  return (
    <div
      className={`
        flex items-start gap-3
        transition-all duration-700 ease-out
        ${visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
        }
      `}
      style={{
        transitionDelay: visible
          ? `${150 + index * 80}ms`
          : '0ms',
      }}
    >
      <CheckIcon />

      <div className="min-w-0 flex-1">
        <p className="text-[15px] sm:text-base leading-6 text-white/70">
          <span className="font-semibold text-white">
            {feature.title}
          </span>{' '}
          {feature.desc}
        </p>

        <FeatureIcons icons={feature.icons} />
      </div>
    </div>
  )
}

export default function MaxPlanSeat() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current

    if (!element) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-16
        sm:px-6
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* Background glow */}
      <div
        className={`
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          -translate-x-1/2
          -translate-y-1/2
          w-[320px]
          h-[180px]
          sm:w-[500px]
          sm:h-[250px]
          md:w-[600px]
          md:h-[300px]
          rounded-full
          bg-[#d9a867]/[0.035]
          blur-[80px]
          sm:blur-[100px]
          transition-opacity
          duration-1000
          ${visible ? 'opacity-100' : 'opacity-0'}
        `}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p
          className={`
            text-[10px]
            sm:text-[11px]
            uppercase
            tracking-[0.28em]
            sm:tracking-[0.32em]
            text-white/40
            mb-3
            sm:mb-4
            transition-all
            duration-700
            ease-out
            ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3'
            }
          `}
        >
          Every seat
        </p>

        {/* Heading */}
        <h2
          className={`
            text-[28px]
            leading-[1.12]
            sm:text-[2.25rem]
            md:text-[2.7rem]
            font-semibold
            tracking-[-0.035em]
            text-white
            px-2
            mb-4
            sm:mb-5
            transition-all
            duration-700
            ease-out
            ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }
          `}
          style={{
            transitionDelay: visible ? '80ms' : '0ms',
          }}
        >
          Max plan on every team seat
        </h2>

        {/* Description */}
        <p
          className={`
            w-full
            max-w-[590px]
            mx-auto
            text-[14px]
            sm:text-[15px]
            md:text-base
            leading-6
            sm:leading-7
            text-white/50
            px-2
            mb-9
            sm:mb-12
            transition-all
            duration-700
            ease-out
            ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }
          `}
          style={{
            transitionDelay: visible ? '140ms' : '0ms',
          }}
        >
          Every person on your team gets the full-power plan, not a
          stripped-down team edition:
        </p>

        {/* Feature panel */}
        <SpotlightContainer
          className={`
            relative
            w-full
            text-left
            rounded-[18px]
            sm:rounded-[22px]
            border
            border-[#d6a500]
            bg-[#211f1d]
            px-5
            py-6
            sm:px-7
            sm:py-8
            md:px-9
            md:py-9
            transition-all
            duration-1000
            ease-out
            ${
              visible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-6 scale-[0.985]'
            }
          `}
          style={{
            transitionDelay: visible ? '220ms' : '0ms',
          }}
        >
          {/* Internal glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[18px]
              sm:rounded-[22px]
              overflow-hidden
            "
            aria-hidden="true"
          >
            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[260px]
                h-[160px]
                sm:w-[400px]
                sm:h-[200px]
                md:w-[500px]
                md:h-[220px]
                rounded-full
                bg-[#d9a867]/[0.025]
                blur-[60px]
                sm:blur-[70px]
              "
            />
          </div>

          {/* Features */}
          <div
            className="
              relative
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-x-8
              gap-y-6
              sm:gap-y-7
              md:gap-x-12
            "
          >
            {FEATURES.map((feature, index) => (
              <div key={feature.title} className="min-w-0">
                <FeatureItem
                  feature={feature}
                  index={index}
                  visible={visible}
                />
              </div>
            ))}
          </div>
        </SpotlightContainer>

        {/* CTA */}
        <SpotlightContainer
          className={`
            w-full
            sm:w-auto
            mx-auto
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
            bg-[#1d1d1c]
            border
            border-white/[0.08]
            rounded-2xl
            sm:rounded-full
            px-3
            py-3
            sm:pl-2
            sm:pr-2
            sm:py-2
            mt-6
            sm:mt-7
            transition-all
            duration-800
            ease-out
            ${
              visible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }
          `}
          style={{
            transitionDelay: visible ? '500ms' : '0ms',
          }}
        >
          {/* Avatars + text */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 shrink-0">
              <div
                className="
                  flex items-center justify-center
                  w-9 h-9
                  sm:w-10 sm:h-10
                  rounded-full
                  border-2 border-[#1d1d1c]
                  bg-[#d7d7d7]
                "
              >
                <span className="text-[11px] font-semibold text-black/60">
                  A
                </span>
              </div>

              <div
                className="
                  flex items-center justify-center
                  w-9 h-9
                  sm:w-10 sm:h-10
                  rounded-full
                  border-2 border-[#1d1d1c]
                  bg-[#c8c8c8]
                "
              >
                <span className="text-[11px] font-semibold text-black/60">
                  B
                </span>
              </div>
            </div>

            <span className="text-sm text-white/55">
              Still unsure?
            </span>
          </div>

          {/* CTA button */}
          <a
            href="/book-a-call"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              w-full
              sm:w-auto
              rounded-full
              bg-white
              text-black
              px-5
              py-3
              text-sm
              font-semibold
              whitespace-nowrap
              transition-all
              duration-200
              hover:bg-white/90
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            Book a call with our team

            <svg
              viewBox="0 0 16 16"
              className="w-3.5 h-3.5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 12 12 4" />
              <path d="M6 4h6v6" />
            </svg>
          </a>
        </SpotlightContainer>
      </div>
    </section>
  )
}