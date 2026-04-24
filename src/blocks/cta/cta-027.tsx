import type { BlockProps } from "@/blocks/types";
import { X } from "lucide-react";

export default function Cta027(props: BlockProps) {
  const {
    theme,
    heading = "Limited offer: 30% off all annual plans",
    buttonText = "Claim Discount",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fef3c7", color: theme?.foreground ?? "#78350f" }} className="px-5 py-3 relative">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-4 text-center">
        <p className="text-sm font-medium">{heading}</p>
        <a href={buttonUrl} className="px-4 py-1.5 rounded-full text-white font-bold text-xs shrink-0" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
