import {
  X,
  Check,
  Clock,
  ArrowUpRight,
  Plus,
  Mic,
  AudioWaveform,
} from 'lucide-react'
import { useEffect, useRef } from 'react'


export default function DontAnswerJustWork() {
  return (
    <section className=" mx-auto w-full max-w-6xl px-6 py-24">
      {/* Section heading */}
      <p className="mb-3 text-center text-xs uppercase tracking-widest text-white/40">
        The difference
      </p>

      <h2 className="mb-16 text-center text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
        Don't answer questions - just work.
      </h2>

      {/* Two cards */}
      <div className="grid items-stretch gap-4 md:grid-cols-2">
        {/* without unabys */} 

        <div
          className="
            flex
            h-[500px]
            min-h-0
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-badge

            sm:h-[520px]

            md:h-[500px]
            lg:h-[520px]
          "
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-center gap-2 border-b border-white/10 py-4">
            <X size={16} className="text-white/50" />

            <span className="font-semibold text-white/70">
              Without Unabyss
            </span>
          </div>

          {/* Message header */}
          <div className="flex shrink-0 items-center gap-2 border-b border-white/5 px-5 py-4 text-sm text-white/50">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>

            <span className="ml-2 font-medium text-white/70">
              Recruiter message
            </span>

            <ArrowUpRight
              size={14}
              className="ml-auto shrink-0 text-white/30"
            />
          </div>

          {/* Scrollable content */}
          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              p-5
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-white/70">
                and I don't have any of your preferences saved. What's the
                position they reached out about?
              </p>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs text-red-400">
                <Clock size={12} />
                26.9s
              </span>

              <div className="flex justify-end">
                <p className="max-w-xs rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm">
                  A staff engineer role at a bigger, later-stage startup.
                </p>
              </div>

              <p className="text-sm leading-relaxed text-white/70">
                Got it. To judge fit at all, I'd need to know what you're
                actually optimising for. What matters most in your next move -
                level, compensation, remote, company stage?
              </p>

              <div className="flex justify-end">
                <p className="max-w-xs rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm">
                  Staff or above, ideally remote, and decent equity.
                </p>
              </div>

              <p className="text-sm leading-relaxed text-white/70">
                That helps narrow it. Compensation is usually the deciding
                factor for a move like this - do you have a floor in mind, a
                number below which it's not worth the switch?
              </p>

              <span className="text-lg" aria-hidden="true">
                ✳️
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="shrink-0 border-t border-white/5 p-4">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="mb-3 text-sm text-white/40">
                Somewhere above what
              </p>

              <div className="flex items-center justify-between text-white/30">
                <Plus size={16} />

                <div className="flex items-center gap-3">
                  <span className="text-xs">
                    <span className="font-medium text-white/60">
                      Sonnet 5
                    </span>{' '}
                    Medium
                  </span>

                  <Mic size={16} />

                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                    <ArrowUpRight
                      size={14}
                      className="rotate-[-45deg]"
                    />
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-[11px] text-white/20">
              Claude is AI and can make mistakes. Please double-check
              responses.
            </p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* WITH UNABYSS */}
        {/* ================================================================ */}

        <div
          className="
            flex
            h-[500px]
            min-h-0
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-amber-400/50
            shadow-[0_0_50px_-12px_rgba(251,191,36,0.4)]

            sm:h-[520px]

            md:h-[500px]
            lg:h-[520px]
          "
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-center gap-2 bg-gradient-to-b from-amber-400 to-amber-500 py-4 text-black">
            <Check size={16} />

            <span className="font-semibold">
              With Unabyss
            </span>
          </div>

          {/* Main content */}
          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              bg-badge
              p-5
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <div>
              {/* Status */}
              <div className="mb-5 text-center">
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-white/5 px-3 py-1.5 font-mono text-xs text-amber-300">
                  <Check size={12} />
                  Done in 19.4s
                </span>

                <h3 className="mb-1 text-lg font-bold">
                  With Unabyss you're done in seconds.
                </h3>

                <p className="text-sm text-white/50">
                  Without it, you're still answering questions.
                </p>
              </div>

              {/* Context preview */}
              <div
                className="mb-1 rounded-xl border border-white/5 bg-white/5 px-4 py-3 opacity-40 blur-[1px] select-none"
                aria-hidden="true"
              >
                <p className="font-mono text-xs leading-relaxed text-white/40">
                  {'{ level, band, and company stage }'}
                </p>
              </div>

              <p className="mb-5 text-[11px] text-white/20">
                Done
              </p>

              {/* Answer */}
              <p className="mb-3 text-sm leading-relaxed text-white/80">
                Worth a reply. It matches your target - a{' '}
                <span className="font-semibold text-white">
                  staff-level, remote-first role
                </span>{' '}
                - and the band is above your{' '}
                <span className="font-semibold text-white">
                  $210K floor.
                </span>{' '}
                The one gap is stage: you wanted earlier than{' '}
                <span className="font-semibold text-white">
                  Series C.
                </span>{' '}
                I've drafted a warm reply that says you're open and asks two
                questions about scope and equity. Want to see it?
              </p>

              <span className="text-lg" aria-hidden="true">
                🌸
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="shrink-0 border-t border-white/5 bg-badge p-4">
            <div className="rounded-xl border border-amber-400/20 bg-white/5 px-4 py-3">
              <p className="mb-3 text-sm text-white/30">
                Write a message...
              </p>

              <div className="flex items-center justify-between text-white/30">
                <Plus size={16} />

                <div className="flex items-center gap-3">
                  <span className="text-xs">
                    <span className="font-medium text-white/60">
                      Sonnet 5
                    </span>{' '}
                    Medium
                  </span>

                  <Mic size={16} />

                  <AudioWaveform size={16} />
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-[11px] text-white/20">
              Claude is AI and can make mistakes. Please double-check
              responses.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}