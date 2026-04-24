import type { BlockProps } from "@/blocks/types";
import { Smartphone } from "lucide-react";

export default function Cta294(props: BlockProps) {
  const {
    theme,
    heading = "Mobile First. Always.",
    subheading = "Designed for the way you actually work.",
    buttonText = "Launch App",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20" style={{ background: `linear-gradient(180deg, ${theme?.primary ?? "#7c3aed"}, ${theme?.accent ?? "#4f46e5"})`, color: "#ffffff" }}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-10">
        <div className="flex-1 text-center sm:text-left">
          <Smartphone className="w-8 h-8 mb-3 mx-auto sm:mx-0 opacity-70" />
          <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
          <p className="mt-3 text-lg opacity-70">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-block px-8 py-4 bg-white rounded-full font-bold text-sm" style={{ color: theme?.primary ?? "#7c3aed" }}>
            {buttonText}
          </a>
        </div>
        <div className="w-44 shrink-0">
          <div className="rounded-[2rem] border-4 border-white/20 bg-white/10 backdrop-blur-sm p-3">
            <div className="rounded-[1.5rem] bg-white/10 py-8 px-4 text-center">
              <div className="w-12 h-12 rounded-2xl mx-auto mb-3" style={{ backgroundColor: theme?.accent ?? "#4f46e5" }} />
              <div className="h-3 w-20 bg-white/20 rounded mx-auto mb-2" />
              <div className="h-2 w-14 bg-white/10 rounded mx-auto" />
              <div className="mt-4 h-6 rounded-full bg-white/20 w-24 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
