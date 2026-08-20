import { useRef, useState, useEffect } from "react";
import {
  ArrowUpRight,
  Maximize2,
  Volume2,
  Plus,
  Globe,
  SlidersHorizontal,
} from "lucide-react";

const DEMOS = [
  {
    id: "investor-update",
    time: "0:19",
    app: "ChatGPT",
    docTitle: "Investor update newsletter",
    bgImage:
      "https://unabyss.com/_app/immutable/assets/blog-cover-10.B3rxIxal.webp",
    video:
      "https://unabyss.com/_app/immutable/assets/agencies-weekly-report-without-chasing-every-update.BKApf_hz.webm",

    thinkingLines: [
      "I'll pull your context from Unabyss and build the investor update newsletter.",
      "Finding tools",
      "Finding tools",
    ],

    steps: [
      {
        label: "Whoami",
        status:
          "Finished We're still learning about you. Personal context will be available shortly.",
      },
    ],

    note: "Let me try a direct query to see what context is available.",

    query: {
      label: "Query",
      json: '{ "question":"What are the biggest recent wins, milestones, and achievements for my company and product? Include metrics, launches, funding, and traction." }',
    },

    resultHeading: "Einstein AI - Investor Update, June 2025",
    resultSubheading: "Key metrics",

    caption: {
      title: "Drafting the investor update",
      desc: "You open a blank chat and start typing out the quarter - the raise, the metrics, the hires, what shipped - just so the AI can help. With Unabyss it already has the quarter; you ask for the update and it writes from what actually happened.",
    },
  },

  {
    id: "linkedin-strategy",
    time: "0:33",
    app: "Claude",
    docTitle: "Founder LinkedIn strategy",
    bgImage:
      "https://unabyss.com/_app/immutable/assets/blog-cover-04.DIUaWazw.webp",
    video:
      "https://unabyss.com/_app/immutable/assets/agencies-past-client-context-when-you-need-it-again.OWlLfOpN.webm",

    query: {
      label: "Request",
      json: `{ "question": "Who am I? Give my name, role, company, and key facts about what I'm working on." }`,
    },

    note: "Let me pull recent events and voice details for grounding the posts.",

    secondQuery: {
      label: "Query",
      json: '{ "question": "What are the most recent events, milestones, product updates, wins, hires, and lessons from the last 4-6 weeks? Give me specifics I could reference in LinkedIn posts." }',
    },

    caption: {
      title: "Founder LinkedIn posts without re-briefing ChatGPT",
      desc: "You shaped the month's thought leadership in Claude, then opened ChatGPT to draft posts - and it had none of your recent wins or voice. Unabyss carries the same context into every tool, so the strategy follows you.",
    },
  },
];

function TalkingHeadVideo({ video }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [video]);

  return (
    <div className="absolute bottom-3 left-3 z-30 sm:bottom-5 sm:left-5">
      {/* VIDEO */}
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
          key={video}
          src={video}
          muted={muted}
          loop
          playsInline
          autoPlay
          className="h-full w-full object-cover"
        />
      </div>

      {/* SOUND BUTTON */}
      <button
        onClick={() => setMuted((m) => !m)}
        className="
          mt-2
          flex
          items-center
          gap-1.5
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
    </div>
  );
}

