import type { BlockProps } from "@/blocks/types";
import { Search, ChevronDown, Tag } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Micro-Animations That Delight", description: "Small motion details that make interfaces feel polished and alive.", label: "UI/UX" },
  { title: "Data Pipeline Architecture", description: "ETL, ELT, and streaming patterns for modern data infrastructure.", label: "Data" },
  { title: "Cross-Platform Mobile with React Native", description: "Sharing 90% of code between iOS and Android.", label: "Mobile" },
  { title: "Infrastructure as Code", description: "Terraform, Pulumi, and CDK compared for cloud provisioning.", label: "DevOps" },
  { title: "Writing Effective Error Messages", description: "Turning frustrating errors into helpful guidance.", label: "UX Writing" },
  { title: "Load Testing with k6", description: "Simulate thousands of users to find bottlenecks before launch.", label: "Testing" },
];

export default function Blog127(props: BlockProps) {
  const { theme, heading = "Article Archive", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" />
            <input type="text" placeholder="Search archive..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none bg-white" style={{ borderColor: `${theme?.foreground ?? "#0f172a"}10`, color: theme?.foreground ?? "#0f172a" }} />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm bg-white" style={{ borderColor: `${theme?.foreground ?? "#0f172a"}10` }}>
            <Tag className="w-3 h-3" /> Topic <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm bg-white" style={{ borderColor: `${theme?.foreground ?? "#0f172a"}10` }}>
            Date <ChevronDown className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.slice(0, 6).map((item, i) => (
            <a key={i} href={buttonUrl} className="group p-4 rounded-lg bg-white border hover:shadow transition-shadow" style={{ borderColor: `${theme?.foreground ?? "#0f172a"}06` }}>
              <span className="text-xs font-medium opacity-40">{String(item.label)}</span>
              <h3 className="mt-1 text-sm font-bold group-hover:underline line-clamp-1">{item.title}</h3>
              <p className="mt-1 text-xs opacity-40 line-clamp-2">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
