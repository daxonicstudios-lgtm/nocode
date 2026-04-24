import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Box, Circle, Triangle } from "lucide-react";

const icons = [ArrowRight, Box, Circle, Triangle];

export default function Features361(props: BlockProps) {
  const {
    theme,
    heading = "RAW POWER",
    subheading = "No frills. No fluff. Just results.",
    bodyText,
    buttonText = "GET STARTED",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "DIRECT", description: "Straight to the point interfaces that waste zero time." },
      { title: "SOLID", description: "Battle-tested architecture that never breaks." },
      { title: "COMPLETE", description: "Full feature coverage from day one." },
      { title: "SHARP", description: "Pixel-perfect execution on every platform." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#ffffff", color: theme?.foreground || "#000000" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 border-b-4 pb-6" style={{ borderColor: theme?.foreground || "#000" }}>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">{heading}</h2>
          <p className="text-lg mt-2 uppercase tracking-wide">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="border-4 p-6" style={{ borderColor: theme?.foreground || "#000" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={24} strokeWidth={3} />
                  <h3 className="text-xl font-black uppercase">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="mt-8">
            <a href={buttonUrl} className="inline-block px-8 py-4 border-4 font-black uppercase text-lg tracking-wider" style={{ borderColor: theme?.foreground || "#000", color: theme?.foreground || "#000" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
