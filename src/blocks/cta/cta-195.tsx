import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Cta195(props: BlockProps) {
  const {
    theme,
    heading = "The gold standard in website building",
    subheading = "Trusted by luxury brands worldwide.",
    buttonText = "Schedule a Demo",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24 relative overflow-hidden" style={{ backgroundColor: "#0a0a0a", color: "#f5f0e8" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #b8860b, transparent 70%)" }} />
      <div className="relative max-w-3xl mx-auto">
        <div className="rounded-2xl border border-amber-500/20 p-8 sm:p-12 text-center backdrop-blur-sm bg-white/5">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{heading}</h2>
          <p className="mt-3 opacity-50">{subheading}</p>
          <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-full font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#b8860b", color: "#0a0a0a" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
