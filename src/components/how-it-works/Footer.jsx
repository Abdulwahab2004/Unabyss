import Spotlight from '../SpotLightContainer'


const SOCIALS = [
  { name: 'X', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Instagram', href: '#' },
]


const PRODUCT_LINKS = [
  { label: 'How it works', href: '#' },
  { label: 'Connect to Claude', href: '#' },
  { label: 'Connect to ChatGPT', href: '#' },
  { label: 'Teams', href: '#' },
  { label: 'Try now', href: '#' },
  { label: 'Log in', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Book a call', href: '#' },
  { label: 'Integrations', href: '#' },
  { label: 'Changelog', href: '#' },
  { label: 'Legacy', href: '#' },
]


const COMPARE_LINKS = [
  { label: 'vs. AI memory', href: '#' },
  { label: 'vs. Context files', href: '#' },
  { label: 'vs. Build your own', href: '#' },
]


const USE_CASE_LINKS = [
  { label: 'Founders', href: '#' },
  { label: 'Builders', href: '#' },
  { label: 'Agencies', href: '#' },
  { label: 'GTM', href: '#' },
]


const RESOURCE_LINKS = [
  { label: 'Unabyss Skills', href: '#' },
  { label: 'Context vs memory', href: '#' },
  { label: 'Global instructions', href: '#' },
  { label: 'Referral program', href: '#' },
  { label: 'MCP docs', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Jobs', href: '#' },
]


const LEGAL_LINKS = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Security', href: '#' },
]


const COMPLIANCE_BADGES = ['AICPA_SOC', 'GDPR']

const VERSION_TAG = 'Unabyss-1.15.1 Karamba'

// Background art behind the whole footer, layered under the dark gradient.
const FOOTER_BACKGROUND_IMAGE =
  'https://unabyss.com/_app/immutable/assets/app-background.BBR7qSBe.webp'


/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function toRoman(num) {
  const table = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]

  let n = num
  let out = ''

  for (const [value, symbol] of table) {
    while (n >= value) {
      out += symbol
      n -= value
    }
  }

  return out
}


/* -------------------------------------------------------------------------- */
/* Logo                                                                       */
/* -------------------------------------------------------------------------- */

function LogoGlyph() {
  const lit = new Set([5, 6, 9, 10])

  return (
    <div
      className="grid grid-cols-4 gap-[3px] shrink-0"
      aria-hidden="true"
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={i}
          className={`w-1 h-1 sm:w-[5px] sm:h-[5px] rounded-full ${
            lit.has(i) ? 'bg-white' : 'bg-white/35'
          }`}
        />
      ))}
    </div>
  )
}


/* -------------------------------------------------------------------------- */
/* Social icons                                                               */
/* -------------------------------------------------------------------------- */

const SOCIAL_ICON_PATHS = {
  X: (
    <path
      d="M4 4l16 16M20 4L4 20"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  ),

  LinkedIn: (
    <>
      <rect x="3" y="9" width="4" height="12" />
      <circle cx="5" cy="4.5" r="2.2" />
      <path d="M11 21v-7c0-2.5 1.8-4 4-4s4 1.5 4 4v7h-4v-6.5c0-.9-.6-1.5-1.5-1.5s-1.5.6-1.5 1.5V21z" />
    </>
  ),

  Instagram: (
    <>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        fill="none"
        strokeWidth="1.8"
      />
      <circle cx="17.2" cy="6.8" r="1.1" />
    </>
  ),
}


function SocialIcon({ name, href }) {
  return (
    <a
      href={href}
      aria-label={name}
      className="
        flex items-center justify-center
        w-9 h-9 sm:w-8 sm:h-8
        rounded-lg
        border border-white/10
        bg-white/[0.03]
        text-white/50
        hover:text-white
        hover:border-white/25
        hover:bg-white/[0.06]
        transition-all duration-200
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="currentColor"
        stroke="currentColor"
        aria-hidden="true"
      >
        {SOCIAL_ICON_PATHS[name]}
      </svg>
    </a>
  )
}


