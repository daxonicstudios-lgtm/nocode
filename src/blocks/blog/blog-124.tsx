import type { BlockProps } from "@/blocks/types";
import { Search, ChevronDown, Grid3x3, List } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Optimistic UI Updates", description: "Make your app feel instant by updating the UI before the server responds.", label: "Frontend" },
  { title: "Container Security Best Practices", description: "Hardening Docker images for production workloads.", label: "DevOps" },
  { title: "Typography Hierarchy in Web Design", description: "Creating visual rhythm through intentional type scales.", label: "Design" },
  { title: "Event-Driven Architecture", description: "Decoupling services with message queues and event buses.", label: "Backend" },
];

export default function Blog124(props: BlockProps) {
  const { theme, heading = "Articles", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#18181b" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
              <input type="text" placeholder="Search articles..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none bg-white" style={{ borderColor: `${theme?.foreground ?? "#18181b"}12`, color: theme?.foreground ?? "#18181b" }} />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm bg-white" style={{ borderColor: `${theme?.foreground ?? "#18181b"}12` }}>
              Category <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm bg-white" style={{ borderColor: `${theme?.foreground ?? "#18181b"}12` }}>
              Sort by <ChevronDown className="w-3 h-3" />
            </button>
            <div className="flex border rounded-lg overflow-hidden" style={{ borderColor: `${theme?.foreground ?? "#18181b"}12` }}>
              <button className="p-2.5 bg-white"><Grid3x3 className="w-4 h-4" /></button>
              <button className="p-2.5" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}><List className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {items.slice(0, 4).map((item, i) => (
            <a key={i} href={buttonUrl} className="group flex items-center gap-4 p-4 rounded-xl bg-white border hover:shadow-sm transition-shadow" style={{ borderColor: `${theme?.foreground ?? "#18181b"}08` }}>
              <div className="w-16 h-16 rounded-lg flex-shrink-0" style={{ backgroundColor: theme?.secondary ?? "#e4e4e7" }} />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold group-hover:underline truncate">{item.title}</h3>
                <p className="text-sm opacity-50 mt-0.5 truncate">{item.description}</p>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-md flex-shrink-0" style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}10`, color: theme?.primary ?? "#6366f1" }}>
                {String(item.label)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
