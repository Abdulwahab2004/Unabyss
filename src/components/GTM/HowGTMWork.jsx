const LAYOUT = {
  // Overall section
  sectionPaddingY: 72,
  containerMaxWidth: 900,

  // Header
  headerBottomGap: 44,

  // Feature card
  featureCardMinHeight: 270,
  featureCardPaddingX: 42,
  featureCardPaddingY: 27,
  featureCardRadius: 24,
  featureColumnGap: 48,
  featureRowGap: 22,

  // Mobile
  mobilePaddingX: 20,
  mobileFeaturePaddingX: 24,
  mobileFeaturePaddingY: 28,
}

const CONTENT = {
  eyebrow: 'HOW YOU WORK',

  heading: 'Built for GTM teams actually work',

  features: [
    "Connect once - every AI tool pulls the live GTM picture on demand.",
    "Works across the tools you already use: Claude, ChatGPT, and more - plus Make, n8n, and Zapier.",
   "Stays current automatically from your real sources - campaigns, CRM, docs, calls, Slack.",
    "Covers the full picture - brand, product, accounts, conversations, what changed this week.",
   "Granular, per-app permissions - you decide what each tool can see.",
    "Export everything as Markdown anytime. No lock-in.",
    
  ],
}

function FeatureItem({ children }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-[3px] shrink-0 text-[18px] leading-none text-white"
        aria-hidden="true"
      >
        ✓
      </span>

      <p className="text-[15px] leading-[1.65] text-white/65 sm:text-[13px]">
        {children}
      </p>
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
            padding: `clamp(
              ${LAYOUT.mobileFeaturePaddingY}px,
              4vw,
              ${LAYOUT.featureCardPaddingY}px
            ) clamp(
              ${LAYOUT.mobileFeaturePaddingX}px,
              4vw,
              ${LAYOUT.featureCardPaddingX}px
            )`,
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
      </div>
    </section>
  )
}