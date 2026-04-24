import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Building a Brand From Zero With No-Code", description: "How three entrepreneurs went from idea to live website in under 48 hours using only their phones.", label: "Featured · 15 min", imageUrl: "", url: "#" },
  { title: "The Power of Micro-Interactions", description: "Subtle animations that delight users and boost engagement.", label: "UX · 6 min", imageUrl: "", url: "#" },
  { title: "Structured Data and Rich Snippets Explained", description: "Get your content to stand out in search results with schema markup.", label: "SEO · 4 min", imageUrl: "", url: "#" },
  { title: "Launching Your SaaS in Africa: A Primer", description: "Payment gateways, localization, and market entry strategies.", label: "Business · 9 min", imageUrl: "", url: "#" },
];

export default function Blog015(props: BlockProps) {
  const { theme, heading = "Featured & Recent", items = DEFAULT_ITEMS } = props;

  const featured = items[0];
  const rest = items.slice(1, 4);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <a href={featured?.url ?? "#"} className="group lg:col-span-3 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
            <div className="aspect-video md:aspect-auto" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
              {featured?.imageUrl && <img src={featured.imageUrl} alt={featured.title ?? ""} className="w-full h-full object-cover" />}
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(featured?.label ?? "")}</span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold group-hover:underline">{featured?.title}</h3>
              <p className="mt-3 opacity-70">{featured?.description}</p>
            </div>
          </a>
          {rest.map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider opacity-50">{String(post.label ?? "")}</span>
              <h3 className="mt-1 font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
