import SpotlightContaier from "../SpotLightContainer"

const SOURCES = [
  {
    name: "Gmail",
    icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%2049.4%20512%20399.42'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3cg%20fill-rule='nonzero'%3e%3cpath%20fill='%234285f4'%20d='M34.91%20448.818h81.454V251L0%20163.727V413.91c0%2019.287%2015.622%2034.91%2034.91%2034.91z'/%3e%3cpath%20fill='%2334a853'%20d='M395.636%20448.818h81.455c19.287%200%2034.909-15.622%2034.909-34.909V163.727L395.636%20251z'/%3e%3cpath%20fill='%23fbbc04'%20d='M395.636%2099.727V251L512%20163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z'/%3e%3c/g%3e%3cpath%20fill='%23ea4335'%20d='M116.364%20251V99.727L256%20204.455%20395.636%2099.727V251L256%20355.727z'/%3e%3cpath%20fill='%23c5221f'%20fill-rule='nonzero'%20d='M0%20117.182v46.545L116.364%20251V99.727L83.782%2075.291C49.25%2049.4%200%2074.04%200%20117.18z'/%3e%3c/g%3e%3c/svg%3e",
  },
  {
    name: "Notion",
    icon: "https://cdn.simpleicons.org/notion/FFFFFF",
  },
  {
    name: "Calendar",
    icon: "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23google_calendar__clip0_5072_3766)'%3e%3cpath%20d='M390.736%20121.264H121.264V390.736H390.736V121.264Z'%20fill='white'/%3e%3cpath%20d='M390.736%20512L512%20390.736L451.368%20380.392L390.736%20390.736L379.67%20446.196L390.736%20512Z'%20fill='%23EA4335'/%3e%3cpath%20d='M0%20390.736V471.578C0%20493.912%2018.088%20512%2040.42%20512H121.264L133.714%20451.368L121.264%20390.736L55.198%20380.392L0%20390.736Z'%20fill='%23188038'/%3e%3cpath%20d='M512%20121.264V40.42C512%2018.088%20493.912%200%20471.58%200H390.736C383.36%2030.072%20379.671%2052.2027%20379.67%2066.392C379.67%2080.58%20383.359%2098.8707%20390.736%20121.264C417.556%20128.944%20437.767%20132.784%20451.368%20132.784C464.969%20132.784%20485.18%20128.945%20512%20121.264Z'%20fill='%231967D2'/%3e%3cpath%20d='M512%20121.264H390.736V390.736H512V121.264Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M390.736%20390.736H121.264V512H390.736V390.736Z'%20fill='%2334A853'/%3e%3cpath%20d='M390.736%200H40.422C18.088%200%200%2018.088%200%2040.42V390.736H121.264V121.264H390.736V0Z'%20fill='%234285F4'/%3e%3cpath%20d='M176.54%20330.308C166.468%20323.504%20159.494%20313.568%20155.688%20300.428L179.066%20290.796C181.186%20298.88%20184.891%20305.145%20190.182%20309.592C195.436%20314.038%20201.836%20316.228%20209.314%20316.228C216.959%20316.228%20223.527%20313.903%20229.018%20309.254C234.51%20304.606%20237.272%20298.678%20237.272%20291.504C237.272%20284.16%20234.375%20278.164%20228.582%20273.516C222.788%20268.868%20215.512%20266.544%20206.822%20266.544H193.314V243.404H205.44C212.917%20243.404%20219.216%20241.382%20224.336%20237.338C229.456%20233.298%20232.016%20227.772%20232.016%20220.732C232.016%20214.468%20229.726%20209.482%20225.146%20205.744C220.566%20202.004%20214.77%20200.118%20207.73%20200.118C200.858%20200.118%20195.402%20201.938%20191.36%20205.608C187.319%20209.289%20184.282%20213.937%20182.534%20219.116L159.394%20209.482C162.458%20200.792%20168.084%20193.112%20176.336%20186.476C184.588%20179.84%20195.132%20176.506%20207.932%20176.506C217.398%20176.506%20225.92%20178.326%20233.466%20181.996C241.01%20185.668%20246.938%20190.754%20251.216%20197.222C255.496%20203.722%20257.616%20210.998%20257.616%20219.082C257.616%20227.334%20255.63%20234.308%20251.656%20240.034C247.682%20245.76%20242.796%20250.138%20237.002%20253.204V254.584C244.483%20257.669%20250.982%20262.735%20255.798%20269.238C260.682%20275.806%20263.142%20283.654%20263.142%20292.818C263.142%20301.978%20260.816%20310.164%20256.168%20317.338C251.52%20324.514%20245.088%20330.172%20236.934%20334.282C228.75%20338.392%20219.554%20340.482%20209.348%20340.482C197.524%20340.514%20186.612%20337.112%20176.54%20330.308ZM320.132%20214.298L294.466%20232.858L281.632%20213.39L327.678%20180.176H345.328V336.842H320.132V214.298Z'%20fill='%234285F4'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='google_calendar__clip0_5072_3766'%3e%3crect%20width='512'%20height='512'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
  },
  {
    name: "Linear",
    icon: "https://cdn.simpleicons.org/linear/FFFFFF",
  },
]

