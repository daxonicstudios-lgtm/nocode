import type { BlockProps } from "@/blocks/types";
import { Users, Building, Briefcase } from "lucide-react";

const icons = [Users, Building, Briefcase];

export default function Pricing113(props: BlockProps) {
  const {
    theme,
    heading = "Team-Based Pricing",
    subheading = "Pay per seat, scale as you grow",
    bodyText,
    buttonText = "Try Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Small Team", value: "$6", label: "per user/mo", description: "Up to 10 members" },
      { title: "Department", value: "$5", label: "per user/mo", description: "11–50 members" },
      { title: "Company", value: "$4", label: "per user/mo", description: "51+ members" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">{heading}</h2>
          <p className="opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 border-2" style={{ borderColor: theme?.primary }}>
                  <Icon className="w-7 h-7" style={{ color: theme?.primary }} />
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-xs opacity-60 mb-3">{item.description}</p>
                <p className="text-4xl font-black mb-0.5" style={{ color: theme?.primary }}>{item.value}</p>
                <p className="text-xs opacity-50 mb-5">{item.label}</p>
                <a href={buttonUrl} className="inline-block rounded-full px-6 py-2.5 text-sm font-medium border-2 transition-colors" style={{ borderColor: theme?.primary, color: theme?.primary }}>
                  {buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
