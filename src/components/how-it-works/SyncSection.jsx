// Paste a logo URL into any tool's `icon` field and it renders automatically.
const TOOLS = [
  { name: 'ChatGPT', icon: '', corner: 'tl' },
  { name: 'Claude', icon: '', corner: 'tr' },
  { name: 'OpenClaw', icon: '', corner: 'bl' },
  { name: 'Hermes', icon: '', corner: 'br' },
]

// Angle (degrees) each connector line points, from the center hub
// outward toward that corner's node.
const CORNER_ANGLE = { tl: 205, tr: -25, bl: 155, br: 25 }

// How a node aligns within its grid cell so it sits at the outer edge,
// closest to its corner of the diagram.
const CORNER_ALIGN = {
  tl: 'justify-self-start self-start',
  tr: 'justify-self-end self-start',
  bl: 'justify-self-start self-end',
  br: 'justify-self-end self-end',
}

/** ---- Small pieces ----------------------------------------------------- */

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// Small "activity" dot-grid glyph inside the center hub. Purely
// decorative — swap for your own SVG if you'd rather.
function HubGlyph() {
  const LIT = new Set([5, 6])
  return (
    <div className="grid grid-cols-4 gap-1" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} className={`w-1.5 h-1.5 rounded-full ${LIT.has(i) ? 'bg-white' : 'bg-white/25'}`} />
      ))}
    </div>
  )
}

function ToolNode({ name, icon, corner }) {
  return (
    <div
      className={`${CORNER_ALIGN[corner]} flex flex-col items-center gap-1 sm:gap-1.5 bg-badge border border-white/10 rounded-xl py-1.5 sm:py-2 w-20 xs:w-24 sm:w-25`}
    >
      <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
        {/* LOGO SLOT: paste a URL into this tool's `icon` field in TOOLS */}
        {icon && <img src={icon} alt={name} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" loading="lazy" />}
      </div>
      <span className="text-[11px] xs:text-xs sm:text-sm font-semibold text-white text-center leading-tight">{name}</span>
      <span className="flex items-center gap-1 text-[8px] xs:text-[9px] sm:text-[10px] text-emerald-400/90">
        <CheckIcon />
        in sync
      </span>
    </div>
  )
}

// A thin line from the center hub outward at a given angle, with a
// gold dot that continuously travels from the hub to the node. Pure
// CSS animation — no JS, no re-renders.
function ConnectorLine({ angle, delay = 0 }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 origin-left pointer-events-none"
      style={{ transform: `rotate(${angle}deg)` }}
      aria-hidden="true"
    >
      <div className="w-9 xs:w-12 sm:w-20 h-px bg-gradient-to-r from-accent/50 to-transparent" />
      <span
        className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full hub-dot"
        style={{ animationDelay: `${delay}s`, backgroundColor: '#D9A867' }}
      />
    </div>
  )
}

function SyncDiagram() {
  return (
    <div className="relative w-full aspect-[4/3] xs:aspect-[16/9] sm:aspect-[2/1] rounded-2xl border border-white/10 bg-white/[0.02] h-[13rem] xs:h-[15rem] sm:h-[17rem]">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-3 xs:p-5 sm:p-7">
        {TOOLS.map((tool) => (
          <ToolNode key={tool.name} {...tool} />
        ))}
      </div>

      {Object.entries(CORNER_ANGLE).map(([corner, angle], i) => (
        <ConnectorLine key={corner} angle={angle} delay={i * 0.4} />
      ))}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full border border-accent/40 bg-white/5 flex items-center justify-center">
        <HubGlyph />
      </div>
    </div>
  )
}

/** ---- Section ------------------------------------------------------------ */

export default function SyncSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 max-w-5xl mx-auto">
      {/* keeps the traveling-dot animation self-contained to this section */}
      <style>{`
        @keyframes hub-dot-travel {
          0%   { transform: translateY(-50%) translateX(0);   opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateY(-50%) translateX(5rem); opacity: 0; }
        }
        .hub-dot {
          transform: translateY(-50%);
          animation: hub-dot-travel 2.2s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hub-dot { animation: none; opacity: 0.6; }
        }
      `}</style>

      <div className="border border-accent/50 rounded-3xl px-4 py-8 xs:px-6 sm:px-12 sm:py-14 bg-white/[0.02]">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-3 sm:mb-4">One source of truth</p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
              And they finally talk to each other
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              This is the part built-in memory can't do. You run ChatGPT for some things
              and Claude for others — normally they're strangers. With Unabyss they pull
              from the same context, so what one knows, they all know. One source of
              truth, every tool.
            </p>
          </div>

          <SyncDiagram />
        </div>
      </div>
    </section>
  )
}