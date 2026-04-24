import type { BlockProps } from "@/blocks/types";
import { Download, Eye } from "lucide-react";

export default function Cta064(props: BlockProps) {
  const {
    theme,
    heading = "Download the full report",
    subheading = "Get insights from our 2025 industry benchmark study — free for a limited time.",
    buttonText = "Download PDF",
    buttonUrl = "#",
    secondaryButtonText = "Preview Report",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{heading}</h2>
        <p className="mt-4 text-base opacity-60 max-w-xl mx-auto">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#059669" }}>
            <Download className="w-4 h-4" />
            {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-medium text-sm opacity-80 underline underline-offset-4">
            <Eye className="w-4 h-4" />
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
