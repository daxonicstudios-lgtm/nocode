import type { BlockProps } from "@/blocks/types";
import { Rocket } from "lucide-react";

export default function Cta199(props: BlockProps) {
  const {
    theme,
    heading = "Launch faster than ever",
    subheading = "From zero to live website in minutes, not months.",
    buttonText = "Launch Now",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-5 py-24" style={{ color: "#fff" }}>
      <div className="absolute inset-0 animate-[cosmicPulse_7s_ease_infinite]" style={{ background: `linear-gradient(135deg, #0c0a3e, ${theme?.primary ?? "#2563eb"}, #7c3aed, #0c0a3e)`, backgroundSize: "300% 300%" }} />
      <style>{`@keyframes cosmicPulse{0%,100%{background-position:0% 50%}33%{background-position:100% 0%}66%{background-position:50% 100%}}`}</style>
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-white/10 backdrop-blur-sm">
          <Rocket className="w-8 h-8" />
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 text-lg opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-4 rounded-full bg-white font-bold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#2563eb" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
