import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta178(props: BlockProps) {
  const {
    theme,
    heading = "The platform that adapts to you",
    subheading = "Flexible, powerful, and surprisingly simple.",
    buttonText = "Try Free",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#fff" }}>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl rotate-12 opacity-10 bg-white" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl -rotate-6 opacity-10 bg-white" />
        <div className="relative text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
          <p className="mt-4 text-lg opacity-70 max-w-xl mx-auto">{subheading}</p>
          <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#0f172a" }}>
            {buttonText} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
