const STAGES = [
  {
    title: 'Extract',
    desc: 'Pulls context from where your information already lives — email, calendar, docs, repos — and keeps pulling as things change.',
  },
  {
    title: 'Structure',
    desc: 'Turns raw material into a clean, organized profile: tagged by topic, source, and sensitivity. A structured picture, not a transcript.',
  },
  {
    title: 'Control',
    desc: 'You decide what each tool sees, per app and per file. Nothing is shared without your say-so.',
  },
  {
    title: 'Distribute',
    desc: 'Any MCP-compatible AI tool pulls the right slice on demand. Connect once — every authorized tool stays current.',
  },
]

const APPS = [
  { name: 'Gmail', icon: '' },
  { name: 'Notion', icon: '' },
  { name: 'Calendar', icon: '' },
  { name: 'GitHub', icon: '' },
  { name: 'Slack', icon: '' },
  { name: 'LinkedIn', icon: '' },
  { name: 'Google Drive', icon: '' },
  { name: 'Obsidian', icon: '' },
  { name: 'HubSpot', icon: '' },
]

const AI_TOOLS = [
  { name: 'Claude', icon: '' },
  { name: 'Cursor', icon: '' },
  { name: 'ChatGPT', icon: '' },
]


function FlowLine({ color = 'white', direction = 'down', delay = 0 }) {
  const anim = direction === 'up' ? 'flow-dot-up' : 'flow-dot-down'
  return (
    <span className="relative w-px h-full bg-white/10 shrink-0">
      <span
        className={`absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${anim}`}
        style={{
          animationDelay: `${delay}s`,
          backgroundColor: color === 'gold' ? '#D9A867' : '#FFFFFF',
        }}
        aria-hidden="true"
      />
    </span>
  )
}


function FlowConnector({ height = 56, color = 'white', paired = false }) {
  if (paired) {
    return (
      <div className="flex flex-wrap justify-center gap-3" aria-hidden="true">
        {AI_TOOLS.map((tool, i) => (
          <div key={tool.name} className="flex items-center justify-center gap-3" style={{ height }}>
            <FlowLine color="white" direction="down" delay={i * 0.3} />
            <FlowLine color="gold" direction="up" delay={i * 0.3 + 0.3} />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center" style={{ height }} aria-hidden="true">
      <FlowLine color={color} direction="down" />
    </div>
  )
}

/** ---- Slots for custom artwork ---------------------------------------- */

function AppSlot({ name, icon }) {
  return (
    <div
      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden"
      title={name}
    >
      {/* LOGO SLOT: paste a URL into this app's `icon` field in APPS */}
      {icon && <img src={icon} alt={name} className="w-7 h-7 object-contain" loading="lazy" />}
    </div>
  )
}

// One fixed line-icon per stage — matches the reference design. Stroke
// icons drawn as plain SVG paths, no icon library dependency.
const STAGE_ICON_PATHS = {
  Extract: (
    <>
      <path d="M12 3v11" />
      <polyline points="7 9 12 14 17 9" />
      <path d="M5 15v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3" />
    </>
  ),
  Structure: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  Control: (
    <>
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5z" />
      <polyline points="8.5 12 11 14.5 15.5 9.5" />
    </>
  ),
  Distribute: (
    <>
      <circle cx="17" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="17" cy="19" r="2.5" />
      <line x1="8.3" y1="10.7" x2="14.7" y2="6.6" />
      <line x1="8.3" y1="13.3" x2="14.7" y2="17.4" />
    </>
  ),
}

function StageIcon({ title }) {
  return (
    <div
      className="w-14 h-14 rounded-xl flex items-center shrink-0"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {STAGE_ICON_PATHS[title]}
      </svg>
    </div>
  )
}

function ToolLogoSlot({ icon, name }) {
  return (
    <div
      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* LOGO SLOT: paste a URL into this tool's `icon` field in AI_TOOLS */}
      {icon && <img src={icon} alt={name} className="w-5 h-5 object-contain" loading="lazy" />}
    </div>
  )
}

/** ---- Section pieces --------------------------------------------------- */

function AppsRow() {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-white/40 mb-4 text-center">Your apps</p>
      <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
        {APPS.map((app) => (
          <AppSlot key={app.name} name={app.name} icon={app.icon} />
        ))}
      </div>
    </div>
  )
}

function StageCard({ title, desc }) {
  return (
    <div className="w-full max-w-[35rem] mx-auto rounded-2xl border border-white/10 bg-white/5 px-6 py-3 flex items-start gap-5">
      <StageIcon title={title} />
      <div className="min-w-0">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function ToolCard({ name, icon }) {
  return (
    <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3">
      <ToolLogoSlot icon={icon} name={name} />
      <span className="text-sm font-medium text-white">{name}</span>
    </div>
  )
}

export default function Mechanics() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto">
      {/* keeps the traveling-dot animations self-contained to this section */}
      <style>{`
        @keyframes flow-dot-down {
          0%   { top: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes flow-dot-up {
          0%   { top: 100%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 0%;   opacity: 0; }
        }
        .flow-dot-down { animation: flow-dot-down 2.4s linear infinite; }
        .flow-dot-up { animation: flow-dot-up 2.4s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .flow-dot-down, .flow-dot-up { animation: none; top: 50%; opacity: 0.6; }
        }
      `}</style>

      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-tighter text-white/40 mb-3">The mechanics</p>
        <h2 className="text-3xl sm:text-[2.8rem] font-bold tracking-tight mb-5">How it actually works</h2>
        <p className="text-white/60 max-w-xl mx-auto">
          It's not a one-time import — the flow runs 24/7, in the background.
        </p>
      </div>

      <AppsRow />

      {/* first connector: white dot */}
      <FlowConnector color="white" />

      <div className="flex flex-col gap-0">
        {STAGES.map((stage, i) => (
          <div key={stage.title}>
            <StageCard {...stage} />
            {/* every connector after the first section: gold dot */}
            {i < STAGES.length - 1 && <FlowConnector color="gold" />}
          </div>
        ))}
      </div>

      <FlowConnector color="gold" height={40} />

      <div className="flex flex-wrap justify-center gap-3 mb-3 mt-1">
        {AI_TOOLS.map((tool, i) => (
          <div key={tool.name} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-3 h-14">
              <FlowLine color="white" direction="down" delay={i * 0.3} />
              <FlowLine color="gold" direction="up" delay={i * 0.3 + 0.3} />
            </div>
            <ToolCard {...tool} />
          </div>
        ))}
      </div>
      <p className="text-xs uppercase tracking-wide text-white/40 mb-10 text-center">Your AI tools</p>

      <div className="text-center">
        <a
          href="/integrations"
          className="inline-flex items-center gap-1.5 text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-full px-5 py-2.5"
        >
          See the full list of integrations and agents
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}