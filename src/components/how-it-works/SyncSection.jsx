const TOOLS = [
  {
    name: "ChatGPT",
    icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='260'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20260'%3e%3cpath%20fill='%23fff'%20d='M239.184%20106.203a64.716%2064.716%200%200%200-5.576-53.103C219.452%2028.459%20191%2015.784%20163.213%2021.74A65.586%2065.586%200%200%200%2052.096%2045.22a64.716%2064.716%200%200%200-43.23%2031.36c-14.31%2024.602-11.061%2055.634%208.033%2076.74a64.665%2064.665%200%200%200%205.525%2053.102c14.174%2024.65%2042.644%2037.324%2070.446%2031.36a64.72%2064.72%200%200%200%2048.754%2021.744c28.481.025%2053.714-18.361%2062.414-45.481a64.767%2064.767%200%200%200%2043.229-31.36c14.137-24.558%2010.875-55.423-8.083-76.483Zm-97.56%20136.338a48.397%2048.397%200%200%201-31.105-11.255l1.535-.87%2051.67-29.825a8.595%208.595%200%200%200%204.247-7.367v-72.85l21.845%2012.636c.218.111.37.32.409.563v60.367c-.056%2026.818-21.783%2048.545-48.601%2048.601Zm-104.466-44.61a48.345%2048.345%200%200%201-5.781-32.589l1.534.921%2051.722%2029.826a8.339%208.339%200%200%200%208.441%200l63.181-36.425v25.221a.87.87%200%200%201-.358.665l-52.335%2030.184c-23.257%2013.398-52.97%205.431-66.404-17.803ZM23.549%2085.38a48.499%2048.499%200%200%201%2025.58-21.333v61.39a8.288%208.288%200%200%200%204.195%207.316l62.874%2036.272-21.845%2012.636a.819.819%200%200%201-.767%200L41.353%20151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466%2041.695-63.08-36.63L161.73%2077.86a.819.819%200%200%201%20.768%200l52.233%2030.184a48.6%2048.6%200%200%201-7.316%2087.635v-61.391a8.544%208.544%200%200%200-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39%208.39%200%200%200-8.492%200L99.98%2099.808V74.587a.716.716%200%200%201%20.307-.665l52.233-30.133a48.652%2048.652%200%200%201%2072.236%2050.391v.205ZM88.061%20139.097l-21.845-12.585a.87.87%200%200%201-.41-.614V65.685a48.652%2048.652%200%200%201%2079.757-37.346l-1.535.87-51.67%2029.825a8.595%208.595%200%200%200-4.246%207.367l-.051%2072.697Zm11.868-25.58%2028.138-16.217%2028.188%2016.218v32.434l-28.086%2016.218-28.188-16.218-.052-32.434Z'/%3e%3c/svg%3e",
    corner: "tl",
  },
  {
    name: "Claude",
    icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='257'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20257'%3e%3cpath%20fill='%23D97757'%20d='m50.228%20170.321%2050.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0%20125.796l.583-3.759%205.12-3.434%207.324.648%2016.202%201.101%2024.304%201.685%2017.629%201.037%2026.118%202.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758%207-7.713%209.397.649%202.398.648%209.527%207.323%2020.35%2015.75L94.817%2091.9l3.889%203.24%201.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42%200%2082.05%201.426l4.472%203.888%206.61%2015.101%2010.694%2023.786%2016.591%2032.34%204.861%209.592%202.592%208.879.973%202.722h1.685v-1.556l1.36-18.211%202.528-22.36%202.463-28.776.843-8.1%204.018-9.722%207.971-5.25%206.222%202.981%205.12%207.324-.713%204.73-3.046%2019.768-5.962%2030.98-3.889%2020.739h2.268l2.593-2.593%2010.499-13.934%2017.628-22.036%207.778-8.749%209.073-9.657%205.833-4.601h11.018l8.1%2012.055-3.628%2012.443-11.342%2014.388-9.398%2012.184-13.48%2018.147-8.426%2014.518.778%201.166%202.01-.194%2030.46-6.481%2016.462-2.982%2019.637-3.37%208.88%204.148.971%204.213-3.5%208.62-20.998%205.184-24.628%204.926-36.682%208.685-.454.324.519.648%2016.526%201.555%207.065.389h17.304l32.21%202.398%208.426%205.574%205.055%206.805-.843%205.184-12.962%206.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666%2011.406%2021.387%2019.314%2026.767%2024.887%201.36%206.157-3.434%204.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73%206.935%2025.017%2037.59%201.296%2011.536-1.814%203.76-6.481%202.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194%2077.448-3.37%203.953-7.778%202.981-6.48-4.925-3.436-7.972%203.435-15.749%204.148-20.544%203.37-16.333%203.046-20.285%201.815-6.74-.13-.454-1.49.194-15.295%2020.999-23.267%2031.433-18.406%2019.702-4.407%201.75-7.648-3.954.713-7.064%204.277-6.286%2025.47-32.405%2015.36-20.092%209.917-11.6-.065-1.686-1.686%200-1.686-.065Z'/%3e%3c/svg%3e",
    corner: "tr",
  },
  {
    name: "OpenClaw",
    icon: "data:image/svg+xml,%3csvg%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='openclaw__lobster-gradient'%20x1='0%25'%20y1='0%25'%20x2='100%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23ff4d4d'/%3e%3cstop%20offset='100%25'%20stop-color='%23991b1b'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20d='M60%2010%20C30%2010%2015%2035%2015%2055%20C15%2075%2030%2095%2045%20100%20L45%20110%20L55%20110%20L55%20100%20C55%20100%2060%20102%2065%20100%20L65%20110%20L75%20110%20L75%20100%20C90%2095%20105%2075%20105%2055%20C105%2035%2090%2010%2060%2010Z'%20fill='url(%23openclaw__lobster-gradient)'/%3e%3cpath%20d='M20%2045%20C5%2040%200%2050%205%2060%20C10%2070%2020%2065%2025%2055%20C28%2048%2025%2045%2020%2045Z'%20fill='url(%23openclaw__lobster-gradient)'/%3e%3cpath%20d='M100%2045%20C115%2040%20120%2050%20115%2060%20C110%2070%20100%2065%2095%2055%20C92%2048%2095%2045%20100%2045Z'%20fill='url(%23openclaw__lobster-gradient)'/%3e%3cpath%20d='M45%2015%20Q35%205%2030%208'%20stroke='%23ff4d4d'%20stroke-width='3'%20stroke-linecap='round'/%3e%3cpath%20d='M75%2015%20Q85%205%2090%208'%20stroke='%23ff4d4d'%20stroke-width='3'%20stroke-linecap='round'/%3e%3ccircle%20cx='45'%20cy='35'%20r='6'%20fill='%23050810'/%3e%3ccircle%20cx='75'%20cy='35'%20r='6'%20fill='%23050810'/%3e%3ccircle%20cx='46'%20cy='34'%20r='2.5'%20fill='%2300e5cc'/%3e%3ccircle%20cx='76'%20cy='34'%20r='2.5'%20fill='%2300e5cc'/%3e%3c/svg%3e",
    corner: "bl",
  },
  {
    name: "Hermes",
    icon: "https://unabyss.com/_app/immutable/assets/hermesagent.6_tCReAm.webp",
    corner: "br",
  },
]

