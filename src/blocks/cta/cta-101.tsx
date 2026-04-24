import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta101(props: BlockProps) {
  const {
    theme,
    heading = "Ready to Transform Your Business?",
    subheading = "Join thousands of companies already growing with us.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-2xl mx-auto rounded-2xl shadow-2xl p-8 md:p-12 text-center" style={{ backgroundColor: theme?.accent || "#f8fafc" }}>
        <h2 className="text-2xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-base md:text-lg opacity-80 mb-8">{subheading}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition hover:opacity-90"
            style={{ backgroundColor: theme?.primary || "#2563eb" }}
          >
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 font-semibold transition hover:opacity-80"
            style={{ borderColor: theme?.primary || "#2563eb", color: theme?.primary || "#2563eb" }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