const PROFILE_FIELDS = [
  ["Role", "Founder"],
  ["Project", "Ingest"],
  ["Focus", "Growth"],
  ["Stack", "MCP"],
]

const MCP_TOOLS = [
  {
    name: "Claude",
    icon: "data:image/svg+xml,<svg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='257'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20257'><path%20fill='%23D97757'%20d='m50.228%20170.321%2050.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0%20125.796l.583-3.759%205.12-3.434%207.324.648%2016.202%201.101%2024.304%201.685%2017.629%201.037%2026.118%202.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758%207-7.713%209.397.649%202.398.648%209.527%207.323%2020.35%2015.75L94.817%2091.9l3.889%203.24%201.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42%200%2082.05%201.426l4.472%203.888%206.61%2015.101%2010.694%2023.786%2016.591%2032.34%204.861%209.592%202.592%208.879.973%202.722h1.685v-1.556l1.36-18.211%202.528-22.36%202.463-28.776.843-8.1%204.018-9.722%207.971-5.25%206.222%202.981%205.12%207.324-.713%204.73-3.046%2019.768-5.962%2030.98-3.889%2020.739h2.268l2.593-2.593%2010.499-13.934%2017.628-22.036%207.778-8.749%209.073-9.657%205.833-4.601h11.018l8.1%2012.055-3.628%2012.443-11.342%2014.388-9.398%2012.184-13.48%2018.147-8.426%2014.518.778%201.166%202.01-.194%2030.46-6.481%2016.462-2.982%2019.637-3.37%208.88%204.148.971%204.213-3.5%208.62-20.998%205.184-24.628%204.926-36.682%208.685-.454.324.519.648%2016.526%201.555%207.065.389h17.304l32.21%202.398%208.426%205.574%205.055%206.805-.843%205.184-12.962%206.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666%2011.406%2021.387%2019.314%2026.767%2024.887%201.36%206.157-3.434%204.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73%206.935%2025.017%2037.59%201.296%2011.536-1.814%203.76-6.481%202.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194%2077.448-3.37%203.953-7.778%202.981-6.48-4.925-3.436-7.972%203.435-15.749%204.148-20.544%203.37-16.333%203.046-20.285%201.815-6.74-.13-.454-1.49.194-15.295%2020.999-23.267%2031.433-18.406%2019.702-4.407%201.75-7.648-3.954.713-7.064%204.277-6.286%2025.47-32.405%2015.36-20.092%209.917-11.6-.065-1.686h-.583L44.07%20198.125l-12.055%201.555-5.185-4.86.648-7.972%202.463-2.593%2020.35-13.999-.064.065Z'/></svg>",
  },
  {
    name: "Cursor",
    icon: "https://cdn.simpleicons.org/cursor/FFFFFF",
  },
  {
    name: "ChatGPT",
    icon: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='260'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20260'%3e%3cpath%20fill='%23fff'%20d='M239.184%20106.203a64.716%2064.716%200%200%200-5.576-53.103C219.452%2028.459%20191%2015.784%20163.213%2021.74A65.586%2065.586%200%200%200%2052.096%2045.22a64.716%2064.716%200%200%200-43.23%2031.36c-14.31%2024.602-11.061%2055.634%208.033%2076.74a64.665%2064.665%200%200%200%205.525%2053.102c14.174%2024.65%2042.644%2037.324%2070.446%2031.36a64.72%2064.72%200%200%200%2048.754%2021.744c28.481.025%2053.714-18.361%2062.414-45.481a64.767%2064.767%200%200%200%2043.229-31.36c14.137-24.558%2010.875-55.423-8.083-76.483Zm-97.56%20136.338a48.397%2048.397%200%200%201-31.105-11.255l1.535-.87%2051.67-29.825a8.595%208.595%200%200%200%204.247-7.367v-72.85l21.845%2012.636c.218.111.37.32.409.563v60.367c-.056%2026.818-21.783%2048.545-48.601%2048.601Zm-104.466-44.61a48.345%2048.345%200%200%201-5.781-32.589l1.534.921%2051.722%2029.826a8.339%208.339%200%200%200%208.441%200l63.181-36.425v25.221a.87.87%200%200%201-.358.665l-52.335%2030.184c-23.257%2013.398-52.97%205.431-66.404-17.803ZM23.549%2085.38a48.499%2048.499%200%200%201%2025.58-21.333v61.39a8.288%208.288%200%200%200%204.195%207.316l62.874%2036.272-21.845%2012.636a.819.819%200%200%201-.767%200L41.353%20151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466%2041.695-63.08-36.63L161.73%2077.86a.819.819%200%200%201%20.768%200l52.233%2030.184a48.6%2048.6%200%200%201-7.316%2087.635v-61.391a8.544%208.544%200%200%200-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39%208.39%200%200%200-8.492%200L99.98%2099.808V74.587a.716.716%200%200%201%20.307-.665l52.233-30.133a48.652%2048.652%200%200%201%2072.236%2050.391v.205ZM88.061%20139.097l-21.845-12.585a.87.87%200%200%201-.41-.614V65.685a48.652%2048.652%200%200%201%2079.757-37.346l-1.535.87-51.67%2029.825a8.595%208.595%200%200%200-4.246%207.367l-.051%2072.697Zm11.868-25.58%2028.138-16.217%2028.188%2016.218v32.434l-28.086%2016.218-28.188-16.218-.052-32.434Z'/%3e%3c/svg%3e",
  },
]

