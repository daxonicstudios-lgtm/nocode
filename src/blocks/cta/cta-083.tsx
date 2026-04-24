import type { BlockProps } from "@/blocks/types";
import { Smartphone, Tablet, QrCode } from "lucide-react";

export default function Cta083(props: BlockProps) {
  const {
    theme,
    heading = "Get the mobile app",
    subheading = "Scan the QR code or click below to download.",
    buttonText = "App Store",
    secondaryButtonText = "Google Play",
    buttonUrl = "#",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 rounded-2xl p-8 sm:p-12" style={{ backgroundColor: theme?.muted ?? "#f8fafc" }}>
        <div className="w-32 h-32 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: theme?.background ?? "#ffffff", border: `2px solid ${theme?.secondary ?? "#e2e8f0"}` }}>
          <QrCode className="w-16 h-16 opacity-30" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href={buttonUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>
              <Smartphone className="w-4 h-4" />
              {buttonText}
            </a>
            <a href={secondaryButtonUrl} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>
              <Tablet className="w-4 h-4" />
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
