import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta066(props: BlockProps) {
  const {
    theme,
    heading = "Start your journey today",
    subheading = "No credit card required. Cancel anytime.",
    buttonText = "Get Started",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="px-5 py-24 w-full relative overflow-hidden"
      style={{ backgroundColor: theme?.primary ?? "#1e3a5f", color: "#ffffff" }}
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)" }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-70">{subheading}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-white font-bold text-sm" style={{ color: theme?.primary ?? "#1e3a5f" }}>
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
