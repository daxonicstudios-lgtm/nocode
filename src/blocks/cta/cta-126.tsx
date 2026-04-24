import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Cta126(props: BlockProps) {
  const {
    theme,
    heading = "Crafted with Care, Built to Last",
    subheading = "Join a community that values quality over quantity.",
    buttonText = "Join the Club",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background || "#fef7ed", color: theme?.foreground || "#451a03" }}>
      <div className="max-w-xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(3)].map((_, i) => (
            <Star key={i} className="w-5 h-5" style={{ color: theme?.primary || "#b45309" }} fill={theme?.primary || "#b45309"} />
          ))}
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">{heading}</h2>
        <p className="opacity-70 font-serif mb-8">{subheading}</p>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-sm text-white font-semibold tracking-wide hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#b45309" }}>
          {buttonText}
        </a>
        <div className="mt-6 w-24 h-0.5 mx-auto opacity-30" style={{ backgroundColor: theme?.primary || "#b45309" }} />
      </div>
    </section>
  );
}
