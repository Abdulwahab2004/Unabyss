export default function FinalCTA() {
  return (
    <section className="bg-[#101010] px-6 pr-24 pl-50 sm:py-28">
      <div className="mx-auto grid max-w-[1150px] items-center lg:grid-cols-[0.82fr_1.18fr] ">
        {/* LEFT */}
        <div className="max-w-[560px]">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.32em] text-white/35">
            See it live
          </p>

          <h2 className="max-w-[520px] text-[46px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[40pxs]">
            Your context, one
            <br />
            prompt away
          </h2>

          <p className="mt-7 max-w-[450px] text-[17px] leading-[1.75] text-white/60">
            Connect your sources once. Then every question your AI asks pulls
            the right context over MCP - no re-explaining, no copy-paste.
            Plug it in and feel the difference on your next prompt.
          </p>

          {/* CTA */}
          <div className="relative mt-10 inline-flex rounded-full">
            {/* Glow */}
            <div className="absolute -inset-5 rounded-full bg-[#b68a43]/20 blur-2xl" />

            <div className="relative flex items-center rounded-full border border-[#80602d] bg-[#191713] p-[15px] shadow-[0_0_35px_rgba(174,128,56,0.18)]">
              <span className="pr-[10px] text-[15px] font-semibold text-[#d9b46e]">
                Supercharge your Claude
              </span>

              <a
                href="https://app.unabyss.com/register?_gl=1*5gmtxo*_ga*MTEwODMyODY1OC4xNzg1OTMzMjE0*_ga_2L1V04BRL5*czE3ODY0MzE0ODYkbzE3JGcxJHQxNzg2NDMzMDM5JGo1OSRsMCRoMA.."
                rel="noopener noreferrer"
                className="inline-flex h-[48px] items-center gap-3 rounded-full bg-[#f5f5f5] px-7 text-[15px] font-semibold text-[#111] transition-transform duration-200 hover:scale-[1.03]"
              >
                Start now
                <span className="text-[18px] leading-none">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — CHAT MOCKUP */}
        <div className="w-full sm:w-[37rem] mx-auto">
          <div className="relative overflow-hidden rounded-[14px] border border-white/[0.12] bg-[#252523] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            {/* Window header */}
            <div className="flex h-[52px] items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-[7px]">
                  <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
                  <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
                  <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
                </div>

                <span className="ml-1 h-[13px] w-[13px] rounded-[2px] border border-white/30" />

                <span className="ml-2 text-[13px] text-white/65">
                  Q3 launch status
                </span>

                <span className="text-[12px] text-white/35">⌄</span>
              </div>

              <span className="text-[18px] text-white/40">↗</span>
            </div>

            {/* Chat body */}
            <div className="flex min-h-[450px] flex-col px-9 pb-3 pt-32">
              {/* User message */}
              <div className="ml-auto max-w-[290px] rounded-[12px] border border-white/[0.12] bg-[#333331] px-4 py-3 text-[13px] text-white/70">
                What&apos;s the status of our Q3 launch?
              </div>

              {/* Assistant reasoning */}
              <div className="mt-5 max-w-[510px]">
                <div className="flex items-center gap-2 text-[13px] font-medium text-white/75">
                  <span className="text-[#d87845]">✦</span>
                  <span>Mobilized tools to pull the Q3 launch status</span>
                </div>

                <div className="mt-3 flex gap-2 text-[13px] leading-[1.55] text-white/40">
                  <span className="mt-[2px]">◷</span>
                  <span>
                    The user is asking about their Q3 launch, so I need their
                    actual project context - not a generic answer.
                  </span>
                </div>
              </div>

              {/* Input */}
              <div className="mt-auto">
                <div className="rounded-[15px] border border-white/[0.12] bg-[#30302e] px-4 py-3">
                  <div className="text-[13px] text-white/25">
                    Write a message...
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[18px] text-white/35">+</span>

                    <div className="flex items-center gap-4 text-[11px] text-white/45">
                      <span>
                        Sonnet 5 <span className="text-white/25">⌄</span>
                      </span>
                      <span>
                        Medium <span className="text-white/25">⌄</span>
                      </span>
                      <span className="text-[16px]">♩</span>
                      <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[4px] border border-white/20">
                        ●
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-2 text-center text-[9px] text-white/25">
                  Claude is AI and can make mistakes. Please double-check
                  responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}