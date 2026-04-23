import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Trust003(props: BlockProps) {
  const { theme, heading = "Rated 4.9 across platforms", items = [{ title: "Trustpilot", value: "4.9", description: "12K reviews" }, { title: "G2", value: "4.8", description: "2.1K reviews" }, { title: "Capterra", value: "4.9", description: "840 reviews" }] } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {items.slice(0, 3).map((r, i) => (
            <div key={i} className="p-6 rounded-2xl border text-center" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <p className="font-semibold">{r.title}</p>
              <div className="flex items-center justify-center gap-1 my-3">
                <Star className="w-4 h-4 fill-current" style={{ color: theme?.accent ?? "#f59e0b" }} />
                <span className="text-2xl font-bold">{r.value}</span>
              </div>
              <p className="text-xs opacity-60">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
