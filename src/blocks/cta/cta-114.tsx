import type { BlockProps } from "@/blocks/types";
import { Tag } from "lucide-react";

export default function Cta114(props: BlockProps) {
  const {
    theme,
    heading = "Launch Special — Save 40%",
    subheading = "Was $49/mo — Now $29/mo",
    bodyText = "Lock in this price forever. Offer ends soon.",
    buttonText = "Claim This Deal",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="max-w-lg mx-auto rounded-2xl p-8 text-center shadow-lg" style={{ backgroundColor: theme?.accent || "#fef3c7" }}>
        <Tag className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary || "#d97706" }} />
        <h2 className="text-2xl md:text-3xl font-bold mb-1">{heading}</h2>
        <p className="text-lg font-bold mb-2" style={{ color: theme?.primary || "#d97706" }}>{subheading}</p>
        <p className="text-sm opacity-70 mb-6">{bodyText}</p>
        <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#d97706" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
