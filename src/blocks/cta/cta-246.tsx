import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

export default function Cta246(props: BlockProps) {
  const {
    theme,
    heading = "Ready to elevate your brand?",
    subheading = "Join 5,000+ companies growing faster with our platform.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href={secondaryButtonUrl} className="group inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-medium text-sm border-2 transition-all duration-300 hover:shadow-lg" style={{ borderColor: theme?.primary ?? "#6366f1", color: theme?.primary ?? "#6366f1" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
