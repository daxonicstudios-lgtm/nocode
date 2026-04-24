import type { BlockProps } from "@/blocks/types";
import { Trophy } from "lucide-react";

export default function Cta263(props: BlockProps) {
  const {
    theme,
    heading = "Achievement Unlocked",
    subheading = "Your next milestone starts here.",
    buttonText = "Start Now",
    buttonUrl = "#",
  } = props;

  const confetti = ["#f59e0b", "#ef4444", "#3b82f6", "#10b981", "#8b5cf6", "#ec4899", "#f97316", "#06b6d4"];

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-28" style={{ backgroundColor: theme?.primary ?? "#1e1b4b", color: "#ffffff" }}>
      {confetti.map((c, i) => (
        <div key={i} className="absolute" style={{ top: `${10 + i * 8}%`, left: `${5 + i * 12}%`, width: 3, height: 16, backgroundColor: c, opacity: 0.5, transform: `rotate(${i * 40}deg)` }} />
      ))}
      {confetti.map((c, i) => (
        <div key={`r-${i}`} className="absolute" style={{ bottom: `${10 + i * 8}%`, right: `${5 + i * 11}%`, width: 3, height: 12, backgroundColor: c, opacity: 0.4, transform: `rotate(${-i * 35}deg)` }} />
      ))}
      <div className="relative max-w-lg mx-auto text-center">
        <Trophy className="w-12 h-12 mx-auto mb-4" style={{ color: theme?.accent ?? "#fbbf24" }} />
        <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-3 text-lg opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-10 py-4 rounded-full font-bold text-sm" style={{ backgroundColor: theme?.accent ?? "#fbbf24", color: theme?.primary ?? "#1e1b4b" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
