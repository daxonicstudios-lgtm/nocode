import type { BlockProps } from "@/blocks/types";
import { Rocket, Target, TrendingUp } from "lucide-react";

const icons = [Rocket, Target, TrendingUp];

export default function Features161(props: BlockProps) {
  const {
    theme,
    heading = "Powerful Features",
    subheading = "Built for ambitious teams",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Launch Faster", description: "Ship products in days, not months, with our streamlined workflow." },
      { title: "Hit Your Goals", description: "Set targets, track progress, and celebrate wins with your team." },
      { title: "Scale Revenue", description: "Grow your business with tools designed for rapid expansion." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-8 border-4" style={{ borderColor: theme?.primary || "#6366f1" }}>
                <Icon size={32} className="mb-5" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