const CORNER_ANGLE = {
  tl: 205,
  tr: -25,
  bl: 155,
  br: 25,
}

const CORNER_ALIGN = {
  tl: "justify-self-start self-start",
  tr: "justify-self-end self-start",
  bl: "justify-self-start self-end",
  br: "justify-self-end self-end",
}

/* -------------------------------------------------------------------------- */
/* Small pieces                                                               */
/* -------------------------------------------------------------------------- */

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function HubGlyph() {
  const LIT = new Set([5, 6])

  return (
    <div
      className="grid grid-cols-4 gap-1"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            LIT.has(i)
              ? "bg-white"
              : "bg-white/25"
          }`}
        />
      ))}
    </div>
  )
}

function ToolNode({ name, icon, corner }) {
  return (
    <div
      className={`
        ${CORNER_ALIGN[corner]}
        flex flex-col items-center gap-1 sm:gap-1.5
        bg-badge
        border border-white/10
        rounded-xl
        py-1.5 sm:py-2
        w-20 xs:w-24 sm:w-25
      `}
    >
      <div
        className="
          w-6 h-6
          xs:w-7 xs:h-7
          sm:w-9 sm:h-9
          rounded-full
          bg-white/5
          border border-white/10
          flex items-center justify-center
          overflow-hidden
        "
      >
        {icon && (
          <img
            src={icon}
            alt={name}
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            loading="lazy"
          />
        )}
      </div>

      <span className="text-[11px] xs:text-xs sm:text-sm font-semibold text-white text-center leading-tight">
        {name}
      </span>

      <span className="flex items-center gap-1 text-[8px] xs:text-[9px] sm:text-[10px] text-emerald-400/90">
        <CheckIcon />
        in sync
      </span>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Connector                                                                  */
/* -------------------------------------------------------------------------- */

function ConnectorLine({ angle, delay = 0 }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 origin-left pointer-events-none"
      style={{
        transform: `rotate(${angle}deg)`,
      }}
      aria-hidden="true"
    >
      <div className="w-9 xs:w-12 sm:w-20 h-px bg-gradient-to-r from-[#B08A45]/70 to-transparent" />

      <span
        className="absolute top-1/2 left-0 w-1.5 h-1.5 rounded-full hub-dot"
        style={{
          animationDelay: `${delay}s`,
          backgroundColor: "#D9A867",
        }}
      />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Diagram                                                                    */
/* -------------------------------------------------------------------------- */

function SyncDiagram() {
  return (
    <div
      className="
        relative
        w-full
        aspect-[4/3]
        xs:aspect-[16/9]
        sm:aspect-[2/1]
        rounded-2xl
        border border-white/10
        bg-white/[0.02]
        h-[13rem]
        xs:h-[15rem]
        sm:h-[17rem]
      "
    >
      {/* Tool nodes */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-3 xs:p-5 sm:p-7">
        {TOOLS.map((tool) => (
          <ToolNode
            key={tool.name}
            {...tool}
          />
        ))}
      </div>

      {/* Connector lines */}
      {Object.entries(CORNER_ANGLE).map(
        ([corner, angle], i) => (
          <ConnectorLine
            key={corner}
            angle={angle}
            delay={i * 0.4}
          />
        )
      )}

      {/* Center hub */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-10 h-10
          xs:w-12 xs:h-12
          sm:w-16 sm:h-16
          rounded-full
          border border-[#B08A45]/60
          bg-white/5
          flex items-center justify-center
          shadow-[0_0_25px_rgba(176,138,69,0.08)]
        "
      >
        <HubGlyph />
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section                                                                    */
/* -------------------------------------------------------------------------- */

export default function SyncSection() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 max-w-5xl mx-auto">
      {/* Traveling dot animation */}
      <style>{`
        @keyframes hub-dot-travel {
          0% {
            transform: translateY(-50%) translateX(0);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            transform: translateY(-50%) translateX(5rem);
            opacity: 0;
          }
        }

        .hub-dot {
          transform: translateY(-50%);
          animation: hub-dot-travel 2.2s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hub-dot {
            animation: none;
            opacity: 0.6;
          }
        }
      `}</style>

      {/* Main gold bordered container */}
      <div
        className="
          border
          border-[#B08A45]
          rounded-3xl
          px-4
          py-8
          xs:px-6
          sm:px-12
          sm:py-14
          bg-white/[0.02]
          shadow-[0_0_35px_rgba(176,138,69,0.10)]
        "
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Copy */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-3 sm:mb-4">
              One source of truth
            </p>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
              And they finally talk to each other
            </h2>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              This is the part built-in memory can't do. You run ChatGPT
              for some things and Claude for others — normally they're
              strangers. With Unabyss they pull from the same context,
              so what one knows, they all know. One source of truth,
              every tool.
            </p>
          </div>

          {/* Diagram */}
          <SyncDiagram />
        </div>
      </div>
    </section>
  )
}