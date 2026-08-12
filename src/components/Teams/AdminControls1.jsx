import React, { useEffect, useRef, useState } from 'react'

/* =========================================================
   EASY CONTROLS
   Change these values only when you want to resize the section.
   ========================================================= */

const ADMIN_SECTION = {
  width: '820px',
  maxWidth: 'calc(100vw - 32px)',

  // Main section/card height
  height: '548px',

  // Individual seat cards
  seatWidth: '119px',
  seatHeight: '148px',

  // Bottom privacy notice
  noticeHeight: '94px',
}


/* =========================================================
   DATA
   ========================================================= */

const TEAM_MEMBERS = [
  {
    initials: 'DS',
    name: 'Dwight Schrute',
    role: 'Member',
    online: true,
  },
]

const SEATS = [
  {
    type: 'member',
    member: TEAM_MEMBERS[0],
  },
  {
    type: 'free',
  },
]

const MENU_ITEMS = [
  {
    label: 'Make admin',
    icon: 'admin',
    danger: false,
  },
  {
    label: 'Clear their context',
    icon: 'clear',
    danger: false,
  },
  {
    label: 'Remove from Team',
    icon: 'remove',
    danger: true,
    highlighted: true,
  },
  {
    label: 'Delete their account',
    icon: 'delete',
    danger: true,
  },
]


/* =========================================================
   ICONS
   ========================================================= */

function MoreIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-3.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="4" cy="10" r="1.2" />
      <circle cx="10" cy="10" r="1.2" />
      <circle cx="16" cy="10" r="1.2" />
    </svg>
  )
}


function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}


function EyeOffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 3l18 18" />
      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
      <path d="M9.9 4.3A10.8 10.8 0 0 1 12 4c5 0 8.5 4 9.5 6a11.5 11.5 0 0 1-4.1 4.3" />
      <path d="M6.2 6.2C4.3 7.5 3.1 9.2 2.5 10c1 2 4.5 6 9.5 6 1 0 1.9-.2 2.8-.5" />
    </svg>
  )
}


