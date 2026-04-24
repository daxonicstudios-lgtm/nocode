import type { BlockProps } from "@/blocks/types";
import { Crown, ChevronUp } from "lucide-react";

export default function Cta234(props: BlockProps) {
  const {
    theme,
    heading = "Climb the leaderboard",
    subheading = "Compete with other learners and earn your place at the top.",
    buttonText = "View Leaderboard",
    buttonUrl = "#",
    items = [
      { title: "Alex M.", value: "4,820 pts" },
      { title: "Sarah K.", value: "4,650 pts" },
      { title: "You", value: "4,200 pts" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-md mx-auto text-center">
        <Crown className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary ?? "#eab308" }} />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
        <div className="mt-6 space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg" style={i === 2 ? { backgroundColor: `${theme?.primary ?? "#eab308"}15`, border: `1px solid ${theme?.primary ?? "#eab308"}` } : { backgroundColor: theme?.muted ?? "#f9fafb" }}>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={i === 0 ? { backgroundColor: theme?.primary ?? "#eab308", color: "#fff" } : { backgroundColor: "#e5e7eb" }}>
                  {i + 1}
                </span>
                <span className="font-medium text-sm">{item.title}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <ChevronUp className="w-3 h-3 text-green-500" />
                <span className="font-semibold" style={{ color: theme?.primary ?? "#eab308" }}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-block mt-6 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#eab308" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
