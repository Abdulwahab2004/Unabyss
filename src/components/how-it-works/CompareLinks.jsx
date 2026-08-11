import SpotLightContainer from "../SpotLightContainer"
import { useState } from 'react'

const LINKS = [
  {
    title: 'Unabyss vs. built-in AI memory',
    desc: "Built-in memory is useful, but it’s trapped in one tool — what ChatGPT learns stays in ChatGPT, and Claude’s memory can’t help Cursor. Unabyss is a context layer you own, served to every AI tool over MCP.",
    href: 'https://unabyss.com/unabyss-vs-llm-memory',
  },
  {
    title: 'Unabyss vs. context files',
    desc: 'A .md context file is a snapshot that goes stale within a week, and you re-paste it into every tool. Unabyss stays connected to your sources, so context is always current and delivered automatically everywhere.',
    href: 'https://unabyss.com/unabyss-vs-context-files',
  },
  {
    title: 'Unabyss vs. building your own context system',
    desc: "GitHub repos, Karpathy's LLM Wiki, gBrain - all genuinely good, but they're systems you build, run, and maintain yourself. Unabyss is a managed context layer that delivers value on day one, no upkeep required.",
    href: 'https://unabyss.com/unabyss-vs-external-knowledge',
  },
]

export default function CompareLinks() {
  const [openItems, setOpenItems] = useState(new Set([0]))

  const toggleItem = (index) => {
    setOpenItems((current) => {
      const next = new Set(current)

      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }

      return next
    })
  }

  return (
    <section className="bg-[#101010] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[940px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-white/35">
            Compare
          </p>

          <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[45px]">
            Comparing something else?
          </h2>

          <p className="mt-8 text-[19px] leading-relaxed text-white/55">
            Weighing Unabyss against another way of giving AI context?
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-[14px]">
          {LINKS.map((link, index) => {
            const isOpen = openItems.has(index)

            return (
              <div
                key={link.href}
                className="overflow-hidden rounded-[17px] border border-white/[0.08] bg-[#1e1e1e] sm:w-[55rem] mx-auto"
              >
                {/* Clickable header */}
                <SpotLightContainer>

                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-[26px] py-[19px] text-left sm:px-[27px]"
                  >
                  <h3 className="text-[18px] font-medium tracking-[-0.01em] text-white/85">
                    {link.title}
                  </h3>

                  {/* + / - */}
                  <span
                    aria-hidden="true"
                    className={[
                        'flex h-[30px] w-[30px] shrink-0 items-center justify-center',
                        'rounded-full border transition-all duration-200',
                        isOpen
                        ? 'border-[#8b6d35] text-[#c99b4a]'
                        : 'border-white/[0.13] text-white/50',
                    ].join(' ')}
                    >
                    <span className="relative block h-3 w-3">
                      {/* Horizontal line */}
                      <span
                        className={[
                            'absolute left-0 top-[5px] h-px w-3',
                            'transition-colors duration-200',
                            isOpen ? 'bg-[#c99b4a]' : 'bg-white/50',
                        ].join(' ')}
                        />

                      {/* Vertical line disappears when open */}
                      <span
                        className={[
                            'absolute left-[5px] top-0 h-3 w-px',
                            'bg-white/50 transition-all duration-200',
                            isOpen
                            ? 'scale-y-0 opacity-0'
                            : 'scale-y-100 opacity-100',
                        ].join(' ')}
                        />
                    </span>
                  </span>
                </button>
                        </SpotLightContainer>

                {/* Expandable content */}
                <SpotLightContainer>

                <div
                  className={[
                      'grid transition-[grid-template-rows] duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    ].join(' ')}
                    >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-[26px] pb-[24px] sm:px-[27px]">
                      <p className="max-w-[800px] text-[17px] leading-[1.7] text-white/55">
                        {link.desc}
                      </p>

                      <a
                        href={link.href}
                        onClick={(event) => event.stopPropagation()}
                        className="mt-5 inline-flex items-center gap-2 text-[16px] font-medium text-[#d2a75c] transition-colors hover:text-[#e0b970]"
                        >
                        Read the full comparison
                        <span className="text-[19px] leading-none">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
                          </SpotLightContainer>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}