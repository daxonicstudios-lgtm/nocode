import type { BlockProps } from "@/blocks/types";
import { HardDriveDownload, CheckCircle } from "lucide-react";

export default function Cta229(props: BlockProps) {
  const {
    theme,
    heading = "Download the desktop app",
    subheading = "Available for Mac, Windows, and Linux. Sync everything offline.",
    buttonText = "Download for Mac",
    buttonUrl = "#",
    secondaryButtonText = "Other Platforms",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }} className="px-5 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <HardDriveDownload className="w-12 h-12 mx-auto mb-5" style={{ color: theme?.primary ?? "#10b981" }} />
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm">
          {["Offline mode", "Auto-sync", "End-to-end encryption"].map((f, i) => (
            <span key={i} className="flex items-center gap-1.5 opacity-70">
              <CheckCircle className="w-4 h-4" style={{ color: theme?.primary ?? "#10b981" }} /> {f}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm" style={{ backgroundColor: theme?.primary ?? "#10b981" }}>
            <HardDriveDownload className="w-4 h-4" /> {buttonText}
          </a>
          <a href={secondaryButtonUrl} className="px-6 py-3 rounded-lg font-medium text-sm border border-white/20">
            {secondaryButtonText}
          </a>
        </div>
        <p className="mt-3 text-xs opacity-40">v3.2.1 — 64 MB — Requires macOS 13+</p>
      </div>
    </section>
  );
}
