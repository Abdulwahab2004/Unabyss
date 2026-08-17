import { useRef, useState, useEffect } from 'react'
import {
  ArrowUpRight,
  Volume2,
  Plus,
  Globe,
  SlidersHorizontal,
  Copy,
  Maximize2,
} from 'lucide-react'


const VIDEO_URL = "https://unabyss.com/_app/immutable/assets/founders-drafting-the-investor-update.CQpd4ooo.webm"

/*
|--------------------------------------------------------------------------
| USE CASES
|--------------------------------------------------------------------------
| Add your SVG logo URL inside logoUrl.
|
| Example:
| logoUrl: 'https://cdn.simpleicons.org/github'
|
| Or:
| logoUrl: 'https://your-domain.com/logos/github.svg'
|--------------------------------------------------------------------------
*/
const USE_CASE_CARDS = [
  {
    id: 'builders',
    title: 'Builders',
    desc: 'Your agents code with the full picture - past decisions, conventions, and the state of every repo.',
    tools: [
      {
        name: 'cube',
        logoUrl: 'https://your-domain.com/logos/cube.svg',
      },
      {
        name: 'robot',
        logoUrl: 'https://your-domain.com/logos/robot.svg',
      },
      {
        name: 'github',
        logoUrl: 'https://cdn.simpleicons.org/github',
      },
      {
        name: 'obsidian',
        logoUrl: 'https://cdn.simpleicons.org/obsidian',
      },
    ],
  },

  {
    id: 'founders',
    title: 'Founders',
    desc: 'Every AI you use stays in the loop on your company - strategy, customers, and what shipped.',
    tools: [
      {
        name: 'unabyss',
        logoUrl: 'https://your-domain.com/logos/unabyss.svg',
      },
      {
        name: 'chatgpt',
        logoUrl: 'https://cdn.simpleicons.org/openai',
      },
      {
        name: 'slack',
        logoUrl: 'https://cdn.simpleicons.org/slack',
      },
      {
        name: 'notion',
        logoUrl: 'https://cdn.simpleicons.org/notion',
      },
    ],
  },

  {
    id: 'agencies',
    title: 'Agencies',
    desc: "Each client's context stays cleanly separated, so every answer is grounded in the right account.",
    tools: [
      {
        name: 'notion',
        logoUrl: 'https://cdn.simpleicons.org/notion',
      },
      {
        name: 'linear',
        logoUrl: 'https://cdn.simpleicons.org/linear',
      },
      {
        name: 'drive',
        logoUrl: 'https://cdn.simpleicons.org/googledrive',
      },
      {
        name: 'gmail',
        logoUrl: 'https://cdn.simpleicons.org/gmail',
      },
    ],
  },

  {
    id: 'gtm',
    title: 'GTM',
    desc: 'Pipeline, accounts, and call notes unified, so outreach and follow-ups write themselves.',
    tools: [
      {
        name: 'hubspot',
        logoUrl: 'https://cdn.simpleicons.org/hubspot',
      },
      {
        name: 'pipedrive',
        logoUrl: 'https://your-domain.com/logos/pipedrive.svg',
      },
      {
        name: 'linkedin',
        logoUrl: 'https://cdn.simpleicons.org/linkedin',
      },
      {
        name: 'gmail',
        logoUrl: 'https://cdn.simpleicons.org/gmail',
      },
    ],
  },
]

