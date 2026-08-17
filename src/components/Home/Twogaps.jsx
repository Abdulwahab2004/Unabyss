import { ArrowUpRight } from 'lucide-react'
import eye from '../../assets/logos/eye.png'

const AI_TOOLS = ['unabyss', 'chatgpt', 'cube', 'sparkle']
const DATA_SOURCES = ['Slack', 'Gmail', 'Notion', 'Calendar', 'GitHub']

function EyeImage() {
  return (
    <div className="relative w-full overflow-hidden rounded-l-3xl bg-black">
      <img
        src={eye}
        alt="AI context visualization"
        loading="lazy"
        className="block w-full h-auto object-contain"
      />
    </div>
  )
}

function IconChip({ children }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
      {children}
    </div>
  )
}

function ToolPill({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-white/70">
      <span
        className="h-4 w-4 shrink-0 rounded-full bg-white/15"
        aria-hidden="true"
      />
      {label}
    </span>
  )
}

export default function TwoGaps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      {/* Section heading */}
      <p className="mb-3 text-center text-xs uppercase tracking-widest text-white/40">
        The gap
      </p>

      <h2 className="mb-14 text-center text-3xl font-bold tracking-tight sm:text-5xl">
        Two gaps, every day
      </h2>

      {/* Two gap cards */}
      <div className="mb-4 grid gap-4 md:grid-cols-2">
        {/* AI tools card */}
        <div className="rounded-2xl border border-white/10 bg-badge p-8">
          <div className="mb-8 flex gap-3 overflow-hidden">
            {AI_TOOLS.map((tool) => (
              <IconChip key={tool}>
                <span
                  className="h-5 w-5 rounded-full bg-white/15"
                  aria-hidden="true"
                />
              </IconChip>
            ))}
          </div>

          <h3 className="mb-3 text-xl font-bold">
            Your AI tools don't talk to each other
          </h3>

          <p className="leading-relaxed text-white/50">
            You run ChatGPT for some things, Claude for others, maybe Cursor
            or Gemini too - and each is a blank slate to the rest. What you
            figured out in one is invisible to the next.
          </p>
        </div>

        {/* Data sources card */}
        <div className="rounded-2xl border border-white/10 bg-badge p-8">
          <div className="mb-8 flex flex-wrap gap-2">
            {DATA_SOURCES.map((source) => (
              <ToolPill key={source} label={source} />
            ))}
          </div>

          <h3 className="mb-3 text-xl font-bold">
            Your context lives where AI can't see it
          </h3>

          <p className="leading-relaxed text-white/50">
            Your work is sitting in Slack, Gmail, Notion, Calendar, GitHub -
            but AI can't extract information from there, so you keep
            re-explaining what's already written down somewhere.
          </p>
        </div>
      </div>

      {/* Bottom feature card */}
      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-badge md:grid-cols-2">
        {/* Eye image */}
        <div className="w-full overflow-hidden">
          <EyeImage />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 sm:px-12">
          <h3 className="mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Your context is everywhere - and your AI sees none of it.
          </h3>

          <a
            href="/register"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Start now
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}