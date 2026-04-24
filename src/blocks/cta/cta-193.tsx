import type { BlockProps } from "@/blocks/types";
import { Award, ArrowRight } from "lucide-react";

export default function Cta193(props: BlockProps) {
  const {
    theme,
    heading = "Elevate your digital presence",
    subheading = "Premium tools, white-glove support, and unmatched performance.",
    buttonText = "Explore Premium",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: "#1a1a2e", color: "#d4c5a9" }}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <Award className="w-8 h-8 mb-3 text-amber-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm transition hover:opacity-90" style={{ backgroundColor: theme?.primary ?? "#b8860b", color: "#0a0a0a" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="shrink-0 grid grid-cols-2 gap-3">
          {["Unlimited", "Priority", "Dedicated", "Custom"].map((label) => (
            <div key={label} className="px-5 py-4 rounded-xl border border-amber-500/20 text-center bg-white/5">
              <p className="text-sm font-semibold text-amber-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
