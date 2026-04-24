import type { BlockProps } from "@/blocks/types";
import { Sparkles, Wand2, Lightbulb, Flame } from "lucide-react";

const icons = [Sparkles, Wand2, Lightbulb, Flame];

export default function Features273(props: BlockProps) {
  const {
    theme,
    heading = "Designed to Delight",
    subheading = "Powerful features wrapped in an interface your team will love",
    bodyText,
    buttonText = "Try It Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Magic Suggestions", description: "Context-aware recommendations surface exactly what you need, when you need it." },
      { title: "Quick Actions", description: "Keyboard shortcuts and command palette for power users who move fast." },
      { title: "Smart Defaults", description: "Intelligent presets mean less configuration and faster time to value." },
      { title: "Live Preview", description: "See changes in real time before publishing to your audience." },
    ],
  } = props;

  return (
    <section style={{ background: theme?.background ? undefined : "linear-gradient(135deg, #1e1b4b, #312e81, #1e1b4b)", backgroundColor: theme?.background, color: theme?.foreground || "#e0e7ff" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: theme?.foreground || "#fff" }}>{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: theme?.primary || "#a78bfa" }}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: theme?.foreground || "#fff" }}>{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#7c3aed" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
