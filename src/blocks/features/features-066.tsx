import type { BlockProps } from "@/blocks/types";
import { Zap, Eye, Code, Fingerprint, Boxes, Gem } from "lucide-react";

const icons = [Zap, Eye, Code, Fingerprint, Boxes, Gem];

export default function Features066(props: BlockProps) {
  const {
    theme,
    heading = "Next-Gen Platform",
    subheading = "Dark mode native. Built for developers who ship fast.",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lightning API", description: "Sub-50ms response times with auto-scaling infrastructure." },
      { title: "Real-Time Preview", description: "See every change reflected instantly as you build." },
      { title: "Code Export", description: "Export clean, production-ready code anytime you want." },
      { title: "Biometric Auth", description: "Secure login with fingerprint and face recognition." },
      { title: "Component Library", description: "500+ pre-built components ready to drag and drop." },
      { title: "Premium Tier", description: "Unlock advanced features with our Pro subscription." },
    ],
  } = props;

  const accent = theme?.primary || "#22d3ee";

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6 border" style={{ borderColor: `${accent}44`, backgroundColor: `${accent}08` }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${accent}22` }}>
                  <Icon size={20} style={{ color: accent }} />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg font-medium" style={{ backgroundColor: accent, color: "#0f172a" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
