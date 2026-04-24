import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Ngozi I.", description: "Fast, beautiful, and didn't need a developer.", value: "5" },
  { title: "Marcus T.", description: "Switched from Wix. Never going back.", value: "5" },
  { title: "Priya S.", description: "My site loads in half a second now.", value: "5" },
  { title: "Jamal R.", description: "The editor works perfectly on my phone.", value: "5" },
  { title: "Elena G.", description: "Support answered in under 10 minutes.", value: "4" },
  { title: "Yusuf B.", description: "Got my first customer the day I published.", value: "5" },
];

export default function Testimonials003(props: BlockProps) {
  const { theme, heading = "4.9 out of 5 · 2,400+ reviews", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.slice(0, 6).map((t, i) => (
            <div key={i} className="p-5 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: Number(t.value) || 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" style={{ color: theme?.accent ?? "#f59e0b" }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed">&ldquo;{t.description}&rdquo;</p>
              <p className="mt-3 text-xs font-medium opacity-70">— {t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
