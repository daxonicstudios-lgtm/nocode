import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta276(props: BlockProps) {
  const {
    theme,
    heading = "Two Sides. One Platform.",
    subheading = "Design meets engineering in perfect harmony.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative min-h-[400px] flex items-center">
      <div className="absolute inset-0 flex">
        <div className="w-1/2" style={{ backgroundColor: theme?.primary ?? "#0f172a" }} />
        <div className="w-1/2" style={{ backgroundColor: theme?.background ?? "#ffffff" }} />
      </div>
      <div className="relative w-full max-w-2xl mx-auto px-4 text-center">
        <div className="rounded-3xl px-8 py-14 sm:px-14 bg-white shadow-2xl" style={{ color: theme?.foreground ?? "#0f172a" }}>
          <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#0f172a" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
