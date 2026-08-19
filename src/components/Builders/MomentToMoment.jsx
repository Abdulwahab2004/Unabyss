import { useRef, useState, useEffect } from 'react'
import { ArrowUpRight, Maximize2, Volume2, Plus, Globe, SlidersHorizontal } from 'lucide-react'

const DEMOS = [
  {
    id: 'investor-update',
    time: '0:19',
    app: 'ChatGPT',
    docTitle: 'Investor update newsletter',
    bgImage: "https://unabyss.com/_app/immutable/assets/blog-cover-10.B3rxIxal.webp",
    video: "https://unabyss.com/_app/immutable/assets/builders-new-repo-scaffold.CY3S3Ak8.webm",
    thinkingLines: [
      "I'll pull your context from Unabyss and build the investor update newsletter.",
      'Finding tools',
      'Finding tools',
    ],
    steps: [
      { label: 'Whoami', status: "Finished We're still learning about you. Personal context will be available shortly." },
    ],
    note: 'Let me try a direct query to see what context is available.',
    query: {
      label: 'Query',
      json: '{ "question":"What are the biggest recent wins, milestones, and achievements for my company and product? Include metrics, launches, funding, and traction." }',
    },
    resultHeading: 'Einstein AI - Investor Update, June 2025',
    resultSubheading: 'Key metrics',
    caption: {
      title: 'Drafting the investor update',
      desc: "You open a blank chat and start typing out the quarter - the raise, the metrics, the hires, what shipped - just so the AI can help. With Unabyss it already has the quarter; you ask for the update and it writes from what actually happened.",
    },
  },
  {
    id: 'linkedin-strategy',
    time: '0:33',
    app: 'Claude',
    docTitle: 'Founder LinkedIn strategy',
    bgImage: "https://unabyss.com/_app/immutable/assets/blog-cover-04.DIUaWazw.webp",
    video: "https://unabyss.com/_app/immutable/assets/builders-new-repo-scaffold.CY3S3Ak8.webm",
    query: {
      label: 'Request',
      json: '{ "question": "Who am I? Give my name, role, company, and key facts about what I\'m working on." }',
    },
    note: 'Let me pull recent events and voice details for grounding the posts.',
    secondQuery: {
      label: 'Query',
      json: '{ "question": "What are the most recent events, milestones, product updates, wins, hires, and lessons from the last 4-6 weeks? Give me specifics I could reference in LinkedIn posts." }',
    },
    caption: {
      title: 'Founder LinkedIn posts without re-briefing ChatGPT',
      desc: "You shaped the month's thought leadership in Claude, then opened ChatGPT to draft posts - and it had none of your recent wins or voice. Unabyss carries the same context into every tool, so the strategy follows you.",
    },
  },
]

function TalkingHeadVideo({ video }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [video])

  return (
    <div className="absolute -bottom-2 left-2 z-20">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white">
        {/* VIDEO SLOT — swap src per demo */}
        <video
          ref={videoRef}
          key={video}
          src={video}
          muted={muted}
          loop
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={() => setMuted((m) => !m)}
        className="mt-2 flex items-center gap-1.5 text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full mx-auto hover:bg-white/90 transition-colors"
      >
        <Volume2 size={12} />
        {muted ? 'Tap for sound' : 'Mute'}
      </button>
    </div>
  )
}

function DemoCard({ demo }) {
  return (
    <div>
      {/* Card — height driven by content via min-h, not a hard fixed value */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[420px] flex flex-col justify-end">
        {/* BACKGROUND IMAGE SLOT */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${demo.bgImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

        {/* recording indicator */}
        <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          {demo.time}
        </div>

        {/* expand icon */}
        <button
          aria-label="Expand"
          className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center hover:bg-black/80 transition-colors"
        >
          <Maximize2 size={14} />
        </button>

        {/* Chat mockup */}
        <div className="relative z-10 px-5 pt-16 pb-5">
          <div className="bg-[#1a1a1f]/95 backdrop-blur border border-white/10 rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-sm text-white/70 font-medium">
                {demo.app}
              </span>
              <span className="text-white/20">›</span>
              <span className="text-sm text-white/40 truncate">
                {demo.docTitle}
              </span>
              <ArrowUpRight size={14} className="ml-auto text-white/30 shrink-0" />
            </div>

            <div className="p-5 space-y-4 text-sm text-white/70 leading-relaxed max-h-[280px] overflow-y-auto scrollbar-hide">
              {demo.thinkingLines?.map((line, i) => (
                <p key={i} className="text-white/50">
                  {line}
                </p>
              ))}

              {demo.steps?.map((step, i) => (
                <div key={i} className="text-xs">
                  <p className="flex items-center gap-1.5 text-white/70">
                    <span aria-hidden="true">▦</span> {step.label}
                  </p>
                  <p className="text-white/30 ml-5">{step.status}</p>
                </div>
              ))}

              {demo.note && <p className="text-white/50">{demo.note}</p>}

              {demo.query && (
                <div className="text-xs">
                  <p className="flex items-center gap-1.5 text-white/70 mb-1">
                    <span aria-hidden="true">▦</span> {demo.query.label}
                  </p>
                  <p className="font-mono text-accent/80 bg-white/5 rounded-lg p-3 leading-relaxed whitespace-pre-wrap break-words">
                    {demo.query.json}
                  </p>
                </div>
              )}

              {demo.secondQuery && (
                <div className="text-xs">
                  <p className="flex items-center gap-1.5 text-white/70 mb-1">
                    <span aria-hidden="true">▦</span> {demo.secondQuery.label}
                  </p>
                  <p className="font-mono text-accent/80 bg-white/5 rounded-lg p-3 leading-relaxed whitespace-pre-wrap break-words">
                    {demo.secondQuery.json}
                  </p>
                </div>
              )}

              {demo.resultHeading && (
                <p className="font-semibold text-white">{demo.resultHeading}</p>
              )}
              {demo.resultSubheading && (
                <p className="font-semibold text-white">{demo.resultSubheading}</p>
              )}
            </div>

            <div className="px-5 pb-4">
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p className="text-sm text-white/30 mb-2">
                  {demo.id === 'investor-update' ? 'Ask anything' : 'Write a message...'}
                </p>
                <div className="flex items-center justify-between text-white/30">
                  <div className="flex items-center gap-3">
                    <Plus size={16} />
                    <Globe size={16} />
                    <SlidersHorizontal size={16} />
                    <span className="text-xs">Auto</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs">
                      <span className="text-white/60 font-medium">Sonnet 5</span> Medium
                    </span>
                    <span aria-hidden="true">🎤</span>
                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-sm" />
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-center text-[10px] text-white/20 mt-2">
                Claude is AI and can make mistakes. Please double-check responses.
              </p>
            </div>
          </div>

          <TalkingHeadVideo video={demo.video} />
        </div>

        {/* bottom-right app badge */}
        <div className="relative z-20 flex justify-end px-5 pb-5">
          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs">
            Unabyss in <span className="font-semibold">{demo.app}</span>
          </span>
        </div>
      </div>

      {/* Caption below the card */}
      <div className="mt-6">
        <h3 className="font-bold text-lg mb-2">{demo.caption.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{demo.caption.desc}</p>
      </div>
    </div>
  )
}

export default function UseAgentsLikeNeverBefore() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-4">
        Everyday use cases
      </p>
      <h2 className="text-center text-3xl sm:text-5xl font-bold tracking-tight mb-16">
        Use agents like never before
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {DEMOS.map((demo) => (
          <DemoCard key={demo.id} demo={demo} />
        ))}
      </div>
    </section>
  )
}