const STEPS = [
  {
    time: "0:30",
    title: "Connect your sources",
    desc: "Pick at least two — Gmail, Notion, Calendar, GitHub, Linear. One click each.",
    barClass: "bg-white/70",
  },
  {
    time: "0:60",
    title: "Your context builds itself",
    desc: "Everything gets pulled and organized into a structured profile automatically. No forms, no manual writing.",
    barClass: "bg-accent",
  },
  {
    time: "0:90",
    title: "Plug it into your AI over MCP",
    desc: "Add it as an MCP connection in Claude, Cursor, ChatGPT, or your automation tool — and it already knows you from the first message.",
    barClass: "bg-white/10",
  },
]

/* -------------------------------------------------------------------------- */
/* Small presentational pieces                                                */
/* -------------------------------------------------------------------------- */

function StatusDot({ className = "" }) {
  return (
    <span
      className={`w-1.5 h-1.5 rounded-full ${className}`}
      aria-hidden="true"
    />
  )
}

function LogoSlot({
  icon,
  size = "w-7 h-7",
  rounded = "rounded-md",
}) {
  return (
    <span
      className={`${size} ${rounded} bg-white/5 shrink-0 flex items-center justify-center overflow-hidden`}
      aria-hidden="true"
    >
      {icon ? (
        <img
          src={icon}
          alt=""
          className="w-[65%] h-[65%] object-contain"
        />
      ) : null}
    </span>
  )
}

function SourceRow({ name, icon }) {
  return (
    <div className="flex items-center justify-between gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3">
      <div className="flex items-center gap-3 min-w-0">
        <LogoSlot icon={icon} />

        <span className="text-sm font-medium text-white truncate">
          {name}
        </span>
      </div>

      <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400/90 shrink-0">
        <StatusDot className="bg-emerald-400" />
        Connected
      </span>
    </div>
  )
}

