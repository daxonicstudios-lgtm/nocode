import type { BlockProps } from "@/blocks/types";
import { Rocket } from "lucide-react";

export default function Cta133(props: BlockProps) {
  const {
    theme,
    heading = "Launch Into the Unknown",
    subheading = "Your next breakthrough is one click away.",
    buttonText = "Blast Off",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: theme?.background || "#030712", color: theme?.foreground || "#f9fafb" }}>
      <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 50% 50%, ${theme?.primary || "#06b6d4"}, transparent 70%)` }} />
      <div className="relative max-w-md mx-auto text-center">
        <Rocket className="w-12 h-12 mx-auto mb-6" style={{ color: theme?.primary || "#06b6d4" }} />
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
        <p className="opacity-50 mb-8">{subheading}</p>
        <a href={buttonUrl} className="inline-block px-10 py-4 rounded-full font-bold text-black hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#06b6d4" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
