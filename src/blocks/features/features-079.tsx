import type { BlockProps } from "@/blocks/types";
import { Monitor, Cpu, HardDrive, Wifi } from "lucide-react";

const icons = [Monitor, Cpu, HardDrive, Wifi];

export default function Features079(props: BlockProps) {
  const {
    theme,
    heading = "Desktop Experience",
    subheading = "A powerful desktop app for serious creators",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl = "https://placehold.co/800x480",
    items = [
      { title: "Native Performance", description: "Built with native technologies for buttery-smooth interactions." },
      { title: "GPU Accelerated", description: "Heavy rendering tasks offloaded to your GPU for instant previews." },
      { title: "Local Storage", description: "Work with large files stored locally for zero-latency editing." },
      { title: "Network Aware", description: "Adapts to your connection speed and syncs intelligently." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="rounded-t-xl border-t border-x px-4 pt-3 pb-0" style={{ borderColor: "#d1d5db", backgroundColor: "#e5e7eb" }}>
            <div className="flex gap-1.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          </div>
          <div className="border-x border-b rounded-b-lg overflow-hidden" style={{ borderColor: "#d1d5db" }}>
            <img src={imageUrl} alt="Desktop app" className="w-full object-cover" />
          </div>
          <div className="w-1/3 h-4 mx-auto rounded-b-lg" style={{ backgroundColor: "#d1d5db" }} />
          <div className="w-1/2 h-1 mx-auto rounded-b" style={{ backgroundColor: "#e5e7eb" }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <Icon size={24} className="mx-auto mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-bold mb-1 text-sm">{item.title}</h3>
                <p className="opacity-60 text-xs">{item.description}</p>
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
