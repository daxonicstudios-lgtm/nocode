import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta290(props: BlockProps) {
  const { theme, heading = "Launch in minutes", subheading = "No credit card required. Cancel anytime.", buttonText = "Get Started", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-4 text-lg opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
