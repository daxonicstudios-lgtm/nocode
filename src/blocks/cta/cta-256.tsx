import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta256(props: BlockProps) {
  const {
    theme,
    heading = "Ride the Wave of Innovation",
    subheading = "The future of work is here. Are you ready?",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
      <div className="absolute top-0 left-0 w-full h-24" style={{ backgroundColor: theme?.background ?? "#ffffff", clipPath: "ellipse(60% 100% at 50% 0%)" }} />
      <div className="relative px-4 pt-32 pb-20 text-center text-white">
        <h2 className="text-3xl sm:text-5xl font-extrabold">{heading}</h2>
        <p className="mt-4 text-lg opacity-80 max-w-xl mx-auto">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm" style={{ backgroundColor: "#ffffff", color: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20" style={{ backgroundColor: theme?.background ?? "#ffffff", clipPath: "ellipse(60% 100% at 50% 100%)" }} />
    </section>
  );
}
