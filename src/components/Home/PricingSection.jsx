import { useEffect, useRef, useState } from 'react'
import { Check, ArrowUpRight } from 'lucide-react'
import LogoStriponly from "./LogoStriponly"
import fishplain from "../../assets/logos/fishplain.png"
import fishhover from "../../assets/logos/fishhover.png"
import whaleplain from "../../assets/logos/whaleplain.png"
import whalehover from "../../assets/logos/whalehover.png"
import fishesplain from "../../assets/logos/fishesplain.png"
import fisheshover from "../../assets/logos/fisheshover.png"
const PLANS = [
  {
    id: 'pro',
    name: 'Pro',
    desc: 'For individuals plugging AI into their daily work.',
    price: 13,
    originalPrice: 15,
    priceSuffix: '/mo',
    billedNote: 'billed annually',
    cta: 'Start 7-day free trial',
    ctaStyle: 'outline',
    subNote: 'No credit card required',
    image: fishplain,
    hoverImage: fishhover,
    features: [
      'Up to 3 connected agents via MCP',
      'Up to 20 connected accounts',
      'Premium usage tier',
      'No additional costs',
      'Free 7-day trial',
    ],
  },
  {
    id: 'max',
    name: 'Max',
    desc: 'For power users who live in AI all day.',
    price: 79,
    originalPrice: 89,
    priceSuffix: '/mo',
    billedNote: 'billed annually',
    cta: 'Start 7-day free trial',
    ctaStyle: 'filled',
    subNote: 'No credit card required',
    image: whaleplain,
    hoverImage: whalehover,
    badge: "On the Claude Max plan? This is the pick for you.",
    highlighted: true,
    features: [
      'Unlimited agents',
      'Unlimited connected accounts',
      'Multi-account support for Google apps',
      'Unlimited usage',
      'Early access to new features',
      'No additional costs',
      'Free 7-day trial',
    ],
  },
  {
    id: 'team',
    name: 'Team',
    desc: 'Everything in Max, for everyone on your team.',
    price: 39,
    originalPrice: 49,
    priceSuffix: '/seat/mo',
    billedNote: 'billed annually',
    cta: 'See the Team plan',
    ctaStyle: 'outline',
    image: fishesplain,
    hoverImage: fisheshover,
    showBookCall: true,
    features: [
      'Everything in Max, for every seat',
      'Shared team workspace',
      'Invite teammates by email',
      'Central seat and invoice management',
      'Minimum 3 seats',
    ],
  },
]

function BillingToggle({ annual, setAnnual }) {
  return (
    <div className="inline-flex items-center bg-badge border border-white/10 rounded-full p-1">
      <button
        onClick={() => setAnnual(false)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          !annual ? 'bg-white text-black' : 'text-white/60 hover:text-white'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setAnnual(true)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          annual ? 'bg-white text-black' : 'text-white/60 hover:text-white'
        }`}
      >
        Annual
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            annual ? 'bg-black/10 text-black' : 'bg-white/10 text-white/70'
          }`}
        >
          SAVE UP TO 20%
        </span>
      </button>
    </div>
  )
}

