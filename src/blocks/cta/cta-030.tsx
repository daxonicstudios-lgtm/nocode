import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta030(props: BlockProps) {
  const {
    theme,
    heading = "Join the waitlist",
    subheading = "Be among the first to experience our next-generation platform.",
    buttonText = "Join Now",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-5" style={{ background: `linear-gradient(90deg, ${theme?.primary ?? "#0ea5e9"}, ${theme?.accent ?? "#6366f1"})` }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <p className="text-white font-bold text-sm">{heading}</p>
          <p className="text-white/70 text-xs mt-0.5">{subheading}</p>
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white font-bold text-xs shrink-0" style={{ color: theme?.primary ?? "#0ea5e9" }}>
          {buttonText} <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
