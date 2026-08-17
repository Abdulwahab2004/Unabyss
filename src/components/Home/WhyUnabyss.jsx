import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Brain, FileText, Hammer } from 'lucide-react'


const ORBIT_TOOLS = [
  { tool: 'unabyss', x: -128, y: -95 },
  { tool: 'chatgpt', x: -50, y: -130 },
  { tool: 'sparkle', x: 40, y: -105 },
  { tool: 'github', x: 108, y: -85 },
  { tool: 'calendar', x: -172, y: -20 },
  { tool: 'cube', x: -170, y: 45 },
  { tool: 'mcp-dot', x: 95, y: 40 },
  { tool: 'drive', x: -128, y: 105 },
  { tool: 'obsidian', x: -155, y: 165 },
  { tool: 'notion', x: 15, y: 175 },
  { tool: 'gmail', x: -55, y: 195 },
  { tool: 'slack', x: 90, y: 170 },
]

const HUB_OFFSET_X = -20 // hub sits slightly left of true center, matching reference
const VIEW_HALF = 200 // half-width of the -200..200 coordinate space

// Convert a coordinate-space value to a CSS percentage within the container
const toPercentX = (x) => `${50 + ((x + HUB_OFFSET_X) / (VIEW_HALF * 2)) * 100}%`
const toPercentY = (y) => `${50 + (y / (VIEW_HALF * 2)) * 100}%`

