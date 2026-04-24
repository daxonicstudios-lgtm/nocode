import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta297(props: BlockProps) {
  const {
    theme,
    heading = "Ready?",
    buttonText = "Begin",
    buttonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-32" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#0a0a0a" }}>
      <div className="max-w-xs mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-black">{heading}</h2>
        <a href={buttonUrl} className="mt-10 inline-flex items-center gap-2 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
