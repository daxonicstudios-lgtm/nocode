import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta290(props: BlockProps) {
  const {
    theme,
    heading = "Perspective",
    subheading = "Where bold ideas meet elegant execution.",
    bodyText = "Our platform is designed for those who refuse to settle. Craft digital experiences that leave a lasting impression.",
    buttonText = "Explore",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0a0a0a" }}>
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2 opacity-40">Issue No. 01</p>
          <h2 className="text-5xl sm:text-7xl font-serif font-bold">{heading}</h2>
          <div className="w-12 h-1 mt-4" style={{ backgroundColor: theme?.primary ?? "#e11d48" }} />
        </div>
        <div>
          <h3 className="text-xl font-serif italic opacity-80">{subheading}</h3>
          <p className="mt-4 opacity-50 leading-relaxed font-light">{bodyText}</p>
          <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#e11d48" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
