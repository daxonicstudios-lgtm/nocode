import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Heart } from "lucide-react";

export default function Cta154(props: BlockProps) {
  const {
    theme,
    heading = "Loved by over 5,000 customers",
    subheading = "Real people, real results. Join them and start thriving.",
    buttonText = "Try It Free",
    buttonUrl = "#",
  } = props;

  const colors = ["#f87171", "#fb923c", "#a78bfa", "#34d399", "#60a5fa", "#f472b6", "#fbbf24"];

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#1e293b", color: "#fff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center -space-x-3 mb-4">
          {colors.map((c, i) => (
            <div key={i} className="w-11 h-11 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: c }}>
              {String.fromCharCode(65 + i)}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-1 mb-4">
          <Heart className="w-4 h-4 fill-red-400 text-red-400" />
          <span className="text-sm opacity-80">5,247 happy users</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-3 text-lg opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#1e293b" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
