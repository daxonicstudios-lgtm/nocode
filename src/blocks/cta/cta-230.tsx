import type { BlockProps } from "@/blocks/types";
import { FileUp, ShieldCheck } from "lucide-react";

export default function Cta230(props: BlockProps) {
  const {
    theme,
    heading = "Import your existing data",
    subheading = "Migrate from any platform in minutes. We support CSV, JSON, and XML.",
    buttonText = "Start Import",
    buttonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-xl mx-auto">
        <div className="rounded-2xl border p-6 sm:p-8" style={{ borderColor: theme?.border ?? "#e5e7eb" }}>
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}15` }}>
              <FileUp className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">{heading}</h2>
              <p className="mt-1 text-sm opacity-60">{subheading}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["CSV", "JSON", "XML", "XLSX"].map((f) => (
                  <span key={f} className="px-2.5 py-1 rounded text-xs font-mono" style={{ backgroundColor: theme?.muted ?? "#f3f4f6" }}>{f}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4">
                <a href={buttonUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}>
                  <FileUp className="w-4 h-4" /> {buttonText}
                </a>
                <span className="flex items-center gap-1 text-xs opacity-50">
                  <ShieldCheck className="w-3.5 h-3.5" /> Encrypted transfer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
