import type { BlockProps } from "@/blocks/types";
import { Download } from "lucide-react";

export default function Cta292(props: BlockProps) {
  const {
    theme,
    heading = "Take It With You",
    subheading = "Download our app and stay productive on the go.",
    buttonText = "Download App",
    buttonUrl = "#",
    secondaryButtonText = "Open in Browser",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#ffffff" }}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-12">
        <div className="w-48 shrink-0 mx-auto sm:mx-0">
          <div className="rounded-[2.5rem] border-[6px] border-gray-700 bg-gray-900 p-3">
            <div className="rounded-[1.8rem] overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
              <div className="w-16 h-1 bg-gray-700 rounded-full mx-auto mt-2" />
              <div className="px-3 py-6 space-y-2">
                <div className="h-8 rounded-lg bg-white/5" />
                <div className="h-16 rounded-lg bg-white/5" />
                <div className="h-8 rounded-lg" style={{ backgroundColor: `${theme?.accent ?? "#6366f1"}33` }} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
          <p className="mt-3 text-lg opacity-60">{subheading}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href={buttonUrl} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm" style={{ backgroundColor: theme?.accent ?? "#6366f1" }}>
              <Download className="w-4 h-4" /> {buttonText}
            </a>
            <a href={secondaryButtonUrl} className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm border border-white/20">
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
