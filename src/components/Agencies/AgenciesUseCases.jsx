import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Volume2, Maximize2 } from "lucide-react";

export default function AIThatKnowsCompany() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* LEFT — TEXT CONTENT */}
        <div className="min-w-0">
          <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
            Use cases
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
           Every client's context, in every workflow
          </h2>

          <p className="mb-8 max-w-md leading-relaxed text-white/50">
           Right now you keep a folder of .md files and a separate LLM project per client. You prep the context, upload it, and start working. Then it goes stale - and it never includes what was actually said on the last call or in Slack. Unabyss is the upgrade: live, structured context for every client, in every tool.
          </p>

          <a
            href="/register"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Connect - free
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* RIGHT — DEMO CARD */}
        <div className="min-w-0">
          <div
            className="
              relative
              h-[420px]
              overflow-hidden
              rounded-2xl
              border
              border-white/10

              sm:h-[450px]
              sm:rounded-3xl

              lg:h-[470px]
            "
          >
            {/* BACKGROUND */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://unabyss.com/_app/immutable/assets/blog-cover-28.DRN0RxB3.webp')",
              }}
              aria-hidden="true"
            />

            {/* DARK OVERLAY */}
            <div
              className="absolute inset-0 bg-black/40"
              aria-hidden="true"
            />

            {/* RECORDING INDICATOR */}
            <div
              className="
                absolute
                left-3
                top-3
                z-30

                flex
                items-center
                gap-2

                rounded-full
                bg-black/60
                px-2.5
                py-1

                text-[10px]
                font-mono
                backdrop-blur

                sm:left-5
                sm:top-5
                sm:px-3
                sm:py-1.5
                sm:text-xs
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              0:16
            </div>

            {/* EXPAND BUTTON */}
            <button
              aria-label="Expand"
              className="
                absolute
                right-3
                top-3
                z-30

                flex
                h-8
                w-8
                items-center
                justify-center

                rounded-full
                bg-black/60
                backdrop-blur

                transition-colors
                hover:bg-black/80

                sm:right-5
                sm:top-5
              "
            >
              <Maximize2 size={14} />
            </button>

            {/* SCROLLABLE CHAT WRAPPER */}
            <div
              className="
                absolute
                inset-x-0
                top-0
                bottom-0
                z-10

                px-3
                pt-16
                pb-17

                sm:px-5
                sm:pt-17
                sm:pb-17
              "
            >
              <div
                className="
                  h-full
                  overflow-y-auto
                  scrollbar-hide
                  pr-0
                "
              >
                {/* CHAT MOCKUP */}
                <div
                  className="
                    min-w-0
                    overflow-hidden

                    rounded-xl
                    border
                    border-white/10
                    bg-[#1a1a1f]/95
                    backdrop-blur

                    sm:rounded-2xl
                  "
                >
                  {/* CHAT HEADER */}
                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-1.5

                      border-b
                      border-white/5

                      px-3
                      py-2.5

                      sm:gap-2
                      sm:px-5
                      sm:py-3
                    "
                  >
                    <span className="hidden h-2.5 w-2.5 rounded-full bg-red-400/70 sm:block" />
                    <span className="hidden h-2.5 w-2.5 rounded-full bg-yellow-400/70 sm:block" />
                    <span className="hidden h-2.5 w-2.5 rounded-full bg-green-400/70 sm:block" />

                    <span className="min-w-0 truncate text-xs font-medium text-white/70 sm:ml-3 sm:text-sm">
                      CEO weekly report
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="ml-auto shrink-0 text-white/30"
                    />
                  </div>

                  {/* CHAT CONTENT — SCROLLABLE */}
                  <div
                    className="
                      max-h-[280px]
                      overflow-y-auto
                   hide-scrollbar

                      space-y-4
                      p-3

                      text-xs
                      leading-relaxed
                      text-white/70

                      sm:max-h-[340px]
                      sm:p-5
                      sm:text-sm
                    "
                  >
                    <p className="break-words">
                      Audit log / compliance endpoint progressed in July 1
                      standups -{" "}
                      <span className="font-semibold text-white">
                        Sophie and Marcus
                      </span>{" "}
                      both reported near-completion (PRs same day).
                    </p>

                    <p className="break-words">
                      VP Engineering first-round screens ran today, with
                      feedback going to #founders.{" "}
                      <span className="font-semibold text-white">
                        Mark is the best candidate so far
                      </span>{" "}
                      (#2 interview scheduled next week on Tuesday).
                    </p>

                    <div>
                      <p className="mb-2 font-semibold text-white">
                        Sales & GTM
                      </p>

                      <ul className="list-none space-y-1.5">
                        <li className="break-words">
                          <span className="font-semibold text-white">
                            AMICA proposal
                          </span>{" "}
                          sent July 1 with a 2-week decision window - expected
                          call next week.
                        </li>

                        <li className="break-words">
                          <span className="font-semibold text-white">
                            Nexus Financial
                          </span>{" "}
                          security review advancing; due next Thursday.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="mb-2 font-semibold text-white">Ops</p>

                      <p className="break-words">
                        <span className="font-semibold text-white">
                          Fundraising prep:
                        </span>{" "}
                        deck and the financial model are ready - in review.
                      </p>
                    </div>
                  </div>

                  {/* CHAT INPUT */}
                  <div className="px-3 pb-3 sm:px-5 sm:pb-4">
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3">
                      <p className="mb-2 text-xs text-white/30 sm:text-sm">
                        Write a message...
                      </p>

                      <div className="flex items-center justify-between gap-3 text-white/30">
                        <div className="flex min-w-0 items-center gap-2 text-xs sm:gap-3">
                          <span className="truncate font-medium text-white/60">
                            Sonnet 5
                          </span>

                          <span className="hidden sm:inline">Medium</span>
                        </div>

                        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                          <span aria-hidden="true">🎤</span>

                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 sm:h-6 sm:w-6">
                            <span className="h-2 w-2 rounded-sm bg-white" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-2 text-center text-[8px] text-white/20 sm:text-[10px]">
                      Claude is AI and can make mistakes. Please double-check
                      responses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TALKING HEAD VIDEO */}
            <div
              className="
                absolute
                bottom-4
                left-3
                z-30

                sm:bottom-5
                sm:left-5
              "
            >
              <div
                className="
                  relative
                  h-16
                  w-16

                  overflow-hidden
                  rounded-full
                  border-2
                  border-white

                  sm:h-20
                  sm:w-20
                  sm:border-4

                  lg:h-24
                  lg:w-24
                "
              >
                <video
                  ref={videoRef}
                  src="https://unabyss.com/_app/immutable/assets/agencies-portfolio-status-across-every-client.BGyBRIie.webm"
                  muted={muted}
                  loop
                  playsInline
                  autoPlay
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* BOTTOM CONTROLS */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                z-30

                flex
                items-center
                justify-between
                gap-2

                px-3
                pb-4

                sm:px-5
                sm:pb-5
              "
            >
              {/* SOUND BUTTON */}
              <button
                onClick={() => setMuted((m) => !m)}
                className="
                  ml-16

                  flex
                  items-center
                  gap-1

                  whitespace-nowrap

                  rounded-full
                  bg-white

                  px-2.5
                  py-1.5

                  text-[10px]
                  font-medium
                  text-black

                  transition-colors
                  hover:bg-white/90

                  sm:ml-24
                  sm:gap-1.5
                  sm:px-3
                  sm:text-xs
                "
              >
                <Volume2 size={12} />

                <span className="hidden sm:inline">
                  {muted ? "Tap for sound" : "Mute"}
                </span>

                <span className="sm:hidden">
                  {muted ? "Sound" : "Mute"}
                </span>
              </button>

              {/* APP BADGE */}
              <span
                className="
                  flex
                  max-w-[150px]
                  items-center
                  gap-1

                  truncate
                  whitespace-nowrap

                  rounded-full
                  bg-black/60

                  px-2.5
                  py-1.5

                  text-[10px]

                  backdrop-blur

                  sm:max-w-none
                  sm:gap-1.5
                  sm:px-3
                  sm:text-xs
                "
              >
                <span className=" sm:inline">Unabyss in</span>

                <span className="truncate font-semibold">
                  Claude
                </span>
              </span>
            </div>
          </div>

          {/* CAPTION */}
          <div className="mt-5 sm:mt-6">
            <h3 className="mb-2 text-base font-bold sm:text-lg">
              Portfolio status across every client
            </h3>

            <p className="text-sm leading-relaxed text-white/50">
             Instead of closing one client's project and re-orienting the AI on the next, ask once for status across the whole book - results, actions, and bottlenecks for every engagement, pulled from live context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}