import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Flame } from "lucide-react";

export default function Cta200(props: BlockProps) {
  const {
    theme,
    heading = "Ignite your creativity",
    subheading = "The ultimate no-code platform for ambitious builders.",
    buttonText = "Start Free",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-5 py-24" style={{ color: "#fff" }}>
      <div className="absolute inset-0 animate-[fireGlow_5s_ease_infinite]" style={{ background: `linear-gradient(180deg, #0a0a0a, ${theme?.primary ?? "#b91c1c"}, #f59e0b, #0a0a0a)`, backgroundSize: "100% 400%" }} />
      <style>{`@keyframes fireGlow{0%,100%{background-position:50% 0%}50%{background-position:50% 100%}}`}</style>
      <div className="relative max-w-2xl mx-auto text-center">
        <Flame className="w-10 h-10 mx-auto mb-4 text-orange-300" />
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 text-lg opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-semibold text-sm hover:bg-white/20 transition">
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