function PlanBadge({ badge }) {
  if (!badge) {
    return <div className="w-full h-11 bg-badge" aria-hidden="true" />
  }

  return (
    <div className="relative h-11">
      <div className="flex items-center gap-2 bg-gradient-to-r from-[#c1663f] to-[#b85a3a] px-5 h-full text-sm font-medium text-white rounded-t-3xl">
        <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='257'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20257'%3e%3cpath%20fill='%23fff'%20d='m50.228%20170.321%2050.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0%20125.796l.583-3.759%205.12-3.434%207.324.648%2016.202%201.101%2024.304%201.685%2017.629%201.037%2026.118%202.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758%207-7.713%209.397.649%202.398.648%209.527%207.323%2020.35%2015.75L94.817%2091.9l3.889%203.24%201.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42%200%2082.05%201.426l4.472%203.888%206.61%2015.101%2010.694%2023.786%2016.591%2032.34%204.861%209.592%202.592%208.879.973%202.722h1.685v-1.556l1.36-18.211%202.528-22.36%202.463-28.776.843-8.1%204.018-9.722%207.971-5.25%206.222%202.981%205.12%207.324-.713%204.73-3.046%2019.768-5.962%2030.98-3.889%2020.739h2.268l2.593-2.593%2010.499-13.934%2017.628-22.036%207.778-8.749%209.073-9.657%205.833-4.601h11.018l8.1%2012.055-3.628%2012.443-11.342%2014.388-9.398%2012.184-13.48%2018.147-8.426%2014.518.778%201.166%202.01-.194%2030.46-6.481%2016.462-2.982%2019.637-3.37%208.88%204.148.971%204.213-3.5%208.62-20.998%205.184-24.628%204.926-36.682%208.685-.454.324.519.648%2016.526%201.555%207.065.389h17.304l32.21%202.398%208.426%205.574%205.055%206.805-.843%205.184-12.962%206.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666%2011.406%2021.387%2019.314%2026.767%2024.887%201.36%206.157-3.434%204.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73%206.935%2025.017%2037.59%201.296%2011.536-1.814%203.76-6.481%202.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194%2077.448-3.37%203.953-7.778%202.981-6.48-4.925-3.436-7.972%203.435-15.749%204.148-20.544%203.37-16.333%203.046-20.285%201.815-6.74-.13-.454-1.49.194-15.295%2020.999-23.267%2031.433-18.406%2019.702-4.407%201.75-7.648-3.954.713-7.064%204.277-6.286%2025.47-32.405%2015.36-20.092%209.917-11.6-.065-1.686h-.583L44.07%20198.125l-12.055%201.555-5.185-4.86.648-7.972%202.463-2.593%2020.35-13.999-.064.065Z'/%3e%3c/svg%3e" alt="" srcset="" height={20} width={20}/>
        {badge}
      </div>

      <span
        className="absolute -bottom-0 left-0 w-4 h-4 bg-badge"
        style={{
          borderTopLeftRadius: '9999px',
          boxShadow: '-8px -8px 0 0 #b85a3a',
        }}
        aria-hidden="true"
      />
      <span
        className="absolute -bottom-0 right-0 w-4 h-4 bg-badge"
        style={{
          borderTopRightRadius: '9999px',
          boxShadow: '8px -8px 0 0 #c1663f',
        }}
        aria-hidden="true"
      />
    </div>
  )
}

