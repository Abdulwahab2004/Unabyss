import { useState, useRef, useEffect } from 'react'
import {
  Copy,
  Check,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react'

export default function ConnectClaude() {
  const sectionRef = useRef(null)

  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const setupMessage = "Let's set up Unabyss"

  /*
   * Scroll reveal animation
   *
   * The component starts hidden and animates into view
   * when approximately 15% of the section enters the viewport.
   */
  useEffect(() => {
    const element = sectionRef.current

    if (!element) return

    // Respect users who prefer reduced motion.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          // Animate only once.
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(setupMessage)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return (
    <section
      ref={sectionRef}
      className={`
        px-6
        py-24
        max-w-3xl
        mx-auto
        text-center
        transition-all
        duration-1000
        ease-out
        ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }
      `}
    >
      {/* Header */}
      <div
        className={`
          transition-all
          duration-700
          ease-out
          ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }
        `}
      >
        <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
          Connect
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
          Add Unabyss to Claude in two steps
        </h2>

        <p className="text-white/60 max-w-xl mx-auto leading-relaxed mb-14">
          Unabyss is an official connector in Claude's directory. Add it in
          one click, send one message, and every conversation pulls your real
          context.
        </p>
      </div>

      {/* =========================
          STEP 1
      ========================== */}
      <div
        className={`
          flex
          items-start
          gap-4
          text-left
          mb-3
          transition-all
          duration-700
          ease-out
          ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }
        `}
        style={{
          transitionDelay: '150ms',
        }}
      >
        {/* Step number */}
        <span
          className="
            hidden
            sm:flex
            w-8
            h-8
            rounded-full
            border
            border-white/20
            items-center
            justify-center
            text-sm
            font-semibold
            shrink-0
            mt-6
          "
        >
          1
        </span>

        {/* Connect card */}
        <div
          className="
            flex-1
            bg-gradient-to-r
            from-[#c1663f]
            to-[#b85a3a]
            rounded-2xl
            p-6
            flex
            flex-col
            sm:flex-row
            sm:items-center
            justify-between
            gap-4
          "
        >
          <div className="flex items-center gap-4 justify-center">
            {/* Claude icon */}
            <span
              className="text-2xl shrink-0 flex"
              aria-hidden="true"
            >
              <img
                src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='257'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20257'%3e%3cpath%20fill='%23fff'%20d='m50.228%20170.321%2050.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0%20125.796l.583-3.759%205.12-3.434%207.324.648%2016.202%201.101%2024.304%201.685%2017.629%201.037%2026.118%202.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758%207-7.713%209.397.649%202.398.648%209.527%207.323%2020.35%2015.75L94.817%2091.9l3.889%203.24%201.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42%200%2082.05%201.426l4.472%203.888%206.61%2015.101%2010.694%2023.786%2016.591%2032.34%204.861%209.592%202.592%208.879.973%202.722h1.685v-1.556l1.36-18.211%202.528-22.36%202.463-28.776.843-8.1%204.018-9.722%207.971-5.25%206.222%202.981%205.12%207.324-.713%204.73-3.046%2019.768-5.962%2030.98-3.889%2020.739h2.268l2.593-2.593%2010.499-13.934%2017.628-22.036%207.778-8.749%209.073-9.657%205.833-4.601h11.018l8.1%2012.055-3.628%2012.443-11.342%2014.388-9.398%2012.184-13.48%2018.147-8.426%2014.518.778%201.166%202.01-.194%2030.46-6.481%2016.462-2.982%2019.637-3.37%208.88%204.148.971%204.213-3.5%208.62-20.998%205.184-24.628%204.926-36.682%208.685-.454.324.519.648%2016.526%201.555%207.065.389h17.304l32.21%202.398%208.426%205.574%205.055%206.805-.843%205.184-12.962%206.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666%2011.406%2021.387%2019.314%2026.767%2024.887%201.36%206.157-3.434%204.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73%206.935%2025.017%2037.59%201.296%2011.536-1.814%203.76-6.481%202.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194%2077.448-3.37%203.953-7.778%202.981-6.48-4.925-3.436-7.972%203.435-15.749%204.148-20.544%203.37-16.333%203.046-20.285%201.815-6.74-.13-.454-1.49.194-15.295%2020.999-23.267%2031.433-18.406%2019.702-4.407%201.75-7.648-3.954.713-7.064%204.277-6.286%2025.47-32.405%2015.36-20.092%209.917-11.6-.065-1.686h-.583L44.07%20198.125l-12.055%201.555-5.185-4.86.648-7.972%202.463-2.593%2020.35-13.999-.064.065Z'/%3e%3c/svg%3e"
                alt=""
                height={45}
                width={45}
              />
            </span>

            <div>
              <h3 className="font-bold text-white">
                Connect Claude to Unabyss
              </h3>

              <p className="text-sm text-white/85 mt-0.5">
                Finish signing up and onboarding right inside Claude
              </p>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7a3420] bg-white rounded-full px-3 py-1 mt-3">
                <ShieldCheck size={12} />
                Official connector
              </span>
            </div>
          </div>

          {/* Claude connect button */}
          <a
            href="#"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-1.5
              bg-white
              text-[#8a4527]
              font-semibold
              px-5
              py-2.5
              rounded-full
              hover:bg-white/90
              hover:scale-[1.03]
              transition-all
              shrink-0
              self-start
              sm:self-center
            "
          >
            Connect
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Different agent */}
      <a
        href="#"
        className={`
          block
          text-sm
          text-white/40
          hover:text-white/70
          transition-all
          duration-700
          ease-out
          mb-12
          ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }
        `}
        style={{
          transitionDelay: '300ms',
        }}
      >
        Connect to a different agent
      </a>

      {/* =========================
          STEP 2
      ========================== */}
      <div
        className={`
          flex
          items-start
          gap-4
          text-left
          transition-all
          duration-700
          ease-out
          ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }
        `}
        style={{
          transitionDelay: '450ms',
        }}
      >
        {/* Step number */}
        <span
          className="
            hidden
            sm:flex
            w-8
            h-8
            rounded-full
            border
            border-white/20
            items-center
            justify-center
            text-sm
            font-semibold
            shrink-0
            mt-6
          "
        >
          2
        </span>

        {/* Setup card */}
        <div className="flex-1 bg-badge border border-white/10 rounded-2xl p-6">
          <h3 className="font-bold mb-1">
            Say hello to finish setup
          </h3>

          <p className="text-sm text-white/50 mb-6 leading-relaxed">
            Open a new chat in Claude and send this. Unabyss walks you
            through the rest right there.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Copy message */}
            <div className="flex items-center justify-between flex-1 bg-white/5 border border-white/10 rounded-full pl-5 pr-2 py-2">
              <span className="text-sm text-white/80">
                {setupMessage}
              </span>

              <button
                onClick={handleCopy}
                type="button"
                className="
                  flex
                  items-center
                  gap-1.5
                  text-sm
                  font-medium
                  bg-white/10
                  hover:bg-white/15
                  px-3
                  py-1.5
                  rounded-full
                  transition-colors
                  shrink-0
                "
              >
                {copied ? (
                  <Check size={14} />
                ) : (
                  <Copy size={14} />
                )}

                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Continue to Claude */}
            <a
              href="#"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                bg-white
                text-black
                font-semibold
                px-5
                py-3
                rounded-full
                hover:bg-white/90
                hover:scale-[1.03]
                transition-all
                whitespace-nowrap
              "
            >
              Continue in

              <span aria-hidden="true">
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='256'%20height='257'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20257'%3e%3cpath%20fill='%23D97757'%20d='m50.228%20170.321%2050.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0%20125.796l.583-3.759%205.12-3.434%207.324.648%2016.202%201.101%2024.304%201.685%2017.629%201.037%2026.118%202.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758%207-7.713%209.397.649%202.398.648%209.527%207.323%2020.35%2015.75L94.817%2091.9l3.889%203.24%201.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42%200%2082.05%201.426l4.472%203.888%206.61%2015.101%2010.694%2023.786%2016.591%2032.34%204.861%209.592%202.592%208.879.973%202.722h1.685v-1.556l1.36-18.211%202.528-22.36%202.463-28.776.843-8.1%204.018-9.722%207.971-5.25%206.222%202.981%205.12%207.324-.713%204.73-3.046%2019.768-5.962%2030.98-3.889%2020.739h2.268l2.593-2.593%2010.499-13.934%2017.628-22.036%207.778-8.749%209.073-9.657%205.833-4.601h11.018l8.1%2012.055-3.628%2012.443-11.342%2014.388-9.398%2012.184-13.48%2018.147-8.426%2014.518.778%201.166%202.01-.194%2030.46-6.481%2016.462-2.982%2019.637-3.37%208.88%204.148.971%204.213-3.5%208.62-20.998%205.184-24.628%204.926-36.682%208.685-.454.324.519.648%2016.526%201.555%207.065.389h17.304l32.21%202.398%208.426%205.574%205.055%206.805-.843%205.184-12.962%206.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666%2011.406%2021.387%2019.314%2026.767%2024.887%201.36%206.157-3.434%204.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73%206.935%2025.017%2037.59%201.296%2011.536-1.814%203.76-6.481%202.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194%2077.448-3.37%203.953-7.778%202.981-6.48-4.925-3.436-7.972%203.435-15.749%204.148-20.544%203.37-16.333%203.046-20.285%201.815-6.74-.13-.454-1.49.194-15.295%2020.999-23.267%2031.433-18.406%2019.702-4.407%201.75-7.648-3.954.713-7.064%204.277-6.286%2025.47-32.405%2015.36-20.092%209.917-11.6-.065-1.686h-.583L44.07%20198.125l-12.055%201.555-5.185-4.86.648-7.972%202.463-2.593%2020.35-13.999-.064.065Z'/%3e%3c/svg%3e"
                  alt=""
                  height={20}
                  width={20}
                />
              </span>

              Claude

              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}