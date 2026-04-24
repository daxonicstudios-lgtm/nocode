import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta155(props: BlockProps) {
  const { theme, heading = "Transform your workflow", buttonText = "Learn More", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }} className="px-4 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-semibold text-lg">{heading}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm bg-white" style={{ color: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
