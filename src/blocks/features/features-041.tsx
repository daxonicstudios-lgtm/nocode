import type { BlockProps } from "@/blocks/types";
import { Sparkles, Shield, Zap, Layers, Globe, Heart } from "lucide-react";

const icons = [Sparkles, Shield, Zap, Layers, Globe, Heart];

export default function Features041(props: BlockProps) {
  const {
    theme,
    heading = "Built for Modern Teams",
    subheading = "Everything you need to ship faster",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Real-Time Sync", description: "Collaborate with your team instantly across every device." },
      { title: "Enterprise Security", description: "Bank-grade encryption keeps your data safe at all times." },
      { title: "Lightning Fast", description: "Optimized performance that loads in under 200 milliseconds." },
      { title: "Smart Layers", description: "Organize your workflow with intelligent layer management." },
      { title: "Global CDN", description: "Content delivered from the nearest edge server worldwide." },
      { title: "Made with Care", description: "Crafted by designers and engineers who love great products." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-8 lg:py-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: theme?.primary }}>{subheading}</p>
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        {bodyText && <p className="mt-4 text-lg opacity-70 max-w-2xl mx-auto">{bodyText}</p>}
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={i}
              className="rounded-2xl p-6 backdrop-blur-lg border border-white/20"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "rgba(255,255,255,0.08)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
      {buttonText && (
        <div className="text-center mt-10">
          <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
        </div>
      )}
    </section>
  );
}
