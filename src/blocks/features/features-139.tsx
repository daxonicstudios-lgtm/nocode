import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features139(props: BlockProps) {
  const {
    theme,
    heading = "Setup Progress",
    subheading = "Track your onboarding milestones",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Account Created", description: "Your workspace is ready to go.", value: "100" },
      { title: "Brand Kit Setup", description: "Upload logo and choose colors.", value: "75" },
      { title: "First Page Built", description: "Create your homepage layout.", value: "50" },
      { title: "Domain Connected", description: "Point your custom domain.", value: "25" },
      { title: "Analytics Enabled", description: "Start tracking visitor data.", value: "10" },
      { title: "Launched", description: "Publish your site to the world.", value: "0" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const pct = Number(item.value) || 0;
            return (
              <div key={i} className="rounded-xl border p-5" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <div className="flex items-center justify-between mb-3">
                  <Icon size={20} style={{ color: theme?.primary || "#6366f1" }} />
                  <span className="text-xs font-bold" style={{ color: theme?.primary || "#6366f1" }}>{pct}%</span>
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="opacity-60 text-xs mb-3">{item.description}</p>
                <div className="h-1.5 rounded-full" style={{ backgroundColor: theme?.accent || "#e5e7eb" }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: theme?.primary || "#6366f1" }} />
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
