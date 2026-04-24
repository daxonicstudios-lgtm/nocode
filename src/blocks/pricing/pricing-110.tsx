import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

export default function Pricing110(props: BlockProps) {
  const {
    theme,
    heading = "Choose What Works",
    subheading = "Flexible plans that grow with you",
    bodyText,
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Individual", value: "$8/mo", description: "Perfect for freelancers and side projects" },
      { title: "Small Team", value: "$24/mo", description: "Collaborate with up to 10 team members" },
      { title: "Organization", value: "$64/mo", description: "Enterprise features with SSO and audit logs" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-lg mx-auto">
        <p className="text-xs uppercase tracking-widest font-medium mb-2 text-center" style={{ color: theme?.primary }}>{subheading}</p>
        <h2 className="text-3xl font-bold text-center mb-10">{heading}</h2>
        <div className="space-y-2">
          {items.map((item, i) => (
            <a key={i} href={buttonUrl} className="flex items-center justify-between rounded-xl border p-4 group transition-colors hover:border-current" style={{ borderColor: theme?.accent }}>
              <div className="flex-1">
                <h3 className="font-semibold mb-0.5">{item.title}</h3>
                <p className="text-xs opacity-60">{item.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <span className="font-bold" style={{ color: theme?.primary }}>{item.value}</span>
                <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
