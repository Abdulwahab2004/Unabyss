import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Volume2, Plus, Globe, SlidersHorizontal } from 'lucide-react'

const useCases = [
  {
    id: 'agencies',
    category: 'AGENCIES',
    title: 'Client weekly report',
    bgImage: "https://unabyss.com/_app/immutable/assets/blog-cover-22.Bm2TSN0k.webp",
    video: "https://unabyss.com/_app/immutable/assets/agencies-weekly-report-without-chasing-every-update.BKApf_hz.webm",
    app: 'ChatGPT',
    prompt: "Give me this week's client report - flag anything that needs their attention.",
    thinkingLines: [
      "I'll pull your context from Unabyss to ground this in the actual account activity.",
      'Finding tools',
      'Finding tools',
      'I need ticket status, delivery dates, and open blockers - not a generic summary.',
    ],
    query: {
      label: 'Agentic query',
      json: '{ "question": "What changed on this client account this week? Consider ticket status, delivery dates, open blockers, and anything overdue." }',
    },
    steps: [
      { label: 'Agentic query read', status: 'Finished pending' },
      { label: 'Agentic query read', status: 'Finished pending' },
      { label: 'Agentic query read', status: 'Finished completed' },
    ],
  },
  {
    id: 'gtm',
    category: 'GTM',
    title: 'Marketing report',
    bgImage: "https://unabyss.com/_app/immutable/assets/blog-cover-17.zTy_qbUQ.webp",
    video: "https://unabyss.com/_app/immutable/assets/founders-drafting-the-investor-update.CQpd4ooo.webm",
    app: 'ChatGPT',
    prompt: 'Give me a marketing report highlighting the most urgent issues and recommended actions.',
    thinkingLines: [
      "I'll pull your context from Unabyss to ground this in your actual marketing situation.",
      'Finding tools',
      'Finding tools',
      'I need funnel state, live tests, and team bandwidth - not a generic checklist.',
    ],
    query: {
      label: 'Agentic query',
      json: '{ "question":"What are the most urgent marketing actions right now? Consider growth targets, funnel state, paid acquisition, team availability, and fundraise timeline. Split what the CEO owns vs the team." }',
    },
    steps: [
      { label: 'Agentic query read', status: 'Finished pending' },
      { label: 'Agentic query read', status: 'Finished pending' },
      { label: 'Agentic query read', status: 'Finished completed' },
    ],
  },
  {
    id: 'founders',
    category: 'FOUNDERS',
    title: 'LinkedIn strategy',
    bgImage: "https://unabyss.com/_app/immutable/assets/blog-cover-28.DRN0RxB3.webp",
    video: "https://unabyss.com/_app/immutable/assets/builders-new-repo-scaffold.CY3S3Ak8.webm",
    app: 'ChatGPT',
    prompt: 'Draft a LinkedIn strategy for this month based on what we actually shipped.',
    thinkingLines: [
      "I'll pull your context from Unabyss to ground this in your real roadmap.",
      'Finding tools',
      'Finding tools',
      'I need shipped features and traction numbers - not generic content ideas.',
    ],
    query: {
      label: 'Agentic query',
      json: '{ "question": "What did we ship and what traction changed this month? Consider changelog, user growth, and any press mentions." }',
    },
    steps: [
      { label: 'Agentic query read', status: 'Finished pending' },
      { label: 'Agentic query read', status: 'Finished pending' },
      { label: 'Agentic query read', status: 'Finished completed' },
    ],
  },
  {
    id: 'builders',
    category: 'BUILDERS',
    title: 'Repo scaffold',
    bgImage: "https://unabyss.com/_app/immutable/assets/blog-cover-02.CDC1AScy.webp",
    video: "https://unabyss.com/_app/immutable/assets/agencies-weekly-report-without-chasing-every-update.BKApf_hz.webm",
    app: 'Cursor',
    prompt: 'Scaffold a new service following our existing conventions.',
    thinkingLines: [
      "I'll pull your context from Unabyss to match your team's actual patterns.",
      'Finding tools',
      'Finding tools',
      'I need your lint config, folder conventions, and existing services - not defaults.',
    ],
    query: {
      label: 'Agentic query',
      json: '{ "question": "What conventions do our existing services follow? Consider folder structure, lint rules, test setup, and naming patterns." }',
    },
    steps: [
      { label: 'Agentic query read', status: 'Finished pending' },
      { label: 'Agentic query read', status: 'Finished pending' },
      { label: 'Agentic query read', status: 'Finished completed' },
    ],
  },
    {
    id: 'builders',
    category: 'BUILDERS',
    title: 'Repo scaffold',
    bgImage: "https://unabyss.com/_app/immutable/assets/blog-cover-28.DRN0RxB3.webp",
    video: "https://unabyss.com/_app/immutable/assets/founders-drafting-the-investor-update.CQpd4ooo.webm",
    app: 'Cursor',
    prompt: 'Scaffold a new service following our existing conventions.',
    thinkingLines: [
      "I'll pull your context from Unabyss to match your team's actual patterns.",
      'Finding tools',
      'Finding tools',
      'I need your lint config, folder conventions, and existing services - not defaults.',
    ],
    query: {
      label: 'Agentic query',
      json: '{ "question": "What conventions do our existing services follow? Consider folder structure, lint rules, test setup, and naming patterns." }',
    },
    steps: [
      { label: 'Agentic query read', status: 'Finished pending' },
      { label: 'Agentic query read', status: 'Finished pending' },
      { label: 'Agentic query read', status: 'Finished completed' },
    ],
  },
]

