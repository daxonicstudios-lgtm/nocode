import type { BlockProps } from "@/blocks/types";
import { Loader } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Distributed Tracing with OpenTelemetry", description: "End-to-end visibility across microservices.", label: "Observability" },
  { title: "Atomic CSS in Production", description: "How utility-first CSS performs at scale.", label: "CSS" },
  { title: "Building Custom Hooks", description: "Reusable React hooks that encapsulate complex logic.", label: "React" },
  { title: "API Versioning Strategies", description: "URL-based, header-based, and content negotiation approaches.", label: "API" },
];

export default function Blog137(props: BlockProps) {
  const { theme, heading = "Feed", buttonText = "Load More", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#171717" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="space-y-6 mb-12">
          {items.slice(0, 4).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block pb-6 border-b" style={{ borderColor: `${theme?.foreground ?? "#171717"}08` }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(item.label)}</span>
              <h3 className="mt-2 text-xl font-bold group-hover:underline">{item.title}</h3>
              <p className="mt-1 text-sm opacity-50">{item.description}</p>
            </a>
          ))}
        </div>
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-semibold hover:bg-gray-50 transition-colors" style={{ borderColor: `${theme?.foreground ?? "#171717"}15` }}>
            <Loader className="w-4 h-4" /> {buttonText}
          </button>
          <p className="mt-3 text-xs opacity-30">Showing 4 of 48 articles</p>
          <div className="flex justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="w-6 h-1 rounded-full" style={{ backgroundColor: n === 1 ? (theme?.primary ?? "#6366f1") : `${theme?.foreground ?? "#171717"}10` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
