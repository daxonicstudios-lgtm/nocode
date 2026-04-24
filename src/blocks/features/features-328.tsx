import type { BlockProps } from "@/blocks/types";
import { Plug, ArrowRight } from "lucide-react";

export default function Features328(props: BlockProps) {
  const {
    theme,
    heading = "Integrations & Partners",
    subheading = "Connects with the tools your enterprise already uses",
    buttonText = "View All Integrations",
    buttonUrl = "#",
    items = [
      { title: "Salesforce", description: "Bi-directional sync for contacts, deals, and activities." },
      { title: "Slack", description: "Real-time notifications and workflow triggers in your channels." },
      { title: "AWS", description: "Deploy on your own infrastructure with our cloud-native stack." },
      { title: "Jira", description: "Automatic ticket creation and status updates from our platform." },
      { title: "Stripe", description: "Unified billing, invoicing, and subscription management." },
      { title: "Okta", description: "SSO and user provisioning with SCIM support." },
    ],
  } = props;

  const primary = theme?.primary || "#475569";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-12 max-w-2xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl p-5 border text-left" style={{ borderColor: `${primary}10` }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${primary}08` }}>
                <Plug size={18} style={{ color: primary }} />
              </div>
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs opacity-50 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <a href={buttonUrl} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border" style={{ borderColor: primary, color: primary }}>
          {buttonText} <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
}
