import type { BlockProps } from "@/blocks/types";
import { Rocket, Star, Crown } from "lucide-react";

const icons = [Rocket, Star, Crown];
const shadows = [
  "0 1px 3px rgba(0,0,0,0.08)",
  "0 4px 12px rgba(0,0,0,0.12)",
  "0 8px 30px rgba(0,0,0,0.18)",
];

export default function Features185(props: BlockProps) {
  const {
    theme,
    heading = "Choose Your Level",
    subheading = "Features that grow with your ambition",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Starter", description: "Essential tools to launch your first website quickly." },
      { title: "Professional", description: "Advanced features for growing businesses and teams." },
      { title: "Enterprise", description: "Full platform access with dedicated support and SLAs." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const elevation = shadows[i % shadows.length];
            return (
              <div key={i} className="rounded-xl p-8" style={{ boxShadow: elevation, backgroundColor: theme?.foreground ? `${theme.foreground}04` : "#ffffff", transform: `translateY(-${i * 4}px)` }}>
                <Icon size={24} className="mb-4" style={{ color: primary }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
