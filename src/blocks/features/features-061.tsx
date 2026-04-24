import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Users, Globe } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Users, Globe];

export default function Features061(props: BlockProps) {
  const {
    theme,
    heading = "Everything in One Place",
    subheading = "A platform built to do it all",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Setup", description: "Get started in under two minutes with guided onboarding and smart defaults." },
      { title: "Advanced Security", description: "Two-factor auth, role-based access, and encrypted data at rest and in transit." },
      { title: "Live Analytics", description: "See who visits, what they do, and where they come from in real time." },
      { title: "Team Collaboration", description: "Invite members, assign roles, and collaborate with shared workspaces." },
      { title: "Global Reach", description: "Multi-language support and localized content delivery for every market." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const isLarge = i === 0;
            return (
              <div
                key={i}
                className={`rounded-2xl p-6 sm:p-8 ${isLarge ? "md:row-span-2" : ""}`}
                style={{ backgroundColor: theme?.accent || "#f1f5f9" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                  <Icon size={20} color="#fff" />
                </div>
                <h3 className={`font-bold mb-2 ${isLarge ? "text-2xl" : "text-lg"}`}>{item.title}</h3>
                <p className={`opacity-60 leading-relaxed ${isLarge ? "text-base" : "text-sm"}`}>{item.description}</p>
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
