import type { BlockProps } from "@/blocks/types";
import { Info, Zap, Lock, Globe } from "lucide-react";

const icons = [Zap, Lock, Globe];

export default function Features314(props: BlockProps) {
  const {
    theme,
    heading = "Quick Feature Tour",
    subheading = "Hover the icons for a quick explanation",
    items = [
      { title: "Instant Processing", description: "Requests are processed in under 50ms thanks to our optimized runtime." },
      { title: "Zero-Trust Security", description: "Every request is authenticated and authorized — no implicit trust." },
      { title: "Multi-Region Deploy", description: "Deploy to multiple regions with a single command for global reach." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-70 mb-10 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const primary = theme?.primary || "#6366f1";
            return (
              <div key={i} className="relative group">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110" style={{ backgroundColor: `${primary}15`, color: primary }}>
                      <Icon size={28} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: primary, color: "#fff" }}>
                      <Info size={10} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-300">
                    <p className="text-sm opacity-60 leading-relaxed mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
