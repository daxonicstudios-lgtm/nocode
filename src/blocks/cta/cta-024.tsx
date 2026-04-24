import type { BlockProps } from "@/blocks/types";
import { TrendingUp } from "lucide-react";

export default function Cta024(props: BlockProps) {
  const {
    theme,
    heading = "Results speak louder",
    buttonText = "Start Growing",
    buttonUrl = "#",
    items = [
      { title: "3x", description: "Faster time to market" },
      { title: "40%", description: "Increase in conversions" },
      { title: "85%", description: "Customer retention" },
      { title: "24/7", description: "Expert support" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <TrendingUp className="w-7 h-7 mx-auto mb-4" style={{ color: theme?.primary ?? "#10b981" }} />
        <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {items.slice(0, 4).map((stat, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl font-black" style={{ color: theme?.primary ?? "#10b981" }}>{stat.title}</div>
              <div className="text-xs opacity-50 mt-1">{stat.description}</div>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="mt-10 inline-block px-8 py-3.5 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#10b981" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
