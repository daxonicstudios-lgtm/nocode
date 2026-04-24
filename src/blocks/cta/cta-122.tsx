import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta122(props: BlockProps) {
  const {
    theme,
    heading = "NO MORE EXCUSES",
    bodyText = "Your competitors are already using this. Are you going to keep falling behind?",
    buttonText = "JOIN NOW",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.accent || "#fef08a", color: theme?.foreground || "#000" }}>
      <div className="max-w-xl mx-auto border-b-8 border-current pb-8">
        <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4">{heading}</h2>
        <p className="text-base md:text-lg font-mono mb-6">{bodyText}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-black uppercase text-sm tracking-wider hover:bg-gray-800 transition">
          {buttonText} <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
