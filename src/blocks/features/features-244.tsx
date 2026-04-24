import type { BlockProps } from "@/blocks/types";

export default function Features244(props: BlockProps) {
  const {
    theme,
    heading = "// Features.config",
    subheading = "Developer-first tools with a terminal aesthetic",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "hot-reload", description: "See changes instantly in development mode.", value: "true" },
      { title: "type-safety", description: "Full TypeScript support with auto-generated types.", value: "strict" },
      { title: "edge-deploy", description: "One command to ship to 200+ global locations.", value: "enabled" },
      { title: "auto-scale", description: "Scales from zero to millions without config.", value: "dynamic" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0d1117", color: "#c9d1d9" }}>
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "#30363d" }}>
          <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ backgroundColor: "#161b22", borderColor: "#30363d" }}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f85149" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#d29922" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#3fb950" }} />
            <span className="ml-3 text-xs font-mono opacity-50">features.ts</span>
          </div>
          <div className="p-6 font-mono text-sm" style={{ backgroundColor: "#0d1117" }}>
            <p className="mb-4" style={{ color: "#8b949e" }}>{heading}</p>
            <p className="mb-6 text-xs" style={{ color: "#8b949e" }}>{subheading}</p>
            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="p-4 rounded-lg" style={{ backgroundColor: "#161b22" }}>
                  <div className="flex items-center justify-between mb-1">
                    <span style={{ color: "#79c0ff" }}>{item.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: `${primary}30`, color: primary }}>{item.value}</span>
                  </div>
                  <p className="text-xs" style={{ color: "#8b949e" }}>// {item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: primary }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
