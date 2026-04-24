import type { BlockProps } from "@/blocks/types";
import { Rocket, Shield, Zap, Star, Heart, Crown } from "lucide-react";

const icons = [Rocket, Shield, Zap, Star, Heart, Crown];
const styles = ["neumorphic", "brutalist", "retro", "luxury", "bubble", "minimal"];

export default function Features400(props: BlockProps) {
  const {
    theme,
    heading = "The Grand Feature Showcase",
    subheading = "Every style, one section, infinite possibilities",
    bodyText,
    buttonText = "Explore All Features",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Speed Boost", description: "Sub-100ms response times across the globe." },
      { title: "Iron Shield", description: "Multi-layer security with zero-trust architecture." },
      { title: "Power Surge", description: "Auto-scaling that handles any traffic spike." },
      { title: "Top Rated", description: "Five-star reviews from enterprise customers." },
      { title: "User Loved", description: "NPS score of 72 from our community." },
      { title: "Award Winner", description: "Recognized by leading industry publications." },
    ],
  } = props;

  const accent = theme?.primary || "#6366f1";

  const cardStyle = (s: string, i: number) => {
    switch (s) {
      case "neumorphic":
        return { background: "#e4e4e4", color: "#333", boxShadow: "6px 6px 12px #c0c0c0, -6px -6px 12px #fff", borderRadius: "16px" };
      case "brutalist":
        return { background: "#fff", color: "#000", border: "3px solid #000", boxShadow: "5px 5px 0 #000" };
      case "retro":
        return { background: "#f5f0e8", color: "#4a3728", border: "1px solid #d4c5a9", fontFamily: "Georgia, serif" };
      case "luxury":
        return { background: "#0f0f0f", color: "#e8dcc8", border: `1px solid ${accent}33` };
      case "bubble":
        return { background: "#f0f4ff", color: "#1e293b", borderRadius: "24px", border: `2px solid ${accent}22` };
      default:
        return { background: theme?.background || "#fafafa", color: theme?.foreground || "#1e293b", borderBottom: `2px solid ${accent}` };
    }
  };

  return (
    <section style={{ backgroundColor: theme?.background || "#f8fafc", color: theme?.foreground || "#1e293b" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const s = styles[i % styles.length];
            const cs = cardStyle(s, i);
            return (
              <div key={i} className="p-6" style={cs}>
                <Icon size={24} className="mb-3" style={{ color: s === "luxury" ? "#c9a84c" : accent }} />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                <div className="mt-3 text-xs uppercase tracking-wider opacity-30">{s}</div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg font-medium text-white" style={{ backgroundColor: accent }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
