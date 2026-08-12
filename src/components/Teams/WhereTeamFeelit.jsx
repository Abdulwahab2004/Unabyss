const CARDS = [
  {
    title: 'Everyone re-explains the same thing',
    desc: "One teammate shapes the plan in Claude, another ships in Cursor - and none of those tools know what the other figured out. Multiply that gap by headcount and you're paying for software instead of using it.",
  },
  {
    title: 'The answer depends on who asked',
    desc: 'Two people ask their AI the same question and get two different answers, because each one pasted a different half of the picture. Give each person their full working context and the quality of the answer stops depending on what they remembered to paste.',
  },
  {
    title: "A new hire's first week",
    desc: 'They already have the drive, the chat, the docs - it would take a human a week to read all of it. Connect their accounts and their AI is caught up on day one, within exactly the access you grant.',
  },
]

/* -------------------------------------------------------------------------- */
/* Small mockup pieces                                                        */
/* -------------------------------------------------------------------------- */

function CircleIcon({ children, className = '' }) {
  return (
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.035] text-[11px] text-white/45 ${className}`}
    >
      {children}
    </div>
  )
}

/* First card --------------------------------------------------------------- */

function ReExplainMockup() {
  return (
    <div className="w-full max-w-[300px] space-y-3">
      {/* Claude */}
      <div className="flex h-[53px] items-center gap-3 rounded-xl border border-white/[0.11] bg-white/[0.035] px-3">
        <CircleIcon>MS</CircleIcon>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.055]">
          <span className="text-[17px] text-[#d97757]">✹</span>
        </div>

        <div className="flex-1 space-y-[6px]">
          <div className="h-[4px] w-[92%] rounded-full bg-white/[0.19]" />
          <div className="h-[4px] w-[68%] rounded-full bg-white/[0.16]" />
        </div>
      </div>

      {/* ChatGPT */}
      <div className="flex h-[53px] items-center gap-3 rounded-xl border border-white/[0.11] bg-white/[0.035] px-3">
        <CircleIcon>DS</CircleIcon>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.055]">
          <span className="text-[16px] text-white/70">◉</span>
        </div>

        <div className="flex-1 space-y-[6px]">
          <div className="h-[4px] w-[92%] rounded-full bg-white/[0.19]" />
          <div className="h-[4px] w-[66%] rounded-full bg-white/[0.16]" />
        </div>
      </div>

      {/* Cursor */}
      <div className="flex h-[53px] items-center gap-3 rounded-xl border border-white/[0.11] bg-white/[0.035] px-3">
        <CircleIcon>PB</CircleIcon>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.055]">
          <span className="text-[15px] text-white/70">◆</span>
        </div>

        <div className="flex-1 space-y-[6px]">
          <div className="h-[4px] w-[92%] rounded-full bg-white/[0.19]" />
          <div className="h-[4px] w-[68%] rounded-full bg-white/[0.16]" />
        </div>
      </div>

      <p className="pt-1 text-center text-[12px] text-white/[0.22]">
        The same briefing, retyped for every tool
      </p>
    </div>
  )
}

/* Second card -------------------------------------------------------------- */

function DifferentAnswersMockup() {
  return (
    <div className="w-full max-w-[280px] space-y-3">
      {/* Question */}
      <div className="flex h-[53px] items-center gap-3 rounded-xl border border-white/[0.11] bg-white/[0.035] px-3">
        <CircleIcon>?</CircleIcon>

        <span className="truncate text-[13px] text-white/65">
          Which account needs attention?
        </span>
      </div>

      {/* connector */}
      <div className="relative h-[1px]">
        <span className="absolute -left-[1px] -top-[7px] flex h-6 w-6 items-center justify-center rounded-full border border-[#a34d4d] bg-[#351c1c] text-[11px] text-[#d76d6d]">
          ≠
        </span>
      </div>

      {/* Answer 1 */}
      <div className="ml-7 flex h-[53px] items-center gap-3 rounded-xl border border-white/[0.11] bg-white/[0.035] px-3">
        <CircleIcon>MS</CircleIcon>

        <span className="truncate text-[13px] text-white/60">
          Start with the Q3 renewal.
        </span>
      </div>

      {/* Answer 2 */}
      <div className="ml-7 flex h-[53px] items-center gap-3 rounded-xl border border-white/[0.11] bg-white/[0.035] px-3">
        <CircleIcon>DS</CircleIcon>

        <span className="truncate text-[13px] text-white/60">
          Start with the new lead.
        </span>
      </div>

      <p className="pt-1 text-center text-[12px] text-white/[0.22]">
        Same question. Different halves of the picture.
      </p>
    </div>
  )
}

/* Third card --------------------------------------------------------------- */

function NewHireMockup() {
  const rows = [
    {
      icon: '◆',
      name: 'Drive',
      status: '✓ Readable',
      active: true,
    },
    {
      icon: '✣',
      name: 'Slack',
      status: '✓ Readable',
      active: true,
    },
    {
      icon: 'N',
      name: 'Notion',
      status: '✓ Readable',
      active: true,
    },
    {
      icon: '◈',
      name: 'HubSpot',
      status: '⌕ No access',
      active: false,
    },
  ]

  return (
    <div className="w-full max-w-[280px]">
      {/* Person */}
      <div className="mb-3 flex items-center gap-3">
        <CircleIcon className="h-8 w-8">
          RH
        </CircleIcon>

        <div>
          <p className="text-[13px] font-semibold text-white/75">
            Ryan Howard
          </p>
          <p className="text-[11px] text-white/30">
            Temp · Day 1
          </p>
        </div>
      </div>

      {/* Sources */}
      <div className="space-y-2">
        {rows.map((row) => (
          <div
            key={row.name}
            className={`
              flex
              h-[47px]
              items-center
              gap-3
              rounded-xl
              border
              px-3
              ${
                row.active
                  ? 'border-white/[0.08] bg-white/[0.025]'
                  : 'border-white/[0.045] bg-transparent opacity-25'
              }
            `}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.045] text-[12px] text-white/55">
              {row.icon}
            </div>

            <span className="text-[13px] text-white/45">
              {row.name}
            </span>

            <span
              className={`ml-auto text-[11px] ${
                row.active
                  ? 'text-emerald-500/70'
                  : 'text-white/30'
              }`}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const MOCKUPS = [
  ReExplainMockup,
  DifferentAnswersMockup,
  NewHireMockup,
]

/* -------------------------------------------------------------------------- */
/* Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function WhereTeamsFeelIt() {
  return (
    <section className="w-full px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-white/35">
            Everyday moments
          </p>

          <p className="text-[30px] font-bold leading-[1.1] tracking-[-0.035em] text-white sm:text-[40px]">
            Where teams feel it
          </p>
        </div>

        {/* Main card */}
       {/* Main card */}
<div
  className="
    grid
    min-h-[320px]
    w-[80%]
    mx-auto
    overflow-hidden
    rounded-[20px]
    border
    border-white/[0.11]
    bg-[#1d1d1d]
    grid-cols-1
    md:grid-cols-[1.6fr_1fr_1fr]
  "
>
  {CARDS.map((card, index) => {
    const Mockup = MOCKUPS[index]

    return (
      <article
        key={card.title}
        className={`
          flex
          min-w-0
          flex-col
          px-6
          pb-6
          pt-6
          sm:px-7
          ${
            index !== 0
              ? 'border-t border-white/[0.10] md:border-l md:border-t-0'
              : ''
          }
        `}
      >
        {/* Mockup area */}
        <div className="flex h-[256px] items-center justify-center overflow-hidden">
          <Mockup />
        </div>

        {/* Text */}
        <div className="mt-auto pt-5">
          <h3 className="mb-2 whitespace-nowrap text-[17px] font-semibold tracking-[-0.015em] text-white">
            {card.title}
          </h3>

          <p className="text-[13px] leading-[1.6] text-white/55">
            {card.desc}
          </p>
        </div>
      </article>
    )
  })}
</div>
      </div>
    </section>
  )
}