import type { BlockProps } from "@/blocks/types";
import { Gift, Award, Gem, Crown } from "lucide-react";

const icons = [Gift, Award, Gem, Crown];

export default function Features266(props: BlockProps) {
  const {
    theme,
    heading = "Rewards That Keep Them Coming Back",
    subheading = "Build loyalty with a points program customers actually love",
    bodyText,
    buttonText = "Join Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Earn Points", description: "Customers earn points on every purchase, review, and referral." },
      { title: "Tier Rewards", description: "Bronze, Silver, and Gold tiers unlock exclusive perks and discounts." },
      { title: "Exclusive Access", description: "VIP members get early access to new products and flash sales." },
      { title: "Birthday Perks", description: "Automatic birthday gifts and double-points days keep engagement high." },
    ],
  } = props;

  const tierColors = [theme?.primary || "#f59e0b", theme?.accent || "#8b5cf6", "#ec4899", "#10b981"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const color = tierColors[i % tierColors.length];
            return (
              <div key={i} className="rounded-xl p-6 text-center border-t-4" style={{ borderTopColor: color, backgroundColor: theme?.background || "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${color}15`, color }}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#f59e0b" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
