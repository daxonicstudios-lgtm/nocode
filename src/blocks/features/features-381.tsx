import type { BlockProps } from "@/blocks/types";
import { Crown, Diamond, Star, Award } from "lucide-react";

const icons = [Crown, Diamond, Star, Award];

export default function Features381(props: BlockProps) {
  const {
    theme,
    heading = "The Gold Standard",
    subheading = "Luxury features for discerning professionals",
    bodyText,
    buttonText = "Request Access",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Concierge Onboarding", description: "A dedicated specialist guides your entire setup process." },
      { title: "Diamond Tier Support", description: "Priority queue with guaranteed 15-minute response time." },
      { title: "Elite Analytics", description: "Proprietary insights available exclusively to premium members." },
      { title: "VIP Program", description: "Early access to new features and invitation-only events." },
    ],
  } = props;

  const gold = theme?.primary || "#c9a84c";

  return (
    <section style={{ backgroundColor: theme?.background || "#0f0f0f", color: theme?.foreground || "#f5f0e8" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: gold }}>Premium Collection</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <div className="w-24 h-px mx-auto" style={{ backgroundColor: gold }} />
          <p className="text-base mt-4 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6 rounded-lg border" style={{ borderColor: `${gold}33`, backgroundColor: "rgba(201,168,76,0.04)" }}>
                <Icon size={24} className="mb-4" style={{ color: gold }} />
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-sm font-medium text-sm uppercase tracking-wider border" style={{ borderColor: gold, color: gold }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