function SourcesPanel() {
  return (
    <ul
      className="flex flex-col gap-2.5"
      aria-label="Connected sources"
    >
      {SOURCES.map((source) => (
        <li key={source.name}>
          <SourceRow {...source} />
        </li>
      ))}
    </ul>
  )
}

function ProfilePanel() {
  return (
    <div className="flex h-full items-center justify-center py-4">
      <div className="w-full bg-amber-950/10 border border-accent/30 rounded-2xl px-4 py-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
          <StatusDot className="bg-accent" />
          Structured profile
        </p>

        <div className="grid grid-cols-2 gap-2">
          {PROFILE_FIELDS.map(([key, value]) => (
            <div
              key={key}
              className="bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-xs sm:text-sm"
            >
              <span className="text-white/40">
                {key}:{" "}
              </span>

              <span className="text-white font-medium">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MCPToolCard({ name, icon }) {
  return (
    <div className="flex flex-col items-center gap-2 bg-white/[0.03] border border-white/10 rounded-xl px-2 py-4">
      <LogoSlot
        icon={icon}
        size="w-8 h-8"
        rounded="rounded-full"
      />

      <span className="text-xs sm:text-sm font-medium text-white">
        {name}
      </span>

      <span className="flex items-center gap-1 text-[10px] text-white/35">
        <span
          className="w-2.5 h-2.5 rounded-full bg-white/10"
          aria-hidden="true"
        />

        Isolated
      </span>
    </div>
  )
}

function MCPPanel() {
  return (
    <div className="flex flex-col gap-4">
      {/* Unabyss MCP header */}
      <div className="flex items-center justify-between gap-2 bg-amber-950/15 border border-accent/25 rounded-xl px-4 py-3">
        <div className="flex items-center gap-2 min-w-0">
          {/* Replace this URL with your actual Unabyss logo URL */}
          <LogoSlot
            icon="/unabyss.svg"
            size="w-6 h-6"
          />

          <span className="text-sm font-semibold text-white truncate">
            Unabyss · MCP
          </span>
        </div>

        <span className="text-[11px] text-accent/80 shrink-0">
          context layer
        </span>
      </div>

      {/* MCP tools */}
      <div className="grid grid-cols-3 gap-2">
        {MCP_TOOLS.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center"
          >
            <div
              className="w-px h-3 bg-white/15"
              aria-hidden="true"
            />

            <MCPToolCard {...tool} />
          </div>
        ))}
      </div>
    </div>
  )
}

const PANELS = [
  SourcesPanel,
  ProfilePanel,
  MCPPanel,
]

/* -------------------------------------------------------------------------- */
/* Section                                                                     */
/* -------------------------------------------------------------------------- */

export default function SetupSteps() {
  return (
    <section className="px-6 py-[4.2rem] max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
          The plus
        </p>

        <h2 className="text-3xl sm:text-[2.8rem] font-bold tracking-tight mb-4">
          90 seconds set-up
        </h2>

        <p className="text-white/60 max-w-xl mx-auto">
          Connect to at least two tools. Wait for Unabyss to extract and
          structure information. Use it in any AI.
        </p>
      </div>

      {/* Steps */}
      <SpotlightContaier
        className="
          bg-badge
          border
          border-white/10
          rounded-3xl
          overflow-hidden
          divide-y
          divide-white/10
          md:divide-y-0
          md:grid
          md:grid-cols-3
          md:divide-x
        "
      >
        {STEPS.map((step, i) => {
          const Panel = PANELS[i]

          return (
            <div
              key={step.time}
              className="flex flex-col justify-between px-6 py-8 gap-10"
            >
              {/* Visual panel */}
              <Panel />

              {/* Step information */}
              <div>
                <span className="text-xs font-medium text-accent tracking-wide">
                  {step.time}
                </span>

                <h3 className="text-xl font-bold text-white mt-2 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-white/55 leading-relaxed mb-5">
                  {step.desc}
                </p>

                {/* Progress bar */}
                <div className="h-[2px] w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${step.barClass}`}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </SpotlightContaier>

      {/* Setup guide link */}
      <div className="mt-10 text-center">
        <a
          href="#setup-guides"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors"
        >
          New to MCP? Follow our setup guides.

          <span aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </section>
  )
}