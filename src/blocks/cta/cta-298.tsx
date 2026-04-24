import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta298(props: BlockProps) {
  const {
    theme,
    heading = "DO IT NOW.",
    subheading = "Stop overthinking. Start building.",
    buttonText = "LET'S GO",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-24 sm:py-32" style={{ backgroundColor: theme?.primary ?? "#dc2626", color: "#ffffff" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-6xl sm:text-8xl font-black tracking-tighter leading-none">{heading}</h2>
        <p className="mt-6 text-xl sm:text-2xl font-bold opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-10 inline-flex items-center gap-3 px-12 py-5 bg-white rounded-full font-black text-lg tracking-wider" style={{ color: theme?.primary ?? "#dc2626" }}>
          {buttonText} <ArrowRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
