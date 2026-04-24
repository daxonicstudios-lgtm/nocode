import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Features368(props: BlockProps) {
  const {
    theme,
    heading = "UNDERLINE EVERYTHING",
    subheading = "Emphasis is not optional",
    bodyText,
    buttonText = "LEARN MORE",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "REAL-TIME SYNC", description: "Changes propagate instantly across all connected devices." },
      { title: "VERSION CONTROL", description: "Complete history of every change with one-click rollback." },
      { title: "ACCESS CONTROL", description: "Granular permissions at the document and field level." },
      { title: "AUDIT TRAIL", description: "Every action logged with timestamps and user attribution." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#fff", color: theme?.foreground || "#000" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl font-black uppercase border-b-4 inline-block pb-1" style={{ borderColor: theme?.primary || "#000", textDecoration: "underline", textDecorationThickness: "4px", textUnderlineOffset: "6px" }}>{heading}</h2>
          <p className="text-sm mt-3 uppercase tracking-wider">{subheading}</p>
        </div>
        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={i} className="py-6 border-b-2 flex items-start gap-4" style={{ borderColor: theme?.foreground || "#000" }}>
              <ArrowRight size={20} strokeWidth={3} className="mt-1 flex-shrink-0" style={{ color: theme?.primary || "#000" }} />
              <div>
                <h3 className="text-lg font-black uppercase mb-1" style={{ textDecoration: "underline", textDecorationThickness: "3px", textUnderlineOffset: "4px", textDecorationColor: theme?.primary || "#000" }}>{item.title}</h3>
                <p className="text-sm opacity-70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="mt-8">
            <a href={buttonUrl} className="inline-block font-black uppercase text-lg border-b-4 pb-1" style={{ borderColor: theme?.primary || "#000", color: theme?.foreground || "#000" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
