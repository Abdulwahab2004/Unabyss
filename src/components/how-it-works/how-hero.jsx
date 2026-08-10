import { ArrowUpRight } from 'lucide-react'
import Navbar from '../Navbar'
export default function HIWHero() {
  return (
    <>
  
      <Navbar/>
    <section className="relative pt-33 pb-20 px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(700px circle at 50% 0%, rgba(124,92,255,0.2), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <p className="text-xs uppercase tracking-tight text-white/40 mb-6">
        90 seconds to context-ready
      </p>

      <h1 className="text-4xl sm:text-7xl font-bold tracking-wider max-w-3xl mx-auto mb-7">
        See how it works
      </h1>

      <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
        Connect your tools to Unabyss, plug it into your AI tools over MCP, and stop re-explaining yourself. Here's how - and how fast.
      </p>

      <a
        href="/register"
        rel="noopener noreferrer"
        className="mt-9 inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 rounded-full hover:scale-[1.03] transition-transform"
      >
        Start now
        <ArrowUpRight size={18} />
      </a>
    </section>
      </>
  )
}