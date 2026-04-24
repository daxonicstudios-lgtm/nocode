import type { BlockProps } from "@/blocks/types";
import { Lightbulb, RefreshCw, Send } from "lucide-react";

const icons = [Lightbulb, RefreshCw, Send];

export default function Features210(props: BlockProps) {
  const {
    theme,
    heading = "Simple Yet Powerful",
    subheading = "Features that reveal themselves as you scroll",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Bright Ideas", description: "AI-powered brainstorming helps you generate concepts in seconds." },
      { title: "Continuous Updates", description: "Automatic improvements ship seamlessly without disrupting your workflow." },
      { title: "Instant Delivery", description: "Publish and share with your audience in a single click." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes featureFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .feat210-card {
          animation: featureFadeUp 0.6s ease-out both;
        }
      `}</style>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="feat210-card rounded-2xl border p-8 text-center" style={{ animationDelay: `${i * 200}ms`, borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: theme?.primary ? `${theme.primary}12` : "#eef2ff", color: theme?.primary || "#6366f1" }}>
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
