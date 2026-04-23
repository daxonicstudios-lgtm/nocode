import type { BlockProps } from "@/blocks/types";
import { Briefcase, Scale, ShieldCheck, Clock } from "lucide-react";

const icons = [Briefcase, Scale, ShieldCheck, Clock];

export default function Features009(props: BlockProps) {
  const {
    theme,
    heading = "Professional Services",
    subheading = "Trusted expertise for businesses of every size",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Business Consulting", description: "Strategic guidance backed by data to help you make confident decisions and grow sustainably." },
      { title: "Legal Compliance", description: "Stay ahead of regulations with automated compliance checks and expert advisory support." },
      { title: "Risk Management", description: "Identify vulnerabilities early and build resilient systems that protect your operations." },
      { title: "Dedicated Account Manager", description: "A single point of contact who knows your business inside-out and responds within the hour." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-lg mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-5 p-6 rounded-xl border" style={{ borderColor: theme?.accent ? `${theme.accent}22` : "#e5e7eb" }}>
                <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#eef2ff" }}>
                  <Icon size={22} style={{ color: theme?.primary || "#6366f1" }} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
