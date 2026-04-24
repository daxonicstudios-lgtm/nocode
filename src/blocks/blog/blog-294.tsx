import type { BlockProps } from "@/blocks/types";
import { Minus } from "lucide-react";

const DEFAULTS = [
  { title: "Platform Reaches 100K Users Milestone", description: "The no-code builder surpasses six figures in registered accounts, marking a significant milestone in its growth trajectory across the African continent.", label: "FRONT PAGE", value: "Vol. 3, No. 42" },
  { title: "New Template Marketplace Opens", description: "Designers can now sell premium templates directly to the community, creating a new revenue stream for creative professionals.", label: "BUSINESS", value: "Page A3" },
  { title: "Interview: The Vision Behind the Product", description: "An exclusive conversation with the founder about the origins, challenges, and future direction of the platform.", label: "FEATURE", value: "Page B1" },
  { title: "Community Builder Awards Announced", description: "Twelve outstanding creators recognized for exceptional website projects built entirely without code.", label: "COMMUNITY", value: "Page C1" },
];

export default function Blog294(props: BlockProps) {
  const { theme, heading = "THE DAILY BUILD", subheading = "All the news that fits to ship", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background ?? "#fefce8", color: theme?.foreground ?? "#1c1917" }} className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center border-b-4 border-double pb-4 mb-2" style={{ borderColor: theme?.foreground ?? "#1c1917" }}>
          <p className="text-xs tracking-[0.3em] opacity-40">{String(featured?.value ?? "")}</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-1" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <p className="text-sm opacity-50 mt-1 italic">{subheading}</p>
        </div>
        <div className="flex items-center justify-center gap-2 py-2 border-b mb-6" style={{ borderColor: theme?.secondary ?? "#d6d3d1" }}>
          <Minus className="w-4 h-4 opacity-20" />
          <span className="text-xs tracking-widest opacity-30">EDITION {new Date().toLocaleDateString()}</span>
          <Minus className="w-4 h-4 opacity-20" />
        </div>
        <article className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>{featured?.title}</h3>
          <p className="opacity-70 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{featured?.description}</p>
          <span className="text-xs font-bold uppercase tracking-wider mt-2 block opacity-40">{String(featured?.label ?? "")}</span>
        </article>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t" style={{ borderColor: theme?.secondary ?? "#d6d3d1" }}>
          {rest.map((post, i) => (
            <article key={i} className="cursor-pointer">
              <span className="text-xs font-bold tracking-wider opacity-40">{String(post.label ?? "")}</span>
              <h3 className="text-lg font-bold mt-1" style={{ fontFamily: "Georgia, serif" }}>{post.title}</h3>
              <p className="text-sm opacity-60 mt-1 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{post.description}</p>
              <span className="text-xs opacity-30 mt-2 block">{String(post.value ?? "")}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
