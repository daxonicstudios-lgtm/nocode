import type { BlockProps } from "@/blocks/types";
import { Moon, Eye, Volume2, Fingerprint } from "lucide-react";

const icons = [Moon, Eye, Volume2, Fingerprint];

export default function Features356(props: BlockProps) {
  const {
    theme,
    heading = "Dark Mode Excellence",
    subheading = "Designed for comfort during late-night sessions",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Night Shift", description: "Automatic dark mode that adapts to time of day." },
      { title: "Eye Comfort", description: "Reduced blue light and optimized contrast ratios." },
      { title: "Silent Alerts", description: "Non-intrusive notifications that respect focus." },
      { title: "Biometric Lock", description: "Secure access with fingerprint or face recognition." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#2d2d2d", color: theme?.foreground || "#e0e0e0" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-2xl p-6" style={{ background: theme?.background || "#2d2d2d", boxShadow: "8px 8px 16px #1a1a1a, -8px -8px 16px #404040" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: theme?.background || "#2d2d2d", boxShadow: "inset 4px 4px 8px #1a1a1a, inset -4px -4px 8px #404040" }}>
                  <Icon size={22} style={{ color: theme?.primary || "#a78bfa" }} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
