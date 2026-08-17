import { ArrowRight } from 'lucide-react'



const SOURCES = [
  {
    name: 'Gmail',
    connected: true,
    logoUrl: 'https://cdn.simpleicons.org/gmail',
  },
  {
    name: 'Notion',
    connected: true,
    logoUrl: 'https://cdn.simpleicons.org/notion',
  },
  {
    name: 'Calendar',
    connected: true,
    logoUrl: 'https://cdn.simpleicons.org/googlecalendar',
  },
  {
    name: 'GitHub',
    connected: true,
    logoUrl: 'https://cdn.simpleicons.org/github',
  },
  {
    name: 'Linear',
    connected: false,
    logoUrl: 'https://cdn.simpleicons.org/linear',
  },
]

const AI_TOOLS = [
  {
    name: 'Claude',
    status: 'Isolated',
    logoUrl: 'https://cdn.simpleicons.org/anthropic',
  },
  {
    name: 'Cursor',
    status: 'Isolated',
    logoUrl: 'https://www.cursor.com/assets/images/logo.svg',
  },
  {
    name: 'ChatGPT',
    status: 'Isolated',
    logoUrl: 'https://cdn.simpleicons.org/openai',
  },
]

/*
|--------------------------------------------------------------------------
| SOURCE ROW
|--------------------------------------------------------------------------
*/
function SourceRow({ source }) {
  return (
    <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
      <div className="flex items-center gap-3">
        {/* Logo container */}
        <div className="relative w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
          {source.logoUrl ? (
            <img
              src={source.logoUrl}
              alt=""
              loading="lazy"
              className="w-4 h-4 object-contain"
            />
          ) : (
            <span
              className="w-4 h-4 rounded-full bg-white/15"
              aria-hidden="true"
            />
          )}

          {/* Connected indicator */}
          {source.connected && (
            <span
              className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#14140f]"
              aria-hidden="true"
            />
          )}
        </div>

        <span
          className={
            source.connected
              ? 'text-white/90 text-sm font-medium'
              : 'text-white/30 text-sm'
          }
        >
          {source.name}
        </span>
      </div>

      <span
        className={`text-xs font-medium ${
          source.connected
            ? 'text-emerald-400'
            : 'text-white/25'
        }`}
      >
        {source.connected ? 'Connected' : 'Not connected'}
      </span>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| AI TOOL CARD
|--------------------------------------------------------------------------
*/
function AIToolCard({ tool }) {
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-xl px-3 py-4 flex flex-col items-center text-center gap-2">
      {/* Logo container */}
      <div className="w-9 h-9 rounded-lg bg-black border border-white/10 flex items-center justify-center overflow-hidden">
        {tool.logoUrl ? (
          <img
            src={tool.logoUrl}
            alt=""
            loading="lazy"
            className="w-4 h-4 object-contain"
          />
        ) : (
          <span
            className="w-4 h-4 rounded-full bg-white/15"
            aria-hidden="true"
          />
        )}
      </div>

      <p className="text-sm font-semibold">
        {tool.name}
      </p>

      <p className="flex items-center gap-1 text-[11px] text-white/40">
        <span aria-hidden="true">⇲</span>
        {tool.status}
      </p>
    </div>
  )
}

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/
export default function ConnectOnce() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">

      {/* Section heading */}
      <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-3">
        How it works
      </p>

      <h2 className="text-center text-3xl sm:text-5xl font-bold tracking-tight mb-16 leading-tight max-w-3xl mx-auto">
        Connect once. Every tool works with and builds the same memory.
      </h2>

      {/* Main three-column card */}
      <div className="grid md:grid-cols-3 bg-badge border border-white/10 rounded-3xl overflow-hidden">

        {/* ================================================================
            PANEL 1 — CONNECT SOURCES
        ================================================================= */}

        <div className="flex flex-col p-6 md:border-r border-white/10">

          <div className="space-y-2.5 flex-1">
            {SOURCES.map((source) => (
              <SourceRow
                key={source.name}
                source={source}
              />
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-mono text-amber-400/80 mb-2">
              0:30
            </p>

            <h3 className="font-bold mb-2">
              Connect your sources once
            </h3>

            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Link the tools where your context already lives - Gmail,
              Calendar, GitHub, and 20+ more.
            </p>

            <div className="h-px bg-white/10 relative overflow-hidden rounded-full">
              <div className="absolute inset-y-0 left-0 w-full bg-white" />
            </div>
          </div>
        </div>

        {/* ================================================================
            PANEL 2 — STRUCTURED PROFILE
        ================================================================= */}

        <div className="flex flex-col p-6 md:border-r border-white/10">

          <div className="flex-1 flex items-center justify-center">

            <div className="w-full bg-gradient-to-br from-amber-900/30 to-black border border-amber-500/20 rounded-2xl p-6">

              <p className="flex items-center gap-2 text-sm font-medium mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-amber-400"
                  aria-hidden="true"
                />

                Structured profile
              </p>

              <div className="space-y-2.5">
                <div className="h-2 rounded-full bg-gradient-to-r from-white/30 to-white/5 w-full" />
                <div className="h-2 rounded-full bg-gradient-to-r from-white/30 to-white/5 w-3/4" />
              </div>

            </div>
          </div>

          <div className="mt-8">

            <p className="text-xs font-mono text-amber-400/80 mb-2">
              0:60
            </p>

            <h3 className="font-bold mb-2">
              One memory, built for you
            </h3>

            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Everything from your connected tools becomes one memory -
              always up to date, no upkeep.
            </p>

            <div className="h-px bg-white/10 relative overflow-hidden rounded-full">
              <div className="absolute inset-y-0 left-0 w-2/3 bg-white" />
            </div>

          </div>
        </div>

        {/* ================================================================
            PANEL 3 — AI TOOLS
        ================================================================= */}

        <div className="flex flex-col p-6">

          <div className="flex-1 flex flex-col items-center justify-center gap-4">

            {/* MCP / Context layer */}
            <div className="w-full flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">

              <div className="flex items-center gap-2">

                {/* Unabyss MCP logo slot */}
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  {/*
                    Replace this URL with your Unabyss SVG:

                    <img
                      src="https://your-domain.com/logos/unabyss.svg"
                      alt="Unabyss"
                      className="w-5 h-5 object-contain"
                    />
                  */}

                  <div
                    className="grid grid-cols-3 gap-0.5"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-[3px] h-[3px] rounded-full bg-white/50"
                      />
                    ))}
                  </div>
                </div>

                <span className="text-sm font-medium">
                  Unabyss · MCP
                </span>

              </div>

              <span className="text-[11px] text-white/30">
                context layer
              </span>
            </div>

            {/* Divider */}
            <div
              className="w-full h-px bg-white/10"
              aria-hidden="true"
            />

            {/* AI tool cards */}
            <div className="grid grid-cols-3 gap-2 w-full">
              {AI_TOOLS.map((tool) => (
                <AIToolCard
                  key={tool.name}
                  tool={tool}
                />
              ))}
            </div>

          </div>

          {/* Panel description */}
          <div className="mt-8">

            <p className="text-xs font-mono text-amber-400/80 mb-2">
              0:90
            </p>

            <h3 className="font-bold mb-2">
              Every AI tool pulls it over MCP
            </h3>

            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Claude, ChatGPT, Cursor and the rest read live - no
              re-explaining.
            </p>

            <div
              className="h-px bg-white/10"
              aria-hidden="true"
            />

          </div>
        </div>
      </div>

      {/* Bottom link */}
      <div className="text-center mt-10">
        <a
          href="/how-it-works"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
        >
          See how it works in detail
          <ArrowRight size={16} />
        </a>
      </div>

    </section>
  )
}