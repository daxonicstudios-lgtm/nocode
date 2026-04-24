import type { BlockProps } from "@/blocks/types";
import { Flame, ChevronDown } from "lucide-react";

const DEFAULTS = [
  { title: "Understanding Your Analytics Dashboard", description: "A walkthrough of every metric that matters for your website.", label: "Analytics", value: "Feb 1" },
  { title: "Custom Domains Setup Guide", description: "Point your own domain to your site in under five minutes.", label: "Tutorial", value: "Jan 28" },
  { title: "E-commerce Without the Complexity", description: "Sell products online with a simple, no-code store.", label: "Commerce", value: "Jan 25" },
  { title: "Email Marketing Integration", description: "Capture leads and send campaigns directly from your site.", label: "Marketing", value: "Jan 20" },
];

export default function Blog258(props: BlockProps) {
  const { theme, heading = "Hot Off the Press", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="sticky top-0 z-10 pb-4" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <div className="flex items-center gap-2 mb-5">
            <Flame className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} />
            <h2 className="text-2xl font-bold">{heading}</h2>
          </div>
          <div className="flex gap-0 rounded-xl overflow-hidden" style={{ backgroundColor: theme?.accent ?? "#fef2f2" }}>
            <div className="w-1.5 shrink-0" style={{ backgroundColor: theme?.primary ?? "#ef4444" }} />
            <div className="p-5 sm:p-6">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#ef4444" }}>{String(featured?.label ?? "")}</span>
              <h3 className="text-xl font-bold mt-2">{featured?.title}</h3>
              <p className="opacity-70 text-sm mt-2">{featured?.description}</p>
              <span className="text-xs opacity-40 mt-2 block">{String(featured?.value ?? "")}</span>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 opacity-20 mx-auto mt-2" />
        </div>
        <div className="space-y-3 mt-2">
          {rest.map((post, i) => (
            <article key={i} className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:shadow-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="w-1 h-10 rounded-full shrink-0 mt-1" style={{ backgroundColor: theme?.primary ?? "#ef4444", opacity: 0.3 }} />
              <div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm opacity-60 mt-0.5">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