const COMPARE_LINKS = [
  { label: 'Built-in memory', icon: Brain, href: '/unabyss-vs-llm-memory' },
  { label: 'Context files', icon: FileText, href: '/unabyss-vs-context-files' },
  { label: 'Building your own', icon: Hammer, href: '/unabyss-vs-external-knowledge' },
]

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function OrbitDiagram() {
  return (
    // aspect-square + relative width keeps the coordinate space consistent
    // at every screen size — this is what fixes the layout breaking.
    <div className="relative w-full aspect-square max-w-[360px] mx-auto">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`-${VIEW_HALF} -${VIEW_HALF} ${VIEW_HALF * 2} ${VIEW_HALF * 2}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {ORBIT_TOOLS.map(({ x, y }, i) => (
          <line
            key={i}
            x1={HUB_OFFSET_X}
            y1={0}
            x2={x}
            y2={y}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* hub */}
      <div
        className="absolute w-[14%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/5 border border-amber-400/60 shadow-[0_0_30px_-4px_rgba(251,191,36,0.55)] flex items-center justify-center"
        style={{ left: toPercentX(0), top: toPercentY(0) }}
      >
        <div className="grid grid-cols-3 gap-1" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-white/70" />
          ))}
        </div>
      </div>

      {/* orbiting icons */}
      {ORBIT_TOOLS.map(({ tool, x, y }) => (
        <div
          key={tool}
          className="absolute w-[10%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
          style={{ left: toPercentX(x - HUB_OFFSET_X), top: toPercentY(y) }}
          aria-label={tool}
        >
          {/* LOGO SLOT — replace with <img src={`/logos/${tool}.svg`} className="w-1/2 h-1/2" alt="" /> */}
          <span className="w-1/2 h-1/2 rounded-full bg-white/15" aria-hidden="true" />
        </div>
      ))}
    </div>
  )
}

function ContextSyncCard() {
  const rows = [
    { app: 'slack', time: 'just now', progress: 90 },
    { app: 'gmail', time: '2 min ago', progress: 55 },
  ]
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-[2px]" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="w-[2px] h-[2px] rounded-full bg-white/60" />
              ))}
            </div>
          </div>
          <span className="font-semibold text-sm">Your context</span>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          In sync
        </span>
      </div>

      <div className="space-y-3">
        {rows.map((row) => (
          <div key={row.app} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-white/5 border border-white/10 shrink-0 flex items-center justify-center">
              <span className="w-3.5 h-3.5 rounded-full bg-white/15" aria-hidden="true" />
            </div>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-white/40 rounded-full" style={{ width: `${row.progress}%` }} />
            </div>
            <span className="text-xs text-white/40 shrink-0">{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TaggedLineCard() {
  const tags = [
    { label: 'topic: launch' },
    { label: 'confidential', highlighted: true },
    { label: 'source: Slack' },
    { label: 'work' },
  ]
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-[2px]" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="w-[2px] h-[2px] rounded-full bg-white/60" />
            ))}
          </div>
        </div>
        <span className="font-semibold text-sm">One line, tagged</span>
      </div>

      <p className="text-lg font-medium mb-5">"Q3 launch ships Oct 24"</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={`text-xs px-3 py-1.5 rounded-full border ${
              tag.highlighted
                ? 'bg-amber-400/10 border-amber-400/40 text-amber-300'
                : 'bg-white/5 border-white/10 text-white/60'
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  )
}

function MCPTreeCard() {
  const tools = ['Claude', 'Cursor', 'ChatGPT']
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between bg-gradient-to-r from-amber-900/30 to-transparent border border-amber-500/20 rounded-xl px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-[2px]" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="w-[2px] h-[2px] rounded-full bg-white/60" />
              ))}
            </div>
          </div>
          <span className="text-sm font-semibold">Unabyss · MCP</span>
        </div>
        <span className="text-xs text-white/40">You own it</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {tools.map((tool) => (
          <div key={tool} className="bg-white/[0.03] border border-white/10 rounded-xl px-3 py-4 flex flex-col items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-black border border-white/10 flex items-center justify-center">
              <span className="w-4 h-4 rounded-full bg-white/15" aria-hidden="true" />
            </div>
            <p className="text-sm font-medium">{tool}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function WhyUnabyss() {
  return (
    <div style={{ transform: 'scale(0.95)', transformOrigin: 'top center' }}>
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-4">
          Why Unabyss
        </p>
        <h2 className="text-center text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
          <span className="text-white/40">Your memory, everywhere</span>
          <br />
          and actually yours.
        </h2>
        <p className="text-center text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
          Built-in memory only works inside the tool that made it - it can't
          reach your other AIs. A context file is frozen the moment you write
          it. Unabyss is different on every count:
        </p>

        <div className="grid md:grid-cols-[1.6fr_1fr] gap-4 mb-4">
          <Reveal className="bg-badge border border-white/10 rounded-3xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <OrbitDiagram />
            <div>
              <h3 className="text-xl font-bold mb-3">It reaches every tool you use</h3>
              <p className="text-white/50 leading-relaxed">
                No silos - the same context follows you into Claude, ChatGPT,
                Cursor and the rest.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="bg-badge border border-white/10 rounded-3xl p-6 flex flex-col">
            <ContextSyncCard />
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">It stays live</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Connected to your real sources, so it is never a stale
                snapshot.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-4 mb-16">
          <Reveal className="bg-badge border border-white/10 rounded-3xl p-6 flex flex-col">
            <TaggedLineCard />
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">It's richer</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Each AI gets only the relevant slice - not your whole history
                dumped in.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="bg-badge border border-white/10 rounded-3xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <MCPTreeCard />
            <div>
              <h3 className="text-xl font-bold mb-3">It's yours</h3>
              <p className="text-white/50 leading-relaxed mb-6">
                A layer you own, not memory locked inside one vendor. Export
                it, move it between models, or take it with you - your
                context stays yours no matter which AI you use next.
              </p>
              <a
                href="/register"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 rounded-full hover:scale-[1.03] transition-transform"
              >
                Start now
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-white/60 mr-2">Compare Unabyss with</span>
          {COMPARE_LINKS.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 bg-badge border border-white/10 rounded-full pl-3 pr-4 py-2 text-sm hover:border-white/20 transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon size={14} className="text-white/60" />
                </span>
                {link.label}
                <ArrowRight size={14} className="text-white/30" />
              </a>
            )
          })}
        </Reveal>
      </section>
    </div>
  )
}