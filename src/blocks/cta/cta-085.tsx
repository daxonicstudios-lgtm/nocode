import type { BlockProps } from "@/blocks/types";
import { Smartphone, Tablet, ArrowDown } from "lucide-react";

export default function Cta085(props: BlockProps) {
  const {
    theme,
    heading = "Available on all devices",
    subheading = "Download now and start your free 30-day trial.",
    buttonText = "App Store",
    secondaryButtonText = "Google Play",
    buttonUrl = "#",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.primary ?? "#4f46e5", color: "#ffffff" }}>
      <div className="max-w-xl mx-auto text-center">
        <ArrowDown className="w-8 h-8 mx-auto mb-4 animate-bounce opacity-70" />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-80">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white font-bold text-sm" style={{ color: theme?.primary ?? "#4f46e5" }}>
            <Smartphone className="w-5 h-5" />
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm border-2 border-white/40">
            <Tablet className="w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
