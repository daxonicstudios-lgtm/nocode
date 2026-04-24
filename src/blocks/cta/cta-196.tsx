import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta196(props: BlockProps) {
  const {
    theme,
    heading = "Start creating today",
    subheading = "Build beautiful websites that convert — no code required.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-5 py-24" style={{ color: "#fff" }}>
      <div className="absolute inset-0 animate-[gradientShift_8s_ease_infinite]" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#2563eb"}, #7c3aed, #ec4899, ${theme?.primary ?? "#2563eb"})`, backgroundSize: "300% 300%" }} />
      <style>{`@keyframes gradientShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}`}</style>
      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 text-lg opacity-80">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-semibold text-sm hover:opacity-90 transition" style={{ color: theme?.primary ?? "#2563eb" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
