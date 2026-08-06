const TOOLS = [
  { name: 'ChatGPT', dimmed: true },
  { name: 'Grok' },
  { name: 'Hermes' },
  { name: 'GitHub' },
  { name: 'Notion' },
  { name: 'Linear' },
]

function LogoItem({ tool }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full shrink-0 ${
        tool.dimmed ? 'opacity-40' : ''
      }`}
    >
      {/* LOGO SLOT — replace div with <img src="/logos/x.svg" loading="lazy" /> */}
      <div
        className="w-6 h-6 rounded-full bg-white/10 border border-white/10 shrink-0"
        aria-hidden="true"
      />
      <span className="text-sm text-white/90 whitespace-nowrap">{tool.name}</span>
    </div>
  )
}

export default function LogoStrip() {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <div className="flex items-center bg-badge border border-white/10 rounded-full pl-6 pr-2 py-3 overflow-hidden">
        <span className="text-[11px] font-semibold tracking-widest text-white/40 mr-4 shrink-0">
          WORKS WITH
        </span>

        {/* Marquee viewport */}
        <div
          className="flex-1 overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex w-max animate-marquee motion-reduce:animate-none">
            {/* Render the list twice back-to-back for a seamless loop */}
            {[...TOOLS, ...TOOLS].map((tool, i) => (
              <LogoItem key={`${tool.name}-${i}`} tool={tool} />
            ))}
          </div>
        </div>

        <div className="w-px h-5 bg-white/10 mx-3 shrink-0" aria-hidden="true" />

        <div className="flex items-center gap-2 px-3 py-1.5 shrink-0">
          <div
            className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-purple-900"
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-white/90 whitespace-nowrap">
            750,000+ ITEMS SYNCED
          </span>
        </div>
      </div>

      <p className="text-center text-xs text-white/30 mt-6 tracking-wide">
        BACKED BY{' '}
        <span className="font-bold text-white/50">
          <span className="tracking-tighter">||</span>ElevenLabs
          <span className="font-normal">Grants</span>
        </span>
      </p>
    </div>
  )
}