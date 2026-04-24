import type { BlockProps } from "@/blocks/types";
import { AlertTriangle } from "lucide-react";

export default function Cta032(props: BlockProps) {
  const {
    theme,
    heading = "Only 12 spots left",
    subheading = "Our cohort-based program fills up fast. Reserve your seat before it is too late.",
    buttonText = "Reserve My Spot",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fef2f2", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-lg mx-auto text-center">
        <AlertTriangle className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary ?? "#ef4444" }} />
        <h2 className="text-3xl font-black">{heading}</h2>
        <p className="mt-3 text-sm opacity-60">{subheading}</p>
        <div className="mt-6 flex justify-center gap-3">
          {["12", ":", "04", ":", "37"].map((val, i) => (
            <span key={i} className={i % 2 === 1 ? "text-2xl font-bold opacity-30" : "text-2xl font-mono font-black"}>
              {val}
            </span>
          ))}
        </div>
        <p className="text-xs opacity-40 mt-1">hours : minutes : seconds</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#ef4444" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
