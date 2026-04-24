import type { BlockProps } from "@/blocks/types";
import { Building2 } from "lucide-react";

export default function Cta025(props: BlockProps) {
  const {
    theme,
    heading = "Enterprise-grade reliability",
    subheading = "Trusted by Fortune 500 companies and fast-growing startups alike.",
    buttonText = "Contact Sales",
    buttonUrl = "#",
    items = [
      { title: "Fortune 500", description: "12 of the top 20 use us" },
      { title: "SOC 2", description: "Type II certified" },
      { title: "GDPR", description: "Fully compliant" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Building2 className="w-7 h-7 mb-4" style={{ color: theme?.primary ?? "#1d4ed8" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
          <p className="mt-3 text-sm opacity-60">{subheading}</p>
          <a href={buttonUrl} className="mt-6 inline-block px-7 py-3 rounded-lg text-white font-semibold text-sm" style={{ backgroundColor: theme?.primary ?? "#1d4ed8" }}>
            {buttonText}
          </a>
        </div>
        <div className="space-y-4">
          {items.slice(0, 3).map((item, i) => (
            <div key={i} className="p-4 rounded-lg border" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }}>
              <div className="font-bold text-sm">{item.title}</div>
              <div className="text-xs opacity-50 mt-0.5">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
