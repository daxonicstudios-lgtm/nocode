import type { BlockProps } from "@/blocks/types";
import { Layers, Cpu, Cloud, Lock, Sparkles, Wand2 } from "lucide-react";

const icons = [Layers, Cpu, Cloud, Lock, Sparkles, Wand2];

export default function Features082(props: BlockProps) {
  const {
    theme,
    heading = "What We Bring",
    subheading = "Watch each feature slide into view",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Modular Architecture", description: "Build with independent components that snap together like building blocks." },
      { title: "Edge Computing", description: "Run logic closer to your users for near-instant responses." },
      { title: "Cloud Native", description: "Designed from the ground up for cloud infrastructure." },
      { title: "Data Encryption", description: "AES-256 encryption for data at rest and TLS 1.3 in transit." },
      { title: "Smart Defaults", description: "Sensible configuration out of the box with room to customize." },
      { title: "Auto-Magic", description: "AI handles the tedious parts so you can focus on what matters." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes slideUp082 {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-card-082 { animation: slideUp082 0.6s ease-out both; }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="slide-card-082 rounded-xl p-6" style={{ animationDelay: `${i * 100}ms`, backgroundColor: theme?.accent || "#f1f5f9" }}>
                <Icon size={28} className="mb-4" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
