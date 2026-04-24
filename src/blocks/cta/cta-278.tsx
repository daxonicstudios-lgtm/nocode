import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta278(props: BlockProps) {
  const {
    theme,
    heading = "Simple Pricing. Powerful Tools.",
    subheading = "Start free, scale when you're ready.",
    buttonText = "View Plans",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative">
      <div className="absolute inset-0 flex flex-col sm:flex-row">
        <div className="h-1/2 sm:h-full sm:w-1/2" style={{ backgroundColor: theme?.primary ?? "#6366f1" }} />
        <div className="h-1/2 sm:h-full sm:w-1/2" style={{ backgroundColor: theme?.accent ?? "#f0f9ff" }} />
      </div>
      <div className="relative px-4 py-20 sm:py-28 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-white">{heading}</h2>
        <p className="mt-4 text-lg text-white/70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full font-bold text-sm shadow-lg" style={{ color: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
