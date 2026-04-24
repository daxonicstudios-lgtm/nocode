import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta089(props: BlockProps) {
  const {
    theme,
    heading = "Scale without boundaries",
    subheading = "Our infrastructure handles billions of requests so you don't have to worry.",
    buttonText = "Explore Plans",
    buttonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#3b82f6";

  return (
    <section style={{ backgroundColor: theme?.background ?? "#020617", color: "#ffffff" }} className="px-5 py-20">
      <div
        className="max-w-3xl mx-auto rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{
          border: `1px solid ${primary}50`,
          boxShadow: `0 0 40px ${primary}20`,
          background: `linear-gradient(135deg, ${primary}08, transparent)`,
        }}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60 max-w-md">{subheading}</p>
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-white font-semibold text-sm shrink-0" style={{ backgroundColor: primary }}>
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
