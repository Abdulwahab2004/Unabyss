import peacocks from "../../assets/logos/peacocks.png"
import peacockshover from "../../assets/logos/peacockshover.png"
import middle from "../../assets/logos/middle.png"
import middlehover from "../../assets/logos/middlehover.png"
import feather from "../../assets/logos/feather.png"
import featherhover from "../../assets/logos/featherhover.png"
const CARDS = [
  {
    id: 'context-switch',
    title: 'Context changes every week',
 desc:"New positioning, a fresh campaign, a deal that moved yesterday. The picture shifts constantly, and keeping every tool current is a job in itself.", image: peacocks,
    hoverImage: peacockshover,
  },
  {
    id: 'blank-slate',
    title: 'Every AI tool starts blank',
desc:"Open any assistant and it knows nothing about the brand, the account, or what shipped. You re-explain it all before you get a usable draft.",  image: middle,
    hoverImage: middlehover,
  },
  {
    id: 'strangers',
    title: "Your tools are strangers",
 desc:"You run ChatGPT for some work and Claude for others - what you built up in one is invisible to the next, so the team re-briefs each tool from scratch.",  image: feather,
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
        The problem GTM teams feel every day
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {CARDS.map((card) => (
          <PainCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}