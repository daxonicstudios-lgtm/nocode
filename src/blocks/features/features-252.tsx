import type { BlockProps } from "@/blocks/types";
import { Code2, Terminal, Braces, FileJson } from "lucide-react";

const icons = [Code2, Terminal, Braces, FileJson];

export default function Features252(props: BlockProps) {
  const {
    theme,
    heading = "Built for Developers",
    subheading = "Clean APIs, robust SDKs, and tools you actually want to use",
    bodyText,
    buttonText = "Read the Docs",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "RESTful API", description: "Predictable endpoints, comprehensive docs, and 99.99% uptime SLA." },
      { title: "CLI Tools", description: "Manage deployments, configs, and logs from your terminal." },
      { title: "Type-Safe SDKs", description: "First-class TypeScript, Python, and Go SDKs with full autocompletion." },
      { title: "Webhooks", description: "Real-time event notifications with retry logic and delivery guarantees." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#f8fafc" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-lg p-6" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#1e293b" }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center font-mono text-xs" style={{ backgroundColor: theme?.primary || "#22d3ee", color: "#0f172a" }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                    <code className="inline-block mt-3 text-xs px-3 py-1 rounded" style={{ backgroundColor: theme?.primary ? `${theme.primary}20` : "#334155", color: theme?.primary || "#22d3ee" }}>
                      {`$ api.${(item.title || "method").toLowerCase().replace(/\s+/g, "-")}`}
                    </code>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg font-medium border" style={{ borderColor: theme?.primary || "#22d3ee", color: theme?.primary || "#22d3ee" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
