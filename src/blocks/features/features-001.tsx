import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3 } from "lucide-react";

const icons = [Zap, Shield, BarChart3];

export default function Features001(props: BlockProps) {
  const {
    theme,
    heading = "Why Choose Us",
    subheading = "Everything you need to grow your business online",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lightning Fast", description: "Pages load in under a second, keeping your visitors engaged and your rankings high." },
      { title: "Secure by Default", description: "Enterprise-grade security protects your data and your customers around the clock." },
      { title: "Real-Time Analytics", description: "Track visitors, conversions, and revenue with a dashboard built for clarity." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto">{subheading}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center px-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4" style={{ color: theme?.primary || "#6366f1" }}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-10 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
