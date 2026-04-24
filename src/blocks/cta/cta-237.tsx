import type { BlockProps } from "@/blocks/types";
import { TrendingUp, ArrowRight } from "lucide-react";

export default function Cta237(props: BlockProps) {
  const {
    theme,
    heading = "From struggling to thriving",
    subheading = "Join thousands who transformed their business with our platform.",
    buttonText = "Start Your Transformation",
    buttonUrl = "#",
    items = [
      { title: "$2K/mo", description: "$25K/mo", label: "Revenue" },
      { title: "12 hrs", description: "2 hrs", label: "Weekly effort" },
      { title: "50", description: "5,000", label: "Customers" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <TrendingUp className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary ?? "#22c55e" }} />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i}>
              <p className="text-xs font-medium uppercase tracking-wide opacity-50 mb-2">{item.label}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm line-through opacity-40">{item.title}</span>
                <ArrowRight className="w-3 h-3 opacity-40" />
                <span className="text-lg font-bold" style={{ color: theme?.primary ?? "#22c55e" }}>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#22c55e" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
