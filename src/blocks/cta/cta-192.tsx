import type { BlockProps } from "@/blocks/types";
import { Diamond } from "lucide-react";

export default function Cta192(props: BlockProps) {
  const {
    theme,
    heading = "Crafted for those who demand more",
    subheading = "An invitation-only experience for the most ambitious creators.",
    buttonText = "Apply Now",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24 relative overflow-hidden" style={{ backgroundColor: "#111111", color: "#e8dcc8" }}>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #b8860b 0, #b8860b 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
      <div className="relative max-w-2xl mx-auto text-center">
        <Diamond className="w-7 h-7 mx-auto mb-4 text-amber-500" />
        <p className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-4">Premium Collection</p>
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-50">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-3 border border-amber-500/40 rounded-full font-semibold text-sm text-amber-400 hover:bg-amber-500/10 transition">
          {buttonText}
        </a>
      </div>
    </section>
  );
}
