import type { BlockProps } from "@/blocks/types";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Cta063(props: BlockProps) {
  const {
    theme,
    heading = "Ready to transform your business?",
    bodyText = "Start your 14-day free trial with full access to all features. No credit card required.",
    buttonText = "Get Started",
    buttonUrl = "#",
    secondaryButtonText = "Chat with Us",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 rounded-2xl p-8 sm:p-12" style={{ backgroundColor: theme?.muted ?? "#f1f5f9" }}>
        <div className="max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-3 text-sm opacity-70">{bodyText}</p>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-medium text-sm border" style={{ borderColor: theme?.secondary ?? "#d1d5db" }}>
            <MessageCircle className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
