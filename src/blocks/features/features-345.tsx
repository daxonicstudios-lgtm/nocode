import type { BlockProps } from "@/blocks/types";
import { Terminal } from "lucide-react";

const codeSnippets = [
  'const site = await create({ template: "blog" });',
  'await site.deploy({ region: "auto" });',
  'const stats = await analytics.query({ days: 30 });',
];

export default function Features345(props: BlockProps) {
  const {
    theme,
    heading = "Developer-Friendly Features",
    subheading = "Built for teams who think in code",
    items = [
      { title: "Instant Scaffolding", description: "One command creates a full project with routing, auth, and database.", value: codeSnippets[0] },
      { title: "Zero-Config Deploy", description: "Push to deploy with automatic builds, previews, and rollbacks.", value: codeSnippets[1] },
      { title: "Query API", description: "Flexible query language for analytics, logs, and user data.", value: codeSnippets[2] },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#e2e8f0" }} className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Terminal size={24} style={{ color: primary }} />
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        </div>
        <p className="opacity-50 text-center mb-12">{subheading}</p>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
              </div>
              <div className="px-5 py-4" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                <code className="text-sm font-mono" style={{ color: primary }}>{item.value || codeSnippets[i % codeSnippets.length]}</code>
              </div>
              <div className="px-5 py-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-40">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
