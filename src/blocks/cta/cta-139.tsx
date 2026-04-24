import type { BlockProps } from "@/blocks/types";
import { Quote } from "lucide-react";

export default function Cta139(props: BlockProps) {
  const { theme, heading = "Try it risk-free today", subheading = "Start small, dream big.", bodyText = "This product changed how we work. We shipped 3x faster in the first month.", buttonText = "Join Them", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <Quote className="w-8 h-8 mb-4 opacity-30" />
          <p className="text-xl italic opacity-80">{bodyText}</p>
          <p className="mt-4 text-sm font-semibold opacity-60">— Happy Customer</p>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-block px-8 py-3 rounded-xl font-bold text-white text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
