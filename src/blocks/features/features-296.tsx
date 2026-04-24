import type { BlockProps } from "@/blocks/types";
import { Code2, Database, Cloud, Lock, Globe, Cpu } from "lucide-react";

const icons = [Code2, Database, Cloud, Lock, Globe, Cpu];

export default function Features296(props: BlockProps) {
  const {
    theme,
    heading = "Built on Best-in-Class Tech",
    subheading = "Modern stack, proven tools, enterprise-grade reliability",
    bodyText,
    buttonText = "View Tech Stack",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "React & Next.js", description: "Server-side rendering and static generation for blazing performance.", label: "Frontend" },
      { title: "PostgreSQL", description: "Reliable, scalable relational database with full ACID compliance.", label: "Database" },
      { title: "AWS Infrastructure", description: "Multi-AZ deployment with auto-scaling and load balancing.", label: "Hosting" },
      { title: "Zero Trust Auth", description: "OAuth 2.0, SAML, and passwordless authentication options.", label: "Security" },
      { title: "Global CDN", description: "Content cached at 200+ edge locations for worldwide delivery.", label: "Network" },
      { title: "GPU Compute", description: "Hardware-accelerated ML inference for real-time AI features.", label: "Processing" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-5" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <div className="flex items-center justify-between mb-3">
                  <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#ede9fe", color: theme?.primary || "#6366f1" }}>{item.label}</span>
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
