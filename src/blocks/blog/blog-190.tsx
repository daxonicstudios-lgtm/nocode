import type { BlockProps } from "@/blocks/types";
import { Play, Heart, MessageCircle, Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Prototyping with Real Data", description: "Connect your prototypes to live APIs for more realistic testing.", label: "342", value: "20:15", url: "28" },
  { title: "Accessibility Audit Walkthrough", description: "We audit a real website and fix every issue live on screen.", label: "518", value: "35:40", url: "45" },
  { title: "Performance Budgeting", description: "Setting and enforcing performance budgets for your team.", label: "267", value: "18:30", url: "19" },
];

export default function Blog190(props: BlockProps) {
  const { theme, heading = "Community Videos", subheading = "Created by our community of builders", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-1">{heading}</h2>
        <p className="text-sm opacity-50 mb-10">{subheading}</p>
        <div className="space-y-4">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="flex gap-4 p-3 rounded-xl hover:bg-slate-100 transition-colors group items-center">
              <div className="relative w-32 h-20 rounded-lg overflow-hidden shrink-0" style={{ backgroundColor: theme?.secondary ?? "#e2e8f0" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white drop-shadow-md opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute bottom-1 right-1 px-1 py-0.5 rounded text-[9px] font-mono bg-black/70 text-white">{item.value}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm">{item.title}</h3>
                <p className="text-xs opacity-50 mt-0.5 line-clamp-1">{item.description}</p>
                <div className="flex items-center gap-4 mt-2 text-[10px] opacity-40">
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{item.label}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />{String(item.url)}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{item.value}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
