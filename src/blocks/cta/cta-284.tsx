import type { BlockProps } from "@/blocks/types";
import { Globe } from "lucide-react";

export default function Cta284(props: BlockProps) {
  const {
    theme,
    heading = "Go Global",
    subheading = "Reach customers in 190+ countries with one click.",
    buttonText = "Expand Now",
    buttonUrl = "#",
  } = props;

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-28" style={{ backgroundColor: theme?.primary ?? "#0e7490", color: "#ffffff" }}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-10">
        {[400, 320, 240, 160].map((s, i) => (
          <div key={i} className="absolute rounded-full border-2 border-white" style={{ width: s, height: s, top: `calc(50% - ${s / 2}px)`, left: `calc(50% - ${s / 2}px)` }} />
        ))}
      </div>
      <div className="relative max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-10">
        <div className="flex-1 text-center sm:text-left">
          <Globe className="w-10 h-10 mb-3 mx-auto sm:mx-0 opacity-70" />
          <h2 className="text-3xl sm:text-4xl font-extrabold">{heading}</h2>
          <p className="mt-3 opacity-70">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-block px-8 py-4 bg-white rounded-full font-bold text-sm" style={{ color: theme?.primary ?? "#0e7490" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
