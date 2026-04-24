import type { BlockProps } from "@/blocks/types";
import { Sparkles, Calendar } from "lucide-react";

export default function Cta065(props: BlockProps) {
  const {
    theme,
    heading = "Let's build something amazing together",
    subheading = "Book a free strategy session with our team or start exploring on your own.",
    buttonText = "Start Free",
    buttonUrl = "#",
    secondaryButtonText = "Book a Call",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.primary ?? "#4f46e5", color: "#ffffff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 text-base opacity-80 max-w-xl mx-auto">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-bold text-sm" style={{ backgroundColor: "#ffffff", color: theme?.primary ?? "#4f46e5" }}>
            <Sparkles className="w-4 h-4" />
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-medium text-sm border border-white/40">
            <Calendar className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
