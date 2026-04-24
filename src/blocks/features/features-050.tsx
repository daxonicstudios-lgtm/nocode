import type { BlockProps } from "@/blocks/types";
import { Wifi, Battery, Volume2, Sun, Moon, Power, Download, Upload } from "lucide-react";

const icons = [Wifi, Battery, Volume2, Sun, Moon, Power, Download, Upload];

export default function Features050(props: BlockProps) {
  const {
    theme,
    heading = "Quick Glance",
    subheading = "Hover for details",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Always Connected", description: "Reliable connectivity across all networks and regions." },
      { title: "Long Battery", description: "Optimized to consume minimal device resources." },
      { title: "Audio Engine", description: "Crystal-clear audio processing and playback." },
      { title: "Light Mode", description: "Bright, accessible interface for daytime use." },
      { title: "Dark Mode", description: "Easy on the eyes with true OLED black support." },
      { title: "Instant Boot", description: "Ready in under one second from cold start." },
      { title: "Fast Downloads", description: "Parallel downloads with resume capability." },
      { title: "Smart Upload", description: "Compresses and uploads in the background." },
    ],
  } = props;

  const accent = theme?.primary ?? "#0ea5e9";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-8 lg:py-24">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-50">{subheading}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={i}
              title={item.description}
              className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl border cursor-default transition-colors hover:border-transparent"
              style={{ borderColor: `${accent}25` }}
              onMouseEnter={undefined}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${accent}15` }}>
                <Icon className="w-5 h-5" style={{ color: accent }} />
              </div>
              <span className="text-sm font-semibold text-center">{item.title}</span>
            </div>
          );
        })}
      </div>
      {buttonText && (
        <div className="text-center mt-10">
          <a href={buttonUrl} className="inline-block px-6 py-2.5 rounded-lg text-sm text-white font-medium" style={{ backgroundColor: accent }}>{buttonText}</a>
        </div>
      )}
    </section>
  );
}
