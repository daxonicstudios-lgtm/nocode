import type { BlockProps } from "@/blocks/types";
import { Apple, Play } from "lucide-react";

const defaultItems = [
  { title: "Download on the App Store", icon: "apple", url: "#" },
  { title: "Get it on Google Play", icon: "play", url: "#" },
];

const iconMap: Record<string, React.ElementType> = {
  apple: Apple,
  play: Play,
};

export default function Hero029(props: BlockProps) {
  const {
    theme,
    heading = "Your Website Builder, Anywhere You Go",
    subheading = "Build and manage your website right from your phone. Available on all major platforms.",
    items = defaultItems,
  } = props;

  return (
    <section
      className="px-4 py-16 sm:py-24"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-md text-center sm:max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {heading}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base opacity-70 sm:text-lg">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:mx-auto sm:max-w-xs">
          {items.slice(0, 4).map((item, i) => {
            const IconComponent = iconMap[item.icon ?? ""] ?? Apple;
            return (
              <a
                key={i}
                href={item.url ?? "#"}
                className="flex w-full items-center justify-center gap-3 rounded-xl px-6 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor:
                    i === 0
                      ? (theme?.primary ?? "#6366f1")
                      : (theme?.accent ?? "#1f2937"),
                }}
              >
                <IconComponent className="h-5 w-5" />
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
