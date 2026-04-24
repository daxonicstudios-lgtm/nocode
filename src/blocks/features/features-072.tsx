import type { BlockProps } from "@/blocks/types";
import { Monitor, Globe, Lock } from "lucide-react";

const icons = [Monitor, Globe, Lock];

export default function Features072(props: BlockProps) {
  const {
    theme,
    heading = "See It in Action",
    subheading = "Real browser previews of your most-used features",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/640x400",
    items = [
      { title: "Visual Dashboard", description: "Monitor all key metrics from a single, beautiful command center." },
      { title: "Multi-Site Manager", description: "Control multiple websites from one unified admin panel." },
      { title: "Secure Portal", description: "Client-facing login portal with white-label branding options." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: `${theme?.foreground || "#000"}15` }}>
                <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: `${theme?.foreground || "#000"}10`, backgroundColor: theme?.accent || "#f8fafc" }}>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-2 px-3 py-1 rounded text-xs opacity-50 truncate" style={{ backgroundColor: `${theme?.foreground || "#000"}08` }}>
                    https://app.example.com/{item.title?.toLowerCase().replace(/\s/g, "-")}
                  </div>
                </div>
                <img src={imageUrl} alt={item.title || ""} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={18} style={{ color: theme?.primary || "#6366f1" }} />
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <p className="opacity-60 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
