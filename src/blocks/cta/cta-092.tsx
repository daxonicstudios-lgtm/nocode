import type { BlockProps } from "@/blocks/types";
import { UtensilsCrossed, Calendar } from "lucide-react";

export default function Cta092(props: BlockProps) {
  const {
    theme,
    heading = "Reserve your table tonight",
    subheading = "Experience unforgettable dining — fresh ingredients, bold flavors, warm hospitality.",
    buttonText = "Make a Reservation",
    buttonUrl = "#",
    secondaryButtonText = "View Menu",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#1c1917", color: "#ffffff" }} className="px-5 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <UtensilsCrossed className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.accent ?? "#d97706" }} />
        <h2 className="text-3xl sm:text-4xl font-bold font-serif">{heading}</h2>
        <p className="mt-4 opacity-70 max-w-md mx-auto">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm" style={{ backgroundColor: theme?.accent ?? "#d97706", color: "#000" }}>
            <Calendar className="w-4 h-4" />
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-medium text-sm border border-white/30">
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
