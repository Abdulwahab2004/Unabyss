import SpotlightContaier from "../SpotLightContainer"
const SOURCES = [
  { name: 'Gmail', icon: null },
  { name: 'Notion', icon: null },
  { name: 'Calendar', icon: null },
  { name: 'GitHub', icon: null },
  { name: 'Linear', icon: null },
]

const PROFILE_FIELDS = [
  ['Role', 'Founder'],
  ['Project', 'Ingest'],
  ['Focus', 'Growth'],
  ['Stack', 'MCP'],
]

const MCP_TOOLS = [
  { name: 'Claude', icon: null },
  { name: 'Cursor', icon: null },
  { name: 'ChatGPT', icon: null },
]

const STEPS = [
  {
    time: '0:30',
    title: 'Connect your sources',
    desc: 'Pick at least two — Gmail, Notion, Calendar, GitHub, Linear. One click each.',
    barClass: 'bg-white/70',
  },
  {
    time: '0:60',
    title: 'Your context builds itself',
    desc: 'Everything gets pulled and organized into a structured profile automatically. No forms, no manual writing.',
    barClass: 'bg-accent',
  },
  {
    time: '0:90',
    title: 'Plug it into your AI over MCP',
    desc: 'Add it as an MCP connection in Claude, Cursor, ChatGPT, or your automation tool — and it already knows you from the first message.',
    barClass: 'bg-white/10',
  },
]

/** ---- Small presentational pieces ----------------------------------- */

function StatusDot({ className = '' }) {
  return <span className={`w-1.5 h-1.5 rounded-full ${className}`} aria-hidden="true" />
}

function LogoSlot({ size = 'w-7 h-7', rounded = 'rounded-md' }) {
  // Drop an <svg> or <img> in here. Sized + backgrounded so it looks
  // right even before you fill it in.
  return <span className={`${size} ${rounded} bg-white/5 shrink-0`} aria-hidden="true" />
}

function SourceRow({ name }) {
  return (
    <div className="flex items-center justify-between gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
      <div className="flex items-center gap-3 min-w-0">
        <LogoSlot />
        <span className="text-sm font-medium text-white truncate">{name}</span>
      </div>
      <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400/90 shrink-0">
        <StatusDot className="bg-emerald-400" />
        Connected
      </span>
    </div>
  )
}

function SourcesPanel() {
  return (
    <ul className="flex flex-col gap-2.5" aria-label="Connected sources">
      {SOURCES.map((s) => (
        <li key={s.name}>
          <SourceRow {...s} />
        </li>
      ))}
    </ul>
  )
}

function ProfilePanel() {
  return (
    <div className="flex h-full items-center justify-center py-4">
      <div className="w-full bg-amber-950/10 border border-accent/30 rounded-2xl px-4 py-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
          <StatusDot className="bg-accent" />
          Structured profile
        </p>
        <div className="grid grid-cols-2 gap-2">
          {PROFILE_FIELDS.map(([key, value]) => (
            <div
              key={key}
              className="bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-xs sm:text-sm"
            >
              <span className="text-white/40">{key}: </span>
              <span className="text-white font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MCPToolCard({ name }) {
  return (
    <div className="flex flex-col items-center gap-2 bg-white/[0.03] border border-white/10 rounded-xl px-2 py-4">
      <LogoSlot size="w-8 h-8" rounded="rounded-full" />
      <span className="text-xs sm:text-sm font-medium text-white">{name}</span>
      <span className="flex items-center gap-1 text-[10px] text-white/35">
        {/* small "isolated" glyph slot */}
        <span className="w-2.5 h-2.5 rounded-full bg-white/10" aria-hidden="true" />
        Isolated
      </span>
    </div>
  )
}

function MCPPanel() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2 bg-amber-950/15 border border-accent/25 rounded-xl px-4 py-3">
        <div className="flex items-center gap-2 min-w-0">
          <LogoSlot size="w-6 h-6" />
          <span className="text-sm font-semibold text-white truncate">Unabyss · MCP</span>
        </div>
        <span className="text-[11px] text-accent/80 shrink-0">context layer</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {MCP_TOOLS.map((t) => (
          <div key={t.name} className="flex flex-col items-center">
            <div className="w-px h-3 bg-white/15" aria-hidden="true" />
            <MCPToolCard {...t} />
          </div>
        ))}
      </div>
    </div>
  )
}

const PANELS = [SourcesPanel, ProfilePanel, MCPPanel]

/** ---- Section --------------------------------------------------------- */

export default function SetupSteps() {
  return (
    <section className="px-6 py-[4.2rem] max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-widest text-white/40 mb-3">The plus</p>
        <h2 className="text-3xl sm:text-[2.8rem] font-bold tracking-tight mb-4">90 seconds set-up</h2>
        <p className="text-white/60 max-w-xl mx-auto">
         Connect to at least two tools. Wait for Unabyss to extract and structure information. Use it in any AI.
        </p>
      </div>

      <SpotlightContaier className="bg-badge border border-white/10 rounded-3xl overflow-hidden divide-y divide-white/10 md:divide-y-0 md:grid md:grid-cols-3 md:divide-x">
        {STEPS.map((step, i) => {
          const Panel = PANELS[i]
          return (
            <div key={step.time} className="flex flex-col justify-between px-6 py-8 gap-10">
              <Panel />

              <div>
                <span className="text-xs font-medium text-accent tracking-wide">{step.time}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-5">{step.desc}</p>
                <div className="h-[2px] w-full rounded-full bg-white/10 overflow-hidden">
                  <div className={`h-full rounded-full ${step.barClass}`} style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          )
        })}
      </SpotlightContaier>

      <div className="mt-10 text-center">
        <a
          href="#setup-guides"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors"
        >
          New to MCP? Follow our setup guides.
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}