function DemoCard({ demo }) {
  return (
    <div className="min-w-0">
      {/* CARD */}
      <div
        className="
          relative
          h-[520px]
          overflow-hidden
          rounded-2xl
          border
          border-white/10

          sm:h-[580px]
          sm:rounded-3xl

          lg:h-[550px]
        "
      >
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${demo.bgImage})`,
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
          {demo.time}
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

        {/* SCROLLABLE CHAT AREA */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            bottom-0
            z-10

            px-3
            pt-16
            pb-28

            sm:px-5
            sm:pt-20
            sm:pb-20
          "
        >
          <div className="h-full overflow-y-auto hide-scrollbar">
            {/* CHAT */}
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
              {/* HEADER */}
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
                <span className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-red-400/70 sm:block" />
                <span className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400/70 sm:block" />
                <span className="hidden h-2.5 w-2.5 shrink-0 rounded-full bg-green-400/70 sm:block" />

                <span className="shrink-0 text-xs font-medium text-white/70 sm:ml-3 sm:text-sm">
                  {demo.app}
                </span>

                <span className="shrink-0 text-white/20">›</span>

                <span className="min-w-0 truncate text-xs text-white/40 sm:text-sm">
                  {demo.docTitle}
                </span>

                <ArrowUpRight
                  size={14}
                  className="ml-auto shrink-0 text-white/30"
                />
              </div>

              {/* CHAT CONTENT */}
              <div
                className="
                  space-y-4
                  p-3
                  text-xs
                  leading-relaxed
                  text-white/70

                  sm:p-5
                  sm:text-sm
                "
              >
                {demo.thinkingLines?.map((line, i) => (
                  <p key={i} className="break-words text-white/50">
                    {line}
                  </p>
                ))}

                {demo.steps?.map((step, i) => (
                  <div key={i} className="min-w-0 text-xs">
                    <p className="flex min-w-0 items-center gap-1.5 text-white/70">
                      <span className="shrink-0" aria-hidden="true">
                        ▦
                      </span>

                      <span className="truncate">{step.label}</span>
                    </p>

                    <p className="ml-5 break-words text-white/30">
                      {step.status}
                    </p>
                  </div>
                ))}

                {demo.note && (
                  <p className="break-words text-white/50">{demo.note}</p>
                )}

                {demo.query && (
                  <div className="min-w-0 text-xs">
                    <p className="mb-1 flex items-center gap-1.5 text-white/70">
                      <span aria-hidden="true">▦</span>
                      {demo.query.label}
                    </p>

                    <p
                      className="
                        overflow-hidden
                        break-words
                        whitespace-pre-wrap
                        rounded-lg
                        bg-white/5
                        p-2.5
                        font-mono
                        leading-relaxed
                        text-accent/80

                        sm:p-3
                      "
                    >
                      {demo.query.json}
                    </p>
                  </div>
                )}

                {demo.secondQuery && (
                  <div className="min-w-0 text-xs">
                    <p className="mb-1 flex items-center gap-1.5 text-white/70">
                      <span aria-hidden="true">▦</span>
                      {demo.secondQuery.label}
                    </p>

                    <p
                      className="
                        overflow-hidden
                        break-words
                        whitespace-pre-wrap
                        rounded-lg
                        bg-white/5
                        p-2.5
                        font-mono
                        leading-relaxed
                        text-accent/80

                        sm:p-3
                      "
                    >
                      {demo.secondQuery.json}
                    </p>
                  </div>
                )}

                {demo.resultHeading && (
                  <p className="break-words font-semibold text-white">
                    {demo.resultHeading}
                  </p>
                )}

                {demo.resultSubheading && (
                  <p className="break-words font-semibold text-white">
                    {demo.resultSubheading}
                  </p>
                )}
              </div>

              {/* INPUT */}
              <div className="px-3 pb-3 sm:px-5 sm:pb-4">
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 sm:px-4 sm:py-3">
                  <p className="mb-2 text-xs text-white/30 sm:text-sm">
                    {demo.id === "investor-update"
                      ? "Ask anything"
                      : "Write a message..."}
                  </p>

                  <div className="flex items-center justify-between gap-2 text-white/30">
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                      <Plus size={14} />
                      <Globe size={14} />
                      <SlidersHorizontal size={14} />

                      <span className="hidden text-xs sm:inline">Auto</span>
                    </div>

                    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                      <span className="hidden truncate text-xs md:inline">
                        <span className="font-medium text-white/60">
                          Sonnet 5
                        </span>{" "}
                        Medium
                      </span>

                      <span aria-hidden="true">🎤</span>

                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-6 sm:w-6">
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
        <TalkingHeadVideo video={demo.video} />

        {/* APP BADGE */}
        <div
          className="
            absolute
            bottom-4
            right-3
            z-30

            sm:bottom-5
            sm:right-5
          "
        >
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
            <span className="hidden sm:inline">Unabyss in</span>

            <span className="truncate font-semibold">{demo.app}</span>
          </span>
        </div>
      </div>

      {/* CAPTION */}
      <div className="mt-5 sm:mt-6">
        <h3 className="mb-2 text-base font-bold sm:text-lg">
          {demo.caption.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/50">
          {demo.caption.desc}
        </p>
      </div>
    </div>
  );
}

export default function UseAgentsLikeNeverBefore() {
  return (
    <section className="mx-auto w-full max-w-6xl overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <p className="mb-4 text-center text-xs uppercase tracking-widest text-white/40">
        Everyday use cases
      </p>

      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:mb-14 sm:text-4xl lg:mb-16 lg:text-5xl">
       What changes, moment to moment
      </h2>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-10">
        {DEMOS.map((demo) => (
          <DemoCard key={demo.id} demo={demo} />
        ))}
      </div>
    </section>
  );
}