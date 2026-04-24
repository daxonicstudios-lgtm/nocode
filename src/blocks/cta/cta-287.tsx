import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

export default function Cta287(props: BlockProps) {
  const {
    theme,
    heading = "Redefine What's Possible",
    bodyText = "We believe every creator deserves tools that match their ambition. This is your invitation to build without boundaries.",
    buttonText = "Begin Your Journey",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20 sm:py-28" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0f0f0f" }}>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-10 items-start">
        <div className="sm:col-span-1">
          <span className="text-[120px] sm:text-[160px] font-serif font-bold leading-none" style={{ color: theme?.primary ?? "#dc2626", opacity: 0.15 }}>&ldquo;</span>
        </div>
        <div className="sm:col-span-2">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-snug">{heading}</h2>
          <p className="mt-6 text-lg leading-relaxed opacity-60 font-light">{bodyText}</p>
          <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider border-b-2 pb-1" style={{ color: theme?.primary ?? "#dc2626", borderColor: theme?.primary ?? "#dc2626" }}>
            {buttonText} <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
