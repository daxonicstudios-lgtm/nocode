import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta155(props: BlockProps) {
  const {
    theme,
    heading = "Your team deserves better tools",
    subheading = "Thousands of teams have already made the switch.",
    buttonText = "Get Started Now",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-12 border border-gray-200" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex -space-x-3 shrink-0">
            {["#6366f1", "#ec4899", "#14b8a6", "#f59e0b"].map((c, i) => (
              <div key={i} className="w-14 h-14 rounded-full border-3 border-white flex items-center justify-center text-white font-bold shadow-lg" style={{ backgroundColor: c }}>
                {["JD", "KS", "AO", "ML"][i]}
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
            <p className="mt-2 opacity-70">{subheading}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
              {buttonText} <ArrowRight className="w-4 h-4" />
            </a>
            <a href={secondaryButtonUrl} className="px-6 py-3 rounded-lg font-semibold text-sm border border-current opacity-70 hover:opacity-100 transition text-center">
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
