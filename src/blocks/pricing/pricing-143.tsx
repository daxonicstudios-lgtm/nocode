import type { BlockProps } from "@/blocks/types";
import { Check, Shield, MessageSquare } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Unlimited everything" }, { title: "Custom SLA" }, { title: "SAML/SSO" },
  { title: "Dedicated account manager" }, { title: "Custom integrations" }, { title: "On-premise option" },
  { title: "Priority 24/7 support" }, { title: "Security audit & compliance" },
];

export default function Pricing143(props: BlockProps) {
  const { theme, heading = "Enterprise", subheading = "Custom solutions for large organizations", buttonText = "Contact Sales", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <Shield className="w-10 h-10 mb-4" style={{ color: theme?.primary }} />
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60 text-lg">{subheading}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.slice(0, 8).map((f, j) => (
              <div key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary }} /> {f.title}</div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full max-w-md">
          <div className="rounded-2xl p-8" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
            <h3 className="text-xl font-bold mb-2">Let&apos;s talk</h3>
            <p className="text-sm opacity-60 mb-6">Tell us about your needs and we&apos;ll create a custom plan.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Company name" className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
              <input type="email" placeholder="Work email" className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
              <select className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <option>Team size</option><option>1-50</option><option>51-200</option><option>201-1000</option><option>1000+</option>
              </select>
              <button type="submit" className="w-full py-3 rounded-lg font-semibold text-sm text-white flex items-center justify-center gap-2" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                <MessageSquare className="w-4 h-4" /> {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
