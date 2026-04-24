import type { BlockProps } from "@/blocks/types";
import { Settings, RefreshCw, Cog } from "lucide-react";

const icons = [Settings, RefreshCw, Cog];

export default function Features233(props: BlockProps) {
  const {
    theme,
    heading = "Always in Motion",
    subheading = "Features that spin into action when you interact with them",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Custom Settings", description: "Tailor every parameter to fit your exact requirements." },
      { title: "Auto Sync", description: "Data flows seamlessly between all connected services." },
      { title: "Smart Engine", description: "Background optimization that improves performance silently." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        .feat233-icon { transition: transform 0.5s ease; }
        .feat233-card:hover .feat233-icon { transform: rotate(180deg); }
      `}</style>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="feat233-card rounded-2xl border p-8 text-center cursor-pointer" style={{ borderColor: `${primary}20` }}>
                <div className="feat233-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: `${primary}10`, color: primary }}>
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
