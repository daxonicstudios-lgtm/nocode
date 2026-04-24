import type { BlockProps } from "@/blocks/types";
import { MoveRight } from "lucide-react";

export default function Cta288(props: BlockProps) {
  const {
    theme,
    heading = "Volume XII",
    subheading = "The Creator Economy Issue",
    bodyText = "Inside: tools, stories, and strategies from the world's most innovative builders.",
    buttonText = "Read Now",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#1c1917", color: "#faf9f6" }}>
      <div className="max-w-2xl mx-auto">
        <div className="border-t border-b border-white/20 py-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] opacity-40 font-semibold">{heading}</p>
          <h2 className="mt-4 text-4xl sm:text-6xl font-serif font-bold italic">{subheading}</h2>
          <p className="mt-6 text-base opacity-50 font-light max-w-md mx-auto leading-relaxed">{bodyText}</p>
          <a href={buttonUrl} className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest" style={{ color: theme?.accent ?? "#fbbf24" }}>
            {buttonText} <MoveRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
