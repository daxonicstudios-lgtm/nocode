import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta172(props: BlockProps) {
  const {
    theme,
    heading = "The future of design is here",
    subheading = "Create stunning websites without writing a single line of code.",
    buttonText = "Get Early Access",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden" style={{ color: theme?.foreground }}>
      <div className="absolute inset-0" style={{ backgroundColor: theme?.background ?? "#fff" }} />
      <div className="absolute inset-0" style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)", backgroundColor: theme?.primary ?? "#2563eb", opacity: 0.08 }} />
      <div className="relative px-5 py-24 max-w-2xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: theme?.primary ?? "#2563eb" }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-7 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