/*
|--------------------------------------------------------------------------
| TOOL ICON
|--------------------------------------------------------------------------
*/
function ToolIcon({ tool }) {
  return (
    <div
      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden"
      aria-label={tool.name}
      title={tool.name}
    >
      {tool.logoUrl ? (
        <img
          src={tool.logoUrl}
          alt=""
          loading="lazy"
          className="w-5 h-5 object-contain"
        />
      ) : (
        <span
          className="w-4 h-4 rounded-full bg-white/15"
          aria-hidden="true"
        />
      )}
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| USE CASE CARD
|--------------------------------------------------------------------------
*/
function UseCaseCard({ item }) {
  return (
    <div className="bg-badge border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold">{item.title}</h3>

        <a
          href={`/unabyss-for-${item.id}`}
          aria-label={`See how ${item.title} use Unabyss`}
          className="text-white/30 hover:text-white transition-colors"
        >
          <ArrowUpRight size={18} />
        </a>
      </div>

      <p className="text-sm text-white/50 leading-relaxed mb-6">
        {item.desc}
      </p>

      <div className="flex gap-2 mt-auto">
        {item.tools.map((tool) => (
          <ToolIcon
            key={`${item.id}-${tool.name}`}
            tool={tool}
          />
        ))}
      </div>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| DEMO VIDEO CARD
|--------------------------------------------------------------------------
*/
function DemoVideoCard() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    video.muted = muted

    video.play().catch(() => {})
  }, [muted])

  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 h-full min-h-[420px]">
      {/* Ambient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(120deg, #d94f4f 0%, #e8a13c 25%, #4fae8a 50%, #3f7fd1 75%, #7a4fd1 100%)',
          opacity: 0.5,
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />

      {/* Recording indicator */}
      <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        0:00
      </div>

      {/* Expand button */}
      <button
        type="button"
        aria-label="Expand"
        className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center hover:bg-black/80 transition-colors"
      >
        <Maximize2 size={14} />
      </button>

      {/* Chat mockup */}
      <div className="relative z-10 px-5 pt-16 pb-5 h-full flex flex-col">
        <div className="bg-[#1a1a1f]/95 backdrop-blur border border-white/10 rounded-2xl overflow-hidden flex-1 flex flex-col">

          {/* Chat header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />

            <span className="ml-3 text-sm text-white/70 font-medium">
              ChatGPT
            </span>

            <span className="text-white/20">›</span>

            <span className="text-sm text-white/40">
              Investor update newsletter
            </span>

            <div className="ml-auto flex items-center gap-3 text-white/30">
              <ArrowUpRight size={14} />
              <Copy size={14} />
            </div>
          </div>

          {/* Chat content */}
          <div className="p-5 space-y-4 text-sm text-white/70 leading-relaxed flex-1 overflow-y-auto scrollbar-hide">

            <p>
              $8M led by Apex Growth Partners, at roughly 4x prior valuation.
              Cash position:{' '}
              <span className="font-semibold text-white">
                $8.7M.
              </span>
            </p>

            <div>
              <p className="font-semibold text-white mb-2">
                Customer wins
              </p>

              <ul className="space-y-1.5 list-none">
                <li>
                  <span className="font-semibold text-white">
                    CloudScale - $85K/yr
                  </span>{' '}
                  - largest deal to date.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    BrightPath Staffing - $36K/yr
                  </span>{' '}
                  signed in June.
                </li>

                <li>
                  Earlier closes:{' '}
                  <span className="font-semibold text-white">
                    Momentum Labs ($24K/yr)
                  </span>{' '}
                  and{' '}
                  <span className="font-semibold text-white">
                    DataDriven Inc ($18K/yr).
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white mb-2">
                Product milestones
              </p>

              <ul className="space-y-1.5 list-none">
                <li>
                  <span className="font-semibold text-white">
                    Greenhouse ATS integration
                  </span>{' '}
                  live in production with CloudScale.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Scoring Model v2
                  </span>{' '}
                  deployed to all customers - +14% F1 improvement.
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Bulk import
                  </span>{' '}
                  now handles up to 500 candidates per run.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white mb-2">
                Team
              </p>

              <p>
                <span className="font-semibold text-white">
                  David Park
                </span>{' '}
                accepted his offer and starts July 14.
              </p>
            </div>
          </div>

          {/* Chat input */}
          <div className="px-5 pb-4 shrink-0">
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <p className="text-sm text-white/30 mb-2">
                Ask anything
              </p>

              <div className="flex items-center justify-between text-white/30">
                <div className="flex items-center gap-3">
                  <Plus size={16} />
                  <Globe size={16} />
                  <SlidersHorizontal size={16} />

                  <span className="text-xs">
                    Auto
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-white/40">
                    🎤
                  </span>

                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                    <span className="w-2.5 h-2.5 bg-black rounded-full" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
        |--------------------------------------------------------------------------
        | TALKING HEAD VIDEO
        |--------------------------------------------------------------------------
        | Change VIDEO_URL at the top of this file.
        |
        | Example:
        | const VIDEO_URL = 'https://example.com/founder.mp4'
        |--------------------------------------------------------------------------
        */}
        <div className="absolute -bottom-2 left-2 z-20">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-black bg-black">
            <video
              ref={videoRef}
              src={VIDEO_URL}
              muted={muted}
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-between px-5">

        {/* Sound button */}
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="ml-24 sm:ml-28 flex items-center gap-1.5 text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-white/90 transition-colors"
        >
          <Volume2 size={12} />

          {muted ? 'Tap for sound' : 'Mute'}
        </button>

        {/* App badge */}
        <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs">
          Unabyss in{' '}
          <span className="font-semibold">
            ChatGPT
          </span>
        </span>
      </div>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/
export default function BuiltForHowYouWork() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">

      {/* Section heading */}
      <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-3">
        Use cases
      </p>

      <h2 className="text-center text-3xl sm:text-5xl font-bold tracking-tight mb-14">
        Built for how you work
      </h2>

      {/* Top section */}
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4 mb-4">

        <DemoVideoCard />

        <div className="grid gap-4">
          <UseCaseCard item={USE_CASE_CARDS[0]} />
          <UseCaseCard item={USE_CASE_CARDS[1]} />
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid sm:grid-cols-2 gap-4">
        <UseCaseCard item={USE_CASE_CARDS[2]} />
        <UseCaseCard item={USE_CASE_CARDS[3]} />
      </div>
    </section>
  )
}