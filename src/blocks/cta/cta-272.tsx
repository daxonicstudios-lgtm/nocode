import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Cta272(props: BlockProps) {
  const {
    theme,
    heading = "Built for Speed",
    subheading = "Lightning fast features that keep you productive.",
    buttonText = "Start Building",
    buttonUrl = "#",
    items = [
      { title: "Real-time sync" }, { title: "Edge functions" }, { title: "CDN delivery" },
      { title: "Auto scaling" }, { title: "Zero downtime" }, { title: "Instant deploys" },
      { title: "Hot reload" }, { title: "Smart cache" }, { title: "Lazy loading" },
    ],
  } = props;

  return (
    <section className="py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#ffffff" }}>
      <div className="max-w-2xl mx-auto text-center px-4">
        <Zap className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.accent ?? "#fbbf24" }} />
        <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-3 text-lg opacity-60">{subheading}</p>
      </div>
      <div className="mt-10 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 w-max">
          {items.map((item, i) => (
            <span key={i} className="shrink-0 px-5 py-2.5 rounded-full text-sm font-medium bg-white/10 border border-white/20">
              {item.title}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href={buttonUrl} className="inline-block px-8 py-4 rounded-full font-bold text-sm" style={{ backgroundColor: theme?.accent ?? "#fbbf24", color: theme?.primary ?? "#0f172a" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
