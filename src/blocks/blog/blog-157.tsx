import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "The Complete Guide to No-Code Development", description: "Everything you need to know about building without code, from tools to techniques.", label: "Featured · 12 min" },
  { title: "Mobile-First Design Principles", description: "Why starting with mobile leads to better products.", label: "Design · 6 min" },
  { title: "AI and the Future of Web Building", description: "How artificial intelligence is changing web development.", label: "Technology · 8 min" },
];

export default function Blog157(props: BlockProps) {
  const { theme, heading = "The latest", items = DEFAULT_ITEMS } = props;

  const featured = items[0];
  const rest = items.slice(1, 3);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article>
            <div className="aspect-video rounded-2xl mb-4" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary }}>{String(featured?.label ?? "Featured")}</p>
            <h3 className="mt-2 text-2xl font-bold">{featured?.title}</h3>
            <p className="mt-2 opacity-70">{featured?.description}</p>
          </article>
          <div className="space-y-6">
            {rest.map((post, i) => (
              <article key={i} className="flex gap-4">
                <div className="w-32 h-24 rounded-xl shrink-0" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider opacity-50">{String(post.label ?? "")}</p>
                  <h3 className="mt-1 font-semibold">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-70 line-clamp-2">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
