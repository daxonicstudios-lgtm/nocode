import type { BlockProps } from "@/blocks/types";
import { Compass } from "lucide-react";

export default function Cta130(props: BlockProps) {
  const {
    theme,
    heading = "Explore What's Possible",
    subheading = "Handcrafted tools for the modern creator.",
    buttonText = "Begin Exploring",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.accent || "#faebd7", color: theme?.foreground || "#4a3728" }}>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-24 h-24 rounded-full border-4 flex items-center justify-center flex-shrink-0" style={{ borderColor: theme?.primary || "#8b4513" }}>
          <Compass className="w-10 h-10" style={{ color: theme?.primary || "#8b4513" }} />
        </div>
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">{heading}</h2>
          <p className="font-serif opacity-70 mb-4">{subheading}</p>
          <a href={buttonUrl} className="inline-block px-6 py-3 text-white font-serif font-semibold rounded-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#8b4513" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
