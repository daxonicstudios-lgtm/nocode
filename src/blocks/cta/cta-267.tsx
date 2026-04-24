import type { BlockProps } from "@/blocks/types";
import { CheckCircle } from "lucide-react";

export default function Cta267(props: BlockProps) {
  const {
    theme,
    heading = "The Platform That Scales With You",
    bodyText = "From startup to enterprise, we grow with your needs.",
    buttonText = "Get Started",
    buttonUrl = "#",
    items = [
      { title: "TechFlow" }, { title: "DataSync" }, { title: "CloudNine" },
      { title: "PixelPro" }, { title: "CodeBase" }, { title: "AppForge" },
      { title: "NexGen" }, { title: "SwiftOps" },
    ],
  } = props;

  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#ffffff" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-black">{heading}</h2>
          <p className="mt-3 text-lg opacity-60 max-w-xl mx-auto">{bodyText}</p>
          <a href={buttonUrl} className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-white rounded-full font-bold text-sm" style={{ color: theme?.primary ?? "#0f172a" }}>
            <CheckCircle className="w-4 h-4" /> {buttonText}
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-center h-14 rounded-xl border border-white/10 bg-white/5">
              <span className="text-sm font-semibold opacity-50">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
