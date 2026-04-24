import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta096(props: BlockProps) {
  const {
    theme,
    heading = "Start something new.",
    buttonText = "Begin",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-32 sm:py-40">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl sm:text-6xl font-light tracking-tight">{heading}</h2>
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 mt-12 text-sm font-medium underline underline-offset-4"
          style={{ color: theme?.primary ?? "#000" }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
