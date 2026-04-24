import type { BlockProps } from "@/blocks/types";
import { CheckCircle, Layers, Users, Rocket } from "lucide-react";

const icons = [CheckCircle, Layers, Users, Rocket];

export default function Features294(props: BlockProps) {
  const {
    theme,
    heading = "Track Your Progress",
    subheading = "Visual progress indicators keep your team aligned and motivated",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Onboarding Complete", description: "All setup steps finished and verified by your team.", value: "100" },
      { title: "Feature Adoption", description: "Core features being actively used across your organization.", value: "78" },
      { title: "Team Coverage", description: "Percentage of team members actively using the platform.", value: "92" },
      { title: "Launch Readiness", description: "All pre-launch checklist items reviewed and approved.", value: "65" },
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
            const pct = parseInt(item.value || "50", 10);
            return (
              <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <span className="text-sm font-bold" style={{ color: theme?.primary || "#6366f1" }}>{pct}%</span>
                </div>
                <div className="w-full h-2 rounded-full mb-3" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#e5e7eb" }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: theme?.primary || "#6366f1" }} />
                </div>
                <p className="text-sm opacity-60">{item.description}</p>
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
