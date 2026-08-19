const LAYOUT = {
  // Overall section
  sectionPaddingY: 72,
  containerMaxWidth: 1120,

  // Header
  headerBottomGap: 44,

  // Feature card
  featureCardMinHeight: 270,
  featureCardPaddingX: 42,
  featureCardPaddingY: 36,
  featureCardRadius: 24,
  featureColumnGap: 48,
  featureRowGap: 22,

  // Founders card
  foundersCardMinHeight: 220,
  foundersCardPaddingX: 40,
  foundersCardPaddingY: 34,
  foundersCardRadius: 24,
  foundersGap: 40,

  // Founder avatars
  avatarSize: 62,
  avatarOverlap: 10,

  // Mobile
  mobilePaddingX: 20,
  mobileFeaturePaddingX: 24,
  mobileFeaturePaddingY: 28,
  mobileFoundersPaddingX: 24,
  mobileFoundersPaddingY: 28,
}

const CONTENT = {
  eyebrow: 'HOW YOU WORK',
  heading: 'Built for how founders actually work',

  features: [
    'Connect once - every AI tool you use pulls the full company picture on demand.',
    'Works across the tools you already use: Claude, ChatGPT, and more.',
    'Stays current automatically from your real sources - no docs to update, no context to re-paste.',
    'Covers everything - identity, company, conversations, relationships, projects, strategy.',
    'Granular, per-app permissions - you decide what each tool can see.',
    'Export everything as Markdown anytime. No lock-in.',
  ],

  founders: {
    eyebrow: 'BY FOUNDERS',
    heading: 'Built for founders, by founders',
    body: 'We run Unabyss on Unabyss. Every investor update, hiring loop, and pricing call at our own company goes through the same context layer we ship to you - so when it’s rough for founders, we feel it first.',
  },
}

// Replace these with your actual imported images.
const FOUNDERS = [
  {
    name: 'Founder 1',
    image: "https://unabyss.com/_app/immutable/assets/marcin-photo-200.BKM3whGQ.jpg",
  },
  {
    name: 'Founder 2',
    image: "https://unabyss.com/_app/immutable/assets/filip-photo-200.CpufcAev.jpg",
  },
  {
    name: 'Founder 3',
    image: "https://unabyss.com/_app/immutable/assets/stas-photo-200.CHU4kqtL.jpg",
  },
  {
    name: 'Founder 4',
    image: "https://unabyss.com/_app/immutable/assets/filip-photo-200.CpufcAev.jpg",
  },
]

function FeatureItem({ children }) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="mt-[3px] shrink-0 text-[18px] leading-none text-white"
        aria-hidden="true"
      >
        ✓
      </span>

      <p className="text-[15px] leading-[1.65] text-white/65 sm:text-[16px]">
        {children}
      </p>
    </div>
  )
}

function FoundersAvatars() {
  return (
    <div className="flex shrink-0 items-center">
      {FOUNDERS.map((founder, index) => (
        <div
          key={founder.name}
          className="relative overflow-hidden rounded-full border-[3px] border-[#151515] bg-white"
          style={{
            width: `clamp(48px, ${LAYOUT.avatarSize}px, ${LAYOUT.avatarSize}px)`,
            height: `clamp(48px, ${LAYOUT.avatarSize}px, ${LAYOUT.avatarSize}px)`,
            marginLeft:
              index === 0 ? 0 : `-${LAYOUT.avatarOverlap}px`,
            zIndex: FOUNDERS.length - index,
          }}
        >
          <img
            src={founder.image}
            alt={founder.name}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default function HowFoundersWork() {
  return (
    <section
      className="w-full bg-[#0d0d0d]"
      style={{
        paddingTop: `clamp(56px, 7vw, ${LAYOUT.sectionPaddingY}px)`,
        paddingBottom: `clamp(56px, 7vw, ${LAYOUT.sectionPaddingY}px)`,
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: `${LAYOUT.containerMaxWidth}px`,
          paddingLeft: `clamp(${LAYOUT.mobilePaddingX}px, 4vw, 0px)`,
          paddingRight: `clamp(${LAYOUT.mobilePaddingX}px, 4vw, 0px)`,
        }}
      >
        {/* Header */}
        <header
          className="text-center"
          style={{
            marginBottom: `clamp(32px, 4vw, ${LAYOUT.headerBottomGap}px)`,
          }}
        >
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.38em] text-white/35 sm:text-[11px]">
            {CONTENT.eyebrow}
          </p>

          <h2 className="mx-auto max-w-4xl text-[34px] font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-[42px] md:text-[46px] lg:text-[48px]">
            {CONTENT.heading}
          </h2>
        </header>

        {/* Feature card */}
        <div
          className="w-full border bg-[#202020]"
          style={{
            minHeight: `${LAYOUT.featureCardMinHeight}px`,
            padding: `${LAYOUT.featureCardPaddingY}px ${LAYOUT.featureCardPaddingX}px`,
            borderColor: '#F5B800',
            borderWidth: '2px',
            borderRadius: `${LAYOUT.featureCardRadius}px`,
          }}
        >
          <div
            className="grid md:grid-cols-2"
            style={{
              columnGap: `clamp(32px, 5vw, ${LAYOUT.featureColumnGap}px)`,
              rowGap: `${LAYOUT.featureRowGap}px`,
            }}
          >
            {CONTENT.features.map((feature, index) => (
              <FeatureItem key={index}>
                {feature}
              </FeatureItem>
            ))}
          </div>
        </div>

        {/* Founders card */}
        <div
          className="mt-5 w-full border border-white/[0.07] bg-[#151515]"
          style={{
            minHeight: `${LAYOUT.foundersCardMinHeight}px`,
            padding: `${LAYOUT.foundersCardPaddingY}px ${LAYOUT.foundersCardPaddingX}px`,
            borderRadius: `${LAYOUT.foundersCardRadius}px`,
          }}
        >
          <div
            className="flex items-center"
            style={{
              gap: `clamp(24px, 4vw, ${LAYOUT.foundersGap}px)`,
            }}
          >
            {/* Avatars */}
            <div className="hidden sm:block">
              <FoundersAvatars />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.38em] text-white/35 sm:text-[11px]">
                {CONTENT.founders.eyebrow}
              </p>

              <h3 className="mb-3 text-xl font-bold tracking-[-0.02em] text-white sm:text-[21px]">
                {CONTENT.founders.heading}
              </h3>

              <p className="max-w-3xl text-sm leading-[1.75] text-white/55 sm:text-[16px]">
                {CONTENT.founders.body}
              </p>
            </div>
          </div>

          {/* Mobile avatars */}
          <div className="mt-6 sm:hidden">
            <FoundersAvatars />
          </div>
        </div>
      </div>
    </section>
  )
}