import type { BlockProps } from "@/blocks/types";
import { Layers, Zap, Shield } from "lucide-react";

const icons = [Layers, Zap, Shield];

export default function Features243(props: BlockProps) {
  const {
    theme,
    heading = "Feature Stack",
    subheading = "Layered capabilities that build on each other",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Foundation Layer", description: "Rock-solid infrastructure with auto-scaling, redundancy, and 99.99% uptime guarantee." },
      { title: "Performance Layer", description: "Edge caching, image optimization, and code splitting for sub-second load times." },
      { title: "Security Layer", description: "End-to-end encryption, DDoS protection, and automated vulnerability scanning." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="relative space-y-[-8px]">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const scale = 1 - i * 0.03;
            return (
              <div key={i} className="relative rounded-2xl border p-6 sm:p-8" style={{
                borderColor: `${primary}20`,
                backgroundColor: theme?.background || "#ffffff",
                boxShadow: `0 ${4 + i * 2}px ${12 + i * 4}px rgba(0,0,0,${0.04 + i * 0.02})`,
                transform: `scale(${scale})`,
                zIndex: items.length - i,
              }}>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${primary}12`, color: primary }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-14 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