// Crossfades from `image` to `hoverImage` on hover, pure CSS opacity transition.
// If hoverImage isn't provided, it just falls back to showing only `image` (no crash).
function PlanImage({ plan }) {
  return (
    <div className="group/img relative h-48 sm:h-56 bg-black overflow-hidden rounded-t-3xl">
      {plan.image && (
        <img
          src={plan.image}
          alt=""
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
            plan.hoverImage ? 'group-hover/img:opacity-0' : ''
          }`}
        />
      )}

      {plan.hoverImage && (
        <img
          src={plan.hoverImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover/img:opacity-100"
        />
      )}
    </div>
  )
}

function PlanCard({ plan }) {
  return (
    <div
      className={`flex flex-col rounded-3xl overflow-hidden border h-full ${
        plan.highlighted
          ? 'border-amber-400/50 shadow-[0_0_50px_-15px_rgba(251,191,36,0.4)]'
          : 'border-none'
      }`}
    >
      <PlanBadge badge={plan.badge} />
      <PlanImage plan={plan} />

      <div className="bg-badge flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
        <p className="text-sm text-white/50 mb-6">{plan.desc}</p>

        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-white/40 text-sm">{plan.priceSuffix}</span>
          <span className="text-white/25 text-sm line-through">${plan.originalPrice}</span>
        </div>
        <p className="text-xs text-white/30 mb-6">{plan.billedNote}</p>

        <a
          href="/register"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-full transition-colors mb-3 ${
            plan.ctaStyle === 'filled'
              ? 'bg-white text-black hover:bg-white/90'
              : 'bg-white/5 border border-white/15 text-white hover:bg-white/10'
          }`}
        >
          {plan.cta}
          <ArrowUpRight size={16} />
        </a>

        {plan.subNote && (
          <p className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 mb-6">
            <Check size={12} />
            {plan.subNote}
          </p>
        )}

        {plan.showBookCall && (
          <div className="flex items-center justify-center gap-2 mb-6 text-xs text-white/50">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-white/10 border-2 border-badge" />
              <div className="w-6 h-6 rounded-full bg-white/10 border-2 border-badge" />
            </div>
            Still unsure?{' '}
            <a href="/book-a-call" className="underline text-white/70 hover:text-white">
              Book a call
            </a>
          </div>
        )}

        <div className="border-t border-white/10 pt-5 mt-auto">
          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-white/70">
                <span
                  className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                    plan.highlighted ? 'bg-amber-400/20 text-amber-300' : 'bg-white/10 text-white/50'
                  }`}
                >
                  <Check size={10} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function ConnectInSeconds() {
  return (
    <div className="mt-24 max-w-3xl mx-auto text-center">
      <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
        Connect in seconds
      </p>

      <div className="bg-gradient-to-r from-[#c1663f] to-[#b85a3a] rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-left">
        <div className="flex items-center gap-4">
               <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='257'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20257'%3e%3cpath%20fill='%23fff'%20d='m50.228%20170.321%2050.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0%20125.796l.583-3.759%205.12-3.434%207.324.648%2016.202%201.101%2024.304%201.685%2017.629%201.037%2026.118%202.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758%207-7.713%209.397.649%202.398.648%209.527%207.323%2020.35%2015.75L94.817%2091.9l3.889%203.24%201.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42%200%2082.05%201.426l4.472%203.888%206.61%2015.101%2010.694%2023.786%2016.591%2032.34%204.861%209.592%202.592%208.879.973%202.722h1.685v-1.556l1.36-18.211%202.528-22.36%202.463-28.776.843-8.1%204.018-9.722%207.971-5.25%206.222%202.981%205.12%207.324-.713%204.73-3.046%2019.768-5.962%2030.98-3.889%2020.739h2.268l2.593-2.593%2010.499-13.934%2017.628-22.036%207.778-8.749%209.073-9.657%205.833-4.601h11.018l8.1%2012.055-3.628%2012.443-11.342%2014.388-9.398%2012.184-13.48%2018.147-8.426%2014.518.778%201.166%202.01-.194%2030.46-6.481%2016.462-2.982%2019.637-3.37%208.88%204.148.971%204.213-3.5%208.62-20.998%205.184-24.628%204.926-36.682%208.685-.454.324.519.648%2016.526%201.555%207.065.389h17.304l32.21%202.398%208.426%205.574%205.055%206.805-.843%205.184-12.962%206.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666%2011.406%2021.387%2019.314%2026.767%2024.887%201.36%206.157-3.434%204.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73%206.935%2025.017%2037.59%201.296%2011.536-1.814%203.76-6.481%202.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194%2077.448-3.37%203.953-7.778%202.981-6.48-4.925-3.436-7.972%203.435-15.749%204.148-20.544%203.37-16.333%203.046-20.285%201.815-6.74-.13-.454-1.49.194-15.295%2020.999-23.267%2031.433-18.406%2019.702-4.407%201.75-7.648-3.954.713-7.064%204.277-6.286%2025.47-32.405%2015.36-20.092%209.917-11.6-.065-1.686h-.583L44.07%20198.125l-12.055%201.555-5.185-4.86.648-7.972%202.463-2.593%2020.35-13.999-.064.065Z'/%3e%3c/svg%3e" alt="" srcset="" height={40} width={40}/>
   
          <div>
            <h3 className="font-bold text-white text-lg">Connect Claude to Unabyss</h3>
            <p className="text-sm text-white/85 mt-0.5">
              Finish signing up and onboarding right inside Claude
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7a3420] bg-white rounded-full px-3 py-1 mt-3">
              <Check size={12} />
              Official connector
            </span>
          </div>
        </div>
<a
        
          href="#"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 bg-white text-[#8a4527] font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors shrink-0 self-start sm:self-center whitespace-nowrap"
        >
          Connect
          <ArrowUpRight size={16} />
        </a>
      </div>

      <a
        href="#"
        className="block text-sm text-white/40 hover:text-white/70 transition-colors mt-6"
      >
        Connect to a different agent
      </a>
    </div>
  )
}

export default function PricingSection() {
  const [annual, setAnnual] = useState(true)

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto" id='pricing'>
      <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-3">
        Pricing
      </p>
      <h2 className="text-center text-3xl sm:text-5xl font-bold tracking-tight mb-4">
        Start free. Then pick your plan.
      </h2>
      <p className="text-center text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
        Every plan starts with a 7-day free trial. Scale up as you connect
        more agents and accounts.
      </p>

      <div className="flex justify-center mb-14">
        <BillingToggle annual={annual} setAnnual={setAnnual} />
      </div>

      <div className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory pb-4 lg:pb-0">
        {PLANS.map((plan) => (
          <div key={plan.id} className="min-w-[300px] sm:min-w-[340px] lg:min-w-0 snap-start">
            <PlanCard plan={plan} />
          </div>
        ))}
      </div>

      <LogoStriponly />
      <ConnectInSeconds />
    </section>
  )
}