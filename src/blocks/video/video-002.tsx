import type { BlockProps } from "@/blocks/types";
import { Play } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Product overview", description: "2 min" },
  { title: "How to get started", description: "4 min" },
  { title: "Advanced tips", description: "6 min" },
];

export default function Video002(props: BlockProps) {
  const { theme, heading = "Watch & learn", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((v, i) => (
            <button key={i} className="text-left group">
              <div className="aspect-video rounded-xl relative overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-black ml-0.5" />
                  </div>
                </div>
              </div>
              <p className="mt-3 font-semibold">{v.title}</p>
              <p className="text-xs opacity-60">{v.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
