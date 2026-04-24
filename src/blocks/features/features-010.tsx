import type { BlockProps } from "@/blocks/types";
import { Code2, Workflow, Server } from "lucide-react";

const icons = [Code2, Workflow, Server];
const gradients = [
  "linear-gradient(135deg, #6366f1, #8b5cf6)",
  "linear-gradient(135deg, #3b82f6, #06b6d4)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
];

export default function Features010(props: BlockProps) {
  const {
    theme,
    heading = "Developer-First Platform",
    subheading = "APIs, SDKs, and infrastructure built for engineers who ship fast",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "API-First Design", description: "Every feature available through clean, versioned REST and GraphQL endpoints." },
      { title: "CI/CD Pipelines", description: "Push to deploy with built-in build, test, and rollback automation." },
      { title: "Edge Computing", description: "Run serverless functions at the edge for sub-50ms response times globally." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#0f172a", color: theme?.foreground || "#e2e8f0" }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: theme?.accent || "#818cf8" }}>Features</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">{heading}</h2>
          <p className="text-lg opacity-50 max-w-lg mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const grad = gradients[i % gradients.length];
            return (
              <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: grad }}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {buttonText && (
          <div className="text-center mt-12">
            <a href={buttonUrl} className="inline-block px-7 py-3 rounded-lg font-semibold text-white" style={{ background: gradients[0] }}>
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
