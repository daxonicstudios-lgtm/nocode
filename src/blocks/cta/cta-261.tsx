import type { BlockProps } from "@/blocks/types";
import { PartyPopper } from "lucide-react";

export default function Cta261(props: BlockProps) {
  const {
    theme,
    heading = "You Did It!",
    subheading = "Celebrate your wins with tools that keep you ahead.",
    buttonText = "Claim Your Reward",
    buttonUrl = "#",
  } = props;

  const dots = [
    { top: "10%", left: "5%", size: 8, color: theme?.primary ?? "#f59e0b" },
    { top: "15%", right: "10%", size: 6, color: theme?.accent ?? "#ef4444" },
    { top: "25%", left: "15%", size: 10, color: "#6366f1" },
    { top: "8%", right: "25%", size: 5, color: "#10b981" },
    { top: "30%", right: "5%", size: 7, color: "#f59e0b" },
    { top: "20%", left: "40%", size: 4, color: "#ec4899" },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-28" style={{ backgroundColor: theme?.background ?? "#fffbeb", color: theme?.foreground ?? "#1c1917" }}>
      {dots.map((d, i) => (
        <div key={i} className="absolute rounded-full" style={{ top: d.top, left: d.left, right: (d as Record<string, unknown>).right as string | undefined, width: d.size, height: d.size, backgroundColor: d.color, opacity: 0.6 }} />
      ))}
      <div className="relative max-w-xl mx-auto text-center">
        <PartyPopper className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
        <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-3 text-lg opacity-60">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
