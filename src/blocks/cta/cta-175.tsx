import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta175(props: BlockProps) {
  const {
    theme,
    heading = "Build something remarkable",
    subheading = "No limits, no code, just results.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-5 py-24" style={{ backgroundColor: theme?.background ?? "#fff", color: theme?.foreground }}>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polygon points="0,70 100,30 100,100 0,100" fill={theme?.primary ?? "#2563eb"} opacity="0.06" />
      </svg>
      <div className="relative max-w-3xl mx-auto">
        <div className="max-w-lg">
          <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
          <p className="mt-4 text-lg opacity-70">{subheading}</p>
          <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
