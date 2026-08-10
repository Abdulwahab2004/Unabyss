import { ArrowUpRight } from "lucide-react";

export default function VideoWalkthrough() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto text-center">
      <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Quick tour</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Unabyss walkthrough
      </h2>
      <p className="text-white/60 max-w-xl mx-auto mb-10">
       See the whole flow end to end - connect your sources, watch your context build, and plug it into your AI - in a couple of minutes.
      </p>

      {/* VIDEO SLOT — replace src with your hosted walkthrough video/embed */}
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-badge">
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            aria-label="Play walkthrough video"
            className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white ml-1" />
          </button>
        </div>
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/TbaxvIEcdyU"
          title="Product walkthrough"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> 
      </div>

     <a
        href="/register"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 bg-white text-black hover:bg-white/80 font-semibold px-6 py-3 rounded-full transition-transform"
      >
        Try it for yourself
        <ArrowUpRight size={18} />
      </a>
    </section>
  )
}