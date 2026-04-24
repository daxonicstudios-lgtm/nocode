import type { BlockProps } from "@/blocks/types";
import { Gift } from "lucide-react";

export default function Cta265(props: BlockProps) {
  const {
    theme,
    heading = "Limited Time Offer",
    subheading = "Get 50% off your first 3 months. Don't miss out!",
    buttonText = "Grab the Deal",
    buttonUrl = "#",
  } = props;

  const sparkles = Array.from({ length: 16 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    color: ["#fbbf24", "#f59e0b", "#fcd34d", "#fde68a"][i % 4],
  }));

  return (
    <section className="relative overflow-hidden px-4 py-24" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"}, ${theme?.accent ?? "#db2777"})`, color: "#ffffff" }}>
      {sparkles.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{ top: s.top, left: s.left, width: s.size, height: s.size, backgroundColor: s.color, opacity: 0.7 }} />
      ))}
      <div className="relative max-w-lg mx-auto text-center">
        <Gift className="w-10 h-10 mx-auto mb-4 opacity-90" />
        <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-4 text-lg opacity-80">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-10 py-4 bg-white rounded-full font-bold text-sm" style={{ color: theme?.primary ?? "#7c3aed" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
