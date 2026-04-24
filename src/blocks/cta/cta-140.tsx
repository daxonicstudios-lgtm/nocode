import type { BlockProps } from "@/blocks/types";
import { Newspaper } from "lucide-react";

export default function Cta140(props: BlockProps) {
  const {
    theme,
    heading = "The Weekly Digest",
    subheading = "Curated insights for builders, designers, and entrepreneurs.",
    buttonText = "Subscribe Free",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background || "#1e1b4b", color: theme?.foreground || "#e0e7ff" }}>
      <div className="max-w-md mx-auto text-center">
        <Newspaper className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary || "#818cf8" }} />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-60 mb-6">{subheading}</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="you@company.com" className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-sm outline-none placeholder:text-white/40" />
          <button type="submit" className="px-6 py-3 rounded-lg font-semibold text-sm text-black hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#818cf8" }}>
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
