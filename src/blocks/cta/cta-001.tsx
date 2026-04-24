import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta001(props: BlockProps) {
  const {
    theme,
    heading = "Ready to build something great?",
    subheading = "Start your free trial today. No credit card required.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-70">{subheading}</p>
        <a
          href={buttonUrl}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
