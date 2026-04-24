import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, Lock, FileCheck, KeyRound } from "lucide-react";

const icons = [ShieldCheck, Lock, FileCheck, KeyRound];
const badges = ["SOC 2 Type II", "ISO 27001", "GDPR Compliant", "HIPAA Ready"];

export default function Features325(props: BlockProps) {
  const {
    theme,
    heading = "Security & Compliance",
    subheading = "Enterprise-level protection certified by industry standards",
    items = [
      { title: "SOC 2 Type II", description: "Annual audits verify our security controls meet the highest standards.", label: "SOC 2 Type II" },
      { title: "ISO 27001 Certified", description: "Information security management system certified since 2021.", label: "ISO 27001" },
      { title: "GDPR Compliant", description: "Full data subject rights, DPA agreements, and EU data residency.", label: "GDPR Compliant" },
      { title: "HIPAA Ready", description: "BAA available. Encryption at rest and in transit for health data.", label: "HIPAA Ready" },
    ],
  } = props;

  const primary = theme?.primary || "#475569";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-6 max-w-2xl mx-auto">{subheading}</p>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {items.map((item, i) => (
            <span key={i} className="px-4 py-1.5 rounded-full text-xs font-semibold border" style={{ borderColor: primary, color: primary }}>
              {item.label || badges[i % badges.length]}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex gap-4 p-5 rounded-lg" style={{ backgroundColor: `${primary}06` }}>
                <Icon size={22} style={{ color: primary }} className="shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
