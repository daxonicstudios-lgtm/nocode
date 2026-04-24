import type { BlockProps } from "@/blocks/types";
import { Rocket, Check } from "lucide-react";

export default function Cta091(props: BlockProps) {
  const {
    theme,
    heading = "Start your free 14-day trial",
    subheading = "No credit card required. Full access to all features.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    items = [
      { title: "Unlimited projects" },
      { title: "All integrations included" },
      { title: "Priority support" },
      { title: "Cancel anytime" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10 rounded-2xl p-8 sm:p-12" style={{ backgroundColor: theme?.muted ?? "#f0f9ff" }}>
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme?.primary ?? "#2563eb" }}>
            <Rocket className="w-4 h-4" /> SaaS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
          <p className="mt-2 text-sm opacity-60">{subheading}</p>
          <ul className="mt-5 space-y-2">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 shrink-0" style={{ color: theme?.primary ?? "#2563eb" }} />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="shrink-0">
          <a href={buttonUrl} className="inline-block px-8 py-4 rounded-xl text-white font-bold text-sm" style={{ backgroundColor: theme?.primary ?? "#2563eb" }}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
