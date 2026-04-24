import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta281(props: BlockProps) {
  const {
    theme,
    heading = "Center of Everything",
    subheading = "Your hub for productivity, collaboration, and growth.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  const rings = [200, 320, 440, 560];

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:py-32" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#ffffff" }}>
      <div className="absolute inset-0 flex items-center justify-center">
        {rings.map((size, i) => (
          <div key={i} className="absolute rounded-full border" style={{ width: size, height: size, borderColor: `rgba(255,255,255,${0.06 - i * 0.01})` }} />
        ))}
      </div>
      <div className="relative max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-4 text-lg opacity-60">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full font-bold text-sm" style={{ color: theme?.primary ?? "#0f172a" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
