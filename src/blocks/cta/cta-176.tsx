import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta176(props: BlockProps) {
  const {
    theme,
    heading = "Everything you need in one place",
    subheading = "Design, build, and launch without switching tools.",
    buttonText = "Start Building",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute top-4 left-4 w-full h-full rounded-2xl border border-gray-200 opacity-40" />
        <div className="absolute top-2 left-2 w-full h-full rounded-2xl border border-gray-200 opacity-60" />
        <div className="relative rounded-2xl border border-gray-200 p-8 sm:p-12" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
          <p className="mt-3 text-center opacity-70">{subheading}</p>
          <div className="mt-8 text-center">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
