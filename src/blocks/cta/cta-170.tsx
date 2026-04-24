import type { BlockProps } from "@/blocks/types";
import { Star, ArrowRight } from "lucide-react";

export default function Cta170(props: BlockProps) {
  const {
    theme,
    heading = "Our customers speak for us",
    subheading = "Don't take our word for it — the numbers tell the story.",
    buttonText = "Join Them",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-70">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 shrink-0">
          {[
            { val: "4.9/5", label: "Avg rating" },
            { val: "10K+", label: "Reviews" },
            { val: "98%", label: "Satisfaction" },
            { val: "50K+", label: "Users" },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-xl border border-gray-200">
              <div className="flex justify-center mb-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /></div>
              <p className="text-xl font-bold">{s.val}</p>
              <p className="text-xs opacity-60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
