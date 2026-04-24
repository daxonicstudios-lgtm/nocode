import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Target } from "lucide-react";

export default function Cta156(props: BlockProps) {
  const {
    theme,
    heading = "We're 82% to our goal",
    subheading = "Help us reach 10,000 early adopters. Be part of the movement.",
    buttonText = "Join Now",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Target className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary ?? "#2563eb" }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70">{subheading}</p>
        <div className="mt-6 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{ width: "82%", backgroundColor: theme?.primary ?? "#2563eb" }} />
        </div>
        <div className="mt-2 flex justify-between text-sm opacity-60">
          <span>8,200 joined</span>
          <span>10,000 goal</span>
        </div>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
