import type { BlockProps } from "@/blocks/types";
import { Gem, Flame, Fingerprint, Wrench, Bell } from "lucide-react";

const icons = [Gem, Flame, Fingerprint, Wrench, Bell];

export default function Features207(props: BlockProps) {
  const {
    theme,
    heading = "What Sets Us Apart",
    subheading = "A blend of power and simplicity you won't find elsewhere",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Premium Experience", description: "Every interaction is polished and intentional, from onboarding to daily use." },
      { title: "Blazing Performance", description: "Sub-100ms response times powered by edge computing infrastructure." },
      { title: "Unique Identity", description: "Customizable branding ensures your platform feels truly yours." },
      { title: "Developer Tools", description: "APIs, webhooks, and SDKs for seamless integration with your stack." },
      { title: "Smart Alerts", description: "Proactive notifications keep your team ahead of every issue." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-70 mb-14 max-w-xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isLarge = i % 3 === 0;
            return (
              <div key={i} className={`rounded-2xl border p-6 text-center ${isLarge ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-center" : ""}`} style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb", minHeight: isLarge ? "220px" : "auto" }}>
                <Icon size={isLarge ? 36 : 26} className="mx-auto mb-4" style={{ color: theme?.accent || "#f59e0b" }} />
                <h3 className={`font-semibold mb-2 ${isLarge ? "text-xl" : "text-lg"}`}>{item.title}</h3>
                <p className={`opacity-60 leading-relaxed ${isLarge ? "text-base" : "text-sm"}`}>{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-12 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
