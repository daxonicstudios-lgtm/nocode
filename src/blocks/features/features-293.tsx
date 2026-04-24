import type { BlockProps } from "@/blocks/types";
import { MessageSquare, Star, Zap, Shield } from "lucide-react";

const icons = [Zap, Shield, MessageSquare, Star];

export default function Features293(props: BlockProps) {
  const {
    theme,
    heading = "Loved by Our Customers",
    subheading = "Real feedback from real teams using our platform every day",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Setup", description: "Get started in minutes, not days. No engineering team required.", label: "Sarah K., Product Manager", value: "Setup time went from 2 weeks to 20 minutes." },
      { title: "Rock-Solid Uptime", description: "Enterprise-grade reliability with 99.99% uptime SLA included.", label: "James L., CTO", value: "Haven't had a single outage in 14 months." },
      { title: "Great Support", description: "Responsive, knowledgeable team that resolves issues fast.", label: "Maria R., Operations Lead", value: "Best support team I've ever worked with." },
      { title: "Worth Every Penny", description: "Flexible pricing that grows with you, from startup to enterprise.", label: "David C., Founder", value: "ROI was positive within the first month." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm opacity-60 mb-4">{item.description}</p>
                <div className="border-t pt-3 mt-3" style={{ borderColor: theme?.primary ? `${theme.primary}15` : "#f3f4f6" }}>
                  <p className="text-sm italic opacity-70">&ldquo;{item.value}&rdquo;</p>
                  <p className="text-xs mt-1 font-medium opacity-50">{item.label}</p>
                </div>
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
