import type { BlockProps } from "@/blocks/types";
import { Rocket } from "lucide-react";

export default function Cta088(props: BlockProps) {
  const {
    theme,
    heading = "Launch faster than ever",
    subheading = "From idea to production in hours, not weeks.",
    buttonText = "Start Building",
    buttonUrl = "#",
  } = props;

  const accentColor = theme?.accent ?? "#22d3ee";

  return (
    <section style={{ backgroundColor: theme?.background ?? "#09090b", color: "#ffffff" }} className="px-5 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div
          className="inline-block rounded-2xl p-[2px] mb-8"
          style={{ background: `linear-gradient(135deg, ${accentColor}, ${theme?.primary ?? "#8b5cf6"})` }}
        >
          <div className="rounded-2xl px-4 py-2 text-xs font-bold" style={{ backgroundColor: theme?.background ?? "#09090b" }}>
            <Rocket className="w-3 h-3 inline mr-1" />
            New Release
          </div>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
        <a
          href={buttonUrl}
          className="inline-block mt-8 rounded-xl p-[2px]"
          style={{ background: `linear-gradient(135deg, ${accentColor}, ${theme?.primary ?? "#8b5cf6"})` }}
        >
          <span className="block px-8 py-3 rounded-[10px] font-bold text-sm" style={{ backgroundColor: theme?.background ?? "#09090b" }}>
            {buttonText}
          </span>
        </a>
      </div>
    </section>
  );
}
