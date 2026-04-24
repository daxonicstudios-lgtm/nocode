import type { BlockProps } from "@/blocks/types";
import { Code, Plug, BarChart3, Users, Webhook, Key } from "lucide-react";

const icons = [Code, Plug, BarChart3, Users, Webhook, Key];

export default function Features091(props: BlockProps) {
  const {
    theme,
    heading = "Built for SaaS Teams",
    subheading = "Developer tools and integrations that scale with your product",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "RESTful API", description: "A comprehensive API with OpenAPI docs, rate limiting, and versioning built in." },
      { title: "200+ Integrations", description: "Connect with Stripe, Slack, HubSpot, Salesforce, and hundreds more out of the box." },
      { title: "Product Analytics", description: "Track feature adoption, user funnels, and retention with zero-config event tracking." },
      { title: "Team Management", description: "Role-based access control, SSO, and audit logs for enterprise compliance." },
      { title: "Webhooks", description: "Real-time event notifications to keep your systems in sync automatically." },
      { title: "API Keys", description: "Generate, rotate, and scope API keys with fine-grained permission controls." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>SaaS</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6 hover:shadow-md transition-shadow" style={{ borderColor: `${theme?.foreground || "#000"}10` }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${theme?.primary || "#6366f1"}15` }}>
                  <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
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
