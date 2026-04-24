import type { BlockProps } from "@/blocks/types";
import { Swords, BarChart3, Trophy } from "lucide-react";

const icons = [Swords, BarChart3, Trophy];

export default function Features194(props: BlockProps) {
  const {
    theme,
    heading = "Level Up Your Game",
    subheading = "The ultimate gaming platform experience",
    bodyText,
    buttonText = "Join Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Matchmaking", description: "Skill-based pairing ensures fair and competitive matches every time." },
      { title: "Detailed Stats", description: "Track KDA, win rates, play time, and personal bests across all games." },
      { title: "Live Leaderboards", description: "Compete for top rankings with real-time global and regional boards." },
    ],
  } = props;

  const primary = theme?.primary || "#7c3aed";

  return (
    <section style={{ backgroundColor: theme?.background || "#0c0a09", color: theme?.foreground || "#fafaf9" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-50 mb-14 text-center text-lg">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-8 border" style={{ borderColor: `${primary}40`, background: `linear-gradient(180deg, ${primary}10 0%, transparent 100%)` }}>
                <Icon size={28} className="mb-5" style={{ color: primary }} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="opacity-50 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: primary }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
