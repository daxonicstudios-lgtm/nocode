import type { BlockProps } from "@/blocks/types";
import { HardDrive } from "lucide-react";

export default function Pricing117(props: BlockProps) {
  const {
    theme,
    heading = "Storage Plans",
    subheading = "Scale your storage as your data grows",
    bodyText,
    buttonText = "Upgrade",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "5 GB", value: "$3/mo", label: "25" },
      { title: "50 GB", value: "$12/mo", label: "50" },
      { title: "500 GB", value: "$39/mo", label: "75" },
      { title: "5 TB", value: "$99/mo", label: "95" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HardDrive className="w-6 h-6" style={{ color: theme?.primary }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <p className="text-center text-sm opacity-60 mb-10">{subheading}</p>
        <div className="space-y-4">
          {items.map((item, i) => {
            const pct = parseInt(item.label || "0", 10);
            return (
              <div key={i} className="rounded-lg border p-4" style={{ borderColor: theme?.accent }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{item.title}</span>
                  <span className="font-bold" style={{ color: theme?.primary }}>{item.value}</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme?.accent }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: theme?.primary }} />
                </div>
                <p className="text-xs opacity-50 mt-1">{pct}% typical usage</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <a href={buttonUrl} className="inline-block rounded-lg px-8 py-3 font-semibold text-white" style={{ backgroundColor: theme?.primary }}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
