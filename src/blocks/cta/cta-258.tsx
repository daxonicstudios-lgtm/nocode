import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta258(props: BlockProps) {
  const {
    theme,
    heading = "Scale Your Business Faster",
    subheading = "Tools designed for ambitious teams.",
    buttonText = "Get Early Access",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: theme?.background ?? "#0f172a", color: "#ffffff" }}>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-32" style={{ background: theme?.primary ?? "#8b5cf6", clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 100%)", opacity: 0.2 }} />
        <div className="absolute bottom-0 right-0 w-full h-32" style={{ background: theme?.primary ?? "#8b5cf6", clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)", opacity: 0.2 }} />
      </div>
      <div className="relative max-w-2xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight">{heading}</h2>
        <p className="mt-4 text-lg opacity-60">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white" style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
