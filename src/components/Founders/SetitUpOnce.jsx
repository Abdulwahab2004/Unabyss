
import animal from '../../assets/logos/animal.png'
import animalhover from '../../assets/logos/animalhover.png'
const LAYOUT = {
  imageWidthDesktop: 400, 
  imageHeightMobile: 260, 
  minHeight: 420, 
  radius: 24, 
}

const CONTENT = {
  heading: 'Set it up once, then forget it',
  body: "Connect your sources - Gmail, Calendar, Notion, Slack - and Unabyss builds a structured picture of your company automatically. It stays current as things change: new raise, new hire, new priority. You don't maintain it; it maintains itself.",
  cta: { label: 'Connect your first source', href: '#' },
}

const IMAGES = {
  default: animal,
  hover: animalhover,
}

function ImagePanel() {
  return (
    <div className="group relative h-[var(--img-h)] w-full overflow-hidden rounded-[var(--radius)] md:h-full">
      {/* Default image */}
      <div
        className="absolute inset-0 bg-white/5 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0"
        style={
          IMAGES.default
            ? { backgroundImage: `url('${IMAGES.default}')` }
            : {
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1.4px)',
                backgroundSize: '10px 10px',
              }
        }
        aria-hidden="true"
      />

      {/* Hover image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={
          IMAGES.hover
            ? { backgroundImage: `url('${IMAGES.hover}')` }
            : {
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,0.32) 1px, transparent 1.4px)',
                backgroundSize: '8px 8px',
              }
        }
        aria-hidden="true"
      />
    </div>
  )
}

export default function SetupCard() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div
        className=" mx-auto flex max-w-5xl flex-col overflow-hidden rounded-[var(--radius)] border border-white/10 bg-badge md:min-h-[var(--card-min-h)] md:flex-row"
        style={{
          '--img-h': `${LAYOUT.imageHeightMobile}px`,
          '--img-w': `${LAYOUT.imageWidthDesktop}px`,
          '--card-min-h': `${LAYOUT.minHeight}px`,
          '--radius': `${LAYOUT.radius}px`,
        }}
      >
        {/* Left: image slot */}
        <div className="w-full shrink-0 md:w-[var(--img-w)]">
          <ImagePanel />
        </div>

        {/* Right: copy */}
        <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:px-10 sm:py-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {CONTENT.heading}
          </h2>
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            {CONTENT.body}
          </p>
          <a
            href={CONTENT.cta.href}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            {CONTENT.cta.label}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}