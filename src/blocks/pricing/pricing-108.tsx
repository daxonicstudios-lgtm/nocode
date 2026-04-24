import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Pricing108(props: BlockProps) {
  const {
    theme,
    heading = "Plans for Every Stage",
    subheading,
    bodyText = "Whether you're just starting out or scaling globally, we have a plan that fits.",
    buttonText = "Choose Plan",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Solo", value: "$5/mo", label: "Most affordable", description: "1 website, 100 visitors/day" },
      { title: "Startup", value: "$19/mo", label: "Popular", description: "5 websites, 10k visitors/day" },
      { title: "Business", value: "$49/mo", label: "Best for teams", description: "Unlimited, 100k visitors/day" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-center opacity-60 text-sm mb-10">{bodyText}</p>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl p-5" style={{ backgroundColor: theme?.accent }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" style={{ color: theme?.primary }} />
                  <h3 className="font-bold">{item.title}</h3>
                </div>
                {item.label && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: theme?.primary }}>
                    {item.label}
                  </span>
                )}
              </div>
              <p className="text-sm opacity-60 mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold" style={{ color: theme?.primary }}>{item.value}</span>
                <a href={buttonUrl} className="text-sm font-medium underline" style={{ color: theme?.primary }}>
                  {buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