/* -------------------------------------------------------------------------- */
/* Footer column                                                             */
/* -------------------------------------------------------------------------- */

function FooterColumn({ heading, links }) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-widest text-white/35 mb-4">
        {heading}
      </p>

      <ul className="flex flex-col gap-2.5 sm:gap-3">
        {links.map((link) => (
          <li key={link.label} className="min-w-0">
            <a
              href={link.href}
              className="
                block
                text-[13px] sm:text-sm
                leading-5
                text-white/65
                hover:text-white
                transition-colors
                break-words
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}


/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function LockIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}


function StarIcon({ className = 'w-2 h-2' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 1.5l2.7 6.6 7.1.6-5.4 4.6 1.7 6.9L12 16.6l-6.1 3.6 1.7-6.9L2.2 8.7l7.1-.6z" />
    </svg>
  )
}


/* -------------------------------------------------------------------------- */
/* Compliance badges                                                          */
/* -------------------------------------------------------------------------- */

function StarRing({ count = 10, radius = 34 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (360 / count) * i

        return (
          <span
            key={i}
            className="absolute top-1/2 left-1/2 text-white/45"
            style={{
              transform: `
                rotate(${angle}deg)
                translateY(-${radius}px)
                rotate(${-angle}deg)
              `,
            }}
          >
            <StarIcon />
          </span>
        )
      })}
    </>
  )
}


function AicpaSocBadge() {
  return (
    <div
      className="
        w-14 h-14
        sm:w-16 sm:h-16
        md:w-[4.5rem] md:h-[4.5rem]
        rounded-full
        border-2 border-white/15
        flex items-center justify-center
        shrink-0
      "
      title="AICPA SOC"
    >
      <div
        className="
          w-[85%] h-[85%]
          rounded-full
          border border-white/20
          flex flex-col
          items-center
          justify-center
          gap-0.5
        "
      >
        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-wide text-white/55">
          AICPA
        </span>

        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-wide text-white/55">
          SOC
        </span>
      </div>
    </div>
  )
}


function GdprBadge() {
  return (
    <div
      className="
        relative
        w-14 h-14
        sm:w-16 sm:h-16
        md:w-[4.5rem] md:h-[4.5rem]
        flex items-center justify-center
        shrink-0
      "
      title="GDPR"
    >
      <StarRing count={10} radius={26} />

      <div className="flex flex-col items-center gap-0.5 text-white/55">
        <LockIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />

        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-wide">
          GDPR
        </span>
      </div>
    </div>
  )
}


function ComplianceBadge({ type }) {
  return type === 'GDPR' ? <GdprBadge /> : <AicpaSocBadge />
}


/* -------------------------------------------------------------------------- */
/* Status                                                                     */
/* -------------------------------------------------------------------------- */

function StatusPill() {
  return (
    <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/90">
      <span className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 24 24"
          className="w-2.5 h-2.5 text-emerald-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>

      <span>All services are online</span>
    </div>
  )
}


