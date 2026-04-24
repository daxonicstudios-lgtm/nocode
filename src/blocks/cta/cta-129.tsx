import type { BlockProps } from "@/blocks/types";
import { Bookmark } from "lucide-react";

export default function Cta129(props: BlockProps) {
  const {
    theme,
    heading = "A Timeless Experience Awaits",
    bodyText = "Step into a world where classic design meets modern functionality. Your audience will feel the difference.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background || "#fdf6e3", color: theme?.foreground || "#5c4033" }}>
      <div className="max-w-md mx-auto text-center">
        <Bookmark className="w-8 h-8 mx-auto mb-3" style={{ color: theme?.primary || "#8b6914" }} fill={theme?.primary || "#8b6914"} />
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 italic">{heading}</h2>
        <p className="font-serif text-sm leading-relaxed opacity-70 mb-8">{bodyText}</p>
        <a href={buttonUrl} className="inline-block px-8 py-3 text-white font-serif font-semibold hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#8b6914" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
