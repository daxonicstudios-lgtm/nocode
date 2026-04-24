import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Features213(props: BlockProps) {
  const {
    theme,
    heading = "Key Capabilities",
    subheading = "Everything your team needs to ship faster and smarter",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Automated Testing", description: "Run comprehensive test suites on every commit with zero configuration." },
      { title: "One-Click Deploy", description: "Ship to production in seconds with built-in rollback protection." },
      { title: "API Gateway", description: "Manage, monitor, and secure all your API endpoints from a single dashboard." },
      { title: "Event Streaming", description: "Process millions of events per second with guaranteed delivery." },
      { title: "Edge Computing", description: "Run serverless functions at 200+ locations worldwide for minimal latency." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-base opacity-70 mb-10 max-w-lg">{subheading}</p>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg hover:bg-black/[0.03] transition-colors">
              <ArrowRight size={18} className="mt-1 shrink-0" style={{ color: theme?.primary || "#6366f1" }} />
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-10 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
