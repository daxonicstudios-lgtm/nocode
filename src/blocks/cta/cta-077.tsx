import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta077(props: BlockProps) {
  const { theme, heading = "Grow faster, together", buttonText = "Get Started", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white shrink-0" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
