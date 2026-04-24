import type { BlockProps } from "@/blocks/types";
import { Rocket } from "lucide-react";

export default function Cta103(props: BlockProps) {
  const {
    theme,
    heading = "Launch Your Project Now",
    bodyText = "Everything you need to go from idea to live product in minutes.",
    buttonText = "Get Started",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 flex justify-center">
      <div className="w-full max-w-lg rounded-2xl shadow-2xl p-8 md:p-10 text-center border-2" style={{ borderColor: theme?.primary || "#2563eb" }}>
        <Rocket className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary || "#2563eb" }} />
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{heading}</h2>
        <p className="opacity-70 mb-6 text-sm md:text-base">{bodyText}</p>
        <div className="flex flex-col gap-3">
          <a href={buttonUrl} className="block px-6 py-3 rounded-lg text-white font-bold transition hover:opacity-90" style={{ backgroundColor: theme?.primary || "#2563eb" }}>
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="block px-6 py-3 rounded-lg font-semibold underline" style={{ color: theme?.primary || "#2563eb" }}>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
