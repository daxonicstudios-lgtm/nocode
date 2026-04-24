import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta001(props: BlockProps) {
  const { theme, heading = "Ready to build something great?", subheading = "Start your free trial today. No credit card required.", buttonText = "Start free trial", buttonUrl = "#", secondaryButtonText = "Book a demo", secondaryButtonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-70">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#000" }}>
            {buttonText}<ArrowRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-sm border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
