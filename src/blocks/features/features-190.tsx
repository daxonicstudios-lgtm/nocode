import type { BlockProps } from "@/blocks/types";
import { Tag, Percent, Gift } from "lucide-react";

const icons = [Tag, Percent, Gift];
const tagLabels = ["Popular", "New", "Best Value"];

export default function Features190(props: BlockProps) {
  const {
    theme,
    heading = "Special Offers",
    subheading = "Features packed with value",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Pricing", description: "Dynamic pricing rules that maximize your revenue automatically.", label: "Popular" },
      { title: "Discount Engine", description: "Create percentage, fixed, and BOGO promotions with ease.", label: "New" },
      { title: "Loyalty Rewards", description: "Build customer loyalty with points, tiers, and exclusive perks.", label: "Best Value" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const tag = item.label || tagLabels[i % tagLabels.length];
            return (
              <div key={i} className="relative rounded-xl p-8 shadow-sm overflow-hidden" style={{ backgroundColor: theme?.foreground ? `${theme.foreground}05` : "#f9fafb" }}>
                <div className="absolute top-3 right-0 px-3 py-1 text-xs font-bold text-white rounded-l-full" style={{ backgroundColor: primary }}>
                  {tag}
                </div>
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
