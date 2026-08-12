import { useEffect, useRef, useState } from 'react'
import { Check, Plus, X } from 'lucide-react'


const PRICING_SECTION = {
  // Overall content width
  width: '1105px',
  maxWidth: 'calc(100vw - 32px)',

  // Vertical spacing
  paddingTop: '56px',
  paddingBottom: '100px',

  // Heading
  headingSize: '48px',

  // Pricing grid
  cardGap: '22px',

  // Left / right card widths are controlled by grid columns.
  // Screenshot is approximately 44% / 56%.
  leftColumn: '0.82fr',
  rightColumn: '1fr',

  // Card height
  pricingCardHeight: '408px',

  // Card radius
  cardRadius: '24px',

  // Card padding
  cardPadding: '36px',

  // CTA
  ctaHeight: '49px',

  // FAQ
  faqRadius: '18px',
}


/* =========================================================
   DATA
   ========================================================= */

const SEAT_FEATURES = [
  'Buy your seats, then invite - so your bill never surprises you.',
  'Add seats whenever you hire; remove a member and the seat frees up.',
  'Minimum of 3 seats.',
  'Monthly or annual, your choice at checkout.',
]


const FAQS = [
  {
    q: 'Is this a shared team knowledge base?',
    a: "No. We deliberately mirror your team's access structure. Team is one subscription, one invoice, and one set of admin controls over a group of people, but each person keeps their own context, within the access levels they already have.",
  },
  {
    q: 'Is there a way to share my context with my teammates?',
    a: "Yes. You securely share your MCP token with them. They would then need to configure their agent to use your context in some situations and their own in others.",
  },
  {
    q: "Can an admin read what's in a teammate's context?",
    a: "No. Admins manage seats, invites, roles, and billing. There is no admin view of a member's context and no way to export it to the company.",
  },
  {
    q: 'What happens when someone leaves?',
    a: 'An admin removes them, their access ends immediately, and their Unabyss context is purged. The seat frees up for the next hire. Nothing is left sitting in a dormant account.',
  },
  {
    q: 'How secure is Unabyss?',
    a: 'Your data stays yours. Everything is encrypted, read-only by design, never used to train AI models, and always under your control - you can disconnect integrations or permanently delete your data at any time. We are also going through SOC 2 Type II certification, and we are compliant with GDPR. Read the full details.',
  },
  {
    q: 'How do teammates join?',
     a:"An admin sends an invite by email and the teammate creates their Unabyss account from that invite. Invites are good for 7 days",
  },
  {
    q: 'Can someone keep a personal plan alongside Team?',
    a: "When Team activates, an existing personal Pro or Max subscription ends so there is no double billing, and the Team seat replaces it with equal or better access. You can, however, run two accounts on two different email addresses and split personal and team context that way.",
  },
]


/* =========================================================
   FAQ ITEM
   ========================================================= */

/* =========================================================
   FAQ ITEM
   ========================================================= */

