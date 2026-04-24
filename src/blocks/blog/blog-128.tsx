import type { BlockProps } from "@/blocks/types";
import { Search, Folder } from "lucide-react";

const CATS = [
  { title: "Development", description: "Code tutorials and best practices", value: "48 articles" },
  { title: "Design", description: "UI/UX principles and tools", value: "32 articles" },
  { title: "Business", description: "Strategy, growth, and leadership", value: "24 articles" },
  { title: "DevOps", description: "CI/CD, infrastructure, and monitoring", value: "19 articles" },
];

export default function Blog128(props: BlockProps) {
  const { theme, heading = "Browse by Category", subheading = "Or search for something specific", items = CATS } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#1a1a2e" }}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="text-sm opacity-50 mb-8">{subheading}</p>
        <div className="max-w-md mx-auto mb-14 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30" />
          <input type="text" placeholder="Type to search..." className="w-full pl-12 pr-4 py-3.5 rounded-xl border text-sm outline-none" style={{ borderColor: `${theme?.foreground ?? "#1a1a2e"}10`, color: theme?.foreground ?? "#1a1a2e" }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {items.slice(0, 4).map((item, i) => (
            <button key={i} className="flex items-start gap-4 p-5 rounded-xl border hover:shadow-md transition-shadow text-left" style={{ borderColor: `${theme?.foreground ?? "#1a1a2e"}08` }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}10` }}>
                <Folder className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
              </div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm opacity-50 mt-0.5">{item.description}</p>
                <p className="text-xs font-medium mt-2" style={{ color: theme?.primary ?? "#6366f1" }}>{String(item.value)}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
