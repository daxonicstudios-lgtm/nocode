import type { BlockProps } from "@/blocks/types";
import { Flame, Target } from "lucide-react";

export default function Cta233(props: BlockProps) {
  const {
    theme,
    heading = "Keep your streak alive",
    subheading = "You have a 14-day streak! Log in today to keep it going.",
    buttonText = "Continue Streak",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#1c1917", color: theme?.foreground ?? "#fafaf9" }} className="px-5 py-20">
      <div className="max-w-lg mx-auto text-center">
        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style={i < 6 ? { backgroundColor: theme?.primary ?? "#f97316", color: "#fff" } : { backgroundColor: "#44403c", color: "#a8a29e" }}>
              {i < 6 ? <Flame className="w-4 h-4" /> : "?"}
            </div>
          ))}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium" style={{ color: theme?.primary ?? "#f97316" }}>
          <Target className="w-4 h-4" /> Daily goal: Complete 1 lesson
        </div>
        <div className="mt-6">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#f97316" }}>
            <Flame className="w-4 h-4" /> {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
