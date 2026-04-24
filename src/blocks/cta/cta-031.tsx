import type { BlockProps } from "@/blocks/types";
import { Clock } from "lucide-react";

export default function Cta031(props: BlockProps) {
  const {
    theme,
    heading = "Limited time offer",
    subheading = "Get 50% off your first year. Offer ends this Friday.",
    buttonText = "Claim Your Discount",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: (theme?.primary ?? "#dc2626") + "15", color: theme?.primary ?? "#dc2626" }}>
          <Clock className="w-4 h-4" /> Ends in 3 days
        </div>
        <h2 className="text-3xl sm:text-4xl font-black">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-lg text-white font-bold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: theme?.primary ?? "#dc2626" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
