import type { BlockProps } from "@/blocks/types";
import { Layers, ExternalLink } from "lucide-react";

const DEFAULTS = [
  { title: "The No-Code Manifesto", description: "Everyone deserves the power to build for the web. Technology should be accessible, not exclusive.", label: "Manifesto", value: "Featured" },
  { title: "Weekly Newsletter Archive", description: "Every edition of our newsletter, searchable and organized.", label: "Archive", value: "Updated weekly" },
  { title: "Open Source Contributions", description: "How we give back to the community that supports us.", label: "Open Source", value: "Ongoing" },
  { title: "Partner Program", description: "Earn while you build. Join our referral network.", label: "Partners", value: "Apply now" },
];

export default function Blog290(props: BlockProps) {
  const { theme, heading = "Explore", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Layers className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <article className="lg:col-span-3 rounded-2xl p-8 min-h-[250px] flex flex-col justify-end" style={{ backgroundColor: theme?.primary ?? "#1e293b", color: "#fff" }}>
            <span className="text-xs font-bold uppercase tracking-wider opacity-60">{String(featured?.label ?? "")}</span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-2">{featured?.title}</h3>
            <p className="opacity-80 mt-3 max-w-md">{featured?.description}</p>
          </article>
          <div className="lg:col-span-2 space-y-3">
            {rest.map((post, i) => (
              <article key={i} className="p-4 rounded-xl border flex items-start justify-between gap-3 cursor-pointer hover:shadow-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div>
                  <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
                  <h3 className="font-semibold mt-1">{post.title}</h3>
                  <p className="text-sm opacity-60 mt-0.5">{post.description}</p>
                  <span className="text-xs opacity-40 mt-1 block">{String(post.value ?? "")}</span>
                </div>
                <ExternalLink className="w-4 h-4 opacity-30 shrink-0 mt-1" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