/* =========================================================
   FAQ ITEM
   ========================================================= */

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="
        mb-[12px]
        overflow-hidden
        rounded-[18px]
        border
        border-white/[0.09]
        last:mb-0
        bg-[#171717]
      "
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`
          flex w-full items-center justify-between
          px-[24px] py-[20px]
          text-left
          transition-colors duration-200
          ${
            isOpen
              ? 'bg-[#1b1b1b]'
              : 'bg-[#171717] hover:bg-white/[0.015]'
          }
        `}
      >
        <span className="pr-6 text-[14px] font-medium text-white/90">
          {item.q}
        </span>

        <span
          className="
            flex shrink-0
            transition-transform
            duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
          style={{
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <Plus
            size={16}
            strokeWidth={1.5}
            className="text-white/40"
          />
        </span>
      </button>

      {/* Animated answer */}
      <div
        className="
          grid
          transition-[grid-template-rows,opacity]
          duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
        "
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="bg-[#1b1b1b] px-[24px] pb-[21px]">
            <p className="max-w-[850px] text-[13px] leading-[1.7] text-white/45">
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


/* =========================================================
   CHECK ITEM
   ========================================================= */

function SeatFeature({ children }) {
  return (
    <li className="flex items-start gap-[12px]">
      <span
        className="
          mt-[1px]
          flex size-[19px]
          shrink-0
          items-center justify-center
          rounded-full
          border border-white/[0.20]
          bg-white/[0.025]
        "
      >
        <Check
          size={11}
          strokeWidth={1.7}
          className="text-white/55"
        />
      </span>

      <span className="text-[15px] leading-[1.5] text-white/55">
        {children}
      </span>
    </li>
  )
}


/* =========================================================
   ARROW
   ========================================================= */

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-[15px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 15L15 5" />
      <path d="M8 5h7v7" />
    </svg>
  )
}


/* =========================================================
   PRICING CARD
   ========================================================= */

function PricingCard() {
  return (
    <div
      className="
        relative
        flex
        flex-col
        overflow-hidden
        border
        border-[#e4b800]
        bg-[#20201f]
      "
      style={{
        height: PRICING_SECTION.pricingCardHeight,
        borderRadius: PRICING_SECTION.cardRadius,
        padding: PRICING_SECTION.cardPadding,
      }}
    >
      {/* Price */}
      <div className="flex items-baseline gap-[7px]">
        <span
          className="
            text-[58px]
            font-semibold
            leading-none
            tracking-[-0.045em]
            text-white
          "
        >
          $29
        </span>

        <span className="text-[15px] text-white/40">
          /seat/mo
        </span>
      </div>


      {/* Annual */}
      <p className="mt-[7px] text-[14px] text-white/45">
        Or $25/seat/mo billed annually.
      </p>


      {/* Description */}
      <p
        className="
          mt-[26px]
          max-w-[410px]
          text-[15px]
          leading-[1.85]
          text-white/55
        "
      >
        Individually, this level of access is our Max plan at
        $89/mo. On Team, every seat gets the same unlimited
        agents, unlimited accounts, and unlimited usage for $29.
      </p>


      {/* CTA */}
      <div className="mt-auto">
        <a
          href="/register"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-[9px]
            rounded-full
            bg-white
            px-5
            text-[14px]
            font-semibold
            text-black
            transition-all
            duration-200
            hover:bg-white/90
            hover:scale-[1.005]
          "
          style={{
            height: PRICING_SECTION.ctaHeight,
          }}
        >
          <span>Start free</span>
          <ArrowUpRight />
        </a>


        {/* Existing customer */}
        <p className="mt-[15px] text-center text-[12px] text-white/35">
          Already on Pro, Max, or a trial?{' '}

          <a
            href="/teams/setup"
            className="
              text-white/70
              underline
              underline-offset-2
              transition-colors
              hover:text-white
            "
          >
            Set up your team
          </a>
        </p>
      </div>
    </div>
  )
}


/* =========================================================
   HOW SEATS WORK CARD
   ========================================================= */

function SeatsCard() {
  return (
    <div
      className="
        relative
        flex
        flex-col
        overflow-hidden
        border
        border-white/[0.075]
        bg-[#171717]
      "
      style={{
        height: PRICING_SECTION.pricingCardHeight,
        borderRadius: PRICING_SECTION.cardRadius,
        padding: PRICING_SECTION.cardPadding,
      }}
    >
      {/* Extremely subtle ambient glow from screenshot */}
      <div
        className="
          pointer-events-none
          absolute
          right-[50px]
          top-[15px]
          size-[210px]
          rounded-full
          bg-white/[0.012]
          blur-[60px]
        "
        aria-hidden="true"
      />

      <h3 className="relative text-[18px] font-semibold text-white/90">
        How seats work
      </h3>


      <ul className="relative mt-[22px] space-y-[17px]">
        {SEAT_FEATURES.map((feature) => (
          <SeatFeature key={feature}>
            {feature}
          </SeatFeature>
        ))}
      </ul>


      <p className="relative mt-auto text-[12px] text-white/30">
        Save up to 13% on annual billing. Every plan starts with a
        7-day free trial.
      </p>
    </div>
  )
}


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function PricingFAQ() {
  const sectionRef = useRef(null)

  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(0)


  /* =======================================================
     SCROLL REVEAL
     ======================================================= */

  useEffect(() => {
    const element = sectionRef.current

    if (!element) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setIsVisible(true)

        // Only animate once.
        observer.unobserve(element)
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px',
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
        bg-[#0f0f0f]
        px-4
        sm:px-6
      "
      style={{
        paddingTop: PRICING_SECTION.paddingTop,
        paddingBottom: PRICING_SECTION.paddingBottom,
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          width: PRICING_SECTION.width,
          maxWidth: PRICING_SECTION.maxWidth,
        }}
      >

        {/* =================================================
            PRICING HEADER
            ================================================= */}

        <div
          className={`
            text-center
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }
          `}
        >
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.31em]
              text-white/35
            "
          >
            Pricing
          </p>


          <h2
            className="
              mx-auto
              mt-[24px]
              max-w-[680px]
              text-[42px]
              font-semibold
              leading-[1.08]
              tracking-[-0.035em]
              text-white
            "
          >
            One price per seat.
            <br />
            Max-plan access behind it.
          </h2>
        </div>


        {/* =================================================
            PRICING CARDS
            ================================================= */}

        <div
          className={`
            mt-[47px]
            grid
            grid-cols-1
            lg:grid-cols-[0.82fr_1fr]
            transition-all
            duration-800
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }
          `}
          style={{
            gap: PRICING_SECTION.cardGap,
            transitionDelay: isVisible ? '120ms' : '0ms',
          }}
        >
          <PricingCard />
          <SeatsCard />
        </div>


        {/* =================================================
            FAQ
            ================================================= */}

        <div
          className={`
            mt-[120px]
            transition-all
            duration-800
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }
          `}
          style={{
            transitionDelay: isVisible ? '260ms' : '0ms',
          }}
        >
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.31em] text-white/35">
            FAQ
          </p>

          <h2
            className="
              mt-[24px]
              text-center
              text-[40px]
              font-semibold
              leading-none
              tracking-[-0.03em]
              text-white
            "
          >
            Questions teams ask
          </h2>


         <div
  className="
    mx-auto
    mt-[48px]
    bg-transparent
  "
  style={{
    maxWidth: '900px',
  }}
>
            {FAQS.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(
                    openIndex === index
                      ? -1
                      : index
                  )
                }
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}