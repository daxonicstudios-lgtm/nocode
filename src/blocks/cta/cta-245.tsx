import type { BlockProps } from "@/blocks/types";
import { Monitor, Smartphone, Tablet } from "lucide-react";

export default function Cta245(props: BlockProps) {
  const {
    theme,
    heading = "Available on every device",
    subheading = "Access your workspace from desktop, tablet, or mobile. Stay productive everywhere.",
    items = [
      { title: "Desktop App", description: "macOS & Windows", icon: "desktop", url: "#" },
      { title: "Tablet App", description: "iPad & Android", icon: "tablet", url: "#" },
      { title: "Mobile App", description: "iOS & Android", icon: "mobile", url: "#" },
    ],
  } = props;

  const icons: Record<string, React.ReactNode> = {
    desktop: <Monitor className="w-6 h-6" />,
    tablet: <Tablet className="w-6 h-6" />,
    mobile: <Smartphone className="w-6 h-6" />,
  };

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60 text-sm">{subheading}</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <a key={i} href={item.url ?? "#"} className="flex flex-col items-center p-6 rounded-2xl border-2 hover:shadow-lg transition-shadow" style={{ borderColor: theme?.primary ?? "#8b5cf6" }}>
              <div className="mb-3" style={{ color: theme?.primary ?? "#8b5cf6" }}>{icons[item.icon ?? "desktop"]}</div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-xs opacity-50 mt-1">{item.description}</p>
              <span className="mt-3 text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}15`, color: theme?.primary ?? "#8b5cf6" }}>
                Download
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
