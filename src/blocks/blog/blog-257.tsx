import type { BlockProps } from "@/blocks/types";
import { Eye, MoveDown } from "lucide-react";

const DEFAULTS = [
  { title: "Zero to Launch in 48 Hours", description: "A real-time case study of building and shipping a complete website in two days.", label: "Case Study", value: "2.4k views" },
  { title: "The Psychology of Trust Online", description: "Design patterns that make visitors feel safe and confident.", label: "Psychology", value: "1.8k views" },
  { title: "API Integrations Made Simple", description: "Connect your no-code app to any service without writing code.", label: "Tutorial", value: "1.2k views" },
  { title: "Pricing Page Strategies", description: "How the best SaaS companies structure their pricing.", label: "Business", value: "980 views" },
];

export default function Blog257(props: BlockProps) {
  const { theme, heading = "Most Popular", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="sticky top-0 z-10 pb-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">{heading}</h2>
          <div className="p-6 rounded-xl" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-4 h-4 opacity-50" />
              <span className="text-sm opacity-50">{String(featured?.value ?? "")}</span>
            </div>
            <h3 className="text-2xl font-bold">{featured?.title}</h3>
            <p className="opacity-70 mt-2">{featured?.description}</p>
          </div>
          <MoveDown className="w-4 h-4 opacity-20 mx-auto mt-3" />
        </div>
        <div className="space-y-4">
          {rest.map((post, i) => (
            <article key={i} className="flex gap-4 items-center p-3 rounded-lg cursor-pointer hover:opacity-80">
              <span className="text-3xl font-black opacity-10">{String(i + 2).padStart(2, "0")}</span>
              <div className="flex-1">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm opacity-60">{post.description}</p>
              </div>
              <span className="text-xs opacity-30 shrink-0">{String(post.value ?? "")}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
