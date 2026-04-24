import type { BlockProps } from "@/blocks/types";
import { Cpu, Wifi, HardDrive } from "lucide-react";

const icons = [Cpu, Wifi, HardDrive];

export default function Features167(props: BlockProps) {
  const {
    theme,
    heading = "Infrastructure That Scales",
    subheading = "Built on battle-tested technology",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Edge Computing", description: "Process data at the nearest point of presence for minimal latency." },
      { title: "Real-Time Sync", description: "WebSocket connections keep every client in perfect sync." },
      { title: "Persistent Storage", description: "Durable object storage with automatic replication across regions." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-60 mb-14 text-center text-lg">{subheading}</p>
        <div className="space-y-0">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-center gap-6 p-6 rounded-xl" style={{ backgroundColor: theme?.primary ? `${theme.primary}12` : "#eef2ff" }}>
                <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-8 py-3 rounded-lg text-white font-bold" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
