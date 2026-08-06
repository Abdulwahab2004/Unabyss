import { ArrowUpRight } from 'lucide-react'
import LogoStrip from './LogoStrip'

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(700px circle at 50% 10%, rgba(124,92,255,0.2), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* PRODUCT HUNT BADGE ROW */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-badge border border-white/10 rounded-full pl-2 pr-4 py-1.5">
            <span className="text-lg" aria-hidden="true">🥇</span>
            <div className="text-left leading-tight">
              <p className="text-[9px] font-bold tracking-widest text-white/40">
                PRODUCT HUNT
              </p>
              <p className="text-xs font-bold">#1 Product of the Day</p>
            </div>
          </div>
          <span className="text-2xl" aria-hidden="true">🏅</span>
          <span className="text-2xl" aria-hidden="true">🏆</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
          One memory for all your apps and AI agents{' '}
          <span className="inline-flex items-center gap-3 align-middle" aria-hidden="true">
            <span className="text-4xl sm:text-5xl"></span>
            <span className="text-4xl sm:text-5xl"></span>
            <span className="text-4xl sm:text-5xl"></span>
          </span>
        </h1>

        <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          What you tell Claude, ChatGPT already knows - Unabyss gives every AI
          one shared memory, built from your work and the tools you use
          daily. No re-explaining.
        </p>

        <div className="mt-10">
          <a
            href="/register"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3.5 rounded-full hover:scale-[1.03] transition-transform"
          >
            Start free now
            <ArrowUpRight size={18} />
          </a>
        </div>

        <LogoStrip />
      </div>
    </section>
  )
}