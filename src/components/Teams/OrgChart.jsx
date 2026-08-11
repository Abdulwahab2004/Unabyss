const PEOPLE = [
  {
    initials: 'MS',
    name: 'Michael',
    role: 'Management',
    tools: ['gmail', 'calendar', 'slack'],
    x: 10, // was 21.4
    y: 8.7,
    connector: 'M216 119 V291 Q216 300 227 300 H514 V329',
  },
  {
    initials: 'DS',
    name: 'Dwight',
    role: 'Sales',
    tools: ['gmail', 'hubspot', 'slack'],
    x: 38.5, // was 39.3
    y: 27,
    connector: 'M450 209 V291 Q450 300 461 300 H555 V329',
  },
  {
    initials: 'OM',
    name: 'Oscar',
    role: 'Accounting',
    tools: ['gmail', 'sheets', 'drive'],
    x: 23.5, // was 31.2
    y: 42.4,
    connector: 'M342 285 V300 H514 V329',
  },
  {
    initials: 'JH',
    name: 'Jim',
    role: 'Sales',
    tools: ['gmail', 'hubspot', 'calendar'],
    x: 55.5, // was 54.3
    y: 10.3,
    connector: 'M666 147 V291 Q666 300 655 300 H600 V329',
  },
  {
    initials: 'AM',
    name: 'Angela',
    role: 'Accounting',
    tools: ['sheets', 'slack', 'tldv'],
    x: 67.5, // was 65.2
    y: 36.8,
    connector: 'M810 257 V300 H555 V329',
  },
  {
    initials: 'PB',
    name: 'Pam',
    role: 'Office admin',
    tools: ['gmail', 'drive', 'notion'],
    x: 78, // was 74.4
    y: 8.7,
    connector: 'M936 119 V291 Q936 300 925 300 H600 V329',
  },
]

const TOOLS = {
  gmail: '/logos/gmail.svg',
  calendar: '/logos/calendar.svg',
  slack: '/logos/slack.svg',
  hubspot: '/logos/hubspot.svg',
  sheets: '/logos/sheets.svg',
  drive: '/logos/drive.svg',
  tldv: '/logos/tldv.svg',
  notion: '/logos/notion.svg',
}

const AGENTS = [
  {
    name: 'unabyss',
    logo: '/logos/unabyss.svg',
  },
  {
    name: 'chatgpt',
    logo: '/logos/chatgpt.svg',
  },
  {
    name: 'cursor',
    logo: '/logos/cursor.svg',
  },
  {
    name: 'gemini',
    logo: '/logos/gemini.svg',
  },
]


function ToolIcon({ tool }) {
  return (
    <div
      className="
        flex size-[46px] shrink-0 items-center justify-center
        rounded-[13px]
        border border-white/[0.10]
        bg-[#151515]
      "
      aria-label={tool}
    >
      <img
        src={TOOLS[tool]}
        alt=""
        loading="lazy"
        className="size-[25px] object-contain"
      />
    </div>
  )
}


function PersonNode({ person }) {
  return (
    <div
      className="
        absolute z-10
        flex -translate-x-1/2 flex-col items-center
      "
      style={{
        left: `${person.x}%`,
        top: `${person.y}%`,
      }}
    >
      {/* Applications */}
      <div className="flex gap-[10px]">
        {person.tools.map((tool) => (
          <ToolIcon
            key={tool}
            tool={tool}
          />
        ))}
      </div>

      {/* Person */}
      <div
        className="
          mt-[22px]
          flex h-[62px] min-w-[156px]
          items-center
          rounded-full
          border border-white/[0.11]
          bg-[#111111]
          pl-[8px] pr-[17px]
        "
      >
        <div
          className="
            flex size-[43px] shrink-0 items-center justify-center
            rounded-full
            border border-white/[0.10]
            bg-[#181818]
            text-[12px] font-medium
            text-white/60
          "
        >
          {person.initials}
        </div>

        <div className="ml-[11px] min-w-0 leading-none">
          <p className="whitespace-nowrap text-[16px] font-medium text-white/90">
            {person.name}
          </p>

          <p className="mt-[6px] whitespace-nowrap text-[12px] text-white/35">
            {person.role}
          </p>
        </div>
      </div>
    </div>
  )
}


function ConnectorNetwork() {
  return (
    <svg
      viewBox="0 0 1200 493"
      preserveAspectRatio="none"
      className="
        pointer-events-none
        absolute inset-0
        z-0
        size-full
      "
      aria-hidden="true"
    >
      {PEOPLE.map((person, index) => (
        <g key={person.name}>
          <path
            d={person.connector}
            fill="none"
            stroke="rgba(255,255,255,0.11)"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
          />

          <circle
            r="2.8"
            fill="#e7bd6a"
            className="drop-shadow-[0_0_4px_rgba(231,189,106,0.55)]"
          >
            <animateMotion
              dur={`${2.5 + index * 0.12}s`}
              begin={`${index * 0.35}s`}
              repeatCount="indefinite"
              path={person.connector}
            />
          </circle>
        </g>
      ))}
    </svg>
  )
}


function AgentIcon({ agent }) {
  return (
    <div
      className="
        flex size-[58px] items-center justify-center
        rounded-[14px]
        border border-white/[0.10]
        bg-[#171717]
      "
      aria-label={agent.name}
    >
      <img
        src={agent.logo}
        alt=""
        loading="lazy"
        className="size-[34px] object-contain"
      />
    </div>
  )
}


export default function OrgChart() {
  return (
    <section className="flex w-full justify-center bg-[#0d0d0d]">
      {/*
        Desktop composition.

        The internal canvas keeps the exact proportions of the
        reference instead of allowing a CSS grid to distort it.
      */}
      <div className="relative aspect-[2048/841] w-full max-w-[1280px] overflow-hidden">

        {/* Network */}
        <ConnectorNetwork />

        {/* People */}
        {PEOPLE.map((person) => (
          <PersonNode
            key={person.name}
            person={person}
          />
        ))}

        {/* AI / Agent group */}
        <div
          className="
            absolute
            left-1/2
            top-[66.8%]
            z-20
            flex
            h-[90px]
            w-[309px]
            -translate-x-1/2
            items-center
            justify-center
            rounded-[23px]
            border border-white/[0.11]
            bg-[#171717]
          "
        >
          <div className="flex gap-[13px]">
            {AGENTS.map((agent) => (
              <AgentIcon
                key={agent.name}
                agent={agent}
              />
            ))}
          </div>
        </div>

        {/* Caption */}
        <p
          className="
            absolute
            left-0 right-0
            top-[81.6%]
            z-20
            text-center
            text-[14px]
            leading-none
            text-white/35
          "
        >
          Every agent reads the same context. Each person's stays their own.
        </p>
      </div>
    </section>
  )
}