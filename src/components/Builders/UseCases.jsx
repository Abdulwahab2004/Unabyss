import { useRef, useState, useEffect } from 'react'
import { ArrowUpRight, Volume2, Maximize2 } from 'lucide-react'

export default function AIThatKnowsCompany() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* LEFT — text content */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
            Use cases
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Your agents finally know what you know
          </h2>
          <p className="text-white/50 leading-relaxed mb-8 max-w-md">
            You wire up Claude, Cursor, Codex, or n8n - and every one starts from zero. Unabyss gives them one shared context, so what one knows, they all know.
          </p>
          <a
            href="/register"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3.5 rounded-full hover:scale-[1.03] transition-transform w-fit"
          >
            Connect you stack - free
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* RIGHT — demo card + caption below */}
        <div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[420px] flex flex-col justify-end">
            {/* BACKGROUND IMAGE SLOT — ambient gradient/photo behind the chat mockup */}
            <div
              className="absolute inset-0 bg-cover bg-center"
        style={{
  backgroundImage:
    "url('https://unabyss.com/_app/immutable/assets/blog-cover-02.CDC1AScy.webp')",
}}     aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

            {/* recording indicator */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              0:16
            </div>

            {/* expand icon */}
            <button
              aria-label="Expand"
              className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <Maximize2 size={14} />
            </button>

            {/* Chat mockup */}
            <div className="relative z-10 px-5 pt-16 pb-5">
              <div className="bg-[#1a1a1f]/95 backdrop-blur border border-white/10 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-sm text-white/70 font-medium">
                    CEO weekly report
                  </span>
                  <ArrowUpRight size={14} className="ml-auto text-white/30" />
                </div>

                <div className="p-5 space-y-4 text-sm text-white/70 leading-relaxed max-h-[280px] overflow-y-auto scrollbar-hide">
                  <p>
                    Audit log / compliance endpoint progressed in July 1
                    standups -{' '}
                    <span className="font-semibold text-white">
                      Sophie and Marcus
                    </span>{' '}
                    both reported near-completion (PRs same day).
                  </p>
                  <p>
                    VP Engineering first-round screens ran today, with
                    feedback going to #founders.{' '}
                    <span className="font-semibold text-white">
                      Mark is the best candidate so far
                    </span>{' '}
                    (#2 interview scheduled next week on Tuesday).
                  </p>

                  <div>
                    <p className="font-semibold text-white mb-2">Sales & GTM</p>
                    <ul className="space-y-1.5 list-none">
                      <li>
                        <span className="font-semibold text-white">
                          AMICA proposal
                        </span>{' '}
                        sent July 1 with a 2-week decision window - expected
                        call next week.
                      </li>
                      <li>
                        <span className="font-semibold text-white">
                          Nexus Financial
                        </span>{' '}
                        security review advancing; due next Thursday.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">Ops</p>
                    <p>
                      <span className="font-semibold text-white">
                        Fundraising prep:
                      </span>{' '}
                      deck and the financial model are ready - in review by
                    </p>
                  </div>

                  <span className="text-lg" aria-hidden="true">
                    
                  </span>
                </div>

                <div className="px-5 pb-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <p className="text-sm text-white/30 mb-2">
                      Write a message...
                    </p>
                    <div className="flex items-center justify-between text-white/30">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-white/60 font-medium">
                          Sonnet 5
                        </span>
                        Medium
                      </div>
                      <div className="flex items-center gap-3">
                        <span aria-hidden="true">🎤</span>
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="w-2 h-2 bg-white rounded-sm" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-[10px] text-white/20 mt-2">
                    Claude is AI and can make mistakes. Please double-check
                    responses.
                  </p>
                </div>
              </div>

              {/* Talking-head circular video, bottom-left, overlapping the card */}
              <div className="absolute -bottom-2 left-2 z-20">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-black">
                  {/* VIDEO SLOT — replace src with your talking-head clip */}
                  <video
                    ref={videoRef}
                    src="https://unabyss.com/_app/immutable/assets/builders-gcp-Infrastructure-review.DtNqYj8x.webm"
                    muted={muted}
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* bottom bar: sound toggle + app badge */}
            <div className="relative z-20 flex items-center justify-between px-5 pb-5">
              <button
                onClick={() => setMuted((m) => !m)}
                className="ml-20 sm:ml-24 flex items-center gap-1.5 text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-white/90 transition-colors"
              >
                <Volume2 size={12} />
                {muted ? 'Tap for sound' : 'Mute'}
              </button>

              <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs">
                Unabyss in <span className="font-semibold">✳️ Claude</span>
              </span>
            </div>
          </div>

          {/* Caption below the card */}
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-2">
             Infrastructure decisions follow you into Claude
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
             You worked through GCP vs AWS in Cursor this morning. Open Claude and it already knows why you chose GCP, what you rejected, and whether current costs mean it's time to reconsider - without re-pasting the thread.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}