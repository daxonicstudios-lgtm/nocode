import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta260(props: BlockProps) {
  const {
    theme,
    heading = "The Smarter Way to Work",
    subheading = "Automate the boring stuff. Focus on what matters.",
    buttonText = "Start Free",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden py-28" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#6366f1"} 0%, ${theme?.accent ?? "#a855f7"} 100%)` }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full" style={{ clipPath: "ellipse(50% 80% at 0% 50%)", backgroundColor: "rgba(255,255,255,0.05)" }} />
        <div className="absolute top-0 right-0 w-1/2 h-full" style={{ clipPath: "ellipse(50% 80% at 100% 50%)", backgroundColor: "rgba(255,255,255,0.05)" }} />
      </div>
      <div className="relative max-w-2xl mx-auto text-center px-4 text-white">
        <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-4 text-lg opacity-80">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full font-bold text-sm" style={{ color: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
