import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Cta197(props: BlockProps) {
  const {
    theme,
    heading = "The future is bright",
    subheading = "Join the next generation of website builders.",
    buttonText = "Join Waitlist",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-5 py-24" style={{ color: "#fff" }}>
      <div className="absolute inset-0 animate-[aurora_10s_ease_infinite]" style={{ background: `linear-gradient(45deg, #0f172a, ${theme?.primary ?? "#1e40af"}, #065f46, #0f172a)`, backgroundSize: "400% 400%" }} />
      <style>{`@keyframes aurora{0%,100%{background-position:0% 50%}25%{background-position:100% 0%}50%{background-position:100% 100%}75%{background-position:0% 100%}}`}</style>
      <div className="relative max-w-2xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl sm:text-5xl font-bold">{heading}</h2>
        <p className="mt-4 text-lg opacity-70">{subheading}</p>
        <a href={buttonUrl} className="mt-8 inline-block px-8 py-3 rounded-full border border-white/30 font-semibold text-sm hover:bg-white/10 transition">
          {buttonText}
        </a>
      </div>
    </section>
  );
}
