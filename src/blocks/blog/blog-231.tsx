import type { BlockProps } from "@/blocks/types";
import { User, MapPin } from "lucide-react";

const AUTHOR = { title: "Sarah Chen", description: "Senior engineer and open-source advocate. Writes about distributed systems and developer tooling.", label: "12 articles", value: "San Francisco" };
const POSTS = [
  { title: "Debugging Production Issues", description: "A structured approach to finding and fixing bugs in live systems.", label: "Engineering" },
  { title: "Open Source Sustainability", description: "How maintainers can build projects that last.", label: "Community" },
  { title: "Event Sourcing Primer", description: "Store events instead of state for powerful audit trails.", label: "Architecture" },
];

export default function Blog231(props: BlockProps) {
  const { theme, heading = "Author Spotlight", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-2xl p-6 text-center" style={{ backgroundColor: theme?.accent ? `${theme.accent}18` : "#f9fafb" }}>
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><User className="w-10 h-10 text-white" /></div>
          <h3 className="mt-4 text-lg font-bold">{AUTHOR.title}</h3>
          <p className="text-xs opacity-50 flex items-center justify-center gap-1 mt-1"><MapPin className="w-3 h-3" />{AUTHOR.value}</p>
          <p className="mt-3 text-sm opacity-70">{AUTHOR.description}</p>
          <p className="mt-3 text-xs font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>{AUTHOR.label}</p>
        </aside>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{heading}</h2>
          <div className="space-y-4">
            {items.slice(0, 3).map((post, i) => (
              <article key={i} className="p-4 border rounded-xl" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <h3 className="mt-1 font-bold text-lg">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
