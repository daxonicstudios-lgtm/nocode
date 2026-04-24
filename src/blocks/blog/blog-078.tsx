import type { BlockProps } from "@/blocks/types";
import { UserCircle } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Scaling Customer Support with AI", description: "How we reduced response times by 70% while improving satisfaction scores.", label: "Fatima Al-Hassan", value: "Head of Support" },
  { title: "Building in Public", description: "Sharing revenue, challenges, and roadmaps openly with our community.", label: "Marcus Johnson", value: "Founder" },
  { title: "The Power of Design Sprints", description: "Compress months of debate into a focused five-day process.", label: "Yuki Tanaka", value: "Product Lead" },
  { title: "Navigating Regulatory Compliance", description: "Data privacy laws across 14 African countries — a practical guide.", label: "Adaeze Obi", value: "Legal Counsel" },
];

export default function Blog078(props: BlockProps) {
  const { theme, heading = "Voices", subheading = "Stories and insights from across the company", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        {items.slice(0, 4).map((post, i) => (
          <article key={i} className="p-6 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            <div className="flex items-center gap-3 mb-4">
              <UserCircle className="w-10 h-10 opacity-30" />
              <div>
                <p className="text-sm font-bold">{String(post.label)}</p>
                <p className="text-[10px] opacity-50">{String(post.value)}</p>
              </div>
            </div>
            <h3 className="font-bold text-base">{post.title}</h3>
            <p className="mt-2 text-sm opacity-60">{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
