import type { BlockProps } from "@/blocks/types";
import { Search, Tag } from "lucide-react";

export default function Hero031(props: BlockProps) {
  const {
    theme,
    heading = "Find What You Need",
    subheading = "Search thousands of resources, tools, and templates in one place.",
    buttonText = "Search",
    items = [
      { label: "Templates" },
      { label: "Components" },
      { label: "Integrations" },
      { label: "Plugins" },
      { label: "Themes" },
      { label: "Icons" },
    ],
  } = props;

  return (
    <section
      className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          {heading}
        </h1>
        <p className="text-base sm:text-lg opacity-70 mb-8 max-w-lg mx-auto">
          {subheading}
        </p>

        {/* Search bar */}
        <div className="relative w-full max-w-xl mx-auto mb-8">
          <div className="flex items-center rounded-full border-2 border-gray-200 overflow-hidden shadow-lg">
            <div className="pl-4 sm:pl-5 flex items-center">
              <Search className="w-5 h-5 opacity-40" />
            </div>
            <input
              type="text"
              placeholder="Search for anything..."
              className="flex-1 py-3 sm:py-4 px-3 text-base sm:text-lg bg-transparent outline-none"
              style={{ color: theme?.foreground }}
              readOnly
            />
            <button
              className="px-5 sm:px-7 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-opacity hover:opacity-90 shrink-0"
              style={{ backgroundColor: theme?.primary || "#6366f1" }}
            >
              {buttonText}
            </button>
          </div>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-xs sm:text-sm opacity-50 mr-1 flex items-center gap-1">
            <Tag className="w-3 h-3" /> Popular:
          </span>
          {items.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium border transition-colors hover:opacity-80 cursor-pointer"
              style={{
                borderColor: theme?.primary || "#6366f1",
                color: theme?.primary || "#6366f1",
              }}
            >
              {item.label || item.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
