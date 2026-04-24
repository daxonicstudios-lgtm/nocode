import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

export default function Cta007(props: BlockProps) {
  const {
    theme,
    heading = "See it in action",
    subheading = "Watch a 2-minute demo and discover how teams ship faster with our platform.",
    buttonText = "Watch Demo",
    buttonUrl = "#",
    secondaryButtonText = "Sign Up Free",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 rounded-xl overflow-hidden aspect-video relative" style={{ backgroundColor: theme?.accent ?? "#1e293b" }}>
          {imageUrl ? (
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Play className="w-12 h-12 text-white opacity-60" />
            </div>
          )}
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-4 opacity-60 leading-relaxed">{subheading}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={buttonUrl} className="px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}>
              {buttonText}
            </a>
            <a href={secondaryButtonUrl} className="px-6 py-3 rounded-lg font-medium text-sm border" style={{ borderColor: theme?.secondary ?? "#d1d5db" }}>
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
