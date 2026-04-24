import type { BlockProps } from "@/blocks/types";
import { Check } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Before", description: "Manual processes,Scattered tools,Slow iteration,No analytics", label: "Without Us" },
  { title: "After", description: "Automated workflows,All-in-one platform,Rapid deployment,Full insights", label: "With Us" },
];

export default function Comparison097(props: BlockProps) {
  const { theme, heading = "The Difference", subheading = "The clear choice for modern teams.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(0, 2).map((item, i) => {
            const features = (item.description ?? "").split(",");
            const isAfter = i === 1;
            return (
              <div key={i} className="rounded-2xl p-8" style={{ backgroundColor: isAfter ? theme?.primary ?? "#6366f1" : theme?.accent ?? "#f8fafc", color: isAfter ? "#fff" : undefined }}>
                <span className="text-xs font-bold uppercase tracking-wider opacity-60">{String(item.label ?? "")}</span>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                <ul className="mt-6 space-y-3">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 shrink-0" /> {f.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
