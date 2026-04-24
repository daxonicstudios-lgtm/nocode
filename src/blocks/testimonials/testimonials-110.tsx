import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Maria T.", description: "Five stars across the board. The best investment we made for our online presence.", label: "Marketing Director" },
  { title: "Chen W.", description: "Incredibly intuitive. I had my restaurant website up in under an hour.", label: "Restaurant Owner" },
  { title: "Blessing A.", description: "Finally a platform that understands the African market. Love the mobile-first approach.", label: "Entrepreneur" },
];

export default function Testimonials110(props: BlockProps) {
  const { theme, heading = "Client Feedback", items = DEFAULT_ITEMS } = props;

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((t, i) => (
            <div key={i} className="rounded-2xl p-8" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-sm opacity-70">{t.description}</p>
              <div className="mt-6">
                <div className="font-semibold text-sm text-white">{t.title}</div>
                <div className="text-xs opacity-40">{String(t.label ?? "")}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
