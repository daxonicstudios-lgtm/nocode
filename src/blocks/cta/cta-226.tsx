import type { BlockProps } from "@/blocks/types";
import { Download, FileText } from "lucide-react";

export default function Cta226(props: BlockProps) {
  const {
    theme,
    heading = "Download our free guide",
    subheading = "50 pages of actionable strategies to grow your business in 2026.",
    buttonText = "Download PDF",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-lg mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: `${theme?.primary ?? "#ef4444"}15` }}>
          <FileText className="w-8 h-8" style={{ color: theme?.primary ?? "#ef4444" }} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60 text-sm">{subheading}</p>
        <a href={buttonUrl} className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#ef4444" }}>
          <Download className="w-4 h-4" /> {buttonText}
        </a>
        <p className="mt-3 text-xs opacity-40">PDF, 4.2 MB — No email required</p>
      </div>
    </section>
  );
}