function ChatMockup({ item }) {
  return (
    <div className="relative bg-[#1a1a1f]/95 backdrop-blur border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-sm text-white/70 font-medium">{item.app}</span>
        <span className="text-white/20">›</span>
        <span className="text-sm text-white/40">{item.title}</span>
      </div>

      <div className="p-5 space-y-4 max-h-[420px] overflow-y-auto hide-scrollbar">
        <div className="bg-white/5 rounded-xl px-4 py-3 text-sm text-white/80 max-w-lg">
          {item.prompt}
        </div>

        <div className="space-y-2 text-sm text-white/40">
          {item.thinkingLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="text-xs">
          <p className="flex items-center gap-1.5 text-white/70 mb-1">
            <span aria-hidden="true">▦</span> {item.query.label}
          </p>
          <p className="font-mono text-accent/80 bg-white/5 rounded-lg p-3 leading-relaxed">
            {item.query.json}
          </p>
        </div>

        <div className="space-y-2">
          {item.steps.map((step, i) => (
            <div key={i} className="text-xs">
              <p className="flex items-center gap-1.5 text-white/70">
                <span aria-hidden="true">▦</span> {step.label}
              </p>
              <p className="text-white/30 ml-5">{step.status}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
          <p className="text-sm text-white/30 mb-2">Ask anything</p>
          <div className="flex items-center justify-between text-white/30">
            <div className="flex items-center gap-3">
              <Plus size={16} />
              <Globe size={16} />
              <SlidersHorizontal size={16} />
              <span className="text-xs">Auto</span>
            </div>
            <div className="flex items-center gap-3">
              <Volume2 size={16} />
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                <span className="w-2.5 h-2.5 bg-black rounded-sm" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TalkingHeadVideo({ item }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [item.id])

  return (
    <div className="absolute bottom-6 left-6 z-20">
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white/20">
        <video
          ref={videoRef}
          key={item.video}
          src={item.video}
          muted={muted}
          loop
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={() => setMuted((m) => !m)}
        className="mt-2 flex items-center gap-1.5 text-xs bg-black/60 backdrop-blur px-3 py-1.5 rounded-full mx-auto border border-white/10 hover:bg-black/80 transition-colors"
      >
        <Volume2 size={12} />
        {muted ? 'Tap for sound' : 'Mute'}
      </button>
    </div>
  )
}

export default function UseCaseShowcase() {
  const [activeIndex, setActiveIndex] = useState(1)
  const active = useCases[activeIndex]

  const goPrev = () => setActiveIndex((i) => (i - 1 + useCases.length) % useCases.length)
  const goNext = () => setActiveIndex((i) => (i + 1) % useCases.length)

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <div
        className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[600px] flex flex-col justify-end transition-[background-image] duration-700"
        style={{
          backgroundImage: `url(${active.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          0:09
        </div>

        <div className="absolute top-6 right-6 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs">
          Unabyss in <span className="font-semibold">{active.app}</span>
        </div>

        <TalkingHeadVideo item={active} />

        <div className="relative z-10 px-6 pb-6 pt-24 flex justify-center">
          <div className="w-full max-w-2xl">
            <ChatMockup item={active} />
          </div>
        </div>
      </div>

     <div className="relative mt-6">
  <button
    onClick={goPrev}
    aria-label="Previous use case"
    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"
  >
    <ChevronLeft size={18} />
  </button>

  <div className="flex gap-4 overflow-x-auto hide-scrollbar">
    {useCases.map((item, i) => (
      <button
        key={item.id}
        onClick={() => setActiveIndex(i)}
        className={`relative shrink-0 w-[220px] text-left rounded-2xl overflow-hidden border transition-colors ${
          i === activeIndex
            ? 'border-accent'
            : 'border-white/10 hover:border-white/20'
        }`}
      >
        <div
          className="h-24 sm:h-28"
          style={{
            backgroundImage: `url(${item.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="bg-badge px-4 py-3">
          <p className="text-[11px] font-semibold tracking-wide text-accent/80">
            {item.category}
          </p>

          <p className="text-sm font-semibold mt-0.5">
            {item.title}
          </p>
        </div>
      </button>
    ))}
  </div>

  <button
    onClick={goNext}
    aria-label="Next use case"
    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-black/80 transition-colors"
  >
    <ChevronRight size={18} />
  </button>
</div>
    </section>
  )
}