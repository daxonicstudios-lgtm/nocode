import type { BlockProps } from "@/blocks/types";
import { Megaphone } from "lucide-react";

export default function Cta029(props: BlockProps) {
  const {
    theme,
    heading = "New: AI-powered page builder is here",
    buttonText = "Try It Now",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#7c3aed" }} className="px-5 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 flex-wrap">
        <Megaphone className="w-4 h-4 text-white opacity-80" />
        <p className="text-white text-sm font-medium">{heading}</p>
        <a href={buttonUrl} className="px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold border border-white/30 hover:bg-white/30 transition-colors">
          {buttonText}
        </a>
      </div>
    </section>
  );
}
