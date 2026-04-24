import type { BlockProps } from "@/blocks/types";
import { Trophy, ArrowRight } from "lucide-react";

export default function Cta231(props: BlockProps) {
  const {
    theme,
    heading = "Earn rewards as you learn",
    subheading = "Complete challenges, collect badges, and climb the leaderboard.",
    buttonText = "Start Earning",
    buttonUrl = "#",
    items = [
      { title: "2,500", description: "Points earned" },
      { title: "12", description: "Badges unlocked" },
      { title: "Level 8", description: "Current rank" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Trophy className="w-12 h-12 mx-auto mb-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div key={i} className="p-4 rounded-xl" style={{ backgroundColor: theme?.muted ?? "#fffbeb" }}>
              <p className="text-xl font-bold" style={{ color: theme?.primary ?? "#f59e0b" }}>{item.title}</p>
              <p className="text-xs opacity-60 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
