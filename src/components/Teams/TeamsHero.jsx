import { ArrowUpRight } from 'lucide-react'

export default function TeamsHero() {
  return (
    <section className="relative pt-40 pb-10 px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(700px circle at 50% 0%, rgba(124,92,255,0.2), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
        Unabyss for teams
      </p>

      <h1 className="text-4xl sm:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
        An AI memory for every teammate.
      </h1>

      <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
        Mail, drive, meeting recorders, codebase, CRM and more - plus
        conversations with Claude, ChatGPT, Cursor and other LLMs: each
        teammate's connected sources flow into one memory every AI they use
        can read. Nothing is pooled across the company.
      </p>

      <a
        href="/register"
        rel="noopener noreferrer"
        className="text-sm mt-10 inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-3 rounded-full hover:scale-[1.03] transition-transform"
      >
        Test it out with a 7-day trial
        <ArrowUpRight size={18} />
      </a>
    </section>
  )
}