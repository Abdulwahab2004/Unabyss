import { ArrowUpRight } from 'lucide-react'

const ARTICLES = [
  {
    slug: 'markdown-files-arent-enough',
    title: "Why Markdown Files Aren't Enough to Give AI Memory",
    excerpt:
      "The advice sounds simple: give the AI a file. Write down who you are, what you're working on, and your rules in a plain text document, hand it to the tool, and stop repeating yourself. For a week...",
    coverImage: "https://unabyss.com/_app/immutable/assets/blog-cover-27.wrx7NoCB.webp",
    author: { name: 'Philip Kubinski', avatar: "https://unabyss.com/_app/immutable/assets/filip-photo-200.CpufcAev.jpg" },
    date: '14 August 2026',
    readTime: '6 min read',
    href: "https://unabyss.com/blog/why-markdown-files-arent-enough-for-ai-memory",
  },
  {
    slug: 'ai-suggests-rejected-thing',
    title: 'Why Your AI Keeps Suggesting the Thing You Already Rejected',
    excerpt:
      "You come back to a project after three weeks away. You open Claude Code, describe what you're building, and it confidently proposes an approach - the exact one you tried in June, watched fail...",
    coverImage: "https://unabyss.com/_app/immutable/assets/blog-cover-13.cz-LdaY9.webp",
    author: { name: 'Stas Morawski', avatar: "https://unabyss.com/_app/immutable/assets/stas-photo-200.CHU4kqtL.jpg" },
    date: '13 August 2026',
    readTime: '7 min read',
    href: "https://unabyss.com/blog/why-ai-suggests-rejected-approaches",
  },
  {
    slug: 'hubspot-mcp-server',
    title: 'What Is the HubSpot MCP Server? (What It Does, and Where It Breaks Down)',
    excerpt:
      'You want your AI tool to answer questions about your pipeline without you exporting a CSV first. "Which deals in my book haven\'t moved in two weeks?" - typed into Claude or Cursor, answered from...',
    coverImage: "https://unabyss.com/_app/immutable/assets/blog-cover-06.PZRu6bt4.webp",
    author: { name: 'Marcin Uchacz', avatar: "https://unabyss.com/_app/immutable/assets/marcin-photo-200.BKM3whGQ.jpg" },
    date: '12 August 2026',
    readTime: '6 min read',
    href: "https://unabyss.com/blog/what-is-hubspot-mcp-server",
  },
]

function ArticleCard({ article }) {
  return (
    <a
      href={article.href}
      className="group flex flex-col bg-badge border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors h-full"
    >
      {/* IMAGE SLOT — replace coverImage in ARTICLES with your actual cover art path/URL */}
      <div className="relative h-48 bg-black overflow-hidden">
        {article.coverImage && (
          <img
            src={article.coverImage}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        )}

        <span className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-medium bg-black/60 backdrop-blur px-3 py-1.5 rounded-full">
          Read article
          <ArrowUpRight size={12} />
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-bold text-lg leading-snug mb-3">{article.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-6 line-clamp-4">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-2.5 mt-auto pt-4">
          {/* AVATAR SLOT — replace author.avatar with a real headshot URL */}
          <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 overflow-hidden shrink-0">
            {article.author.avatar && (
              <img
                src={article.author.avatar}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <span className="text-xs font-medium text-white/80 truncate">
            {article.author.name}
          </span>
          <span className="text-xs text-white/30 shrink-0">·</span>
          <span className="text-xs text-white/40 shrink-0">{article.date}</span>
          <span className="text-xs text-white/30 shrink-0">·</span>
          <span className="text-xs text-white/40 shrink-0 whitespace-nowrap">
            {article.readTime}
          </span>
        </div>
      </div>
    </a>
  )
}

export default function BlogSection() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <p className="text-center text-xs uppercase tracking-widest text-white/40 mb-4">
        Blog
      </p>
      <h2 className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        From the Unabyss Vault
      </h2>
      <p className="text-center text-white/50 max-w-xl mx-auto mb-14 leading-relaxed">
        Guides on personal context for AI - what it is, how to build it, and
        why it matters.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://unabyss.com/blog"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
        >
          View all articles
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  )
}