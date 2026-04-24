import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta046(props: BlockProps) {
  const {
    theme,
    heading = "Build something extraordinary",
    subheading = "The platform that scales with your ambition.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-5 py-24" style={{ backgroundColor: "#0f172a", color: "#f8fafc" }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-50">{subheading}</p>
        <a
          href={buttonUrl}
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
          style={{ backgroundColor: theme?.primary ?? "#22d3ee", color: "#0f172a" }}
        >
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
