import type { BlockProps } from "@/blocks/types";
import { X } from "lucide-react";

export default function Cta124(props: BlockProps) {
  const {
    theme,
    heading = "ENOUGH TALK",
    bodyText = "You've read this far. That means you're interested. So stop scrolling and take action.",
    buttonText = "SIGN UP FREE",
    buttonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.primary || "#dc2626", color: "#fff" }}>
      <div className="max-w-xl mx-auto border-4 border-white/30 p-8 relative">
        <X className="absolute top-4 right-4 w-6 h-6 opacity-30" />
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">{heading}</h2>
        <p className="font-mono text-sm md:text-base opacity-90 mb-6">{bodyText}</p>
        <a href={buttonUrl} className="inline-block px-8 py-3 bg-white font-black uppercase text-sm tracking-wider transition hover:bg-gray-100" style={{ color: theme?.primary || "#dc2626" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