/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Background image — anchored to the bottom so the art sits behind
          the copyright strip, matching the reference */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url('${FOOTER_BACKGROUND_IMAGE}')` }}
        aria-hidden="true"
      />

      {/* Fade mask: solid black behind the card, fading out near the
          bottom so the background art only glows through above the
          copyright line instead of showing through the card too */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #000 0%, #000 78%, rgba(0,0,0,0.15) 100%)',
        }}
        aria-hidden="true"
      />

      <div
        className="
          relative
          w-full
          px-4
          xs:px-5
          sm:px-6
          md:px-8
          lg:px-10
          py-10
          sm:py-16
          lg:py-24
        "
      >
        <Spotlight
          className="
            w-full
            max-w-6xl
            mx-auto
            rounded-2xl
            sm:rounded-3xl
            bg-white/[0.035]
            border border-white/5
            px-5
            py-8
            sm:px-8
            sm:py-10
            md:px-10
            md:py-12
            lg:px-14
            lg:py-12
          "
        >
          {/* Main grid */}
          <div
            className="
              grid
              grid-cols-1
              xs:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-[1.3fr_1fr_1fr_1fr]
              gap-x-6
              gap-y-10
              sm:gap-x-8
              sm:gap-y-12
              lg:gap-8
            "
          >
            {/* ---------------------------------------------------------------- */}
            {/* Brand                                                            */}
            {/* ---------------------------------------------------------------- */}

            <div
              className="
                xs:col-span-2
                md:col-span-3
                lg:col-span-1
                min-w-0
              "
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <LogoGlyph />

                <span className="text-sm font-semibold tracking-[0.22em] sm:tracking-[0.25em] text-white">
                  UNABYSS
                </span>
              </div>

              {/* Description */}
              <p
                className="
                  text-[13px]
                  sm:text-sm
                  text-white/50
                  leading-relaxed
                  max-w-md
                  lg:max-w-xs
                  mb-5
                  sm:mb-6
                "
              >
                The universal context layer for AI tools. Your data. Your
                rules. You decide who sees what. Structured once. Shared on
                your terms.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-2 mb-7 sm:mb-10">
                {SOCIALS.map((social) => (
                  <SocialIcon
                    key={social.name}
                    {...social}
                  />
                ))}
              </div>

              {/* Compliance */}
              <div
                className="
                  inline-flex
                  max-w-full
                  items-center
                  gap-2
                  sm:gap-3
                  border
                  border-dashed
                  border-white/15
                  rounded-xl
                  px-3
                  py-2.5
                  sm:px-4
                  sm:py-3
                "
              >
                {COMPLIANCE_BADGES.map((type) => (
                  <ComplianceBadge
                    key={type}
                    type={type}
                  />
                ))}
              </div>

              {/* Version */}
              <p className="text-[9px] sm:text-[11px] text-white/30 font-mono tracking-wide mt-3 break-all">
                {VERSION_TAG}
              </p>
            </div>


            {/* ---------------------------------------------------------------- */}
            {/* Product                                                          */}
            {/* ---------------------------------------------------------------- */}

            <FooterColumn
              heading="Product"
              links={PRODUCT_LINKS}
            />


            {/* ---------------------------------------------------------------- */}
            {/* Compare + Use Cases                                               */}
            {/* ---------------------------------------------------------------- */}

            <div className="flex flex-col gap-8 sm:gap-10">
              <FooterColumn
                heading="Compare"
                links={COMPARE_LINKS}
              />

              <FooterColumn
                heading="Use cases"
                links={USE_CASE_LINKS}
              />
            </div>


            {/* ---------------------------------------------------------------- */}
            {/* Resources + Legal                                                */}
            {/* ---------------------------------------------------------------- */}

            <div className="flex flex-col gap-8 sm:gap-10">
              <FooterColumn
                heading="Resources"
                links={RESOURCE_LINKS}
              />

              <FooterColumn
                heading="Legal"
                links={LEGAL_LINKS}
              />
            </div>
          </div>


          {/* ------------------------------------------------------------------ */}
          {/* Status                                                             */}
          {/* ------------------------------------------------------------------ */}

          <div
            className="
              mt-10
              sm:mt-12
              lg:mt-14
              pt-5
              sm:pt-0
              border-t
              sm:border-t-0
              border-white/5
              flex
              justify-start
              lg:justify-end
            "
          >
            <StatusPill />
          </div>
        </Spotlight>


        {/* Copyright */}
        <p
          className="
            text-center
            text-[9px]
            sm:text-xs
            text-white/25
            font-mono
            tracking-[0.18em]
            sm:tracking-widest
            mt-7
            sm:mt-10
            px-4
          "
        >
          © {toRoman(year)} Unabyss. All rights reserved.
        </p>
      </div>
    </footer>
  )
}