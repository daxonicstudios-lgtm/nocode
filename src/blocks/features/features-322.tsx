import type { BlockProps } from "@/blocks/types";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Features322(props: BlockProps) {
  const {
    theme,
    heading = "Feature Comparison",
    subheading = "See how our platform stacks up",
    items = [
      { title: "Unlimited Users", value: "yes" },
      { title: "Custom Roles & Permissions", value: "yes" },
      { title: "Audit Logging", value: "yes" },
      { title: "SSO / SAML Integration", value: "yes" },
      { title: "Dedicated Account Manager", value: "no" },
      { title: "On-Premise Deployment", value: "no" },
    ],
  } = props;

  const primary = theme?.primary || "#475569";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-60 text-center mb-10">{subheading}</p>
        <div className="border rounded-xl overflow-hidden" style={{ borderColor: `${primary}15` }}>
          <div className="grid grid-cols-[1fr_auto] px-6 py-3 text-sm font-semibold uppercase tracking-wide opacity-50" style={{ backgroundColor: `${primary}06` }}>
            <span>Feature</span>
            <span>Status</span>
          </div>
          {items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto] px-6 py-4 items-center border-t text-sm"
              style={{ borderColor: `${primary}10` }}
            >
              <span className="font-medium">{item.title}</span>
              {item.value === "yes" ? (
                <CheckCircle2 size={20} className="text-green-500" />
              ) : (
                <XCircle size={20} className="opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
