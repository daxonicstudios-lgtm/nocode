import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Cta059(props: BlockProps) {
  const {
    theme,
    heading = "Loved by 50,000+ users",
    subheading = "See why teams choose us for their most critical projects.",
    buttonText = "Join Them",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-sm mx-auto rounded-2xl border p-8 text-center" style={{ borderColor: theme?.secondary ?? "#e5e7eb", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" style={{ color: theme?.accent ?? "#f59e0b" }} />
          ))}
        </div>
        <h2 className="mt-5 text-xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-block mt-6 w-full py-3 rounded-lg text-white font-medium text-sm"
          style={{ backgroundColor: theme?.primary ?? "#16a34a" }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
