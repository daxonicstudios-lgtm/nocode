import type { BlockProps } from "@/blocks/types";
import { Award, Star } from "lucide-react";

export default function Cta232(props: BlockProps) {
  const {
    theme,
    heading = "Unlock your next badge",
    subheading = "You are 80% of the way to earning the Expert badge. Keep going!",
    buttonText = "Continue Challenge",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-md mx-auto">
        <div className="rounded-2xl border p-6 text-center" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}15` }}>
            <Award className="w-8 h-8" style={{ color: theme?.primary ?? "#8b5cf6" }} />
          </div>
          <h3 className="text-xl font-bold">{heading}</h3>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
          <div className="mt-5 w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}20` }}>
            <div className="h-full rounded-full w-4/5" style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }} />
          </div>
          <div className="mt-2 flex justify-between text-xs opacity-50">
            <span>400 / 500 XP</span>
            <span>80%</span>
          </div>
          <div className="mt-4 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4" fill={s <= 4 ? theme?.primary ?? "#8b5cf6" : "none"} style={{ color: theme?.primary ?? "#8b5cf6" }} />
            ))}
          </div>
          <a href={buttonUrl} className="inline-block mt-5 w-full py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
