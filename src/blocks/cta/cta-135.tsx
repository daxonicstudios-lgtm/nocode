import type { BlockProps } from "@/blocks/types";
import { Terminal } from "lucide-react";

export default function Cta135(props: BlockProps) {
  const {
    theme,
    heading = "Built for Developers",
    subheading = "API-first. Type-safe. Blazing fast.",
    buttonText = "Read the Docs",
    buttonUrl = "#",
    secondaryButtonText = "View on GitHub",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: theme?.background || "#111827", color: theme?.foreground || "#d1d5db" }}>
      <div className="max-w-xl mx-auto">
        <div className="rounded-xl border p-6" style={{ borderColor: theme?.primary || "#10b981", backgroundColor: "#0d1117" }}>
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5" style={{ color: theme?.primary || "#10b981" }} />
            <span className="font-mono text-xs opacity-50">~/your-project</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-1" style={{ color: theme?.primary || "#10b981" }}>{heading}</h2>
          <p className="font-mono text-sm opacity-50 mb-6">{subheading}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={buttonUrl} className="px-6 py-2 rounded font-semibold text-sm text-center text-black hover:opacity-90 transition" style={{ backgroundColor: theme?.primary || "#10b981" }}>
              {buttonText}
            </a>
            <a href={secondaryButtonUrl} className="px-6 py-2 rounded border font-mono text-sm text-center hover:bg-white/5 transition" style={{ borderColor: theme?.primary || "#10b981", color: theme?.primary || "#10b981" }}>
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
