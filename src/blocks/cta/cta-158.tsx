import type { BlockProps } from "@/blocks/types";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Cta158(props: BlockProps) {
  const {
    theme,
    heading = "Almost there — 90% enrolled",
    subheading = "Only 47 spots remaining in our flagship program.",
    buttonText = "Reserve Your Spot",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto text-center rounded-2xl border border-gray-200 p-8" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
        <TrendingUp className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary ?? "#2563eb" }} />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-70 text-sm">{subheading}</p>
        <div className="mt-5 bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div className="h-full rounded-full" style={{ width: "90%", backgroundColor: theme?.primary ?? "#2563eb" }} />
        </div>
        <p className="mt-2 text-xs font-medium" style={{ color: theme?.primary ?? "#2563eb" }}>453 / 500 enrolled</p>
        <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