function MenuIcon({ type }) {
  if (type === 'admin') {
    return (
      <svg
        viewBox="0 0 20 20"
        className="size-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="7" cy="7" r="2.5" />
        <path d="M2.8 16c.4-2.4 1.8-3.8 4.2-3.8s3.8 1.4 4.2 3.8" />
        <path d="M13 6h4" />
        <path d="M15 4v4" />
      </svg>
    )
  }

  if (type === 'clear') {
    return (
      <svg
        viewBox="0 0 20 20"
        className="size-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 4h10" />
        <path d="M7 4v11" />
        <path d="M13 4v11" />
        <path d="M4 15h12" />
      </svg>
    )
  }

  if (type === 'remove') {
    return (
      <svg
        viewBox="0 0 20 20"
        className="size-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      >
        <circle cx="5" cy="10" r="2" />
        <path d="M9 10h7" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 20 20"
      className="size-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h12" />
      <path d="M7 6V4h6v2" />
      <path d="M6 6l.6 10h6.8L14 6" />
      <path d="M8.5 9v4" />
      <path d="M11.5 9v4" />
    </svg>
  )
}


/* =========================================================
   SEAT CARD
   ========================================================= */

function MemberSeat({ member, showMenu = false }) {
  return (
    <div
      className="
        relative
        flex shrink-0 flex-col items-center
        rounded-[10px]
        border border-white/[0.09]
        bg-[#1c1c1c]
      "
      style={{
        width: ADMIN_SECTION.seatWidth,
        height: ADMIN_SECTION.seatHeight,
      }}
    >
      {/* Online indicator */}
      {member.online && (
        <span
          className="
            absolute left-[8px] top-[8px]
            size-[5px]
            rounded-full
            bg-[#54e39a]
          "
        />
      )}

      {/* More button */}
      {showMenu && (
        <button
          type="button"
          aria-label={`More options for ${member.name}`}
          className="
            absolute right-[7px] top-[7px]
            text-white/30
            transition-colors
            hover:text-white/70
          "
        >
          <MoreIcon />
        </button>
      )}

      {/* Avatar */}
      <div
        className="
          mt-[44px]
          flex size-[32px]
          items-center justify-center
          rounded-full
          bg-[#dedede]
          text-[9px]
          font-medium
          text-[#242424]
        "
      >
        {member.initials}
      </div>

      <p className="mt-[7px] whitespace-nowrap text-[10px] font-medium text-white/90">
        {member.name}
      </p>

      <p className="mt-[2px] text-[9px] text-white/35">
        {member.role}
      </p>
    </div>
  )
}


function FreeSeat() {
  return (
    <button
      type="button"
      className="
        flex shrink-0 flex-col
        items-center justify-center
        rounded-[10px]
        border border-dashed
        border-white/[0.14]
        bg-transparent
        text-white/35
        transition-all duration-200
        hover:border-white/25
        hover:bg-white/[0.015]
        hover:text-white/60
      "
      style={{
        width: ADMIN_SECTION.seatWidth,
        height: ADMIN_SECTION.seatHeight,
      }}
    >
      <PlusIcon />

      <span className="mt-[7px] text-[9px]">
        Free seat
      </span>
    </button>
  )
}


/* =========================================================
   CONTEXT MENU
   ========================================================= */

function MemberMenu() {
  return (
    <div
      className="
        absolute
        left-[127px]
        top-[27px]
        z-30
        w-[145px]
        overflow-hidden
        rounded-[8px]
        border border-white/[0.10]
        bg-[#191919]
        p-[5px]
        shadow-[0_18px_40px_rgba(0,0,0,0.45)]
      "
    >
      {MENU_ITEMS.map((item, index) => (
        <button
          key={item.label}
          type="button"
          className={`
            flex w-full items-center gap-[7px]
            rounded-[5px]
            px-[7px]
            py-[5px]
            text-left
            text-[9px]
            transition-colors
            ${
              item.highlighted
                ? 'bg-[#382324] text-[#ee6464]'
                : item.danger
                  ? 'text-[#e85d5d] hover:bg-[#321f20]'
                  : 'text-white/75 hover:bg-white/[0.05]'
            }
            ${index === 3 ? 'mt-[3px] border-t border-white/[0.08] pt-[8px]' : ''}
          `}
        >
          <MenuIcon type={item.icon} />

          <span>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  )
}


/* =========================================================
   DEMO CARDS
   ========================================================= */

function InviteCard() {
  return (
    <div>
      {/* Visual */}
      <div
        className="
          relative
          flex
          overflow-hidden
          rounded-[12px]
          border border-white/[0.08]
          bg-[#151515]
        "
        style={{
          width: '100%',
          height: '252px',
        }}
      >
        {/* top bar */}
        <div className="absolute inset-x-0 top-0 h-[51px] border-b border-white/[0.07]" />

        {/* Seats */}
        <div className="absolute left-0 top-[51px] flex">
          <MemberSeat member={TEAM_MEMBERS[0]} />
          <FreeSeat />
        </div>
      </div>

      {/* Text */}
      <div className="mt-[13px] px-[3px]">
        <h3 className="text-[16px] font-medium text-white">
          Invite by email.
        </h3>

        <p className="mt-[8px] text-[11px] leading-[1.6] text-white/40">
          Assign admin or member; multiple admins allowed.
        </p>
      </div>
    </div>
  )
}


function OffboardingCard() {
  return (
    <div>
      {/* Visual */}
      <div
        className="
          relative
          overflow-visible
          rounded-[12px]
          border border-white/[0.08]
          bg-[#151515]
        "
        style={{
          width: '100%',
          height: '252px',
        }}
      >
        {/* top bar */}
        <div className="absolute inset-x-0 top-0 h-[51px] border-b border-white/[0.07]" />

        {/* Member */}
        <div className="absolute left-0 top-[51px]">
          <MemberSeat
            member={TEAM_MEMBERS[0]}
            showMenu
          />

          <MemberMenu />
        </div>

        {/* Free seat */}
        <div className="absolute left-[51%] top-[51px]">
          <FreeSeat />
        </div>
      </div>

      {/* Text */}
      <div className="mt-[13px] px-[3px]">
        <h3 className="text-[16px] font-medium text-white">
          Offboarding.
        </h3>

        <p className="mt-[8px] max-w-[385px] text-[11px] leading-[1.8] text-white/40">
          Remove someone and their access ends immediately, with their
          Unabyss context purged. No dormant account still holding
          company information.
        </p>
      </div>
    </div>
  )
}


/* =========================================================
   PRIVACY NOTICE
   ========================================================= */

function PrivacyNotice() {
  return (
    <div
      className="
        flex
        w-full
        items-center
        rounded-[15px]
        border
        border-[#e6b900]
        bg-[#211f1d]
        px-[25px]
      "
      style={{
        height: ADMIN_SECTION.noticeHeight,
      }}
    >
      <div
        className="
          flex size-[40px] shrink-0
          items-center justify-center
          rounded-full
          bg-[#403924]
          text-[#d8b45d]
        "
      >
        <EyeOffIcon />
      </div>

      <p
        className="
          ml-[20px]
          max-w-[680px]
          text-[14px]
          leading-[1.6]
          text-white/75
        "
      >
        What admins deliberately do not get is a window into a teammate’s
        context. There is no admin view of someone’s memory.
      </p>
    </div>
  )
}


/* =========================================================
   MAIN SECTION
   ========================================================= */

export default function TeamAdministrationSection() {
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
        if (!entry.isIntersecting) return

        setVisible(true)
        observer.unobserve(element)
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -70px 0px',
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
        py-[80px]
        sm:px-6
      "
    >
      {/* Very subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          size-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.008]
          blur-[100px]
        "
        aria-hidden="true"
      />

      <div
        className="relative mx-auto w-full"
        style={{
          width: ADMIN_SECTION.width,
          maxWidth: ADMIN_SECTION.maxWidth,
        }}
      >
        {/* =============================================
            HEADING
            ============================================= */}

        <div
          className={`
            mb-[18px]
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-5 opacity-0'
            }
          `}
        >
          <h2 className="text-[16px] font-medium text-white">
            Seats you control.
          </h2>

          <p className="mt-[7px] text-[11px] text-white/40">
            Buy the seats you need, add more when you hire.
          </p>
        </div>


        {/* =============================================
            TWO DEMO CARDS
            ============================================= */}

        <div
          className={`
            grid
            grid-cols-1
            gap-[24px]
            transition-all
            duration-800
            ease-[cubic-bezier(0.22,1,0.36,1)]
            sm:grid-cols-2
            ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }
          `}
          style={{
            transitionDelay: visible ? '100ms' : '0ms',
          }}
        >
          <InviteCard />
          <OffboardingCard />
        </div>


        {/* =============================================
            PRIVACY NOTICE
            ============================================= */}

        <div
          className={`
            mt-[27px]
            transition-all
            duration-800
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              visible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }
          `}
          style={{
            transitionDelay: visible ? '220ms' : '0ms',
          }}
        >
          <PrivacyNotice />
        </div>
      </div>
    </section>
  )
}