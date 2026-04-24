import type { BlockProps } from "@/blocks/types";
import { CircleDot, ArrowRight } from "lucide-react";

export default function Features399(props: BlockProps) {
  const {
    theme,
    heading = "Connected Features",
    subheading = "Every capability branches from a central vision",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Core Engine", description: "The central processing unit that powers everything." },
      { title: "Data Layer", description: "Unified storage with real-time synchronization." },
      { title: "API Gateway", description: "Single entry point for all external integrations." },
      { title: "UI Framework", description: "Component library with hundreds of building blocks." },
      { title: "Analytics Hub", description: "Centralized metrics and reporting dashboard." },
    ],
  } = props;

  const accent = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#f1f5f9", color: theme?.foreground || "#1e293b" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: accent, color: "#fff" }}>
            <CircleDot size={28} />
          </div>
          <div className="w-px h-6" style={{ backgroundColor: accent }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-2">
            {items.map((item, i) => (
              <div key={i} className="relative">
                <div className="hidden sm:block absolute -top-4 left-1/2 w-px h-4" style={{ backgroundColor: `${accent}44` }} />
                <div className="rounded-xl p-5 border" style={{ borderColor: `${accent}22`, backgroundColor: theme?.background || "#fff" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight size={14} style={{ color: accent }} />
                    <h3 className="font-bold text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
