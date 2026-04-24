import type { BlockProps } from "@/blocks/types";
import { Star, Minus } from "lucide-react";

export default function Features366(props: BlockProps) {
  const {
    theme,
    heading = "FEATURES",
    subheading = "+-+-+-+-+-+-+-+-+-+-+-+-+-+",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "ENCRYPT", description: "Military-grade encryption on all data at rest and in transit." },
      { title: "COMPRESS", description: "Smart compression reduces storage costs by 70 percent." },
      { title: "CACHE", description: "Intelligent caching layer for sub-millisecond responses." },
      { title: "STREAM", description: "Real-time data pipelines that handle millions of events." },
    ],
  } = props;

  const border = `+${"-".repeat(40)}+`;

  return (
    <section style={{ backgroundColor: theme?.background || "#fffff0", color: theme?.foreground || "#000" }} className="py-16 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs opacity-40 mb-2">{"*".repeat(30)}</div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase">{heading}</h2>
          <p className="text-xs mt-2 opacity-50">{subheading}</p>
          <div className="text-xs opacity-40 mt-2">{"*".repeat(30)}</div>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border-2 p-5" style={{ borderColor: theme?.foreground || "#000" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs opacity-40">[{String(i + 1).padStart(2, "0")}]</span>
                <Minus size={12} />
                <Star size={12} />
                <Minus size={12} />
                <h3 className="text-lg font-black uppercase">{item.title}</h3>
              </div>
              <p className="text-xs leading-relaxed pl-12">{item.description}</p>
              <div className="text-xs opacity-20 mt-2">{border}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
