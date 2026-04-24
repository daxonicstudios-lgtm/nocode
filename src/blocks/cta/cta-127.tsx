import type { BlockProps } from "@/blocks/types";
import { Coffee } from "lucide-react";

export default function Cta127(props: BlockProps) {
  const {
    theme,
    heading = "Good Things Take Time",
    bodyText = "We believe in slow, intentional growth. Our platform helps you build something meaningful — not just fast.",
    buttonText = "Start Your Journey",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background || "#fffbeb", color: theme?.foreground || "#78350f" }}>
      <div className="max-w-lg mx-auto border-2 border-dashed p-8 md:p-10 rounded-sm text-center" style={{ borderColor: theme?.primary || "#92400e" }}>
        <Coffee className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary || "#92400e" }} />
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">{heading}</h2>
        <p className="font-serif text-sm opacity-80 mb-6 leading-relaxed">{bodyText}</p>
        <a href={buttonUrl} className="inline-block px-6 py-3 text-white rounded-sm font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#92400e" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
