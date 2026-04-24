import type { BlockProps } from "@/blocks/types";
import { Wand2, BrainCircuit, Brush } from "lucide-react";

const icons = [Wand2, BrainCircuit, Brush];

export default function Features340(props: BlockProps) {
  const {
    theme,
    heading = "Boundless Creativity",
    subheading = "Features powered by imagination",
    items = [
      { title: "AI Generation", description: "Describe what you want and watch unique designs materialize in seconds." },
      { title: "Neural Styles", description: "Apply artistic styles from any reference image to your own content." },
      { title: "Custom Brushes", description: "Design your own digital brushes for a truly personal creative workflow." },
    ],
  } = props;

  const primary = theme?.primary || "#8b5cf6";
  const accent = theme?.accent || "#06b6d4";

  return (
    <section style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#f8fafc" }} className="relative py-20 px-4 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-[100px] opacity-20" style={{ backgroundColor: primary }} />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full blur-[80px] opacity-15" style={{ backgroundColor: accent }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px] opacity-10" style={{ backgroundColor: primary }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-black mb-2">{heading}</h2>
        <p className="opacity-40 mb-14">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `linear-gradient(135deg, ${primary}, ${accent})`, color: "#fff" }}>
                  <Icon size={26} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-40 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
