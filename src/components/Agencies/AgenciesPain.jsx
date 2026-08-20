import peacocks from "../../assets/logos/peacocks.png"
import peacockshover from "../../assets/logos/peacockshover.png"
import middle from "../../assets/logos/middle.png"
import middlehover from "../../assets/logos/middlehover.png"
import feather from "../../assets/logos/feather.png"
import featherhover from "../../assets/logos/featherhover.png"
const CARDS = [
  {
    id: 'context-switch',
    title: 'Every client is a context switch',
  desc:"Close Client A, open Client B, and re-orient the AI on a different engagement - scope, history, what was agreed - every single time.",
   image: peacocks,
    hoverImage: peacockshover,
  },
  {
    id: 'blank-slate',
    title: 'Your files go stale the moment you write them',
desc:"A .md context file is a snapshot. It never heard today's call or the feedback in Slack, so your AI works from a brief that's already behind.",
    image: middle,
    hoverImage: middlehover,
  },
  {
    id: 'strangers',
    title: "Your tools don't talk to each other",
  desc:"The file in one project can't help the next, and ChatGPT and Claude each know only what you pasted. So you maintain a dozen of them by hand.",
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
        How agencies do this today (and why it breaks)
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {CARDS.map((card) => (
          <PainCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}