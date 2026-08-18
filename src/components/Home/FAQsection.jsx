import { useEffect, useRef, useState } from 'react'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'Is this a shared team knowledge base?',
    a: "No. We deliberately mirror your team's access structure. Team is one subscription, one invoice, and one set of admin controls over a group of people, but each person keeps their own context, within the access levels they already have.",
  },
  {
    q: 'Is there a way to share my context with my teammates?',
    a: 'Yes. You securely share your MCP token with them. They would then need to configure their agent to use your context in some situations and their own in others.',
  },
  {
    q: "Can an admin read what's in a teammate's context?",
    a: "No. Admins manage seats, invites, roles, and billing. There is no admin view of a member's context and no way to export it to the company.",
  },
  {
    q: 'What happens when someone leaves?',
    a: 'An admin removes them, their access ends immediately, and their Unabyss context is purged. The seat frees up for the next hire. Nothing is left sitting in a dormant account.',
  },
  {
    q: 'How secure is Unabyss?',
    a: 'Your data stays yours. Everything is encrypted, read-only by design, never used to train AI models, and always under your control - you can disconnect integrations or permanently delete your data at any time. We are also going through SOC 2 Type II certification, and we are compliant with GDPR. Read the full details.',
  },
  {
    q: 'How do teammates join?',
    a: 'An admin sends an invite by email and the teammate creates their Unabyss account from that invite. Invites are good for 7 days',
  },
  {
    q: 'Can someone keep a personal plan alongside Team?',
    a: 'When Team activates, an existing personal Pro or Max subscription ends so there is no double billing, and the Team seat replaces it with equal or better access. You can, however, run two accounts on two different email addresses and split personal and team context that way.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="mb-[12px] overflow-hidden rounded-[18px] border border-white/[0.09] last:mb-0 bg-[#171717]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between px-[24px] py-[20px] text-left transition-colors duration-200 ${
          isOpen ? 'bg-[#1b1b1b]' : 'bg-[#171717] hover:bg-white/[0.015]'
        }`}
      >
        <span className="pr-6 text-[14px] font-medium text-white/90">
          {item.q}
        </span>

        <span
          className="flex shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <Plus size={16} strokeWidth={1.5} className="text-white/40" />
        </span>
      </button>

      {/* Animated answer — grid-template-rows trick gives a smooth
          height transition without needing a fixed/measured height */}
      <div
        className="grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="bg-[#1b1b1b] px-[24px] pb-[21px]">
            <p className="max-w-[850px] text-[13px] leading-[1.7] text-white/45">
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.unobserve(element)
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0f0f0f] px-4 sm:px-6 py-24"
    >
      <div
        className={`transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.31em] text-white/35">
          FAQ
        </p>

        <h2 className="mt-[24px] text-center text-[40px] font-semibold leading-none tracking-[-0.03em] text-white">
          Questions teams ask
        </h2>

        <div className="mx-auto mt-[48px] bg-transparent" style={{ maxWidth: '900px' }}>
          {FAQS.map((item, index) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}