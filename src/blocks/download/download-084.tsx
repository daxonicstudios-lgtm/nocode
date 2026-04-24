import type { BlockProps } from "@/blocks/types";
import { Download, Smartphone } from "lucide-react";

export default function Download084(props: BlockProps) {
  const { theme, heading = "Mobile App", subheading = "Available on iOS and Android.", buttonText = "Download Now", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <Smartphone className="w-10 h-10 mx-auto mb-4" style={{ color: theme?.primary }} />
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-4 opacity-60">{subheading}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ backgroundColor: "#000" }}>
            <Download className="w-4 h-4" /> App Store
          </a>
          <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
            <Download className="w-4 h-4" /> Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
