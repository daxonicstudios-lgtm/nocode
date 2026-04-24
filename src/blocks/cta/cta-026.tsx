import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Cta026(props: BlockProps) {
  const {
    theme,
    heading = "Ready to get started?",
    buttonText = "Sign Up Free",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#2563eb" }} className="px-5 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white font-semibold text-sm">{heading}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white font-bold text-xs shrink-0" style={{ color: theme?.primary ?? "#2563eb" }}>
          {buttonText} <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
