import React, { useEffect, useRef, useState } from 'react'

/*
|--------------------------------------------------------------------------
| RESPONSIVE SIZE CONTROLS
|--------------------------------------------------------------------------
*/

const ADMIN_SECTION_WIDTH = '820px'
const ADMIN_SECTION_MAX_WIDTH = 'calc(100vw - 32px)'

/*
|--------------------------------------------------------------------------
| TEAM DATA
|--------------------------------------------------------------------------
*/

const MEMBERS = [
  {
    initials: 'MS',
    name: 'Michael Scott',
    role: 'Admin · you',
  },
  {
    initials: 'DS',
    name: 'Dwight Schrute',
    role: 'Member',
  },
]

/*
|--------------------------------------------------------------------------
| SMALL ICONS
|--------------------------------------------------------------------------
*/

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="4" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function EditIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" />
    </svg>
  )
}

function BillingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h3" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 11 11 5" />
      <path d="M6 5h5v5" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="5" cy="12" r="1.4" />
      <circle cx="12" cy="12" r="1.4" />
      <circle cx="19" cy="12" r="1.4" />
    </svg>
  )
}

/*
|--------------------------------------------------------------------------
| HALFTONE BACKGROUND
|--------------------------------------------------------------------------
*/

function HalftoneVisual() {
  const dots = Array.from({ length: 220 })

  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        rounded-[20px]
        bg-[#171717]
      "
      aria-hidden="true"
    >
      <div
        className="
          absolute
          inset-0
          opacity-[0.55]
        "
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.17) 0.9px, transparent 1px)',
          backgroundSize: '5px 5px',
        }}
      />

      <div className="absolute inset-0 opacity-80">
        {dots.map((_, index) => {
          const row = Math.floor(index / 22)
          const col = index % 22

          const blobs = [
            row < 7 && col > 1 && col < 15,
            row > 9 && row < 17 && col > 3 && col < 18,
            row > 18 && col > 1 && col < 17,
            row > 4 && row < 9 && col > 16,
          ]

          const visible = blobs.some(Boolean)

          if (!visible) return null

          const opacity = 0.18 + ((index * 17) % 55) / 100

          return (
            <span
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                width: '2px',
                height: '2px',
                left: `${col * 5 + 8}px`,
                top: `${row * 5 + 10}px`,
                opacity,
              }}
            />
          )
        })}
      </div>

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-transparent
          to-[#181818]
        "
      />
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| BUTTON
|--------------------------------------------------------------------------
*/

function DashboardButton({ children, icon, danger = false }) {
  return (
    <button
      type="button"
      className={`
        inline-flex
        items-center
        justify-center
        gap-1.5
        min-h-8
        px-3
        py-1.5
        rounded-md
        border
        text-[11px]
        font-medium
        transition-colors
        duration-200
        whitespace-nowrap
        ${
          danger
            ? 'border-transparent text-[#ef6666] hover:bg-[#ef6666]/10'
            : 'border-white/10 text-white/75 bg-white/[0.025] hover:bg-white/[0.06] hover:text-white'
        }
      `}
    >
      {icon}
      {children}
    </button>
  )
}

/*
|--------------------------------------------------------------------------
| TOP TEAM PANEL
|--------------------------------------------------------------------------
*/

function TeamPanel() {
  return (
    <div
      className="
        relative
        flex
        flex-col
        lg:flex-row
        overflow-hidden
        rounded-[20px]
        border
        border-white/[0.09]
        bg-[#1b1b1b]
      "
    >
      {/* Left visual */}
      <div
        className="
          relative
          w-full
          h-[130px]
          sm:h-[150px]
          lg:h-auto
          lg:w-[38%]
          lg:min-h-[198px]
          shrink-0
          overflow-hidden
        "
      >
        <HalftoneVisual />
      </div>

      {/* Right content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-start
            sm:justify-between
            gap-3
            border-b
            border-white/[0.08]
            px-4
            sm:px-5
            pt-4
            pb-3
          "
        >
          <div className="flex min-w-0 items-center gap-2.5">
            <UsersIcon />

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="truncate text-[15px] sm:text-[16px] font-semibold text-white">
                  Dunder Mifflin
                </span>

                <button
                  type="button"
                  className="shrink-0 text-white/40 transition-colors hover:text-white/70"
                  aria-label="Edit team name"
                >
                  <EditIcon />
                </button>
              </div>

              <p className="mt-0.5 text-[10px] sm:text-[11px] text-white/35">
                Team plan · 2 of 3 seats used
              </p>
            </div>
          </div>

          <span
            className="
              self-start
              shrink-0
              rounded-full
              border
              border-emerald-400/30
              bg-emerald-400/[0.07]
              px-3
              py-1
              text-[10px]
              font-medium
              text-emerald-400
            "
          >
            Active
          </span>
        </div>

        {/* Controls */}
        <div className="flex flex-1 flex-col justify-between px-4 sm:px-5 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <DashboardButton icon={<BillingIcon />}>
              Manage billing <ExternalIcon />
            </DashboardButton>

            <DashboardButton>
              Change seats
            </DashboardButton>

            <button
              type="button"
              className="
                px-2
                py-1.5
                text-[11px]
                font-medium
                text-[#ef6666]
                transition-opacity
                hover:opacity-70
              "
            >
              Dissolve Team
            </button>
          </div>

          <p className="mt-5 text-[10px] leading-4 text-white/30">
            Payment method, billing details and cancellation are managed in
            the Stripe portal.
          </p>
        </div>
      </div>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| MEMBER CARD
|--------------------------------------------------------------------------
*/

function MemberCard({ member, menu }) {
  return (
    <div
      className="
        relative
        flex
        h-[160px]
        sm:h-[184px]
        w-full
        sm:w-[184px]
        flex-1
        sm:flex-none
        min-w-0
        flex-col
        items-center
        rounded-xl
        border
        border-white/[0.10]
        bg-[#1b1b1b]
        px-4
        pt-10
        sm:pt-12
      "
    >
      {/* Online indicator */}
      <span
        className="
          absolute
          left-2.5
          top-2.5
          h-2
          w-2
          rounded-full
          bg-[#43e28a]
          shadow-[0_0_0_2px_rgba(67,226,138,0.08)]
        "
        aria-label="Online"
      />

      {menu && (
        <button
          type="button"
          className="
            absolute
            right-2
            top-2
            text-white/35
            transition-colors
            hover:text-white/70
          "
          aria-label={`More options for ${member.name}`}
        >
          <MoreIcon />
        </button>
      )}

      {/* Avatar */}
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#dedede]
          text-[11px]
          font-semibold
          text-[#202020]
        "
      >
        {member.initials}
      </div>

      <p className="mt-2 text-center text-[11px] font-semibold text-white">
        {member.name}
      </p>

      <p className="mt-0.5 text-center text-[10px] text-white/35">
        {member.role}
      </p>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| FREE SEAT
|--------------------------------------------------------------------------
*/

function FreeSeatCard() {
  return (
    <button
      type="button"
      className="
        flex
        h-[160px]
        sm:h-[184px]
        w-full
        sm:w-[184px]
        flex-1
        sm:flex-none
        min-w-0
        flex-col
        items-center
        justify-center
        rounded-xl
        border
        border-dashed
        border-white/[0.14]
        bg-transparent
        text-white/45
        transition-colors
        duration-200
        hover:border-white/25
        hover:bg-white/[0.015]
        hover:text-white/65
      "
    >
      <PlusIcon />

      <span className="mt-2 text-[10px]">
        Free seat
      </span>
    </button>
  )
}

/*
|--------------------------------------------------------------------------
| MEMBERS
|--------------------------------------------------------------------------
*/

function MembersSection() {
  return (
    <div className="mt-7">
      <div className="mb-4">
        <h3 className="text-[14px] font-semibold text-white">
          Members
        </h3>

        <p className="mt-1 text-[10px] text-white/35">
          2 of 3 seats used.
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-1
          xs:grid-cols-2
          sm:flex
          sm:flex-wrap
          gap-3
        "
      >
        {MEMBERS.map((member, index) => (
          <MemberCard
            key={member.name}
            member={member}
            menu={index === 1}
          />
        ))}

        <FreeSeatCard />
      </div>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/

export default function AdminControls() {
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
        rootMargin: '0px 0px -60px 0px',
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
        bg-[#0d0d0d]
        px-4
        py-20
        sm:px-6
        sm:py-24
        lg:py-28
      "
    >
      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[38%]
          h-[400px]
          w-[650px]
          sm:h-[500px]
          sm:w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.012]
          blur-[100px]
        "
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[980px]">
        {/* Heading */}
        <div className="mx-auto mb-8 sm:mb-10 lg:mb-12 max-w-[720px] text-center">
          <p
            className={`
              mb-3
              text-[9px]
              uppercase
              tracking-[0.3em]
              sm:tracking-[0.38em]
              text-white/35
              transition-all
              duration-700
              ease-out
              ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-3 opacity-0'
              }
            `}
          >
            Admin controls
          </p>

          <h2
            className={`
              text-2xl
              leading-[1.15]
              tracking-[-0.025em]
              font-semibold
              text-white
              sm:text-3xl
              lg:text-[32px]
              transition-all
              duration-700
              ease-out
              ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-5 opacity-0'
              }
            `}
            style={{
              transitionDelay: visible ? '80ms' : '0ms',
            }}
          >
            Privacy-first. No one can read your
            <br className="hidden sm:block" />
            context without your knowledge.
          </h2>

          <p
            className={`
              mt-4
              px-2
              text-[12px]
              leading-5
              text-white/40
              transition-all
              duration-700
              ease-out
              ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }
            `}
            style={{
              transitionDelay: visible ? '140ms' : '0ms',
            }}
          >
            Admins get the controls a team purchase actually needs:
          </p>
        </div>

        {/* Dashboard */}
        <div
          className={`
            mx-auto
            w-full
            transition-all
            duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-8 scale-[0.985] opacity-0'
            }
          `}
          style={{
            maxWidth: ADMIN_SECTION_MAX_WIDTH,
            width: `min(${ADMIN_SECTION_WIDTH}, 100%)`,
            transitionDelay: visible ? '180ms' : '0ms',
          }}
        >
          <div
            className="
              w-full
              overflow-hidden
              rounded-[14px]
              border
              border-white/[0.07]
              bg-[#151515]
              p-3
              sm:p-5
              lg:p-6
              shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            "
          >
            <TeamPanel />

            <MembersSection />
          </div>
        </div>
      </div>
    </section>
  )
}