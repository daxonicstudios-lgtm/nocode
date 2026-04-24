import type { BlockProps } from "@/blocks/types";
import { Briefcase, LineChart, Users } from "lucide-react";

const icons = [Briefcase, LineChart, Users];

export default function Features211(props: BlockProps) {
  const {
    theme,
    heading = "Strategic Solutions",
    subheading = "Enterprise-grade tools tailored for growth-focused organizations",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Business Intelligence", description: "Transform raw data into actionable insights with automated reporting dashboards." },
      { title: "Revenue Optimization", description: "Identify growth opportunities and reduce churn with predictive analytics." },
      { title: "Team Management", description: "Coordinate distributed teams with role-based access and approval workflows." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-xl">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="p-6 rounded-lg border" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <div className="w-11 h-11 rounded-md flex items-center justify-center mb-4" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#f3f4f6", color: theme?.primary || "#6366f1" }}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <a href={buttonUrl} className="inline-block mt-10 px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
