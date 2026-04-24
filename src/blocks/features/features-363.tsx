import type { BlockProps } from "@/blocks/types";
import { Wrench, Hammer, Scissors, Ruler } from "lucide-react";

const icons = [Wrench, Hammer, Scissors, Ruler];

export default function Features363(props: BlockProps) {
  const {
    theme,
    heading = "OFFSET FEATURES",
    subheading = "Intentionally imperfect. Deliberately powerful.",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "FIX IT", description: "Debug tools that find root causes, not symptoms." },
      { title: "BUILD IT", description: "Scaffolding that turns ideas into products fast." },
      { title: "CUT IT", description: "Remove bloat and ship only what matters." },
      { title: "MEASURE IT", description: "Metrics that tell you exactly where you stand." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#f5f5f0", color: theme?.foreground || "#111" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black uppercase mb-2">{heading}</h2>
        <p className="text-base mb-12 border-b-2 pb-4" style={{ borderColor: theme?.foreground || "#111" }}>{subheading}</p>
        <div className="space-y-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const ml = i % 2 === 0 ? "ml-0 sm:ml-0" : "ml-8 sm:ml-16";
            const rotate = i % 2 === 0 ? "rotate-0" : "-rotate-1";
            return (
              <div key={i} className={`${ml} ${rotate} border-4 p-5 max-w-md`} style={{ borderColor: theme?.foreground || "#111" }}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={20} strokeWidth={3} />
                  <h3 className="text-lg font-black uppercase">{item.title}</h3>
                </div>
                <p className="text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
