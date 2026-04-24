import type { BlockProps } from "@/blocks/types";
import { ArrowRight, ArrowLeftRight } from "lucide-react";

export default function Cta236(props: BlockProps) {
  const {
    theme,
    heading = "See the transformation",
    subheading = "Our clients achieve incredible results. Your turn is next.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4 items-center">
          <div className="rounded-xl p-6 border" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
            <p className="text-xs font-semibold tracking-widest uppercase opacity-40 mb-3">Before</p>
            <div className="h-32 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme?.muted ?? "#f3f4f6" }}>
              <p className="text-sm opacity-50">Slow manual processes</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <ArrowLeftRight className="w-6 h-6 opacity-40" />
          </div>
          <div className="rounded-xl p-6 border-2" style={{ borderColor: theme?.primary ?? "#10b981" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: theme?.primary ?? "#10b981" }}>After</p>
            <div className="h-32 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${theme?.primary ?? "#10b981"}10` }}>
              <p className="text-sm font-medium" style={{ color: theme?.primary ?? "#10b981" }}>3x faster with automation</p>
            </div>
          </div>
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#10b981" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
