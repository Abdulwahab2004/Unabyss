import peacocks from "../../assets/logos/peacocks.png"
import peacockshover from "../../assets/logos/peacockshover.png"
import middle from "../../assets/logos/middle.png"
import middlehover from "../../assets/logos/middlehover.png"
import feather from "../../assets/logos/feather.png"
import featherhover from "../../assets/logos/featherhover.png"
const CARDS = [
  {
    id: 'context-switch',
    title: 'You context-switch all day',
    desc: "A fundraising call, then a product decision, then a hiring loop, then a customer escalation - all before lunch. You're the most context-switched person in the company.",
    image: peacocks,
    hoverImage: peacockshover,
  },
  {
    id: 'blank-slate',
    title: 'Every AI tool is a blank slate',
    desc: "Whatever you reach for starts from zero. It knows nothing about the raise, the roadmap, or the hire you're deciding on right now.",
    image: middle,
    hoverImage: middlehover,
  },
  {
    id: 'strangers',
    title: 'Your tools are strangers',
    desc: 'You use ChatGPT for some work and Claude for others, and what you built up in one is invisible to the next. So you re-explain the company - again - just to get a useful answer.',
    image: feather,
    hoverImage: featherhover,
  },
]

function PainCard({ card }) {
  return (
    <div className="group/img flex flex-col bg-badge border border-white/10 rounded-2xl overflow-hidden h-full">
      {/* Image area — crossfades to hoverImage on hover */}
      <div className="relative h-120 sm:h-120 bg-black overflow-hidden">
        {card.image && (
          <img
            src={card.image}
            alt=""
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
              card.hoverImage ? 'group-hover/img:opacity-0' : ''
            }`}
          />
        )}
        {card.hoverImage && (
          <img
            src={card.hoverImage}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover/img:opacity-100"
          />
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-3">{card.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{card.desc}</p>
      </div>
    </div>
  )
}

export default function FoundersPain() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-4">
        The pain
      </p>
      <h2 className="text-center text-3xl sm:text-5xl font-bold tracking-tight mb-16">
        The problem founders feel every day
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {CARDS.map((card) => (
          <PainCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}